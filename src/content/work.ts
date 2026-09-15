export type Channel = {
  label: string;
  url?: string;
};

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
  channels?: Channel[];
};

export const projects: WorkProject[] = [
  {
    slug: "bm-foods",
    title: "B&M Foods",
    year: "2025",
    client: "B&M Foods",
    summary:
      "Food stand site with menu, ordering, hours, and reviews — now serving the Morongo Basin after a seasonal move from Big Bear Lake.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    featured: true,
    url: "https://bm29foods.com",
    status: "managed",
    body: "Marketing and ordering site for a family-run food stand — breakfast burritos, loaded fries, pastrami sandwiches, and fresh squeezed lemonade. Built with Next.js and Tailwind: full menu with order-ahead and Square checkout, local SEO (Restaurant schema, hours, service area), customer reviews, and an Instagram strip. B&M runs a seasonal circuit — Twentynine Palms farmers markets September–April, back on Big Bear Lake's north shore around spring — and the site's hours, address, and structured data all update with it. Actively managed with ongoing content, photo, and schedule updates.",
    channels: [
      { label: "Website" },
      { label: "Instagram", url: "https://www.instagram.com/bm29foodz" },
      { label: "Facebook", url: "https://www.facebook.com/bm29foodz" },
      { label: "TikTok", url: "https://www.tiktok.com/@bm29foodz" },
      { label: "YouTube", url: "https://www.youtube.com/@BM29foodz" },
      { label: "Google Business" },
      { label: "Yelp" },
      { label: "X", url: "https://x.com/BM29Foods" },
      { label: "Pinterest", url: "https://www.pinterest.com/bm29foods" },
      { label: "Snapchat", url: "https://www.snapchat.com/add/bm29foodz" },
      {
        label: "Nextdoor",
        url: "https://nextdoor.com/pages/bm-foods-fawnskin-ca",
      },
    ],
  },
  {
    slug: "sunnyside-ebikes",
    title: "Sunnyside E-Bikes",
    year: "2025",
    client: "Sunnyside E-Bikes",
    summary:
      "Rental and tour site for a premium e-bike shop on Big Bear Lake's north shore, with rates, guided tours, and online booking.",
    tags: ["WordPress", "Booking"],
    featured: true,
    url: "https://sunnysideebikes.com",
    status: "managed",
    body: "Site for Sunnyside E-Bikes, a rental and guided-tour shop at 39122 North Shore Dr in Fawnskin, CA, on Big Bear Lake's quieter north shore. Riders can browse the fleet of front and full-suspension e-bikes (fat off-road tires, powerful pedal-assist/full-electric modes, disc brakes), book rentals and guided sunset/trail tours online, check hours and rates, and read local trail guides for Fawnskin. Built on WordPress and actively managed with ongoing updates to hours, rates, and seasonal promos.",
    channels: [
      { label: "Website" },
      {
        label: "Instagram",
        url: "https://www.instagram.com/sunnyside.ebikes",
      },
      { label: "Yelp", url: "https://www.yelp.com/biz/sunnyside-e-bikes-fawnskin" },
    ],
  },
];

export function getProjectBySlug(slug: string): WorkProject | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): WorkProject[] {
  return projects.filter((p) => p.featured);
}
