import type { Metadata } from "next";
import "./globals.css";

import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Earthquake Games — Indie Mobile Games Studio",
    template: "%s | Earthquake Games",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Earthquake Games",
    "indie mobile games",
    "mobile games studio",
    "Would You Rather",
    "would you rather game",
    "party games",
    "iOS games",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.parentCompany,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Earthquake Games — Indie Mobile Games Studio",
    description: SITE.description,
    url: SITE.url,
    locale: SITE.locale,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Earthquake Games — indie mobile games studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Earthquake Games — Indie Mobile Games Studio",
    description: SITE.description,
    images: ["/og.png"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark h-full antialiased"
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
