import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { tools as allTools, categories as allCategories } from "@/assets/assets";
import { filterTools, searchTools, sortTools } from "@/lib/search";
import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";
import ToolGrid from "./ToolGrid";
import Button from "./Button";

const emptyFilters = {
  categories: [],
  pricing: [],
  tags: [],
  featuredOnly: false,
  openSourceOnly: false,
};

export default function ToolExplorer({
  source = allTools,
  initialQuery = "",
  categoryList,
  showFilters = true,
}) {
  const [query, setQuery] = useState(initialQuery);
  const [filters, setFilters] = useState(emptyFilters);
  const [sort, setSort] = useState("popular");
  const [panelOpen, setPanelOpen] = useState(false);

  const results = useMemo(
    () => sortTools(filterTools(searchTools(query, source), filters), sort),
    [query, source, filters, sort],
  );

  const list =
    categoryList || allCategories.filter((c) => source.some((tool) => tool.category === c.name));

  return (
    <div className={showFilters ? "grid gap-6 lg:grid-cols-[260px_1fr]" : ""}>
      {showFilters ? (
        <div className={panelOpen ? "block" : "hidden lg:block"}>
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            sort={sort}
            setSort={setSort}
            resultCount={results.length}
            categoryList={list}
          />
        </div>
      ) : null}

      <div className="min-w-0">
        <div className="mb-5 flex gap-2">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search by name, tag or technology..."
            className="flex-1"
          />
          {showFilters ? (
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              onClick={() => setPanelOpen((v) => !v)}
              aria-label="Toggle filters"
            >
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          ) : null}
        </div>
        <p className="mb-4 text-xs text-muted-foreground">
          Showing {results.length} of {source.length} tools
        </p>
        <ToolGrid tools={results} columns={showFilters ? 3 : 4} />
      </div>
    </div>
  );
}
