import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="container-luxury grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="eyebrow">{`Atelier · Est. 2019`}</p>
          <h3 className="mt-4 font-display text-3xl text-foreground">{SITE.name}</h3>
          <p className="font-accent mt-3 max-w-md text-lg text-muted-foreground">
            {SITE.tagline}
          </p>
        </div>
        <div>
          <p className="eyebrow mb-5">Explore</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/collections" className="hover:text-foreground">Collections</Link></li>
            <li><Link to="/gallery" className="hover:text-foreground">Gallery</Link></li>
            <li><Link to="/custom-orders" className="hover:text-foreground">Custom Orders</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5">Atelier</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-accent" /> {SITE.location}</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-accent" /> {SITE.phone}</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-accent" /> {SITE.email}</li>
            <li>
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
                <Instagram className="h-4 w-4 text-accent" /> @sj.arts
              </a>
            </li>
            <li className="pt-2 text-xs uppercase tracking-[0.28em]">{SITE.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-luxury flex flex-col justify-between gap-2 py-6 text-xs uppercase tracking-[0.28em] text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} {SITE.name}. All gifts handcrafted with intention.</span>
          <span>Made with love · Kerala, India</span>
        </div>
      </div>
    </footer>
  );
}