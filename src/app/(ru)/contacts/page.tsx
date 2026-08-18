import type { Metadata } from "next";
import { ContactsView } from "@/views/ContactsView";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Контакты",
  description: `Свяжитесь с ${company.name}: ${company.phone}, ${company.email}.`,
  alternates: { languages: { ru: "/contacts", en: "/en/contacts" } },
};

export default function ContactsPage() {
  return <ContactsView locale="ru" />;
}
