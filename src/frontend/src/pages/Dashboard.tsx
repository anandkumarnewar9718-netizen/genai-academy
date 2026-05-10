import { CourseCard } from "@/components/CourseCard";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ProgressBar } from "@/components/ProgressBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/useAuth";
import { useGetMyProgress, useListCourses } from "@/hooks/useBackend";
import type { Course, CourseId, StudentProgress } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  LogIn,
  Play,
  Target,
  TrendingUp,
} from "lucide-react";
import { useMemo } from "react";

// ─── Per-course progress loader ─────────────────────────────────────────────

interface CourseProgressRowProps {
  course: Course;
  index: number;
}

function CourseProgressRow({ course, index }: CourseProgressRowProps) {
  const { data: progress } = useGetMyProgress(course.id);
  const total = Number(course.lessonOrder?.length ?? 0);
  const completed = Number(progress?.completedLessons?.length ?? 0);
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  return <CourseCard course={course} progress={pct} index={index} />;
}

// ─── Stats card ─────────────────────────────────────────────────────────────

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  ocid: string;
}

function StatCard({ icon, label, value, ocid }: StatCardProps) {
  return (
    <Card
      className="bg-card border-border/60 shadow-card flex-1 min-w-0"
      data-ocid={ocid}
    >
      <CardContent className="p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground font-body truncate">
            {label}
          </p>
          <p className="font-display font-bold text-lg text-foreground leading-tight">
            {value}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Aggregate hook — fetches progress for all courses ───────────────────────

function useAllProgress(courses: Course[] | undefined) {
  const ids: (CourseId | undefined)[] = useMemo(
    () => Array.from({ length: 6 }, (_, i) => courses?.[i]?.id),
    [courses],
  );
  const p0 = useGetMyProgress(ids[0]);
  const p1 = useGetMyProgress(ids[1]);
  const p2 = useGetMyProgress(ids[2]);
  const p3 = useGetMyProgress(ids[3]);
  const p4 = useGetMyProgress(ids[4]);
  const p5 = useGetMyProgress(ids[5]);

  return useMemo(() => {
    const raw = [p0, p1, p2, p3, p4, p5];
    const count = Math.min(courses?.length ?? 0, 6);
    return raw.slice(0, count).map((q) => q.data ?? null);
  }, [p0, p1, p2, p3, p4, p5, courses]);
}

// ─── Resume card ─────────────────────────────────────────────────────────────

interface ResumeCardProps {
  courses: Course[];
  progressList: (StudentProgress | null)[];
}

function ResumeCard({ courses, progressList }: ResumeCardProps) {
  const resumeEntry = useMemo(() => {
    for (let i = 0; i < courses.length; i++) {
      const prog = progressList[i];
      const course = courses[i];
      if (prog && prog.lastVisitedLessonId.length > 0 && course) {
        const lessonId = prog.lastVisitedLessonId[0];
        const total = Number(course.lessonOrder?.length ?? 0);
        const completed = Number(prog.completedLessons?.length ?? 0);
        return { course, lessonId, completed, total };
      }
    }
    return null;
  }, [courses, progressList]);

  if (!resumeEntry) return null;

  const { course, lessonId, completed, total } = resumeEntry;
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <Card
      className="bg-gradient-to-br from-primary/10 via-card to-accent/5 border-primary/20 shadow-card mb-6"
      data-ocid="dashboard.resume_card"
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-primary font-display font-semibold uppercase tracking-wide mb-0.5">
              Continue Where You Left Off
            </p>
            <h3 className="font-display font-bold text-base text-card-foreground line-clamp-2 leading-snug">
              {course.title}
            </h3>
            <p className="text-xs text-muted-foreground font-body mt-1">
              {completed}/{total} lessons complete
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Play className="h-5 w-5 text-primary" />
          </div>
        </div>

        <ProgressBar value={pct} showLabel size="md" className="mb-3" />

        <Link
          to="/courses/$courseId/lessons/$lessonId"
          params={{
            courseId: course.id.toString(),
            lessonId: lessonId?.toString() ?? "1",
          }}
          data-ocid="dashboard.resume_button"
        >
          <Button
            className="w-full btn-touch font-display font-semibold"
            variant="default"
            size="sm"
          >
            <Play className="h-4 w-4 mr-2" />
            Resume Lesson
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

// ─── Main dashboard ───────────────────────────────────────────────────────────

export function DashboardPage() {
  const {
    isAuthenticated,
    isLoading: authLoading,
    login,
    principal,
  } = useAuth();
  const { data: courses, isLoading: coursesLoading } = useListCourses();
  const progressList = useAllProgress(courses);

  // Derive abbreviated identity label
  const identity = useMemo(() => {
    if (!principal) return "Learner";
    return `${principal.slice(0, 5)}…${principal.slice(-3)}`;
  }, [principal]);

  // Compute summary stats
  const stats = useMemo(() => {
    if (!courses || courses.length === 0) {
      return { enrolled: 0, lessonsCompleted: 0, avgScore: null };
    }
    let totalLessons = 0;
    let totalScore = 0;
    let quizCount = 0;

    for (let i = 0; i < courses.length; i++) {
      const prog = progressList[i];
      if (!prog) continue;
      totalLessons += Number(prog.completedLessons?.length ?? 0);
      for (const qs of prog.quizScores ?? []) {
        totalScore += Number(qs.score);
        quizCount++;
      }
    }

    return {
      enrolled: courses.length,
      lessonsCompleted: totalLessons,
      avgScore: quizCount > 0 ? Math.round(totalScore / quizCount) : null,
    };
  }, [courses, progressList]);

  // Unauthenticated state
  if (!authLoading && !isAuthenticated) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-[70vh] gap-6 px-6 text-center"
        data-ocid="dashboard.unauthenticated_state"
      >
        <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center">
          <LayoutDashboard className="h-10 w-10 text-primary" />
        </div>
        <div className="space-y-2">
          <h2 className="font-display font-bold text-2xl text-foreground">
            Your Learning Dashboard
          </h2>
          <p className="text-sm text-muted-foreground font-body max-w-xs leading-relaxed">
            Sign in to track your progress, resume courses, and view your quiz
            scores.
          </p>
        </div>
        <Button
          className="btn-touch font-display font-semibold px-8"
          onClick={login}
          data-ocid="dashboard.login_button"
        >
          <LogIn className="h-4 w-4 mr-2" />
          Sign In to Continue
        </Button>
      </div>
    );
  }

  // Auth loading
  if (authLoading) {
    return (
      <div
        className="flex justify-center items-center min-h-[60vh]"
        data-ocid="dashboard.loading_state"
      >
        <LoadingSpinner size="lg" label="Loading dashboard…" />
      </div>
    );
  }

  return (
    <div
      className="px-4 py-6 md:px-8 max-w-4xl mx-auto"
      data-ocid="dashboard.page"
    >
      {/* ── Welcome header ── */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <GraduationCap className="h-5 w-5 text-primary shrink-0" />
          <p className="text-xs text-muted-foreground font-body">
            Signed in as{" "}
            <Badge
              variant="secondary"
              className="text-xs font-mono ml-1 align-middle"
              data-ocid="dashboard.identity_badge"
            >
              {identity}
            </Badge>
          </p>
        </div>
        <h1 className="font-display font-bold text-2xl text-foreground">
          Welcome back, Learner
        </h1>
        <p className="text-sm text-muted-foreground font-body mt-0.5">
          Pick up where you left off or explore new courses.
        </p>
      </div>

      {/* ── Summary stats ── */}
      <section className="mb-6" data-ocid="dashboard.stats_section">
        {coursesLoading ? (
          <div className="flex gap-3">
            {[1, 2, 3].map((n) => (
              <Skeleton key={n} className="h-16 flex-1 rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="flex gap-3 overflow-x-auto pb-1">
            <StatCard
              icon={<BookOpen className="h-5 w-5 text-primary" />}
              label="Enrolled"
              value={stats.enrolled}
              ocid="dashboard.stat.enrolled"
            />
            <StatCard
              icon={<Target className="h-5 w-5 text-primary" />}
              label="Completed"
              value={stats.lessonsCompleted}
              ocid="dashboard.stat.lessons"
            />
            <StatCard
              icon={<TrendingUp className="h-5 w-5 text-primary" />}
              label="Avg Score"
              value={stats.avgScore !== null ? `${stats.avgScore}%` : "—"}
              ocid="dashboard.stat.score"
            />
          </div>
        )}
      </section>

      {/* ── Resume card ── */}
      {!coursesLoading && courses && courses.length > 0 && (
        <ResumeCard courses={courses} progressList={progressList} />
      )}

      {/* ── Courses loading ── */}
      {coursesLoading && (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          data-ocid="dashboard.courses_loading_state"
        >
          {[1, 2, 3, 4].map((n) => (
            <Skeleton key={n} className="h-56 rounded-xl" />
          ))}
        </div>
      )}

      {/* ── Empty state ── */}
      {!coursesLoading && courses && courses.length === 0 && (
        <Card
          className="bg-muted/40 border-dashed border-border text-center py-14 px-6"
          data-ocid="dashboard.empty_state"
        >
          <CardContent className="flex flex-col items-center gap-4 p-0">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-semibold text-lg text-foreground">
                No courses enrolled yet
              </h3>
              <p className="text-sm text-muted-foreground font-body max-w-xs">
                Browse our Gen AI curriculum and start your first course today.
              </p>
            </div>
            <Link to="/courses" data-ocid="dashboard.browse_courses_button">
              <Button className="btn-touch font-display font-semibold px-8">
                Browse Courses
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* ── Enrolled courses grid ── */}
      {!coursesLoading && courses && courses.length > 0 && (
        <section data-ocid="dashboard.courses_section">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-lg text-foreground">
              My Courses
            </h2>
            <Link
              to="/courses"
              className="text-xs text-primary font-display font-semibold hover:underline"
              data-ocid="dashboard.browse_all_link"
            >
              Browse All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {courses.map((course, i) => (
              <CourseProgressRow
                key={course.id.toString()}
                course={course}
                index={i}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
