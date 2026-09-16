import type { Metadata } from "next";
import SmartImage from "@/components/SmartImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/content/work";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function WorkDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div>
      {/* Hero */}
      <div className="relative w-full aspect-[21/9] min-h-[280px] bg-bg overflow-hidden">
        {project.backdrop ? (
          <>
            <SmartImage
              src={project.backdrop}
              alt={`${project.title} — Fawnskin, CA`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-black/30 to-black/40" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,var(--color-border)_0,var(--color-border)_1px,transparent_1px,transparent_14px)] bg-bg" />
        )}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          {project.logo ? (
            <div className="relative w-20 h-20 mb-4">
              <SmartImage
                src={project.logo}
                alt={`${project.title} logo`}
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>
          ) : null}
          <h1 className="text-3xl sm:text-4xl font-medium text-white tracking-tight drop-shadow-md">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="mb-4">
          <Link
            href="/work"
            className="font-mono text-xs text-text-dim hover:text-accent transition-colors"
          >
            ← work
          </Link>
        </div>

        <span className="font-mono text-xs text-text-dim">
          // {project.year} · {project.client}
          {project.status === "managed" ? " · Live & managed" : ""}
          {project.status === "in-progress" ? " · In progress" : ""}
        </span>
        <p className="text-text-2 text-lg mt-3 mb-4 leading-relaxed max-w-2xl">
          {project.summary}
        </p>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-6 text-sm text-accent hover:text-accent-dim transition-colors font-mono"
          >
            Visit site →
          </a>
        ) : null}

        <div className="flex flex-wrap gap-2 mb-14">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-text-dim border border-border px-2 py-0.5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Desktop / mobile screenshot comparisons */}
        {project.screenshots && project.screenshots.length > 0 ? (
          <div className="mb-16">
            <p className="font-mono text-xs text-text-dim mb-1">
              // the site
            </p>
            <p className="text-text-muted text-sm mb-6">
              {project.screenshotsAreLive
                ? "Live captures, desktop and mobile."
                : "Preview captures, desktop and mobile."}
            </p>
            <div className="flex flex-col gap-10">
              {project.screenshots.map((pair) => (
                <div key={pair.label}>
                  <p className="font-mono text-xs text-text-dim mb-3">
                    {pair.label}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-[1fr_280px] gap-4 items-start">
                    <div className="rounded-md overflow-hidden border border-border bg-surface">
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-bg border-b border-border">
                        <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                        <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                        <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                        <span className="ml-2 font-mono text-[10px] text-text-dim">
                          desktop
                        </span>
                      </div>
                      <div className="relative aspect-[1440/900] w-full">
                        <SmartImage
                          src={pair.desktop}
                          alt={`${project.title} ${pair.label} — desktop`}
                          fill
                          className="object-cover object-top"
                          sizes="(min-width: 640px) 60vw, 100vw"
                        />
                      </div>
                    </div>
                    <div className="rounded-md overflow-hidden border border-border bg-surface mx-auto w-full max-w-[220px]">
                      <div className="flex items-center justify-center px-3 py-2 bg-bg border-b border-border">
                        <span className="font-mono text-[10px] text-text-dim">
                          mobile
                        </span>
                      </div>
                      <div className="relative aspect-[390/844] w-full">
                        <SmartImage
                          src={pair.mobile}
                          alt={`${project.title} ${pair.label} — mobile`}
                          fill
                          className="object-cover object-top"
                          sizes="220px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Photography gallery, for projects without live screenshots */}
        {project.images && project.images.length > 0 ? (
          <div className="mb-16">
            <p className="font-mono text-xs text-text-dim mb-1">
              // the brand
            </p>
            <p className="text-text-muted text-sm mb-6">
              Real photography from the site, not screenshots — full-page
              captures aren&apos;t available for this one yet.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.images.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/3] rounded-sm overflow-hidden border border-border bg-surface"
                >
                  <SmartImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Wireframe plan, for not-yet-built sites */}
        {project.wireframe && project.wireframe.length > 0 ? (
          <div className="mb-16">
            <p className="font-mono text-xs text-text-dim mb-1">
              // planned site structure
            </p>
            <p className="text-text-muted text-sm mb-6">
              No live site yet — here&apos;s the page plan.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.wireframe.map((block) => (
                <div
                  key={block.label}
                  className="rounded-md border border-dashed border-border-strong bg-surface p-5"
                >
                  <div className="flex flex-col gap-2 mb-3">
                    <div className="h-2 w-1/3 bg-border rounded-sm" />
                    <div className="h-1.5 w-2/3 bg-border rounded-sm" />
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 mb-3">
                    <div className="h-8 bg-border/60 rounded-sm" />
                    <div className="h-8 bg-border/60 rounded-sm" />
                    <div className="h-8 bg-border/60 rounded-sm" />
                  </div>
                  <p className="font-mono text-xs text-accent">
                    {block.label}
                  </p>
                  <p className="text-text-muted text-xs mt-1 leading-relaxed">
                    {block.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Case study */}
        {project.caseStudy && project.caseStudy.length > 0 ? (
          <div className="mb-16">
            <p className="font-mono text-xs text-text-dim mb-1">
              // why it&apos;s built this way
            </p>
            {project.caseStudyIsObserved ? (
              <p className="text-text-muted text-xs mb-6 italic">
                Written from what&apos;s live on the site, not the original
                build decisions.
              </p>
            ) : (
              <div className="mb-6" />
            )}
            <div className="flex flex-col gap-8">
              {project.caseStudy.map((section) => (
                <div
                  key={section.heading}
                  className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 sm:gap-8"
                >
                  <h3 className="text-sm font-medium text-text sm:text-right sm:pt-0.5">
                    {section.heading}
                  </h3>
                  <p className="text-text-2 text-sm leading-relaxed max-w-xl">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Channels */}
        {project.channels && project.channels.length > 0 ? (
          <div className="mb-14">
            <p className="font-mono text-xs text-text-dim mb-3">
              // what I manage · {project.channels.length} channels
            </p>
            <div className="flex flex-wrap gap-2">
              {project.channels.map((channel) =>
                channel.url ? (
                  <a
                    key={channel.label}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-text-2 border border-border px-2 py-1 rounded-sm hover:border-border-strong hover:text-accent transition-colors"
                  >
                    {channel.label}
                  </a>
                ) : (
                  <span
                    key={channel.label}
                    className="font-mono text-xs text-text-dim border border-border px-2 py-1 rounded-sm"
                  >
                    {channel.label}
                  </span>
                )
              )}
            </div>
          </div>
        ) : null}

        {!project.caseStudy && project.body ? (
          <div className="prose prose-invert max-w-2xl text-text-2 leading-relaxed">
            <p>{project.body}</p>
          </div>
        ) : null}

        {!project.caseStudy && !project.body ? (
          <div className="bg-surface border border-border rounded-sm p-8 max-w-2xl">
            <p className="font-mono text-xs text-text-dim mb-2">
              // case study coming soon
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Full write-up is in progress. In the meantime, reach out if
              you&apos;d like to hear more about this project.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 text-sm text-accent hover:text-accent-dim transition-colors font-mono"
            >
              Get in touch →
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
