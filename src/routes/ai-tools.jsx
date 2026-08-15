import { createFileRoute } from "@tanstack/react-router";
import { aiTools } from "@/assets/assets";
import PageShell from "@/components/PageShell";
import ToolExplorer from "@/components/ToolExplorer";

export const Route = createFileRoute("/ai-tools")({
  head: () => ({
    meta: [
      { title: "AI Tools — Devhub OS" },
      {
        name: "description",
        content:
          "AI coding assistants, app builders, design tools, agents and model APIs for modern developers.",
      },
      { property: "og:title", content: "AI Tools — Devhub OS" },
      {
        property: "og:description",
        content:
          "AI coding assistants, app builders, design tools, agents and model APIs for modern developers.",
      },
    ],
  }),
  component: AiToolsPage,
});

function AiToolsPage() {
  return (
    <PageShell
      wide
      title="AI Tools"
      description="AI coding assistants, app builders, design tools, agents and model APIs for modern developers."
      breadcrumbs={[{ label: "AI Tools" }]}
    >
      <ToolExplorer source={aiTools} />
    </PageShell>
  );
}
