import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { dictionaries, locales, type Locale } from "@/lib/i18n";
import { altLanguages } from "@/lib/site";
import Landing from "./Landing";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) return {};
  const d = dictionaries[locale as Locale];
  return {
    title: d.meta.title,
    description: d.meta.description,
    alternates: { canonical: `/${locale}`, languages: altLanguages("") },
    openGraph: {
      type: "website",
      siteName: "Lysomba",
      title: d.meta.title,
      description: d.meta.description,
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Lysomba" }],
    },
    twitter: {
      card: "summary_large_image",
      title: d.meta.title,
      description: d.meta.description,
      images: ["/og.png"],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) notFound();
  return <Landing locale={locale as Locale} />;
}
