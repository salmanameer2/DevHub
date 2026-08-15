import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { navigationItems } from "@/assets/assets";
import Logo from "./Logo";
import Button from "./Button";

export default function MobileNavigation({ open, onClose }) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.nav
            aria-label="Mobile"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed right-0 top-0 z-[61] flex h-dvh w-[86%] max-w-sm flex-col border-l border-border bg-surface p-5 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="scrollbar-slim mt-6 flex-1 space-y-1 overflow-y-auto">
              {navigationItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={onClose}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "bg-secondary text-foreground" }}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button as={Link} to="/favorites" variant="outline" size="sm" onClick={onClose}>
                Favorites
              </Button>
              <Button as={Link} to="/dashboard" size="sm" onClick={onClose}>
                Dashboard
              </Button>
            </div>
          </motion.nav>
        </>
      ) : null}
    </AnimatePresence>
  );
}
