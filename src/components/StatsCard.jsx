import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function StatsCard({
  label,
  value,
  hint,
  trend = "+12%",
  activeSegment = 1,
  totalSegments = 7,
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px 0px" }}
      transition={{
        duration: 0.45,
        delay: Math.min((index % 6) * 0.06, 0.3),
        ease: [0.16, 1, 0.3, 1],
      }}
      className="gradient-border-card card-visual-mesh card-hover group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6"
    >
      <div>
        {/* Top visual bar */}
        <div className="relative z-10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/95 text-zinc-950 shadow-sm transition-transform group-hover:scale-105">
              <Sparkles className="h-3.5 w-3.5 fill-zinc-950/20 text-zinc-950" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-foreground/90">{label}</span>
          </div>
          <span className="rounded-full border border-border/80 bg-surface/50 px-2.5 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur-sm">
            Live
          </span>
        </div>

        {/* Hero stat value with trend arrow */}
        <div className="relative z-10 mt-6 flex items-baseline gap-2">
          <p className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {value}
          </p>
          <ArrowUpRight className="h-6 w-6 stroke-[2.5] text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>

        {/* Narrative / hint description */}
        <p className="relative z-10 mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {hint || "Actively tracked across your dev workspace."}
        </p>
      </div>

      {/* Segmented indicator bar inspired by the reference image */}
      <div className="relative z-10 mt-6 flex items-center gap-1.5 pt-1">
        {Array.from({ length: totalSegments }).map((_, idx) => (
          <div
            key={idx}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              idx === activeSegment
                ? "bg-white/90 shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                : "bg-muted-foreground/20"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

