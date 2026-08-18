import type { Metadata } from "next";
import { CatalogView } from "@/views/CatalogView";

export const metadata: Metadata = {
  title: "Каталог продукции — радарные уровнемеры, сканеры, расходомеры",
  description:
    "Полная линейка приборов RETTAR: радарные и лазерные уровнемеры, 3D/2D-сканеры, плотномеры, расходомеры, сигнализаторы уровня.",
  alternates: { languages: { ru: "/products", en: "/en/products" } },
};

export default function ProductsPage() {
  return <CatalogView locale="ru" />;
}
