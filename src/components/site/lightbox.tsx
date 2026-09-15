"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface LightboxProps {
  project: Project | null;
  index: number;
  onOpenChange: (open: boolean) => void;
  onNavigate: (index: number) => void;
}

/**
 * Full-screen gallery viewer with previous/next controls,
 * keyboard navigation, swipe gestures, and smooth transitions.
 */
export function Lightbox({
  project,
  index,
  onOpenChange,
  onNavigate,
}: LightboxProps) {
  const [direction, setDirection] = useState(0);
  const reduceMotion = useReducedMotion();
  const total = project?.images.length ?? 4;

  // Tracks where a pointer press started, so we only treat it as a
  // "click the dim area to close" when the pointer didn't move (not a swipe).
  const pressOrigin = useRef<{ x: number; y: number } | null>(null);

  const go = (dir: 1 | -1) => {
    if (!project) return;
    setDirection(dir);
    onNavigate((index + dir + total) % total);
  };

  // Keyboard navigation (Escape is handled by the dialog itself)
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [project, index]);

  return (
    <Dialog open={!!project} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        aria-describedby={undefined}
        className="fixed inset-0 top-0 left-0 z-50 flex h-full max-h-none w-full max-w-none translate-x-0 translate-y-0 flex-col rounded-none border-0 bg-ink/[0.97] p-0 backdrop-blur-sm sm:p-0"
      >
        {/* Top bar — project name, counter, close */}
        <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex min-w-0 items-baseline gap-3">
            <DialogTitle className="truncate font-display text-lg text-paper sm:text-xl">
              {project?.name}
            </DialogTitle>
            <span
              aria-hidden="true"
              className="text-sm tabular-nums text-paper/55"
            >
              {index + 1} / {total}
            </span>
          </div>
          <DialogClose
            aria-label="Close gallery"
            className="grid size-10 shrink-0 place-items-center rounded-full text-paper/80 outline-none transition-colors hover:bg-paper/10 hover:text-paper focus-visible:ring-2 focus-visible:ring-gold"
          >
            <X className="size-5" aria-hidden="true" />
          </DialogClose>
        </div>

        {/* Image — click on the dim area around it closes the gallery */}
        <div
          className="relative flex min-h-0 flex-1 items-center justify-center px-3 sm:px-16"
          onPointerDown={(event) => {
            pressOrigin.current = { x: event.clientX, y: event.clientY };
          }}
          onClick={(event) => {
            const origin = pressOrigin.current;
            pressOrigin.current = null;
            if (!origin) return;
            const moved =
              Math.abs(event.clientX - origin.x) > 8 ||
              Math.abs(event.clientY - origin.y) > 8;
            if (!moved) onOpenChange(false);
          }}
        >
          {project && (
            <motion.div
              key={`${project.slug}-${index}`}
              initial={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, x: direction * 56 }
              }
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) go(1);
                else if (info.offset.x > 70) go(-1);
              }}
              onClick={(event) => event.stopPropagation()}
              className="flex max-h-full cursor-grab items-center justify-center active:cursor-grabbing"
            >
              <img
                src={project.images[index]}
                alt={`${project.name} website screenshot ${index + 1} of ${total}`}
                draggable={false}
                className="max-h-[58vh] w-auto max-w-full select-none rounded-lg object-contain shadow-2xl sm:max-h-[68vh] lg:max-h-[72vh]"
              />
            </motion.div>
          )}
        </div>

        {/* Bottom controls — prev, dots, next */}
        <div className="flex items-center justify-center gap-4 px-4 py-5 sm:gap-6 sm:py-6">
          <GalleryControl
            label="Previous image"
            onClick={() => go(-1)}
            icon={<ChevronLeft className="size-5" aria-hidden="true" />}
          />
          <div className="flex items-center gap-2.5" role="tablist" aria-label="Gallery images">
            {project?.images.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                role="tab"
                aria-selected={dotIndex === index}
                aria-label={`Go to image ${dotIndex + 1}`}
                onClick={() => {
                  setDirection(dotIndex > index ? 1 : -1);
                  onNavigate(dotIndex);
                }}
                className={cn(
                  "size-2.5 rounded-full outline-none transition-all focus-visible:ring-2 focus-visible:ring-gold",
                  dotIndex === index
                    ? "scale-110 bg-gold"
                    : "bg-paper/30 hover:bg-paper/60"
                )}
              />
            ))}
          </div>
          <GalleryControl
            label="Next image"
            onClick={() => go(1)}
            icon={<ChevronRight className="size-5" aria-hidden="true" />}
          />
        </div>

        <DialogDescription className="sr-only">
          Screenshot {index + 1} of {total} for {project?.name}. Use the left
          and right arrow keys to browse, or swipe on touch screens.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

function GalleryControl({
  label,
  onClick,
  icon,
}: {
  label: string;
  onClick: () => void;
  icon: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid size-11 place-items-center rounded-full border border-paper/15 text-paper/85 outline-none transition-all hover:border-paper/40 hover:bg-paper/10 hover:text-paper active:scale-95 focus-visible:ring-2 focus-visible:ring-gold"
    >
      {icon}
    </button>
  );
}
