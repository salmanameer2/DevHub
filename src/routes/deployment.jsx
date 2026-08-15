import { createFileRoute } from "@tanstack/react-router";
import { deploymentTools } from "@/assets/assets";
import PageShell from "@/components/PageShell";
import ToolExplorer from "@/components/ToolExplorer";

export const Route = createFileRoute("/deployment")({
  head: () => ({
    meta: [
      { title: "Deployment — Devhub OS" },
      {
        name: "description",
        content:
          "Frontend hosting, backend platforms, cloud providers and container tooling to ship your apps.",
      },
      { property: "og:title", content: "Deployment — Devhub OS" },
      {
        property: "og:description",
        content:
          "Frontend hosting, backend platforms, cloud providers and container tooling to ship your apps.",
      },
    ],
  }),
  component: DeploymentPage,
});

function DeploymentPage() {
  return (
    <PageShell
      wide
      title="Deployment"
      description="Frontend hosting, backend platforms, cloud providers and container tooling to ship your apps."
      breadcrumbs={[{ label: "Deployment" }]}
    >
      <ToolExplorer source={deploymentTools} />
    </PageShell>
  );
}
