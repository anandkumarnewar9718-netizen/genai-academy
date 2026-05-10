import { u as useActor, a as useQuery, b as useMutation, c as createActor } from "./backend-DtJ819ci.js";
import { q as useQueryClient } from "./index-CdpgodV-.js";
function asActor(actor) {
  return actor;
}
function useListCourses() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      if (!actor) return [];
      return asActor(actor).listCourses();
    },
    enabled: !!actor && !isFetching
  });
}
function useGetCourse(courseId) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["course", courseId == null ? void 0 : courseId.toString()],
    queryFn: async () => {
      if (!actor || courseId === void 0) return null;
      const result = await asActor(actor).getCourse(courseId);
      return result.length > 0 ? result[0] ?? null : null;
    },
    enabled: !!actor && !isFetching && courseId !== void 0
  });
}
function useGetLessonsForCourse(courseId) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["lessons", courseId == null ? void 0 : courseId.toString()],
    queryFn: async () => {
      if (!actor || courseId === void 0) return [];
      return asActor(actor).getLessonsForCourse(courseId);
    },
    enabled: !!actor && !isFetching && courseId !== void 0
  });
}
function useGetLesson(lessonId) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["lesson", lessonId == null ? void 0 : lessonId.toString()],
    queryFn: async () => {
      if (!actor || lessonId === void 0) return null;
      const result = await asActor(actor).getLesson(lessonId);
      return result.length > 0 ? result[0] ?? null : null;
    },
    enabled: !!actor && !isFetching && lessonId !== void 0
  });
}
function useGetQuizForLesson(lessonId) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["quiz", lessonId == null ? void 0 : lessonId.toString()],
    queryFn: async () => {
      if (!actor || lessonId === void 0) return null;
      const result = await asActor(actor).getQuizForLesson(
        lessonId
      );
      return result.length > 0 ? result[0] ?? null : null;
    },
    enabled: !!actor && !isFetching && lessonId !== void 0
  });
}
function useGetMyProgress(courseId) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["progress", courseId == null ? void 0 : courseId.toString()],
    queryFn: async () => {
      if (!actor || courseId === void 0) return null;
      const result = await asActor(actor).getMyProgress(courseId);
      return result.length > 0 ? result[0] ?? null : null;
    },
    enabled: !!actor && !isFetching && courseId !== void 0
  });
}
function useEnrollInCourse() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (courseId) => {
      if (!actor) throw new Error("Not connected");
      await asActor(actor).enrollInCourse(courseId);
    },
    onSuccess: (_, courseId) => {
      qc.invalidateQueries({ queryKey: ["progress", courseId.toString()] });
    }
  });
}
function useMarkLessonComplete() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      courseId,
      lessonId
    }) => {
      if (!actor) throw new Error("Not connected");
      await asActor(actor).markLessonComplete(courseId, lessonId);
    },
    onSuccess: (_, { courseId }) => {
      qc.invalidateQueries({ queryKey: ["progress", courseId.toString()] });
    }
  });
}
function useSaveQuizScore() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      courseId,
      lessonId,
      score
    }) => {
      if (!actor) throw new Error("Not connected");
      await asActor(actor).saveQuizScore(courseId, lessonId, score);
    },
    onSuccess: (_, { courseId }) => {
      qc.invalidateQueries({ queryKey: ["progress", courseId.toString()] });
    }
  });
}
export {
  useGetCourse as a,
  useGetLessonsForCourse as b,
  useGetMyProgress as c,
  useEnrollInCourse as d,
  useGetLesson as e,
  useGetQuizForLesson as f,
  useMarkLessonComplete as g,
  useSaveQuizScore as h,
  useListCourses as u
};
