interface ProgressBarProps {
  value: number; // 0-100
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ProgressBar({
  value,
  showLabel = false,
  size = "md",
  className = "",
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));

  const heights: Record<typeof size, string> = {
    sm: "h-1.5",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-muted-foreground font-body">
            Progress
          </span>
          <span className="text-xs font-semibold text-accent font-display">
            {clamped}%
          </span>
        </div>
      )}
      <div
        className={`w-full bg-muted rounded-full overflow-hidden ${heights[size]}`}
      >
        <div
          className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
          style={{ width: `${clamped}%` }}
          tabIndex={0}
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
