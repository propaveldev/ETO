import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SpecTable } from "@/components/SpecTable";
import { product3DPro2300 } from "@/data/product";

export const metadata: Metadata = {
  title: "Радарный 3D-сканер 3DPro2300 — характеристики и монтаж",
  description:
    "3DPro2300 — радарный 3D-сканер для бункеров и складов сыпучих материалов: 360° сканирование, 16 200 точек, погрешность ±2 мм.",
};

export default function ProductPage() {
  const p = product3DPro2300;

  return (
    <>
      <section className="bg-brand-950 py-16 text-white">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">
              {p.category}
            </p>
            <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{p.name}</h1>
            <p className="mt-4 max-w-2xl text-lg text-brand-100">{p.tagline}</p>
            <Link
              href="/contacts"
              className="mt-8 inline-block rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600"
            >
              Запросить коммерческое предложение
            </Link>
          </div>
          <div className="relative mx-auto h-64 w-full max-w-sm sm:h-80">
            <Image
              src={p.photo}
              alt={`Радарный 3D-сканер ${p.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 400px, 80vw"
              className="object-contain"
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-brand-900">Принцип измерения</h2>
            <p className="mt-4 leading-relaxed text-brand-700/90">{p.principle}</p>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-brand-50 sm:h-80">
            <Image
              src={p.principleImage}
              alt="Принцип измерения радарного 3D-сканера"
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-contain p-4"
            />
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-brand-900">Преимущества</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {p.advantages.map((a) => (
              <div key={a.title} className="rounded-2xl border border-brand-100 bg-white p-6">
                <h3 className="font-semibold text-brand-900">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-700/90">{a.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-brand-900">Технические характеристики</h2>
          <div className="mt-8">
            <SpecTable specs={p.specs} />
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-brand-900">Области применения</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {p.applicationAreas.map((area) => (
              <div
                key={area.label}
                className="overflow-hidden rounded-2xl border border-brand-100 bg-white"
              >
                <div className="relative h-28 w-full">
                  <Image
                    src={area.image}
                    alt={area.label}
                    fill
                    sizes="(min-width: 640px) 200px, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="p-3 text-center text-sm font-medium text-brand-900">{area.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-brand-900">Схема монтажа</h2>
            <p className="mt-4 text-brand-700/90">{p.mounting.intro}</p>

            <div className="relative mt-6 h-56 w-full overflow-hidden rounded-2xl bg-brand-50">
              <Image
                src={p.mountingImage}
                alt="Варианты установки одного, двух и трёх сканеров на бункере"
                fill
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-contain p-2"
              />
            </div>

            <ul className="mt-6 space-y-3">
              {p.mounting.variants.map((v) => (
                <li key={v} className="flex gap-3 rounded-xl border border-brand-100 bg-white p-4 text-sm text-brand-900">
                  <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
                  {v}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-brand-700/80">{p.mounting.note}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-900">Варианты подключения и связи</h2>
            <ul className="mt-6 space-y-3">
              {p.connectivity.map((c) => (
                <li key={c} className="flex gap-3 rounded-xl border border-brand-100 bg-white p-4 text-sm text-brand-900">
                  <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="flex flex-col items-center gap-6 rounded-3xl bg-brand-900 p-10 text-center text-white sm:p-14">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Нужен подбор прибора под конкретный бункер?
          </h2>
          <p className="max-w-xl text-brand-100">
            Пришлите параметры объекта — подскажем количество сканеров, вариант монтажа и способ
            связи.
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
