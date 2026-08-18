import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import type { Locale } from "@/i18n/dictionary";
import { getDictionary } from "@/i18n/dictionary";
import { company as ruCompany } from "@/data/company";
import { company as enCompany } from "@/data/en/company";

export function ContactsView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const company = locale === "ru" ? ruCompany : enCompany;

  return (
    <section className="py-16">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
            {t.nav.contacts}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-brand-900 sm:text-4xl">
            {locale === "ru" ? "Свяжитесь с нами" : "Get in touch"}
          </h1>
          <p className="mt-4 max-w-md text-brand-700/90">
            {locale === "ru"
              ? "Ответим на вопросы по подбору приборов, рассчитаем стоимость и сроки поставки."
              : "We'll answer your questions on equipment selection and quote pricing and lead times."}
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-brand-400">
                {t.contactForm.phone}
              </dt>
              <dd className="mt-1">
                <a href={company.phoneHref} className="text-lg font-semibold text-brand-900 hover:text-accent-600">
                  {company.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-brand-400">
                {t.contactForm.email}
              </dt>
              <dd className="mt-1">
                <a href={`mailto:${company.email}`} className="text-lg font-semibold text-brand-900 hover:text-accent-600">
                  {company.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-brand-400">
                {locale === "ru" ? "Адрес" : "Address"}
              </dt>
              <dd className="mt-1 text-brand-900">{company.address}</dd>
            </div>
          </dl>
        </div>

        <ContactForm locale={locale} />
      </Container>
    </section>
  );
}
