"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const pillars = [
  {
    n: "01",
    title: "Built to Last",
    body: "We use 4–8mm steel plate — the same gauge used in industrial fabrication. Our smokers don't have a 'product lifecycle'. They have a generation.",
  },
  {
    n: "02",
    title: "Hand Welded",
    body: "Every seam is welded by hand by skilled craftsmen in our Thrissur workshop. No robotic welding. No mass production shortcuts.",
  },
  {
    n: "03",
    title: "Temperature Precision",
    body: "Stable temperatures mean consistent results. Our firebox geometry and damper systems are engineered to hold temperature without constant attention.",
  },
  {
    n: "04",
    title: "Made in India",
    body: "Proudly designed and fabricated in Kerala. We source materials locally, employ local craftsmen, and export Indian quality to the world.",
  },
];

export function WhyNovo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="section-xl bg-[#fafafa] overflow-hidden">
      <div className="container-novo">
        {/* Asymmetric: 40 text / 60 image */}
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-16 lg:gap-24 items-start">
          {/* Left — pillars */}
          <div>
            <AnimatedSection>
              <p className="text-eyebrow text-[#888] mb-4">Why Novo Industries</p>
              <h2 className="text-headline text-[#0a0a0a] mb-12">
                Engineering
                <br />
                Meets
                <br />
                Craft
              </h2>
            </AnimatedSection>

            <div className="space-y-10">
              {pillars.map((p, i) => (
                <AnimatedSection key={p.n} delay={i * 0.08}>
                  <div className="flex gap-6">
                    <div className="text-[48px] font-black text-[#0a0a0a]/8 leading-none shrink-0 w-14">
                      {p.n}
                    </div>
                    <div className="border-t border-[#e8e8e8] pt-4 flex-1">
                      <h3 className="text-[18px] font-semibold text-[#0a0a0a] tracking-tight mb-2">{p.title}</h3>
                      <p className="text-sm text-[#666] leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right — parallax image stack */}
          <div ref={ref} className="relative">
            <AnimatedSection direction="left">
              <div className="relative aspect-[3/4] overflow-hidden">
                <motion.div style={{ y: imgY }} className="absolute inset-[-10%]">
                  <Image
                    src="/images/products/backyard-smoker-4.jpg"
                    alt="Novo Industries craftsmanship"
                    fill
                    className="object-cover"
                    sizes="60vw"
                    quality={85}
                  />
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Floating stat card */}
            <AnimatedSection delay={0.3} className="absolute -bottom-8 -left-8 lg:-left-16">
              <div className="bg-[#0a0a0a] text-white p-6 lg:p-8 w-48 lg:w-56">
                <div className="text-[42px] font-black leading-none tracking-tight">40+</div>
                <div className="text-[11px] text-white/40 uppercase tracking-wider mt-2 leading-snug">
                  Years combined manufacturing experience
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
