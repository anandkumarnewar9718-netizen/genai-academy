import { createActor } from "@/backend";
import {
  type Course,
  type CourseId,
  type CreateCourseArgs,
  type CreateLessonArgs,
  type CreateQuizArgs,
  Difficulty,
  type Lesson,
  type LessonId,
  type Question,
  type Quiz,
  type QuizId,
  type UpdateCourseArgs,
  type UpdateLessonArgs,
  type UpdateQuizArgs,
} from "@/backend";
import { Layout } from "@/components/Layout";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useAuth } from "@/hooks/useAuth";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import {
  AlertCircle,
  BookOpen,
  GraduationCap,
  HelpCircle,
  PenLine,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

// ---- actor helper ----
type AnyActor = Record<string, (...args: unknown[]) => Promise<unknown>>;
function asActor(a: unknown): AnyActor {
  return a as AnyActor;
}

// ---- Admin hooks ----
function useIsAdmin() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<boolean>({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      return asActor(actor).isCallerAdmin() as Promise<boolean>;
    },
    enabled: !!actor && !isFetching,
  });
}

function useListAllCourses() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: async (): Promise<Course[]> => {
      if (!actor) return [];
      return asActor(actor).listCourses() as Promise<Course[]>;
    },
    enabled: !!actor && !isFetching,
  });
}

function useAllLessons() {
  const { actor, isFetching } = useActor(createActor);
  const courses = useListAllCourses();
  const courseList = courses.data ?? [];
  return useQuery<Lesson[]>({
    queryKey: ["all-lessons", courseList.map((c) => c.id.toString()).join(",")],
    queryFn: async (): Promise<Lesson[]> => {
      if (!actor || courseList.length === 0) return [];
      const all = await Promise.all(
        courseList.map(
          (c) => asActor(actor).getLessonsForCourse(c.id) as Promise<Lesson[]>,
        ),
      );
      return all.flat();
    },
    enabled: !!actor && !isFetching && courseList.length > 0,
  });
}

function useAllQuizzes(lessons: Lesson[]) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Quiz[]>({
    queryKey: ["all-quizzes", lessons.map((l) => l.id.toString()).join(",")],
    queryFn: async (): Promise<Quiz[]> => {
      if (!actor || lessons.length === 0) return [];
      const results = await Promise.all(
        lessons.map(
          (l) => asActor(actor).getQuizForLesson(l.id) as Promise<Quiz | null>,
        ),
      );
      return results.filter((q): q is Quiz => q !== null);
    },
    enabled: !!actor && !isFetching && lessons.length > 0,
  });
}

function useCreateCourse() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: CreateCourseArgs) =>
      asActor(actor).createCourse(args) as Promise<Course>,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["courses"] });
      toast.success("Course created!");
    },
    onError: () => toast.error("Failed to create course"),
  });
}

function useUpdateCourse() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: UpdateCourseArgs) =>
      asActor(actor).updateCourse(args) as Promise<Course | null>,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["courses"] });
      toast.success("Course updated!");
    },
    onError: () => toast.error("Failed to update course"),
  });
}

function useDeleteCourse() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: CourseId) =>
      asActor(actor).deleteCourse(id) as Promise<boolean>,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["courses"] });
      toast.success("Course deleted");
    },
    onError: () => toast.error("Failed to delete course"),
  });
}

function useCreateLesson() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: CreateLessonArgs) =>
      asActor(actor).createLesson(args) as Promise<Lesson>,
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: ["lessons", vars.courseId.toString()] });
      qc.invalidateQueries({ queryKey: ["all-lessons"] });
      toast.success("Lesson created!");
    },
    onError: () => toast.error("Failed to create lesson"),
  });
}

function useUpdateLesson() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: UpdateLessonArgs) =>
      asActor(actor).updateLesson(args) as Promise<Lesson | null>,
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: ["lessons", vars.courseId.toString()] });
      qc.invalidateQueries({ queryKey: ["all-lessons"] });
      toast.success("Lesson updated!");
    },
    onError: () => toast.error("Failed to update lesson"),
  });
}

