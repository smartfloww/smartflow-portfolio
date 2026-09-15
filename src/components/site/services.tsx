import { Globe, Sparkles, Workflow } from "lucide-react";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const SERVICES = [
  {
    icon: Globe,
    title: "Websites",
    description:
      "A website that shows your business at its best — quick to load, easy to browse, and simple to keep updated. From a small site to a full online store.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Bookings, reminders, and follow-ups, connected so they take care of themselves — and nothing gets forgotten.",
  },
  {
    icon: Sparkles,
    title: "AI Tools",
    description:
      "Everyday helpers that answer common questions, draft your posts, and keep inquiries organized.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-24">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="What we do."
            description="Three things, done well."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={0.08 * i} className="h-full">
              <div className="group h-full rounded-2xl border border-line bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_16px_36px_-20px_rgba(16,54,47,0.28)] sm:p-8">
                <span className="grid size-12 place-items-center rounded-full bg-teal-soft text-teal-deep transition-colors duration-300 group-hover:bg-teal group-hover:text-paper">
                  <service.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-2xl text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 text-center text-sm text-ink-soft">
            Not sure where to start?{" "}
            <a
              href="#free-sample"
              className="rounded-sm font-semibold text-teal underline-offset-4 transition-colors hover:text-ink hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            >
              See the free sample
            </a>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
