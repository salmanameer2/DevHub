import { createFileRoute } from "@tanstack/react-router";
import { resourceTools } from "@/assets/assets";
import PageShell from "@/components/PageShell";
import ToolExplorer from "@/components/ToolExplorer";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Devhub OS" },
      {
        name: "description",
        content:
          "Databases, APIs, icon libraries, typography, documentation and developer utilities.",
      },
      { property: "og:title", content: "Resources — Devhub OS" },
      {
        property: "og:description",
        content:
          "Databases, APIs, icon libraries, typography, documentation and developer utilities.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <PageShell
      wide
      title="Resources"
      description="Databases, APIs, icon libraries, typography, documentation and developer utilities."
      breadcrumbs={[{ label: "Resources" }]}
    >
      <ToolExplorer source={resourceTools} />
    </PageShell>
  );
}
