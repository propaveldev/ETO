import type { Metadata } from "next";
import { ProductView } from "@/views/ProductView";

export const metadata: Metadata = {
  title: "Радарный 3D-сканер 3DPro2300 — характеристики и монтаж",
  description:
    "3DPro2300 — радарный 3D-сканер для бункеров и складов сыпучих материалов: 360° сканирование, 16 200 точек, погрешность ±2 мм.",
  alternates: { languages: { ru: "/products/3dpro2300", en: "/en/products/3dpro2300" } },
};

export default function ProductPage() {
  return <ProductView locale="ru" />;
}
