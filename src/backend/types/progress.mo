import Common "common";

module {
  public type QuizScoreEntry = {
    lessonId : Common.LessonId;
    score : Nat;
  };

  public type StudentProgress = {
    userId : Common.UserId;
    courseId : Common.CourseId;
    completedLessons : [Common.LessonId];
    quizScores : [QuizScoreEntry];
    lastVisitedLessonId : ?Common.LessonId;
    enrolledAt : Common.Timestamp;
  };

  public type ProgressKey = (Common.UserId, Common.CourseId);
};
