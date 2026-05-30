import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, MessageCircle, Heart, Star } from "lucide-react";
import heroGift from "@/assets/sj/sj__arts_-20260530-0008.jpg";
import {
  OCCASIONS,
  COLLECTIONS,
  FEATURED,
  GALLERY_ITEMS,
  TESTIMONIALS,
} from "@/lib/catalog";
import { whatsappOrderUrl, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SJ Arts — Luxury Personalized Gifts & Wedding Keepsakes" },
      {
        name: "description",
        content:
          "Handcrafted luxury gifts, personalized gift boxes, wedding keepsakes, save-the-date cards, flower bouquets and bespoke custom creations by SJ Arts.",
      },
      { property: "og:title", content: "SJ Arts — Thoughtfully Crafted Luxury Gifts" },
      {
        property: "og:description",
        content:
          "Personalised gift boxes, wedding keepsakes, bouquets and bespoke creations.",
      },
      { property: "og:image", content: heroGift },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ShopByOccasion />
      <FeaturedCollections />
      <BestSellers />
      <CustomExperience />
      <InstagramGallery />
      <Testimonials />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroGift}
          alt="Luxury gift box with cream silk ribbon and white roses on marble"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/55 to-background/30" />
      </div>
      <div className="container-luxury flex min-h-[88vh] flex-col justify-center py-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="eyebrow flex items-center gap-3">
            <span className="gold-divider" /> The SJ Arts Atelier
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
            Thoughtfully crafted gifts for life's
            <span className="font-accent text-accent"> most special </span>
            moments.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Luxury personalised gifts, flower arrangements, wedding keepsakes
            and custom creations — made by hand, made with love.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/collections"
              className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 text-[0.72rem] uppercase tracking-[0.32em] text-primary-foreground transition-all hover:bg-accent hover:text-accent-foreground"
            >
              Shop Collections
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/custom-orders"
              className="inline-flex items-center gap-3 border border-foreground/30 px-8 py-4 text-[0.72rem] uppercase tracking-[0.32em] text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Sparkles className="h-4 w-4" />
              Custom Order
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShopByOccasion() {
  return (
    <section className="container-luxury py-24 md:py-32">
      <SectionHeading eyebrow="Shop by occasion" title="For every cherished moment" />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {OCCASIONS.map((o, i) => (
          <Link
            key={`${o.label}-${i}`}
            to="/collections"
            search={{ category: o.slug } as never}
            className="img-zoom group relative block aspect-[4/5] overflow-hidden bg-muted"
          >
            <img
              src={o.image}
              alt={o.label}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-cream">
              <p className="text-[0.65rem] uppercase tracking-[0.36em] text-[oklch(0.85_0.08_80)]">
                Occasion
              </p>
              <h3 className="mt-2 font-display text-3xl text-white">{o.label}</h3>
              <div className="mt-3 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.28em] text-white/85">
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FeaturedCollections() {
  return (
    <section className="bg-muted/50 py-24 md:py-32">
      <div className="container-luxury">
        <SectionHeading eyebrow="Featured collections" title="Curated with intention" />
        <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {COLLECTIONS.map((c) => (
            <Link
              key={c.label}
              to="/collections"
              search={{ category: c.slug } as never}
              className="img-zoom group relative block aspect-[5/4] overflow-hidden bg-background"
            >
              <img
                src={c.image}
                alt={c.label}
                loading="lazy"
                className="h-full w-full object-cover opacity-95 transition-opacity group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/10" />
              <div className="absolute left-7 top-7">
                <p className="text-[0.6rem] uppercase tracking-[0.36em] text-accent">
                  Collection
                </p>
                <h3 className="mt-1 font-display text-2xl text-foreground drop-shadow-sm">
                  {c.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BestSellers() {
  return (
    <section className="container-luxury py-24 md:py-32">
      <SectionHeading
        eyebrow="Best sellers"
        title="Loved by our community"
        sub="The pieces our clients return to again and again — refined, considered, made to last."
      />
      <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {FEATURED.slice(0, 6).map((p) => (
          <article key={p.slug} className="group hover-lift">
            <Link
              to="/products/$slug"
              params={{ slug: p.slug }}
              className="block"
            >
              <div className="img-zoom aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-1 pt-6">
                <p className="text-[0.6rem] uppercase tracking-[0.32em] text-accent">
                  {p.category.replace("-", " ")}
                </p>
                <h3 className="mt-2 font-display text-2xl text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-accent text-xl text-foreground">
                    {p.startingFrom}
                  </span>
                  <span className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.28em] text-foreground">
                    View details <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function CustomExperience() {
  const steps = [
    { n: "01", title: "Choose Occasion", body: "Tell us who it's for and what feeling we're creating." },
    { n: "02", title: "Share Requirements", body: "Budget, palette, references — every detail welcomed." },
    { n: "03", title: "Personalise Design", body: "We sketch, refine, and approve every element with you." },
    { n: "04", title: "Receive Final Creation", body: "Hand-finished, beautifully packaged, ready to gift." },
  ];
  return (
    <section className="border-y border-border bg-secondary py-24 md:py-32">
      <div className="container-luxury grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <div>
          <p className="eyebrow">Custom gifting experience</p>
          <h2 className="mt-5 font-display text-4xl text-foreground md:text-5xl">
            A gift designed entirely
            <span className="font-accent text-accent"> around you</span>.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            From an intimate keepsake to an heirloom presentation for two
            hundred — every SJ Arts custom order begins with a conversation
            and ends with something they'll remember forever.
          </p>
          <Link
            to="/custom-orders"
            className="mt-10 inline-flex items-center gap-3 bg-foreground px-8 py-4 text-[0.72rem] uppercase tracking-[0.32em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Start Custom Order <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ol className="grid gap-6 sm:grid-cols-2">
          {steps.map((s) => (
            <li
              key={s.n}
              className="group relative border border-border bg-background p-7 transition-colors hover:border-accent"
            >
              <span className="font-accent text-3xl text-accent">{s.n}</span>
              <h3 className="mt-3 font-display text-xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function InstagramGallery() {
  // Masonry-style with mixed heights
  const items = GALLERY_ITEMS.slice(0, 8);
  return (
    <section className="container-luxury py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="From the atelier" title="A glimpse of our work" align="left" />
        <Link
          to="/gallery"
          className="inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.32em] text-foreground hover:text-accent"
        >
          View full gallery <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((g, i) => (
          <div
            key={i}
            className={`img-zoom relative overflow-hidden bg-muted ${
              i % 5 === 0 ? "aspect-[3/4]" : i % 4 === 0 ? "aspect-square" : "aspect-[4/5]"
            }`}
          >
            <img src={g.image} alt={g.label} loading="lazy" className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="container-luxury">
        <SectionHeading eyebrow="Kind words" title="From our cherished clients" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col border border-border bg-background p-9"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent" />
                ))}
              </div>
              <blockquote className="font-accent mt-6 text-xl leading-relaxed text-foreground">
                &ldquo;{t.review}&rdquo;
              </blockquote>
              <figcaption className="mt-auto pt-8 text-sm">
                <span className="block font-display text-base text-foreground">{t.name}</span>
                <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  {t.occasion}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="container-luxury py-24 md:py-32">
      <div className="relative isolate overflow-hidden border border-border bg-foreground px-8 py-20 text-center text-primary-foreground md:px-16 md:py-28">
        <Heart className="mx-auto h-6 w-6 text-accent" />
        <p className="eyebrow mt-6 text-accent">Bespoke gifting</p>
        <h2 className="mt-5 font-display text-4xl text-primary-foreground md:text-6xl">
          Need something truly unique?
        </h2>
        <p className="font-accent mx-auto mt-6 max-w-xl text-xl text-primary-foreground/80">
          Let's create a personalised gift together.
        </p>
        <a
          href={whatsappUrl(
            "Hello SJ Arts, I would like to create a personalised gift. Could you help?",
          )}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 bg-accent px-9 py-4 text-[0.72rem] uppercase tracking-[0.32em] text-accent-foreground transition-transform hover:scale-[1.02]"
        >
          <MessageCircle className="h-4 w-4" />
          Message us on WhatsApp
        </a>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${align === "center" ? "flex justify-center" : ""} items-center gap-3`}>
        <span className="gold-divider" /> {eyebrow} <span className="gold-divider" />
      </p>
      <h2 className="mt-5 font-display text-4xl text-foreground md:text-5xl">{title}</h2>
      {sub && <p className="mt-5 text-muted-foreground">{sub}</p>}
    </div>
  );
}
