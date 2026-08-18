import Image from "next/image";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { IndustryCase } from "@/data/industries";
import type { Locale } from "@/i18n/dictionary";
import { getDictionary } from "@/i18n/dictionary";

export function CaseCard({ item, locale = "ru" }: { item: IndustryCase; locale?: Locale }) {
  const t = getDictionary(locale);

  return (
    <div className="overflow-hidden rounded-2xl border border-brand-100 bg-white">
      <div className="relative h-44 w-full bg-brand-50">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 768px) 480px, 100vw"
          className="object-contain p-3"
        />
      </div>
      <div className="p-6">
        <h3 className="text-base font-semibold text-brand-900">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-700/90">{item.description}</p>

        <div className="mt-4 space-y-3 border-t border-brand-50 pt-4">
          <div className="flex gap-2">
            <AlertTriangle size={16} strokeWidth={1.75} className="mt-0.5 flex-shrink-0 text-brand-400" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-400">
                {t.common.challenges}
              </p>
              <p className="mt-1 text-sm text-brand-700/80">{item.challenges}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <CheckCircle2 size={16} strokeWidth={1.75} className="mt-0.5 flex-shrink-0 text-accent-600" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                {t.common.solution}
              </p>
              <p className="mt-1 text-sm font-medium text-brand-900">{item.solution}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
