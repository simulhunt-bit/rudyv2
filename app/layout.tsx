import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://qartibe.space";
const title = "Rudy — Your AI Adventure Companion";
const shortTitle = "Rudy AI";
const description =
  "Rudy is your personal AI adventure companion. Chat, study, code, research, brainstorm, and write with one intelligent assistant that routes between top AI providers automatically.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s · Rudy AI" },
  description,
  applicationName: "Rudy AI",
  keywords: [
    "Rudy AI",
    "AI adventure companion",
    "AI chat assistant",
    "AI chatbot",
    "AI study helper",
    "AI coding assistant",
    "AI research assistant",
    "AI writing assistant",
    "AI brainstorming tool",
    "Gemini AI chat",
    "OpenAI chat assistant",
    "multi-provider AI chat",
    "sign in with Google AI chat",
  ],
  authors: [{ name: "Rudy AI" }],
  creator: "Rudy AI",
  publisher: "Rudy AI",
  category: "technology",
  alternates: { canonical: siteUrl },
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: shortTitle,
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Rudy AI",
    title,
    description: "One conversation. Multiple AI capabilities. One Rudy.",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rudy — Your AI Adventure Companion" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "One conversation. Multiple AI capabilities. One Rudy.",
    images: ["/twitter-image.png"],
  },
  other: { "msapplication-TileColor": "#0f201a", "msapplication-config": "/browserconfig.xml" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#12201c" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Rudy AI",
  alternateName: "Rudy — Your AI Adventure Companion",
  url: siteUrl,
  description,
  applicationCategory: "AssistantApplication",
  operatingSystem: "Any",
  image: `${siteUrl}/og-image.png`,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="mask-icon" href="/icon-512.png" color="#0f201a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
