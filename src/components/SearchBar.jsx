import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search tools...",
  className,
  autoFocus,
}) {
  return (
    <div className={cn("relative", className)}>
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="search"
        value={value}
        autoFocus={autoFocus}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="h-12 w-full rounded-xl border border-border bg-surface/80 pl-11 pr-10 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
      />
      {value ? (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
}
