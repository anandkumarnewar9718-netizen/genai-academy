import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CreateLessonArgs {
    title: string;
    content: string;
    learningObjectives: Array<string>;
    courseId: CourseId;
    orderIndex: bigint;
}
export type Timestamp = bigint;
export interface UpdateQuizArgs {
    id: QuizId;
    lessonId: LessonId;
    title: string;
    questions: Array<Question>;
}
export type LessonId = bigint;
export interface Quiz {
    id: QuizId;
    lessonId: LessonId;
    title: string;
    questions: Array<Question>;
}
export interface CreateQuizArgs {
    lessonId: LessonId;
    title: string;
    questions: Array<Question>;
}
export interface Course {
    id: CourseId;
    title: string;
    thumbnail: string;
    difficulty: Difficulty;
    description: string;
    learningObjectives: Array<string>;
    lessonOrder: Array<LessonId>;
}
export type UserId = Principal;
export interface UpdateLessonArgs {
    id: LessonId;
    title: string;
    content: string;
    learningObjectives: Array<string>;
    quizId?: QuizId;
    courseId: CourseId;
    orderIndex: bigint;
}
export interface Lesson {
    id: LessonId;
    title: string;
    content: string;
    learningObjectives: Array<string>;
    quizId?: QuizId;
    courseId: CourseId;
    orderIndex: bigint;
}
export interface CreateCourseArgs {
    title: string;
    thumbnail: string;
    difficulty: Difficulty;
    description: string;
    learningObjectives: Array<string>;
}
export interface StudentProgress {
    quizScores: Array<QuizScoreEntry>;
    userId: UserId;
    completedLessons: Array<LessonId>;
    enrolledAt: Timestamp;
    courseId: CourseId;
    lastVisitedLessonId?: LessonId;
}
export type CourseId = bigint;
export interface UpdateCourseArgs {
    id: CourseId;
    title: string;
    thumbnail: string;
    difficulty: Difficulty;
    description: string;
    learningObjectives: Array<string>;
}
export interface Question {
    explanation: string;
    questionText: string;
    correctAnswerIndex: bigint;
    options: Array<string>;
}
export interface QuizScoreEntry {
    lessonId: LessonId;
    score: bigint;
}
export type QuizId = bigint;
export enum Difficulty {
    Beginner = "Beginner",
    Advanced = "Advanced",
    Intermediate = "Intermediate"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createCourse(args: CreateCourseArgs): Promise<Course>;
    createLesson(args: CreateLessonArgs): Promise<Lesson>;
    createQuiz(args: CreateQuizArgs): Promise<Quiz>;
    deleteCourse(id: CourseId): Promise<boolean>;
    deleteLesson(id: LessonId): Promise<boolean>;
    deleteQuiz(id: QuizId): Promise<boolean>;
    enrollInCourse(courseId: CourseId): Promise<StudentProgress>;
    getCallerUserRole(): Promise<UserRole>;
    getCourse(id: CourseId): Promise<Course | null>;
    getLesson(id: LessonId): Promise<Lesson | null>;
    getLessonsForCourse(courseId: CourseId): Promise<Array<Lesson>>;
    getMyProgress(courseId: CourseId): Promise<StudentProgress | null>;
    getQuizForLesson(lessonId: LessonId): Promise<Quiz | null>;
    isCallerAdmin(): Promise<boolean>;
    listCourses(): Promise<Array<Course>>;
    markLessonComplete(courseId: CourseId, lessonId: LessonId): Promise<void>;
    saveQuizScore(courseId: CourseId, lessonId: LessonId, score: bigint): Promise<void>;
    updateCourse(args: UpdateCourseArgs): Promise<Course | null>;
    updateLesson(args: UpdateLessonArgs): Promise<Lesson | null>;
    updateQuiz(args: UpdateQuizArgs): Promise<Quiz | null>;
}
