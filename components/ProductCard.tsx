import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col bg-white border border-[#ebebeb] hover:border-[#d0d0d0] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.price && (
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold tracking-wide text-[#1a1a1a]">
            {product.price}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <div className="text-[10px] uppercase tracking-[0.15em] text-[#888] font-medium mb-2">
          {product.category.replace(/-/g, " ")}
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-[#1a1a1a] mb-2 leading-snug">
          {product.name}
        </h3>
        <p className="text-sm text-[#666] leading-relaxed flex-1 mb-6">
          {product.description}
        </p>

        <div className="flex gap-3">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 text-center py-2.5 text-sm font-semibold tracking-wide border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-200"
          >
            Learn More
          </Link>
          <Link
            href={`/quote?product=${product.slug}`}
            className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold tracking-wide bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors duration-200"
          >
            Quote
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
