import { motion } from "framer-motion";
import Breadcrumbs from "./Breadcrumbs";

export default function PageShell({
  title,
  description,
  breadcrumbs,
  actions,
  children,
  wide = false,
}) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`mx-auto w-full px-4 py-10 sm:px-6 lg:px-8 ${wide ? "max-w-[1600px]" : "max-w-7xl"}`}
    >
      {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
          {description ? (
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">{description}</p>
          ) : null}
        </div>
        {actions}
      </div>
      {children}
    </motion.main>
  );
}
