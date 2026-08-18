import type { Metadata } from "next";
import { IndustryView } from "@/views/IndustryView";
import { industries } from "@/data/en/industries";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: `${industry.title} — measurement solutions`,
    description: industry.cardText,
    alternates: { languages: { ru: `/industries/${slug}`, en: `/en/industries/${slug}` } },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <IndustryView locale="en" slug={slug} />;
}
