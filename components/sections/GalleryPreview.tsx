import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const previewImages = [
  { src: "/gallery/product-1.jpg", alt: "Apex Offset Smoker" },
  { src: "/gallery/product-2.jpg", alt: "Classic 72 in use" },
  { src: "/manufacturing/fabrication-1.jpg", alt: "Welding at Novo workshop" },
  { src: "/gallery/installation-1.jpg", alt: "Outdoor kitchen installation" },
  { src: "/gallery/product-3.jpg", alt: "Santa Maria Grill" },
  { src: "/manufacturing/workshop.jpg", alt: "Novo Industries workshop" },
];

export function GalleryPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <AnimatedSection>
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#888] font-medium mb-3">
              Gallery
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a1a]">
              See the Work
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="/gallery"
              className="flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] hover:gap-3 transition-all"
            >
              View full gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {previewImages.map((img, i) => (
            <AnimatedSection
              key={img.src}
              delay={i * 0.06}
              className={i === 0 || i === 5 ? "md:row-span-2" : ""}
            >
              <div
                className={`relative overflow-hidden bg-[#f0f0f0] group ${
                  i === 0 || i === 5 ? "aspect-[3/4] md:h-full" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
