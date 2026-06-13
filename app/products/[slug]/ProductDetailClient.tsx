"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
  related: Product[];
}

export function ProductDetailClient({ product, related }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<"specs" | "features">("specs");

  const images = product.gallery.length > 0 ? product.gallery : [product.image];

  return (
    <div className="pt-[72px]">

      {/* ── GALLERY + INFO — 60/40 ── */}
      <section className="section-xl bg-white">
        <div className="container-novo">
          <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-12 lg:gap-20 items-start">

            {/* Gallery */}
            <div>
              <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[activeImage]}
                      alt={`${product.name} — image ${activeImage + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority={activeImage === 0}
                      quality={90}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Thumbnail strip */}
              {images.length > 1 && (
                <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                  {images.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setActiveImage(i)}
                      className={`relative shrink-0 w-20 h-16 overflow-hidden border-2 transition-colors ${
                        i === activeImage ? "border-[#0a0a0a]" : "border-transparent hover:border-[#ccc]"
                      }`}
                    >
                      <Image src={src} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="80px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product info */}
            <AnimatedSection direction="left" className="lg:sticky lg:top-28">
              <p className="text-eyebrow text-[#888] mb-3">{product.category.replace(/-/g, " ")}</p>
              <h1 className="text-headline text-[#0a0a0a] mb-3">{product.name}</h1>
              <p className="text-lg text-[#666] leading-relaxed mb-6">{product.tagline}</p>

              {product.price && (
                <div className="mb-8">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#999] mb-1">Starting from</div>
                  <div className="text-3xl font-black text-[#0a0a0a] tracking-tight">{product.price}</div>
                </div>
              )}

              <p className="text-[#555] text-[15px] leading-relaxed mb-10">{product.description}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/quote?product=${product.slug}`}
                  className="flex-1 text-center py-4 px-6 bg-[#0a0a0a] text-white text-[13px] font-bold tracking-wide hover:bg-[#222] transition-colors"
                >
                  Request a Quote
                </Link>
                <a
                  href="https://wa.me/919322220026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-4 px-6 border-2 border-[#0a0a0a] text-[#0a0a0a] text-[13px] font-bold tracking-wide hover:bg-[#0a0a0a] hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── SPECS + FEATURES — 65/35 dark ── */}
      <section className="section-xl bg-[#0a0a0a]">
        <div className="container-novo">
          <AnimatedSection className="mb-12">
            <div className="flex gap-6 border-b border-white/10">
              {(["specs", "features"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-4 text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                    activeTab === tab ? "text-white" : "text-white/30 hover:text-white/60"
                  }`}
                >
                  {tab === "specs" ? "Specifications" : "Features"}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute bottom-0 inset-x-0 h-0.5 bg-white"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.35 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-[65fr_35fr] gap-12 lg:gap-20">
            <AnimatePresence mode="wait">
              {activeTab === "specs" ? (
                <motion.div
                  key="specs"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-0 border-t border-white/8"
                >
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="grid grid-cols-2 gap-4 py-5 border-b border-white/8">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/30">{spec.label}</div>
                      <div className="text-[15px] font-medium text-white">{spec.value}</div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="features"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {product.features.map((f) => (
                    <div key={f} className="flex items-start gap-4 py-3 border-b border-white/8">
                      <div className="w-5 h-5 bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-[15px] text-white/70 leading-relaxed">{f}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatedSection direction="left">
              <div className="bg-white/4 p-8 border border-white/8">
                <p className="text-eyebrow text-white/25 mb-4">About This Product</p>
                <p className="text-sm text-white/50 leading-relaxed">{product.longDescription}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── MANUFACTURING STORY — immersive ── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/manufacturing/hero-smoker.jpg"
            alt="Manufacturing"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 container-novo section-xl">
          <div className="max-w-xl">
            <AnimatedSection>
              <p className="text-eyebrow text-white/25 mb-5">Craftsmanship</p>
              <h2 className="text-headline text-white mb-6">
                Built by hand.<br />
                <span className="text-white/40">Built to last.</span>
              </h2>
              <p className="text-[#aaa] leading-relaxed mb-10">
                Every Novo product is welded, fitted, and finished in our Thrissur workshop. No outsourcing.
                No shortcuts. Real craftsmen, real materials, real quality.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-white text-[13px] font-semibold tracking-wide border border-white/20 px-6 py-3.5 hover:bg-white/10 transition-colors"
              >
                Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS ── */}
      {related.length > 0 && (
        <section className="section-xl bg-[#fafafa]">
          <div className="container-novo">
            <AnimatedSection className="mb-12">
              <p className="text-eyebrow text-[#888] mb-3">You May Also Like</p>
              <h2 className="text-title text-[#0a0a0a]">Related Products</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e8e8]">
              {related.slice(0, 3).map((p, i) => (
                <AnimatedSection key={p.id} delay={i * 0.08}>
                  <Link href={`/products/${p.slug}`} className="group block bg-white">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5]">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#999] mb-2">
                        {p.category.replace(/-/g, " ")}
                      </p>
                      <h3 className="text-lg font-bold text-[#0a0a0a] tracking-tight mb-1">{p.name}</h3>
                      <p className="text-sm text-[#666] mb-4 line-clamp-2">{p.tagline}</p>
                      <div className="flex items-center justify-between">
                        {p.price && <span className="text-sm font-bold text-[#0a0a0a]">{p.price}</span>}
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#888] flex items-center gap-1 group-hover:text-[#0a0a0a] transition-colors">
                          View <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── QUOTE CTA ── */}
      <section className="section-xl bg-[#0a0a0a]">
        <div className="container-novo text-center">
          <AnimatedSection>
            <p className="text-eyebrow text-white/25 mb-5">Ready to Order?</p>
            <h2 className="text-headline text-white mb-6 max-w-2xl mx-auto">
              Get a personalised quote for the {product.name}.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/quote?product=${product.slug}`}
                className="px-10 py-4 bg-white text-[#0a0a0a] text-[13px] font-bold tracking-wide hover:bg-white/90 transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/products"
                className="px-10 py-4 border border-white/20 text-white text-[13px] font-bold tracking-wide hover:bg-white/10 transition-colors"
              >
                View All Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
