module {
  public type UserId = Principal;
  public type Timestamp = Int;
  public type CourseId = Nat;
  public type LessonId = Nat;
  public type QuizId = Nat;

  public type Difficulty = {
    #Beginner;
    #Intermediate;
    #Advanced;
  };
};
