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
};

export const projects: WorkProject[] = [
  {
    slug: "placeholder-01",
    title: "Project Name",
    year: "2025",
    client: "Client or personal",
    summary: "One-line description of what was built and what it did.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    featured: true,
  },
  {
    slug: "placeholder-02",
    title: "Another Project",
    year: "2024",
    client: "Client or personal",
    summary: "One-line description of what was built and what it did.",
    tags: ["React", "Node.js", "Postgres"],
    featured: true,
  },
  {
    slug: "placeholder-03",
    title: "Third Project",
    year: "2024",
    client: "Client or personal",
    summary: "One-line description of what was built and what it did.",
    tags: ["Next.js", "Supabase", "Stripe"],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): WorkProject | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): WorkProject[] {
  return projects.filter((p) => p.featured);
}
