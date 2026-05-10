import type { Principal } from "@icp-sdk/core/principal";

export type UserId = Principal;
export type Timestamp = bigint;
export type CourseId = bigint;
export type LessonId = bigint;
export type QuizId = bigint;

export type Difficulty =
  | { Beginner: null }
  | { Intermediate: null }
  | { Advanced: null };

export interface Course {
  id: CourseId;
  title: string;
  description: string;
  difficulty: Difficulty;
  thumbnail: string;
  learningObjectives: string[];
  lessonOrder: LessonId[];
}

export interface Lesson {
  id: LessonId;
  courseId: CourseId;
  title: string;
  content: string;
  learningObjectives: string[];
  orderIndex: bigint;
  quizId: [] | [QuizId];
}

export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: bigint;
  explanation: string;
}

export interface Quiz {
  id: QuizId;
  lessonId: LessonId;
  title: string;
  questions: Question[];
}

export interface QuizScore {
  lessonId: LessonId;
  score: bigint;
}

export interface StudentProgress {
  userId: UserId;
  courseId: CourseId;
  completedLessons: LessonId[];
  quizScores: QuizScore[];
  lastVisitedLessonId: [] | [LessonId];
  enrolledAt: Timestamp;
}

export type DifficultyLabel = "Beginner" | "Intermediate" | "Advanced";

export function getDifficultyLabel(d: Difficulty): DifficultyLabel {
  if ("Beginner" in d) return "Beginner";
  if ("Intermediate" in d) return "Intermediate";
  return "Advanced";
}

export function getDifficultyColor(d: Difficulty): string {
  if ("Beginner" in d) return "text-accent";
  if ("Intermediate" in d) return "text-primary";
  return "text-destructive";
}
