interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

export function LoadingSpinner({
  size = "md",
  className = "",
  label = "Loading...",
}: LoadingSpinnerProps) {
  const sizes: Record<typeof size, string> = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-2",
    lg: "h-12 w-12 border-3",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
      aria-label={label}
    >
      <div
        className={`${sizes[size]} rounded-full border-primary/20 border-t-primary animate-spin`}
      />
      {size === "lg" && (
        <p className="text-sm text-muted-foreground font-body animate-pulse">
          {label}
        </p>
      )}
    </div>
  );
}
