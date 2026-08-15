import { Link } from "@tanstack/react-router";
import { Boxes } from "lucide-react";
import { site } from "@/assets/assets";

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_10px_24px_-14px_var(--glow)]">
        <Boxes className="h-5 w-5" />
      </span>
      {!compact ? (
        <span className="font-display text-base font-semibold tracking-tight">{site.name}</span>
      ) : null}
    </Link>
  );
}
