import { createFileRoute } from "@tanstack/react-router";
import { designTools } from "@/assets/assets";
import PageShell from "@/components/PageShell";
import ToolExplorer from "@/components/ToolExplorer";

export const Route = createFileRoute("/design-tools")({
  head: () => ({
    meta: [
      { title: "Design Tools — Devhub OS" },
      {
        name: "description",
        content:
          "Interface design, prototyping, illustrations, photos, color and motion resources for designers.",
      },
      { property: "og:title", content: "Design Tools — Devhub OS" },
      {
        property: "og:description",
        content:
          "Interface design, prototyping, illustrations, photos, color and motion resources for designers.",
      },
    ],
  }),
  component: DesignToolsPage,
});

function DesignToolsPage() {
  return (
    <PageShell
      wide
      title="Design Tools"
      description="Interface design, prototyping, illustrations, photos, color and motion resources for designers."
      breadcrumbs={[{ label: "Design Tools" }]}
    >
      <ToolExplorer source={designTools} />
    </PageShell>
  );
}
