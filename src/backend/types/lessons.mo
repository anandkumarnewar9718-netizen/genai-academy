import Common "common";

module {
  public type Lesson = {
    id : Common.LessonId;
    courseId : Common.CourseId;
    title : Text;
    content : Text;
    learningObjectives : [Text];
    orderIndex : Nat;
    quizId : ?Common.QuizId;
  };

  public type CreateLessonArgs = {
    courseId : Common.CourseId;
    title : Text;
    content : Text;
    learningObjectives : [Text];
    orderIndex : Nat;
  };

  public type UpdateLessonArgs = {
    id : Common.LessonId;
    courseId : Common.CourseId;
    title : Text;
    content : Text;
    learningObjectives : [Text];
    orderIndex : Nat;
    quizId : ?Common.QuizId;
  };
};
