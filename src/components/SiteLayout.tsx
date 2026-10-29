import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/jobs", label: "Find Jobs" },
  { to: "/hire", label: "Hire Talent" },
  { to: "/services", label: "Software Delivery" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-xl font-bold text-primary">
          Leozen<span className="text-accent">Tech</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-semibold text-foreground hover:text-accent" activeProps={{ className: "text-accent" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="rounded-md bg-accent px-4 py-2 text-sm font-bold text-accent-foreground hover:opacity-90">
          Contact us
        </Link>
      </div>
      <nav className="flex gap-5 overflow-x-auto px-6 pb-3 md:hidden">
        {nav.map((n) => (
          <Link key={n.to} to={n.to} className="whitespace-nowrap text-sm font-semibold">{n.label}</Link>
        ))}
      </nav>
    </header>
  );
}

const footerCols = [
  { title: "Job seekers", links: [{ to: "/jobs", l: "Browse jobs" }, { to: "/contact", l: "Submit resume" }] },
  { title: "Employers", links: [{ to: "/hire", l: "Hire talent" }, { to: "/services", l: "Software delivery" }] },
  { title: "Company", links: [{ to: "/about", l: "About us" }, { to: "/contact", l: "Contact" }] },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold">Leozen<span className="text-accent">Tech</span></p>
          <p className="mt-3 text-sm opacity-75">Technical staffing and software delivery that moves your business forward.</p>
        </div>
        {footerCols.map(({ title, links }) => (
          <div key={title}>
            <p className="font-display font-semibold">{title}</p>
            <ul className="mt-3 space-y-2 text-sm opacity-75">
              {links.map(({ to, l }) => (
                <li key={l}><Link to={to} className="hover:text-accent">{l}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} LeozenTech. All rights reserved.
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-accent">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg opacity-80">{text}</p>
      </div>
    </section>
  );
}

export function CtaBand({ children }: { children?: ReactNode }) {
  return (
    <section className="bg-accent">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
        <h2 className="text-3xl font-bold text-accent-foreground">{children ?? "Ready to build your team?"}</h2>
        <Link to="/contact" className="rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground hover:opacity-90">
          Talk to a recruiter
        </Link>
      </div>
    </section>
  );
}
