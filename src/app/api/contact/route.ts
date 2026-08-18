import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  // Honeypot: bots fill hidden fields
  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  if (!data.name || !data.phone) {
    return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
  }

  // TODO: подключить реальную отправку заявки — например, Resend/SMTP на info@eto.expert
  // или запись в CRM. Сейчас заявка только логируется на сервере.
  console.log("Новая заявка с сайта:", {
    name: data.name,
    phone: data.phone,
    email: data.email,
    message: data.message,
  });

  return NextResponse.json({ ok: true });
}
