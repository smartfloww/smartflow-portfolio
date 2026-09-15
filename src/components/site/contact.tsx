import { ArrowUpRight, Facebook, Instagram, Mail } from "lucide-react";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { CONTACT, CTA_LABEL } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-teal-deep">
      <Container className="py-20 text-center sm:py-28">
        <Reveal>
          <p className="flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold sm:text-xs">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            Contact
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-[1.12] tracking-[-0.01em] text-paper sm:text-5xl">
            Let&rsquo;s see what we can create for your business.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-paper/75 sm:text-base">
            Message us on Facebook to get your free website sample — or email
            us if that&rsquo;s easier.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-7 text-[15px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-[#d3a674] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2 focus-visible:ring-offset-teal-deep sm:w-auto"
            >
              {CTA_LABEL}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-paper/25 px-7 text-[15px] font-semibold text-paper transition-all hover:-translate-y-0.5 hover:border-paper/50 hover:bg-paper/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2 focus-visible:ring-offset-teal-deep sm:w-auto"
            >
              <Mail aria-hidden="true" className="size-4" />
              Email Us
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-paper/70 transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm px-1 py-0.5"
            >
              <Facebook aria-hidden="true" className="size-4" />
              Facebook
            </a>
            <span aria-hidden="true" className="hidden size-1 rounded-full bg-gold/60 sm:block" />
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-paper/70 transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm px-1 py-0.5"
            >
              <Instagram aria-hidden="true" className="size-4" />
              Instagram
            </a>
            <span aria-hidden="true" className="hidden size-1 rounded-full bg-gold/60 sm:block" />
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 text-paper/70 transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm px-1 py-0.5"
            >
              <Mail aria-hidden="true" className="size-4" />
              {CONTACT.email}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
