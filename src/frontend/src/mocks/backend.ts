import type { backendInterface, Course, Lesson, Quiz, StudentProgress, UserRole } from "../backend";
import { Difficulty } from "../backend";

const courses: Course[] = [
  {
    id: BigInt(1),
    title: "Introduction to Generative AI",
    description: "A beginner-friendly course covering the fundamentals of generative AI, large language models, and how to use AI tools effectively.",
    difficulty: Difficulty.Beginner,
    thumbnail: "🤖",
    learningObjectives: [
      "Understand what generative AI is and how it works",
      "Learn about large language models (LLMs)",
      "Use prompting techniques effectively",
      "Recognize AI limitations and ethical considerations",
    ],
    lessonOrder: [BigInt(1), BigInt(2), BigInt(3)],
  },
  {
    id: BigInt(2),
    title: "AI Tools for Professionals",
    description: "Practical guide to integrating AI tools into your professional workflow — from writing and coding to data analysis and decision-making.",
    difficulty: Difficulty.Intermediate,
    thumbnail: "💼",
    learningObjectives: [
      "Select the right AI tool for each professional task",
      "Accelerate writing and communication with AI",
      "Use AI for data analysis and summarization",
      "Build AI-assisted coding workflows",
    ],
    lessonOrder: [BigInt(4), BigInt(5), BigInt(6)],
  },
  {
    id: BigInt(3),
    title: "Building with LLM APIs",
    description: "A technical deep-dive into building AI-powered applications using large language model APIs.",
    difficulty: Difficulty.Advanced,
    thumbnail: "⚡",
    learningObjectives: [
      "Integrate LLM APIs into applications",
      "Design effective system prompts",
      "Manage context windows and token costs",
      "Implement RAG (Retrieval Augmented Generation)",
    ],
    lessonOrder: [BigInt(7), BigInt(8), BigInt(9)],
  },
];

const lessons: Lesson[] = [
  {
    id: BigInt(1),
    courseId: BigInt(1),
    title: "What is Generative AI?",
    content: "# What is Generative AI?\n\nGenerative AI refers to artificial intelligence systems that can create new content — text, images, audio, video, and more — based on patterns learned from training data.\n\n## Key Concepts\n\n**Large Language Models (LLMs)** are neural networks trained on vast amounts of text data.\n\n```python\n# Example: calling an LLM API\nresponse = client.chat.completions.create(\n    model=\"gpt-4o\",\n    messages=[{\"role\": \"user\", \"content\": \"Hello!\"}]\n)\n```",
    learningObjectives: ["Define generative AI", "Identify major categories of generative AI tools"],
    orderIndex: BigInt(1),
    quizId: BigInt(1),
  },
  {
    id: BigInt(2),
    courseId: BigInt(1),
    title: "Prompting Fundamentals",
    content: "# Prompting Fundamentals\n\nA **prompt** is the input you give to an AI model.\n\n```\n[Role]: You are a [role/persona].\n[Context]: Here is the relevant background: [context]\n[Task]: Your task is to [specific task].\n[Format]: Respond as [format/structure].\n```",
    learningObjectives: ["Write effective prompts", "Apply prompting techniques to real tasks"],
    orderIndex: BigInt(2),
    quizId: BigInt(2),
  },
  {
    id: BigInt(3),
    courseId: BigInt(1),
    title: "AI Ethics and Limitations",
    content: "# AI Ethics and Limitations\n\n## Hallucinations\nAI models can confidently produce false information.",
    learningObjectives: ["Identify AI limitations", "Apply ethical guidelines when using AI tools"],
    orderIndex: BigInt(3),
    quizId: BigInt(3),
  },
  {
    id: BigInt(4),
    courseId: BigInt(2),
    title: "AI Writing and Communication",
    content: "# AI Writing and Communication\n\nAI tools have transformed professional writing workflows.",
    learningObjectives: ["Use AI to accelerate professional writing"],
    orderIndex: BigInt(1),
    quizId: BigInt(4),
  },
  {
    id: BigInt(5),
    courseId: BigInt(2),
    title: "AI for Data Analysis",
    content: "# AI for Data Analysis\n\n## What AI Can Do with Data\n\n```python\n# Generate pandas analysis\ndf.groupby('region')['revenue'].sum()\n```",
    learningObjectives: ["Use AI to analyze and summarize data"],
    orderIndex: BigInt(2),
    quizId: BigInt(5),
  },
  {
    id: BigInt(6),
    courseId: BigInt(2),
    title: "AI-Assisted Coding",
    content: "# AI-Assisted Coding\n\n## AI Coding Tools\n\n```typescript\n// Example Copilot suggestion\nfunction fetchUser(id: string): Promise<User> {\n  return api.get(`/users/${id}`);\n}\n```",
    learningObjectives: ["Use AI coding tools effectively"],
    orderIndex: BigInt(3),
    quizId: BigInt(6),
  },
  {
    id: BigInt(7),
    courseId: BigInt(3),
    title: "LLM API Fundamentals",
    content: "# LLM API Fundamentals\n\n```json\n{\n  \"model\": \"gpt-4o\",\n  \"messages\": [\n    { \"role\": \"system\", \"content\": \"You are a helpful assistant.\" },\n    { \"role\": \"user\", \"content\": \"What is machine learning?\" }\n  ]\n}\n```",
    learningObjectives: ["Understand LLM API structure", "Configure key API parameters"],
    orderIndex: BigInt(1),
    quizId: BigInt(7),
  },
  {
    id: BigInt(8),
    courseId: BigInt(3),
    title: "System Prompts and Context Management",
    content: "# System Prompts and Context Management\n\n```\n## Identity\nYou are [name], a [role] for [company].\n## Constraints\n- Never discuss [off-topic areas]\n```",
    learningObjectives: ["Design production-quality system prompts"],
    orderIndex: BigInt(2),
    quizId: BigInt(8),
  },
  {
    id: BigInt(9),
    courseId: BigInt(3),
    title: "Retrieval Augmented Generation (RAG)",
    content: "# Retrieval Augmented Generation (RAG)\n\n```python\nresponse = client.embeddings.create(\n    model=\"text-embedding-3-small\",\n    input=\"What is machine learning?\"\n)\n```",
    learningObjectives: ["Explain the RAG architecture", "Implement a basic RAG pipeline"],
    orderIndex: BigInt(3),
    quizId: BigInt(9),
  },
];

