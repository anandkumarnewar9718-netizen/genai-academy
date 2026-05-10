import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ProgressBar } from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { useGetQuizForLesson, useSaveQuizScore } from "@/hooks/useBackend";
import type { Question } from "@/types";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useMemo, useState } from "react";

type QuizPhase = "intro" | "question" | "results";

function IntroScreen({
  title,
  questionCount,
  onStart,
  onBack,
}: {
  title: string;
  questionCount: number;
  onStart: () => void;
  onBack: () => void;
}) {
  return (
    <motion.div
      key="intro"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center gap-6 px-4 py-8 max-w-md mx-auto w-full"
    >
      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
        <Trophy className="h-10 w-10 text-primary" />
      </div>
      <div className="text-center space-y-2">
        <h1 className="font-display font-bold text-2xl text-foreground">
          {title}
        </h1>
        <p className="text-muted-foreground font-body">
          Test your knowledge with{" "}
          <span className="font-semibold text-foreground">{questionCount}</span>{" "}
          {questionCount === 1 ? "question" : "questions"}
        </p>
      </div>
      <div className="w-full bg-card border border-border rounded-xl p-4 space-y-3">
        <p className="text-sm font-display font-semibold text-foreground">
          How it works
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground font-body">
          <li className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
              1
            </span>
            Answer one question at a time
          </li>
          <li className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
              2
            </span>
            Get instant feedback on each answer
          </li>
          <li className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
              3
            </span>
            See your score at the end
          </li>
        </ul>
      </div>
      <Button
        className="w-full h-12 font-display font-semibold text-base"
        onClick={onStart}
        data-ocid="quiz.start_button"
      >
        Start Quiz
        <ChevronRight className="ml-1 h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        className="w-full h-12 font-body"
        onClick={onBack}
        data-ocid="quiz.back_button"
      >
        <ArrowLeft className="mr-1.5 h-4 w-4" />
        Back to Lesson
      </Button>
    </motion.div>
  );
}

const OPTION_LABELS = ["A", "B", "C", "D"];

function AnswerButton({
  text,
  index,
  selected,
  answered,
  correctIndex,
  onClick,
}: {
  text: string;
  index: number;
  selected: boolean;
  answered: boolean;
  correctIndex: number;
  onClick: () => void;
}) {
  const isCorrectAnswer = index === correctIndex;
  let extraClass = "border-border";

  if (answered) {
    if (isCorrectAnswer) {
      extraClass =
        "border-[oklch(0.55_0.18_145)] bg-[oklch(0.55_0.18_145)]/10 text-[oklch(0.3_0.12_145)]";
    } else if (selected && !isCorrectAnswer) {
      extraClass = "border-destructive bg-destructive/10 text-destructive";
    } else {
      extraClass = "border-border opacity-50";
    }
  }

  return (
    <button
      type="button"
      className={`w-full min-h-[48px] text-left flex items-center gap-3 px-4 py-3 rounded-xl border font-body text-sm transition-all duration-200 ${
        answered
          ? "cursor-default"
          : "cursor-pointer hover:border-primary hover:bg-primary/5"
      } ${extraClass}`}
      onClick={!answered ? onClick : undefined}
      data-ocid={`quiz.answer.${index + 1}`}
    >
      <span
        className={`w-7 h-7 flex-shrink-0 rounded-lg flex items-center justify-center text-xs font-display font-bold ${
          answered && isCorrectAnswer
            ? "bg-[oklch(0.55_0.18_145)] text-white"
            : answered && selected && !isCorrectAnswer
              ? "bg-destructive text-destructive-foreground"
              : "bg-muted text-muted-foreground"
        }`}
      >
        {OPTION_LABELS[index]}
      </span>
      <span className="flex-1 min-w-0">{text}</span>
      {answered && isCorrectAnswer && (
        <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.18_145)] flex-shrink-0" />
      )}
      {answered && selected && !isCorrectAnswer && (
        <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
      )}
    </button>
  );
}

