import { SearchX } from "lucide-react";
import { Link } from "@tanstack/react-router";
import Button from "./Button";

export default function EmptyState({
  title = "Nothing here yet",
  description = "Try adjusting your filters or explore the full tool directory.",
  actionLabel = "Browse all tools",
  actionTo = "/tools",
  icon: Icon = SearchX,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface/50 px-6 py-16 text-center">
      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-muted-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">{description}</p>
      {actionTo ? (
        <Button as={Link} to={actionTo} variant="outline" size="sm" className="mt-6">
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}
