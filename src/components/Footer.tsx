import Link from "next/link";
import { Container } from "./Container";
import { industries } from "@/data/industries";
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-100 bg-brand-950 text-brand-100">
      <Container className="grid gap-10 py-12 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">{company.name}</p>
          <p className="mt-2 text-sm text-brand-200">
            Официальный партнёр {company.vendor} в России. Промышленные радарные сканеры и
            измерительные системы.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">Продукция</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/products/3dpro2300" className="hover:text-white">
                Радарный 3D-сканер 3DPro2300
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">Отрасли</p>
          <ul className="mt-3 space-y-2 text-sm">
            {industries.map((industry) => (
              <li key={industry.slug}>
                <Link href={`/industries/${industry.slug}`} className="hover:text-white">
                  {industry.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">Контакты</p>
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
          <p>© {new Date().getFullYear()} {company.name}. Все права защищены.</p>
          <p>Продукция и материалы производителя {company.vendor} используются с разрешения правообладателя.</p>
        </Container>
      </div>
    </footer>
  );
}
