"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const featured = {
  name: "Apex Offset Smoker",
  slug: "apex-offset-smoker",
  tagline: "The Pinnacle",
  description:
    "Our flagship smoker. 6mm steel, hand-welded seams, precision temperature control. The smoker for those who accept no compromise.",
  price: "₹2,00,000",
  specs: ["6mm steel body", "Tuning plate system", "Counter-weight doors", "Dual-probe ports"],
  image: "/images/products/apex-smoker-1.png",
};

const secondary = [
  {
    name: "Classic 72",
    slug: "classic-72-offset-smoker",
    description: "72 inches of cook space for serious volume.",
    image: "/images/products/classic-72-2.jpg",
    price: "On Request",
  },
  {
    name: "Backyard Smoker",
    slug: "backyard-offset-smoker",
    description: "Backyard scale. Professional results.",
    image: "/images/products/backyard-smoker-2.jpg",
    price: "₹1,00,000",
  },
];

export function ProductShowcase() {
  return (
    <section className="section-xl bg-[#fafafa]">
      <div className="container-novo">
        {/* Section header */}
        <AnimatedSection className="flex items-end justify-between mb-16">
          <div>
            <p className="text-eyebrow text-[#888] mb-4">Featured Products</p>
            <h2 className="text-headline text-[#0a0a0a]">Crafted<br />with Purpose</h2>
          </div>
          <Link
            href="/products"
            className="hidden sm:flex items-center gap-2 text-[13px] font-semibold text-[#0a0a0a]/50 hover:text-[#0a0a0a] transition-colors group"
          >
            View all
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>

        {/* Asymmetric grid: 65/35 */}
        <div className="grid grid-cols-1 lg:grid-cols-[65fr_35fr] gap-4">
          {/* Large featured */}
          <AnimatedSection direction="up">
            <Link href={`/products/${featured.slug}`} className="group relative block overflow-hidden bg-[#0a0a0a]">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[640px]">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-103 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  quality={90}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-medium mb-2">
                        Flagship Model
                      </p>
                      <h3 className="text-[40px] lg:text-[52px] font-bold tracking-tight text-white leading-none mb-3">
                        {featured.name}
                      </h3>
                      <p className="text-white/60 text-sm max-w-sm leading-relaxed mb-6">
                        {featured.description}
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                        {featured.specs.map((s) => (
                          <span key={s} className="text-[11px] text-white/40 font-medium">
                            — {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-2xl font-bold text-white">{featured.price}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                      View Product
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <Link
                      href={`/quote?product=${featured.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="ml-4 px-5 py-2 bg-white text-[#0a0a0a] text-[12px] font-bold tracking-wide hover:bg-white/90 transition-colors"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Stacked secondary */}
          <div className="flex flex-col gap-4">
            {secondary.map((product, i) => (
              <AnimatedSection key={product.slug} delay={i * 0.1 + 0.1} direction="left">
                <Link
                  href={`/products/${product.slug}`}
                  className="group relative block overflow-hidden bg-[#111] flex-1"
                >
                  <div className="relative h-[304px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      sizes="35vw"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
                            {product.name}
                          </h3>
                          <p className="text-white/50 text-xs">{product.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-white/70">{product.price}</div>
                          <div className="flex items-center gap-1 text-white/50 text-xs mt-1 justify-end group-hover:text-white transition-colors">
                            View
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
