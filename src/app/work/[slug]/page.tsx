import type { Metadata } from "next";
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
