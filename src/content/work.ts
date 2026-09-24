export type Channel = {
  label: string;
  url?: string;
  /** Short qualifier, e.g. how the account is run or when it launches. */
  note?: string;
  /**
   * Omitted for channels I actively run today. "planned" = not set up yet;
   * "pending" = exists, but the owner runs it until access is handed over.
   */
  status?: "planned" | "pending";
};

export type WorkImage = {
  src: string;
  alt: string;
};

export type WorkVideo = {
  src: string;
  poster: string;
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
  /** Link text for `url`. Defaults to "Visit site". */
  urlLabel?: string;
  status?: "managed" | "in-progress";
  channels?: Channel[];
  images?: WorkImage[];
  /** Caption above the photo gallery. */
  imagesCaption?: string;
  /** Short muted loops (drone footage etc.), shown portrait. */
  videos?: WorkVideo[];
  /** Real desktop/mobile screenshot pairs, only used when we actually captured them. */
  screenshots?: ScreenshotPair[];
  /** Whether screenshots are captures of the public site vs. a preview build. */
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
    tags: ["Next.js", "TypeScript", "Tailwind", "Social Management"],
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
      { label: "Website", url: "https://bm29foods.com" },
      // The site links @bm29foodz, which TikTok doesn't resolve — no link
      // here until the handle is settled.
      { label: "TikTok" },
      { label: "YouTube", url: "https://www.youtube.com/@BM29foodz" },
      { label: "Pinterest", url: "https://www.pinterest.com/bm29foodz" },
      {
        label: "Nextdoor",
        url: "https://nextdoor.com/pages/bm-foods-fawnskin-ca",
      },
      { label: "Yelp" },
      { label: "Google Business Profile" },
      { label: "Bing Places" },
      { label: "Apple Maps" },
      { label: "X", url: "https://x.com/BM29Foods" },
      { label: "Snapchat", url: "https://www.snapchat.com/add/bm29foodz" },
      { label: "Threads" },
      {
        label: "Instagram",
        url: "https://www.instagram.com/bm29foodz",
        status: "pending",
        note: "Owner-run, handover soon",
      },
      {
        label: "Facebook",
        url: "https://www.facebook.com/bm29foodz",
        status: "pending",
        note: "Owner-run, handover soon",
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
        body: "Restaurant structured data (schema.org) plus consistent listings on Google, Bing Places, Apple Maps, Yelp and Nextdoor all point back at one business identity — the kind of signal Google actually uses to answer 'food near me' searches, which matters more for a stand with no storefront than for almost any other kind of business. I run the content channels too (TikTok, YouTube, Pinterest, X, Snapchat, Threads); the owner still runs Instagram and Facebook, and those hand over next.",
      },
    ],
  },
  {
    slug: "sunnyside-ebikes",
    title: "Sunnyside E-Bikes",
    year: "2025",
    client: "Sunnyside E-Bikes",
    summary:
      "Rental and tour site for a premium e-bike shop on Big Bear Lake's north shore — plus its social, review, and map listings, run day to day.",
    tags: ["WordPress", "Booking", "Social Management"],
    featured: true,
    url: "https://sunnysideebikes.com",
    status: "managed",
    logo: "https://sunnysideebikes.com/wp-content/uploads/2026/03/SunnySideLogoBlack.png",
    backdrop:
      "https://sunnysideebikes.com/wp-content/uploads/2025/11/sunset-shootout-view_mp4_dvd.original.jpg",
    thumbnail:
      "https://sunnysideebikes.com/wp-content/uploads/2025/11/sunset-shootout-view_mp4_dvd.original.jpg",
    screenshotsAreLive: true,
    caseStudyIsObserved: true,
    screenshots: [
      {
        label: "Home",
        desktop: "/work/sunnyside-ebikes/shots/home-desktop.jpg",
        mobile: "/work/sunnyside-ebikes/shots/home-mobile.jpg",
      },
      {
        label: "Our Bikes",
        desktop: "/work/sunnyside-ebikes/shots/our-bikes-desktop.jpg",
        mobile: "/work/sunnyside-ebikes/shots/our-bikes-mobile.jpg",
      },
      {
        label: "Guided Tours",
        desktop: "/work/sunnyside-ebikes/shots/guided-tours-desktop.jpg",
        mobile: "/work/sunnyside-ebikes/shots/guided-tours-mobile.jpg",
      },
    ],
    imagesCaption: "Fleet and tour photography from the site.",
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
      { label: "Website", url: "https://sunnysideebikes.com" },
      { label: "Instagram", url: "https://www.instagram.com/sunnysidebikes/" },
      {
        label: "Facebook",
        url: "https://www.facebook.com/SunnysideEBikes/",
        note: "Run through PsyborgVision's Meta Business Suite",
      },
      { label: "TikTok", url: "https://www.tiktok.com/@sunnysidebikes" },
      { label: "YouTube", url: "https://www.youtube.com/@sunnysidebikes" },
      {
        label: "Yelp",
        url: "https://www.yelp.com/biz/sunnyside-e-bikes-fawnskin",
      },
      { label: "Google Business Profile" },
      { label: "Bing Places" },
      { label: "Apple Maps" },
      { label: "X", url: "https://x.com/sunnysidebikes" },
      { label: "Snapchat" },
      {
        label: "Pinterest",
        url: "https://www.pinterest.com/sunnysidebikes/",
        status: "planned",
        note: "Setting up now",
      },
      { label: "Nextdoor", status: "planned", note: "Setting up now" },
      { label: "Reddit", status: "planned", note: "This winter" },
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
        heading: "Running the channels",
        body: "Beyond the site, I run Sunnyside's day-to-day presence: Instagram, TikTok, YouTube, X and Snapchat for content, and Google, Bing Places, Apple Maps and Yelp for the listings people actually tap to find the shop. Sunnyside doesn't have its own Facebook login, so the Page runs through my PsyborgVision Meta Business Suite. The first job was the same one I did for B&M: fold the look-alike handles into one identity, @sunnysidebikes everywhere, so reviews and followers stop splitting. Pinterest and Nextdoor are being set up now, with Reddit to follow this winter.",
      },
    ],
  },
  {
    slug: "captain-johns",
    title: "Captain John's Fawn Harbor & Marina",
    year: "2026",
    client: "Captain John's Fawn Harbor & Marina",
    summary:
      "Ground-up rebuild of a family marina's website on Big Bear Lake's north shore, built on the marina's own drone photography, plus its social, review, and map listings.",
    tags: ["Astro", "TypeScript", "Vercel", "Social Management"],
    featured: true,
    status: "in-progress",
    url: "https://captainjohns.vercel.app",
    urlLabel: "View the preview build",
    logo: "/work/captain-johns/logo.png",
    backdrop: "/work/captain-johns/backdrop.jpg",
    thumbnail: "/work/captain-johns/backdrop.jpg",
    screenshotsAreLive: false,
    screenshots: [
      {
        label: "Home",
        desktop: "/work/captain-johns/shots/home-desktop.jpg",
        mobile: "/work/captain-johns/shots/home-mobile.jpg",
      },
      {
        label: "On the Water",
        desktop: "/work/captain-johns/shots/on-the-water-desktop.jpg",
        mobile: "/work/captain-johns/shots/on-the-water-mobile.jpg",
      },
      {
        label: "Tours & Boats",
        desktop: "/work/captain-johns/shots/tours-and-boats-desktop.jpg",
        mobile: "/work/captain-johns/shots/tours-and-boats-mobile.jpg",
      },
      {
        label: "Our Story",
        desktop: "/work/captain-johns/shots/our-story-desktop.jpg",
        mobile: "/work/captain-johns/shots/our-story-mobile.jpg",
      },
    ],
    videos: [
      {
        src: "/work/captain-johns/footage/harbor-orbit.mp4",
        poster: "/work/captain-johns/footage/harbor-orbit.jpg",
        alt: "Drone orbit over the harbor docks and Grout Bay, with the pine-covered north shore and Big Bear Lake beyond.",
      },
      {
        src: "/work/captain-johns/footage/tarzan-boat-pullback.mp4",
        poster: "/work/captain-johns/footage/tarzan-boat-pullback.jpg",
        alt: "Drone pulling back from the Tarzan Jungle Float, its slides and upper deck anchored on green lake water.",
      },
    ],
    imagesCaption:
      "The marina's own drone and dockside photography, the same set the new site is built on.",
    images: [
      {
        src: "/work/captain-johns/photos/visit-hero-docks-north-shore.jpg",
        alt: "The marina docks in Grout Bay seen from above, with Fawnskin and the forest along North Shore Drive.",
      },
      {
        src: "/work/captain-johns/photos/pontoon-on-water.jpg",
        alt: "A classic pontoon boat tied at the dock with the lake and pine ridge behind it.",
      },
      {
        src: "/work/captain-johns/photos/jungle-float.jpg",
        alt: "The Tarzan Jungle Float anchored on calm water, its two-story slide and jumping platforms reflected below.",
      },
      {
        src: "/work/captain-johns/photos/kayaks-dock-ridgeline.jpg",
        alt: "Kayaks and paddle boards on the beach at Grout Bay, with the harbor, the lake and the far ridgeline beyond.",
      },
      {
        src: "/work/captain-johns/photos/captain-ben-helm.jpg",
        alt: "Captain Ben at the wheel of the covered tour boat, lakeside cabins and forest along the shore behind him.",
      },
      {
        src: "/work/captain-johns/photos/grout-bay-fall-color.jpg",
        alt: "Grout Bay in autumn from above: golden willows, boat docks, and shallow channels winding toward the lake.",
      },
    ],
    channels: [
      {
        label: "Website",
        url: "https://captainjohns.vercel.app",
        note: "Rebuild live in preview, launching on the marina's own domain",
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/captainjohnsfawnskin/",
      },
      {
        label: "Facebook",
        url: "https://www.facebook.com/captainjohnsfawnharbormarina",
      },
      { label: "TikTok", url: "https://www.tiktok.com/@captainjohnsmarina" },
      { label: "YouTube", url: "https://www.youtube.com/@CaptainJohnsFawnHarbor" },
      {
        label: "Pinterest",
        url: "https://www.pinterest.com/CaptainJohnsFawnHarbor/",
      },
      { label: "Nextdoor" },
      {
        label: "Yelp",
        url: "https://www.yelp.com/biz/captain-johns-fawn-harbor-and-marina-fawnskin",
      },
      { label: "Google Business Profile" },
      { label: "Bing Places" },
      { label: "Apple Maps" },
      { label: "X", url: "https://x.com/CaptJohnsFawn" },
      { label: "Snapchat" },
      { label: "Threads" },
    ],
    caseStudy: [
      {
        heading: "The brief",
        body: "Captain John's is a small family harbor in Fawnskin: kayaks, paddle boards, pontoons, the Tarzan Jungle Float, and Captain Ben's lake tours. The old site was a free GoDaddy page with an ad banner, and the socials were scattered, with look-alike accounts the business doesn't control. The job was one current site and one consistent identity across every channel people use to find a marina.",
      },
      {
        heading: "Shot on their own lake, not stock",
        body: "Every photo on the new site is the marina's own: drone stills from the fall and September shoots, plus dockside shots from the old site. Each one is rotated upright, stripped of metadata (including phone GPS), and resized, but never retouched. Where a planned shot doesn't exist yet, a real client photo stands in, and preview builds tag it so nothing placeholder ships by accident.",
      },
      {
        heading: "'Today at the harbor' up front",
        body: "The homepage leads with a small daily card: dock hours, water conditions, tour times, and the latest eagle sighting. It's one short file staff can update, because 'are you open and is it calm' is the question people ask before they drive around the lake.",
      },
      {
        heading: "Launching without breaking a booking",
        body: "The rebuild goes live while the last tours of the season are still running, so booking is deliberately left alone: every button still goes to the same booking listings, and the old URLs (/pricing, /rent-now, /lake-tours) 301 to their new homes, so a bookmarked link or an old Google result never hits a dead page. The staging build stays out of search on its own until the real domain is attached.",
      },
      {
        heading: "Telling the eagle story with care",
        body: "The marina looks straight across the bay at the most-watched bald eagle nest in the country. 'Our Story' covers the village, the harbor and the eagles as history and legacy rather than a sales hook, which matters when a lot of the people reading it are there because they followed the nest.",
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

/** Channels I run today, excluding ones that are planned or still owner-run. */
export function activeChannels(project: WorkProject): Channel[] {
  return (project.channels ?? []).filter((c) => !c.status);
}
