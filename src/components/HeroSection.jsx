import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "@tanstack/react-router";
import { Command, Sparkles } from "lucide-react";
import { platformStats, popularSearches, site } from "@/assets/assets";
import Button from "./Button";
import SearchBar from "./SearchBar";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    navigate({ to: "/tools", search: { q: query || undefined } });
  };

  return (
    <section className="hero-glow relative overflow-hidden border-b border-border">
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        animate={{ y: [0, 24, 0], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto w-full max-w-[1600px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {platformStats[0].value} curated tools across {platformStats[1].value} categories
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{site.tagline}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base">
            {site.description}
          </p>

          <form onSubmit={submit} className="mx-auto mt-8 max-w-2xl">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search tools, technologies, APIs, frameworks, resources..."
            />
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
              <Command className="h-3.5 w-3.5" /> Press Ctrl + K anywhere
              {popularSearches.slice(0, 4).map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => navigate({ to: "/tools", search: { q: term } })}
                  className="rounded-full border border-border px-3 py-1 transition-colors hover:text-foreground"
                >
                  {term}
                </button>
              ))}
            </div>
          </form>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button as={Link} to="/tools" size="lg" className="hover:-translate-y-0.5">
              Explore Tools
            </Button>
            <Button
              as={Link}
              to="/categories"
              variant="outline"
              size="lg"
              className="hover:-translate-y-0.5"
            >
              Browse Categories
            </Button>
          </div>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {platformStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.07 }}
              className="gradient-border-card card-visual-mesh card-hover group relative overflow-hidden rounded-3xl p-5 text-left"
            >
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-[10px] font-bold text-primary">
                  ↗
                </span>
              </div>
              <p className="relative z-10 mt-3 font-display text-3xl font-semibold sm:text-4xl text-foreground">
                {stat.value}
              </p>
              <div className="relative z-10 mt-3 flex items-center gap-1">
                <div className="h-0.5 w-4 rounded-full bg-white/90" />
                <div className="h-0.5 w-1.5 rounded-full bg-muted-foreground/30" />
                <div className="h-0.5 w-1.5 rounded-full bg-muted-foreground/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
