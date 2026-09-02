import { NextResponse, type NextRequest } from "next/server";

// Redirige les URL sans préfixe de langue vers la bonne langue.
// Ordre de priorité : cookie « lysomba.lang » → en-tête Accept-Language → français.
// (Next 16 : ce fichier s'appelle « proxy » — anciennement « middleware ».)
const locales = ["fr", "en"] as const;
const defaultLocale = "fr";

function detectLocale(req: NextRequest): string {
  const cookie = req.cookies.get("lysomba.lang")?.value;
  if (cookie && (locales as readonly string[]).includes(cookie)) return cookie;

  const header = (req.headers.get("accept-language") || "").toLowerCase();
  const first = header.split(",")[0]?.trim() ?? "";
  if (first.startsWith("fr")) return "fr";
  if (first.startsWith("en")) return "en";
  return defaultLocale;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return;

  const url = req.nextUrl.clone();
  url.pathname = `/${detectLocale(req)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // On ignore l'API, les fichiers internes de Next et tout fichier avec extension.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
