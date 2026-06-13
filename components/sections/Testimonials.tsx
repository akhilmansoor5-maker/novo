"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const testimonials = [
  {
    quote: "The temperature control on this smoker is unlike anything I've used before. The cooking chamber stays rock-steady for hours. The hand-made construction is something you feel every time you use it.",
    author: "Rajan Parekh",
    role: "Home Pitmaster",
    location: "Maharashtra",
  },
  {
    quote: "We've been using the commercial smoker at our restaurant for over a year. Daily use, zero issues. Our customers can taste the difference. It was the best kitchen investment we've made.",
    author: "Chef Anand Krishnan",
    role: "Restaurant Owner",
    location: "Bengaluru, Karnataka",
  },
  {
    quote: "I've bought smokers from the US and Europe before. Novo Industries builds at that level — or better. The fact that it's made in India with this level of craft is something I'm genuinely proud to own.",
    author: "Vivek Menon",
    role: "BBQ Enthusiast",
    location: "Kochi, Kerala",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-[120px] bg-[#fafafa]">
      <div className="container-novo">
        {/* 70/30 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[65fr_35fr] gap-16 items-end">
          {/* Left — quote */}
          <div>
            <AnimatedSection>
              <p className="text-eyebrow text-[#888] mb-12">What Clients Say</p>
            </AnimatedSection>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote
                  className="font-semibold text-[#0a0a0a] leading-[1.2] tracking-tight mb-10"
                  style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
                >
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-[#0a0a0a]/20" />
                  <div>
                    <div className="font-semibold text-[#0a0a0a] text-[15px]">{testimonials[current].author}</div>
                    <div className="text-[#888] text-sm">
                      {testimonials[current].role} — {testimonials[current].location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation dots */}
            <div className="flex items-center gap-3 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 ${
                    i === current ? "w-8 h-1 bg-[#0a0a0a]" : "w-2 h-1 bg-[#ccc]"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right — CTA card */}
          <AnimatedSection direction="left">
            <div className="bg-[#0a0a0a] p-8 lg:p-10">
              <p className="text-eyebrow text-white/25 mb-6">Ready to order?</p>
              <h3 className="text-[28px] font-bold text-white tracking-tight leading-tight mb-4">
                Let&apos;s build something exceptional.
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                Tell us what you need. We&apos;ll respond within 1–2 business days with a detailed quote.
              </p>
              <a
                href="/quote"
                className="group flex items-center gap-2 text-white text-[13px] font-bold tracking-wide hover:gap-3 transition-all"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
