import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { CtaBand } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leozen Tech — Tech Talent & Software Delivery" },
      { name: "description", content: "Find your next tech job or hire skilled engineers. Leozen Tech also delivers software projects end to end." },
      { property: "og:title", content: "Leozen Tech — Tech Talent & Software Delivery" },
      { property: "og:description", content: "Technical staffing, recruitment and software delivery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [["2,500+", "Engineers placed"], ["48 hrs", "Avg. time to shortlist"], ["300+", "Client companies"], ["95%", "Retention after 1 year"]];

const specialties = [
  ["Software Engineering", "Full‑stack, backend, frontend and mobile developers."],
  ["Cloud & DevOps", "AWS, Azure, GCP, Kubernetes and platform engineers."],
  ["Data & AI", "Data engineers, analysts, ML and AI specialists."],
  ["Cybersecurity", "Security analysts, architects and compliance experts."],
  ["QA & Testing", "Manual and automation test engineers."],
  ["Product & Design", "Product managers, UX and UI designers."],
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={hero} alt="Software engineers collaborating" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
          <div className="max-w-2xl text-primary-foreground">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Technical staffing & software delivery</p>
            <h1 className="mt-4 text-5xl font-bold leading-tight md:text-6xl">Great tech teams start here.</h1>
            <p className="mt-6 text-lg opacity-90">We match skilled engineers with companies that need them — and build software for you when you need a full team.</p>
          </div>
          <div className="mt-10 grid max-w-3xl gap-4 md:grid-cols-2">
            <Link to="/jobs" className="group rounded-lg bg-card p-6 shadow-xl transition hover:-translate-y-1">
              <p className="text-sm font-semibold text-muted-foreground">I'm looking for a job</p>
              <p className="mt-1 font-display text-2xl font-bold text-primary">Find tech jobs →</p>
            </Link>
            <Link to="/hire" className="group rounded-lg bg-accent p-6 shadow-xl transition hover:-translate-y-1">
              <p className="text-sm font-semibold text-accent-foreground/80">I'm looking to hire</p>
              <p className="mt-1 font-display text-2xl font-bold text-accent-foreground">Hire talent →</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-4xl font-bold text-primary">{n}</p>
              <p className="mt-1 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold md:text-4xl">Specialized tech recruiting</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Contract, contract‑to‑hire and permanent placements across every major technology discipline.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {specialties.map(([t, d]) => (
            <div key={t} className="rounded-lg border border-border bg-card p-6 transition hover:border-accent">
              <div className="h-1 w-10 rounded bg-accent" />
              <h3 className="mt-4 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Software delivery</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Need more than people? We'll build it.</h2>
            <p className="mt-4 opacity-80">From MVPs to enterprise platforms, our delivery teams handle design, engineering, testing and launch.</p>
            <Link to="/services" className="mt-8 inline-block rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground">Explore delivery services</Link>
          </div>
          <ul className="space-y-4">
            {["Web & mobile applications", "Cloud migration & DevOps", "Data platforms & AI solutions", "Dedicated offshore & nearshore teams"].map((x) => (
              <li key={x} className="rounded-lg border border-primary-foreground/20 p-5 font-semibold">✓ {x}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
