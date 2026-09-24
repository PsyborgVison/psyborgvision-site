import type { Metadata } from "next";
import SmartImage from "@/components/SmartImage";
import Link from "next/link";
import { PILOT_PITCH, activeChannels, projects } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Projects and case studies from PsyborgVision.",
};

export default function WorkPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <p className="font-mono text-xs text-accent tracking-wide mb-3">
        // work
      </p>
      <h1 className="text-3xl font-medium text-text mb-4 tracking-tight">
        Things I&apos;ve shipped.
      </h1>
      <p className="text-text-2 mb-14 max-w-xl leading-relaxed">
        Real client sites I build and actively manage — the web presence,
        the socials, all of it. A mix of live work and pilot projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block bg-surface border border-border rounded-md overflow-hidden hover:border-border-strong transition-colors"
          >
            <div className="relative w-full aspect-[16/10] bg-bg">
              {project.backdrop ? (
                <>
                  <SmartImage
                    src={project.backdrop}
                    alt={`${project.title} — Fawnskin, CA`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
                </>
              ) : (
                <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,var(--color-border)_0,var(--color-border)_1px,transparent_1px,transparent_12px)] bg-bg" />
              )}

              {project.logo ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-20 h-20 rounded-full bg-bg/90 border border-border p-2 shadow-lg">
                    <SmartImage
                      src={project.logo}
                      alt={`${project.title} logo`}
                      fill
                      className="object-contain p-3"
                    />
                  </div>
                </div>
              ) : project.status === "in-progress" ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <span className="font-mono text-xs text-text-dim border border-dashed border-border-strong px-3 py-1 rounded-sm">
                    site in progress
                  </span>
                </div>
              ) : null}

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="font-mono text-[11px] text-white/80 tracking-wide">
                  {project.year} · {project.client}
                </span>
                {project.status === "managed" ? (
                  <span className="font-mono text-[11px] text-lime-300">
                    live &amp; managed
                  </span>
                ) : project.status === "in-progress" ? (
                  <span className="font-mono text-[11px] text-amber-300">
                    in progress
                  </span>
                ) : null}
              </div>
            </div>

            <div className="p-6 flex flex-col gap-3">
              <h2 className="text-base font-medium text-text group-hover:text-accent transition-colors">
                {project.title}
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-text-dim border border-border px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-1">
                {project.channels && project.channels.length > 0 ? (
                  <span className="font-mono text-xs text-text-dim">
                    {activeChannels(project).length} channels managed
                  </span>
                ) : (
                  <span />
                )}
                <span className="font-mono text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  View case study →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pilot pitch */}
      <div className="mt-14 bg-surface border border-accent/30 rounded-sm p-6">
        <p className="font-mono text-xs text-accent tracking-wide mb-2">
          // taking on new local clients
        </p>
        <p className="text-text-2 text-sm leading-relaxed max-w-2xl">
          {PILOT_PITCH}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-20 pt-10 border-t border-border">
        <h2 className="text-xl font-medium text-text mb-3">
          Want to be on this list?
        </h2>
        <p className="text-text-2 mb-6 text-sm leading-relaxed max-w-md">
          I&apos;m open for new projects. Tell me what you&apos;re building.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-2.5 text-sm font-medium rounded-sm hover:bg-accent-dim transition-colors"
        >
          Start a project
        </Link>
      </div>
    </div>
  );
}
