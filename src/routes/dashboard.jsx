import { createFileRoute } from "@tanstack/react-router";
import { categories, tools } from "@/assets/assets";
import { useLibrary } from "@/context/AppProviders";
import PageShell from "@/components/PageShell";
import StatsCard from "@/components/StatsCard";
import ToolGrid from "@/components/ToolGrid";
import SectionHeader from "@/components/SectionHeader";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Devhub OS" },
      {
        name: "description",
        content: "Overview of your saved tools, recently viewed resources and workspace stats.",
      },
      { property: "og:title", content: "Dashboard — Devhub OS" },
      { property: "og:description", content: "Your personal developer workspace overview." },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const { favorites, recent } = useLibrary();
  const saved = favorites.map((slug) => tools.find((tool) => tool.slug === slug)).filter(Boolean);
  const viewed = recent.map((slug) => tools.find((tool) => tool.slug === slug)).filter(Boolean);

  const stats = [
    { label: "Saved Tools", value: saved.length, hint: "Stored on this device" },
    { label: "Recently Viewed", value: viewed.length, hint: "Last 12 tools" },
    { label: "Available Tools", value: tools.length, hint: "Across the workspace" },
    { label: "Categories", value: categories.length, hint: "Curated groupings" },
  ];

  return (
    <PageShell
      wide
      title="Dashboard"
      description="Your workspace at a glance."
      breadcrumbs={[{ label: "Dashboard" }]}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatsCard key={stat.label} {...stat} index={index} />
        ))}
      </div>

      <div className="mt-14">
        <SectionHeader
          eyebrow="Collections"
          title="Favorites"
          actionLabel="Open favorites"
          actionTo="/favorites"
        />
        <ToolGrid
          tools={saved.slice(0, 8)}
          emptyTitle="No saved tools yet"
          emptyDescription="Favorite a tool and it will appear right here."
        />
      </div>

      <div className="mt-14">
        <SectionHeader eyebrow="Activity" title="Recently viewed" />
        <ToolGrid
          tools={viewed.slice(0, 8)}
          emptyTitle="Nothing viewed yet"
          emptyDescription="Open a tool detail page to build your history."
        />
      </div>
    </PageShell>
  );
}
