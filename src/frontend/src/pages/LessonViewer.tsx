import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useGetCourse,
  useGetLesson,
  useGetLessonsForCourse,
  useGetMyProgress,
  useGetQuizForLesson,
  useMarkLessonComplete,
} from "@/hooks/useBackend";
import type { Lesson } from "@/types";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Circle,
  GraduationCap,
  Menu,
  Target,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ---------- helpers ----------
function parseCourseId(raw: string): bigint | undefined {
  try {
    return BigInt(raw);
  } catch {
    return undefined;
  }
}
function parseLessonId(raw: string): bigint | undefined {
  try {
    return BigInt(raw);
  } catch {
    return undefined;
  }
}

// ---------- Sidebar lesson list item ----------
interface SidebarItemProps {
  lesson: Lesson;
  isActive: boolean;
  isCompleted: boolean;
  index: number;
  onClick: () => void;
}
function SidebarItem({
  lesson,
  isActive,
  isCompleted,
  index,
  onClick,
}: SidebarItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-ocid={`lesson_sidebar.item.${index}`}
      className={[
        "w-full flex items-start gap-3 px-3 py-3 rounded-xl text-left transition-smooth btn-touch",
        isActive
          ? "bg-primary/10 text-primary font-medium"
          : "hover:bg-muted/60 text-foreground",
      ].join(" ")}
      aria-current={isActive ? "page" : undefined}
    >
      <span className="mt-0.5 shrink-0">
        {isCompleted ? (
          <CheckCircle2 className="w-5 h-5 text-accent" />
        ) : (
          <Circle
            className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground"}`}
          />
        )}
      </span>
      <span className="text-sm leading-snug min-w-0 flex-1 break-words">
        {lesson.title}
      </span>
    </button>
  );
}

