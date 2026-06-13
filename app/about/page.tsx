import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About — Novo Industries",
  description:
    "Learn about Novo Industries — India's premium smoker and grill manufacturer. Founded in 2017 in Thrissur, Kerala by Davis Poruthur and Novin Davis.",
};

const milestones = [
  { year: "2017", title: "Founded", description: "Novo Industries established in Thrissur, Kerala by Davis Poruthur and Novin Davis." },
  { year: "2018", title: "First Range", description: "Launched the Classic Offset Smoker line — India's first premium hand-welded BBQ smokers." },
  { year: "2019", title: "Commercial Launch", description: "Expanded into commercial-grade equipment for restaurants, hotels, and catering businesses." },
  { year: "2020", title: "Custom Division", description: "Opened a dedicated custom fabrication service for bespoke outdoor cooking installations." },
  { year: "2022", title: "Apex Range", description: "Introduced the Apex Offset Smoker — our flagship flagship product at the top of the range." },
  { year: "2024", title: "Growing Strong", description: "Serving customers across India with a growing product range and expanding workshop capacity." },
];

const values = [
  { title: "Honesty", description: "We tell you what a product can and cannot do. No overselling. No surprises." },
  { title: "Quality First", description: "We refuse to compromise on materials, construction methods, or finish quality to hit a price point." },
  { title: "Craftsmanship", description: "Every unit is built by hand. That means a real person's skill and pride goes into every weld." },
  { title: "Innovation", description: "We invest continuously in research and development to improve every product we make." },
  { title: "Service", description: "We're not done when the unit ships. Post-sale support and maintenance are part of what we provide." },
  { title: "Made in India", description: "We're proud to be an Indian manufacturer using Indian materials and Indian talent." },
];

