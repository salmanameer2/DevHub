import { createFileRoute } from "@tanstack/react-router";
import { developmentTools } from "@/assets/assets";
import PageShell from "@/components/PageShell";
import ToolExplorer from "@/components/ToolExplorer";

export const Route = createFileRoute("/development-tools")({
  head: () => ({
    meta: [
      { title: "Development Tools — Devhub OS" },
      {
        name: "description",
        content:
          "Editors, frameworks, CSS libraries, backend runtimes, testing and version control tooling.",
      },
      { property: "og:title", content: "Development Tools — Devhub OS" },
      {
        property: "og:description",
        content:
          "Editors, frameworks, CSS libraries, backend runtimes, testing and version control tooling.",
      },
    ],
  }),
  component: DevelopmentToolsPage,
});

function DevelopmentToolsPage() {
  return (
    <PageShell
      wide
      title="Development Tools"
      description="Editors, frameworks, CSS libraries, backend runtimes, testing and version control tooling."
      breadcrumbs={[{ label: "Development Tools" }]}
    >
      <ToolExplorer source={developmentTools} />
    </PageShell>
  );
}
