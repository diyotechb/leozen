import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/hire")({
  head: () => ({
    meta: [
      { title: "Hire Tech Talent — Leozen Tech" },
      { name: "description", content: "Hire pre-vetted engineers on contract, contract-to-hire or permanent basis." },
      { property: "og:title", content: "Hire Tech Talent — Leozen Tech" },
      { property: "og:description", content: "Pre-vetted engineers, fast." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Hire,
});

const models = [
  ["Contract staffing", "Flexible experts for projects and peak workloads, ready in days."],
  ["Contract-to-hire", "Evaluate on the job before making a permanent offer."],
  ["Permanent placement", "Full-time hires sourced, screened and interviewed for you."],
  ["Dedicated teams", "A managed team of engineers working as an extension of yours."],
];
const steps = ["Tell us what you need", "Get a vetted shortlist in 48 hours", "Interview and choose", "We handle onboarding"];

function Hire() {
  return (
    <>
      <PageHero eyebrow="Hire talent" title="Pre-vetted tech talent, when you need it." text="Every candidate is technically assessed by engineers before you ever see a resume." />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">Ways to hire</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {models.map(([t, d]) => (
            <div key={t} className="rounded-lg border border-border bg-card p-8">
              <h3 className="text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <h2 className="mt-20 text-3xl font-bold">How it works</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s}>
              <p className="font-display text-5xl font-bold text-accent">0{i + 1}</p>
              <p className="mt-2 font-semibold">{s}</p>
            </li>
          ))}
        </ol>
      </section>
      <CtaBand />
    </>
  );
}
