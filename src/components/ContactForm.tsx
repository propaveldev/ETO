"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6 text-center">
        <p className="text-lg font-semibold text-brand-900">Спасибо за заявку!</p>
        <p className="mt-1 text-sm text-brand-700">
          Мы свяжемся с вами в ближайшее рабочее время.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-brand-100 bg-white p-6">
      {/* honeypot */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" />

      <div>
        <label htmlFor="name" className="text-sm font-medium text-brand-900">
          Имя
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-1 w-full rounded-lg border border-brand-200 px-3 py-2 text-sm focus:border-accent-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-brand-900">
          Телефон
        </label>
        <input
          id="phone"
          name="phone"
          required
          className="mt-1 w-full rounded-lg border border-brand-200 px-3 py-2 text-sm focus:border-accent-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-brand-900">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-1 w-full rounded-lg border border-brand-200 px-3 py-2 text-sm focus:border-accent-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-brand-900">
          Комментарий
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Расскажите о задаче: тип материала, ёмкость, условия эксплуатации"
          className="mt-1 w-full rounded-lg border border-brand-200 px-3 py-2 text-sm focus:border-accent-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-accent-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-600 disabled:opacity-60"
      >
        {status === "loading" ? "Отправляем…" : "Отправить заявку"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Не удалось отправить заявку. Позвоните нам напрямую или попробуйте ещё раз.
        </p>
      )}
    </form>
  );
}
