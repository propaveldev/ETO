import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { IndustryCard } from "@/components/IndustryCard";
import { RadarBeam } from "@/components/RadarBeam";
import { CertificationSection } from "@/components/CertificationSection";
import type { Locale } from "@/i18n/dictionary";
import { getDictionary } from "@/i18n/dictionary";

import { industries as ruIndustries } from "@/data/industries";
import { industries as enIndustries } from "@/data/en/industries";
import { product3DPro2300 as ruProduct } from "@/data/product";
import { product3DPro2300 as enProduct } from "@/data/en/product";
import { company as ruCompany } from "@/data/company";
import { company as enCompany } from "@/data/en/company";

const statsByLocale = {
  ru: [
    { value: "180+", label: "патентов и объектов ИС у производителя" },
    { value: "8000+", label: "предприятий-заказчиков по всему миру" },
    { value: "16 200", label: "точек сканирования у 3DPro2300 за один цикл" },
    { value: "±2 мм", label: "погрешность измерения уровня" },
  ],
  en: [
    { value: "180+", label: "manufacturer patents and IP assets" },
    { value: "8,000+", label: "customers worldwide" },
    { value: "16,200", label: "scan points per 3DPro2300 cycle" },
    { value: "±2 mm", label: "level measurement accuracy" },
  ],
};

export function HomeView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const industries = locale === "ru" ? ruIndustries : enIndustries;
  const product = locale === "ru" ? ruProduct : enProduct;
  const company = locale === "ru" ? ruCompany : enCompany;
  const prefix = locale === "ru" ? "" : "/en";
  const stats = statsByLocale[locale];

  return (
    <>
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 60% at 80% 20%, rgba(232,121,42,0.35) 0%, transparent 60%), radial-gradient(50% 50% at 10% 90%, rgba(138,99,201,0.35) 0%, transparent 60%)",
          }}
        />
        <div className="pointer-events-none absolute right-8 top-8 hidden opacity-70 lg:block">
          <RadarBeam />
        </div>
        <Container className="relative py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            {t.home.heroKicker(company.name, company.vendor)}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            {t.home.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-100">{t.home.heroText}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`${prefix}/contacts`}
              className="rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/20 hover:bg-accent-600"
            >
              {t.home.heroCtaPrimary}
            </Link>
            <Link
              href={`${prefix}/products/3dpro2300`}
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              {t.home.heroCtaSecondary}
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-brand-100 bg-brand-50/60 py-10">
        <Container className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-3xl font-bold text-brand-900">{stat.value}</p>
              <p className="mt-1 text-xs text-brand-700/80 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
              {t.home.industriesKicker}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-brand-900">{t.home.industriesHeading}</h2>
            <p className="mt-4 text-brand-700/90">{t.home.industriesText}</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} locale={locale} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-900 py-20 text-white">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">
              {t.home.flagshipKicker}
            </p>
            <h2 className="mt-2 text-3xl font-bold">{product.name}</h2>
            <p className="mt-2 text-brand-200">{product.tagline}</p>
            <p className="mt-6 text-brand-100">{product.advantages[0].text}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`${prefix}/products/3dpro2300`}
                className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600"
              >
                {t.home.flagshipCta}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                  <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </Link>
              <Link
                href={`${prefix}/products`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                {t.home.catalogCta}
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {product.applicationAreas.map((area) => (
              <div
                key={area.label}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="relative h-28 w-full">
                  <Image
                    src={area.image}
                    alt={area.label}
                    fill
                    sizes="(min-width: 1024px) 260px, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="p-3 text-center text-sm font-medium">{area.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CertificationSection locale={locale} />

      <section className="pb-20">
        <Container className="flex flex-col items-center gap-6 rounded-3xl bg-brand-50 p-10 text-center sm:p-14">
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">{t.home.ctaHeading}</h2>
          <p className="max-w-xl text-brand-700/90">{t.home.ctaText}</p>
          <Link
            href={`${prefix}/contacts`}
            className="rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600"
          >
            {t.home.ctaButton}
          </Link>
        </Container>
      </section>
    </>
  );
}
