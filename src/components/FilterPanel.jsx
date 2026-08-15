import { categories, pricingOptions, sortOptions } from "@/assets/assets";
import Badge from "./Badge";
import Button from "./Button";
import { cn } from "@/lib/utils";

function Toggle({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-lg border border-border px-3 py-1.5 text-left text-xs font-medium transition-colors hover:border-primary/40",
        active ? "border-primary/50 bg-primary/12 text-primary" : "text-muted-foreground",
      )}
    >
      {children}
    </button>
  );
}

export default function FilterPanel({
  filters,
  setFilters,
  sort,
  setSort,
  resultCount,
  categoryList = categories,
}) {
  const toggleValue = (key, value) =>
    setFilters((current) => {
      const list = current[key];
      return {
        ...current,
        [key]: list.includes(value) ? list.filter((item) => item !== value) : [...list, value],
      };
    });

  const reset = () =>
    setFilters({
      categories: [],
      pricing: [],
      tags: [],
      featuredOnly: false,
      openSourceOnly: false,
    });

  return (
    <aside className="surface-panel h-fit rounded-3xl p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Filters
        </h2>
        <Badge tone="primary">{resultCount}</Badge>
      </div>

      <div className="space-y-5">
        <div>
          <p className="mb-2 text-xs font-semibold text-foreground">Sort by</p>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            aria-label="Sort tools"
            className="h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm outline-none focus:border-primary/50"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold text-foreground">Pricing</p>
          <div className="flex flex-wrap gap-2">
            {pricingOptions.map((option) => (
              <Toggle
                key={option}
                active={filters.pricing.includes(option)}
                onClick={() => toggleValue("pricing", option)}
              >
                {option}
              </Toggle>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold text-foreground">Type</p>
          <div className="flex flex-wrap gap-2">
            <Toggle
              active={filters.featuredOnly}
              onClick={() =>
                setFilters((current) => ({ ...current, featuredOnly: !current.featuredOnly }))
              }
            >
              Featured
            </Toggle>
            <Toggle
              active={filters.openSourceOnly}
              onClick={() =>
                setFilters((current) => ({ ...current, openSourceOnly: !current.openSourceOnly }))
              }
            >
              Open Source
            </Toggle>
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold text-foreground">Category</p>
          <div className="scrollbar-slim flex max-h-64 flex-col gap-2 overflow-y-auto pr-1">
            {categoryList.map((category) => (
              <Toggle
                key={category.slug}
                active={filters.categories.includes(category.name)}
                onClick={() => toggleValue("categories", category.name)}
              >
                {category.name} ({category.count})
              </Toggle>
            ))}
          </div>
        </div>

        <Button variant="ghost" size="sm" className="w-full" onClick={reset}>
          Reset filters
        </Button>
      </div>
    </aside>
  );
}
