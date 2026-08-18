"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "@/i18n/dictionary";
import { getDictionary } from "@/i18n/dictionary";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({ locale = "ru" }: { locale?: Locale }) {
  const [status, setStatus] = useState<Status>("idle");
  const t = getDictionary(locale).contactForm;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
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
        <p className="text-lg font-semibold text-brand-900">{t.successTitle}</p>
        <p className="mt-1 text-sm text-brand-700">{t.successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-brand-100 bg-white p-6">
      {/* honeypot */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" />

      <div>
        <label htmlFor="name" className="text-sm font-medium text-brand-900">
          {t.name}
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
          {t.phone}
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
          {t.email}
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
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={t.messagePlaceholder}
          className="mt-1 w-full rounded-lg border border-brand-200 px-3 py-2 text-sm focus:border-accent-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-accent-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-600 disabled:opacity-60"
      >
        {status === "loading" ? t.submitting : t.submit}
      </button>

      {status === "error" && <p className="text-sm text-red-600">{t.errorText}</p>}
    </form>
  );
}
