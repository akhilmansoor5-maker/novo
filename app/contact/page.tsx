"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["+91 93222 20026", "+91 70213 52549"],
    href: "tel:+919322220026",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@novoindustries.in"],
    href: "mailto:info@novoindustries.in",
  },
  {
    icon: MapPin,
    label: "Location",
    lines: ["Thrissur, Kerala", "India"],
    href: null,
  },
  {
    icon: Clock,
    label: "Business Hours",
    lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"],
    href: null,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full border border-[#e0e0e0] px-4 py-3.5 text-sm placeholder:text-[#bbb] focus:outline-none focus:border-[#0a0a0a] transition-colors bg-white";
  const labelClass = "block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#999] mb-2";

  return (
    <div className="pt-[72px]">
      {/* Hero — split 50/50, left dark right light */}
      <section className="min-h-[45vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#0a0a0a] flex items-end py-20 lg:py-32 px-8 lg:px-16">
          <AnimatedSection>
            <p className="text-eyebrow text-white/30 mb-5">Get in Touch</p>
            <h1 className="text-display text-white mb-4">Contact<br />Us.</h1>
            <p className="text-white/40 max-w-sm text-lg font-light leading-relaxed">
              Questions, quotes, or custom builds — we are here to help.
            </p>
          </AnimatedSection>
        </div>
        <div className="bg-[#fafafa] flex items-end py-20 lg:py-32 px-8 lg:px-16">
          <AnimatedSection direction="left">
            <div className="space-y-6">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-[#0a0a0a] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#999] mb-1">
                        {item.label}
                      </div>
                      {item.lines.map((line) => (
                        <div key={line}>
                          {item.href ? (
                            <a href={item.href} className="text-[#0a0a0a] font-medium text-sm hover:text-[#555] transition-colors">
                              {line}
                            </a>
                          ) : (
                            <span className="text-[#444] text-sm font-medium">{line}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              href="https://wa.me/919322220026"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#25D366] text-white text-sm font-bold hover:bg-[#1ebe5d] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact form — 40/60 */}
      <section className="section-xl bg-white">
        <div className="container-novo">
          <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-16 lg:gap-24">
            <AnimatedSection>
              <p className="text-eyebrow text-[#888] mb-4">Send a Message</p>
              <h2 className="text-headline text-[#0a0a0a] mb-6">
                Let&apos;s Talk<br />Business.
              </h2>
              <p className="text-[#666] leading-relaxed">
                Fill in the form and we will respond within 1–2 business days. For urgent matters,
                WhatsApp is fastest.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.1}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-20 bg-[#f8f8f8] text-center"
                >
                  <div className="w-14 h-14 bg-[#0a0a0a] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a0a0a] mb-2">Message Received</h3>
                  <p className="text-[#666] text-sm max-w-xs">
                    We&apos;ll get back to you within 1–2 business days.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Name *</label>
                      <input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 00000 00000" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Message *</label>
                    <textarea required value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="How can we help you?" rows={6} className={`${inputClass} resize-none`} />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#0a0a0a] text-white text-[13px] font-bold tracking-wide hover:bg-[#222] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                    Send Message
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map embed placeholder */}
      <section className="h-[400px] bg-[#f0f0f0] relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <MapPin className="w-8 h-8 text-[#888]" />
          <span className="text-sm font-medium text-[#555]">Thrissur, Kerala, India</span>
          <a
            href="https://maps.google.com/?q=Thrissur,Kerala,India"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#0a0a0a] underline"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </div>
  );
}
