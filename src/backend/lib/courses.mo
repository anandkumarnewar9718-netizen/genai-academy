import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Common "../types/common";
import CourseTypes "../types/courses";

module {
  public type CoursesState = {
    courses : Map.Map<Common.CourseId, CourseTypes.Course>;
    state : { var nextCourseId : Nat };
  };

  public func newState() : CoursesState {
    {
      courses = Map.empty<Common.CourseId, CourseTypes.Course>();
      state = { var nextCourseId = 1 };
    };
  };

  public func listCourses(s : CoursesState) : [CourseTypes.Course] {
    s.courses.values().toArray();
  };

  public func getCourse(s : CoursesState, id : Common.CourseId) : ?CourseTypes.Course {
    s.courses.get(id);
  };

  public func createCourse(s : CoursesState, args : CourseTypes.CreateCourseArgs) : CourseTypes.Course {
    let id = s.state.nextCourseId;
    s.state.nextCourseId += 1;
    let course : CourseTypes.Course = {
      id;
      title = args.title;
      description = args.description;
      difficulty = args.difficulty;
      thumbnail = args.thumbnail;
      learningObjectives = args.learningObjectives;
      lessonOrder = [];
    };
    s.courses.add(id, course);
    course;
  };

  public func updateCourse(s : CoursesState, args : CourseTypes.UpdateCourseArgs) : ?CourseTypes.Course {
    switch (s.courses.get(args.id)) {
      case null null;
      case (?existing) {
        let updated : CourseTypes.Course = {
          existing with
          title = args.title;
          description = args.description;
          difficulty = args.difficulty;
          thumbnail = args.thumbnail;
          learningObjectives = args.learningObjectives;
        };
        s.courses.add(args.id, updated);
        ?updated;
      };
    };
  };

  public func deleteCourse(s : CoursesState, id : Common.CourseId) : Bool {
    switch (s.courses.get(id)) {
      case null false;
      case (?_) {
        s.courses.remove(id);
        true;
      };
    };
  };

  public func appendLessonToCourse(s : CoursesState, courseId : Common.CourseId, lessonId : Common.LessonId) : () {
    switch (s.courses.get(courseId)) {
      case null ();
      case (?course) {
        let updated : CourseTypes.Course = {
          course with
          lessonOrder = course.lessonOrder.concat([lessonId]);
        };
        s.courses.add(courseId, updated);
      };
    };
  };

  public func removeLessonFromCourse(s : CoursesState, courseId : Common.CourseId, lessonId : Common.LessonId) : () {
    switch (s.courses.get(courseId)) {
      case null ();
      case (?course) {
        let updated : CourseTypes.Course = {
          course with
          lessonOrder = course.lessonOrder.filter(func(id : Common.LessonId) : Bool { id != lessonId });
        };
        s.courses.add(courseId, updated);
      };
    };
  };
};
