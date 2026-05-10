import Map "mo:core/Map";
import Array "mo:core/Array";
import Principal "mo:core/Principal";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Common "../types/common";
import ProgressTypes "../types/progress";

module {
  public type ProgressState = {
    progress : Map.Map<(Common.UserId, Common.CourseId), ProgressTypes.StudentProgress>;
  };

  func progressKeyCompare(a : (Common.UserId, Common.CourseId), b : (Common.UserId, Common.CourseId)) : Order.Order {
    let pc = Principal.compare(a.0, b.0);
    if (not pc.isEqual()) return pc;
    Nat.compare(a.1, b.1);
  };

  public func newState() : ProgressState {
    {
      progress = Map.empty<(Common.UserId, Common.CourseId), ProgressTypes.StudentProgress>();
    };
  };

  public func enrollInCourse(s : ProgressState, userId : Common.UserId, courseId : Common.CourseId, now : Common.Timestamp) : ProgressTypes.StudentProgress {
    let key = (userId, courseId);
    switch (s.progress.get(progressKeyCompare, key)) {
      case (?existing) existing;
      case null {
        let entry : ProgressTypes.StudentProgress = {
          userId;
          courseId;
          completedLessons = [];
          quizScores = [];
          lastVisitedLessonId = null;
          enrolledAt = now;
        };
        s.progress.add(progressKeyCompare, key, entry);
        entry;
      };
    };
  };

  public func getProgress(s : ProgressState, userId : Common.UserId, courseId : Common.CourseId) : ?ProgressTypes.StudentProgress {
    s.progress.get(progressKeyCompare, (userId, courseId));
  };

  public func markLessonComplete(s : ProgressState, userId : Common.UserId, courseId : Common.CourseId, lessonId : Common.LessonId) : () {
    let key = (userId, courseId);
    switch (s.progress.get(progressKeyCompare, key)) {
      case null ();
      case (?p) {
        let alreadyDone = p.completedLessons.find(func(id : Common.LessonId) : Bool { id == lessonId });
        switch alreadyDone {
          case (?_) ();
          case null {
            let updated : ProgressTypes.StudentProgress = {
              p with
              completedLessons = p.completedLessons.concat([lessonId]);
              lastVisitedLessonId = ?lessonId;
            };
            s.progress.add(progressKeyCompare, key, updated);
          };
        };
      };
    };
  };

  public func saveQuizScore(s : ProgressState, userId : Common.UserId, courseId : Common.CourseId, lessonId : Common.LessonId, score : Nat) : () {
    let key = (userId, courseId);
    switch (s.progress.get(progressKeyCompare, key)) {
      case null ();
      case (?p) {
        // Replace existing score for this lesson or append new one
        let existing = p.quizScores.find(func(e : ProgressTypes.QuizScoreEntry) : Bool { e.lessonId == lessonId });
        let newScores = switch existing {
          case (?_) {
            p.quizScores.map(
              func(e) {
                if (e.lessonId == lessonId) { { lessonId; score } } else e;
              },
            );
          };
          case null {
            p.quizScores.concat([{ lessonId; score }]);
          };
        };
        s.progress.add(progressKeyCompare, key, { p with quizScores = newScores });
      };
    };
  };
};
