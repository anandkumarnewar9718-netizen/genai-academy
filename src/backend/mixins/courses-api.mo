import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import CourseTypes "../types/courses";
import LessonTypes "../types/lessons";
import Common "../types/common";
import CoursesLib "../lib/courses";
import LessonsLib "../lib/lessons";

mixin (
  accessControlState : AccessControl.AccessControlState,
  coursesState : CoursesLib.CoursesState,
  lessonsState : LessonsLib.LessonsState,
) {
  // --- Public / student queries ---

  public query func listCourses() : async [CourseTypes.Course] {
    CoursesLib.listCourses(coursesState);
  };

  public query func getCourse(id : Common.CourseId) : async ?CourseTypes.Course {
    CoursesLib.getCourse(coursesState, id);
  };

  public query func getLessonsForCourse(courseId : Common.CourseId) : async [LessonTypes.Lesson] {
    LessonsLib.getLessonsForCourse(lessonsState, courseId);
  };

  public query func getLesson(id : Common.LessonId) : async ?LessonTypes.Lesson {
    LessonsLib.getLesson(lessonsState, id);
  };

  // --- Admin operations ---

  public shared ({ caller }) func createCourse(args : CourseTypes.CreateCourseArgs) : async CourseTypes.Course {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can create courses");
    };
    CoursesLib.createCourse(coursesState, args);
  };

  public shared ({ caller }) func updateCourse(args : CourseTypes.UpdateCourseArgs) : async ?CourseTypes.Course {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can update courses");
    };
    CoursesLib.updateCourse(coursesState, args);
  };

  public shared ({ caller }) func deleteCourse(id : Common.CourseId) : async Bool {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can delete courses");
    };
    CoursesLib.deleteCourse(coursesState, id);
  };

  public shared ({ caller }) func createLesson(args : LessonTypes.CreateLessonArgs) : async LessonTypes.Lesson {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can create lessons");
    };
    let lesson = LessonsLib.createLesson(lessonsState, args);
    CoursesLib.appendLessonToCourse(coursesState, args.courseId, lesson.id);
    lesson;
  };

  public shared ({ caller }) func updateLesson(args : LessonTypes.UpdateLessonArgs) : async ?LessonTypes.Lesson {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can update lessons");
    };
    LessonsLib.updateLesson(lessonsState, args);
  };

  public shared ({ caller }) func deleteLesson(id : Common.LessonId) : async Bool {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can delete lessons");
    };
    switch (LessonsLib.getLesson(lessonsState, id)) {
      case null false;
      case (?lesson) {
        CoursesLib.removeLessonFromCourse(coursesState, lesson.courseId, id);
        LessonsLib.deleteLesson(lessonsState, id);
      };
    };
  };
};
