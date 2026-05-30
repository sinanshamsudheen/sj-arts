import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SJ Arts Atelier" },
      {
        name: "description",
        content:
          "Reach the SJ Arts atelier — WhatsApp, Instagram, email or visit our studio in Kerala. We respond within 24 hours.",
      },
      { property: "og:title", content: "Contact SJ Arts" },
      { property: "og:description", content: "Get in touch with our gifting concierge." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hello SJ Arts,\n\nName: ${f.name}\nEmail: ${f.email}\n\n${f.message}`;
    window.open(whatsappUrl(msg), "_blank");
  }

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-luxury py-20 text-center md:py-28">
          <p className="eyebrow flex items-center justify-center gap-3">
            <span className="gold-divider" /> Get in touch <span className="gold-divider" />
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl text-foreground md:text-6xl">
            We'd love to hear about
            <span className="font-accent text-accent"> your moment</span>.
          </h1>
        </div>
      </section>

      <section className="container-luxury grid gap-16 py-20 lg:grid-cols-[1fr_1.2fr]">
        <aside className="space-y-8">
          <ContactRow icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" value={SITE.phone} href={whatsappUrl("Hello SJ Arts!")} />
          <ContactRow icon={<Phone className="h-4 w-4" />} label="Call" value={SITE.phone} href={`tel:${SITE.phone.replace(/\s/g, "")}`} />
          <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
          <ContactRow icon={<Instagram className="h-4 w-4" />} label="Instagram" value="@sj.arts" href={SITE.instagram} />
          <ContactRow icon={<MapPin className="h-4 w-4" />} label="Atelier" value={SITE.location} />
          <div className="border-t border-border pt-8">
            <p className="eyebrow">Atelier hours</p>
            <p className="font-accent mt-3 text-xl text-foreground">{SITE.hours}</p>
            <p className="mt-2 text-sm text-muted-foreground">All enquiries answered within 24 hours.</p>
          </div>
        </aside>

        <form onSubmit={submit} className="space-y-6 border border-border bg-background p-8 md:p-12">
          <p className="eyebrow">Send a message</p>
          <h2 className="font-display text-3xl text-foreground">Tell us about your gift</h2>
          <Input label="Your name" required value={f.name} onChange={(v) => setF({ ...f, name: v })} />
          <Input label="Email" required type="email" value={f.email} onChange={(v) => setF({ ...f, email: v })} />
          <label className="block">
            <span className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
              Message <span className="ml-1 text-accent">*</span>
            </span>
            <textarea
              required
              rows={5}
              maxLength={1000}
              value={f.message}
              onChange={(e) => setF({ ...f, message: e.target.value })}
              className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none"
              placeholder="Tell us about the occasion, recipient and any ideas..."
            />
          </label>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 bg-foreground px-8 py-4 text-[0.72rem] uppercase tracking-[0.32em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <MessageCircle className="h-4 w-4" /> Send via WhatsApp
          </button>
        </form>
      </section>
    </>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const Wrap: any = href ? "a" : "div";
  return (
    <Wrap
      {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
      className="group flex items-center gap-5 border-b border-border pb-6 last:border-b-0"
    >
      <span className="flex h-11 w-11 items-center justify-center border border-border text-accent transition-colors group-hover:border-accent">
        {icon}
      </span>
      <span>
        <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
        <span className="font-accent mt-1 block text-xl text-foreground">{value}</span>
      </span>
    </Wrap>
  );
}

function Input({ label, required, value, onChange, type = "text" }: { label: string; required?: boolean; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
        {label}{required && <span className="ml-1 text-accent">*</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={200}
        className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none"
      />
    </label>
  );
}