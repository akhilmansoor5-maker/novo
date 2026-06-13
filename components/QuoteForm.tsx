"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { products } from "@/data/products";

interface QuoteFormProps {
  defaultProduct?: string;
  multiStep?: boolean;
}

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  budget: string;
  message: string;
}

const budgetOptions = [
  "Under ₹1,00,000",
  "₹1,00,000 – ₹2,00,000",
  "₹2,00,000 – ₹5,00,000",
  "₹5,00,000+",
  "Flexible / Open to discuss",
];

export function QuoteForm({ defaultProduct = "", multiStep = false }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: defaultProduct,
    budget: "",
    message: "",
  });

  const update = (field: keyof FormData, value: string) =>
    setData((d) => ({ ...d, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-8 bg-[#f8f8f8]"
      >
        <CheckCircle2 className="w-12 h-12 text-[#1a1a1a] mx-auto mb-5" />
        <h3 className="text-2xl font-bold tracking-tight text-[#1a1a1a] mb-3">
          Request Received
        </h3>
        <p className="text-[#666] max-w-md mx-auto mb-6">
          Thank you, {data.name}. Our team will review your request and get back to you within 1–2
          business days.
        </p>
        <a
          href="https://wa.me/919322220026"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] border border-[#1a1a1a] px-6 py-3 hover:bg-[#1a1a1a] hover:text-white transition-colors"
        >
          Prefer WhatsApp? Chat now
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    );
  }

  const inputClass =
    "w-full border border-[#e0e0e0] px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#bbb] focus:outline-none focus:border-[#1a1a1a] transition-colors bg-white";
  const labelClass = "block text-xs font-semibold uppercase tracking-wide text-[#888] mb-2";

  if (multiStep) {
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step indicators */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                  step >= s ? "bg-[#1a1a1a] text-white" : "bg-[#eee] text-[#888]"
                }`}
              >
                {s}
              </div>
              {s < 3 && <div className={`w-8 h-px ${step > s ? "bg-[#1a1a1a]" : "bg-[#eee]"}`} />}
            </div>
          ))}
          <span className="text-xs text-[#888] ml-2">
            {step === 1 ? "Your Info" : step === 2 ? "Product" : "Details"}
          </span>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input required value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Company</label>
                  <input value={data.company} onChange={(e) => update("company", e.target.value)} placeholder="Company name (optional)" className={inputClass} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Email *</label>
                  <input required type="email" value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone *</label>
                  <input required type="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 00000 00000" className={inputClass} />
                </div>
              </div>
              <button
                type="button"
                onClick={() => step === 1 && data.name && data.email && data.phone && setStep(2)}
                className="w-full py-4 bg-[#1a1a1a] text-white text-sm font-semibold tracking-wide hover:bg-[#333] transition-colors"
              >
                Continue
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
              <div>
                <label className={labelClass}>Product of Interest</label>
                <select value={data.product} onChange={(e) => update("product", e.target.value)} className={inputClass}>
                  <option value="">Select a product...</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                  <option value="Custom Build">Custom Build</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Budget Range</label>
                <select value={data.budget} onChange={(e) => update("budget", e.target.value)} className={inputClass}>
                  <option value="">Select range...</option>
                  {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="flex-1 py-4 border border-[#ddd] text-[#1a1a1a] text-sm font-semibold hover:border-[#1a1a1a] transition-colors">
                  Back
                </button>
                <button type="button" onClick={() => setStep(3)} className="flex-1 py-4 bg-[#1a1a1a] text-white text-sm font-semibold hover:bg-[#333] transition-colors">
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  value={data.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell us about your requirements, installation location, timeline, or any questions..."
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(2)} className="flex-1 py-4 border border-[#ddd] text-[#1a1a1a] text-sm font-semibold hover:border-[#1a1a1a] transition-colors">
                  Back
                </button>
                <button type="submit" disabled={loading} className="flex-1 py-4 bg-[#1a1a1a] text-white text-sm font-semibold hover:bg-[#333] transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  Submit Request
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    );
  }

  // Simple single-step form
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input required value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Company</label>
          <input value={data.company} onChange={(e) => update("company", e.target.value)} placeholder="Optional" className={inputClass} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Email *</label>
          <input required type="email" value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Phone *</label>
          <input required type="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 00000 00000" className={inputClass} />
        </div>
      </div>
      <div>
        <label className={labelClass}>Product of Interest</label>
        <select value={data.product} onChange={(e) => update("product", e.target.value)} className={inputClass}>
          <option value="">Select a product...</option>
          {products.map((p) => (
            <option key={p.id} value={p.name}>{p.name}</option>
          ))}
          <option value="Custom Build">Custom Build</option>
        </select>
      </div>
      <div>
        <label className={labelClass}>Message</label>
        <textarea value={data.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us about your requirements..." rows={4} className={`${inputClass} resize-none`} />
      </div>
      <button type="submit" disabled={loading} className="w-full py-4 bg-[#1a1a1a] text-white text-sm font-semibold tracking-wide hover:bg-[#333] transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        Send Quote Request
      </button>
    </form>
  );
}
