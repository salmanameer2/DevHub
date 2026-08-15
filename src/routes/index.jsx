import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  aiTools,
  categories,
  deploymentTools,
  designTools,
  featuredTools,
  gitWorkflow,
  iconResources,
  sections,
} from "@/assets/assets";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import ToolGrid from "@/components/ToolGrid";
import CategoryCard from "@/components/CategoryCard";
import ScrollReveal from "@/components/ScrollReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Devhub OS — Your Entire Developer Toolkit in One Workspace" },
      {
        name: "description",
        content:
          "A curated command center of 170+ developer and designer tools: frameworks, AI tools, icons, fonts, APIs, databases and deployment platforms.",
      },
      { property: "og:title", content: "Devhub OS — Developer & Designer Workspace" },
      {
        property: "og:description",
        content:
          "Discover, organize and access the best tools for modern web development and design.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="mx-auto w-full max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured"
          title="Tools every modern team relies on"
          description="Handpicked essentials across frontend, backend, design, AI and deployment."
          actionLabel="All tools"
          actionTo="/tools"
        />
        <ToolGrid tools={featuredTools.slice(0, 8)} featured />
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Workspace"
            title="Six focused sections"
            description="Jump straight into the part of your stack you're working on today."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 22, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px 0px" }}
                transition={{
                  duration: 0.42,
                  delay: (index % 6) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  to={section.route}
                  className="gradient-border-card card-visual-mesh card-hover group flex items-center justify-between rounded-3xl p-6"
                >
                  <span className="relative z-10 font-display text-lg font-semibold transition-colors group-hover:text-primary">
                    {section.label}
                  </span>
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-surface/60 text-primary transition-all group-hover:scale-110 group-hover:border-primary/50 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Categories"
          title="Browse by category"
          description="Every tool is organised into a clear, searchable category."
          actionLabel="All categories"
          actionTo="/categories"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.slice(0, 8).map((category, index) => (
            <CategoryCard key={category.slug} category={category} index={index} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Workflow" title="From first commit to production" />
          <ScrollReveal variant="fadeUp">
            <div className="flex flex-wrap items-center gap-3">
              {gitWorkflow.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-xl border border-border/80 bg-card px-4 py-2.5 text-sm font-medium shadow-sm transition-all hover:border-primary/40 hover:bg-surface-2">
                    {step}
                  </span>
                  {index < gitWorkflow.length - 1 ? (
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  ) : null}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="AI"
          title="Ship faster with AI"
          actionLabel="All AI tools"
          actionTo="/ai-tools"
        />
        <ToolGrid tools={aiTools.slice(0, 8)} />
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Design"
          title="Design and asset resources"
          actionLabel="Design tools"
          actionTo="/design-tools"
        />
        <ToolGrid tools={designTools.slice(0, 4)} />
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Deployment"
              title="Ship anywhere"
              actionLabel="All platforms"
              actionTo="/deployment"
            />
            <ToolGrid tools={deploymentTools.slice(0, 4)} columns={3} />
          </div>
          <div>
            <SectionHeader
              eyebrow="Icons"
              title="Icon libraries"
              actionLabel="All icons"
              actionTo="/category/icons"
            />
            <ToolGrid tools={iconResources.slice(0, 4)} columns={3} />
          </div>
        </div>
      </section>
    </>
  );
}
