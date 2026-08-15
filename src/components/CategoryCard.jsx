import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, FolderKanban } from "lucide-react";

export default function CategoryCard({ category, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px 0px" }}
      transition={{
        duration: 0.42,
        delay: Math.min((index % 8) * 0.05, 0.35),
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        to="/category/$slug"
        params={{ slug: category.slug }}
        className="gradient-border-card card-visual-mesh card-hover group relative flex h-full flex-col justify-between rounded-3xl p-6"
      >
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface-2 text-foreground shadow-sm transition-transform group-hover:scale-105">
                <FolderKanban className="h-3.5 w-3.5 text-primary" />
              </span>
              <h3 className="text-base font-semibold text-foreground">{category.name}</h3>
            </div>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border/80 bg-surface/50 text-muted-foreground transition-all group-hover:border-primary/40 group-hover:text-primary">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {category.description}
          </p>
        </div>
        <div className="relative z-10 mt-6 flex items-center justify-between border-t border-border/60 pt-3">
          <span className="text-xs font-semibold tracking-wide text-primary">
            {category.count} tools available
          </span>
          <span className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground">
            Browse collection &rarr;
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