function QuestionScreen({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
  onNext,
  selectedIndex,
  answered,
}: {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (idx: number) => void;
  onNext: () => void;
  selectedIndex: number | null;
  answered: boolean;
}) {
  const progress = (questionIndex / totalQuestions) * 100;
  const correctIndex = Number(question.correctAnswerIndex);
  const isCorrect = selectedIndex !== null && selectedIndex === correctIndex;

  return (
    <motion.div
      key={`question-${questionIndex}`}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col gap-5 px-4 py-6 max-w-md mx-auto w-full"
    >
      {/* Progress indicator */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground font-body">
            Question {questionIndex + 1} of {totalQuestions}
          </span>
          <span className="text-xs font-semibold text-primary font-display">
            {Math.round(progress)}%
          </span>
        </div>
        <ProgressBar value={progress} size="sm" />
      </div>

      {/* Question card */}
      <div
        className="bg-card border border-border rounded-2xl p-5"
        data-ocid="quiz.question_card"
      >
        <p className="font-display font-semibold text-base text-foreground leading-snug">
          {question.questionText}
        </p>
      </div>

      {/* Answer options */}
      <div className="flex flex-col gap-3" data-ocid="quiz.answers_list">
        {question.options.map((opt, idx) => (
          <AnswerButton
            key={opt}
            text={opt}
            index={idx}
            selected={selectedIndex === idx}
            answered={answered}
            correctIndex={correctIndex}
            onClick={() => onAnswer(idx)}
          />
        ))}
      </div>

      {/* Explanation after answering */}
      <AnimatePresence>
        {answered && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`rounded-xl border p-4 ${
              isCorrect
                ? "bg-[oklch(0.55_0.18_145)]/10 border-[oklch(0.55_0.18_145)]/30"
                : "bg-destructive/10 border-destructive/30"
            }`}
            data-ocid="quiz.explanation"
          >
            <div className="flex items-start gap-2">
              {isCorrect ? (
                <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.18_145)] flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p
                  className={`text-sm font-display font-semibold mb-1 ${
                    isCorrect
                      ? "text-[oklch(0.3_0.12_145)]"
                      : "text-destructive"
                  }`}
                >
                  {isCorrect ? "Correct!" : "Incorrect"}
                </p>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {question.explanation}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Next button */}
      <AnimatePresence>
        {answered && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <Button
              className="w-full h-12 font-display font-semibold"
              onClick={onNext}
              data-ocid="quiz.next_button"
            >
              {questionIndex + 1 < totalQuestions ? (
                <>
                  Next Question
                  <ChevronRight className="ml-1.5 h-5 w-5" />
                </>
              ) : (
                <>
                  See Results <Trophy className="ml-1.5 h-5 w-5" />
                </>
              )}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ResultsScreen({
  score,
  total,
  passed,
  onRetake,
  onBack,
}: {
  score: number;
  total: number;
  passed: boolean;
  onRetake: () => void;
  onBack: () => void;
}) {
  const pct = Math.round((score / total) * 100);

  return (
    <motion.div
      key="results"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center gap-6 px-4 py-8 max-w-md mx-auto w-full"
    >
      <div
        className={`w-28 h-28 rounded-full flex flex-col items-center justify-center border-4 ${
          passed
            ? "border-[oklch(0.55_0.18_145)] bg-[oklch(0.55_0.18_145)]/10"
            : "border-destructive bg-destructive/10"
        }`}
        data-ocid="quiz.score_display"
      >
        <span
          className={`font-display font-bold text-3xl ${
            passed ? "text-[oklch(0.3_0.12_145)]" : "text-destructive"
          }`}
        >
          {pct}%
        </span>
        <span className="font-body text-xs text-muted-foreground">score</span>
      </div>

      <div
        className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-display font-semibold ${
          passed
            ? "bg-[oklch(0.55_0.18_145)]/15 text-[oklch(0.3_0.12_145)]"
            : "bg-destructive/15 text-destructive"
        }`}
        data-ocid="quiz.pass_fail_indicator"
      >
        {passed ? (
          <CheckCircle2 className="h-4 w-4" />
        ) : (
          <XCircle className="h-4 w-4" />
        )}
        {passed ? "Passed" : "Not Passed"}
      </div>

      <div
        className="w-full bg-card border border-border rounded-2xl divide-y divide-border"
        data-ocid="quiz.results_card"
      >
        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-body text-sm text-muted-foreground">
            Questions correct
          </span>
          <span className="font-display font-bold text-foreground">
            {score}{" "}
            <span className="text-muted-foreground font-normal text-sm">
              / {total}
            </span>
          </span>
        </div>
        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-body text-sm text-muted-foreground">
            Accuracy
          </span>
          <span
            className={`font-display font-bold ${
              passed ? "text-[oklch(0.3_0.12_145)]" : "text-destructive"
            }`}
          >
            {pct}%
          </span>
        </div>
        <div className="px-5 py-4">
          <ProgressBar value={pct} size="md" showLabel={false} />
        </div>
      </div>

      <div className="w-full space-y-3">
        <Button
          variant="outline"
          className="w-full h-12 font-display font-semibold"
          onClick={onRetake}
          data-ocid="quiz.retake_button"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Retake Quiz
        </Button>
        <Button
          className="w-full h-12 font-display font-semibold"
          onClick={onBack}
          data-ocid="quiz.back_to_lesson_button"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Lesson
        </Button>
      </div>
    </motion.div>
  );
}

export function QuizPage() {
  const { courseId, lessonId } = useParams({
    from: "/courses/$courseId/lessons/$lessonId/quiz",
  });
  const navigate = useNavigate();

  const lessonIdBig = useMemo(() => BigInt(lessonId), [lessonId]);
  const courseIdBig = useMemo(() => BigInt(courseId), [courseId]);

  const { data: quiz, isLoading, isError } = useGetQuizForLesson(lessonIdBig);
  const saveScore = useSaveQuizScore();

  const [phase, setPhase] = useState<QuizPhase>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const handleStart = useCallback(() => {
    setPhase("question");
    setCurrentQ(0);
    setSelectedIndex(null);
    setAnswered(false);
    setCorrectCount(0);
  }, []);

  const handleAnswer = useCallback(
    (idx: number) => {
      if (answered || !quiz) return;
      setSelectedIndex(idx);
      setAnswered(true);
      const correctIdx = Number(
        quiz.questions[currentQ]?.correctAnswerIndex ?? 0,
      );
      if (idx === correctIdx) {
        setCorrectCount((c) => c + 1);
      }
    },
    [answered, quiz, currentQ],
  );

  const handleNext = useCallback(() => {
    if (!quiz) return;
    const isLast = currentQ + 1 >= quiz.questions.length;
    if (isLast) {
      saveScore.mutate({
        courseId: courseIdBig,
        lessonId: lessonIdBig,
        score: BigInt(correctCount),
      });
      setPhase("results");
    } else {
      setCurrentQ((q) => q + 1);
      setSelectedIndex(null);
      setAnswered(false);
    }
  }, [quiz, currentQ, correctCount, saveScore, courseIdBig, lessonIdBig]);

  const handleRetake = useCallback(() => {
    setPhase("intro");
    setCurrentQ(0);
    setSelectedIndex(null);
    setAnswered(false);
    setCorrectCount(0);
  }, []);

  const handleBack = useCallback(() => {
    navigate({
      to: "/courses/$courseId/lessons/$lessonId",
      params: { courseId, lessonId },
    });
  }, [navigate, courseId, lessonId]);

  if (isLoading) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-[60vh] gap-3"
        data-ocid="quiz.loading_state"
      >
        <LoadingSpinner size="lg" label="Loading quiz..." />
      </div>
    );
  }

  if (isError || !quiz) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-6 text-center"
        data-ocid="quiz.error_state"
      >
        <XCircle className="h-12 w-12 text-destructive" />
        <p className="font-display font-semibold text-lg text-foreground">
          Quiz not found
        </p>
        <p className="font-body text-sm text-muted-foreground">
          This lesson may not have a quiz yet.
        </p>
        <Button
          variant="outline"
          onClick={handleBack}
          data-ocid="quiz.error_back_button"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Lesson
        </Button>
      </div>
    );
  }

  const totalQuestions = quiz.questions.length;
  const currentQuestion: Question | undefined = quiz.questions[currentQ];
  const passed = correctCount / totalQuestions >= 0.7;

  return (
    <div
      className="flex flex-col min-h-screen bg-background"
      data-ocid="quiz.page"
    >
      {/* Top completion progress bar */}
      {phase === "question" && (
        <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-sm border-b border-border/60">
          <div className="h-1 bg-muted">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{
                width: `${Math.round(((currentQ + (answered ? 1 : 0)) / totalQuestions) * 100)}%`,
              }}
              role="progressbar"
              tabIndex={0}
              aria-valuenow={currentQ + (answered ? 1 : 0)}
              aria-valuemin={0}
              aria-valuemax={totalQuestions}
              aria-label="Quiz progress"
            />
          </div>
        </div>
      )}

      {/* Back nav */}
      <div className="flex items-center px-4 pt-4 pb-1 max-w-md mx-auto w-full">
        <button
          type="button"
          className="flex items-center gap-1.5 text-sm text-muted-foreground font-body hover:text-foreground transition-colors duration-200 -ml-1 p-1 min-h-[48px]"
          onClick={handleBack}
          data-ocid="quiz.header_back_button"
        >
          <ArrowLeft className="h-4 w-4" />
          Lesson
        </button>
      </div>

      {/* Page content */}
      <div className="flex-1 overflow-y-auto pb-8">
        <AnimatePresence mode="wait">
          {phase === "intro" && (
            <IntroScreen
              key="intro"
              title={quiz.title}
              questionCount={totalQuestions}
              onStart={handleStart}
              onBack={handleBack}
            />
          )}
          {phase === "question" && currentQuestion && (
            <QuestionScreen
              key={`q-${currentQ}`}
              question={currentQuestion}
              questionIndex={currentQ}
              totalQuestions={totalQuestions}
              onAnswer={handleAnswer}
              onNext={handleNext}
              selectedIndex={selectedIndex}
              answered={answered}
            />
          )}
          {phase === "results" && (
            <ResultsScreen
              key="results"
              score={correctCount}
              total={totalQuestions}
              passed={passed}
              onRetake={handleRetake}
              onBack={handleBack}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
