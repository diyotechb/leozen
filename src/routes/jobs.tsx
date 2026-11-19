import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title: "Tech Jobs — Leozen Tech" },
      { name: "description", content: "Browse software, cloud, data and security jobs from Leozen Tech's clients." },
      { property: "og:title", content: "Tech Jobs — Leozen Tech" },
      { property: "og:description", content: "Browse open tech roles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Jobs,
});

const jobs = [
  ["Senior React Developer", "Remote, US", "Contract", "$70–85/hr"],
  ["DevOps Engineer (AWS)", "Austin, TX", "Full-time", "$140–165k"],
  ["Data Engineer", "New York, NY", "Contract-to-hire", "$65–80/hr"],
  ["Python Backend Engineer", "Remote, US", "Full-time", "$130–155k"],
  ["QA Automation Engineer", "Chicago, IL", "Contract", "$50–60/hr"],
  ["Cybersecurity Analyst", "Dallas, TX", "Full-time", "$110–130k"],
  ["Machine Learning Engineer", "San Francisco, CA", "Full-time", "$170–200k"],
  ["Java Developer", "Remote, US", "Contract", "$60–75/hr"],
];

function Jobs() {
  const [q, setQ] = useState("");
  const list = jobs.filter((j) => j.join(" ").toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <PageHero eyebrow="Find jobs" title="Your next tech role is waiting." text="Contract and permanent opportunities with leading companies." />
      <section className="mx-auto max-w-5xl px-6 py-14">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by title, skill or location" className="w-full rounded-md border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
        <div className="mt-8 space-y-4">
          {list.map(([t, l, type, pay]) => (
            <div key={t} className="flex flex-col justify-between gap-4 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center">
              <div>
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{l} · {type} · {pay}</p>
              </div>
              <Link to="/contact" className="rounded-md bg-primary px-5 py-2 text-sm font-bold text-primary-foreground">Apply</Link>
            </div>
          ))}
          {list.length === 0 && <p className="text-muted-foreground">No jobs match your search.</p>}
        </div>
      </section>
    </>
  );
}
