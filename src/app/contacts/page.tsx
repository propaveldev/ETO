import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Контакты",
  description: `Свяжитесь с ${company.name}: ${company.phone}, ${company.email}.`,
};

export default function ContactsPage() {
  return (
    <section className="py-16">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">Контакты</p>
          <h1 className="mt-2 text-3xl font-bold text-brand-900 sm:text-4xl">
            Свяжитесь с нами
          </h1>
          <p className="mt-4 max-w-md text-brand-700/90">
            Ответим на вопросы по подбору приборов, рассчитаем стоимость и сроки поставки.
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-brand-400">
                Телефон
              </dt>
              <dd className="mt-1">
                <a href={company.phoneHref} className="text-lg font-semibold text-brand-900 hover:text-accent-600">
                  {company.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-brand-400">
                Email
              </dt>
              <dd className="mt-1">
                <a href={`mailto:${company.email}`} className="text-lg font-semibold text-brand-900 hover:text-accent-600">
                  {company.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-brand-400">
                Адрес
              </dt>
              <dd className="mt-1 text-brand-900">{company.address}</dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
