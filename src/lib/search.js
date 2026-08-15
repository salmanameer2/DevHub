import { tools, categories } from "@/assets/assets";

export const searchTools = (query, list = tools) => {
  const term = query.trim().toLowerCase();
  if (!term) return list;
  return list.filter((tool) =>
    [tool.name, tool.category, tool.description, tool.section, ...tool.tags]
      .join(" ")
      .toLowerCase()
      .includes(term),
  );
};

export const searchCategories = (query) => {
  const term = query.trim().toLowerCase();
  if (!term) return categories;
  return categories.filter((category) => category.name.toLowerCase().includes(term));
};

export const sortTools = (list, sort) => {
  const copy = [...list];
  if (sort === "az") return copy.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "za") return copy.sort((a, b) => b.name.localeCompare(a.name));
  if (sort === "recent") return copy.sort((a, b) => b.id - a.id);
  return copy.sort((a, b) => b.popularity - a.popularity);
};

export const filterTools = (
  list,
  { categories: cats = [], pricing = [], tags = [], featuredOnly, openSourceOnly },
) =>
  list.filter((tool) => {
    if (cats.length && !cats.includes(tool.category)) return false;
    if (pricing.length && !pricing.includes(tool.pricing)) return false;
    if (tags.length && !tags.some((tag) => tool.tags.includes(tag))) return false;
    if (featuredOnly && !tool.featured) return false;
    if (openSourceOnly && !tool.openSource) return false;
    return true;
  });
