import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Check, MessageCircle, Truck, Clock, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/lib/catalog";
import { whatsappOrderUrl } from "@/lib/site";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.title} — SJ Arts` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.title} — SJ Arts` },
        { property: "og:description", content: p.description },
        { property: "og:type", content: "product" },
        { property: "og:image", content: p.image },
      ],
      links: [{ rel: "canonical", href: `/products/${p.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container-luxury py-40 text-center">
      <h1 className="font-display text-4xl text-foreground">Piece not found</h1>
      <Link to="/collections" className="mt-6 inline-block text-accent">Back to Collections</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const images = product.gallery.length ? product.gallery : [product.image];

  return (
    <section className="container-luxury py-16 md:py-24">
      <Link
        to="/collections"
        className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Collections
      </Link>

      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <div className="img-zoom aspect-[4/5] overflow-hidden bg-muted">
            <img
              src={images[active]}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>
          {images.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-3">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`aspect-square overflow-hidden border ${
                    i === active ? "border-accent" : "border-border"
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="lg:pt-6">
          <p className="eyebrow">{product.category.replace("-", " ")}</p>
          <h1 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
            {product.title}
          </h1>
          <p className="font-accent mt-4 text-2xl text-accent">{product.startingFrom}</p>

          <p className="mt-7 leading-relaxed text-muted-foreground">
            {product.longDescription}
          </p>

          <div className="mt-9">
            <p className="eyebrow">Hand-finished details</p>
            <ul className="mt-4 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-accent" /> {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9 border-t border-border pt-7">
            <p className="eyebrow mb-4">Personalisation</p>
            <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {["Recipient name", "Personal message", "Theme", "Colours", "Photo upload", "Special instructions"].map(
                (label) => (
                  <div key={label} className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-accent" /> {label}
                  </div>
                ),
              )}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              All customisation is finalised over WhatsApp with our gifting concierge.
            </p>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3 border border-border p-4">
              <Clock className="mt-0.5 h-4 w-4 text-accent" />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Production</p>
                <p className="mt-1 text-sm text-foreground">{product.productionTime}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border border-border p-4">
              <Truck className="mt-0.5 h-4 w-4 text-accent" />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Delivery</p>
                <p className="mt-1 text-sm text-foreground">{product.delivery}</p>
              </div>
            </div>
          </div>

          <a
            href={whatsappOrderUrl(product.title, product.price)}
            target="_blank"
            rel="noreferrer"
            className="mt-10 flex w-full items-center justify-center gap-3 bg-foreground px-8 py-5 text-[0.72rem] uppercase tracking-[0.32em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <MessageCircle className="h-4 w-4" /> Order on WhatsApp
          </a>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            No checkout. No cart. Just a direct conversation with our atelier.
          </p>
        </div>
      </div>
    </section>
  );
}