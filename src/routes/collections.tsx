import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { z } from "zod";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { CATEGORIES, PRODUCTS, type Category } from "@/lib/catalog";

const categoryValues = ["all", "wedding", "birthday", "anniversary", "ramadan", "flowers", "gift-boxes", "frames"] as const;

const searchSchema = z.object({
  category: fallback(z.enum(categoryValues), "all").default("all"),
});

export const Route = createFileRoute("/collections")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Collections — Luxury Personalised Gifts | SJ Arts" },
      {
        name: "description",
        content:
          "Browse the SJ Arts collections — wedding keepsakes, anniversary bouquets, Ramadan boxes, personalised frames and bespoke gift boxes.",
      },
      { property: "og:title", content: "SJ Arts Collections" },
      { property: "og:description", content: "Luxury gift collections, hand-finished and personalised." },
    ],
    links: [{ rel: "canonical", href: "/collections" }],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  const { category } = Route.useSearch();
  const items = PRODUCTS.filter((p) => category === "all" || p.category === (category as Category));

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-luxury py-20 text-center md:py-28">
          <p className="eyebrow flex items-center justify-center gap-3">
            <span className="gold-divider" /> The Collections <span className="gold-divider" />
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl text-foreground md:text-6xl">
            Heirloom gifts, made by hand.
          </h1>
          <p className="font-accent mx-auto mt-5 max-w-xl text-xl text-muted-foreground">
            Filter our atelier by occasion or piece. Every order is finished bespoke for you.
          </p>
        </div>
      </section>

      <section className="container-luxury py-14">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border pb-6">
          {CATEGORIES.map((c) => {
            const active = c.slug === category;
            return (
              <Link
                key={c.slug}
                to="/collections"
                search={{ category: c.slug } as never}
                className={`px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.3em] transition-colors ${
                  active
                    ? "bg-foreground text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-accent hover:text-foreground"
                }`}
              >
                {c.label}
              </Link>
            );
          })}
        </div>

        {items.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">No pieces in this category yet.</p>
        ) : (
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <article key={p.slug} className="group hover-lift">
                <Link to="/products/$slug" params={{ slug: p.slug }} className="block">
                  <div className="img-zoom aspect-[4/5] overflow-hidden bg-muted">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="px-1 pt-6">
                    <p className="text-[0.6rem] uppercase tracking-[0.32em] text-accent">
                      {p.category.replace("-", " ")}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-accent text-xl text-foreground">{p.startingFrom}</span>
                      <span className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.28em] text-foreground">
                        View <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}