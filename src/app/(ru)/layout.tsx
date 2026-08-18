import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: {
    default: `${company.name} — промышленные радарные сканеры и уровнемеры`,
    template: `%s — ${company.name}`,
  },
  description:
    "Радарные 3D-сканеры и уровнемеры для горнодобывающей, пищевой и химической промышленности. Официальный партнёр RETTAR в России.",
  alternates: {
    languages: { ru: "/", en: "/en" },
  },
};

export default function RuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: company.name,
          url: `https://${company.domain}`,
          email: company.email,
          telephone: company.phone,
          address: { "@type": "PostalAddress", streetAddress: company.address },
        }}
      />
      <Header locale="ru" />
      <main className="flex-1">{children}</main>
      <Footer locale="ru" />
    </>
  );
}
