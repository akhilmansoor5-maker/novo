"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden bg-[#0a0a0a]">
      {/* Parallax background image only */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
        <Image
          src="/images/manufacturing/hero-bg.jpg"
          alt="Novo Industries Apex Smoker"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </motion.div>

      {/* Content — constrained below navbar, content pushed to bottom */}
      <motion.div style={{ opacity }} className="absolute top-[72px] bottom-0 left-0 right-0 z-10 flex flex-col justify-end pb-[8vh]">
        <div className="container-novo">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-6 h-px bg-white/40" />
            <span className="text-eyebrow text-white/50">
              India&apos;s Premium Smoker &amp; Grill Manufacturer
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-hero text-white max-w-4xl"
            >
              Built for Fire.
              <br />
              <span className="text-white/60">Engineered</span>
              <br />
              to Last.
            </motion.h1>
          </div>

          {/* Sub + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10"
          >
            <p className="text-[17px] text-white/50 max-w-sm leading-relaxed font-light">
              Premium handcrafted smokers and grills.
              <br />
              Made in India. Built for generations.
            </p>

            <div className="flex items-center gap-4 sm:ml-auto">
              <Link
                href="/products"
                className="group flex items-center gap-2.5 px-7 py-3.5 bg-white text-[#0a0a0a] text-[13px] font-bold tracking-wide hover:bg-white/90 transition-colors"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/quote"
                className="px-7 py-3.5 border border-white/25 text-white text-[13px] font-semibold tracking-wide hover:bg-white/8 hover:border-white/40 transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-8"
          >
            {[
              { value: "2017", label: "Est." },
              { value: "40+", label: "Yrs experience" },
              { value: "100%", label: "Handcrafted" },
              { value: "India", label: "Made in" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-white tracking-tight">{s.value}</div>
                <div className="text-[11px] text-white/35 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-8 lg:right-12 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-px h-12 bg-white/30 origin-top"
        />
      </motion.div>
    </section>
  );
}
