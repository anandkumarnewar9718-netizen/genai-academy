import Common "common";

module {
  public type Course = {
    id : Common.CourseId;
    title : Text;
    description : Text;
    difficulty : Common.Difficulty;
    thumbnail : Text;
    learningObjectives : [Text];
    lessonOrder : [Common.LessonId];
  };

  public type CreateCourseArgs = {
    title : Text;
    description : Text;
    difficulty : Common.Difficulty;
    thumbnail : Text;
    learningObjectives : [Text];
  };

  public type UpdateCourseArgs = {
    id : Common.CourseId;
    title : Text;
    description : Text;
    difficulty : Common.Difficulty;
    thumbnail : Text;
    learningObjectives : [Text];
  };
};
