import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { categories, sections } from "@/assets/assets";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "surface-panel sticky top-20 hidden h-fit shrink-0 rounded-3xl p-3 lg:block",
        collapsed ? "w-16" : "w-60",
      )}
    >
      <button
        type="button"
        onClick={() => setCollapsed((value) => !value)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="mb-3 inline-flex h-9 w-full items-center justify-center gap-2 rounded-lg text-xs text-muted-foreground hover:bg-secondary hover:text-foreground"
      >
        {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
        {!collapsed ? <span>Collapse</span> : null}
      </button>

      {!collapsed ? (
        <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Sections
        </p>
      ) : null}
      <div className="space-y-1">
        {sections.map((section) => (
          <Link
            key={section.id}
            to={section.route}
            activeProps={{ className: "bg-secondary text-foreground" }}
            className={cn(
              "block truncate rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
              collapsed && "text-center text-xs",
            )}
          >
            {collapsed ? section.label.charAt(0) : section.label}
          </Link>
        ))}
      </div>

      {!collapsed ? (
        <>
          <p className="px-3 pb-2 pt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Categories
          </p>
          <div className="scrollbar-slim max-h-[50vh] space-y-1 overflow-y-auto pr-1">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to="/category/$slug"
                params={{ slug: category.slug }}
                activeProps={{ className: "bg-secondary text-foreground" }}
                className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <span className="truncate">{category.name}</span>
                <span className="text-[11px] text-muted-foreground">{category.count}</span>
              </Link>
            ))}
          </div>
        </>
      ) : null}
    </aside>
  );
}
