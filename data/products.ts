export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: ProductCategory;
  price?: string;
  image: string;
  gallery: string[];
  specs: ProductSpec[];
  features: string[];
  featured: boolean;
}

export type ProductCategory =
  | "offset-smokers"
  | "commercial-smokers"
  | "bbq-grills"
  | "outdoor-kitchens"
  | "custom-fabrication";

export interface CategoryMeta {
  id: ProductCategory;
  label: string;
  description: string;
}

export const categories: CategoryMeta[] = [
  { id: "offset-smokers", label: "Offset Smokers", description: "Handcrafted for low-and-slow perfection." },
  { id: "commercial-smokers", label: "Commercial Smokers", description: "High-capacity for restaurants & events." },
  { id: "bbq-grills", label: "BBQ Grills", description: "Precision grills for direct-fire cooking." },
  { id: "outdoor-kitchens", label: "Outdoor Kitchens", description: "Complete outdoor cooking systems." },
  { id: "custom-fabrication", label: "Custom Fabrication", description: "Bespoke to your exact requirements." },
];

export const products: Product[] = [
  {
    id: "apex-offset-smoker",
    slug: "apex-offset-smoker",
    name: "Apex Offset Smoker",
    tagline: "The Pinnacle of Smoke Craftsmanship",
    description: "Our flagship offset smoker — engineered for the most demanding pitmasters and outdoor cooking enthusiasts.",
    longDescription:
      "The Apex Offset Smoker represents the highest level of craftsmanship from Novo Industries. Built with 6mm thick steel for unrivalled heat retention, this smoker maintains precise temperatures across an extended cook without constant adjustment. The hand-welded firebox, precision-fitted doors, and custom tuning plate system deliver the most even heat distribution we've ever achieved.",
    category: "offset-smokers",
    price: "₹2,00,000",
    image: "/images/products/apex-smoker-1.png",
    gallery: [
      "/images/products/apex-smoker-1.png",
      "/images/products/apex-smoker-2.png",
      "/images/products/apex-smoker-3.png",
      "/images/products/apex-smoker-6.png",
      "/images/products/apex-smoker-7.png",
    ],
    specs: [
      { label: "Cooking Chamber", value: '36" × 20"' },
      { label: "Steel Thickness", value: "6mm" },
      { label: "Firebox", value: "Heavy-duty, oversized" },
      { label: "Temperature Range", value: "100°C – 350°C" },
      { label: "Grill Grates", value: "Stainless steel" },
      { label: "Weight", value: "Approx. 180 kg" },
      { label: "Finish", value: "High-temp powder coat" },
      { label: "Country of Origin", value: "India" },
    ],
    features: [
      "6mm thick steel body for superior heat retention",
      "Hand-welded construction with precision seam sealing",
      "Oversized firebox with air intake control",
      "Tuning plate system for even heat distribution",
      "Counter-weighted doors with stainless hinges",
      "Built-in thermometer with dual probes",
      "Removable ash pan for easy cleanup",
      "Heavy-duty cooking grates",
    ],
    featured: true,
  },
  {
    id: "classic-72-offset-smoker",
    slug: "classic-72-offset-smoker",
    name: "Classic 72 Offset Smoker",
    tagline: "Classic Proportions. Uncompromising Build.",
    description: "A timeless 72-inch offset smoker with serious cooking capacity for large gatherings.",
    longDescription:
      "The Classic 72 is Novo Industries' most popular offset smoker — a workhorse built for those who cook in volume without sacrificing quality. With 72 inches of cooking length, it handles whole animals, large briskets, and full pork shoulders simultaneously.",
    category: "offset-smokers",
    price: "On Request",
    image: "/images/products/classic-72-1.jpg",
    gallery: [
      "/images/products/classic-72-1.jpg",
      "/images/products/classic-72-2.jpg",
      "/images/products/classic-72-3.jpg",
      "/images/products/classic-72-4.png",
      "/images/products/classic-72-5.jpg",
    ],
    specs: [
      { label: "Cooking Chamber Length", value: '72"' },
      { label: "Steel Thickness", value: "5mm" },
      { label: "Cooking Area", value: "Approx. 2800 sq. in." },
      { label: "Temperature Range", value: "80°C – 320°C" },
      { label: "Grill Grates", value: "Heavy-duty steel" },
      { label: "Country of Origin", value: "India" },
    ],
    features: [
      "Large 72-inch cooking chamber",
      "Thick-wall steel construction",
      "Classic offset firebox design",
      "Multiple cooking grates",
      "Adjustable air dampers",
      "Built-in temperature gauge",
    ],
    featured: true,
  },
  {
    id: "backyard-offset-smoker",
    slug: "backyard-offset-smoker",
    name: "Backyard Offset Smoker",
    tagline: "Backyard Scale. Professional Results.",
    description: "Purpose-built for home use — compact enough for your backyard, powerful enough for any cook.",
    longDescription:
      "The Backyard Offset Smoker distills everything we've learned from building professional-grade smokers into a form factor that fits your patio, terrace, or garden. Easy to light, simple to manage, built to last.",
    category: "offset-smokers",
    price: "₹1,00,000",
    image: "/images/products/backyard-smoker-1.jpg",
    gallery: [
      "/images/products/backyard-smoker-1.jpg",
      "/images/products/backyard-smoker-2.jpg",
      "/images/products/backyard-smoker-3.jpg",
      "/images/products/backyard-smoker-4.jpg",
      "/images/products/backyard-smoker-5.jpg",
    ],
    specs: [
      { label: "Cooking Chamber", value: '36" × 18"' },
      { label: "Steel Thickness", value: "4mm" },
      { label: "Temperature Range", value: "100°C – 300°C" },
      { label: "Weight", value: "Approx. 80 kg" },
      { label: "Country of Origin", value: "India" },
    ],
    features: [
      "Compact design for home use",
      "Easy fire management",
      "Stable temperature performance",
      "Removable ash drawer",
      "Built-in thermometer",
      "Heavy-duty wheels for mobility",
    ],
    featured: true,
  },
  {
    id: "classic-reverse-flow",
    slug: "classic-reverse-flow",
    name: "Classic Reverse Flow",
    tagline: "Engineered for Even Heat. Perfected for Flavor.",
    description: "A reverse-flow offset smoker that delivers unmatched temperature uniformity across the entire cooking surface.",
    longDescription:
      "Reverse flow technology forces smoke and heat underneath a steel plate and back through the cooking chamber before exiting the stack — the result is dramatically more even temperatures from end to end.",
    category: "offset-smokers",
    price: "₹1,60,000",
    image: "/images/products/classic-reverse-flow-1.jpg",
    gallery: [
      "/images/products/classic-reverse-flow-1.jpg",
      "/images/products/classic-reverse-flow-2.jpg",
    ],
    specs: [
      { label: "Chamber Size", value: '48" × 20"' },
      { label: "Steel Thickness", value: "5mm" },
      { label: "Flow Type", value: "Reverse flow with baffle plate" },
      { label: "Temperature Variance", value: "±5°C chamber-wide" },
      { label: "Country of Origin", value: "India" },
    ],
    features: [
      "Reverse-flow baffle plate system",
      "Uniform heat distribution",
      "Superior smoke infusion",
      "Extended firebox for long burns",
      "Dual-probe thermometer ports",
      "Grease management drain",
    ],
    featured: false,
  },
  {
    id: "santa-maria-grill",
    slug: "santa-maria-grill",
    name: "Santa Maria Grill",
    tagline: "California Tradition. Indian Craftsmanship.",
    description: "A hand-crafted Santa Maria-style grill with adjustable grate height for open-fire cooking mastery.",
    longDescription:
      "The Santa Maria Grill revives a legendary open-fire cooking tradition in a form built to last generations. Its adjustable grate mechanism — hand-cranked to inch-precise positioning — gives you complete control over cooking temperature through flame proximity.",
    category: "bbq-grills",
    price: "On Request",
    image: "/images/products/santa-maria-1.jpg",
    gallery: [
      "/images/products/santa-maria-1.jpg",
      "/images/products/santa-maria-2.jpg",
      "/images/products/santa-maria-3.jpg",
      "/images/products/santa-maria-4.jpg",
      "/images/products/santa-maria-5.jpg",
      "/images/products/santa-maria-6.jpg",
      "/images/products/santa-maria-7.jpg",
    ],
    specs: [
      { label: "Grate Material", value: "Heavy-duty steel" },
      { label: "Adjustment", value: "Hand-crank ratchet" },
      { label: "Height Range", value: '6" – 24" above fire' },
      { label: "Country of Origin", value: "India" },
    ],
    features: [
      "Adjustable-height grate system",
      "Hand-crank ratchet mechanism",
      "Open-fire design for authentic flavor",
      "Heavy structural steel frame",
      "Removable grease tray",
    ],
    featured: true,
  },
  {
    id: "commercial-smoker",
    slug: "commercial-smoker",
    name: "Commercial Smoker",
    tagline: "Built for Volume. Built to Last.",
    description: "High-capacity commercial smoking systems designed for restaurants, hotels, and catering operations.",
    longDescription:
      "Novo Industries' Commercial Smoker line is engineered for businesses that demand consistent output at high volume. Built to withstand daily operation in demanding kitchen environments, featuring reinforced steel construction and commercial-grade hardware.",
    category: "commercial-smokers",
    price: "On Request",
    image: "/images/products/general-8.jpg",
    gallery: [
      "/images/products/general-8.jpg",
      "/images/products/general-4.jpg",
      "/images/products/general-1.jpg",
    ],
    specs: [
      { label: "Cooking Capacity", value: "Up to 100 kg per load" },
      { label: "Construction", value: "8mm steel, reinforced" },
      { label: "Configuration", value: "Custom to requirements" },
      { label: "Certifications", value: "Food-grade materials" },
    ],
    features: [
      "High-volume cooking capacity",
      "Commercial-grade steel construction",
      "Easy-clean interior surfaces",
      "Custom sizing available",
      "Built for daily service operations",
      "Optional digital temperature management",
    ],
    featured: false,
  },
  {
    id: "nst-vertical-smoker",
    slug: "nst-vertical-smoker",
    name: "NST Vertical Smoker",
    tagline: "Vertical Design. Maximum Efficiency.",
    description: "A vertical cabinet smoker that maximizes cooking capacity in a compact footprint.",
    longDescription:
      "The NST Vertical Smoker is designed for cooks who need serious capacity but limited floor space. Its vertical cabinet design stacks multiple cooking levels, ideal for ribs, sausages, poultry, and fish.",
    category: "offset-smokers",
    price: "On Request",
    image: "/images/products/general-9.jpg",
    gallery: ["/images/products/general-9.jpg", "/images/products/general-10.jpg"],
    specs: [
      { label: "Type", value: "Vertical cabinet" },
      { label: "Cooking Levels", value: "4 adjustable racks" },
      { label: "Door Seal", value: "Silicone gasket" },
      { label: "Country of Origin", value: "India" },
    ],
    features: [
      "Vertical stack design for small footprints",
      "4 adjustable cooking levels",
      "Door gasket for tight seal",
      "Water pan for moisture control",
      "Top-mounted exhaust stack",
    ],
    featured: false,
  },
  {
    id: "portable-pizza-oven",
    slug: "portable-pizza-oven",
    name: "Portable Pizza Oven",
    tagline: "Artisan Pizza. Anywhere.",
    description: "A compact, high-temperature wood-fired pizza oven that delivers authentic Neapolitan results.",
    longDescription:
      "The Portable Pizza Oven from Novo Industries brings the art of wood-fired pizza to any outdoor setting. Reaching temperatures above 450°C, it cooks authentic Neapolitan-style pizza in under 90 seconds.",
    category: "outdoor-kitchens",
    price: "₹79,999",
    image: "/images/gallery/gallery-14.jpg",
    gallery: ["/images/gallery/gallery-14.jpg", "/images/gallery/gallery-11.jpg"],
    specs: [
      { label: "Max Temperature", value: "450°C+" },
      { label: "Cook Time", value: "60–90 seconds per pizza" },
      { label: "Fuel", value: "Wood / pellets" },
      { label: "Weight", value: "Approx. 25 kg" },
    ],
    features: [
      "450°C+ cooking temperature",
      "Cordierite stone baking floor",
      "Insulated dome construction",
      "Portable with carry handles",
      "Compatible with wood or pellets",
    ],
    featured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, limit);
}
