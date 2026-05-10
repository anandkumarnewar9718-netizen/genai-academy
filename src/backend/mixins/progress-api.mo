import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import AccessControl "mo:caffeineai-authorization/access-control";
import ProgressTypes "../types/progress";
import Common "../types/common";
import ProgressLib "../lib/progress";

mixin (
  accessControlState : AccessControl.AccessControlState,
  progressState : ProgressLib.ProgressState,
) {
  public shared ({ caller }) func enrollInCourse(courseId : Common.CourseId) : async ProgressTypes.StudentProgress {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be logged in to enroll");
    };
    ProgressLib.enrollInCourse(progressState, caller, courseId, Time.now());
  };

  public shared ({ caller }) func markLessonComplete(courseId : Common.CourseId, lessonId : Common.LessonId) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be logged in");
    };
    ProgressLib.markLessonComplete(progressState, caller, courseId, lessonId);
  };

  public shared ({ caller }) func saveQuizScore(courseId : Common.CourseId, lessonId : Common.LessonId, score : Nat) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be logged in");
    };
    ProgressLib.saveQuizScore(progressState, caller, courseId, lessonId, score);
  };

  public query ({ caller }) func getMyProgress(courseId : Common.CourseId) : async ?ProgressTypes.StudentProgress {
    ProgressLib.getProgress(progressState, caller, courseId);
  };
};
