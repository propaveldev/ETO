import type { MetadataRoute } from "next";
import { industries } from "@/data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://eto.expert";
  const ruPaths = ["/", "/products", "/products/3dpro2300", "/contacts", ...industries.map((i) => `/industries/${i.slug}`)];
  const enPaths = ruPaths.map((p) => (p === "/" ? "/en" : `/en${p}`));

  return [...ruPaths, ...enPaths].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
