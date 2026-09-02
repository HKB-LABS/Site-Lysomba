// Adresse du site — un seul endroit à modifier.
// Surchargée au déploiement via la variable d'environnement NEXT_PUBLIC_SITE_URL
// (Vercel renseigne automatiquement une URL de preview ; en production on fixe
// l'URL officielle via cette variable).
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://lysomba.app");

// Indexation Google DÉSACTIVÉE par défaut (preview/démo) : le site n'est jamais
// référencé tant qu'on ne l'a pas explicitement mis « en ligne ».
// À la mise en ligne officielle, définir NEXT_PUBLIC_LIVE=1 sur Vercel.
export const NOINDEX = process.env.NEXT_PUBLIC_LIVE !== "1";

// Lien Google Play — vide tant que la fiche Play Store n'est pas publiée.
// Renseigner NEXT_PUBLIC_PLAY_URL sur Vercel dès que le lien est disponible.
export const PLAY_URL = process.env.NEXT_PUBLIC_PLAY_URL ?? "";

// Lien App Store — l'app iOS n'est pas encore sortie.
export const APPSTORE_URL = process.env.NEXT_PUBLIC_APPSTORE_URL ?? "";

// Site éditeur HKB Labs.
export const HKB_URL = "https://britomyck.github.io/HKB-Labs-site/index.html";
export const HKB_PRIVACY_URL = "https://britomyck.github.io/HKB-Labs-site/privacy.html";

// Balises hreflang : pour un chemin donné (ex. "" pour l'accueil),
// renvoie l'URL équivalente dans chaque langue.
export function altLanguages(path: string): Record<string, string> {
  return {
    fr: `/fr${path}`,
    en: `/en${path}`,
  };
}
