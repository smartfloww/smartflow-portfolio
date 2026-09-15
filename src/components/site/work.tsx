"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Expand } from "lucide-react";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Lightbox } from "@/components/site/lightbox";
import { PROJECTS, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ViewerState {
  project: Project;
  index: number;
}

export function Work() {
  const [viewer, setViewer] = useState<ViewerState | null>(null);

  return (
    <section id="work" className="scroll-mt-24 border-y border-line/70 bg-[#fffdf8]">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Portfolio"
              title="Selected work."
              className="max-w-xl"
            />
            <p className="pb-1.5 text-sm text-ink-soft">
              Click any image to view it larger.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-20 sm:mt-16 lg:space-y-28">
          {PROJECTS.map((project, projectIndex) => (
            <ProjectBlock
              key={project.slug}
              project={project}
              index={projectIndex}
              onImageClick={(imageIndex) =>
                setViewer({ project, index: imageIndex })
              }
            />
          ))}
        </div>
      </Container>

      <Lightbox
        project={viewer?.project ?? null}
        index={viewer?.index ?? 0}
        onOpenChange={(open) => {
          if (!open) setViewer(null);
        }}
        onNavigate={(nextIndex) =>
          setViewer((current) =>
            current ? { ...current, index: nextIndex } : current
          )
        }
      />
    </section>
  );
}

function ProjectBlock({
  project,
  index,
  onImageClick,
}: {
  project: Project;
  index: number;
  onImageClick: (imageIndex: number) => void;
}) {
  const infoOnRight = index % 2 === 1;

  return (
    <article
      aria-label={`${project.name} — ${project.tag}`}
      className={cn(
        "grid items-center gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-16",
        infoOnRight && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
      )}
    >
      {/* Project info */}
      <div className="lg:col-span-4">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-deep sm:text-xs">
            {String(index + 1).padStart(2, "0")}
            <span aria-hidden="true" className="mx-2 text-gold">·</span>
            {project.tag}
          </p>
          <h3 className="mt-3 font-display text-3xl tracking-[-0.01em] text-ink sm:text-4xl">
            {project.name}
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            {project.description}
          </p>
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-1.5 rounded-sm py-1 text-sm font-semibold text-teal transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffdf8]"
          >
            View Website
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
      </div>

      {/* Image mosaic — exactly 4 slots per project */}
      <div className="lg:col-span-8">
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:h-[400px] lg:grid-cols-4 lg:grid-rows-2 xl:h-[460px]">
          {project.images.map((src, imageIndex) => (
            <GalleryButton
              key={src}
              project={project}
              src={src}
              imageIndex={imageIndex}
              onClick={() => onImageClick(imageIndex)}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

function GalleryButton({
  project,
  src,
  imageIndex,
  onClick,
}: {
  project: Project;
  src: string;
  imageIndex: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Open ${project.name} screenshot ${imageIndex + 1} of 4`}
      className={cn(
        "group relative aspect-[16/10] overflow-hidden rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffdf8] sm:rounded-xl",
        "lg:aspect-auto lg:h-full",
        imageIndex === 0 && "lg:col-span-2 lg:row-span-2",
        imageIndex === 3 && "lg:col-span-2"
      )}
    >
      <Image
        src={src}
        alt={`${project.name} website screenshot ${imageIndex + 1} of 4`}
        fill
        sizes="(min-width: 1024px) 40vw, 48vw"
        loading="lazy"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10"
      />
      <span
        aria-hidden="true"
        className="absolute right-2.5 top-2.5 grid size-8 place-items-center rounded-full bg-paper/95 text-ink opacity-0 shadow-sm transition-all duration-300 group-focus-visible:opacity-100 sm:size-9 sm:group-hover:opacity-100"
      >
        <Expand className="size-3.5 sm:size-4" />
      </span>
    </button>
  );
}
