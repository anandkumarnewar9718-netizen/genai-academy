import { ProgressBar } from "@/components/ProgressBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Course, Difficulty } from "@/types";
import { getDifficultyLabel } from "@/types";
import { Link } from "@tanstack/react-router";
import { BookOpen, Clock } from "lucide-react";

interface CourseCardProps {
  course: Course;
  progress?: number; // 0–100
  index?: number;
}

const difficultyColors: Record<string, string> = {
  Beginner: "bg-accent/15 text-accent border-accent/30",
  Intermediate: "bg-primary/15 text-primary border-primary/30",
  Advanced: "bg-destructive/15 text-destructive border-destructive/30",
};

const thumbnailGradients = [
  "from-primary/30 via-primary/10 to-accent/20",
  "from-accent/30 via-accent/10 to-primary/20",
  "from-primary/20 via-accent/15 to-primary/30",
  "from-accent/20 via-primary/15 to-accent/30",
];

export function CourseCard({ course, progress, index = 0 }: CourseCardProps) {
  const label = getDifficultyLabel(course.difficulty as Difficulty);
  const gradient = thumbnailGradients[index % thumbnailGradients.length];

  return (
    <Card
      data-ocid={`course.item.${index + 1}`}
      className="relative overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group border-border/60 bg-card flex flex-col"
    >
      {/* Thumbnail */}
      <div
        className={`relative h-32 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
      >
        {course.thumbnail ? (
          <img
            src={course.thumbnail}
            alt={course.title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : null}
        <BookOpen className="h-10 w-10 text-primary/40 group-hover:scale-110 transition-transform duration-300" />
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-accent rounded-bl-xl opacity-80" />
        <Badge
          className={`absolute bottom-2 left-2 text-xs border ${difficultyColors[label]}`}
          variant="outline"
        >
          {label}
        </Badge>
      </div>

      <CardContent className="p-4 flex flex-col gap-3 flex-1">
        <h3 className="font-display font-semibold text-sm leading-snug text-card-foreground line-clamp-2">
          {course.title}
        </h3>
        <p className="text-xs text-muted-foreground font-body line-clamp-2 flex-1">
          {course.description}
        </p>

        {typeof progress === "number" && (
          <ProgressBar value={progress} showLabel size="sm" />
        )}

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{Number(course.lessonOrder?.length ?? 0)} lessons</span>
        </div>

        <Link
          to="/courses/$courseId"
          params={{ courseId: course.id.toString() }}
          className="block"
          data-ocid={`course.view_button.${index + 1}`}
        >
          <Button
            className="w-full btn-touch font-display font-semibold text-sm"
            variant={
              typeof progress === "number" && progress > 0
                ? "default"
                : "outline"
            }
            size="sm"
          >
            {typeof progress === "number" && progress > 0
              ? "Continue Learning"
              : "View Course"}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
