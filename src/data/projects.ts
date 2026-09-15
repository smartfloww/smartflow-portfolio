/**
 * ─────────────────────────────────────────────────────────────
 *  Portfolio data — Smartflowy Solutions
 * ─────────────────────────────────────────────────────────────
 *  To update a project: edit its entry below.
 *
 *  • To replace the four images of a project, drop your
 *    screenshot files into `public/images/projects/<slug>/`
 *    (named 1.jpg, 2.jpg, 3.jpg, 4.jpg — or keep the .svg
 *    names) and update the paths below to match.
 *
 *  • To change where "View Website" points, update `websiteUrl`.
 *
 *  Each project must have EXACTLY 4 images.
 * ─────────────────────────────────────────────────────────────
 */

export interface Project {
  /** Short slug — also the folder name under public/images/projects/ */
  slug: string;
  /** Display name shown on the site. */
  name: string;
  /** Small category label, e.g. "Website · Hair Salon". */
  tag: string;
  /** One short paragraph describing the project. */
  description: string;
  /** Link opened by the "View Website" action. */
  websiteUrl: string;
  /** Exactly 4 image paths (inside the /public folder). */
  images: [string, string, string, string];
}

export const PROJECTS: Project[] = [
  {
    slug: "le-nailz",
    name: "Le Nailz",
    tag: "Online Store · Nail Products",
    description:
      "An online store for a nail products brand — customers can browse the full range and check product updates, while the team manages everything from a simple admin page. Built to comfortably handle 100+ customers a day, and to give the business more control over its own sales.",
    websiteUrl: "https://lenailz.com/",
    images: [
      "/images/projects/le-nailz/1.svg",
      "/images/projects/le-nailz/2.svg",
      "/images/projects/le-nailz/3.svg",
      "/images/projects/le-nailz/4.svg",
    ],
  },
  {
    slug: "lumiere",
    name: "Lumiere",
    tag: "Website · Hair Salon",
    description:
      "A hair salon website with a calm, editorial feel — services, gallery, and everything a client needs to know before booking.",
    websiteUrl: "https://smartfloww.github.io/salon/",
    images: [
      "/images/projects/lumiere/1.svg",
      "/images/projects/lumiere/2.svg",
      "/images/projects/lumiere/3.svg",
      "/images/projects/lumiere/4.svg",
    ],
  },
  {
    slug: "anila",
    name: "Anila",
    tag: "Website · Massage Center",
    description:
      "A Filipino massage center website that feels warm and unhurried — clear services, easy contact, and a look that matches the experience.",
    websiteUrl: "https://smartfloww.github.io/spa/",
    images: [
      "/images/projects/anila/1.svg",
      "/images/projects/anila/2.svg",
      "/images/projects/anila/3.svg",
      "/images/projects/anila/4.svg",
    ],
  },
  {
    slug: "dilag",
    name: "Dilag",
    tag: "Website · Skin & Aesthetic Clinic",
    description:
      "A skin and aesthetic clinic website with a clean, clinical look — treatments presented clearly, with contact details front and center.",
    websiteUrl: "https://smartfloww.github.io/Aesthetic-Dermatology-Clinic/",
    images: [
      "/images/projects/dilag/1.svg",
      "/images/projects/dilag/2.svg",
      "/images/projects/dilag/3.svg",
      "/images/projects/dilag/4.svg",
    ],
  },
];
