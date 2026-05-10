import { createActor } from "@/backend";
import type {
  Course,
  CourseId,
  Lesson,
  LessonId,
  Quiz,
  StudentProgress,
} from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type AnyActor = Record<string, (...args: unknown[]) => Promise<unknown>>;

function asActor(actor: unknown): AnyActor {
  return actor as AnyActor;
}

// --- Courses ---
export function useListCourses() {
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

export function useGetCourse(courseId: CourseId | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Course | null>({
    queryKey: ["course", courseId?.toString()],
    queryFn: async (): Promise<Course | null> => {
      if (!actor || courseId === undefined) return null;
      const result = await (asActor(actor).getCourse(courseId) as Promise<
        [] | [Course]
      >);
      return result.length > 0 ? (result[0] ?? null) : null;
    },
    enabled: !!actor && !isFetching && courseId !== undefined,
  });
}

export function useGetLessonsForCourse(courseId: CourseId | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Lesson[]>({
    queryKey: ["lessons", courseId?.toString()],
    queryFn: async (): Promise<Lesson[]> => {
      if (!actor || courseId === undefined) return [];
      return asActor(actor).getLessonsForCourse(courseId) as Promise<Lesson[]>;
    },
    enabled: !!actor && !isFetching && courseId !== undefined,
  });
}

export function useGetLesson(lessonId: LessonId | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Lesson | null>({
    queryKey: ["lesson", lessonId?.toString()],
    queryFn: async (): Promise<Lesson | null> => {
      if (!actor || lessonId === undefined) return null;
      const result = await (asActor(actor).getLesson(lessonId) as Promise<
        [] | [Lesson]
      >);
      return result.length > 0 ? (result[0] ?? null) : null;
    },
    enabled: !!actor && !isFetching && lessonId !== undefined,
  });
}

export function useGetQuizForLesson(lessonId: LessonId | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Quiz | null>({
    queryKey: ["quiz", lessonId?.toString()],
    queryFn: async (): Promise<Quiz | null> => {
      if (!actor || lessonId === undefined) return null;
      const result = await (asActor(actor).getQuizForLesson(
        lessonId,
      ) as Promise<[] | [Quiz]>);
      return result.length > 0 ? (result[0] ?? null) : null;
    },
    enabled: !!actor && !isFetching && lessonId !== undefined,
  });
}

// --- Student ---
export function useGetMyProgress(courseId: CourseId | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<StudentProgress | null>({
    queryKey: ["progress", courseId?.toString()],
    queryFn: async (): Promise<StudentProgress | null> => {
      if (!actor || courseId === undefined) return null;
      const result = await (asActor(actor).getMyProgress(courseId) as Promise<
        [] | [StudentProgress]
      >);
      return result.length > 0 ? (result[0] ?? null) : null;
    },
    enabled: !!actor && !isFetching && courseId !== undefined,
  });
}

export function useEnrollInCourse() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (courseId: CourseId): Promise<void> => {
      if (!actor) throw new Error("Not connected");
      await asActor(actor).enrollInCourse(courseId);
    },
    onSuccess: (_, courseId) => {
      qc.invalidateQueries({ queryKey: ["progress", courseId.toString()] });
    },
  });
}

export function useMarkLessonComplete() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      courseId,
      lessonId,
    }: { courseId: CourseId; lessonId: LessonId }): Promise<void> => {
      if (!actor) throw new Error("Not connected");
      await asActor(actor).markLessonComplete(courseId, lessonId);
    },
    onSuccess: (_, { courseId }) => {
      qc.invalidateQueries({ queryKey: ["progress", courseId.toString()] });
    },
  });
}

export function useSaveQuizScore() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      courseId,
      lessonId,
      score,
    }: {
      courseId: CourseId;
      lessonId: LessonId;
      score: bigint;
    }): Promise<void> => {
      if (!actor) throw new Error("Not connected");
      await asActor(actor).saveQuizScore(courseId, lessonId, score);
    },
    onSuccess: (_, { courseId }) => {
      qc.invalidateQueries({ queryKey: ["progress", courseId.toString()] });
    },
  });
}
