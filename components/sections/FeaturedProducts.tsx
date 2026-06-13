import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { AnimatedSection } from "@/components/AnimatedSection";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <AnimatedSection>
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#888] font-medium mb-3">
              Our Products
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a1a]">
              Crafted with Purpose
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="/products"
              className="flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] hover:gap-3 transition-all"
            >
              View all products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.08}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
