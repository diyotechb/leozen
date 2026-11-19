import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Leozen Tech" },
      { name: "description", content: "Leozen Tech is a technical staffing and software delivery company built by engineers." },
      { property: "og:title", content: "About Leozen Tech" },
      { property: "og:description", content: "Built by engineers, for engineers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Built by engineers, for engineers." text="We understand technology, so we understand the people who build it." />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3">
        {[
          ["Our mission", "Connect great technologists with meaningful work, and help companies build better software faster."],
          ["Our approach", "Technical screening by real engineers, honest communication and long-term partnerships."],
          ["Our values", "Integrity, quality and care for every candidate and client we work with."],
        ].map(([t, d]) => (
          <div key={t}>
            <h2 className="text-2xl font-bold">{t}</h2>
            <p className="mt-3 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
