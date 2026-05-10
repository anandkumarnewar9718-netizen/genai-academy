import { c as createLucideIcon, j as jsxRuntimeExports, e as cn, r as reactExports, b as LoadingSpinner, d as BookOpen } from "./index-CdpgodV-.js";
import { b as CourseCard } from "./CourseCard-Be0OU-1h.js";
import { u as useListCourses } from "./useBackend-BZbCDEVN.js";
import { g as getDifficultyLabel } from "./index-M6EAxOHP.js";
import "./ProgressBar-Cbdn_gf9.js";
import "./backend-DtJ819ci.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
const filters = ["All", "Beginner", "Intermediate", "Advanced"];
const filterColors = {
  All: "bg-foreground text-background",
  Beginner: "bg-accent text-accent-foreground",
  Intermediate: "bg-primary text-primary-foreground",
  Advanced: "bg-destructive text-destructive-foreground"
};
function CoursesPage() {
  const { data: courses, isLoading, isError } = useListCourses();
  const [search, setSearch] = reactExports.useState("");
  const [activeFilter, setActiveFilter] = reactExports.useState("All");
  const filtered = (courses ?? []).filter((course) => {
    const matchesSearch = search === "" || course.title.toLowerCase().includes(search.toLowerCase()) || course.description.toLowerCase().includes(search.toLowerCase());
    const matchesDifficulty = activeFilter === "All" || getDifficultyLabel(course.difficulty) === activeFilter;
    return matchesSearch && matchesDifficulty;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-6 md:px-8", "data-ocid": "courses.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl text-foreground", children: "All Courses" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body mt-1", children: "Explore our Gen AI curriculum" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Search courses...",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          className: "pl-9 h-12 font-body text-sm bg-card border-border/60 rounded-xl",
          "data-ocid": "courses.search_input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-none",
        "data-ocid": "courses.filter.tab",
        children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveFilter(f),
            "data-ocid": `courses.filter_${f.toLowerCase()}`,
            className: `shrink-0 px-4 py-2 rounded-full text-xs font-display font-semibold transition-all duration-200 border min-h-[36px] ${activeFilter === f ? `${filterColors[f]} border-transparent shadow-sm` : "bg-card text-muted-foreground border-border/60 hover:border-primary/40 hover:text-foreground"}`,
            children: f
          },
          f
        ))
      }
    ),
    isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-ocid": "courses.loading_state",
        className: "flex justify-center py-20",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { size: "lg", label: "Loading courses..." })
      }
    ),
    isError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "courses.error_state", className: "text-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive font-body text-sm", children: "Failed to load courses. Please try again." }) }),
    !isLoading && !isError && (!courses || courses.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "courses.empty_state",
        className: "flex flex-col items-center justify-center py-20 gap-4 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-8 w-8 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: "No courses yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body max-w-xs", children: "Courses will appear here once added by an administrator." })
        ]
      }
    ),
    !isLoading && !isError && courses && courses.length > 0 && filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "courses.filtered_empty_state",
        className: "flex flex-col items-center justify-center py-14 gap-3 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-8 w-8 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body", children: "No courses match your search or filter." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setSearch("");
                setActiveFilter("All");
              },
              className: "text-xs text-primary font-body underline underline-offset-2",
              children: "Clear filters"
            }
          )
        ]
      }
    ),
    !isLoading && !isError && filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", children: filtered.map((course, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CourseCard, { course, index: i }, course.id.toString())) })
  ] });
}
export {
  CoursesPage
};
