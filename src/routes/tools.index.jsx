import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/PageShell";
import ToolExplorer from "@/components/ToolExplorer";

export const Route = createFileRoute("/tools/")({
  validateSearch: (search) => ({ q: typeof search.q === "string" ? search.q : undefined }),
  head: () => ({
    meta: [
      { title: "Tool Directory — Devhub OS" },
      {
        name: "description",
        content: "Search, filter and sort 170+ developer and designer tools in one directory.",
      },
      { property: "og:title", content: "Tool Directory — Devhub OS" },
      {
        property: "og:description",
        content: "Search and filter the complete developer and designer tool directory.",
      },
    ],
  }),
  component: ToolsPage,
});

function ToolsPage() {
  const { q } = Route.useSearch();

  return (
    <PageShell
      wide
      title="Tool Directory"
      description="Every tool, technology and resource in the workspace — filtered exactly how you need it."
      breadcrumbs={[{ label: "Tools" }]}
    >
      <ToolExplorer initialQuery={q || ""} key={q || "all"} />
    </PageShell>
  );
}
