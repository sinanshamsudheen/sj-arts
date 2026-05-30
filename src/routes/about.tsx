import { createFileRoute, Link } from "@tanstack/react-router";
import heroGift from "@/assets/hero-gift.jpg";
import occWedding from "@/assets/occ-wedding.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The SJ Arts Atelier" },
      {
        name: "description",
        content:
          "SJ Arts is a luxury gifting atelier crafting handmade, personalised gifts for life's most meaningful moments. Learn our story.",
      },
      { property: "og:title", content: "The SJ Arts Story" },
      { property: "og:description", content: "A luxury gifting atelier born of craft and emotion." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-luxury grid gap-16 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <p className="eyebrow flex items-center gap-3">
            <span className="gold-divider" /> Our story
          </p>
          <h1 className="mt-5 font-display text-5xl text-foreground md:text-6xl">
            Gifting, as
            <span className="font-accent text-accent"> art</span>.
          </h1>
          <p className="mt-7 leading-relaxed text-muted-foreground">
            SJ Arts was born from a quiet belief — that a gift, made with intention,
            can hold an entire moment. We are a small atelier of makers,
            calligraphers and florists, devoted to creating heirloom pieces for
            life's most cherished occasions.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Every piece that leaves our studio is hand-finished, considered down
            to the ribbon and the wax seal. We don't believe in fast or generic.
            We believe in slow craft, in personal touches, in gifts that bring
            tears before they are even opened.
          </p>
        </div>
        <div className="img-zoom aspect-[4/5] overflow-hidden bg-muted">
          <img src={heroGift} alt="SJ Arts atelier" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container-luxury grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Handmade", "Every keepsake is hand-finished in our atelier — never mass-produced."],
            ["Personalised", "Calligraphy, monograms, photographs — your story, in every detail."],
            ["Considered", "We obsess over the small things: the seal, the scent, the ribbon."],
            ["Emotional", "Our gifts are designed to be remembered for a lifetime."],
          ].map(([t, b]) => (
            <div key={t}>
              <p className="eyebrow text-accent">{t}</p>
              <p className="font-accent mt-3 text-xl text-foreground">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-luxury grid gap-16 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="img-zoom order-2 aspect-[5/4] overflow-hidden bg-muted lg:order-1">
          <img src={occWedding} alt="Luxury wedding gift" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="order-1 lg:order-2">
          <p className="eyebrow">The promise</p>
          <h2 className="mt-5 font-display text-4xl text-foreground md:text-5xl">
            Premium presentation, always.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            From the moment you open a SJ Arts package, the experience begins.
            Hand-tied ribbons, calligraphy tags, wax seals and signature scent —
            an unboxing made to be photographed and remembered.
          </p>
          <Link
            to="/custom-orders"
            className="mt-9 inline-flex items-center gap-3 bg-foreground px-8 py-4 text-[0.72rem] uppercase tracking-[0.32em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Commission a Gift
          </Link>
        </div>
      </section>
    </>
  );
}