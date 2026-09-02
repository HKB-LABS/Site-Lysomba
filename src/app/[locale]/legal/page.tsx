import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { altLanguages, HKB_URL, HKB_PRIVACY_URL } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

const CONTACT_EMAIL = "hkb.labs.contact@gmail.com";

const content: Record<
  Locale,
  {
    title: string;
    back: string;
    updated: string;
    sections: { h: string; body: React.ReactNode }[];
  }
> = {
  fr: {
    title: "Mentions légales",
    back: "Retour à l'accueil",
    updated: "Dernière mise à jour : septembre 2026",
    sections: [
      {
        h: "Éditeur",
        body: (
          <>
            Ce site est édité par <strong>HKB Labs</strong>, éditeur de
            l'application mobile Lysomba. Contact :{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Plus
            d'informations sur{" "}
            <a href={HKB_URL} target="_blank" rel="noopener">
              le site HKB Labs
            </a>
            .
          </>
        ),
      },
      {
        h: "Hébergement",
        body: (
          <>
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut,
            CA 91789, États-Unis —{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener">
              vercel.com
            </a>
            .
          </>
        ),
      },
      {
        h: "Propriété intellectuelle",
        body: (
          <>
            La marque « Lysomba », le logo, les textes et les visuels de ce site
            sont la propriété de HKB Labs. Toute reproduction sans autorisation
            est interdite.
          </>
        ),
      },
      {
        h: "Données personnelles",
        body: (
          <>
            Ce site vitrine ne collecte aucune donnée personnelle et n'utilise
            pas de cookies de suivi. Le traitement des données par l'application
            Lysomba est décrit dans la{" "}
            <a href={HKB_PRIVACY_URL} target="_blank" rel="noopener">
              politique de confidentialité
            </a>
            .
          </>
        ),
      },
    ],
  },
  en: {
    title: "Legal notice",
    back: "Back to home",
    updated: "Last updated: September 2026",
    sections: [
      {
        h: "Publisher",
        body: (
          <>
            This site is published by <strong>HKB Labs</strong>, the developer of
            the Lysomba mobile app. Contact:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. More on{" "}
            <a href={HKB_URL} target="_blank" rel="noopener">
              the HKB Labs website
            </a>
            .
          </>
        ),
      },
      {
        h: "Hosting",
        body: (
          <>
            This site is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
            91789, USA —{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener">
              vercel.com
            </a>
            .
          </>
        ),
      },
      {
        h: "Intellectual property",
        body: (
          <>
            The &ldquo;Lysomba&rdquo; name, logo, copy and visuals on this site
            are the property of HKB Labs. Reproduction without permission is
            prohibited.
          </>
        ),
      },
      {
        h: "Personal data",
        body: (
          <>
            This marketing site collects no personal data and uses no tracking
            cookies. How the Lysomba app handles data is described in the{" "}
            <a href={HKB_PRIVACY_URL} target="_blank" rel="noopener">
              privacy policy
            </a>
            .
          </>
        ),
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) return {};
  const c = content[locale as Locale];
  return {
    title: `${c.title} — Lysomba`,
    alternates: {
      canonical: `/${locale}/legal`,
      languages: altLanguages("/legal"),
    },
    robots: { index: false, follow: true },
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) notFound();
  const c = content[locale as Locale];

  return (
    <main className="mx-auto max-w-[760px] px-7 py-[88px]">
      <Link
        href={`/${locale}`}
        className="text-[14px] font-semibold text-indigo hover:text-indigo-dark"
      >
        ← {c.back}
      </Link>
      <h1 className="mb-2 mt-6 text-[clamp(30px,5vw,42px)] font-black">
        {c.title}
      </h1>
      <p className="mb-12 text-[14px] text-ink-500">{c.updated}</p>
      <div className="flex flex-col gap-10">
        {c.sections.map((s) => (
          <section key={s.h}>
            <h2 className="mb-3 text-[20px] font-extrabold">{s.h}</h2>
            <p className="text-[16px] leading-[1.65] text-ink-600 [&_a]:font-semibold [&_a]:text-indigo hover:[&_a]:text-indigo-dark">
              {s.body}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
