import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact LeozenTech" },
      { name: "description", content: "Talk to LeozenTech about hiring, jobs or software projects." },
      { property: "og:title", content: "Contact LeozenTech" },
      { property: "og:description", content: "Get in touch with our team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

const field = "w-full rounded-md border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring";

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk." text="Hiring, job hunting or planning a project — we'll get back within one business day." />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div className="space-y-6">
          <div><p className="font-semibold">Email</p><p className="text-muted-foreground">hello@leozentech.com</p></div>
          <div><p className="font-semibold">Website</p><p className="text-muted-foreground">leozentech.com</p></div>
        </div>
        <form className="space-y-4 md:col-span-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          {sent ? (
            <p className="rounded-lg bg-secondary p-6 font-semibold">Thanks! We'll be in touch soon.</p>
          ) : (
            <>
              <select className={field} required defaultValue="">
                <option value="" disabled>I am…</option>
                <option>Looking to hire</option>
                <option>Looking for a job</option>
                <option>Planning a software project</option>
              </select>
              <div className="grid gap-4 md:grid-cols-2">
                <input className={field} placeholder="Full name" required />
                <input className={field} type="email" placeholder="Email" required />
              </div>
              <textarea className={field} rows={5} placeholder="How can we help?" required />
              <button className="rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground">Send message</button>
            </>
          )}
        </form>
      </section>
    </>
  );
}
