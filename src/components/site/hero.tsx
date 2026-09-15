"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { CONTACT, CTA_LABEL, SITE } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Quiet brand watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-8 hidden select-none sm:block lg:-right-16 lg:top-4"
      >
        <Image
          src="/brand/logo-mark.png"
          alt=""
          width={640}
          height={675}
          className="w-[360px] opacity-[0.06] lg:w-[520px]"
        />
      </div>

      <Container className="relative pb-16 pt-28 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-44">
        <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep sm:text-xs">
          <span aria-hidden="true" className="h-px w-10 bg-gold" />
          {SITE.tagline}
        </p>

        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-3xl font-display text-[2.6rem] leading-[1.06] tracking-[-0.015em] text-ink sm:text-6xl lg:text-[4.4rem]">
            Look as good{" "}
            <em className="text-teal">online</em> as you do in person.
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {SITE.subheading}
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft/90 sm:text-xs">
            <span className="text-gold-deep">Built for</span>
            {SITE.audience.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden="true" className="size-1 rounded-full bg-gold" />
                )}
                {item}
              </span>
            ))}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild className="h-12 rounded-full px-7 text-[15px] transition-all hover:-translate-y-0.5 hover:bg-teal">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                {CTA_LABEL}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-ink/25 bg-transparent px-7 text-[15px] text-ink transition-all hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-paper"
            >
              <a href="#work">
                See Our Work
                <ArrowDown aria-hidden="true" />
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.38}>
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-soft">
            <span>A free 3-page sample, personalized for your business</span>
            <span aria-hidden="true" className="size-1 rounded-full bg-gold" />
            <span>No obligation</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
