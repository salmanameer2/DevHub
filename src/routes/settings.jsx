import { createFileRoute } from "@tanstack/react-router";
import { useLibrary, useTheme } from "@/context/AppProviders";
import PageShell from "@/components/PageShell";
import Button from "@/components/Button";
import Badge from "@/components/Badge";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Devhub OS" },
      { name: "description", content: "Manage appearance, saved data and workspace preferences." },
      { property: "og:title", content: "Settings — Devhub OS" },
      {
        property: "og:description",
        content: "Manage appearance and saved data for your workspace.",
      },
    ],
  }),
  component: SettingsPage,
});

function Row({ title, description, children }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="max-w-md">
        <h2 className="text-base font-semibold">{title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  );
}

function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const { favorites, clearFavorites } = useLibrary();

  return (
    <PageShell
      title="Settings"
      description="Preferences are stored locally in your browser."
      breadcrumbs={[{ label: "Settings" }]}
    >
      <div className="space-y-4">
        <Row
          title="Appearance"
          description="Switch between the premium dark workspace and a clean light theme."
        >
          <Button variant="outline" onClick={toggleTheme}>
            {theme === "dark" ? "Switch to light" : "Switch to dark"}
          </Button>
        </Row>
        <Row title="Saved tools" description="Clear every tool you have favorited on this device.">
          <div className="flex items-center gap-3">
            <Badge tone="primary">{favorites.length} saved</Badge>
            <Button variant="outline" onClick={clearFavorites} disabled={!favorites.length}>
              Clear favorites
            </Button>
          </div>
        </Row>
        <Row
          title="Privacy"
          description="No accounts, no tracking. Favorites and history never leave your browser."
        >
          <Badge tone="accent">Local only</Badge>
        </Row>
      </div>
    </PageShell>
  );
}

