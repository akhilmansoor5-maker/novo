import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const cats = [
  {
    id: "offset-smokers",
    label: "Offset Smokers",
    description: "Handcrafted for low-and-slow perfection",
    image: "/images/products/apex-smoker-6.png",
    count: 6,
  },
  {
    id: "bbq-grills",
    label: "BBQ Grills",
    description: "Open-fire cooking systems",
    image: "/images/products/santa-maria-2.jpg",
    count: 2,
  },
  {
    id: "commercial-smokers",
    label: "Commercial",
    description: "High-capacity for restaurants & events",
    image: "/images/products/general-8.jpg",
    count: 1,
  },
  {
    id: "outdoor-kitchens",
    label: "Outdoor Kitchens",
    description: "Complete outdoor cooking systems",
    image: "/images/gallery/gallery-14.jpg",
    count: 2,
  },
  {
    id: "custom-fabrication",
    label: "Custom Builds",
    description: "Bespoke to your exact requirements",
    image: "/images/products/general-4.jpg",
    count: null,
  },
];

export function ProductCategories() {
  return (
    <section className="section-xl bg-[#fafafa]">
      <div className="container-novo">
        <AnimatedSection className="mb-16">
          <p className="text-eyebrow text-[#888] mb-4">Browse by Category</p>
          <h2 className="text-headline text-[#0a0a0a]">What We Make</h2>
        </AnimatedSection>

        {/* Editorial grid: 2 large + 3 smaller */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {cats.map((cat, i) => {
            const isLarge = i < 2;
            return (
              <AnimatedSection
                key={cat.id}
                delay={i * 0.07}
                className={isLarge ? "lg:row-span-2" : ""}
              >
                <Link
                  href={`/products?category=${cat.id}`}
                  className="group relative flex flex-col justify-end overflow-hidden bg-[#111]"
                  style={{ minHeight: isLarge ? 560 : 280 }}
                >
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes={isLarge ? "50vw" : "33vw"}
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8">
                    {cat.count && (
                      <span className="inline-block text-[10px] uppercase tracking-[0.15em] text-white/40 border border-white/15 px-2 py-1 mb-4">
                        {cat.count} products
                      </span>
                    )}
                    <h3
                      className="font-bold text-white tracking-tight leading-none mb-2"
                      style={{ fontSize: isLarge ? 36 : 24 }}
                    >
                      {cat.label}
                    </h3>
                    <p className="text-white/50 text-sm mb-5">{cat.description}</p>
                    <div className="flex items-center gap-2 text-white/60 group-hover:text-white text-[13px] font-semibold transition-colors">
                      Explore
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
