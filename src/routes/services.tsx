import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Software Delivery Services — LeozenTech" },
      { name: "description", content: "Custom software, cloud, data and AI projects delivered end to end by LeozenTech." },
      { property: "og:title", content: "Software Delivery Services — LeozenTech" },
      { property: "og:description", content: "End-to-end software delivery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Services,
});

const services = [
  ["Custom Software Development", "Web, mobile and enterprise applications built to your requirements."],
  ["Cloud & DevOps", "Migrations, infrastructure as code, CI/CD and 24/7 reliability."],
  ["Data & AI", "Data pipelines, dashboards and practical AI built into your products."],
  ["QA & Testing", "Automated and manual testing that ships quality releases."],
  ["UX/UI Design", "Research-driven product design that users love."],
  ["Application Support", "Ongoing maintenance, upgrades and modernization."],
];

function Services() {
  return (
    <>
      <PageHero eyebrow="Software delivery" title="From idea to launch, delivered." text="Agile teams that own outcomes — on time, on budget and built to scale." />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-3">
        {services.map(([t, d]) => (
          <div key={t} className="rounded-lg border border-border bg-card p-8">
            <div className="h-1 w-10 rounded bg-accent" />
            <h3 className="mt-4 text-xl font-semibold">{t}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
      <CtaBand>Have a project in mind?</CtaBand>
    </>
  );
}
