import { c as createLucideIcon, j as jsxRuntimeExports, L as Link, B as Button, a as Brain, b as LoadingSpinner, d as BookOpen } from "./index-CdpgodV-.js";
import { C as Card, a as CardContent, b as CourseCard } from "./CourseCard-Be0OU-1h.js";
import { B as Badge } from "./index-M6EAxOHP.js";
import { u as useListCourses } from "./useBackend-BZbCDEVN.js";
import { C as CircleCheck } from "./circle-check-HfH6VKW7.js";
import { T as TrendingUp } from "./trending-up-BV91ak7V.js";
import "./ProgressBar-Cbdn_gf9.js";
import "./backend-DtJ819ci.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "m9 14 2 2 4-4", key: "df797q" }]
];
const ClipboardCheck = createLucideIcon("clipboard-check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$1);
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
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const benefits = [
  {
    icon: Brain,
    title: "Practical Courses",
    desc: "Structured paths from LLM basics to advanced fine-tuning and RAG architectures.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: ClipboardCheck,
    title: "Hands-On Quizzes",
    desc: "Test your knowledge with interactive quizzes after every lesson.",
    color: "bg-accent/10 text-accent"
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    desc: "Visual dashboards show exactly where you are in each course.",
    color: "bg-primary/10 text-primary"
  }
];
const stats = [
  { value: "12+", label: "Courses" },
  { value: "80+", label: "Lessons" },
  { value: "40+", label: "Quizzes" }
];
const checkpoints = [
  "No ML background required",
  "Mobile-friendly learning",
  "Self-paced curriculum",
  "Certificate of completion"
];
function LandingPage() {
  const { data: courses, isLoading } = useListCourses();
  const featured = (courses == null ? void 0 : courses.slice(0, 3)) ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", "data-ocid": "landing.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex flex-col items-center justify-center text-center px-5 pt-14 pb-16 bg-gradient-to-b from-primary/8 via-background to-background overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-56 h-56 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          variant: "outline",
          className: "mb-4 border-primary/30 text-primary bg-primary/8 font-body text-xs px-3 py-1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 mr-1.5" }),
            " The #1 GenAI Learning Platform"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-4xl sm:text-5xl leading-tight text-foreground max-w-sm", children: [
        "Learn ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Generative AI" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground font-body max-w-sm leading-relaxed", children: "Interactive courses teaching LLMs, prompt engineering, RAG, and AI ethics — for students and working professionals." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mt-8 w-full max-w-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/courses", className: "flex-1", "data-ocid": "landing.browse_cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "w-full btn-touch font-display font-semibold",
            size: "lg",
            children: [
              "Browse Courses ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 ml-1.5" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/dashboard",
            className: "flex-1",
            "data-ocid": "landing.dashboard_cta",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "w-full btn-touch font-display font-semibold",
                size: "lg",
                children: "My Dashboard"
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-x-5 gap-y-2 mt-8", children: checkpoints.map((text) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "span",
        {
          className: "flex items-center gap-1.5 text-xs text-muted-foreground font-body",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-accent shrink-0" }),
            text
          ]
        },
        text
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-primary px-4 py-6",
        "data-ocid": "landing.stats_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-around max-w-sm mx-auto", children: stats.map(({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-3xl text-primary-foreground", children: value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body text-primary-foreground/70 mt-0.5", children: label })
        ] }, label)) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "px-4 py-12 bg-muted/30",
        "data-ocid": "landing.benefits_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-center text-foreground mb-2", children: "Why GenAI Academy?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body text-center mb-8", children: "Everything you need to become an AI practitioner" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto", children: benefits.map(({ icon: Icon, title, desc, color }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60 bg-card shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex flex-col gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-10 h-10 rounded-xl ${color} flex items-center justify-center`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm text-card-foreground", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body leading-relaxed", children: desc })
          ] }) }, title)) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "px-4 py-12 bg-background",
        "data-ocid": "landing.featured_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground", children: "Featured Courses" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body mt-1", children: "Start learning today" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/courses", "data-ocid": "landing.view_all_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "font-body text-primary",
                children: [
                  "View all ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 ml-1" })
                ]
              }
            ) })
          ] }),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-ocid": "landing.courses_loading_state",
              className: "flex justify-center py-12",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { size: "lg", label: "Loading courses..." })
            }
          ) : featured.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", children: featured.map((course, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CourseCard,
            {
              course,
              index: i
            },
            course.id.toString()
          )) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "landing.featured_empty_state",
              className: "flex flex-col items-center justify-center py-12 gap-4 text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-7 w-7 text-muted-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body", children: "Courses coming soon. Check back shortly." })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "px-4 py-14 text-center bg-gradient-to-br from-primary/8 via-muted/30 to-accent/8",
        "data-ocid": "landing.cta_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-8 w-8 text-primary mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-3", children: "Ready to start learning?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body mb-6 max-w-xs mx-auto", children: "Join thousands of learners mastering AI skills today." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/courses", "data-ocid": "landing.bottom_browse_cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "btn-touch font-display font-semibold", size: "lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4 mr-2" }),
            " Browse Courses"
          ] }) })
        ]
      }
    )
  ] });
}
export {
  LandingPage
};
