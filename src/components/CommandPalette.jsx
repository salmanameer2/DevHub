import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, Command, Search } from "lucide-react";
import { navigationItems, popularSearches } from "@/assets/assets";
import { searchCategories, searchTools } from "@/lib/search";
import { useCommandPalette, useLibrary } from "@/context/AppProviders";
import ToolLogo from "./ToolLogo";

export default function CommandPalette() {
  const { open, setOpen } = useCommandPalette();
  const { searches, trackSearch } = useLibrary();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(!open);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, setOpen]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const toolResults = useMemo(() => (query ? searchTools(query).slice(0, 6) : []), [query]);
  const categoryResults = useMemo(
    () => (query ? searchCategories(query).slice(0, 4) : []),
    [query],
  );
  const pageResults = useMemo(
    () =>
      navigationItems
        .filter((item) => item.label.toLowerCase().includes(query.trim().toLowerCase()))
        .slice(0, 5),
    [query],
  );

  const go = (to, params) => {
    trackSearch(query);
    setOpen(false);
    navigate(params ? { to, params } : { to });
  };

  const hasResults = toolResults.length || categoryResults.length || pageResults.length;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="surface-panel relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl"
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search tools, categories, pages..."
                aria-label="Search everything"
                className="h-14 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <kbd className="hidden rounded-md border border-border px-2 py-1 text-[10px] text-muted-foreground sm:block">
                ESC
              </kbd>
            </div>

            <div className="scrollbar-slim max-h-[55vh] overflow-y-auto p-2">
              {!query ? (
                <div className="space-y-4 p-2">
                  {searches.length ? (
                    <div>
                      <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Recent searches
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {searches.map((term) => (
                          <button
                            key={term}
                            type="button"
                            onClick={() => setQuery(term)}
                            className="rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  <div>
                    <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Popular searches
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {popularSearches.map((term) => (
                        <button
                          key={term}
                          type="button"
                          onClick={() => setQuery(term)}
                          className="rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}

              {query && !hasResults ? (
                <p className="p-6 text-center text-sm text-muted-foreground">
                  No results for &ldquo;{query}&rdquo;. Try another keyword.
                </p>
              ) : null}

              {toolResults.length ? (
                <Group title="Tools">
                  {toolResults.map((tool) => (
                    <Row key={tool.id} onClick={() => go("/tools/$slug", { slug: tool.slug })}>
                      <ToolLogo tool={tool} size={28} className="rounded-lg" />
                      <span className="truncate font-medium">{tool.name}</span>
                      <span className="ml-auto truncate text-xs text-muted-foreground">
                        {tool.category}
                      </span>
                    </Row>
                  ))}
                </Group>
              ) : null}

              {categoryResults.length ? (
                <Group title="Categories">
                  {categoryResults.map((category) => (
                    <Row
                      key={category.slug}
                      onClick={() => go("/category/$slug", { slug: category.slug })}
                    >
                      <Command className="h-4 w-4 text-muted-foreground" />
                      <span className="truncate">{category.name}</span>
                      <span className="ml-auto text-xs text-muted-foreground">
                        {category.count}
                      </span>
                    </Row>
                  ))}
                </Group>
              ) : null}

              {query && pageResults.length ? (
                <Group title="Pages">
                  {pageResults.map((page) => (
                    <Row key={page.to} onClick={() => go(page.to)}>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      <span>{page.label}</span>
                    </Row>
                  ))}
                </Group>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Group({ title, children }) {
  return (
    <div className="mb-2">
      <p className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </p>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function Row({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors hover:bg-secondary"
    >
      {children}
    </button>
  );
}
