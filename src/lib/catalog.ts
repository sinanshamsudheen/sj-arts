import heroGift from "@/assets/hero-gift.jpg";
import occWedding from "@/assets/occ-wedding.jpg";
import occEngagement from "@/assets/occ-engagement.jpg";
import occBirthday from "@/assets/occ-birthday.jpg";
import occAnniversary from "@/assets/occ-anniversary.jpg";
import occRamadan from "@/assets/occ-ramadan.jpg";
import occSpecial from "@/assets/occ-special.jpg";
import prodBouquet from "@/assets/prod-bouquet.jpg";
import prodFrame from "@/assets/prod-frame.jpg";
import prodSavedate from "@/assets/prod-savedate.jpg";
import prodCouple from "@/assets/prod-couple.jpg";
import prodBox from "@/assets/prod-box.jpg";
import prodWedding from "@/assets/prod-wedding.jpg";
import prodRamadan from "@/assets/prod-ramadan.jpg";

export const IMG = {
  heroGift,
  occWedding,
  occEngagement,
  occBirthday,
  occAnniversary,
  occRamadan,
  occSpecial,
  prodBouquet,
  prodFrame,
  prodSavedate,
  prodCouple,
  prodBox,
  prodWedding,
  prodRamadan,
};

export type Category =
  | "wedding"
  | "birthday"
  | "anniversary"
  | "ramadan"
  | "flowers"
  | "gift-boxes"
  | "frames";

export const CATEGORIES: { slug: Category | "all"; label: string }[] = [
  { slug: "all", label: "All" },
  { slug: "wedding", label: "Wedding" },
  { slug: "birthday", label: "Birthday" },
  { slug: "anniversary", label: "Anniversary" },
  { slug: "ramadan", label: "Ramadan" },
  { slug: "flowers", label: "Flowers" },
  { slug: "gift-boxes", label: "Gift Boxes" },
  { slug: "frames", label: "Frames" },
];

export const OCCASIONS = [
  { slug: "wedding", label: "Wedding", image: occWedding },
  { slug: "anniversary", label: "Engagement", image: occEngagement },
  { slug: "birthday", label: "Birthday", image: occBirthday },
  { slug: "anniversary", label: "Anniversary", image: occAnniversary },
  { slug: "ramadan", label: "Ramadan", image: occRamadan },
  { slug: "gift-boxes", label: "Special Gifts", image: occSpecial },
];

export const COLLECTIONS = [
  { slug: "wedding", label: "Wedding Collection", image: occWedding },
  { slug: "birthday", label: "Birthday Collection", image: occBirthday },
  { slug: "anniversary", label: "Anniversary Collection", image: occAnniversary },
  { slug: "ramadan", label: "Ramadan Collection", image: occRamadan },
  { slug: "flowers", label: "Floral Collection", image: prodBouquet },
  { slug: "gift-boxes", label: "Personalized Gifts", image: prodBox },
];

