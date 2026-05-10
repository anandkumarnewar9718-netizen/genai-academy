import Common "common";

module {
  public type Question = {
    questionText : Text;
    options : [Text];
    correctAnswerIndex : Nat;
    explanation : Text;
  };

  public type Quiz = {
    id : Common.QuizId;
    lessonId : Common.LessonId;
    title : Text;
    questions : [Question];
  };

  public type CreateQuizArgs = {
    lessonId : Common.LessonId;
    title : Text;
    questions : [Question];
  };

  public type UpdateQuizArgs = {
    id : Common.QuizId;
    lessonId : Common.LessonId;
    title : Text;
    questions : [Question];
  };
};
