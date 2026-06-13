import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

const steps = [
  { number: "01", title: "Design & Engineering", description: "Every product starts with a precise design that considers airflow dynamics, heat retention, and long-term durability." },
  { number: "02", title: "Material Selection", description: "We use high-grade steel from trusted Indian suppliers. Thickness is specified per application — never compromised for cost." },
  { number: "03", title: "Precision Fabrication", description: "Our skilled welders craft each unit by hand in our Thrissur workshop. Critical seams are multi-pass welded for strength and smoke seal." },
  { number: "04", title: "Quality Inspection", description: "Every unit is tested for temperature performance, seal integrity, and structural strength before it leaves our facility." },
  { number: "05", title: "Finishing", description: "High-temperature powder coat or paint is applied for weather protection and lasting appearance. Handles, hinges, and hardware are fitted with precision." },
  { number: "06", title: "Delivery & Support", description: "We personally oversee delivery and commissioning. Post-sale support and maintenance services are part of the Novo promise." },
];

export function ManufacturingExcellence() {
  return (
    <section className="py-24 lg:py-32 bg-[#111] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <AnimatedSection>
              <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-medium mb-3">
                How We Build
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Manufacturing
                <br />
                Excellence
              </h2>
              <p className="text-lg text-white/50 leading-relaxed mb-12">
                From raw steel to finished smoker, every step is executed in-house by our team in
                Thrissur, Kerala. We control the entire process so we can stand behind every weld.
              </p>
            </AnimatedSection>

            {/* Workshop image */}
            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[4/3] bg-[#222] overflow-hidden">
                <Image
                  src="/manufacturing/workshop.jpg"
                  alt="Novo Industries Workshop"
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Steps */}
          <div className="space-y-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.07} direction="left">
                <div className="flex gap-6 group">
                  <div className="text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors w-12 shrink-0 leading-none">
                    {step.number}
                  </div>
                  <div className="border-t border-white/10 pt-3 flex-1">
                    <h3 className="text-base font-semibold text-white mb-1.5">{step.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
