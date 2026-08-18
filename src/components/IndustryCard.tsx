import Image from "next/image";
import Link from "next/link";
import { Industry } from "@/data/industries";
import type { Locale } from "@/i18n/dictionary";
import { getDictionary } from "@/i18n/dictionary";
import { industryIcons } from "@/components/icons/maps";

export function IndustryCard({ industry, locale = "ru" }: { industry: Industry; locale?: Locale }) {
  const t = getDictionary(locale);
  const prefix = locale === "ru" ? "" : "/en";
  const Icon = industryIcons[industry.slug];

  return (
    <Link
      href={`${prefix}/industries/${industry.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative h-40 w-full bg-brand-50">
        <Image
          src={industry.cardImage}
          alt={industry.shortTitle}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        {Icon && (
          <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-700 shadow-sm backdrop-blur">
            <Icon size={20} strokeWidth={1.75} />
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="text-lg font-semibold text-brand-900">{industry.shortTitle}</h3>
          <p className="mt-2 text-sm text-brand-700/80">{industry.cardText}</p>
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 group-hover:gap-2">
          {t.common.readMore}
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
            <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
