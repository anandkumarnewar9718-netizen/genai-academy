import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Common "../types/common";
import QuizTypes "../types/quizzes";

module {
  public type QuizzesState = {
    quizzes : Map.Map<Common.QuizId, QuizTypes.Quiz>;
    state : { var nextQuizId : Nat };
  };

  public func newState() : QuizzesState {
    {
      quizzes = Map.empty<Common.QuizId, QuizTypes.Quiz>();
      state = { var nextQuizId = 1 };
    };
  };

  public func getQuizForLesson(s : QuizzesState, lessonId : Common.LessonId) : ?QuizTypes.Quiz {
    s.quizzes.values().find(func(q : QuizTypes.Quiz) : Bool { q.lessonId == lessonId });
  };

  public func getQuiz(s : QuizzesState, id : Common.QuizId) : ?QuizTypes.Quiz {
    s.quizzes.get(id);
  };

  public func createQuiz(s : QuizzesState, args : QuizTypes.CreateQuizArgs) : QuizTypes.Quiz {
    let id = s.state.nextQuizId;
    s.state.nextQuizId += 1;
    let quiz : QuizTypes.Quiz = {
      id;
      lessonId = args.lessonId;
      title = args.title;
      questions = args.questions;
    };
    s.quizzes.add(id, quiz);
    quiz;
  };

  public func updateQuiz(s : QuizzesState, args : QuizTypes.UpdateQuizArgs) : ?QuizTypes.Quiz {
    switch (s.quizzes.get(args.id)) {
      case null null;
      case (?_) {
        let updated : QuizTypes.Quiz = {
          id = args.id;
          lessonId = args.lessonId;
          title = args.title;
          questions = args.questions;
        };
        s.quizzes.add(args.id, updated);
        ?updated;
      };
    };
  };

  public func deleteQuiz(s : QuizzesState, id : Common.QuizId) : Bool {
    switch (s.quizzes.get(id)) {
      case null false;
      case (?_) {
        s.quizzes.remove(id);
        true;
      };
    };
  };
};
