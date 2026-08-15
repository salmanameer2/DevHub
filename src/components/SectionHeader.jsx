import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export default function SectionHeader({ eyebrow, title, description, actionLabel, actionTo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
    >
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
        {description ? (
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">{description}</p>
        ) : null}
      </div>
      {actionTo ? (
        <Link
          to={actionTo}
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
        >
          {actionLabel || "View all"} <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </motion.div>
  );
}
