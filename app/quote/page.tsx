import type { Metadata } from "next";
import { Suspense } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote — Novo Industries",
  description:
    "Get a personalised quote for Novo Industries smokers, grills, and outdoor cooking equipment.",
};

function QuoteFormWrapper() {
  return <QuoteForm multiStep />;
}

const steps = [
  { n: "01", title: "We review your request", body: "Our team reviews your requirements and prepares a detailed, itemized quote within 1–2 business days." },
  { n: "02", title: "We get in touch", body: "We call or email you to discuss your needs, clarify specifications, and answer any questions." },
  { n: "03", title: "Custom proposal", body: "For custom builds, we prepare engineering drawings and a project timeline before any commitment." },
  { n: "04", title: "Build & deliver", body: "Once approved, fabrication begins. Lead times are confirmed at the quote stage." },
];

export default function QuotePage() {
  return (
    <div className="pt-[72px]">
      {/* Dark header */}
      <section className="bg-[#0a0a0a] py-24 lg:py-36">
        <div className="container-novo">
          <AnimatedSection>
            <p className="text-eyebrow text-white/30 mb-5">Get Started</p>
            <h1 className="text-display text-white max-w-2xl mb-4">
              Request<br />a Quote.
            </h1>
            <p className="text-lg text-white/40 max-w-lg font-light leading-relaxed">
              Tell us what you need. We will come back with a detailed quote and timeline.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + process — 60/40 */}
      <section className="section-xl bg-white">
        <div className="container-novo">
          <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-16 lg:gap-24 items-start">
            {/* Form */}
            <AnimatedSection>
              <Suspense>
                <QuoteFormWrapper />
              </Suspense>
            </AnimatedSection>

            {/* Process sidebar */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="lg:sticky lg:top-28">
                <p className="text-eyebrow text-[#888] mb-6">What Happens Next</p>
                <div className="space-y-0 border-t border-[#eee]">
                  {steps.map((s) => (
                    <div key={s.n} className="py-6 border-b border-[#eee]">
                      <div className="flex gap-5 items-start">
                        <div className="text-[36px] font-black text-[#0a0a0a]/8 leading-none shrink-0 w-12">
                          {s.n}
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0a0a0a] text-[15px] mb-1">{s.title}</h3>
                          <p className="text-sm text-[#666] leading-relaxed">{s.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-[#0a0a0a]">
                  <p className="text-sm text-white/60 leading-relaxed">
                    Prefer a faster response? Call us at{" "}
                    <a href="tel:+919322220026" className="text-white font-semibold">
                      +91 93222 20026
                    </a>{" "}
                    or chat on{" "}
                    <a href="https://wa.me/919322220026" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold">
                      WhatsApp
                    </a>.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
