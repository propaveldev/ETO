import Image from "next/image";
import { Container } from "./Container";
import type { Locale } from "@/i18n/dictionary";
import { getDictionary } from "@/i18n/dictionary";

export function CertificationSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home;

  return (
    <section className="py-20">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 h-64 w-full overflow-hidden rounded-2xl sm:h-80 lg:order-1">
          <Image
            src="/images/company/certificates.png"
            alt="Сертификаты RETTAR: ISO, CE, взрывозащита, TUV SIL, FieldComm Group"
            fill
            sizes="(min-width: 1024px) 500px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
            {t.certKicker}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-900 sm:text-3xl">{t.certHeading}</h2>
          <p className="mt-4 text-brand-700/90">{t.certText}</p>
        </div>
      </Container>
    </section>
  );
}
