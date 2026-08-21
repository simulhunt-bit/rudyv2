import type { ChatMessage } from "@/types/chat";

export interface ShareData {
  title: string;
  messages: ChatMessage[];
  createdAt: number;
}

const shares = new Map<string, ShareData>();
const SHARE_TTL = 30 * 24 * 60 * 60 * 1000;

// This resets on redeploy/cold start; swap for Vercel KV or Postgres in production.
export function saveShare(id: string, data: Omit<ShareData, "createdAt"> & { createdAt?: number }) {
  shares.set(id, { ...data, createdAt: data.createdAt ?? Date.now() });
}

export function getShare(id: string): ShareData | null {
  const share = shares.get(id);
  if (!share) return null;
  if (Date.now() - share.createdAt > SHARE_TTL) {
    shares.delete(id);
    return null;
  }
  return share;
}
