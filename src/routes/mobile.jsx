import { createFileRoute } from "@tanstack/react-router";
import { mobileTools } from "@/assets/assets";
import PageShell from "@/components/PageShell";
import ToolExplorer from "@/components/ToolExplorer";

export const Route = createFileRoute("/mobile")({
  head: () => ({
    meta: [
      { title: "Mobile Development — Devhub OS" },
      {
        name: "description",
        content: "Android, React Native, Expo, Flutter and app publishing platforms in one place.",
      },
      { property: "og:title", content: "Mobile Development — Devhub OS" },
      {
        property: "og:description",
        content: "Android, React Native, Expo, Flutter and app publishing platforms in one place.",
      },
    ],
  }),
  component: MobilePage,
});

function MobilePage() {
  return (
    <PageShell
      wide
      title="Mobile Development"
      description="Android, React Native, Expo, Flutter and app publishing platforms in one place."
      breadcrumbs={[{ label: "Mobile Development" }]}
    >
      <ToolExplorer source={mobileTools} />
    </PageShell>
  );
}
