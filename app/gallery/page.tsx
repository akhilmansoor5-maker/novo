"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

type GalleryCategory = "all" | "products" | "manufacturing" | "installations";

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  aspect?: "portrait" | "landscape" | "square";
}

const galleryImages: GalleryImage[] = [
  { src: "/images/products/apex-smoker-1.png", alt: "Apex Offset Smoker", category: "products", aspect: "square" },
  { src: "/images/gallery/gallery-01.jpg", alt: "Novo smoker in action", category: "products", aspect: "landscape" },
  { src: "/images/products/santa-maria-4.jpg", alt: "Santa Maria Grill fire", category: "products", aspect: "portrait" },
  { src: "/images/products/classic-72-2.jpg", alt: "Classic 72 Offset Smoker", category: "products", aspect: "landscape" },
  { src: "/images/products/backyard-smoker-2.jpg", alt: "Backyard offset smoker", category: "products", aspect: "portrait" },
  { src: "/images/products/apex-smoker-3.png", alt: "Apex Smoker side angle", category: "products", aspect: "square" },
  { src: "/images/products/santa-maria-2.jpg", alt: "Santa Maria wide view", category: "products", aspect: "landscape" },
  { src: "/images/products/general-4.jpg", alt: "Workshop fabrication", category: "manufacturing", aspect: "portrait" },
  { src: "/images/manufacturing/manufacturing-4.jpg", alt: "Manufacturing detail", category: "manufacturing", aspect: "landscape" },
  { src: "/images/products/general-8.jpg", alt: "Smoker workshop", category: "manufacturing", aspect: "landscape" },
  { src: "/images/manufacturing/manufacturing-2.jpg", alt: "Novo workshop", category: "manufacturing", aspect: "portrait" },
  { src: "/images/manufacturing/manufacturing-3.jpg", alt: "Fabrication close-up", category: "manufacturing", aspect: "portrait" },
  { src: "/images/gallery/gallery-06.jpg", alt: "Smoker outdoor installation", category: "installations", aspect: "portrait" },
  { src: "/images/gallery/gallery-12.jpg", alt: "Custom outdoor setup", category: "installations", aspect: "portrait" },
  { src: "/images/gallery/gallery-10.jpg", alt: "Grilling installation", category: "installations", aspect: "portrait" },
  { src: "/images/gallery/gallery-11.jpg", alt: "BBQ setup", category: "installations", aspect: "landscape" },
  { src: "/images/gallery/gallery-14.jpg", alt: "Outdoor cooking area", category: "installations", aspect: "landscape" },
  { src: "/images/gallery/gallery-17.jpg", alt: "Smoker on site", category: "installations", aspect: "portrait" },
  { src: "/images/gallery/gallery-05.jpg", alt: "Santa Maria installed", category: "installations", aspect: "portrait" },
  { src: "/images/products/santa-maria-6.jpg", alt: "Grill in use", category: "products", aspect: "landscape" },
  { src: "/images/gallery/gallery-02.jpg", alt: "Novo smoker in field", category: "products", aspect: "landscape" },
  { src: "/images/products/classic-72-5.jpg", alt: "Classic 72 detail", category: "products", aspect: "portrait" },
  { src: "/images/gallery/gallery-09.jpg", alt: "Smoker at event", category: "installations", aspect: "portrait" },
];

const categoryLabels: Record<GalleryCategory, string> = {
  all: "All",
  products: "Products",
  manufacturing: "Manufacturing",
  installations: "Installations",
};

export default function GalleryPage() {
  const [category, setCategory] = useState<GalleryCategory>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    category === "all" ? galleryImages : galleryImages.filter((img) => img.category === category);

  const openLightbox = (index: number) => {
    setLightbox(index);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = "";
  };
  const prevImage = () =>
    setLightbox((i) => (i !== null ? (i === 0 ? filtered.length - 1 : i - 1) : null));
  const nextImage = () =>
    setLightbox((i) => (i !== null ? (i === filtered.length - 1 ? 0 : i + 1) : null));

  return (
    <div className="pt-[72px]">
      {/* Hero header — dark with background image */}
      <section className="relative bg-[#0a0a0a] py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image src="/images/gallery/gallery-01.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>
        <div className="container-novo relative z-10">
          <AnimatedSection>
            <p className="text-eyebrow text-white/30 mb-5">Portfolio</p>
            <h1 className="text-display text-white mb-4">The Work</h1>
            <p className="text-lg text-white/40 max-w-lg font-light">
              Products, craftsmanship, and installations from our Thrissur workshop.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-[60px] z-30 bg-white/95 backdrop-blur-sm border-b border-[#e8e8e8]">
        <div className="container-novo">
          <div className="flex items-center overflow-x-auto py-0">
            {(Object.keys(categoryLabels) as GalleryCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`relative shrink-0 px-5 py-4 text-[12px] font-semibold tracking-wide uppercase whitespace-nowrap transition-colors ${
                  category === cat ? "text-[#0a0a0a]" : "text-[#999] hover:text-[#333]"
                }`}
              >
                {categoryLabels[cat]}
                {category === cat && (
                  <motion.div
                    layoutId="gallery-underline"
                    className="absolute bottom-0 inset-x-5 h-0.5 bg-[#0a0a0a]"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.35 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Editorial magazine grid */}
      <section className="section-xl bg-[#0f0f0f]">
        <div className="container-novo">
          <AnimatePresence mode="wait">
            <motion.div
              key={category}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-2"
            >
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="break-inside-avoid cursor-pointer group relative overflow-hidden bg-[#1a1a1a] mb-2"
                  onClick={() => openLightbox(i)}
                >
                  <div className={`relative ${
                    img.aspect === "portrait" ? "aspect-[3/4]"
                    : img.aspect === "landscape" ? "aspect-[4/3]"
                    : "aspect-square"
                  }`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-400" />
                    <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/70 to-transparent translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <p className="text-white text-xs font-medium tracking-wide">{img.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors z-10 border border-white/20"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors z-10 border border-white/20"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative w-full h-full max-w-5xl max-h-[85vh] mx-20"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
            <button
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors z-10 border border-white/20"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest uppercase">
              {lightbox + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