// ---------- Sidebar panel ----------
interface SidebarPanelProps {
  courseTitle: string;
  lessons: Lesson[];
  activeLessonId: bigint;
  completedIds: Set<string>;
  onNavigate: (lesson: Lesson) => void;
}
function SidebarPanel({
  courseTitle,
  lessons,
  activeLessonId,
  completedIds,
  onNavigate,
}: SidebarPanelProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-4 pb-3 border-b border-border">
        <div className="flex items-center gap-2 mb-1">
          <GraduationCap className="w-4 h-4 text-primary shrink-0" />
          <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
            Course
          </span>
        </div>
        <p className="font-display font-semibold text-sm text-foreground leading-snug line-clamp-2">
          {courseTitle}
        </p>
      </div>
      <ScrollArea className="flex-1 px-2 py-2">
        <nav aria-label="Lesson list">
          {lessons.map((lesson, i) => (
            <SidebarItem
              key={lesson.title}
              lesson={lesson}
              index={i + 1}
              isActive={lesson.id === activeLessonId}
              isCompleted={completedIds.has(lesson.id.toString())}
              onClick={() => onNavigate(lesson)}
            />
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}

// ---------- Code block styles injected once ----------
const codeStyles = `
.lesson-content pre {
  background: oklch(0.13 0.01 240);
  color: oklch(0.92 0.012 240);
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  overflow-x: auto;
  margin: 1.25rem 0;
  font-family: "JetBrains Mono", monospace;
  font-size: 14px;
  line-height: 1.6;
}
.lesson-content code {
  font-family: "JetBrains Mono", monospace;
  font-size: 14px;
  background: oklch(0.9 0.008 240);
  padding: 0.1em 0.35em;
  border-radius: 0.3em;
}
.lesson-content pre code {
  background: transparent;
  padding: 0;
  font-size: 14px;
}
.lesson-content h2 { font-size: 1.25rem; font-weight: 700; margin: 1.5rem 0 0.5rem; }
.lesson-content h3 { font-size: 1.05rem; font-weight: 600; margin: 1.25rem 0 0.4rem; }
.lesson-content p { margin-bottom: 0.9rem; line-height: 1.7; }
.lesson-content ul, .lesson-content ol { padding-left: 1.4rem; margin-bottom: 0.9rem; }
.lesson-content li { margin-bottom: 0.3rem; line-height: 1.65; }
.lesson-content blockquote { border-left: 3px solid oklch(var(--primary)); padding-left: 1rem; color: oklch(var(--muted-foreground)); margin: 1rem 0; }
`;

function InjectCodeStyles() {
  useEffect(() => {
    if (document.getElementById("lesson-code-styles")) return;
    const tag = document.createElement("style");
    tag.id = "lesson-code-styles";
    tag.textContent = codeStyles;
    document.head.appendChild(tag);
  }, []);
  return null;
}

// ---------- Main page ----------
export function LessonViewerPage() {
  const { courseId: courseIdStr, lessonId: lessonIdStr } = useParams({
    from: "/courses/$courseId/lessons/$lessonId",
  });
  const navigate = useNavigate();

  const courseId = parseCourseId(courseIdStr);
  const lessonId = parseLessonId(lessonIdStr);

  const { data: course, isLoading: courseLoading } = useGetCourse(courseId);
  const { data: lessons = [], isLoading: lessonsLoading } =
    useGetLessonsForCourse(courseId);
  const { data: lesson, isLoading: lessonLoading } = useGetLesson(lessonId);
  const { data: progress } = useGetMyProgress(courseId);
  const { data: quiz } = useGetQuizForLesson(lessonId);
  const markComplete = useMarkLessonComplete();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to top on lesson change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional — scroll on lessonId string change
  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [lessonIdStr]);

  const completedIds = new Set(
    (progress?.completedLessons ?? []).map((id) => id.toString()),
  );
  const isCompleted =
    lessonId !== undefined && completedIds.has(lessonId.toString());

  // Sorted lessons by orderIndex
  const sortedLessons = [...lessons].sort(
    (a, b) => Number(a.orderIndex) - Number(b.orderIndex),
  );

  const currentIndex = sortedLessons.findIndex((l) => l.id === lessonId);
  const prevLesson = currentIndex > 0 ? sortedLessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < sortedLessons.length - 1
      ? sortedLessons[currentIndex + 1]
      : null;
  const hasQuiz = quiz !== null && quiz !== undefined;

  function goToLesson(lesson: Lesson) {
    setDrawerOpen(false);
    navigate({
      to: "/courses/$courseId/lessons/$lessonId",
      params: {
        courseId: lesson.courseId.toString(),
        lessonId: lesson.id.toString(),
      },
    });
  }

  function handleMarkComplete() {
    if (!courseId || !lessonId) return;
    markComplete.mutate({ courseId, lessonId });
  }

  function handleTakeQuiz() {
    navigate({
      to: "/courses/$courseId/lessons/$lessonId/quiz",
      params: { courseId: courseIdStr, lessonId: lessonIdStr },
    });
  }

  const sidebarContent = (
    <SidebarPanel
      courseTitle={course?.title ?? "Loading..."}
      lessons={sortedLessons}
      activeLessonId={lessonId ?? 0n}
      completedIds={completedIds}
      onNavigate={goToLesson}
    />
  );

  const isLoading = courseLoading || lessonsLoading || lessonLoading;

  return (
    <>
      <InjectCodeStyles />
      <div
        className="flex h-[calc(100vh-4rem)] overflow-hidden"
        data-ocid="lesson_viewer.page"
      >
        {/* Desktop sidebar */}
        <aside
          className="hidden lg:flex flex-col w-72 xl:w-80 border-r border-border bg-card shrink-0"
          data-ocid="lesson_sidebar.panel"
        >
          {lessonsLoading ? (
            <div className="p-4 space-y-3">
              {[1, 2, 3, 4, 5].map((n) => (
                <Skeleton key={n} className="h-12 w-full rounded-xl" />
              ))}
            </div>
          ) : (
            sidebarContent
          )}
        </aside>

        {/* Main content + action bar */}
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          {/* Mobile top bar */}
          <div className="lg:hidden flex items-center gap-3 px-4 py-3 border-b border-border bg-card shrink-0">
            <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="btn-touch"
                  aria-label="Open lesson list"
                  data-ocid="lesson_sidebar.open_modal_button"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <SheetHeader className="sr-only">
                  <SheetTitle>Lesson List</SheetTitle>
                </SheetHeader>
                {lessonsLoading ? (
                  <div className="p-4 space-y-3">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Skeleton key={n} className="h-12 w-full rounded-xl" />
                    ))}
                  </div>
                ) : (
                  sidebarContent
                )}
              </SheetContent>
            </Sheet>
            <span className="font-display font-semibold text-sm truncate text-foreground flex-1 min-w-0">
              {course?.title ?? ""}
            </span>
          </div>

          {/* Scrollable content */}
          <div
            ref={contentRef}
            className="flex-1 overflow-y-auto bg-background"
          >
            {isLoading ? (
              <div
                className="p-5 md:p-8 max-w-3xl mx-auto space-y-6"
                data-ocid="lesson_content.loading_state"
              >
                <Skeleton className="h-8 w-3/4 rounded-lg" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-5/6 rounded" />
                <Skeleton className="h-40 w-full rounded-xl" />
                <Skeleton className="h-4 w-4/5 rounded" />
                <Skeleton className="h-4 w-full rounded" />
              </div>
            ) : lesson ? (
              <AnimatePresence mode="wait">
                <motion.article
                  key={lessonIdStr}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="p-5 md:p-8 max-w-3xl mx-auto pb-6"
                  data-ocid="lesson_content.panel"
                >
                  {/* Lesson title */}
                  <header className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        Lesson {currentIndex >= 0 ? currentIndex + 1 : ""} of{" "}
                        {sortedLessons.length}
                      </span>
                      {isCompleted && (
                        <span className="ml-auto flex items-center gap-1 text-xs font-medium text-accent">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Completed
                        </span>
                      )}
                    </div>
                    <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight">
                      {lesson.title}
                    </h1>
                  </header>

                  {/* Learning objectives */}
                  {lesson.learningObjectives.length > 0 && (
                    <section
                      className="rounded-2xl bg-primary/5 border border-primary/15 p-4 mb-6"
                      data-ocid="lesson_objectives.section"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-4 h-4 text-primary" />
                        <h2 className="font-display font-semibold text-sm text-primary">
                          Learning Objectives
                        </h2>
                      </div>
                      <ul className="space-y-2">
                        {lesson.learningObjectives.map((obj) => (
                          <li
                            key={obj}
                            className="flex items-start gap-2 text-sm text-foreground"
                          >
                            <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                            <span className="leading-snug">{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Rich content */}
                  <section
                    className="lesson-content prose-none text-foreground text-[0.9375rem] leading-relaxed"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: lesson content from trusted backend
                    dangerouslySetInnerHTML={{ __html: lesson.content }}
                    data-ocid="lesson_content.body"
                  />
                </motion.article>
              </AnimatePresence>
            ) : (
              <div
                className="flex flex-col items-center justify-center min-h-[40vh] p-8 text-center"
                data-ocid="lesson_content.error_state"
              >
                <BookOpen className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Lesson not found.</p>
              </div>
            )}
          </div>

          {/* Bottom action bar */}
          <div
            className="shrink-0 border-t border-border bg-card px-4 py-3 safe-bottom"
            data-ocid="lesson_actions.bar"
          >
            <div className="flex items-center gap-2 max-w-3xl mx-auto">
              {/* Prev */}
              <Button
                variant="outline"
                size="sm"
                className="btn-touch gap-1.5 shrink-0"
                disabled={!prevLesson || isLoading}
                onClick={() => prevLesson && goToLesson(prevLesson)}
                data-ocid="lesson_actions.prev_button"
                aria-label="Previous lesson"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Prev</span>
              </Button>

              {/* Mark as complete */}
              {!isCompleted ? (
                <Button
                  variant="default"
                  className="btn-touch flex-1 font-semibold gap-2"
                  disabled={markComplete.isPending || isLoading || !lesson}
                  onClick={handleMarkComplete}
                  data-ocid="lesson_actions.complete_button"
                >
                  {markComplete.isPending ? (
                    <span className="animate-spin w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4" />
                  )}
                  Mark as Complete
                </Button>
              ) : hasQuiz ? (
                <Button
                  variant="default"
                  className="btn-touch flex-1 font-semibold gap-2 bg-accent hover:bg-accent/90"
                  onClick={handleTakeQuiz}
                  data-ocid="lesson_actions.take_quiz_button"
                >
                  <GraduationCap className="w-4 h-4" />
                  Take Quiz
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="btn-touch flex-1 gap-2 text-accent border-accent/30"
                  disabled
                  data-ocid="lesson_actions.completed_state"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Completed
                </Button>
              )}

              {/* Next */}
              <Button
                variant="outline"
                size="sm"
                className="btn-touch gap-1.5 shrink-0"
                disabled={!nextLesson || isLoading}
                onClick={() => nextLesson && goToLesson(nextLesson)}
                data-ocid="lesson_actions.next_button"
                aria-label="Next lesson"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
