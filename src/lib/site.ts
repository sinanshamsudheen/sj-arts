export const WHATSAPP_NUMBER = "919567510016"; // +91 95675 10016

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function whatsappOrderUrl(productName: string, price: string) {
  return whatsappUrl(
    `Hello SJ Arts,\n\nI would like to order:\n\nProduct Name: ${productName}\nProduct Price: ${price}\n\nPlease share customization options.`,
  );
}

export const SITE = {
  name: "SJ Arts",
  tagline: "Thoughtfully crafted gifts for life's most special moments.",
  email: "hello@sjarts.in",
  phone: "+91 95675 10016",
  instagram: "https://instagram.com/sj.arts",
  location: "Kerala, India",
  hours: "Mon – Sat · 10:00 — 19:00",
};