export default function AboutPage() {
  return (
    <div className="pt-[72px]">

      {/* ── HERO — fullscreen dark, cinematic ── */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <Image
            src="/images/manufacturing/hero-smoker.jpg"
            alt="Novo Industries workshop"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>
        <div className="relative z-10 container-novo pb-20 lg:pb-28">
          <AnimatedSection>
            <p className="text-eyebrow text-white/30 mb-6">Our Story</p>
            <h1 className="text-display text-white max-w-4xl mb-6">
              Built from the<br />
              <span className="text-white/40">ground up.</span>
            </h1>
            <p className="text-xl text-white/40 max-w-xl font-light leading-relaxed">
              Novo Industries was born from a simple conviction: India deserved
              world-class outdoor cooking equipment — built here, by us.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── STORY — 40/60 asymmetric ── */}
      <section className="section-xl bg-white">
        <div className="container-novo">
          <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-16 lg:gap-24">
            <AnimatedSection>
              <p className="text-eyebrow text-[#888] mb-4">The Founding</p>
              <h2 className="text-headline text-[#0a0a0a] mb-8">
                A manufacturing<br />legacy meets<br />modern craft
              </h2>
              <div className="border-l-2 border-[#0a0a0a] pl-6 mt-10">
                <p className="text-sm text-[#888] leading-relaxed italic">
                  &ldquo;We wanted to prove that India could make products at the
                  same standard as the best manufacturers in the world. We&apos;re
                  still proving it, one smoker at a time.&rdquo;
                </p>
                <p className="text-sm font-semibold text-[#0a0a0a] mt-3">— Davis Poruthur, Founder</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.1}>
              <div className="space-y-6 text-[#555] text-lg leading-relaxed">
                <p>
                  Novo Industries was founded in 2017 by Davis Poruthur and Novin Davis in Thrissur, Kerala.
                  Davis brings over 40 years of deep manufacturing experience — a career that taught him
                  exactly what separates good fabrication from great fabrication.
                </p>
                <p>
                  Novin contributes a sharp background in design, marketing, and sales — understanding not just
                  how to build exceptional products, but how to make them accessible and desirable to the market.
                </p>
                <p>
                  Together, they saw a gap: India had no premium manufacturer of outdoor cooking equipment.
                  The serious BBQ and smoking market was served entirely by expensive imports or cheap consumer-grade
                  products. There was nothing built here, with Indian hands, to a world-class standard.
                </p>
                <p className="font-medium text-[#0a0a0a]">
                  Novo Industries exists to fill that gap. Every product we build is a statement that
                  Indian manufacturing can compete at the highest level.
                </p>
              </div>

              {/* Stat row */}
              <div className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-[#eee]">
                {[
                  { value: "2017", label: "Founded" },
                  { value: "40+", label: "Yrs experience" },
                  { value: "Kerala", label: "Headquarters" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-black text-[#0a0a0a] tracking-tight">{s.value}</div>
                    <div className="text-[10px] text-[#999] uppercase tracking-[0.15em] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── VALUES — dark with large number labels ── */}
      <section className="section-xl bg-[#0a0a0a]">
        <div className="container-novo">
          <AnimatedSection className="mb-16">
            <p className="text-eyebrow text-white/25 mb-4">What We Stand For</p>
            <h2 className="text-headline text-white">Our Values</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.06}>
                <div className="bg-[#0a0a0a] p-8 lg:p-10 h-full">
                  <div className="text-[80px] font-black text-white/4 leading-none tracking-tight mb-4 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-3">{v.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE — horizontal scroll on mobile ── */}
      <section className="section-xl bg-[#fafafa]">
        <div className="container-novo">
          <AnimatedSection className="mb-16">
            <p className="text-eyebrow text-[#888] mb-4">History</p>
            <h2 className="text-headline text-[#0a0a0a]">Our Journey</h2>
          </AnimatedSection>

          {/* Large year display timeline */}
          <div className="space-y-0 border-t border-[#e8e8e8]">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.06}>
                <div className="grid grid-cols-[100px_1fr] lg:grid-cols-[180px_1fr] gap-6 lg:gap-16 py-8 border-b border-[#e8e8e8] items-baseline">
                  <div className="text-[48px] lg:text-[72px] font-black text-[#0a0a0a]/8 leading-none tracking-tight">
                    {m.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a0a0a] tracking-tight mb-2">{m.title}</h3>
                    <p className="text-sm text-[#666] leading-relaxed max-w-2xl">{m.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKSHOP IMAGES — editorial grid ── */}
      <section className="section-xl bg-[#0a0a0a]">
        <div className="container-novo">
          <AnimatedSection className="mb-12">
            <p className="text-eyebrow text-white/25 mb-4">Where We Work</p>
            <h2 className="text-headline text-white">The Workshop</h2>
          </AnimatedSection>

          {/* 3-column editorial with varied heights */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            {[
              { src: "/images/manufacturing/hero-smoker.jpg", tall: true },
              { src: "/images/products/general-4.jpg", tall: false },
              { src: "/images/manufacturing/manufacturing-4.jpg", tall: false },
              { src: "/images/manufacturing/manufacturing-3.jpg", tall: false },
              { src: "/images/products/general-8.jpg", tall: false },
              { src: "/images/manufacturing/manufacturing-2.jpg", tall: true },
            ].map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.06} className={img.tall ? "row-span-2" : ""}>
                <div className={`relative overflow-hidden bg-[#1a1a1a] group ${img.tall ? "h-full min-h-[280px]" : "aspect-[4/3]"}`}>
                  <Image
                    src={img.src}
                    alt={`Workshop image ${i + 1}`}
                    fill
                    className="object-cover opacity-75 group-hover:opacity-90 transition-opacity duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Work With Us"
        subtitle="Ready to own a piece of genuine Indian craftsmanship? Let's build something together."
        primaryLabel="Request a Quote"
        primaryHref="/quote"
        secondaryLabel="View Products"
        secondaryHref="/products"
        image="/images/products/classic-72-3.jpg"
      />
    </div>
  );
}
