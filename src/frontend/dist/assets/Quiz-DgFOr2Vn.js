import { c as createLucideIcon, u as useParams, l as useNavigate, r as reactExports, j as jsxRuntimeExports, b as LoadingSpinner, B as Button } from "./index-CdpgodV-.js";
import { P as ProgressBar } from "./ProgressBar-Cbdn_gf9.js";
import { f as useGetQuizForLesson, h as useSaveQuizScore } from "./useBackend-BZbCDEVN.js";
import { A as ArrowLeft } from "./arrow-left-lF_b3XHZ.js";
import { A as AnimatePresence, m as motion } from "./proxy-CGV0KWGH.js";
import { C as ChevronRight } from "./chevron-right-CuXHEJzZ.js";
import { C as CircleCheck } from "./circle-check-HfH6VKW7.js";
import "./backend-DtJ819ci.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
];
const Trophy = createLucideIcon("trophy", __iconNode);
function IntroScreen({
  title,
  questionCount,
  onStart,
  onBack
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -24 },
      transition: { duration: 0.3 },
      className: "flex flex-col items-center gap-6 px-4 py-8 max-w-md mx-auto w-full",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-10 w-10 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl text-foreground", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground font-body", children: [
            "Test your knowledge with",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: questionCount }),
            " ",
            questionCount === 1 ? "question" : "questions"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full bg-card border border-border rounded-xl p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-display font-semibold text-foreground", children: "How it works" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground font-body", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0", children: "1" }),
              "Answer one question at a time"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0", children: "2" }),
              "Get instant feedback on each answer"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0", children: "3" }),
              "See your score at the end"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "w-full h-12 font-display font-semibold text-base",
            onClick: onStart,
            "data-ocid": "quiz.start_button",
            children: [
              "Start Quiz",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-1 h-5 w-5" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            className: "w-full h-12 font-body",
            onClick: onBack,
            "data-ocid": "quiz.back_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-1.5 h-4 w-4" }),
              "Back to Lesson"
            ]
          }
        )
      ]
    },
    "intro"
  );
}
const OPTION_LABELS = ["A", "B", "C", "D"];
function AnswerButton({
  text,
  index,
  selected,
  answered,
  correctIndex,
  onClick
}) {
  const isCorrectAnswer = index === correctIndex;
  let extraClass = "border-border";
  if (answered) {
    if (isCorrectAnswer) {
      extraClass = "border-[oklch(0.55_0.18_145)] bg-[oklch(0.55_0.18_145)]/10 text-[oklch(0.3_0.12_145)]";
    } else if (selected && !isCorrectAnswer) {
      extraClass = "border-destructive bg-destructive/10 text-destructive";
    } else {
      extraClass = "border-border opacity-50";
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      className: `w-full min-h-[48px] text-left flex items-center gap-3 px-4 py-3 rounded-xl border font-body text-sm transition-all duration-200 ${answered ? "cursor-default" : "cursor-pointer hover:border-primary hover:bg-primary/5"} ${extraClass}`,
      onClick: !answered ? onClick : void 0,
      "data-ocid": `quiz.answer.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `w-7 h-7 flex-shrink-0 rounded-lg flex items-center justify-center text-xs font-display font-bold ${answered && isCorrectAnswer ? "bg-[oklch(0.55_0.18_145)] text-white" : answered && selected && !isCorrectAnswer ? "bg-destructive text-destructive-foreground" : "bg-muted text-muted-foreground"}`,
            children: OPTION_LABELS[index]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 min-w-0", children: text }),
        answered && isCorrectAnswer && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-[oklch(0.55_0.18_145)] flex-shrink-0" }),
        answered && selected && !isCorrectAnswer && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-5 w-5 text-destructive flex-shrink-0" })
      ]
    }
  );
}
function QuestionScreen({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
  onNext,
  selectedIndex,
  answered
}) {
  const progress = questionIndex / totalQuestions * 100;
  const correctIndex = Number(question.correctAnswerIndex);
  const isCorrect = selectedIndex !== null && selectedIndex === correctIndex;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -40 },
      transition: { duration: 0.25 },
      className: "flex flex-col gap-5 px-4 py-6 max-w-md mx-auto w-full",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-body", children: [
              "Question ",
              questionIndex + 1,
              " of ",
              totalQuestions
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-primary font-display", children: [
              Math.round(progress),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { value: progress, size: "sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "bg-card border border-border rounded-2xl p-5",
            "data-ocid": "quiz.question_card",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-base text-foreground leading-snug", children: question.questionText })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", "data-ocid": "quiz.answers_list", children: question.options.map((opt, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          AnswerButton,
          {
            text: opt,
            index: idx,
            selected: selectedIndex === idx,
            answered,
            correctIndex,
            onClick: () => onAnswer(idx)
          },
          opt
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: answered && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0 },
            transition: { duration: 0.25 },
            className: `rounded-xl border p-4 ${isCorrect ? "bg-[oklch(0.55_0.18_145)]/10 border-[oklch(0.55_0.18_145)]/30" : "bg-destructive/10 border-destructive/30"}`,
            "data-ocid": "quiz.explanation",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
              isCorrect ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-[oklch(0.55_0.18_145)] flex-shrink-0 mt-0.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-5 w-5 text-destructive flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: `text-sm font-display font-semibold mb-1 ${isCorrect ? "text-[oklch(0.3_0.12_145)]" : "text-destructive"}`,
                    children: isCorrect ? "Correct!" : "Incorrect"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body leading-relaxed", children: question.explanation })
              ] })
            ] })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: answered && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0 },
            transition: { duration: 0.2, delay: 0.1 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "w-full h-12 font-display font-semibold",
                onClick: onNext,
                "data-ocid": "quiz.next_button",
                children: questionIndex + 1 < totalQuestions ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  "Next Question",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-1.5 h-5 w-5" })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  "See Results ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "ml-1.5 h-5 w-5" })
                ] })
              }
            )
          }
        ) })
      ]
    },
    `question-${questionIndex}`
  );
}
function ResultsScreen({
  score,
  total,
  passed,
  onRetake,
  onBack
}) {
  const pct = Math.round(score / total * 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.96 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 },
      className: "flex flex-col items-center gap-6 px-4 py-8 max-w-md mx-auto w-full",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `w-28 h-28 rounded-full flex flex-col items-center justify-center border-4 ${passed ? "border-[oklch(0.55_0.18_145)] bg-[oklch(0.55_0.18_145)]/10" : "border-destructive bg-destructive/10"}`,
            "data-ocid": "quiz.score_display",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: `font-display font-bold text-3xl ${passed ? "text-[oklch(0.3_0.12_145)]" : "text-destructive"}`,
                  children: [
                    pct,
                    "%"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground", children: "score" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-display font-semibold ${passed ? "bg-[oklch(0.55_0.18_145)]/15 text-[oklch(0.3_0.12_145)]" : "bg-destructive/15 text-destructive"}`,
            "data-ocid": "quiz.pass_fail_indicator",
            children: [
              passed ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4" }),
              passed ? "Passed" : "Not Passed"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-full bg-card border border-border rounded-2xl divide-y divide-border",
            "data-ocid": "quiz.results_card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm text-muted-foreground", children: "Questions correct" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-foreground", children: [
                  score,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-normal text-sm", children: [
                    "/ ",
                    total
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm text-muted-foreground", children: "Accuracy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `font-display font-bold ${passed ? "text-[oklch(0.3_0.12_145)]" : "text-destructive"}`,
                    children: [
                      pct,
                      "%"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { value: pct, size: "md", showLabel: false }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              className: "w-full h-12 font-display font-semibold",
              onClick: onRetake,
              "data-ocid": "quiz.retake_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "mr-2 h-4 w-4" }),
                "Retake Quiz"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              className: "w-full h-12 font-display font-semibold",
              onClick: onBack,
              "data-ocid": "quiz.back_to_lesson_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                "Back to Lesson"
              ]
            }
          )
        ] })
      ]
    },
    "results"
  );
}
function QuizPage() {
  const { courseId, lessonId } = useParams({
    from: "/courses/$courseId/lessons/$lessonId/quiz"
  });
  const navigate = useNavigate();
  const lessonIdBig = reactExports.useMemo(() => BigInt(lessonId), [lessonId]);
  const courseIdBig = reactExports.useMemo(() => BigInt(courseId), [courseId]);
  const { data: quiz, isLoading, isError } = useGetQuizForLesson(lessonIdBig);
  const saveScore = useSaveQuizScore();
  const [phase, setPhase] = reactExports.useState("intro");
  const [currentQ, setCurrentQ] = reactExports.useState(0);
  const [selectedIndex, setSelectedIndex] = reactExports.useState(null);
  const [answered, setAnswered] = reactExports.useState(false);
  const [correctCount, setCorrectCount] = reactExports.useState(0);
  const handleStart = reactExports.useCallback(() => {
    setPhase("question");
    setCurrentQ(0);
    setSelectedIndex(null);
    setAnswered(false);
    setCorrectCount(0);
  }, []);
  const handleAnswer = reactExports.useCallback(
    (idx) => {
      var _a;
      if (answered || !quiz) return;
      setSelectedIndex(idx);
      setAnswered(true);
      const correctIdx = Number(
        ((_a = quiz.questions[currentQ]) == null ? void 0 : _a.correctAnswerIndex) ?? 0
      );
      if (idx === correctIdx) {
        setCorrectCount((c) => c + 1);
      }
    },
    [answered, quiz, currentQ]
  );
  const handleNext = reactExports.useCallback(() => {
    if (!quiz) return;
    const isLast = currentQ + 1 >= quiz.questions.length;
    if (isLast) {
      saveScore.mutate({
        courseId: courseIdBig,
        lessonId: lessonIdBig,
        score: BigInt(correctCount)
      });
      setPhase("results");
    } else {
      setCurrentQ((q) => q + 1);
      setSelectedIndex(null);
      setAnswered(false);
    }
  }, [quiz, currentQ, correctCount, saveScore, courseIdBig, lessonIdBig]);
  const handleRetake = reactExports.useCallback(() => {
    setPhase("intro");
    setCurrentQ(0);
    setSelectedIndex(null);
    setAnswered(false);
    setCorrectCount(0);
  }, []);
  const handleBack = reactExports.useCallback(() => {
    navigate({
      to: "/courses/$courseId/lessons/$lessonId",
      params: { courseId, lessonId }
    });
  }, [navigate, courseId, lessonId]);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex flex-col items-center justify-center min-h-[60vh] gap-3",
        "data-ocid": "quiz.loading_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { size: "lg", label: "Loading quiz..." })
      }
    );
  }
  if (isError || !quiz) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center min-h-[60vh] gap-4 px-6 text-center",
        "data-ocid": "quiz.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-12 w-12 text-destructive" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-lg text-foreground", children: "Quiz not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: "This lesson may not have a quiz yet." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              onClick: handleBack,
              "data-ocid": "quiz.error_back_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                "Back to Lesson"
              ]
            }
          )
        ]
      }
    );
  }
  const totalQuestions = quiz.questions.length;
  const currentQuestion = quiz.questions[currentQ];
  const passed = correctCount / totalQuestions >= 0.7;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col min-h-screen bg-background",
      "data-ocid": "quiz.page",
      children: [
        phase === "question" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-10 bg-card/80 backdrop-blur-sm border-b border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full bg-primary transition-all duration-500 ease-out",
            style: {
              width: `${Math.round((currentQ + (answered ? 1 : 0)) / totalQuestions * 100)}%`
            },
            role: "progressbar",
            tabIndex: 0,
            "aria-valuenow": currentQ + (answered ? 1 : 0),
            "aria-valuemin": 0,
            "aria-valuemax": totalQuestions,
            "aria-label": "Quiz progress"
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-4 pt-4 pb-1 max-w-md mx-auto w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "flex items-center gap-1.5 text-sm text-muted-foreground font-body hover:text-foreground transition-colors duration-200 -ml-1 p-1 min-h-[48px]",
            onClick: handleBack,
            "data-ocid": "quiz.header_back_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
              "Lesson"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
          phase === "intro" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            IntroScreen,
            {
              title: quiz.title,
              questionCount: totalQuestions,
              onStart: handleStart,
              onBack: handleBack
            },
            "intro"
          ),
          phase === "question" && currentQuestion && /* @__PURE__ */ jsxRuntimeExports.jsx(
            QuestionScreen,
            {
              question: currentQuestion,
              questionIndex: currentQ,
              totalQuestions,
              onAnswer: handleAnswer,
              onNext: handleNext,
              selectedIndex,
              answered
            },
            `q-${currentQ}`
          ),
          phase === "results" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ResultsScreen,
            {
              score: correctCount,
              total: totalQuestions,
              passed,
              onRetake: handleRetake,
              onBack: handleBack
            },
            "results"
          )
        ] }) })
      ]
    }
  );
}
export {
  QuizPage
};
