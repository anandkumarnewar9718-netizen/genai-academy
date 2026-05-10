import { c as createLucideIcon, j as jsxRuntimeExports, e as cn, d as BookOpen, L as Link, B as Button } from "./index-CdpgodV-.js";
import { P as ProgressBar } from "./ProgressBar-Cbdn_gf9.js";
import { g as getDifficultyLabel, B as Badge } from "./index-M6EAxOHP.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode);
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
const difficultyColors = {
  Beginner: "bg-accent/15 text-accent border-accent/30",
  Intermediate: "bg-primary/15 text-primary border-primary/30",
  Advanced: "bg-destructive/15 text-destructive border-destructive/30"
};
const thumbnailGradients = [
  "from-primary/30 via-primary/10 to-accent/20",
  "from-accent/30 via-accent/10 to-primary/20",
  "from-primary/20 via-accent/15 to-primary/30",
  "from-accent/20 via-primary/15 to-accent/30"
];
function CourseCard({ course, progress, index = 0 }) {
  var _a;
  const label = getDifficultyLabel(course.difficulty);
  const gradient = thumbnailGradients[index % thumbnailGradients.length];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      "data-ocid": `course.item.${index + 1}`,
      className: "relative overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group border-border/60 bg-card flex flex-col",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `relative h-32 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`,
            children: [
              course.thumbnail ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: course.thumbnail,
                  alt: course.title,
                  className: "absolute inset-0 w-full h-full object-cover",
                  onError: (e) => {
                    e.target.style.display = "none";
                  }
                }
              ) : null,
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-10 w-10 text-primary/40 group-hover:scale-110 transition-transform duration-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-8 h-8 bg-accent rounded-bl-xl opacity-80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: `absolute bottom-2 left-2 text-xs border ${difficultyColors[label]}`,
                  variant: "outline",
                  children: label
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex flex-col gap-3 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm leading-snug text-card-foreground line-clamp-2", children: course.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body line-clamp-2 flex-1", children: course.description }),
          typeof progress === "number" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { value: progress, showLabel: true, size: "sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              Number(((_a = course.lessonOrder) == null ? void 0 : _a.length) ?? 0),
              " lessons"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/courses/$courseId",
              params: { courseId: course.id.toString() },
              className: "block",
              "data-ocid": `course.view_button.${index + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  className: "w-full btn-touch font-display font-semibold text-sm",
                  variant: typeof progress === "number" && progress > 0 ? "default" : "outline",
                  size: "sm",
                  children: typeof progress === "number" && progress > 0 ? "Continue Learning" : "View Course"
                }
              )
            }
          )
        ] })
      ]
    }
  );
}
export {
  Card as C,
  CardContent as a,
  CourseCard as b
};
