import { CourseCard } from "@/components/CourseCard";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useListCourses } from "@/hooks/useBackend";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Practical Courses",
    desc: "Structured paths from LLM basics to advanced fine-tuning and RAG architectures.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ClipboardCheck,
    title: "Hands-On Quizzes",
    desc: "Test your knowledge with interactive quizzes after every lesson.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    desc: "Visual dashboards show exactly where you are in each course.",
    color: "bg-primary/10 text-primary",
  },
];

const stats = [
  { value: "12+", label: "Courses" },
  { value: "80+", label: "Lessons" },
  { value: "40+", label: "Quizzes" },
];

const checkpoints = [
  "No ML background required",
  "Mobile-friendly learning",
  "Self-paced curriculum",
  "Certificate of completion",
];

export function LandingPage() {
  const { data: courses, isLoading } = useListCourses();
  const featured = courses?.slice(0, 3) ?? [];

  return (
    <div className="flex flex-col" data-ocid="landing.page">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-5 pt-14 pb-16 bg-gradient-to-b from-primary/8 via-background to-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <Badge
          variant="outline"
          className="mb-4 border-primary/30 text-primary bg-primary/8 font-body text-xs px-3 py-1"
        >
          <Sparkles className="h-3 w-3 mr-1.5" /> The #1 GenAI Learning Platform
        </Badge>

        <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight text-foreground max-w-sm">
          Learn <span className="text-primary">Generative AI</span>
        </h1>
        <p className="mt-4 text-base text-muted-foreground font-body max-w-sm leading-relaxed">
          Interactive courses teaching LLMs, prompt engineering, RAG, and AI
          ethics — for students and working professionals.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-8 w-full max-w-xs">
          <Link to="/courses" className="flex-1" data-ocid="landing.browse_cta">
            <Button
              className="w-full btn-touch font-display font-semibold"
              size="lg"
            >
              Browse Courses <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </Link>
          <Link
            to="/dashboard"
            className="flex-1"
            data-ocid="landing.dashboard_cta"
          >
            <Button
              variant="outline"
              className="w-full btn-touch font-display font-semibold"
              size="lg"
            >
              My Dashboard
            </Button>
          </Link>
        </div>

        {/* Checkpoints */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-8">
          {checkpoints.map((text) => (
            <span
              key={text}
              className="flex items-center gap-1.5 text-xs text-muted-foreground font-body"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
              {text}
            </span>
          ))}
        </div>
      </section>

      {/* Stats Row */}
      <section
        className="bg-primary px-4 py-6"
        data-ocid="landing.stats_section"
      >
        <div className="flex justify-around max-w-sm mx-auto">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display font-bold text-3xl text-primary-foreground">
                {value}
              </p>
              <p className="text-xs font-body text-primary-foreground/70 mt-0.5">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section
        className="px-4 py-12 bg-muted/30"
        data-ocid="landing.benefits_section"
      >
        <h2 className="font-display font-bold text-xl text-center text-foreground mb-2">
          Why GenAI Academy?
        </h2>
        <p className="text-sm text-muted-foreground font-body text-center mb-8">
          Everything you need to become an AI practitioner
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {benefits.map(({ icon: Icon, title, desc, color }) => (
            <Card key={title} className="border-border/60 bg-card shadow-card">
              <CardContent className="p-5 flex flex-col gap-3">
                <div
                  className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-sm text-card-foreground">
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  {desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section
        className="px-4 py-12 bg-background"
        data-ocid="landing.featured_section"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display font-bold text-xl text-foreground">
              Featured Courses
            </h2>
            <p className="text-sm text-muted-foreground font-body mt-1">
              Start learning today
            </p>
          </div>
          <Link to="/courses" data-ocid="landing.view_all_link">
            <Button
              variant="ghost"
              size="sm"
              className="font-body text-primary"
            >
              View all <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Button>
          </Link>
        </div>

        {isLoading ? (
          <div
            data-ocid="landing.courses_loading_state"
            className="flex justify-center py-12"
          >
            <LoadingSpinner size="lg" label="Loading courses..." />
          </div>
        ) : featured.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {featured.map((course, i) => (
              <CourseCard
                key={course.id.toString()}
                course={course}
                index={i}
              />
            ))}
          </div>
        ) : (
          <div
            data-ocid="landing.featured_empty_state"
            className="flex flex-col items-center justify-center py-12 gap-4 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
              <BookOpen className="h-7 w-7 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground font-body">
              Courses coming soon. Check back shortly.
            </p>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section
        className="px-4 py-14 text-center bg-gradient-to-br from-primary/8 via-muted/30 to-accent/8"
        data-ocid="landing.cta_section"
      >
        <Zap className="h-8 w-8 text-primary mx-auto mb-4" />
        <h2 className="font-display font-bold text-2xl text-foreground mb-3">
          Ready to start learning?
        </h2>
        <p className="text-sm text-muted-foreground font-body mb-6 max-w-xs mx-auto">
          Join thousands of learners mastering AI skills today.
        </p>
        <Link to="/courses" data-ocid="landing.bottom_browse_cta">
          <Button className="btn-touch font-display font-semibold" size="lg">
            <BookOpen className="h-4 w-4 mr-2" /> Browse Courses
          </Button>
        </Link>
      </section>
    </div>
  );
}
