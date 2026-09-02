import fr from "@/messages/fr.json";
import en from "@/messages/en.json";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export type Dictionary = typeof fr;

export const dictionaries: Record<Locale, Dictionary> = { fr, en };

export const localeLabels: Record<Locale, string> = { fr: "FR", en: "EN" };

export function pickLocale(value?: string | null): Locale {
  return (locales as readonly string[]).includes(value ?? "")
    ? (value as Locale)
    : defaultLocale;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "fr" ? "en" : "fr";
}
