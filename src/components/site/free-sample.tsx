import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { CONTACT, CTA_LABEL } from "@/data/site";

const STEPS = [
  {
    title: "Point us to your business",
    description:
      "Send us your website or social media links. That's all we need to get started.",
  },
  {
    title: "We build your sample",
    description:
      "A free, personalized 3-page website — put together from your own photos and details, ready for you to view.",
  },
  {
    title: "You decide",
    description:
      "Happy with it? We finish the project together — with unlimited revisions along the way.",
  },
] as const;

export function FreeSample() {
  return (
    <section id="free-sample" className="scroll-mt-24">
      <Container className="py-20 sm:py-28">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-teal-deep sm:rounded-[2.5rem]">
          {/* Quiet brand watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -right-16 select-none lg:-bottom-24 lg:-right-10"
          >
            <Image
              src="/brand/logo-mark.png"
              alt=""
              width={520}
              height={548}
              className="w-[320px] opacity-[0.07] lg:w-[440px]"
            />
          </div>

          <div className="relative px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold sm:text-xs">
                <span aria-hidden="true" className="h-px w-8 bg-gold" />
                The Free Sample
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-[1.12] tracking-[-0.01em] text-paper sm:text-4xl lg:text-[2.9rem]">
                See what we can create for your business — before you decide.
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/75 sm:text-base">
                Every project starts with a free, personalized 3-page website
                sample. We build it from the photos and details already on
                your website or social media — so you can see your site before
                you decide to go ahead.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-10 sm:mt-14 sm:grid-cols-3 sm:gap-8 lg:gap-12">
              {STEPS.map((step, i) => (
                <Reveal key={step.title} delay={0.1 + i * 0.08}>
                  <div className="border-t border-paper/15 pt-6">
                    <span
                      aria-hidden="true"
                      className="font-display text-4xl text-gold sm:text-[2.75rem]"
                    >
                      {i + 1}
                    </span>
                    <h3 className="mt-3 font-semibold text-paper">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper/70">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-12 flex flex-col items-start gap-4 sm:mt-14 sm:flex-row sm:items-center">
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-7 text-[15px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-[#d3a674] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2 focus-visible:ring-offset-teal-deep"
                >
                  {CTA_LABEL}
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
                <p className="text-sm text-paper/65">
                  No cost. No obligation. Yours to judge.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