function useDeleteLesson() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: LessonId) =>
      asActor(actor).deleteLesson(id) as Promise<boolean>,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["all-lessons"] });
      toast.success("Lesson deleted");
    },
    onError: () => toast.error("Failed to delete lesson"),
  });
}

function useCreateQuiz() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: CreateQuizArgs) =>
      asActor(actor).createQuiz(args) as Promise<Quiz>,
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: ["quiz", vars.lessonId.toString()] });
      qc.invalidateQueries({ queryKey: ["all-quizzes"] });
      toast.success("Quiz created!");
    },
    onError: () => toast.error("Failed to create quiz"),
  });
}

function useUpdateQuiz() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: UpdateQuizArgs) =>
      asActor(actor).updateQuiz(args) as Promise<Quiz | null>,
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: ["quiz", vars.lessonId.toString()] });
      qc.invalidateQueries({ queryKey: ["all-quizzes"] });
      toast.success("Quiz updated!");
    },
    onError: () => toast.error("Failed to update quiz"),
  });
}

function useDeleteQuiz() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: QuizId) =>
      asActor(actor).deleteQuiz(id) as Promise<boolean>,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["all-quizzes"] });
      toast.success("Quiz deleted");
    },
    onError: () => toast.error("Failed to delete quiz"),
  });
}

// ---- Shared Modal shell ----
function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      data-ocid="admin.dialog"
    >
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        role="button"
        tabIndex={0}
        aria-label="Close dialog"
        onClick={onClose}
        onKeyUp={(e) => {
          if (e.key === "Enter" || e.key === " ") onClose();
        }}
      />
      <div className="relative z-10 w-full sm:max-w-lg bg-card rounded-t-2xl sm:rounded-2xl shadow-xl flex flex-col max-h-[92dvh] overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0">
          <h2 className="text-lg font-display font-semibold text-foreground">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Close"
            data-ocid="admin.close_button"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
        <div className="overflow-y-auto flex-1 px-5 py-4">{children}</div>
      </div>
    </div>
  );
}

// ---- Course Modal ----
type CourseFormData = {
  title: string;
  description: string;
  difficulty: Difficulty;
  thumbnail: string;
};

const DIFFICULTIES: Difficulty[] = [
  Difficulty.Beginner,
  Difficulty.Intermediate,
  Difficulty.Advanced,
];

