"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

// Magazine-style editorial layout — each block is unique
const blocks = [
  { src: "/images/products/santa-maria-4.jpg", alt: "Santa Maria Grill fire", tall: true },
  { src: "/images/gallery/gallery-01.jpg", alt: "Smoker in use", wide: true },
  { src: "/images/products/backyard-smoker-2.jpg", alt: "Backyard smoker" },
  { src: "/images/gallery/gallery-06.jpg", alt: "Novo smoker outdoor" },
  { src: "/images/products/apex-smoker-4.png", alt: "Apex smoker detail", wide: true },
  { src: "/images/gallery/gallery-10.jpg", alt: "Grilling scene", tall: true },
  { src: "/images/gallery/gallery-12.jpg", alt: "Custom build" },
  { src: "/images/products/classic-72-5.jpg", alt: "Classic 72 side view" },
];

export function EditorialGallery() {
  return (
    <section className="section-xl bg-[#0f0f0f]">
      <div className="container-novo">
        <AnimatedSection className="flex items-end justify-between mb-12">
          <div>
            <p className="text-eyebrow text-white/25 mb-4">Portfolio</p>
            <h2 className="text-headline text-white">See the Work</h2>
          </div>
          <Link
            href="/gallery"
            className="hidden sm:flex items-center gap-2 text-[13px] font-semibold text-white/40 hover:text-white transition-colors group"
          >
            Full gallery
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>

        {/* Magazine grid — 4 col with varied spans */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {/* Row 1: tall | 2-wide | square */}
          <AnimatedSection delay={0.05} className="row-span-2">
            <div className="relative h-full min-h-[300px] md:min-h-[500px] overflow-hidden bg-[#1a1a1a] group">
              <Image
                src={blocks[0].src}
                alt={blocks[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="25vw"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="col-span-2">
            <div className="relative aspect-[2/1] overflow-hidden bg-[#1a1a1a] group">
              <Image
                src={blocks[1].src}
                alt={blocks[1].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="50vw"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.12}>
            <div className="relative aspect-square overflow-hidden bg-[#1a1a1a] group">
              <Image
                src={blocks[2].src}
                alt={blocks[2].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="25vw"
              />
            </div>
          </AnimatedSection>

          {/* Row 2 continuation (col 2-4, row 2) */}
          <AnimatedSection delay={0.14}>
            <div className="relative aspect-square overflow-hidden bg-[#1a1a1a] group">
              <Image
                src={blocks[3].src}
                alt={blocks[3].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="25vw"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.16} className="col-span-2">
            <div className="relative aspect-[2/1] overflow-hidden bg-[#1a1a1a] group">
              <Image
                src={blocks[4].src}
                alt={blocks[4].alt}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="50vw"
              />
            </div>
          </AnimatedSection>

          {/* Row 3 */}
          <AnimatedSection delay={0.18} className="row-span-2">
            <div className="relative h-full min-h-[280px] overflow-hidden bg-[#1a1a1a] group">
              <Image
                src={blocks[5].src}
                alt={blocks[5].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="25vw"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-square overflow-hidden bg-[#1a1a1a] group">
              <Image
                src={blocks[6].src}
                alt={blocks[6].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="25vw"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.22} className="col-span-2">
            <div className="relative aspect-[2/1] overflow-hidden bg-[#1a1a1a] group">
              <Image
                src={blocks[7].src}
                alt={blocks[7].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="50vw"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Mobile link */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors"
          >
            Full gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
