import { Eye, MessageCircle, Scissors, ShieldCheck } from "lucide-react";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const REASONS = [
  {
    icon: Eye,
    title: "You see the work first",
    description:
      "Your free sample shows exactly what you'd get — before you commit to anything.",
  },
  {
    icon: Scissors,
    title: "Built for beauty businesses",
    description:
      "Salons, spas, and clinics are what we design for — we know what your clients look for.",
  },
  {
    icon: ShieldCheck,
    title: "No surprises",
    description:
      "A simple way of working, honest updates, and unlimited revisions before we finish.",
  },
  {
    icon: MessageCircle,
    title: "Easy to reach",
    description:
      "Questions at any point? We're one message away — on Facebook or by email.",
  },
] as const;

export function WhyUs() {
  return (
    <section className="border-t border-line/70 bg-paper-deep/60">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Why Smartflowy"
            title="What you can expect."
          />
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={0.07 * i}>
              <div className="border-t border-line pt-6">
                <reason.icon
                  className="size-5 text-teal"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-[15px] font-semibold text-ink">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
