"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [40, 0, 0, -40]);

  return (
    <section ref={ref} className="py-[120px] lg:py-[200px] bg-[#0a0a0a]">
      <div className="container-novo">
        <motion.div style={{ opacity, y }} className="max-w-5xl">
          <p className="text-eyebrow text-white/25 mb-10">Our Conviction</p>
          <h2
            className="text-white font-bold leading-[0.95] tracking-[-0.04em]"
            style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
          >
            India deserves world-class
            outdoor cooking equipment.
            <span className="text-white/25"> We build it here.</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/8">
            {[
              { label: "Steel thickness", value: "4–8mm" },
              { label: "Construction", value: "Hand welded" },
              { label: "Origin", value: "Thrissur, Kerala" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl font-bold text-white tracking-tight">{item.value}</div>
                <div className="text-[11px] text-white/30 uppercase tracking-wider mt-2">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
