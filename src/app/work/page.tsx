import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PILOT_PITCH, projects } from "@/content/work";

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
        A mix of client work, personal projects, and experiments. More coming
        as I document it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="bg-surface border border-border rounded-sm overflow-hidden flex flex-col gap-3 hover:border-border-strong transition-colors group"
          >
            {project.thumbnail ? (
              <div className="relative w-full aspect-[16/10] bg-bg">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            ) : null}
            <div className="p-6 pt-3 flex flex-col gap-3 flex-1">
            <span className="font-mono text-xs text-text-dim">
              // {project.year} · {project.client}
              {project.status === "managed" ? " · Live & managed" : ""}
            </span>
            <h2 className="text-base font-medium text-text group-hover:text-accent transition-colors">
              {project.title}
            </h2>
            <p className="text-sm text-text-muted leading-relaxed flex-1">
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
            {project.channels && project.channels.length > 0 ? (
              <span className="font-mono text-xs text-text-dim">
                {project.channels.length} channels managed
              </span>
            ) : null}
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
