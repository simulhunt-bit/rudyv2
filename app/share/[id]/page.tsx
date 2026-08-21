"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { ChatMessage } from "@/types/chat";

function Linkified({ line }: { line: string }) {
  return <>{line.split(/(https?:\/\/[^\s]+)/g).map((part, index) => part.match(/^https?:\/\//) ? <a href={part} target="_blank" rel="noopener noreferrer" key={index}>{part}</a> : part)}</>;
}

export default function SharedConversation() {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    if (!id) return;
    fetch(`/api/share/${id}`).then(async (response) => {
      if (!response.ok) throw new Error("This conversation could not be found or has expired.");
      return response.json();
    }).then((data) => { setTitle(data.title); setMessages(data.messages); setState("ready"); }).catch(() => setState("error"));
  }, [id]);

  return <main className="share-page"><div className="share-frame"><p className="eyebrow">SHARED RUDY CONVERSATION</p>{state === "loading" && <p className="share-state">Loading conversation...</p>}{state === "error" && <p className="share-state share-error">This conversation could not be found or has expired.</p>}{state === "ready" && <><h1 className="share-title">{title}</h1><div className="messages share-messages" aria-label="Shared conversation">{messages.map((message) => <article key={message.id} className={`message ${message.role}`}><div className="message-mark">{message.role === "assistant" ? "🦦" : "YOU"}</div><div className="bubble">{message.content.split("\n").map((line, index) => <p key={index}>{line ? <Linkified line={line} /> : " "}</p>)}</div></article>)}</div><p className="share-footer">Shared from Rudy. This conversation is read-only.</p></>}</div></main>;
}
