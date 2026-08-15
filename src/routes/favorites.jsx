import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { tools } from "@/assets/assets";
import { useLibrary } from "@/context/AppProviders";
import PageShell from "@/components/PageShell";
import ToolGrid from "@/components/ToolGrid";
import SectionHeader from "@/components/SectionHeader";
import EmptyState from "@/components/EmptyState";
import Button from "@/components/Button";

export const Route = createFileRoute("/favorites")({
  head: () => ({
    meta: [
      { title: "My Favorites — Devhub OS" },
      {
        name: "description",
        content: "Your saved developer and designer tools, plus everything you recently viewed.",
      },
      { property: "og:title", content: "My Favorites — Devhub OS" },
      { property: "og:description", content: "Your saved tools and recently viewed resources." },
    ],
  }),
  component: FavoritesPage,
});

function FavoritesPage() {
  const { favorites, recent, clearFavorites } = useLibrary();
  const saved = favorites.map((slug) => tools.find((tool) => tool.slug === slug)).filter(Boolean);
  const viewed = recent.map((slug) => tools.find((tool) => tool.slug === slug)).filter(Boolean);

  return (
    <PageShell
      wide
      title="My Favorites"
      description="Tools you saved for later. Stored on this device."
      breadcrumbs={[{ label: "Favorites" }]}
      actions={
        saved.length ? (
          <Button variant="outline" size="sm" onClick={clearFavorites}>
            Clear all
          </Button>
        ) : null
      }
    >
      {saved.length ? (
        <ToolGrid tools={saved} />
      ) : (
        <EmptyState
          icon={Heart}
          title="No favorites yet"
          description="Tap the heart on any tool card to keep it here for quick access."
        />
      )}

      {viewed.length ? (
        <div className="mt-16">
          <SectionHeader eyebrow="History" title="Recently viewed" />
          <ToolGrid tools={viewed} />
        </div>
      ) : null}
    </PageShell>
  );
}
