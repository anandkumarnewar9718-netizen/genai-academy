import { c as createLucideIcon, m as useAuth, r as reactExports, j as jsxRuntimeExports, n as LayoutDashboard, B as Button, o as LogIn, b as LoadingSpinner, d as BookOpen, L as Link } from "./index-CdpgodV-.js";
import { C as Card, a as CardContent, b as CourseCard } from "./CourseCard-Be0OU-1h.js";
import { P as ProgressBar } from "./ProgressBar-Cbdn_gf9.js";
import { B as Badge } from "./index-M6EAxOHP.js";
import { S as Skeleton, T as Target } from "./skeleton-DPjjVmHm.js";
import { u as useListCourses, c as useGetMyProgress } from "./useBackend-BZbCDEVN.js";
import { G as GraduationCap } from "./graduation-cap-SxGQfX4k.js";
import { T as TrendingUp } from "./trending-up-BV91ak7V.js";
import "./backend-DtJ819ci.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]];
const Play = createLucideIcon("play", __iconNode);
function CourseProgressRow({ course, index }) {
  var _a, _b;
  const { data: progress } = useGetMyProgress(course.id);
  const total = Number(((_a = course.lessonOrder) == null ? void 0 : _a.length) ?? 0);
  const completed = Number(((_b = progress == null ? void 0 : progress.completedLessons) == null ? void 0 : _b.length) ?? 0);
  const pct = total > 0 ? Math.round(completed / total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CourseCard, { course, progress: pct, index });
}
function StatCard({ icon, label, value, ocid }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: "bg-card border-border/60 shadow-card flex-1 min-w-0",
      "data-ocid": ocid,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body truncate", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-lg text-foreground leading-tight", children: value })
        ] })
      ] })
    }
  );
}
function useAllProgress(courses) {
  const ids = reactExports.useMemo(
    () => Array.from({ length: 6 }, (_, i) => {
      var _a;
      return (_a = courses == null ? void 0 : courses[i]) == null ? void 0 : _a.id;
    }),
    [courses]
  );
  const p0 = useGetMyProgress(ids[0]);
  const p1 = useGetMyProgress(ids[1]);
  const p2 = useGetMyProgress(ids[2]);
  const p3 = useGetMyProgress(ids[3]);
  const p4 = useGetMyProgress(ids[4]);
  const p5 = useGetMyProgress(ids[5]);
  return reactExports.useMemo(() => {
    const raw = [p0, p1, p2, p3, p4, p5];
    const count = Math.min((courses == null ? void 0 : courses.length) ?? 0, 6);
    return raw.slice(0, count).map((q) => q.data ?? null);
  }, [p0, p1, p2, p3, p4, p5, courses]);
}
function ResumeCard({ courses, progressList }) {
  const resumeEntry = reactExports.useMemo(() => {
    var _a, _b;
    for (let i = 0; i < courses.length; i++) {
      const prog = progressList[i];
      const course2 = courses[i];
      if (prog && prog.lastVisitedLessonId.length > 0 && course2) {
        const lessonId2 = prog.lastVisitedLessonId[0];
        const total2 = Number(((_a = course2.lessonOrder) == null ? void 0 : _a.length) ?? 0);
        const completed2 = Number(((_b = prog.completedLessons) == null ? void 0 : _b.length) ?? 0);
        return { course: course2, lessonId: lessonId2, completed: completed2, total: total2 };
      }
    }
    return null;
  }, [courses, progressList]);
  if (!resumeEntry) return null;
  const { course, lessonId, completed, total } = resumeEntry;
  const pct = total > 0 ? Math.round(completed / total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: "bg-gradient-to-br from-primary/10 via-card to-accent/5 border-primary/20 shadow-card mb-6",
      "data-ocid": "dashboard.resume_card",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-display font-semibold uppercase tracking-wide mb-0.5", children: "Continue Where You Left Off" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-card-foreground line-clamp-2 leading-snug", children: course.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-body mt-1", children: [
              completed,
              "/",
              total,
              " lessons complete"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-5 w-5 text-primary" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { value: pct, showLabel: true, size: "md", className: "mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/courses/$courseId/lessons/$lessonId",
            params: {
              courseId: course.id.toString(),
              lessonId: (lessonId == null ? void 0 : lessonId.toString()) ?? "1"
            },
            "data-ocid": "dashboard.resume_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "w-full btn-touch font-display font-semibold",
                variant: "default",
                size: "sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4 mr-2" }),
                  "Resume Lesson"
                ]
              }
            )
          }
        )
      ] })
    }
  );
}
function DashboardPage() {
  const {
    isAuthenticated,
    isLoading: authLoading,
    login,
    principal
  } = useAuth();
  const { data: courses, isLoading: coursesLoading } = useListCourses();
  const progressList = useAllProgress(courses);
  const identity = reactExports.useMemo(() => {
    if (!principal) return "Learner";
    return `${principal.slice(0, 5)}…${principal.slice(-3)}`;
  }, [principal]);
  const stats = reactExports.useMemo(() => {
    var _a;
    if (!courses || courses.length === 0) {
      return { enrolled: 0, lessonsCompleted: 0, avgScore: null };
    }
    let totalLessons = 0;
    let totalScore = 0;
    let quizCount = 0;
    for (let i = 0; i < courses.length; i++) {
      const prog = progressList[i];
      if (!prog) continue;
      totalLessons += Number(((_a = prog.completedLessons) == null ? void 0 : _a.length) ?? 0);
      for (const qs of prog.quizScores ?? []) {
        totalScore += Number(qs.score);
        quizCount++;
      }
    }
    return {
      enrolled: courses.length,
      lessonsCompleted: totalLessons,
      avgScore: quizCount > 0 ? Math.round(totalScore / quizCount) : null
    };
  }, [courses, progressList]);
  if (!authLoading && !isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center min-h-[70vh] gap-6 px-6 text-center",
        "data-ocid": "dashboard.unauthenticated_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "h-10 w-10 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground", children: "Your Learning Dashboard" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body max-w-xs leading-relaxed", children: "Sign in to track your progress, resume courses, and view your quiz scores." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              className: "btn-touch font-display font-semibold px-8",
              onClick: login,
              "data-ocid": "dashboard.login_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-4 w-4 mr-2" }),
                "Sign In to Continue"
              ]
            }
          )
        ]
      }
    );
  }
  if (authLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex justify-center items-center min-h-[60vh]",
        "data-ocid": "dashboard.loading_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { size: "lg", label: "Loading dashboard…" })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "px-4 py-6 md:px-8 max-w-4xl mx-auto",
      "data-ocid": "dashboard.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-body", children: [
              "Signed in as",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "text-xs font-mono ml-1 align-middle",
                  "data-ocid": "dashboard.identity_badge",
                  children: identity
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl text-foreground", children: "Welcome back, Learner" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body mt-0.5", children: "Pick up where you left off or explore new courses." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mb-6", "data-ocid": "dashboard.stats_section", children: coursesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [1, 2, 3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 flex-1 rounded-xl" }, n)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 overflow-x-auto pb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5 text-primary" }),
              label: "Enrolled",
              value: stats.enrolled,
              ocid: "dashboard.stat.enrolled"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5 text-primary" }),
              label: "Completed",
              value: stats.lessonsCompleted,
              ocid: "dashboard.stat.lessons"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-primary" }),
              label: "Avg Score",
              value: stats.avgScore !== null ? `${stats.avgScore}%` : "—",
              ocid: "dashboard.stat.score"
            }
          )
        ] }) }),
        !coursesLoading && courses && courses.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ResumeCard, { courses, progressList }),
        coursesLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
            "data-ocid": "dashboard.courses_loading_state",
            children: [1, 2, 3, 4].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-56 rounded-xl" }, n))
          }
        ),
        !coursesLoading && courses && courses.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "bg-muted/40 border-dashed border-border text-center py-14 px-6",
            "data-ocid": "dashboard.empty_state",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col items-center gap-4 p-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-8 w-8 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-foreground", children: "No courses enrolled yet" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body max-w-xs", children: "Browse our Gen AI curriculum and start your first course today." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/courses", "data-ocid": "dashboard.browse_courses_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "btn-touch font-display font-semibold px-8", children: "Browse Courses" }) })
            ] })
          }
        ),
        !coursesLoading && courses && courses.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "dashboard.courses_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg text-foreground", children: "My Courses" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/courses",
                className: "text-xs text-primary font-display font-semibold hover:underline",
                "data-ocid": "dashboard.browse_all_link",
                children: "Browse All"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: courses.map((course, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CourseProgressRow,
            {
              course,
              index: i
            },
            course.id.toString()
          )) })
        ] })
      ]
    }
  );
}
export {
  DashboardPage
};
