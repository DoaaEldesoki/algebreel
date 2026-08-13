import type { Metadata } from "next";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingContact } from "@/components/floating-contact";

export const metadata: Metadata = {
  title: {
    default: "الجبريل للباركيه | أرضيات HDF وباركيه في التجمع الخامس",
    template: "%s | الجبريل للباركيه",
  },
  description:
    "الجبريل للباركيه متخصصون في أرضيات HDF وSPC والباركيه المستورد التركي والألماني والبولندي. تعرف على الأنواع والأسعار واحصل على عرض سعر في التجمع الخامس والقاهرة الجديدة.",
  icons: {
    icon: "/logo/file.png",
    shortcut: "/logo/file.png",
    apple: "/logo/file.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  name: "الجبريل للباركيه",

  description:
    "متخصصون في بيع وتركيب أرضيات HDF وSPC والباركيه المستورد التركي والألماني والبولندي في التجمع الخامس والقاهرة الجديدة.",

  telephone: "+201148392040",

  address: {
    "@type": "PostalAddress",
    streetAddress: "ميجا مول التسعين الجنوبي",
    addressLocality: "التجمع الخامس",
    addressRegion: "القاهرة",
    addressCountry: "EG",
  },

  openingHours: "Sa-Th 12:00-21:00",

  areaServed: [
    "التجمع الخامس",
    "القاهرة الجديدة",
    "القاهرة",
  ],

  knowsAbout: [
    "أرضيات HDF",
    "باركيه HDF",
    "أرضيات SPC",
    "الباركيه",
    "تركيب الباركيه",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body className="flex min-h-full flex-col">
        <SiteHeader />

        <main className="flex-1">{children}</main>

        <SiteFooter />

        <FloatingContact />
      </body>
    </html>
  );
}