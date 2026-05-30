import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/gallery", label: "Gallery" },
  { to: "/custom-orders", label: "Custom Orders" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxury flex h-20 items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3">
          <span className="font-display text-2xl tracking-wide text-foreground">
            {SITE.name}
          </span>
          <span className="hidden text-[0.6rem] uppercase tracking-[0.32em] text-accent md:inline">
            Luxury Gifting Atelier
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative text-[0.78rem] uppercase tracking-[0.28em] transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-1/2 h-px -translate-x-1/2 bg-accent transition-all duration-500 ${
                    active ? "w-6" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          to="/contact"
          className="hidden border border-accent px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.3em] text-foreground transition-colors hover:bg-accent hover:text-accent-foreground lg:inline-block"
        >
          Enquire
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex h-10 w-10 items-center justify-center lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-luxury flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-border/60 py-4 text-sm uppercase tracking-[0.28em] text-foreground last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}