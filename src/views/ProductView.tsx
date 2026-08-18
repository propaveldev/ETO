import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SpecTable } from "@/components/SpecTable";
import { RadarBeam } from "@/components/RadarBeam";
import { JsonLd } from "@/components/JsonLd";
import { productAdvantageIcons } from "@/components/icons/maps";
import type { Locale } from "@/i18n/dictionary";
import { getDictionary } from "@/i18n/dictionary";
import { product3DPro2300 as ruProduct } from "@/data/product";
import { product3DPro2300 as enProduct } from "@/data/en/product";

export function ProductView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = locale === "ru" ? ruProduct : enProduct;
  const prefix = locale === "ru" ? "" : "/en";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.name,
          category: p.category,
          description: p.principle,
          image: `https://eto.expert${p.photo}`,
          brand: { "@type": "Brand", name: "RETTAR" },
        }}
      />
      <section className="relative overflow-hidden bg-brand-950 py-16 text-white">
        <div className="pointer-events-none absolute -right-4 top-0 opacity-30">
          <RadarBeam />
        </div>
        <Container className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">
              {p.category}
            </p>
            <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{p.name}</h1>
            <p className="mt-4 max-w-2xl text-lg text-brand-100">{p.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`${prefix}/contacts`}
                className="inline-block rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600"
              >
                {t.productPage.requestQuote}
              </Link>
              <Link
                href={`${prefix}/products`}
                className="inline-block rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                {t.common.allProducts}
              </Link>
            </div>
          </div>
          <div className="relative mx-auto h-64 w-full max-w-sm sm:h-80">
            <Image
              src={p.photo}
              alt={`${p.category} ${p.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 400px, 80vw"
              className="object-contain"
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-brand-900">{t.productPage.principleHeading}</h2>
            <p className="mt-4 leading-relaxed text-brand-700/90">{p.principle}</p>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-brand-50 sm:h-80">
            <Image
              src={p.principleImage}
              alt={t.productPage.principleHeading}
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-contain p-4"
            />
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-brand-900">{t.productPage.advantagesHeading}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {p.advantages.map((a, i) => {
              const Icon = productAdvantageIcons[i];
              return (
                <div key={a.title} className="rounded-2xl border border-brand-100 bg-white p-6">
                  <div className="flex items-center gap-3">
                    {Icon && (
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                        <Icon size={20} strokeWidth={1.75} />
                      </span>
                    )}
                    <h3 className="font-semibold text-brand-900">{a.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-brand-700/90">{a.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-brand-900">{t.productPage.specsHeading}</h2>
          <div className="mt-8">
            <SpecTable specs={p.specs} />
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-brand-900">
            {t.productPage.applicationAreasHeading}
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {p.applicationAreas.map((area) => (
              <div
                key={area.label}
                className="overflow-hidden rounded-2xl border border-brand-100 bg-white"
              >
                <div className="relative h-28 w-full">
                  <Image
                    src={area.image}
                    alt={area.label}
                    fill
                    sizes="(min-width: 640px) 200px, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="p-3 text-center text-sm font-medium text-brand-900">{area.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-brand-900">{t.productPage.mountingHeading}</h2>
            <p className="mt-4 text-brand-700/90">{p.mounting.intro}</p>

            <div className="relative mt-6 h-56 w-full overflow-hidden rounded-2xl bg-brand-50">
              <Image
                src={p.mountingImage}
                alt={t.productPage.mountingHeading}
                fill
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-contain p-2"
              />
            </div>

            <ul className="mt-6 space-y-3">
              {p.mounting.variants.map((v) => (
                <li
                  key={v}
                  className="flex gap-3 rounded-xl border border-brand-100 bg-white p-4 text-sm text-brand-900"
                >
                  <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
                  {v}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-brand-700/80">{p.mounting.note}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-900">
              {t.productPage.connectivityHeading}
            </h2>
            <ul className="mt-6 space-y-3">
              {p.connectivity.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 rounded-xl border border-brand-100 bg-white p-4 text-sm text-brand-900"
                >
                  <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="flex flex-col items-center gap-6 rounded-3xl bg-brand-900 p-10 text-center text-white sm:p-14">
          <h2 className="text-2xl font-bold sm:text-3xl">{t.productPage.ctaHeading}</h2>
          <p className="max-w-xl text-brand-100">{t.productPage.ctaText}</p>
          <Link
            href={`${prefix}/contacts`}
            className="rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600"
          >
            {t.productPage.ctaButton}
          </Link>
        </Container>
      </section>
    </>
  );
}
