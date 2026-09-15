import Image from "next/image";
import { Facebook, Instagram, Mail } from "lucide-react";
import { Container } from "@/components/site/container";
import { CONTACT, NAV_ITEMS, SITE } from "@/data/site";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-teal-deep text-paper">
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <a
            href="#top"
            className="group inline-flex items-center gap-3.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Smartflowy Solutions — back to top"
          >
            <Image
              src="/brand/logo-mark.png"
              alt=""
              width={56}
              height={59}
              className="size-11 rounded-lg bg-paper/95 p-1 transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            <span>
              <span className="block font-display text-lg leading-tight text-paper">
                {SITE.name}
              </span>
              <span className="mt-0.5 block text-xs text-paper/55">
                {SITE.tagline}
              </span>
            </span>
          </a>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-7 gap-y-3"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-sm text-sm text-paper/70 transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Smartflowy Solutions on Facebook"
              className="grid size-10 place-items-center rounded-full border border-paper/15 text-paper/75 transition-all hover:border-paper/40 hover:bg-paper/10 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <Facebook aria-hidden="true" className="size-4" />
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Smartflowy Solutions on Instagram"
              className="grid size-10 place-items-center rounded-full border border-paper/15 text-paper/75 transition-all hover:border-paper/40 hover:bg-paper/10 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <Instagram aria-hidden="true" className="size-4" />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label={`Email ${SITE.name}`}
              className="grid size-10 place-items-center rounded-full border border-paper/15 text-paper/75 transition-all hover:border-paper/40 hover:bg-paper/10 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <Mail aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-paper/10 pt-7 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {YEAR} {SITE.name}. All rights reserved.
          </p>
          <p className="tracking-wide">Websites · Automation · AI Tools</p>
        </div>
      </Container>
    </footer>
  );
}
