import type { Metadata } from "next";
import { CatalogView } from "@/views/CatalogView";

export const metadata: Metadata = {
  title: "Product catalog — radar level meters, scanners, flowmeters",
  description:
    "The full RETTAR instrument line: radar and laser level meters, 3D/2D scanners, density meters, flowmeters, point level switches.",
  alternates: { languages: { ru: "/products", en: "/en/products" } },
};

export default function ProductsPage() {
  return <CatalogView locale="en" />;
}
