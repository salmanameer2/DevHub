import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, LayoutDashboard, Menu } from "lucide-react";
import { navigationItems } from "@/assets/assets";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background transition-colors">
      <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden flex-1 items-center gap-1.5 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground bg-secondary" }}
              className="rounded-xl px-3.5 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-surface-2 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link
            to="/favorites"
            aria-label="Favorites"
            className="hidden h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-muted-foreground transition-all hover:border-primary/40 hover:bg-surface-2 hover:text-foreground sm:inline-flex"
          >
            <Heart className="h-4 w-4" />
          </Link>
          <Link
            to="/dashboard"
            aria-label="Dashboard"
            className="hidden h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-muted-foreground transition-all hover:border-primary/40 hover:bg-surface-2 hover:text-foreground sm:inline-flex"
          >
            <LayoutDashboard className="h-4 w-4" />
          </Link>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-muted-foreground hover:bg-surface-2 lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>

      <MobileNavigation open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
