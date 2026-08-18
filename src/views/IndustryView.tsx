import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { CaseCard } from "@/components/CaseCard";
import type { Locale } from "@/i18n/dictionary";
import { getDictionary } from "@/i18n/dictionary";
import { industries as ruIndustries, getIndustry as getRuIndustry } from "@/data/industries";
import { industries as enIndustries, getIndustry as getEnIndustry } from "@/data/en/industries";

export function IndustryView({ locale, slug }: { locale: Locale; slug: string }) {
  const t = getDictionary(locale);
  const industries = locale === "ru" ? ruIndustries : enIndustries;
  const industry = locale === "ru" ? getRuIndustry(slug) : getEnIndustry(slug);
  const prefix = locale === "ru" ? "" : "/en";

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
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">
            {t.industryPage.label}
          </p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{industry.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">{industry.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`${prefix}/contacts`}
              className="inline-block rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600"
            >
              {t.industryPage.discussTask}
            </Link>
            <Link
              href={`${prefix}/products`}
              className="inline-block rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              {t.common.allProducts}
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-brand-900">{t.industryPage.casesHeading}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {industry.cases.map((c) => (
              <CaseCard key={c.title} item={c} locale={locale} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-16">
        <Container className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-brand-900">{t.industryPage.otherIndustries}</h2>
            <p className="mt-1 text-sm text-brand-700/80">{t.industryPage.otherIndustriesSub}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {industries
              .filter((i) => i.slug !== industry.slug)
              .map((i) => (
                <Link
                  key={i.slug}
                  href={`${prefix}/industries/${i.slug}`}
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
