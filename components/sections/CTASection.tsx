"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  image?: string;
}

export function CTASection({
  title = "Ready to Order?",
  subtitle = "Tell us what you need. We'll build it to last.",
  primaryLabel = "Request a Quote",
  primaryHref = "/quote",
  secondaryLabel = "View Products",
  secondaryHref = "/products",
  image = "/images/products/apex-smoker-3.png",
}: CTASectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0a0a]">
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
        <Image
          src={image}
          alt="Novo Industries"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
          quality={70}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </motion.div>

      <div className="relative z-10 container-novo py-24 lg:py-32">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-display text-white mb-6"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/40 font-light mb-12 max-w-lg"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href={primaryHref}
              className="group flex items-center gap-2 px-8 py-4 bg-white text-[#0a0a0a] text-[13px] font-bold tracking-wide hover:bg-white/90 transition-colors"
            >
              {primaryLabel}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={secondaryHref}
              className="px-8 py-4 border border-white/25 text-white text-[13px] font-semibold tracking-wide hover:bg-white/8 hover:border-white/40 transition-colors"
            >
              {secondaryLabel}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
