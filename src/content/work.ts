export type Channel = {
  label: string;
  url?: string;
};

export type WorkImage = {
  src: string;
  alt: string;
};

export type ScreenshotPair = {
  label: string;
  desktop: string;
  mobile: string;
};

export type CaseStudySection = {
  heading: string;
  body: string;
};

export type WireframeBlock = {
  label: string;
  note: string;
};

export type WorkProject = {
  slug: string;
  title: string;
  year: string;
  client: string;
  summary: string;
  tags: string[];
  featured: boolean;
  /** Card thumbnail on /work — should read as brand + place, not a raw UI screenshot. */
  thumbnail?: string;
  logo?: string;
  backdrop?: string;
  body?: string;
  url?: string;
  status?: "managed" | "in-progress";
  channels?: Channel[];
  images?: WorkImage[];
  /** Real desktop/mobile screenshot pairs, only used when we actually captured them. */
  screenshots?: ScreenshotPair[];
  /** Whether screenshots are pixel-accurate captures vs. photography standing in for them. */
  screenshotsAreLive?: boolean;
  caseStudy?: CaseStudySection[];
  /**
   * Set when the case study is written from what's observable on the live
   * site rather than from the actual build decisions — keeps us honest about
   * which write-ups are inside knowledge and which are informed reading.
   */
  caseStudyIsObserved?: boolean;
  /** For not-yet-built sites: planned page structure shown as a labeled wireframe instead of screenshots. */
  wireframe?: WireframeBlock[];
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
    logo: "/work/bm-foods/logo.png",
    backdrop: "/work/bm-foods/backdrop.jpg",
    thumbnail: "/work/bm-foods/backdrop.jpg",
    screenshotsAreLive: true,
    screenshots: [
      {
        label: "Home",
        desktop: "/work/bm-foods/shots/home-desktop.jpg",
        mobile: "/work/bm-foods/shots/home-mobile.jpg",
      },
      {
        label: "Menu",
        desktop: "/work/bm-foods/shots/menu-desktop.jpg",
        mobile: "/work/bm-foods/shots/menu-mobile.jpg",
      },
    ],
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
    caseStudy: [
      {
        heading: "The brief",
        body: "B&M is a family-run food stand, not a restaurant with a fixed address — where they trade changes by season and sometimes by week. The site had to sell the food first, but it also had to be honest about a moving target: wrong hours or a stale address is worse than no site at all for a stand people are trying to physically find.",
      },
      {
        heading: "Built around 'where are we this week', not a static address",
        body: "Hours, address, and trading days all read from one data source (a TradingSlot list with an expiry date on every entry) instead of being typed into each page. When B&M's season changed — down to Twentynine Palms for the winter, back to Big Bear Lake in spring — that's a data edit, not a rewrite of nine different pages. Anything that's lapsed simply stops rendering instead of quietly going stale.",
      },
      {
        heading: "Header and hero: sell the food, prove you're open",
        body: "The top bar leads with days/hours and the exact address before anything else — that's the first thing someone standing in a parking lot needs. The hero photo is the stand itself, not stock imagery, with the tagline doing double duty ('wherever we're parked this week') so it stays true across the seasonal move without editing copy every time.",
      },
      {
        heading: "Menu page as the real landing page",
        body: "Food photography is B&M's strongest asset, so the menu page is built to be shared directly — each item gets its own real photo, not a generic icon or a PDF scan of a paper menu (which is what a lot of small food stands ship with). Order-ahead is wired in but gates itself off automatically when there's no active venue taking orders, so it can never advertise a pickup that doesn't exist.",
      },
      {
        heading: "SEO and social built for local discovery",
        body: "Restaurant structured data (schema.org), a Google Business listing, and consistent handles across Instagram, Facebook, TikTok, YouTube, Nextdoor, and more all point back at one business identity — the kind of signal Google actually uses to answer 'food near me' searches, which matters more for a stand with no storefront than for almost any other kind of business.",
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
    logo: "https://sunnysideebikes.com/wp-content/uploads/2026/03/SunnySideLogoBlack.png",
    backdrop:
      "https://sunnysideebikes.com/wp-content/uploads/2025/11/sunset-shootout-view_mp4_dvd.original.jpg",
    thumbnail:
      "https://sunnysideebikes.com/wp-content/uploads/2025/11/sunset-shootout-view_mp4_dvd.original.jpg",
    screenshotsAreLive: false,
    caseStudyIsObserved: true,
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
    caseStudy: [
      {
        heading: "What the site is selling",
        body: "Sunnyside rents premium e-bikes and runs guided tours out of Fawnskin — an impulse, same-day booking business as much as a considered one. The site leads with a full-bleed video hero and a same-day-hours badge right up top, which reads as a deliberate choice for a rental shop: the visitor deciding right now whether it's worth the drive needs 'are you open' answered before anything else.",
      },
      {
        heading: "Product pages that sell the fleet, not just 'e-bikes'",
        body: "Each bike model (Kingbull EX-Titan, Ranger, and others) gets its own real photo rather than one generic 'rent an e-bike' block — closer to how a bike shop's own showroom works than a typical service-page template. That's worth more for conversion here than for most local-service sites, since the bike itself is the differentiator between Sunnyside and a cheaper rental down the road.",
      },
      {
        heading: "Content built around the destination, not just the shop",
        body: "A dedicated 'Explore Fawnskin' page and trail guides sell the ride, not just the bike — reasonable for a location people are choosing partly for the scenery. Guided sunset tours get their own page separate from plain rentals, which reads as a real upsell path rather than a checkbox add-on.",
      },
      {
        heading: "Where I'd push next",
        body: "This read is from what's live on the site, not from the original build decisions. The obvious next win is consolidating the scattered social presence (an old @sunnysidebikes handle alongside the current one, a couple of near-duplicate Facebook pages) the same way I did for B&M — right now that's splitting the reviews and follower count Google actually uses for local ranking.",
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
    caseStudy: [
      {
        heading: "The plan",
        body: "Captain John's has 20+ years of real reputation on the lake but a fractured web presence — an old marina site, several near-duplicate Facebook pages, and no unified booking path. The new build at captainjohnsfawnskin.com consolidates that into one current site, with social management to match names and links across every channel.",
      },
      {
        heading: "Planned structure",
        body: "A homepage built around 'book a boat today' as the primary action, a fleet/rates page (boats, kayaks, paddleboards, pontoons), a guided-tours page for the lake tours specifically, and a hours/location page — the same pattern that's already working for Sunnyside next door on the same shoreline.",
      },
    ],
    wireframe: [
      { label: "Home", note: "Hero, today's hours, primary booking CTA" },
      { label: "Fleet & Rates", note: "Boats, kayaks, paddleboards, pontoons" },
      { label: "Guided Tours", note: "Lake history tours, booking" },
      { label: "Hours & Location", note: "Map, contact, seasonal hours" },
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
