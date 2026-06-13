"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products, categories, type ProductCategory } from "@/data/products";
import { AnimatedSection } from "@/components/AnimatedSection";

export function ProductsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [active, setActive] = useState<ProductCategory | "all">("all");

  useEffect(() => {
    const cat = searchParams.get("category") as ProductCategory | null;
    setActive(cat ?? "all");
  }, [searchParams]);

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  function handleFilter(cat: ProductCategory | "all") {
    setActive(cat);
    const url = cat === "all" ? "/products" : "/products?category=" + cat;
    router.push(url, { scroll: false });
  }

  const allFilters = [{ id: "all" as const, label: "All Products" }, ...categories.map(c => ({ id: c.id, label: c.label }))];

  return (
    <div className="pt-[72px]">
      {/* Page Hero */}
      <section className="bg-[#0a0a0a] py-24 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/products/apex-smoker-2.png" alt="" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="container-novo relative z-10">
          <AnimatedSection>
            <p className="text-eyebrow text-white/30 mb-5">Our Products</p>
            <h1 className="text-display text-white max-w-3xl">
              Every Product,<br />
              <span className="text-white/40">Built by Hand.</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[60px] z-30 bg-white/95 backdrop-blur-sm border-b border-[#e8e8e8]">
        <div className="container-novo">
          <div className="flex items-center gap-0 overflow-x-auto py-0">
            {allFilters.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilter(cat.id)}
                className={`relative shrink-0 px-5 py-4 text-[12px] font-semibold tracking-wide uppercase whitespace-nowrap transition-colors ${
                  active === cat.id ? "text-[#0a0a0a]" : "text-[#999] hover:text-[#333]"
                }`}
              >
                {cat.label}
                {active === cat.id && (
                  <motion.div
                    layoutId="filter-underline"
                    className="absolute bottom-0 inset-x-5 h-0.5 bg-[#0a0a0a]"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.35 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="section-xl bg-[#fafafa]">
        <div className="container-novo">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e8e8]"
            >
              {filtered.map((product, i) => {
                const isHero = i === 0 && active === "all";
                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className={isHero ? "md:col-span-2 lg:col-span-2" : ""}
                  >
                    <Link href={"/products/" + product.slug} className="group relative flex flex-col bg-white overflow-hidden h-full">
                      <div className={`relative overflow-hidden ${isHero ? "aspect-[16/9]" : "aspect-[4/3]"} bg-[#f5f5f5]`}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes={isHero ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                        />
                        {product.featured && (
                          <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#0a0a0a] text-white text-[10px] uppercase tracking-[0.15em] font-semibold">
                            Featured
                          </div>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col p-6 lg:p-8">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <p className="text-[10px] uppercase tracking-[0.15em] text-[#888] font-medium mb-1.5">
                              {categories.find(c => c.id === product.category)?.label ?? product.category}
                            </p>
                            <h2 className={`font-bold text-[#0a0a0a] tracking-tight leading-none ${isHero ? "text-3xl lg:text-4xl" : "text-xl"}`}>
                              {product.name}
                            </h2>
                          </div>
                          {product.price && (
                            <div className="shrink-0 text-right">
                              <div className={`font-bold text-[#0a0a0a] ${isHero ? "text-xl" : "text-base"}`}>{product.price}</div>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-[#666] leading-relaxed mb-6 flex-1">{product.description}</p>
                        {product.specs.length > 0 && (
                          <div className="flex gap-6 mb-6 pb-6 border-b border-[#eee]">
                            {product.specs.slice(0, isHero ? 3 : 2).map(s => (
                              <div key={s.label}>
                                <div className="text-sm font-semibold text-[#0a0a0a]">{s.value}</div>
                                <div className="text-[10px] text-[#999] uppercase tracking-wide mt-0.5">{s.label}</div>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-2 text-[13px] font-semibold text-[#0a0a0a] group-hover:gap-3 transition-all">
                            View Product <ArrowRight className="w-4 h-4" />
                          </span>
                          <Link
                            href={"/quote?product=" + product.slug}
                            onClick={(e) => e.stopPropagation()}
                            className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#888] border border-[#ddd] px-3 py-1.5 hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-colors"
                          >
                            Quote
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
          {filtered.length === 0 && (
            <div className="text-center py-24 text-[#888]">No products in this category yet.</div>
          )}
        </div>
      </section>

      {/* Custom build CTA */}
      <section className="bg-[#0a0a0a] py-20 lg:py-24">
        <div className="container-novo">
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-[65fr_35fr] gap-12 items-center">
            <div>
              <p className="text-eyebrow text-white/25 mb-4">Do not see what you need?</p>
              <h2 className="text-headline text-white mb-4">We Build Custom.</h2>
              <p className="text-white/40 max-w-lg text-lg font-light leading-relaxed">
                From single-unit specials to full outdoor kitchen systems — if you can imagine it, we can engineer and fabricate it.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Link href="/quote" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a0a0a] text-[13px] font-bold tracking-wide hover:bg-white/90 transition-colors">
                Start a Custom Order <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="https://wa.me/919322220026" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-[13px] font-semibold hover:border-white/50 hover:bg-white/5 transition-colors">
                WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
