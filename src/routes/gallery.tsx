import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { GALLERY_FILTERS, GALLERY_ITEMS } from "@/lib/catalog";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Our Atelier Work | SJ Arts" },
      {
        name: "description",
        content:
          "A portfolio of luxury wedding gifts, anniversary bouquets, Ramadan boxes, personalised frames and bespoke creations by SJ Arts.",
      },
      { property: "og:title", content: "SJ Arts Gallery" },
      { property: "og:description", content: "A glimpse of our hand-finished work." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const items = GALLERY_ITEMS.filter((g) => filter === "all" || g.category === filter);

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-luxury py-20 text-center md:py-28">
          <p className="eyebrow flex items-center justify-center gap-3">
            <span className="gold-divider" /> Portfolio <span className="gold-divider" />
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl text-foreground md:text-6xl">
            From the atelier
          </h1>
          <p className="font-accent mx-auto mt-5 max-w-xl text-xl text-muted-foreground">
            A small window into the gifts we've crafted for our cherished clients.
          </p>
        </div>
      </section>

      <section className="container-luxury py-14">
        <div className="flex flex-wrap justify-center gap-2 border-b border-border pb-6">
          {GALLERY_FILTERS.map((f) => {
            const active = filter === f.slug;
            return (
              <button
                key={f.slug}
                onClick={() => setFilter(f.slug)}
                className={`px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.3em] transition-colors ${
                  active
                    ? "bg-foreground text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-accent hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
          {items.map((g, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="img-zoom group block w-full overflow-hidden bg-muted"
              aria-label={`Open ${g.label}`}
            >
              <img src={g.image} alt={g.label} loading="lazy" className="w-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      {lightbox !== null && items[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-6 backdrop-blur"
        >
          <button
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center border border-cream/40 text-cream"
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[lightbox].image}
              alt={items[lightbox].label}
              className="max-h-[80vh] w-auto object-contain"
            />
            <figcaption className="mt-4 text-center font-accent text-xl text-cream">
              {items[lightbox].label}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}