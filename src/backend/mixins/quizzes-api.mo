import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import QuizTypes "../types/quizzes";
import Common "../types/common";
import QuizzesLib "../lib/quizzes";
import LessonsLib "../lib/lessons";

mixin (
  accessControlState : AccessControl.AccessControlState,
  quizzesState : QuizzesLib.QuizzesState,
  lessonsState : LessonsLib.LessonsState,
) {
  public query func getQuizForLesson(lessonId : Common.LessonId) : async ?QuizTypes.Quiz {
    QuizzesLib.getQuizForLesson(quizzesState, lessonId);
  };

  public shared ({ caller }) func createQuiz(args : QuizTypes.CreateQuizArgs) : async QuizTypes.Quiz {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can create quizzes");
    };
    let quiz = QuizzesLib.createQuiz(quizzesState, args);
    LessonsLib.setQuizId(lessonsState, args.lessonId, ?quiz.id);
    quiz;
  };

  public shared ({ caller }) func updateQuiz(args : QuizTypes.UpdateQuizArgs) : async ?QuizTypes.Quiz {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can update quizzes");
    };
    QuizzesLib.updateQuiz(quizzesState, args);
  };

  public shared ({ caller }) func deleteQuiz(id : Common.QuizId) : async Bool {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can delete quizzes");
    };
    switch (QuizzesLib.getQuiz(quizzesState, id)) {
      case null false;
      case (?quiz) {
        LessonsLib.setQuizId(lessonsState, quiz.lessonId, null);
        QuizzesLib.deleteQuiz(quizzesState, id);
      };
    };
  };
};
