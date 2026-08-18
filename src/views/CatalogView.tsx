import Link from "next/link";
import { Container } from "@/components/Container";
import type { Locale } from "@/i18n/dictionary";
import { getDictionary } from "@/i18n/dictionary";
import { catalog as ruCatalog, selectionGuide as ruGuide } from "@/data/catalog";
import { catalog as enCatalog, selectionGuide as enGuide } from "@/data/en/catalog";

export function CatalogView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const catalog = locale === "ru" ? ruCatalog : enCatalog;
  const guide = locale === "ru" ? ruGuide : enGuide;
  const prefix = locale === "ru" ? "" : "/en";

  return (
    <>
      <section className="bg-brand-950 py-16 text-white">
        <Container>
          <h1 className="text-4xl font-bold sm:text-5xl">{t.catalogPage.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">{t.catalogPage.intro}</p>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-14">
        <Container>
          <h2 className="text-2xl font-bold text-brand-900">{t.catalogPage.guideHeading}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {guide.map((g) => (
              <div key={g.question} className="rounded-2xl border border-brand-100 bg-white p-6">
                <p className="font-semibold text-brand-900">{g.question}</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-700/90">{g.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {catalog.map((category) => (
        <section key={category.id} className="py-14">
          <Container>
            <h2 className="text-2xl font-bold text-brand-900">{category.title}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => {
                const card = (
                  <div className="flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6">
                    <h3 className="font-semibold text-brand-900">{item.name}</h3>
                    <p className="mt-2 text-sm text-brand-700/80">{item.purpose}</p>
                    <dl className="mt-4 flex-1 space-y-1.5 border-t border-brand-50 pt-4">
                      {item.keySpecs.map((spec) => (
                        <div key={spec.label} className="flex justify-between gap-3 text-sm">
                          <dt className="text-brand-500">{spec.label}</dt>
                          <dd className="text-right font-medium text-brand-900">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                    {item.detailHref && (
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600">
                        {t.catalogPage.detailLink}
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                          <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </span>
                    )}
                  </div>
                );

                return item.detailHref ? (
                  <Link key={item.slug} href={item.detailHref} className="transition hover:-translate-y-1">
                    {card}
                  </Link>
                ) : (
                  <div key={item.slug}>{card}</div>
                );
              })}
            </div>
          </Container>
        </section>
      ))}

      <section className="pb-20">
        <Container className="flex flex-col items-center gap-6 rounded-3xl bg-brand-50 p-10 text-center sm:p-14">
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">
            {t.common.selectEquipment}
          </h2>
          <Link
            href={`${prefix}/contacts`}
            className="rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600"
          >
            {t.common.getConsultation}
          </Link>
        </Container>
      </section>
    </>
  );
}
