import { Suspense } from "react";
import { ProductsClient } from "./ProductsClient";

export const metadata = {
  title: "Products — Novo Industries",
  description:
    "Browse Novo Industries' full range of offset smokers, commercial smokers, BBQ grills, and outdoor cooking equipment. All handcrafted in India.",
};

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsClient />
    </Suspense>
  );
}
