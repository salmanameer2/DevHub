import { createFileRoute, notFound } from "@tanstack/react-router";
import { getCategoryBySlug, tools } from "@/assets/assets";
import PageShell from "@/components/PageShell";
import ToolExplorer from "@/components/ToolExplorer";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategoryBySlug(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Category not found — Devhub OS" }, { name: "robots", content: "noindex" }],
      };
    }
    const { category } = loaderData;
    return {
      meta: [
        { title: `${category.name} tools — Devhub OS` },
        { name: "description", content: category.description },
        { property: "og:title", content: `${category.name} tools — Devhub OS` },
        { property: "og:description", content: category.description },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const source = tools.filter((tool) => tool.category === category.name);

  return (
    <PageShell
      wide
      title={category.name}
      description={category.description}
      breadcrumbs={[{ label: "Categories", to: "/categories" }, { label: category.name }]}
    >
      <ToolExplorer source={source} showFilters={false} />
    </PageShell>
  );
}
