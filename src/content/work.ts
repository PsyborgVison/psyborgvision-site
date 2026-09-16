export type Channel = {
  label: string;
  url?: string;
};

export type WorkImage = {
  src: string;
  alt: string;
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
  images?: WorkImage[];
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
    thumbnail: "/work/bm-foods/current-desert-stand.jpg",
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
    images: [
      {
        src: "/work/bm-foods/current-desert-stand.jpg",
        alt: "B&M Foods winter menu board at the Twentynine Palms farmers market",
      },
      {
        src: "/work/bm-foods/big-bear-lake-season.jpg",
        alt: "B&M Foods stand at Grays Hook Line 'n' Dine on Big Bear Lake",
      },
      {
        src: "/work/bm-foods/menu-breakfast-burrito.jpg",
        alt: "B&M Foods breakfast burrito",
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
    thumbnail:
      "https://sunnysideebikes.com/wp-content/uploads/2026/08/Kingbull_EX-Titan.webp",
    body: "Site for Sunnyside E-Bikes, a rental and guided-tour shop at 39122 North Shore Dr in Fawnskin, CA, on Big Bear Lake's quieter north shore. Riders can browse the fleet of front and full-suspension e-bikes (fat off-road tires, powerful pedal-assist/full-electric modes, disc brakes), book rentals and guided sunset/trail tours online, check hours and rates, and read local trail guides for Fawnskin. Built on WordPress and actively managed with ongoing updates to hours, rates, and seasonal promos.",
    channels: [
      { label: "Website" },
      {
        label: "Instagram",
        url: "https://www.instagram.com/sunnyside.ebikes",
      },
      {
        label: "Facebook",
        url: "https://www.facebook.com/SunnysideEBikes/",
      },
      {
        label: "Yelp",
        url: "https://www.yelp.com/biz/sunnyside-e-bikes-fawnskin",
      },
    ],
    images: [
      {
        src: "https://sunnysideebikes.com/wp-content/uploads/2026/08/Kingbull_EX-Titan.webp",
        alt: "Sunnyside E-Bikes Kingbull EX-Titan rental bike",
      },
      {
        src: "https://sunnysideebikes.com/wp-content/uploads/2026/08/Ranger.webp",
        alt: "Sunnyside E-Bikes Ranger rental bike",
      },
      {
        src: "https://sunnysideebikes.com/wp-content/uploads/2025/11/sunset-shootout-view_mp4_dvd.original.jpg",
        alt: "Sunset lake view from a Sunnyside E-Bikes guided tour",
      },
    ],
  },
  {
    slug: "captain-johns",
    title: "Captain John's Fawn Harbor & Marina",
    year: "2026",
    client: "Captain John's Fawn Harbor & Marina",
    summary:
      "New site build (in progress) plus social media management for Big Bear Lake's longtime boat rental and lake tour marina in Fawnskin.",
    tags: ["Website Build", "Social Management"],
    featured: true,
    status: "in-progress",
    body: "Captain John's Fawn Harbor & Marina has run boat, kayak, paddleboard, and pontoon rentals plus guided lake tours on Big Bear Lake's north shore for over 20 years. I'm building their new site at captainjohnsfawnskin.com and taking over social media management across their existing channels. Their current web presence is split across an old marina site and several near-duplicate social profiles — part of this project is consolidating that into one clean, current presence.",
    channels: [
      { label: "Website (in progress)" },
      {
        label: "Instagram",
        url: "https://www.instagram.com/captainjohnsfawnskin/",
      },
      {
        label: "Facebook",
        url: "https://www.facebook.com/captainjohnsfawnharbormarina",
      },
      {
        label: "Yelp",
        url: "https://www.yelp.com/biz/captain-johns-fawn-harbor-and-marina-fawnskin",
      },
    ],
  },
];

/**
 * Shown on the Work page to invite a few more local businesses in — real,
 * live client work is the best portfolio piece there is.
 */
export const PILOT_PITCH =
  "Got room for 2 more Big Bear businesses — currently running a low-cost pilot: full website build + ongoing social media management, in exchange for a real case study I can show. If that's you, get in touch.";

export function getProjectBySlug(slug: string): WorkProject | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): WorkProject[] {
  return projects.filter((p) => p.featured);
}
