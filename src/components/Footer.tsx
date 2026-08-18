import Link from "next/link";
import { Container } from "./Container";
import type { Locale } from "@/i18n/dictionary";
import { getDictionary } from "@/i18n/dictionary";
import { industries as ruIndustries } from "@/data/industries";
import { industries as enIndustries } from "@/data/en/industries";
import { company as ruCompany } from "@/data/company";
import { company as enCompany } from "@/data/en/company";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const industries = locale === "ru" ? ruIndustries : enIndustries;
  const company = locale === "ru" ? ruCompany : enCompany;
  const prefix = locale === "ru" ? "" : "/en";

  return (
    <footer className="mt-24 border-t border-brand-100 bg-brand-950 text-brand-100">
      <Container className="grid gap-10 py-12 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">{company.name}</p>
          <p className="mt-2 text-sm text-brand-200">{t.footer.partnerLine(company.vendor)}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">
            {t.footer.products}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href={`${prefix}/products`} className="hover:text-white">
                {t.common.allProducts}
              </Link>
            </li>
            <li>
              <Link href={`${prefix}/products/3dpro2300`} className="hover:text-white">
                {locale === "ru" ? "Радарный 3D-сканер 3DPro2300" : "3DPro2300 radar 3D scanner"}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">
            {t.footer.industries}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {industries.map((industry) => (
              <li key={industry.slug}>
                <Link href={`${prefix}/industries/${industry.slug}`} className="hover:text-white">
                  {industry.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">
            {t.footer.contacts}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={company.phoneHref} className="hover:text-white">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
            <li className="text-brand-300">{company.address}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-brand-900/60">
        <Container className="flex flex-col gap-2 py-6 text-xs text-brand-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. {t.footer.rights}
          </p>
          <p>{t.footer.disclaimer(company.vendor)}</p>
        </Container>
      </div>
    </footer>
  );
}
