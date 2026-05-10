import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import CoursesLib "lib/courses";
import LessonsLib "lib/lessons";
import QuizzesLib "lib/quizzes";
import ProgressLib "lib/progress";
import SeedLib "lib/seed";
import CoursesMixin "mixins/courses-api";
import QuizzesMixin "mixins/quizzes-api";
import ProgressMixin "mixins/progress-api";

actor {
  // --- Authorization state ---
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // --- Domain state ---
  let coursesState = CoursesLib.newState();
  let lessonsState = LessonsLib.newState();
  let quizzesState = QuizzesLib.newState();
  let progressState = ProgressLib.newState();

  // --- Seed sample data on init ---
  SeedLib.seedSampleData(coursesState, lessonsState, quizzesState);

  // --- Mixins ---
  include CoursesMixin(accessControlState, coursesState, lessonsState);
  include QuizzesMixin(accessControlState, quizzesState, lessonsState);
  include ProgressMixin(accessControlState, progressState);
};
