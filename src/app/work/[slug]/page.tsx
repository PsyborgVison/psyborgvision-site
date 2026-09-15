import type { Metadata } from "next";
import Image from "next/image";
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
    <div className="max-w-5xl mx-auto px-6 py-20">
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
      </span>
      <h1 className="text-3xl font-medium text-text mt-2 mb-4 tracking-tight">
        {project.title}
      </h1>
      <p className="text-text-2 text-lg mb-6 leading-relaxed max-w-2xl">
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

      {project.images && project.images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-14">
          {project.images.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[4/3] rounded-sm overflow-hidden border border-border bg-surface"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </div>
          ))}
        </div>
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

      {project.body ? (
        <div className="prose prose-invert max-w-2xl text-text-2 leading-relaxed">
          <p>{project.body}</p>
        </div>
      ) : (
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
      )}
    </div>
  );
}
