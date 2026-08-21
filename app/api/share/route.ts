import { NextRequest, NextResponse } from "next/server";
import { saveShare } from "@/lib/share/store";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  if (!Array.isArray(body.messages) || body.messages.length === 0) {
    return NextResponse.json({ error: "A conversation needs at least one message." }, { status: 400 });
  }

  const id = crypto.randomUUID().slice(0, 10);
  saveShare(id, { title: typeof body.title === "string" ? body.title : "Rudy conversation", messages: body.messages });
  return NextResponse.json({ id });
}
