import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ProgressBar } from "@/components/ProgressBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  useEnrollInCourse,
  useGetCourse,
  useGetLessonsForCourse,
  useGetMyProgress,
} from "@/hooks/useBackend";
import type { Difficulty } from "@/types";
import { getDifficultyColor, getDifficultyLabel } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Circle,
  PlayCircle,
  Star,
} from "lucide-react";

const difficultyBadgeColors: Record<string, string> = {
  Beginner: "bg-accent/15 text-accent border-accent/30",
  Intermediate: "bg-primary/15 text-primary border-primary/30",
  Advanced: "bg-destructive/15 text-destructive border-destructive/30",
};

export function CourseDetailPage() {
  const { courseId } = useParams({ from: "/courses/$courseId" });
  const id = BigInt(courseId);
  const { data: course, isLoading } = useGetCourse(id);
  const { data: lessons } = useGetLessonsForCourse(id);
  const { data: progress } = useGetMyProgress(id);
  const { mutate: enroll, isPending: enrolling } = useEnrollInCourse();

  if (isLoading)
    return (
      <div
        className="flex justify-center py-20"
        data-ocid="course_detail.loading_state"
      >
        <LoadingSpinner size="lg" />
      </div>
    );
  if (!course)
    return (
      <div
        className="p-8 text-center text-muted-foreground font-body"
        data-ocid="course_detail.error_state"
      >
        Course not found.
      </div>
    );

  const label = getDifficultyLabel(course.difficulty as Difficulty);
  const colorClass = getDifficultyColor(course.difficulty as Difficulty);
  const isEnrolled = !!progress;
  const completedCount = progress?.completedLessons.length ?? 0;
  const totalLessons = lessons?.length ?? 0;
  const progressPercent =
    totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const completedSet = new Set(
    (progress?.completedLessons ?? []).map((id) => id.toString()),
  );

  const lastLessonId = progress?.lastVisitedLessonId?.[0];
  const firstLesson = lessons?.[0];
  const resumeLesson = lastLessonId ?? firstLesson?.id;

  return (
    <div className="max-w-2xl" data-ocid="course_detail.page">
      {/* Back */}
      <div className="px-4 pt-6 pb-0 md:px-8">
        <Link
          to="/courses"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-5 font-body transition-colors"
          data-ocid="course_detail.back_link"
        >
          <ArrowLeft className="h-4 w-4" /> All Courses
        </Link>
      </div>

      {/* Hero header */}
      <div className="relative mx-4 md:mx-8 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/8 to-accent/15 p-6 mb-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <Badge
          variant="outline"
          className={`mb-3 text-xs border font-display font-semibold ${
            difficultyBadgeColors[label] ?? "border-border/60"
          }`}
        >
          <Star className={`h-3 w-3 mr-1 ${colorClass}`} />
          {label}
        </Badge>
        <h1 className="font-display font-bold text-xl text-foreground leading-tight mb-2">
          {course.title}
        </h1>
        <p className="text-sm text-muted-foreground font-body leading-relaxed">
          {course.description}
        </p>

        {/* Progress if enrolled */}
        {isEnrolled && (
          <div className="mt-5">
            <ProgressBar value={progressPercent} showLabel size="md" />
            <p className="text-xs text-muted-foreground font-body mt-1.5">
              {completedCount} of {totalLessons} lessons completed
            </p>
          </div>
        )}

        {/* Action button */}
        <div className="mt-5">
          {isEnrolled ? (
            resumeLesson !== undefined ? (
              <Link
                to="/courses/$courseId/lessons/$lessonId"
                params={{
                  courseId,
                  lessonId: resumeLesson.toString(),
                }}
                data-ocid="course_detail.resume_button"
              >
                <Button className="btn-touch font-display font-semibold w-full sm:w-auto">
                  <PlayCircle className="h-4 w-4 mr-2" />
                  {completedCount > 0 ? "Continue Learning" : "Start Course"}
                </Button>
              </Link>
            ) : null
          ) : (
            <Button
              className="btn-touch font-display font-semibold w-full sm:w-auto"
              onClick={() => enroll(id)}
              disabled={enrolling}
              data-ocid="course_detail.enroll_button"
            >
              {enrolling ? (
                <span className="flex items-center gap-2">
                  <LoadingSpinner size="sm" /> Enrolling...
                </span>
              ) : (
                <>
                  <PlayCircle className="h-4 w-4 mr-2" /> Enroll &amp; Start
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      <div className="px-4 md:px-8 pb-8 space-y-6">
        {/* Learning objectives */}
        {course.learningObjectives?.length > 0 && (
          <div className="p-4 bg-muted/40 rounded-2xl">
            <h2 className="font-display font-semibold text-sm text-foreground mb-3">
              What you'll learn
            </h2>
            <ul className="space-y-2.5">
              {course.learningObjectives.map((obj, i) => (
                <li
                  key={obj}
                  data-ocid={`course_detail.objective.${i + 1}`}
                  className="flex items-start gap-2.5 text-sm text-foreground font-body"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Lesson list */}
        <div data-ocid="course_detail.lessons_list">
          <h2 className="font-display font-semibold text-base text-foreground mb-3">
            Lessons ({totalLessons})
          </h2>
          {!lessons || lessons.length === 0 ? (
            <div
              data-ocid="course_detail.empty_state"
              className="text-center py-8 text-muted-foreground text-sm font-body"
            >
              No lessons available yet.
            </div>
          ) : (
            <div className="space-y-2">
              {lessons.map((lesson, i) => {
                const done = completedSet.has(lesson.id.toString());
                return (
                  <Link
                    key={lesson.id.toString()}
                    to="/courses/$courseId/lessons/$lessonId"
                    params={{ courseId, lessonId: lesson.id.toString() }}
                    data-ocid={`course_detail.lesson.${i + 1}`}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all group ${
                      done
                        ? "bg-accent/8 border-accent/25 hover:border-accent/50"
                        : "bg-card border-border/60 hover:border-primary/30 hover:bg-primary/5"
                    }`}
                  >
                    {/* Status icon */}
                    {done ? (
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    ) : (
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs font-display font-bold shrink-0">
                        {i + 1}
                      </div>
                    )}
                    <span
                      className={`flex-1 text-sm font-body transition-colors ${
                        done
                          ? "text-accent line-through decoration-accent/50"
                          : "text-foreground group-hover:text-primary"
                      }`}
                    >
                      {lesson.title}
                    </span>
                    {done ? (
                      <Circle className="h-3.5 w-3.5 text-accent/50" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
