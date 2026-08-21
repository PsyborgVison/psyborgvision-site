export type WorkProject = {
  slug: string;
  title: string;
  year: string;
  client: string;
  summary: string;
  tags: string[];
  featured: boolean;
  thumbnail?: string;
  body?: string;
  url?: string;
  status?: "managed" | "in-progress";
};

export const projects: WorkProject[] = [
  {
    slug: "bm-foods",
    title: "B&M Foods",
    year: "2025",
    client: "B&M Foods",
    summary:
      "Dock-side food stand site for Big Bear Lake's north shore, with menu, hours, reviews, and an Instagram feed.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    featured: true,
    url: "https://bm29foods.com",
    status: "managed",
    body: "Marketing site for a family-run food stand at Grays Hook Line 'n' Dine on Big Bear Lake's north shore in Fawnskin, CA — breakfast burritos, loaded fries, pastrami sandwiches, and fresh squeezed lemonade. Built with Next.js and Tailwind, with a full menu, local SEO (Restaurant schema, hours, service area), customer reviews, and an Instagram strip. Actively managed with ongoing content and photo updates.",
  },
  {
    slug: "sunnyside-ebikes",
    title: "Sunnyside E-Bikes",
    year: "2025",
    client: "Sunnyside E-Bikes",
    summary: "Site for Sunnyside E-Bikes.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    featured: true,
    url: "https://sunnysideebikes.com",
    status: "managed",
  },
];

export function getProjectBySlug(slug: string): WorkProject | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): WorkProject[] {
  return projects.filter((p) => p.featured);
}
