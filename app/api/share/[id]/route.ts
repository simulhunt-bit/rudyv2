import { NextResponse } from "next/server";
import { getShare } from "@/lib/share/store";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const share = getShare(id);
  if (!share) return NextResponse.json({ error: "Share not found or expired." }, { status: 404 });
  return NextResponse.json(share);
}
