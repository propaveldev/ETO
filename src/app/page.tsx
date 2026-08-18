import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { IndustryCard } from "@/components/IndustryCard";
import { industries } from "@/data/industries";
import { product3DPro2300 } from "@/data/product";
import { company } from "@/data/company";

const stats = [
  { value: "180+", label: "патентов и объектов ИС у производителя" },
  { value: "8000+", label: "предприятий-заказчиков по всему миру" },
  { value: "16 200", label: "точек сканирования у 3DPro2300 за один цикл" },
  { value: "±2 мм", label: "погрешность измерения уровня" },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 60% at 80% 20%, rgba(232,121,42,0.35) 0%, transparent 60%), radial-gradient(50% 50% at 10% 90%, rgba(138,99,201,0.35) 0%, transparent 60%)",
          }}
        />
        <Container className="relative py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            {company.name} · официальный партнёр {company.vendor}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Радарные сканеры и уровнемеры для точных промышленных измерений
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-100">
            Поставляем и внедряем радарные 3D-сканеры, уровнемеры и системы контроля материала
            для горнодобывающей, пищевой, химической и других отраслей промышленности — там, где
            обычные датчики теряют точность из-за пыли, вибрации и агрессивных сред.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contacts"
              className="rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/20 hover:bg-accent-600"
            >
              Получить консультацию
            </Link>
            <Link
              href="/products/3dpro2300"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Флагманский продукт 3DPro2300
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-brand-100 bg-brand-50/60 py-10">
        <Container className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-3xl font-bold text-brand-900">{stat.value}</p>
              <p className="mt-1 text-xs text-brand-700/80 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
              Отрасли применения
            </p>
            <h2 className="mt-2 text-3xl font-bold text-brand-900">
              Решения для разных производств
            </h2>
            <p className="mt-4 text-brand-700/90">
              Один и тот же принцип бесконтактного радарного измерения решает задачи контроля
              уровня, объёма и потока материала в самых разных отраслях.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-900 py-20 text-white">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">
              Флагманский продукт
            </p>
            <h2 className="mt-2 text-3xl font-bold">{product3DPro2300.name}</h2>
            <p className="mt-2 text-brand-200">{product3DPro2300.tagline}</p>
            <p className="mt-6 text-brand-100">{product3DPro2300.advantages[0].text}</p>
            <Link
              href="/products/3dpro2300"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600"
            >
              Технические характеристики и схемы монтажа
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {product3DPro2300.applicationAreas.map((area) => (
              <div
                key={area.label}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="relative h-28 w-full">
                  <Image
                    src={area.image}
                    alt={area.label}
                    fill
                    sizes="(min-width: 1024px) 260px, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="p-3 text-center text-sm font-medium">{area.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col items-center gap-6 rounded-3xl bg-brand-50 p-10 text-center sm:p-14">
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">
            Подберём прибор под вашу задачу
          </h2>
          <p className="max-w-xl text-brand-700/90">
            Расскажите, какой материал, ёмкость и условия эксплуатации — предложим решение и
            рассчитаем стоимость.
          </p>
          <Link
            href="/contacts"
            className="rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600"
          >
            Оставить заявку
          </Link>
        </Container>
      </section>
    </>
  );
}