export type Product = {
  slug: string;
  title: string;
  category: Category;
  price: string;
  startingFrom: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  gallery: string[];
  productionTime: string;
  delivery: string;
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: "ivory-wedding-keepsake-box",
    title: "Ivory Wedding Keepsake Box",
    category: "wedding",
    price: "₹ 4,800",
    startingFrom: "From ₹ 4,800",
    description: "Hand-finished keepsake box with preserved roses and gold monogram.",
    longDescription:
      "An heirloom-worthy keepsake box, lined in ivory silk and topped with preserved roses. Personalised with hand-pressed gold initials of the couple, made to be treasured long after the day.",
    features: [
      "Preserved long-lasting roses",
      "Hand-pressed gold monogram",
      "Silk-lined interior compartment",
      "Signature SJ Arts presentation",
    ],
    image: prodWedding,
    gallery: [prodWedding, occWedding, occEngagement],
    productionTime: "7 – 10 working days",
    delivery: "Pan-India courier · International on request",
    featured: true,
  },
  {
    slug: "blush-luxury-bouquet",
    title: "Blush Luxury Bouquet",
    category: "flowers",
    price: "₹ 2,600",
    startingFrom: "From ₹ 2,600",
    description: "Garden roses and soft eucalyptus wrapped in cream couture paper.",
    longDescription:
      "A romantic arrangement of ivory garden roses, lisianthus and silvery eucalyptus, finished with cream couture wrap and a hand-tied satin ribbon.",
    features: [
      "Premium imported garden roses",
      "Hand-tied couture wrap",
      "Personalised note card",
      "Same-day delivery available",
    ],
    image: prodBouquet,
    gallery: [prodBouquet, occWedding, occEngagement],
    productionTime: "Same day – 48 hours",
    delivery: "Local same-day · Outstation overnight",
    featured: true,
  },
  {
    slug: "personalised-oak-frame",
    title: "Personalised Oak Frame",
    category: "frames",
    price: "₹ 1,950",
    startingFrom: "From ₹ 1,950",
    description: "Solid oak frame with bespoke calligraphy and dried botanicals.",
    longDescription:
      "Crafted from solid oak with a soft matte finish, each frame is engraved with bespoke calligraphy of your chosen name, date or message.",
    features: [
      "Solid oak with matte finish",
      "Hand-engraved calligraphy",
      "Pressed botanical accents",
      "Wall and tabletop ready",
    ],
    image: prodFrame,
    gallery: [prodFrame, occAnniversary, occSpecial],
    productionTime: "5 – 7 working days",
    delivery: "Pan-India courier",
    featured: true,
  },
  {
    slug: "gilded-save-the-date-suite",
    title: "Gilded Save-the-Date Suite",
    category: "wedding",
    price: "₹ 180 / card",
    startingFrom: "From ₹ 180 per card",
    description: "Cotton stock invitation with gold-foil calligraphy and wax seal.",
    longDescription:
      "Letterpressed on heavyweight cotton stock with hand-applied gold foil calligraphy, paired with a wax-sealed envelope. Designed bespoke for every couple.",
    features: [
      "Cotton 600gsm stock",
      "Gold foil hand-pressed",
      "Custom monogram wax seal",
      "Matching envelope & liner",
    ],
    image: prodSavedate,
    gallery: [prodSavedate, occWedding, occSpecial],
    productionTime: "10 – 14 working days",
    delivery: "Pan-India courier · Bulk orders welcome",
    featured: true,
  },
  {
    slug: "couple-hamper-ritual",
    title: "Couple Hamper · Ritual",
    category: "gift-boxes",
    price: "₹ 3,400",
    startingFrom: "From ₹ 3,400",
    description: "A curated hamper of soy candles, artisan coffee and keepsake card.",
    longDescription:
      "An intimate hamper for two — small-batch soy candles, single-origin coffee, ceramic mugs and a handwritten keepsake card, nestled in a hand-woven basket.",
    features: [
      "Small-batch soy candles",
      "Single-origin coffee",
      "Handwritten keepsake card",
      "Hand-woven presentation basket",
    ],
    image: prodCouple,
    gallery: [prodCouple, occAnniversary, occSpecial],
    productionTime: "3 – 5 working days",
    delivery: "Pan-India courier",
  },
  {
    slug: "signature-gift-box",
    title: "Signature Personalised Gift Box",
    category: "gift-boxes",
    price: "₹ 2,200",
    startingFrom: "From ₹ 2,200",
    description: "Curated keepsakes, candles and florals in a bespoke box.",
    longDescription:
      "Our signature presentation — a hand-finished box of curated keepsakes, candles, dried florals and a personal note, styled to the occasion and recipient.",
    features: [
      "Bespoke curation per recipient",
      "Dried florals and ribbon",
      "Personalised name tag",
      "Signature SJ Arts box",
    ],
    image: prodBox,
    gallery: [prodBox, occSpecial, occBirthday],
    productionTime: "5 – 7 working days",
    delivery: "Pan-India courier",
    featured: true,
  },
  {
    slug: "ramadan-noor-box",
    title: "Ramadan Noor Gift Box",
    category: "ramadan",
    price: "₹ 2,900",
    startingFrom: "From ₹ 2,900",
    description: "Premium dates, attar and brass crescent in an arabesque box.",
    longDescription:
      "An elegant Ramadan box with premium Medjool dates, artisanal attar, a brass crescent ornament and a personalised dua card — all presented in a gilded arabesque box.",
    features: [
      "Premium Medjool dates",
      "Artisanal attar selection",
      "Brass crescent ornament",
      "Personalised dua card",
    ],
    image: prodRamadan,
    gallery: [prodRamadan, occRamadan, occSpecial],
    productionTime: "5 – 7 working days",
    delivery: "Pan-India courier · International on request",
    featured: true,
  },
  {
    slug: "anniversary-bloom-frame",
    title: "Anniversary Bloom & Frame",
    category: "anniversary",
    price: "₹ 3,800",
    startingFrom: "From ₹ 3,800",
    description: "Burgundy roses paired with a personalised photo frame.",
    longDescription:
      "Twelve velvet burgundy roses paired with a hand-finished personalised photo frame — a romantic gesture for the milestones that matter most.",
    features: [
      "12 long-stem burgundy roses",
      "Personalised photo frame",
      "Hand-tied silk ribbon",
      "Keepsake gift card",
    ],
    image: occAnniversary,
    gallery: [occAnniversary, prodFrame, prodBouquet],
    productionTime: "3 – 5 working days",
    delivery: "Local same-day · Pan-India 48 hours",
  },
  {
    slug: "birthday-celebration-box",
    title: "Birthday Celebration Box",
    category: "birthday",
    price: "₹ 1,800",
    startingFrom: "From ₹ 1,800",
    description: "A festive box with candle, blooms and personalised letter.",
    longDescription:
      "A joyful birthday presentation — wax-sealed letter, hand-poured candle, fresh blooms and a small keepsake, finished with a blush satin ribbon.",
    features: [
      "Hand-poured birthday candle",
      "Fresh seasonal blooms",
      "Wax-sealed personal letter",
      "Blush satin ribbon",
    ],
    image: occBirthday,
    gallery: [occBirthday, prodBox, occSpecial],
    productionTime: "3 – 5 working days",
    delivery: "Local same-day · Pan-India 48 hours",
  },
];

