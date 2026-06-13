import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { WhyNovo } from "@/components/sections/WhyNovo";
import { ManufacturingSection } from "@/components/sections/ManufacturingSection";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { EditorialGallery } from "@/components/sections/EditorialGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Novo Industries — India's Premium Smoker & Grill Manufacturer",
  description:
    "Novo Industries crafts premium handmade offset smokers, BBQ grills, and custom outdoor cooking systems in Thrissur, Kerala. Built for fire. Engineered for performance.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <ManifestoSection />
      <WhyNovo />
      <ManufacturingSection />
      <ProductCategories />
      <EditorialGallery />
      <Testimonials />
      <CTASection
        title="Ready to Build?"
        subtitle="Whether you need a backyard smoker or a commercial system — we engineer it to your specifications."
        primaryLabel="Request a Quote"
        primaryHref="/quote"
        secondaryLabel="View All Products"
        secondaryHref="/products"
        image="/images/products/classic-72-2.jpg"
      />
    </>
  );
}
