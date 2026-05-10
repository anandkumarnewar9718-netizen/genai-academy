import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Common "../types/common";
import LessonTypes "../types/lessons";

module {
  public type LessonsState = {
    lessons : Map.Map<Common.LessonId, LessonTypes.Lesson>;
    state : { var nextLessonId : Nat };
  };

  public func newState() : LessonsState {
    {
      lessons = Map.empty<Common.LessonId, LessonTypes.Lesson>();
      state = { var nextLessonId = 1 };
    };
  };

  public func getLessonsForCourse(s : LessonsState, courseId : Common.CourseId) : [LessonTypes.Lesson] {
    let filtered = s.lessons.values().filter(
      func(l : LessonTypes.Lesson) : Bool { l.courseId == courseId },
    );
    let arr = filtered.toArray();
    arr.sort(func(a : LessonTypes.Lesson, b : LessonTypes.Lesson) : { #less; #equal; #greater } {
      if (a.orderIndex < b.orderIndex) #less
      else if (a.orderIndex > b.orderIndex) #greater
      else #equal;
    });
  };

  public func getLesson(s : LessonsState, id : Common.LessonId) : ?LessonTypes.Lesson {
    s.lessons.get(id);
  };

  public func createLesson(s : LessonsState, args : LessonTypes.CreateLessonArgs) : LessonTypes.Lesson {
    let id = s.state.nextLessonId;
    s.state.nextLessonId += 1;
    let lesson : LessonTypes.Lesson = {
      id;
      courseId = args.courseId;
      title = args.title;
      content = args.content;
      learningObjectives = args.learningObjectives;
      orderIndex = args.orderIndex;
      quizId = null;
    };
    s.lessons.add(id, lesson);
    lesson;
  };

  public func updateLesson(s : LessonsState, args : LessonTypes.UpdateLessonArgs) : ?LessonTypes.Lesson {
    switch (s.lessons.get(args.id)) {
      case null null;
      case (?_) {
        let updated : LessonTypes.Lesson = {
          id = args.id;
          courseId = args.courseId;
          title = args.title;
          content = args.content;
          learningObjectives = args.learningObjectives;
          orderIndex = args.orderIndex;
          quizId = args.quizId;
        };
        s.lessons.add(args.id, updated);
        ?updated;
      };
    };
  };

  public func deleteLesson(s : LessonsState, id : Common.LessonId) : Bool {
    switch (s.lessons.get(id)) {
      case null false;
      case (?_) {
        s.lessons.remove(id);
        true;
      };
    };
  };

  public func setQuizId(s : LessonsState, lessonId : Common.LessonId, quizId : ?Common.QuizId) : () {
    switch (s.lessons.get(lessonId)) {
      case null ();
      case (?lesson) {
        s.lessons.add(lessonId, { lesson with quizId });
      };
    };
  };
};
