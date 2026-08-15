import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "border border-primary/45 bg-primary/30 text-foreground backdrop-blur-md hover:bg-primary/45 hover:border-primary/65 hover:text-white shadow-[0_10px_30px_-14px_var(--glow)]",
  secondary:
    "border border-border/60 bg-surface/40 text-secondary-foreground backdrop-blur-md hover:bg-surface/70 hover:border-border hover:text-foreground",
  outline:
    "border border-border/75 bg-surface/25 text-foreground backdrop-blur-md hover:bg-surface/50 hover:border-border",
  ghost:
    "bg-transparent text-muted-foreground hover:bg-surface/40 hover:backdrop-blur-md hover:text-foreground",
  accent:
    "border border-accent/40 bg-accent/25 text-foreground backdrop-blur-md hover:bg-accent/40 hover:border-accent/60",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10",
};

const Button = forwardRef(function Button(
  { as: Tag = "button", variant = "primary", size = "md", className, ...props },
  ref,
) {
  return (
    <Tag
      ref={ref}
      className={cn(
        "inline-flex select-none items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
});

export default Button;
