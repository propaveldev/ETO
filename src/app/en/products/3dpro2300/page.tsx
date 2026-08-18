import type { Metadata } from "next";
import { ProductView } from "@/views/ProductView";

export const metadata: Metadata = {
  title: "3DPro2300 Radar 3D Scanner — specifications and mounting",
  description:
    "3DPro2300 is a radar 3D scanner for bins and bulk material warehouses: 360° scanning, 16,200 points, ±2 mm accuracy.",
  alternates: { languages: { ru: "/products/3dpro2300", en: "/en/products/3dpro2300" } },
};

export default function ProductPage() {
  return <ProductView locale="en" />;
}
