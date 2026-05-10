import { CourseCard } from "@/components/CourseCard";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Input } from "@/components/ui/input";
import { useListCourses } from "@/hooks/useBackend";
import type { Course, Difficulty } from "@/types";
import { getDifficultyLabel } from "@/types";
import { BookOpen, Search } from "lucide-react";
import { useState } from "react";

type FilterLevel = "All" | "Beginner" | "Intermediate" | "Advanced";
const filters: FilterLevel[] = ["All", "Beginner", "Intermediate", "Advanced"];

const filterColors: Record<FilterLevel, string> = {
  All: "bg-foreground text-background",
  Beginner: "bg-accent text-accent-foreground",
  Intermediate: "bg-primary text-primary-foreground",
  Advanced: "bg-destructive text-destructive-foreground",
};

export function CoursesPage() {
  const { data: courses, isLoading, isError } = useListCourses();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterLevel>("All");

  const filtered = (courses ?? []).filter((course: Course) => {
    const matchesSearch =
      search === "" ||
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase());
    const matchesDifficulty =
      activeFilter === "All" ||
      getDifficultyLabel(course.difficulty as Difficulty) === activeFilter;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="px-4 py-6 md:px-8" data-ocid="courses.page">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-display font-bold text-2xl text-foreground">
          All Courses
        </h1>
        <p className="text-sm text-muted-foreground font-body mt-1">
          Explore our Gen AI curriculum
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 h-12 font-body text-sm bg-card border-border/60 rounded-xl"
          data-ocid="courses.search_input"
        />
      </div>

      {/* Difficulty filters */}
      <div
        className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-none"
        data-ocid="courses.filter.tab"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActiveFilter(f)}
            data-ocid={`courses.filter_${f.toLowerCase()}`}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-display font-semibold transition-all duration-200 border min-h-[36px] ${
              activeFilter === f
                ? `${filterColors[f]} border-transparent shadow-sm`
                : "bg-card text-muted-foreground border-border/60 hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Loading */}
      {isLoading && (
        <div
          data-ocid="courses.loading_state"
          className="flex justify-center py-20"
        >
          <LoadingSpinner size="lg" label="Loading courses..." />
        </div>
      )}

      {/* Error */}
      {isError && (
        <div data-ocid="courses.error_state" className="text-center py-20">
          <p className="text-destructive font-body text-sm">
            Failed to load courses. Please try again.
          </p>
        </div>
      )}

      {/* Empty (no data at all) */}
      {!isLoading && !isError && (!courses || courses.length === 0) && (
        <div
          data-ocid="courses.empty_state"
          className="flex flex-col items-center justify-center py-20 gap-4 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
            <BookOpen className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="font-display font-semibold text-foreground">
            No courses yet
          </h3>
          <p className="text-sm text-muted-foreground font-body max-w-xs">
            Courses will appear here once added by an administrator.
          </p>
        </div>
      )}

      {/* Empty (filter mismatch) */}
      {!isLoading &&
        !isError &&
        courses &&
        courses.length > 0 &&
        filtered.length === 0 && (
          <div
            data-ocid="courses.filtered_empty_state"
            className="flex flex-col items-center justify-center py-14 gap-3 text-center"
          >
            <Search className="h-8 w-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground font-body">
              No courses match your search or filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveFilter("All");
              }}
              className="text-xs text-primary font-body underline underline-offset-2"
            >
              Clear filters
            </button>
          </div>
        )}

      {/* Grid */}
      {!isLoading && !isError && filtered.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((course, i) => (
            <CourseCard key={course.id.toString()} course={course} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
