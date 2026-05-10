import { c as createLucideIcon, u as useParams, j as jsxRuntimeExports, b as LoadingSpinner, L as Link, B as Button } from "./index-CdpgodV-.js";
import { P as ProgressBar } from "./ProgressBar-Cbdn_gf9.js";
import { g as getDifficultyLabel, a as getDifficultyColor, B as Badge } from "./index-M6EAxOHP.js";
import { a as useGetCourse, b as useGetLessonsForCourse, c as useGetMyProgress, d as useEnrollInCourse } from "./useBackend-BZbCDEVN.js";
import { A as ArrowLeft } from "./arrow-left-lF_b3XHZ.js";
import { C as CircleCheck } from "./circle-check-HfH6VKW7.js";
import { C as Circle } from "./circle-BC6KaHAX.js";
import { C as ChevronRight } from "./chevron-right-CuXHEJzZ.js";
import "./backend-DtJ819ci.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }]
];
const CirclePlay = createLucideIcon("circle-play", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const difficultyBadgeColors = {
  Beginner: "bg-accent/15 text-accent border-accent/30",
  Intermediate: "bg-primary/15 text-primary border-primary/30",
  Advanced: "bg-destructive/15 text-destructive border-destructive/30"
};
function CourseDetailPage() {
  var _a, _b;
  const { courseId } = useParams({ from: "/courses/$courseId" });
  const id = BigInt(courseId);
  const { data: course, isLoading } = useGetCourse(id);
  const { data: lessons } = useGetLessonsForCourse(id);
  const { data: progress } = useGetMyProgress(id);
  const { mutate: enroll, isPending: enrolling } = useEnrollInCourse();
  if (isLoading)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex justify-center py-20",
        "data-ocid": "course_detail.loading_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { size: "lg" })
      }
    );
  if (!course)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "p-8 text-center text-muted-foreground font-body",
        "data-ocid": "course_detail.error_state",
        children: "Course not found."
      }
    );
  const label = getDifficultyLabel(course.difficulty);
  const colorClass = getDifficultyColor(course.difficulty);
  const isEnrolled = !!progress;
  const completedCount = (progress == null ? void 0 : progress.completedLessons.length) ?? 0;
  const totalLessons = (lessons == null ? void 0 : lessons.length) ?? 0;
  const progressPercent = totalLessons > 0 ? Math.round(completedCount / totalLessons * 100) : 0;
  const completedSet = new Set(
    ((progress == null ? void 0 : progress.completedLessons) ?? []).map((id2) => id2.toString())
  );
  const lastLessonId = (_a = progress == null ? void 0 : progress.lastVisitedLessonId) == null ? void 0 : _a[0];
  const firstLesson = lessons == null ? void 0 : lessons[0];
  const resumeLesson = lastLessonId ?? (firstLesson == null ? void 0 : firstLesson.id);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", "data-ocid": "course_detail.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pt-6 pb-0 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/courses",
        className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-5 font-body transition-colors",
        "data-ocid": "course_detail.back_link",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          " All Courses"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-4 md:mx-8 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/8 to-accent/15 p-6 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          variant: "outline",
          className: `mb-3 text-xs border font-display font-semibold ${difficultyBadgeColors[label] ?? "border-border/60"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `h-3 w-3 mr-1 ${colorClass}` }),
            label
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-xl text-foreground leading-tight mb-2", children: course.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body leading-relaxed", children: course.description }),
      isEnrolled && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { value: progressPercent, showLabel: true, size: "md" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-body mt-1.5", children: [
          completedCount,
          " of ",
          totalLessons,
          " lessons completed"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: isEnrolled ? resumeLesson !== void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/courses/$courseId/lessons/$lessonId",
          params: {
            courseId,
            lessonId: resumeLesson.toString()
          },
          "data-ocid": "course_detail.resume_button",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "btn-touch font-display font-semibold w-full sm:w-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-4 w-4 mr-2" }),
            completedCount > 0 ? "Continue Learning" : "Start Course"
          ] })
        }
      ) : null : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          className: "btn-touch font-display font-semibold w-full sm:w-auto",
          onClick: () => enroll(id),
          disabled: enrolling,
          "data-ocid": "course_detail.enroll_button",
          children: enrolling ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { size: "sm" }),
            " Enrolling..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-4 w-4 mr-2" }),
            " Enroll & Start"
          ] })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 md:px-8 pb-8 space-y-6", children: [
      ((_b = course.learningObjectives) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-muted/40 rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-sm text-foreground mb-3", children: "What you'll learn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: course.learningObjectives.map((obj, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            "data-ocid": `course_detail.objective.${i + 1}`,
            className: "flex items-start gap-2.5 text-sm text-foreground font-body",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-accent shrink-0 mt-0.5" }),
              obj
            ]
          },
          obj
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "course_detail.lessons_list", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-semibold text-base text-foreground mb-3", children: [
          "Lessons (",
          totalLessons,
          ")"
        ] }),
        !lessons || lessons.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "data-ocid": "course_detail.empty_state",
            className: "text-center py-8 text-muted-foreground text-sm font-body",
            children: "No lessons available yet."
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: lessons.map((lesson, i) => {
          const done = completedSet.has(lesson.id.toString());
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/courses/$courseId/lessons/$lessonId",
              params: { courseId, lessonId: lesson.id.toString() },
              "data-ocid": `course_detail.lesson.${i + 1}`,
              className: `flex items-center gap-3 p-3.5 rounded-xl border transition-all group ${done ? "bg-accent/8 border-accent/25 hover:border-accent/50" : "bg-card border-border/60 hover:border-primary/30 hover:bg-primary/5"}`,
              children: [
                done ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-accent shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs font-display font-bold shrink-0", children: i + 1 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `flex-1 text-sm font-body transition-colors ${done ? "text-accent line-through decoration-accent/50" : "text-foreground group-hover:text-primary"}`,
                    children: lesson.title
                  }
                ),
                done ? /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-3.5 w-3.5 text-accent/50" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" })
              ]
            },
            lesson.id.toString()
          );
        }) })
      ] })
    ] })
  ] });
}
export {
  CourseDetailPage
};
