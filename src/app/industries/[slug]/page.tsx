import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { CaseCard } from "@/components/CaseCard";
import { getIndustry, industries } from "@/data/industries";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `${industry.title} — решения для контроля материала`,
    description: industry.cardText,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-brand-950 py-16 text-white">
        <div className="absolute inset-0">
          <Image
            src={industry.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/95 to-brand-950/70" />
        </div>
        <Container className="relative">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">Отрасль</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{industry.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">{industry.intro}</p>
          <Link
            href="/contacts"
            className="mt-8 inline-block rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600"
          >
            Обсудить задачу
          </Link>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-brand-900">Типовые задачи и решения</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {industry.cases.map((c) => (
              <CaseCard key={c.title} item={c} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-16">
        <Container className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-brand-900">Другие отрасли</h2>
            <p className="mt-1 text-sm text-brand-700/80">
              Изучите решения для смежных производств
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {industries
              .filter((i) => i.slug !== industry.slug)
              .map((i) => (
                <Link
                  key={i.slug}
                  href={`/industries/${i.slug}`}
                  className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-brand-900 hover:border-accent-400 hover:text-accent-600"
                >
                  {i.shortTitle}
                </Link>
              ))}
          </div>
        </Container>
      </section>
    </>
  );
}
