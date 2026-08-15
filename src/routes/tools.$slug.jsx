import { useEffect } from "react";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ExternalLink, BookOpen, Check } from "lucide-react";
import { getToolBySlug, relatedTools } from "@/assets/assets";
import { useLibrary } from "@/context/AppProviders";
import PageShell from "@/components/PageShell";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import ToolLogo from "@/components/ToolLogo";
import ToolGrid from "@/components/ToolGrid";
import FavoriteButton from "@/components/FavoriteButton";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const Route = createFileRoute("/tools/$slug")({
  loader: ({ params }) => {
    const tool = getToolBySlug(params.slug);
    if (!tool) throw notFound();
    return { tool };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Tool not found — Devhub OS" }, { name: "robots", content: "noindex" }],
      };
    }
    const { tool } = loaderData;
    return {
      meta: [
        { title: `${tool.name} — ${tool.category} tool | Devhub OS` },
        { name: "description", content: tool.description },
        { property: "og:title", content: `${tool.name} — Devhub OS` },
        { property: "og:description", content: tool.description },
      ],
    };
  },
  component: ToolDetailPage,
});

function ToolDetailPage() {
  const { tool } = Route.useLoaderData();
  const { trackView } = useLibrary();

  useEffect(() => {
    trackView(tool.slug);
  }, [tool.slug, trackView]);

  const features = [
    `${tool.pricing} pricing model`,
    tool.openSource ? "Open source project" : "Commercially maintained",
    `Category: ${tool.category}`,
    `Tags: ${tool.tags.join(", ")}`,
  ];

  return (
    <PageShell
      title={tool.name}
      description={tool.description}
      breadcrumbs={[
        { label: "Tools", to: "/tools" },
        {
          label: tool.category,
          to: "/category/$slug",
          params: {
            slug: tool.category
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, ""),
          },
        },
        { label: tool.name },
      ]}
      actions={
        <div className="flex items-center gap-2">
          <FavoriteButton slug={tool.slug} className="h-11 w-11" />
          <Button as="a" href={tool.website} target="_blank" rel="noreferrer noopener">
            Visit Website <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <ScrollReveal variant="fadeScale">
          <div className="gradient-border-card card-visual-mesh rounded-3xl p-6 sm:p-8">
            <div className="relative z-10 flex items-center gap-4">
              <ToolLogo tool={tool} size={64} />
              <div>
                <h2 className="font-display text-2xl font-semibold">{tool.name}</h2>
                <p className="text-sm text-muted-foreground">{tool.category}</p>
              </div>
            </div>

            <div className="relative z-10 mt-5 flex flex-wrap gap-2">
              {tool.tags.map((tag) => (
                <Badge key={tag} tone="outline">
                  {tag}
                </Badge>
              ))}
              <Badge tone="accent">{tool.pricing}</Badge>
              {tool.openSource ? <Badge tone="primary">Open Source</Badge> : null}
            </div>

            <h3 className="relative z-10 mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Overview
            </h3>
            <p className="relative z-10 mt-2 text-sm leading-relaxed text-muted-foreground">{tool.description}</p>

            <h3 className="relative z-10 mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Highlights
            </h3>
            <ul className="relative z-10 mt-3 space-y-2.5">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {feature}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.1}>
          <aside className="gradient-border-card card-visual-mesh h-fit space-y-3 rounded-3xl p-6">
            <h3 className="relative z-10 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Links
            </h3>
            <a
              href={tool.website}
              target="_blank"
              rel="noreferrer noopener"
              className="relative z-10 flex items-center gap-2 rounded-xl border border-border/80 bg-surface/50 px-4 py-3 text-sm transition-colors hover:border-primary/40 hover:bg-surface"
            >
              <ExternalLink className="h-4 w-4 text-primary" /> Official website
            </a>
            <a
              href={tool.docs}
              target="_blank"
              rel="noreferrer noopener"
              className="relative z-10 flex items-center gap-2 rounded-xl border border-border/80 bg-surface/50 px-4 py-3 text-sm transition-colors hover:border-primary/40 hover:bg-surface"
            >
              <BookOpen className="h-4 w-4 text-primary" /> Documentation
            </a>
            <Link
              to="/category/$slug"
              params={{
                slug: tool.category
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-|-$/g, ""),
              }}
              className="flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm transition-colors hover:border-primary/40"
            >
              More {tool.category} tools
            </Link>
          </aside>
        </ScrollReveal>
      </div>

      <div className="mt-14">
        <SectionHeader eyebrow="Alternatives" title="Related tools" />
        <ToolGrid tools={relatedTools(tool)} />
      </div>
    </PageShell>
  );
}