const quizzes: Quiz[] = [
  {
    id: BigInt(1),
    lessonId: BigInt(1),
    title: "What is Generative AI? Quiz",
    questions: [
      {
        questionText: "What does a large language model primarily do?",
        options: ["Store and retrieve documents", "Predict and generate text based on patterns", "Execute code on a server", "Translate images to text"],
        correctAnswerIndex: BigInt(1),
        explanation: "LLMs predict the next likely token based on learned patterns, enabling coherent text generation.",
      },
    ],
  },
  {
    id: BigInt(2),
    lessonId: BigInt(2),
    title: "Prompting Fundamentals Quiz",
    questions: [
      {
        questionText: "Which prompting technique asks the model to reason through a problem step-by-step?",
        options: ["Few-Shot", "Chain of Thought", "Role Prompting", "Output Formatting"],
        correctAnswerIndex: BigInt(1),
        explanation: "Chain of Thought prompting asks the model to think through problems step-by-step.",
      },
    ],
  },
];

const progress: StudentProgress = {
  userId: { toText: () => "aaaaa-bbbbb" } as any,
  courseId: BigInt(1),
  completedLessons: [BigInt(1)],
  enrolledAt: BigInt(Date.now()) * BigInt(1_000_000),
  quizScores: [{ lessonId: BigInt(1), score: BigInt(85) }],
  lastVisitedLessonId: BigInt(2),
};

export const mockBackend: backendInterface = {
  assignCallerUserRole: async (_user, _role) => undefined,
  createCourse: async (args) => ({ id: BigInt(4), ...args, lessonOrder: [] }),
  createLesson: async (args) => ({ id: BigInt(10), ...args, quizId: undefined }),
  createQuiz: async (args) => ({ id: BigInt(10), ...args }),
  deleteCourse: async () => true,
  deleteLesson: async () => true,
  deleteQuiz: async () => true,
  enrollInCourse: async () => progress,
  getCallerUserRole: async (): Promise<UserRole> => "user" as UserRole,
  getCourse: async (id) => courses.find((c) => c.id === id) ?? null,
  getLesson: async (id) => lessons.find((l) => l.id === id) ?? null,
  getLessonsForCourse: async (courseId) => lessons.filter((l) => l.courseId === courseId),
  getMyProgress: async () => progress,
  getQuizForLesson: async (lessonId) => quizzes.find((q) => q.lessonId === lessonId) ?? null,
  isCallerAdmin: async () => false,
  listCourses: async () => courses,
  markLessonComplete: async () => undefined,
  saveQuizScore: async () => undefined,
  updateCourse: async (args) => courses.find((c) => c.id === args.id) ?? null,
  updateLesson: async (args) => lessons.find((l) => l.id === args.id) ?? null,
  updateQuiz: async (args) => quizzes.find((q) => q.id === args.id) ?? null,
  _initializeAccessControl: async () => undefined,
};
