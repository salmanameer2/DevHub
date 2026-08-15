import { AnimatePresence, motion } from "framer-motion";
import ToolCard from "./ToolCard";
import EmptyState from "./EmptyState";
import { cn } from "@/lib/utils";

export default function ToolGrid({
  tools,
  featured = false,
  columns = 4,
  emptyTitle,
  emptyDescription,
}) {
  if (!tools.length) {
    return <EmptyState title={emptyTitle || "No tools found"} description={emptyDescription} />;
  }

  return (
    <motion.div
      layout
      className={cn(
        "grid gap-4 sm:grid-cols-2",
        columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-3 xl:grid-cols-4",
      )}
    >
      <AnimatePresence mode="popLayout">
        {tools.map((tool, index) => (
          <ToolCard key={tool.id} tool={tool} featured={featured} index={index} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
