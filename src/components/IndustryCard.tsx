import Image from "next/image";
import Link from "next/link";
import { Industry } from "@/data/industries";

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link
      href={`/industries/${industry.slug}`}
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
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="text-lg font-semibold text-brand-900">{industry.shortTitle}</h3>
          <p className="mt-2 text-sm text-brand-700/80">{industry.cardText}</p>
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 group-hover:gap-2">
          Подробнее
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
            <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
