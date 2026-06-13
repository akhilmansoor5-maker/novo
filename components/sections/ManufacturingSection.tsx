"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Design\n& Engineering",
    description:
      "Every smoker begins at the drawing board. Airflow dynamics, steel gauge, firebox proportions, and heat retention are calculated before a single cut is made.",
    image: "/images/manufacturing/hero-smoker.jpg",
    imageAlt: "Novo Industries design process",
  },
  {
    number: "02",
    title: "Material\nSelection",
    description:
      "We use 4–8mm steel plate from trusted Indian suppliers. Thickness is specified per application — never compromised. Handles, hinges, and hardware are sourced for longevity.",
    image: "/images/products/general-8.jpg",
    imageAlt: "Steel fabrication at Novo Industries",
  },
  {
    number: "03",
    title: "Precision\nFabrication",
    description:
      "Skilled welders in our Thrissur workshop hand-craft each unit. Critical seams receive multi-pass welds. Every join is visually inspected before moving to the next stage.",
    image: "/images/products/general-4.jpg",
    imageAlt: "Hand welding at Novo Industries workshop",
  },
  {
    number: "04",
    title: "Finishing\n& Delivery",
    description:
      "High-temp powder coat is applied for weather protection. Each unit is temperature-tested before dispatch. We personally oversee delivery and commissioning.",
    image: "/images/products/apex-smoker-2.png",
    imageAlt: "Novo Industries finished smoker",
  },
];

function StepSection({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);
  const odd = index % 2 === 1;

  return (
    <div ref={ref} className="relative min-h-screen flex items-center">
      {/* Full-bleed image */}
      <div className={`absolute inset-0 ${odd ? "lg:left-[40%]" : "lg:right-[40%]"} overflow-hidden`}>
        <motion.div style={{ scale: imageScale }} className="w-full h-full">
          <Image
            src={step.image}
            alt={step.imageAlt}
            fill
            className="object-cover"
            sizes="60vw"
            quality={85}
          />
        </motion.div>
        <div
          className={`absolute inset-0 ${
            odd
              ? "bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"
              : "bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container-novo">
          <div className={`flex ${odd ? "justify-start" : "justify-end"}`}>
            <AnimatedSection direction={odd ? "right" : "left"} className="max-w-lg">
              <div
                className="text-[120px] lg:text-[180px] font-black leading-none tracking-[-0.05em] text-white/6 select-none mb-2"
                aria-hidden
              >
                {step.number}
              </div>
              <h3
                className="font-bold text-white leading-[1.0] tracking-[-0.03em] whitespace-pre-line mb-6"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                {step.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-lg font-light">{step.description}</p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ManufacturingSection() {
  return (
    <section className="bg-[#0a0a0a] overflow-hidden">
      {/* Header */}
      <div className="container-novo pt-24 pb-16">
        <AnimatedSection>
          <p className="text-eyebrow text-white/25 mb-4">How We Build</p>
          <h2 className="text-display text-white max-w-2xl">
            Manufacturing
            Excellence
          </h2>
        </AnimatedSection>
      </div>

      {/* Steps */}
      {steps.map((step, i) => (
        <StepSection key={step.number} step={step} index={i} />
      ))}

      <div className="h-24" />
    </section>
  );
}
