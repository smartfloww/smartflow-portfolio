/**
 * ─────────────────────────────────────────────────────────────
 *  Smartflowy Solutions — site configuration
 * ─────────────────────────────────────────────────────────────
 *  This is the single place to update contact links, the main
 *  call-to-action, and site-wide text. Change it here and it
 *  updates everywhere on the website.
 * ─────────────────────────────────────────────────────────────
 */

export const SITE = {
  name: "Smartflowy Solutions",
  tagline: "Smarter Solutions. Seamless Flow.",
  subheading: "Websites, automation, and AI tools for small businesses.",
  // The industries Smartflowy currently serves best.
  audience: ["Salons", "Spas", "Skin Clinics", "Aesthetic Clinics"],
} as const;

/** Main contact links — update these in ONE place when they change. */
export const CONTACT = {
  /** Facebook page — the main CTA destination (free website sample). */
  facebook: "https://www.facebook.com/profile.php?id=61590959274550",
  /** Instagram profile (placeholder URL — replace when the real profile is ready). */
  instagram: "https://instagram.com",
  /** Contact email (used for mailto links). */
  email: "smartflowsolutions.official@gmail.com",
} as const;

/** Primary call-to-action label used across the site. */
export const CTA_LABEL = "Get Your Free Website Sample";

/** Anchor navigation — single-page site sections. */
export const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Free Sample", href: "#free-sample" },
  { label: "Contact", href: "#contact" },
] as const;
