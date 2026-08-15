import { Heart } from "lucide-react";
import { useLibrary } from "@/context/AppProviders";
import { cn } from "@/lib/utils";

export default function FavoriteButton({ slug, className }) {
  const { isFavorite, toggleFavorite } = useLibrary();
  const active = isFavorite(slug);

  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleFavorite(slug);
      }}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-surface/50 text-muted-foreground backdrop-blur-md transition-all hover:border-primary/40 hover:bg-surface/80 hover:text-primary",
        active && "border-primary/50 bg-primary/20 text-primary",
        className,
      )}
    >
      <Heart className={cn("h-4 w-4", active && "fill-current")} />
    </button>
  );
}
