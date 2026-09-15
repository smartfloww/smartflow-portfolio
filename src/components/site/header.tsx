"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Facebook, Instagram, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CONTACT, NAV_ITEMS } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-paper"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-line/90 bg-paper/90 shadow-[0_1px_24px_-12px_rgba(16,54,47,0.25)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[76px]">
          {/* Logo */}
          <a
            href="#top"
            aria-label="Smartflowy Solutions — back to top"
            className="shrink-0 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <Image
              src="/brand/logo-header.png"
              alt="Smartflowy Solutions"
              width={340}
              height={113}
              priority
              className="h-8 w-auto sm:h-9 lg:h-10"
            />
          </a>

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded-sm"
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-0.5 h-px w-0 bg-teal transition-all duration-300 group-hover:w-full"
                />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Button asChild className="hidden rounded-full md:inline-flex">
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Your Free Sample
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>

          {/* Mobile menu */}
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              asChild
              aria-label="Open menu"
              className="rounded-full p-2.5 text-ink outline-none transition-colors hover:bg-teal-soft focus-visible:ring-2 focus-visible:ring-teal md:hidden"
            >
              <button type="button">
                <Menu className="size-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              aria-describedby={undefined}
              className="flex w-[86vw] max-w-sm flex-col border-l border-line bg-paper"
            >
              <SheetTitle className="sr-only">Site menu</SheetTitle>
              <nav
                aria-label="Mobile navigation"
                className="mt-14 flex flex-col px-2"
              >
                {NAV_ITEMS.map((item, i) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "border-b border-line/80 py-4 font-display text-2xl text-ink transition-colors hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-sm",
                      i === 0 && "border-t"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-5 px-4 pb-8">
                <div className="flex items-center gap-3">
                  <a
                    href={CONTACT.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Smartflowy Solutions on Facebook"
                    className="grid size-11 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-teal/50 hover:bg-teal-soft hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  >
                    <Facebook className="size-[18px]" aria-hidden="true" />
                  </a>
                  <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Smartflowy Solutions on Instagram"
                    className="grid size-11 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-teal/50 hover:bg-teal-soft hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  >
                    <Instagram className="size-[18px]" aria-hidden="true" />
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    aria-label={`Email ${CONTACT.email}`}
                    className="grid size-11 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-teal/50 hover:bg-teal-soft hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  >
                    <Mail className="size-[18px]" aria-hidden="true" />
                  </a>
                </div>
                <Button asChild className="h-12 w-full rounded-full text-[15px]">
                  <a
                    href={CONTACT.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Your Free Sample
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-center text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {CONTACT.email}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
