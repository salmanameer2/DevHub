import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ExternalLink, Sparkles, ArrowUpRight } from "lucide-react";
import Badge from "./Badge";
import FavoriteButton from "./FavoriteButton";
import ToolLogo from "./ToolLogo";
import { cn } from "@/lib/utils";

export default function ToolCard({ tool, featured = false, index = 0 }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px 0px" }}
      exit={{ opacity: 0, y: -8, scale: 0.96 }}
      transition={{
        duration: 0.42,
        delay: Math.min((index % 8) * 0.05, 0.35),
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "gradient-border-card card-visual-mesh card-hover group relative flex h-full flex-col justify-between rounded-3xl p-6",
        featured && "ring-1 ring-primary/20",
      )}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative">
              <ToolLogo tool={tool} size={featured ? 52 : 44} />
              {tool.featured && (
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
                  ★
                </span>
              )}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h3 className={cn("truncate font-semibold", featured ? "text-lg" : "text-base")}>
                  {tool.name}
                </h3>
                <ArrowUpRight className="h-3.5 w-3.5 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="truncate text-xs font-medium text-muted-foreground">{tool.category}</p>
            </div>
          </div>
          <FavoriteButton slug={tool.slug} />
        </div>

        <p
          className={cn(
            "mt-4 text-sm leading-relaxed text-muted-foreground",
            featured ? "" : "line-clamp-3",
          )}
        >
          {tool.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {tool.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} tone="outline" className="text-[11px]">
              {tag}
            </Badge>
          ))}
          <Badge tone={tool.pricing === "Paid" ? "default" : "accent"} className="text-[11px]">
            {tool.pricing}
          </Badge>
          {tool.featured ? (
            <Badge tone="primary" className="gap-1 text-[11px]">
              <Sparkles className="h-3 w-3" /> Featured
            </Badge>
          ) : null}
        </div>
      </div>

      <div className="relative z-10 mt-6 pt-2">
        {featured && (
          <div className="mb-4 flex items-center gap-1">
            <div className="h-1 w-5 rounded-full bg-white/90 shadow-[0_0_6px_rgba(255,255,255,0.5)]" />
            <div className="h-1 w-2 rounded-full bg-muted-foreground/25" />
            <div className="h-1 w-2 rounded-full bg-muted-foreground/25" />
            <div className="h-1 w-2 rounded-full bg-muted-foreground/25" />
          </div>
        )}
        <div className="flex items-center gap-2">
          <Link
            to="/tools/$slug"
            params={{ slug: tool.slug }}
            className="inline-flex h-9 flex-1 items-center justify-center rounded-xl border border-border/60 bg-surface/40 text-xs font-medium text-secondary-foreground backdrop-blur-md transition-all hover:border-border hover:bg-surface/70 hover:text-foreground"
          >
            Details
          </Link>
          <a
            href={tool.website}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-xl border border-primary/40 bg-primary/25 text-xs font-medium text-foreground backdrop-blur-md transition-all hover:border-primary/60 hover:bg-primary/40 hover:text-white"
          >
            Visit <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

