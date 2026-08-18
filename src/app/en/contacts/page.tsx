import type { Metadata } from "next";
import { ContactsView } from "@/views/ContactsView";
import { company } from "@/data/en/company";

export const metadata: Metadata = {
  title: "Contacts",
  description: `Get in touch with ${company.name}: ${company.phone}, ${company.email}.`,
  alternates: { languages: { ru: "/contacts", en: "/en/contacts" } },
};

export default function ContactsPage() {
  return <ContactsView locale="en" />;
}
