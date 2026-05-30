import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/custom-orders")({
  head: () => ({
    meta: [
      { title: "Custom Orders — Bespoke Luxury Gifts | SJ Arts" },
      {
        name: "description",
        content:
          "Commission a bespoke gift from SJ Arts. Share your occasion, budget and references — our atelier will craft something truly personal.",
      },
      { property: "og:title", content: "Custom Gifting · SJ Arts" },
      { property: "og:description", content: "Bespoke, made-for-you luxury gifting." },
    ],
    links: [{ rel: "canonical", href: "/custom-orders" }],
  }),
  component: CustomOrdersPage,
});

function CustomOrdersPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    occasion: "",
    budget: "",
    requirements: "",
    references: "",
    instructions: "",
  });

  function handleChange<T extends keyof typeof form>(key: T, v: string) {
    setForm((f) => ({ ...f, [key]: v }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hello SJ Arts, I'd like to request a custom design.\n\nName: ${form.name}\nPhone: ${form.phone}\nOccasion: ${form.occasion}\nBudget: ${form.budget}\n\nRequirements:\n${form.requirements}\n\nReferences: ${form.references}\n\nSpecial instructions:\n${form.instructions}`;
    window.open(whatsappUrl(msg), "_blank");
  }

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-luxury py-20 text-center md:py-28">
          <p className="eyebrow flex items-center justify-center gap-3">
            <span className="gold-divider" /> Bespoke commissions <span className="gold-divider" />
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl text-foreground md:text-6xl">
            Designed entirely <span className="font-accent text-accent">around you</span>.
          </h1>
          <p className="font-accent mx-auto mt-5 max-w-xl text-xl text-muted-foreground">
            Tell us about the moment — we'll craft a gift worthy of it.
          </p>
        </div>
      </section>

      <section className="container-luxury grid gap-16 py-20 lg:grid-cols-[1fr_1.4fr]">
        <aside className="space-y-10">
          <div>
            <p className="eyebrow">How it works</p>
            <ol className="mt-6 space-y-7">
              {[
                ["01", "Share your vision", "Tell us about the recipient, occasion and feeling you want to create."],
                ["02", "Concept & quote", "We respond within 24 hours with a concept direction and transparent quote."],
                ["03", "Crafted with care", "Each piece is hand-finished in our atelier and beautifully presented."],
                ["04", "Delivered with love", "Doorstep delivery across India, with international shipping on request."],
              ].map(([n, t, b]) => (
                <li key={n} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="font-accent text-3xl text-accent">{n}</span>
                  <div>
                    <h3 className="font-display text-lg text-foreground">{t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="border border-border bg-secondary p-7">
            <Sparkles className="h-5 w-5 text-accent" />
            <p className="font-accent mt-3 text-xl text-foreground">
              Prefer to chat directly?
            </p>
            <a
              href={whatsappUrl("Hello SJ Arts, I'd like to discuss a custom gift.")}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-foreground hover:text-accent"
            >
              <MessageCircle className="h-4 w-4" /> Message on WhatsApp
            </a>
          </div>
        </aside>

        <form onSubmit={handleSubmit} className="space-y-6 border border-border bg-background p-8 md:p-12">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Your name" required value={form.name} onChange={(v) => handleChange("name", v)} />
            <Field label="Phone / WhatsApp" required value={form.phone} onChange={(v) => handleChange("phone", v)} />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Occasion" required value={form.occasion} onChange={(v) => handleChange("occasion", v)} placeholder="Wedding, anniversary, Ramadan..." />
            <Field label="Budget" value={form.budget} onChange={(v) => handleChange("budget", v)} placeholder="₹ 3,000 – ₹ 5,000" />
          </div>
          <Field
            label="Requirements"
            required
            as="textarea"
            value={form.requirements}
            onChange={(v) => handleChange("requirements", v)}
            placeholder="Tell us about colours, theme, recipient, the feeling you want..."
          />
          <Field
            label="Reference images"
            value={form.references}
            onChange={(v) => handleChange("references", v)}
            placeholder="Paste Instagram, Pinterest or image links"
          />
          <Field
            label="Special instructions"
            as="textarea"
            value={form.instructions}
            onChange={(v) => handleChange("instructions", v)}
          />

          <button
            type="submit"
            className="mt-2 flex w-full items-center justify-center gap-3 bg-foreground px-8 py-5 text-[0.72rem] uppercase tracking-[0.32em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <MessageCircle className="h-4 w-4" /> Request Custom Design
          </button>
          <p className="text-center text-xs text-muted-foreground">
            Submitting opens WhatsApp with your enquiry pre-filled.
          </p>
        </form>
      </section>
    </>
  );
}

function Field({
  label,
  required,
  value,
  onChange,
  as = "input",
  placeholder,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  as?: "input" | "textarea";
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
        {label}{required && <span className="ml-1 text-accent">*</span>}
      </span>
      {as === "textarea" ? (
        <textarea
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          maxLength={1000}
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none"
        />
      ) : (
        <input
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          maxLength={200}
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none"
        />
      )}
    </label>
  );
}