"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";
import { industries } from "@/data/industries";
import { company } from "@/data/company";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/products/3dpro2300", label: "Продукция" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-brand-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-700 text-white">
            И
          </span>
          <span className="text-lg tracking-tight">{company.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-900/80 hover:text-accent-600"
            >
              {link.label}
            </Link>
          ))}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-brand-900/80 hover:text-accent-600">
              Отрасли
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full w-64 rounded-xl border border-brand-100 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="block rounded-lg px-3 py-2 text-sm text-brand-900 hover:bg-brand-50"
                >
                  {industry.shortTitle}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/contacts" className="text-sm font-medium text-brand-900/80 hover:text-accent-600">
            Контакты
          </Link>
          <Link
            href="/contacts"
            className="rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent-600"
          >
            Оставить заявку
          </Link>
        </nav>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
            <path d="M0 1h18M0 7h18M0 13h18" stroke="#241645" strokeWidth="1.5" />
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-brand-100 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-brand-900 hover:bg-brand-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-brand-400">
              Отрасли
            </p>
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="rounded-lg px-3 py-2 text-sm text-brand-900 hover:bg-brand-50"
                onClick={() => setOpen(false)}
              >
                {industry.shortTitle}
              </Link>
            ))}
            <Link
              href="/contacts"
              className="mt-2 rounded-lg bg-accent-500 px-3 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Оставить заявку
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
