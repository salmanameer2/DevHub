import { createFileRoute } from "@tanstack/react-router";
import { categories } from "@/assets/assets";
import PageShell from "@/components/PageShell";
import CategoryCard from "@/components/CategoryCard";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "All Categories — Devhub OS" },
      {
        name: "description",
        content:
          "Browse developer and designer tools by category: frontend, backend, AI, icons, fonts, deployment and more.",
      },
      { property: "og:title", content: "All Categories — Devhub OS" },
      { property: "og:description", content: "Browse every tool category in the workspace." },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <PageShell
      wide
      title="Categories"
      description="Every corner of the modern stack, organised into clear categories."
      breadcrumbs={[{ label: "Categories" }]}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category, index) => (
          <CategoryCard key={category.slug} category={category} index={index} />
        ))}
      </div>
    </PageShell>
  );
}