function CourseModal({
  course,
  onClose,
}: {
  course?: Course;
  onClose: () => void;
}) {
  const isEdit = !!course;
  const createCourse = useCreateCourse();
  const updateCourse = useUpdateCourse();

  const [form, setForm] = useState<CourseFormData>({
    title: course?.title ?? "",
    description: course?.description ?? "",
    difficulty: course?.difficulty ?? Difficulty.Beginner,
    thumbnail: course?.thumbnail ?? "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isEdit && course) {
      await updateCourse.mutateAsync({
        id: course.id,
        title: form.title,
        description: form.description,
        difficulty: form.difficulty,
        thumbnail: form.thumbnail,
        learningObjectives: course.learningObjectives,
      });
    } else {
      await createCourse.mutateAsync({
        title: form.title,
        description: form.description,
        difficulty: form.difficulty,
        thumbnail: form.thumbnail,
        learningObjectives: [],
      });
    }
    onClose();
  };

  const isPending = createCourse.isPending || updateCourse.isPending;

  return (
    <Modal title={isEdit ? "Edit Course" : "Add Course"} onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Field label="Title">
          <input
            className="admin-input"
            value={form.title}
            onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
            required
            placeholder="e.g. Intro to LLMs"
            data-ocid="admin.course_title.input"
          />
        </Field>
        <Field label="Description">
          <textarea
            className="admin-input min-h-[80px] resize-y"
            value={form.description}
            onChange={(e) =>
              setForm((p) => ({ ...p, description: e.target.value }))
            }
            required
            placeholder="Brief course description"
            data-ocid="admin.course_description.textarea"
          />
        </Field>
        <Field label="Difficulty">
          <select
            className="admin-input"
            value={form.difficulty}
            onChange={(e) =>
              setForm((p) => ({
                ...p,
                difficulty: e.target.value as Difficulty,
              }))
            }
            data-ocid="admin.course_difficulty.select"
          >
            {DIFFICULTIES.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Thumbnail URL">
          <input
            className="admin-input"
            value={form.thumbnail}
            onChange={(e) =>
              setForm((p) => ({ ...p, thumbnail: e.target.value }))
            }
            placeholder="https://example.com/image.jpg"
            data-ocid="admin.course_thumbnail.input"
          />
        </Field>
        <ModalActions onClose={onClose} isPending={isPending} isEdit={isEdit} />
      </form>
    </Modal>
  );
}

// ---- Lesson Modal ----
type LessonFormData = {
  title: string;
  courseId: string;
  orderIndex: string;
  content: string;
};

function LessonModal({
  lesson,
  courses,
  onClose,
}: {
  lesson?: Lesson;
  courses: Course[];
  onClose: () => void;
}) {
  const isEdit = !!lesson;
  const createLesson = useCreateLesson();
  const updateLesson = useUpdateLesson();

  const [form, setForm] = useState<LessonFormData>({
    title: lesson?.title ?? "",
    courseId: lesson?.courseId?.toString() ?? courses[0]?.id?.toString() ?? "",
    orderIndex: lesson?.orderIndex?.toString() ?? "1",
    content: lesson?.content ?? "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const courseId = BigInt(form.courseId);
    const orderIndex = BigInt(form.orderIndex);
    if (isEdit && lesson) {
      await updateLesson.mutateAsync({
        id: lesson.id,
        title: form.title,
        courseId,
        orderIndex,
        content: form.content,
        learningObjectives: lesson.learningObjectives,
      });
    } else {
      await createLesson.mutateAsync({
        title: form.title,
        courseId,
        orderIndex,
        content: form.content,
        learningObjectives: [],
      });
    }
    onClose();
  };

  const isPending = createLesson.isPending || updateLesson.isPending;

  return (
    <Modal title={isEdit ? "Edit Lesson" : "Add Lesson"} onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Field label="Title">
          <input
            className="admin-input"
            value={form.title}
            onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
            required
            placeholder="e.g. Understanding Transformers"
            data-ocid="admin.lesson_title.input"
          />
        </Field>
        <Field label="Course">
          <select
            className="admin-input"
            value={form.courseId}
            onChange={(e) =>
              setForm((p) => ({ ...p, courseId: e.target.value }))
            }
            data-ocid="admin.lesson_course.select"
          >
            {courses.map((c) => (
              <option key={c.id.toString()} value={c.id.toString()}>
                {c.title}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Order Index">
          <input
            type="number"
            min="1"
            className="admin-input"
            value={form.orderIndex}
            onChange={(e) =>
              setForm((p) => ({ ...p, orderIndex: e.target.value }))
            }
            required
            data-ocid="admin.lesson_order.input"
          />
        </Field>
        <Field label="Content (supports code blocks)">
          <textarea
            className="admin-input font-mono text-sm min-h-[160px] resize-y"
            value={form.content}
            onChange={(e) =>
              setForm((p) => ({ ...p, content: e.target.value }))
            }
            required
            placeholder={"Use ```language\ncode here\n``` for code blocks"}
            data-ocid="admin.lesson_content.textarea"
          />
        </Field>
        <ModalActions onClose={onClose} isPending={isPending} isEdit={isEdit} />
      </form>
    </Modal>
  );
}

// ---- Quiz Modal ----
type QuestionFormData = {
  questionText: string;
  options: [string, string, string, string];
  correctAnswerIndex: number;
  explanation: string;
};

const emptyQuestion = (): QuestionFormData => ({
  questionText: "",
  options: ["", "", "", ""],
  correctAnswerIndex: 0,
  explanation: "",
});

function QuestionEditor({
  q,
  idx,
  onChange,
  onRemove,
}: {
  q: QuestionFormData;
  idx: number;
  onChange: (updated: QuestionFormData) => void;
  onRemove: () => void;
}) {
  return (
    <div className="border border-border rounded-xl p-4 flex flex-col gap-3 bg-muted/30">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">
          Question {idx + 1}
        </span>
        <button
          type="button"
          onClick={onRemove}
          className="p-1.5 rounded-lg hover:bg-destructive/10 text-destructive transition-colors"
          aria-label="Remove question"
          data-ocid={`admin.question_remove_button.${idx + 1}`}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      <input
        className="admin-input"
        placeholder="Question text"
        value={q.questionText}
        onChange={(e) => onChange({ ...q, questionText: e.target.value })}
        required
        data-ocid={`admin.question_text.${idx + 1}`}
      />
      <div className="flex flex-col gap-2">
        {q.options.map((opt, oIdx) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: option order is stable within a question editor session
          <label key={`opt-${oIdx}`} className="flex items-center gap-2">
            <input
              type="radio"
              name={`correct-${idx}`}
              checked={q.correctAnswerIndex === oIdx}
              onChange={() => onChange({ ...q, correctAnswerIndex: oIdx })}
              className="accent-primary w-4 h-4 shrink-0"
              data-ocid={`admin.question_correct.${idx + 1}.${oIdx + 1}`}
            />
            <input
              className="admin-input flex-1"
              placeholder={`Option ${oIdx + 1}`}
              value={opt}
              onChange={(e) => {
                const opts = [...q.options] as [string, string, string, string];
                opts[oIdx] = e.target.value;
                onChange({ ...q, options: opts });
              }}
              required
              data-ocid={`admin.question_option.${idx + 1}.${oIdx + 1}`}
            />
          </label>
        ))}
      </div>
      <input
        className="admin-input"
        placeholder="Explanation (shown after answering)"
        value={q.explanation}
        onChange={(e) => onChange({ ...q, explanation: e.target.value })}
        data-ocid={`admin.question_explanation.${idx + 1}`}
      />
    </div>
  );
}

function QuizModal({
  quiz,
  lessons,
  onClose,
}: {
  quiz?: Quiz;
  lessons: Lesson[];
  onClose: () => void;
}) {
  const isEdit = !!quiz;
  const createQuiz = useCreateQuiz();
  const updateQuiz = useUpdateQuiz();

  const [title, setTitle] = useState(quiz?.title ?? "");
  const [lessonId, setLessonId] = useState(
    quiz?.lessonId?.toString() ?? lessons[0]?.id?.toString() ?? "",
  );
  const [questions, setQuestions] = useState<QuestionFormData[]>(
    quiz?.questions.map((q) => ({
      questionText: q.questionText,
      options: q.options as [string, string, string, string],
      correctAnswerIndex: Number(q.correctAnswerIndex),
      explanation: q.explanation,
    })) ?? [emptyQuestion()],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const lId = BigInt(lessonId);
    const questionsPayload: Question[] = questions.map((q) => ({
      questionText: q.questionText,
      options: q.options,
      correctAnswerIndex: BigInt(q.correctAnswerIndex),
      explanation: q.explanation,
    }));
    if (isEdit && quiz) {
      await updateQuiz.mutateAsync({
        id: quiz.id,
        lessonId: lId,
        title,
        questions: questionsPayload,
      });
    } else {
      await createQuiz.mutateAsync({
        lessonId: lId,
        title,
        questions: questionsPayload,
      });
    }
    onClose();
  };

  const isPending = createQuiz.isPending || updateQuiz.isPending;

  return (
    <Modal title={isEdit ? "Edit Quiz" : "Add Quiz"} onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Field label="Quiz Title">
          <input
            className="admin-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="e.g. LLM Fundamentals Quiz"
            data-ocid="admin.quiz_title.input"
          />
        </Field>
        <Field label="Lesson">
          <select
            className="admin-input"
            value={lessonId}
            onChange={(e) => setLessonId(e.target.value)}
            data-ocid="admin.quiz_lesson.select"
          >
            {lessons.map((l) => (
              <option key={l.id.toString()} value={l.id.toString()}>
                {l.title}
              </option>
            ))}
          </select>
        </Field>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium text-foreground">Questions</span>
          {questions.map((q, i) => (
            <QuestionEditor
              // biome-ignore lint/suspicious/noArrayIndexKey: questions have no stable id in form state
              key={`q-${i}`}
              q={q}
              idx={i}
              onChange={(updated) =>
                setQuestions((prev) =>
                  prev.map((item, j) => (j === i ? updated : item)),
                )
              }
              onRemove={() =>
                setQuestions((prev) => prev.filter((_, j) => j !== i))
              }
            />
          ))}
          <button
            type="button"
            onClick={() => setQuestions((prev) => [...prev, emptyQuestion()])}
            className="flex items-center gap-2 text-sm text-primary font-medium py-2 px-3 rounded-xl border border-primary/30 hover:bg-primary/5 transition-colors"
            data-ocid="admin.add_question_button"
          >
            <Plus className="w-4 h-4" /> Add Question
          </button>
        </div>

        <ModalActions onClose={onClose} isPending={isPending} isEdit={isEdit} />
      </form>
    </Modal>
  );
}

// ---- Shared form helpers ----
function Field({
  label,
  children,
  htmlFor,
}: { label: string; children: React.ReactNode; htmlFor?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}

function ModalActions({
  onClose,
  isPending,
  isEdit,
}: {
  onClose: () => void;
  isPending: boolean;
  isEdit: boolean;
}) {
  return (
    <div className="flex gap-3 pt-2">
      <button
        type="button"
        onClick={onClose}
        className="flex-1 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted transition-colors"
        data-ocid="admin.cancel_button"
      >
        Cancel
      </button>
      <button
        type="submit"
        disabled={isPending}
        className="flex-1 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
        data-ocid="admin.submit_button"
      >
        {isPending ? "Saving…" : isEdit ? "Save Changes" : "Create"}
      </button>
    </div>
  );
}

// ---- Confirm Delete Dialog ----
function DeleteConfirm({
  label,
  onConfirm,
  onCancel,
  isPending,
}: {
  label: string;
  onConfirm: () => void;
  onCancel: () => void;
  isPending: boolean;
}) {
  return (
    <Modal title="Confirm Delete" onClose={onCancel}>
      <p className="text-muted-foreground mb-6">
        Delete <span className="font-semibold text-foreground">{label}</span>?
        This action cannot be undone.
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted transition-colors"
          data-ocid="admin.cancel_button"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onConfirm}
          disabled={isPending}
          className="flex-1 py-3 rounded-xl bg-destructive text-destructive-foreground font-medium hover:bg-destructive/90 transition-colors disabled:opacity-50"
          data-ocid="admin.confirm_button"
        >
          {isPending ? "Deleting…" : "Delete"}
        </button>
      </div>
    </Modal>
  );
}

// ---- Tab button ----
function TabBtn({
  active,
  onClick,
  icon: Icon,
  label,
  ocid,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ElementType;
  label: string;
  ocid: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-ocid={ocid}
      className={`flex items-center gap-2 flex-1 justify-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors min-h-[48px] ${
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground hover:bg-muted"
      }`}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
}

// ---- Courses Tab ----
function CoursesTab({ courses }: { courses: Course[] }) {
  const deleteCourse = useDeleteCourse();
  const [editCourse, setEditCourse] = useState<Course | undefined>();
  const [addOpen, setAddOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Course | null>(null);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-display font-semibold text-foreground">
          All Courses
        </h2>
        <button
          type="button"
          onClick={() => setAddOpen(true)}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors min-h-[48px]"
          data-ocid="admin.course_add_button"
        >
          <Plus className="w-4 h-4" /> Add Course
        </button>
      </div>

      {courses.length === 0 ? (
        <EmptyState
          icon={GraduationCap}
          message="No courses yet. Add your first course!"
        />
      ) : (
        <ul className="flex flex-col gap-3" data-ocid="admin.courses.list">
          {courses.map((c, i) => (
            <li
              key={c.id.toString()}
              className="bg-card border border-border rounded-xl p-4 flex items-start gap-3"
              data-ocid={`admin.courses.item.${i + 1}`}
            >
              {c.thumbnail ? (
                <img
                  src={c.thumbnail}
                  alt={c.title}
                  className="w-14 h-14 rounded-lg object-cover shrink-0"
                />
              ) : (
                <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-muted-foreground" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground truncate">
                  {c.title}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-0.5">
                  {c.description}
                </p>
                <span className="inline-block mt-1.5 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                  {c.difficulty}
                </span>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setEditCourse(c)}
                  className="p-2.5 rounded-xl bg-muted hover:bg-muted/70 transition-colors"
                  aria-label="Edit course"
                  data-ocid={`admin.courses.edit_button.${i + 1}`}
                >
                  <PenLine className="w-4 h-4 text-foreground" />
                </button>
                <button
                  type="button"
                  onClick={() => setDeleteTarget(c)}
                  className="p-2.5 rounded-xl bg-destructive/10 hover:bg-destructive/20 transition-colors"
                  aria-label="Delete course"
                  data-ocid={`admin.courses.delete_button.${i + 1}`}
                >
                  <Trash2 className="w-4 h-4 text-destructive" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {(addOpen || editCourse) && (
        <CourseModal
          course={editCourse}
          onClose={() => {
            setAddOpen(false);
            setEditCourse(undefined);
          }}
        />
      )}
      {deleteTarget && (
        <DeleteConfirm
          label={deleteTarget.title}
          isPending={deleteCourse.isPending}
          onConfirm={() => {
            deleteCourse.mutate(deleteTarget.id, {
              onSuccess: () => setDeleteTarget(null),
            });
          }}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </section>
  );
}

// ---- Lessons Tab ----
function LessonsTab({
  lessons,
  courses,
}: { lessons: Lesson[]; courses: Course[] }) {
  const deleteLesson = useDeleteLesson();
  const [editLesson, setEditLesson] = useState<Lesson | undefined>();
  const [addOpen, setAddOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Lesson | null>(null);

  const courseMap = useMemo(() => {
    const m: Record<string, string> = {};
    for (const c of courses) m[c.id.toString()] = c.title;
    return m;
  }, [courses]);

  const grouped = useMemo(() => {
    const g: Record<string, { courseTitle: string; lessons: Lesson[] }> = {};
    for (const l of lessons) {
      const key = l.courseId.toString();
      if (!g[key])
        g[key] = {
          courseTitle: courseMap[key] ?? "Unknown Course",
          lessons: [],
        };
      g[key].lessons.push(l);
    }
    return Object.entries(g);
  }, [lessons, courseMap]);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-display font-semibold text-foreground">
          All Lessons
        </h2>
        <button
          type="button"
          onClick={() => setAddOpen(true)}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors min-h-[48px]"
          data-ocid="admin.lesson_add_button"
        >
          <Plus className="w-4 h-4" /> Add Lesson
        </button>
      </div>

      {grouped.length === 0 ? (
        <EmptyState
          icon={BookOpen}
          message="No lessons yet. Add your first lesson!"
        />
      ) : (
        <div className="flex flex-col gap-5" data-ocid="admin.lessons.list">
          {grouped.map(([courseId, { courseTitle, lessons: cls }]) => (
            <div key={courseId}>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 px-1">
                {courseTitle}
              </p>
              <ul className="flex flex-col gap-2">
                {cls.map((l, i) => (
                  <li
                    key={l.id.toString()}
                    className="bg-card border border-border rounded-xl px-4 py-3 flex items-center gap-3"
                    data-ocid={`admin.lessons.item.${i + 1}`}
                  >
                    <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                      {Number(l.orderIndex)}
                    </span>
                    <p className="flex-1 min-w-0 font-medium text-foreground truncate">
                      {l.title}
                    </p>
                    <button
                      type="button"
                      onClick={() => setEditLesson(l)}
                      className="p-2.5 rounded-xl bg-muted hover:bg-muted/70 transition-colors shrink-0"
                      aria-label="Edit lesson"
                      data-ocid={`admin.lessons.edit_button.${i + 1}`}
                    >
                      <PenLine className="w-4 h-4 text-foreground" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeleteTarget(l)}
                      className="p-2.5 rounded-xl bg-destructive/10 hover:bg-destructive/20 transition-colors shrink-0"
                      aria-label="Delete lesson"
                      data-ocid={`admin.lessons.delete_button.${i + 1}`}
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {(addOpen || editLesson) && (
        <LessonModal
          lesson={editLesson}
          courses={courses}
          onClose={() => {
            setAddOpen(false);
            setEditLesson(undefined);
          }}
        />
      )}
      {deleteTarget && (
        <DeleteConfirm
          label={deleteTarget.title}
          isPending={deleteLesson.isPending}
          onConfirm={() => {
            deleteLesson.mutate(deleteTarget.id, {
              onSuccess: () => setDeleteTarget(null),
            });
          }}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </section>
  );
}

// ---- Quizzes Tab ----
function QuizzesTab({
  quizzes,
  lessons,
}: { quizzes: Quiz[]; lessons: Lesson[] }) {
  const deleteQuiz = useDeleteQuiz();
  const [editQuiz, setEditQuiz] = useState<Quiz | undefined>();
  const [addOpen, setAddOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Quiz | null>(null);

  const lessonMap = useMemo(() => {
    const m: Record<string, string> = {};
    for (const l of lessons) m[l.id.toString()] = l.title;
    return m;
  }, [lessons]);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-display font-semibold text-foreground">
          All Quizzes
        </h2>
        <button
          type="button"
          onClick={() => setAddOpen(true)}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors min-h-[48px]"
          data-ocid="admin.quiz_add_button"
        >
          <Plus className="w-4 h-4" /> Add Quiz
        </button>
      </div>

      {quizzes.length === 0 ? (
        <EmptyState
          icon={HelpCircle}
          message="No quizzes yet. Add your first quiz!"
        />
      ) : (
        <ul className="flex flex-col gap-3" data-ocid="admin.quizzes.list">
          {quizzes.map((q, i) => (
            <li
              key={q.id.toString()}
              className="bg-card border border-border rounded-xl p-4 flex items-center gap-3"
              data-ocid={`admin.quizzes.item.${i + 1}`}
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground truncate">
                  {q.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {lessonMap[q.lessonId.toString()] ?? "Unknown Lesson"}{" "}
                  &middot; {q.questions.length} questions
                </p>
              </div>
              <button
                type="button"
                onClick={() => setEditQuiz(q)}
                className="p-2.5 rounded-xl bg-muted hover:bg-muted/70 transition-colors shrink-0"
                aria-label="Edit quiz"
                data-ocid={`admin.quizzes.edit_button.${i + 1}`}
              >
                <PenLine className="w-4 h-4 text-foreground" />
              </button>
              <button
                type="button"
                onClick={() => setDeleteTarget(q)}
                className="p-2.5 rounded-xl bg-destructive/10 hover:bg-destructive/20 transition-colors shrink-0"
                aria-label="Delete quiz"
                data-ocid={`admin.quizzes.delete_button.${i + 1}`}
              >
                <Trash2 className="w-4 h-4 text-destructive" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {(addOpen || editQuiz) && (
        <QuizModal
          quiz={editQuiz}
          lessons={lessons}
          onClose={() => {
            setAddOpen(false);
            setEditQuiz(undefined);
          }}
        />
      )}
      {deleteTarget && (
        <DeleteConfirm
          label={deleteTarget.title}
          isPending={deleteQuiz.isPending}
          onConfirm={() => {
            deleteQuiz.mutate(deleteTarget.id, {
              onSuccess: () => setDeleteTarget(null),
            });
          }}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </section>
  );
}

// ---- Empty State ----
function EmptyState({
  icon: Icon,
  message,
}: {
  icon: React.ElementType;
  message: string;
}) {
  return (
    <div
      className="flex flex-col items-center gap-3 py-14 text-center"
      data-ocid="admin.empty_state"
    >
      <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
        <Icon className="w-7 h-7 text-muted-foreground" />
      </div>
      <p className="text-muted-foreground text-sm max-w-xs">{message}</p>
    </div>
  );
}

// ---- Tabs ----
type Tab = "courses" | "lessons" | "quizzes";

// ---- Main Admin Page ----
export function AdminPage() {
  return <Admin />;
}

function Admin() {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const adminQuery = useIsAdmin();
  const [activeTab, setActiveTab] = useState<Tab>("courses");

  const coursesQuery = useListAllCourses();
  const courses = coursesQuery.data ?? [];

  const lessonsQuery = useAllLessons();
  const lessons = lessonsQuery.data ?? [];

  const quizzesQuery = useAllQuizzes(lessons);
  const quizzes = quizzesQuery.data ?? [];

  const isLoading =
    authLoading || adminQuery.isLoading || coursesQuery.isLoading;

  const handleTabChange = useCallback((tab: Tab) => setActiveTab(tab), []);

  if (isLoading) {
    return (
      <Layout>
        <div
          className="flex-1 flex items-center justify-center py-24"
          data-ocid="admin.loading_state"
        >
          <LoadingSpinner />
        </div>
      </Layout>
    );
  }

  if (!isAuthenticated || adminQuery.data === false) {
    return (
      <Layout>
        <div
          className="flex-1 flex flex-col items-center justify-center gap-6 py-24 px-6 text-center"
          data-ocid="admin.access_denied"
        >
          <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground mb-2">
              Access Denied
            </h1>
            <p className="text-muted-foreground text-sm">
              You don't have permission to view this page.
            </p>
          </div>
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors min-h-[48px] flex items-center"
            data-ocid="admin.home_link"
          >
            Back to Home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        className="max-w-2xl mx-auto w-full px-4 py-6 flex flex-col gap-6"
        data-ocid="admin.page"
      >
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">
            Admin Panel
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage courses, lessons, and quizzes.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-1.5 bg-muted/50 p-1.5 rounded-2xl"
          data-ocid="admin.tabs"
        >
          <TabBtn
            active={activeTab === "courses"}
            onClick={() => handleTabChange("courses")}
            icon={GraduationCap}
            label="Courses"
            ocid="admin.courses.tab"
          />
          <TabBtn
            active={activeTab === "lessons"}
            onClick={() => handleTabChange("lessons")}
            icon={BookOpen}
            label="Lessons"
            ocid="admin.lessons.tab"
          />
          <TabBtn
            active={activeTab === "quizzes"}
            onClick={() => handleTabChange("quizzes")}
            icon={HelpCircle}
            label="Quizzes"
            ocid="admin.quizzes.tab"
          />
        </div>

        {/* Tab Content */}
        {activeTab === "courses" && <CoursesTab courses={courses} />}
        {activeTab === "lessons" && (
          <LessonsTab lessons={lessons} courses={courses} />
        )}
        {activeTab === "quizzes" && (
          <QuizzesTab quizzes={quizzes} lessons={lessons} />
        )}
      </div>
    </Layout>
  );
}
