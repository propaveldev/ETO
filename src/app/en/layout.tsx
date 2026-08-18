import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { company } from "@/data/en/company";

export const metadata: Metadata = {
  title: {
    default: `${company.name} — industrial radar scanners and level meters`,
    template: `%s — ${company.name}`,
  },
  description:
    "Radar 3D scanners and level meters for mining, food and chemical industries. Official RETTAR partner in Russia.",
  alternates: {
    languages: { ru: "/", en: "/en" },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: company.name,
          url: `https://${company.domain}/en`,
          email: company.email,
          telephone: company.phone,
          address: { "@type": "PostalAddress", streetAddress: company.address },
        }}
      />
      <Header locale="en" />
      <main className="flex-1">{children}</main>
      <Footer locale="en" />
    </>
  );
}
