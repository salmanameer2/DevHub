import { cn } from "@/lib/utils";

const tones = {
  default: "bg-secondary text-secondary-foreground",
  primary: "bg-primary/15 text-primary",
  accent: "bg-accent/15 text-accent",
  outline: "border border-border text-muted-foreground",
};

export default function Badge({ children, tone = "default", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium leading-none tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
