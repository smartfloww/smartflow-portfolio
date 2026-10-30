"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Mail, Menu, MessageCircle, X } from "lucide-react";

const email = "hello@smartflowysolution.com";
const messenger = "https://m.me/61590959274550";
const previewEmail = `mailto:${email}?subject=I'd like a free 3-page website preview&body=Hi SmartFlowy,%0D%0A%0D%0AMy business is...`;

const projects = [
  { title: "Lé Nailz", description: "An e-commerce experience for professional nail products.", category: "E-commerce", image: "/imgs/project-ss/lenailz.png", href: "https://lenailz.com" },
  { title: "Jess Salon at Home", description: "An appointment-based at-home salon service website.", category: "Salon & Beauty", image: "/imgs/project-ss/jess.png", href: "https://jess-salon-at-home.vercel.app" },
  { title: "MARAHUYO Hair & Beauty Atelier", description: "A refined digital home for a hair and beauty atelier.", category: "Hair & Beauty", image: "/imgs/project-ss/marahuyo.png", href: "https://smartfloww.github.io/salon" },
  { title: "Anila", description: "A Filipino wellness spa website.", category: "Wellness", image: "/imgs/project-ss/anila.png", href: "https://smartfloww.github.io/spa/" },
];

const services = [
  { number: "01", title: "Website Design & Development", text: "Professional, responsive websites designed to establish credibility and support business growth." },
  { number: "02", title: "E-commerce Solutions", text: "Online stores designed to make product discovery and purchasing easier." },
  { number: "03", title: "AI Agents & Intelligent Solutions", text: "Practical AI-powered experiences that help businesses serve customers and handle repetitive tasks." },
  { number: "04", title: "Business Automation", text: "Smarter workflows that reduce manual work and improve efficiency." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="SmartFlowy Solutions home">
          <Image src="/imgs/logos/website-header.png" alt="SmartFlowy Solutions" width={2172} height={724} priority />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#testimonials">Testimonials</a><a href="#services">Services</a>
          <a className="nav-cta" href="#preview">Free website preview <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-button" type="button" aria-label="Open navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Menu /></button>
      </header>

      {menuOpen && <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation">
        <button type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)}><X /></button>
        <nav><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#preview" onClick={() => setMenuOpen(false)}>Free website preview</a></nav>
      </div>}

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Digital studio · Worldwide</p>
            <h1 id="hero-title">Good ideas deserve better <em>digital experiences.</em></h1>
            <p className="hero-lede">We build thoughtful websites, e-commerce experiences, and intelligent automations that help businesses move forward.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#preview">Get Your Free 3-Page Preview <ArrowRight size={18} /></a>
              <a className="text-link" href="#work">Explore Our Work <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Selected website previews">
            <div className="browser-window browser-back">
              <div className="browser-chrome"><div className="browser-dots"><span /><span /><span /></div><div className="browser-address">marahuyo.com</div></div>
              <div className="browser-screen"><Image src="/imgs/project-ss/marahuyo.png" alt="MARAHUYO Hair & Beauty Atelier website preview" fill sizes="38vw" /></div>
            </div>
            <div className="browser-window browser-front">
              <div className="browser-chrome"><div className="browser-dots"><span /><span /><span /></div><div className="browser-address">lenailz.com</div></div>
              <div className="browser-screen"><Image src="/imgs/project-ss/lenailz.png" alt="Lé Nailz website preview" fill sizes="42vw" priority /></div>
            </div>
            <div className="art-note"><span>Selected work</span><strong>Built with clarity.</strong></div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading"><div><p className="eyebrow"><span /> Selected work</p><h2>Digital spaces with<br /><em>purpose &amp; presence.</em></h2></div><p>Four distinct business experiences, designed to feel clear, credible, and easy to use.</p></div>
          <div className="portfolio-grid">
            {projects.map((project, index) => <a className={`project-card project-${index + 1}`} href={project.href} target="_blank" rel="noopener noreferrer" key={project.title}>
              <div className="project-image"><Image src={project.image} alt={`${project.title} website screenshot`} fill sizes={index < 2 ? "(max-width: 768px) 50vw, 50vw" : "(max-width: 768px) 50vw, 33vw"} /><span className="project-badge">{project.category}</span></div>
              <div className="project-meta"><div><span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p></div><span className="circle-link"><ArrowUpRight size={20} /></span></div>
            </a>)}
          </div>
        </section>

        <section className="testimonials" id="testimonials">
          <div className="testimonial-heading"><p className="eyebrow light"><span /> Real clients · real experiences</p><h2>Straight from <em>the DMs.</em></h2><p>Don&apos;t just take our word for it. Here&apos;s what working with us looks like, in our clients&apos; own words.</p></div>
          <div className="testimonial-grid">
            {[{ name: "Lé Nailz", profile: "/imgs/client-ss/lenailz-profile.jpeg", review: "/imgs/client-ss/lenailz-review.jpeg" }, { name: "Jess Salon at Home", profile: "/imgs/client-ss/jess-profile.jpeg", review: "/imgs/client-ss/jess-review.jpeg" }].map((client) => <article className="proof-card" key={client.name}>
              <div className="proof-header"><span className="proof-avatar"><Image src={client.profile} alt={`${client.name} profile screenshot`} fill sizes="48px" /></span><div><strong>{client.name}</strong><span>Messenger conversation</span></div><span className="proof-mark">Proof</span></div>
              <button type="button" className="proof-review" aria-label={`View larger Messenger review from ${client.name}`} onClick={() => setLightbox(client.review)}><Image src={client.review} alt={`Genuine Messenger review from ${client.name}`} fill sizes="(max-width: 768px) 88vw, 40vw" /></button>
              <span className="view-label">View conversation <ArrowUpRight size={15} /></span>
            </article>)}
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="services-intro"><p className="eyebrow"><span /> What we do</p><h2>From first impression<br />to <em>ongoing growth.</em></h2></div>
          <div className="service-list">
            {services.map((service) => <article className="service-row" key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><ArrowUpRight size={22} /></article>)}
          </div>
        </section>

        <section className="preview-section" id="preview">
          <div className="preview-main"><p className="eyebrow light"><span /> Your free website preview</p><h2>See what your business could look like <em>online.</em></h2><p className="preview-copy">Get a personalized 3-page website preview designed around your business, brand, and goals — before deciding whether to move forward.</p><a className="button button-gold" href={previewEmail}>Request Your Free Preview <ArrowRight size={18} /></a></div>
          <div className="preview-process"><p>How it works</p>{[
            ["01", "Tell us about your business."], ["02", "We create your personalized preview."], ["03", "Review the design and decide what comes next."],
          ].map(([number, text]) => <div className="process-step" key={number}><span>{number}</span><p>{text}</p></div>)}</div>
        </section>

        <section className="contact-section" id="contact">
          <div><p className="eyebrow"><span /> Start a conversation</p><h2>Have an idea?<br /><em>Let&apos;s make it happen.</em></h2><p>Tell us what you&apos;re building, and let&apos;s explore how SmartFlowy can help.</p></div>
          <div className="contact-options"><a href={`mailto:${email}`}><Mail size={20} /><span><small>Email us</small>{email}</span><ArrowUpRight size={20} /></a><a href={messenger} target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /><span><small>Chat on Messenger</small>Start a conversation</span><ArrowUpRight size={20} /></a></div>
        </section>
      </main>

      <footer><a className="footer-brand" href="#top" aria-label="Back to top"><Image src="/imgs/logos/website-header.png" alt="SmartFlowy Solutions" width={2172} height={724} /></a><p>Thoughtful digital solutions for growing businesses.</p><div><span>© {2026} SmartFlowy Solutions</span><a href={`mailto:${email}`}>{email}</a></div></footer>

      {lightbox && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Messenger review image" onClick={() => setLightbox(null)}><button type="button" aria-label="Close review" onClick={() => setLightbox(null)}><X /></button><div onClick={(event) => event.stopPropagation()}><Image src={lightbox} alt="Full-size Messenger review screenshot" width={752} height={1411} /></div></div>}
    </>
  );
}