export const FEATURED = PRODUCTS.filter((p) => p.featured);

export const GALLERY_ITEMS = [
  { image: occWedding, category: "wedding" as const, label: "Ivory & Peony Wedding" },
  { image: prodBouquet, category: "flowers" as const, label: "Garden Rose Bouquet" },
  { image: occRamadan, category: "ramadan" as const, label: "Ramadan Noor Box" },
  { image: prodFrame, category: "frames" as const, label: "Oak Calligraphy Frame" },
  { image: occAnniversary, category: "anniversary" as const, label: "Burgundy Anniversary" },
  { image: occBirthday, category: "birthday" as const, label: "Blush Birthday Box" },
  { image: occEngagement, category: "wedding" as const, label: "Engagement Ring Set" },
  { image: prodSavedate, category: "wedding" as const, label: "Gilded Save-the-Date" },
  { image: prodCouple, category: "anniversary" as const, label: "Couple's Ritual Hamper" },
  { image: prodBox, category: "gift-boxes" as const, label: "Signature Gift Box" },
  { image: prodWedding, category: "wedding" as const, label: "Preserved Rose Keepsake" },
  { image: occSpecial, category: "gift-boxes" as const, label: "Bespoke Keepsake" },
];

export const GALLERY_FILTERS = [
  { slug: "all", label: "All" },
  { slug: "wedding", label: "Wedding" },
  { slug: "birthday", label: "Birthday" },
  { slug: "anniversary", label: "Anniversary" },
  { slug: "ramadan", label: "Ramadan" },
  { slug: "flowers", label: "Bouquets" },
  { slug: "frames", label: "Frames" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Aisha & Rayan",
    occasion: "Wedding · Kochi",
    review:
      "Every detail of our keepsake box was perfect — the calligraphy, the ribbon, the scent of the preserved roses. SJ Arts truly understood what we wanted.",
  },
  {
    name: "Priya Menon",
    occasion: "Anniversary",
    review:
      "I cried opening the gift. It felt so personal, so thoughtful. Worth every rupee — this is gifting elevated to an art form.",
  },
  {
    name: "Family Khan",
    occasion: "Ramadan",
    review:
      "We ordered twelve Ramadan boxes for family abroad. Each one arrived flawless. Beautiful, sacred, generous — exactly the feeling we wanted to send.",
  },
];