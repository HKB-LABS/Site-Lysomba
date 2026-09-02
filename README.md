# Site Lysomba

Landing page marketing bilingue (FR/EN) pour **Lysomba**, l'application mobile Android de listes de courses triées automatiquement par rayon. Éditeur : **HKB Labs**.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** (tokens dans `src/app/globals.css`)
- **TypeScript**
- Sortie statique (SSG) + `proxy.ts` pour la redirection de langue — déployée sur **Vercel**

## Développement

```bash
npm install
npm run dev      # http://localhost:3000  (redirige vers /fr ou /en)
npm run build    # build de production
npm run lint
```

## Structure

| Chemin | Rôle |
| --- | --- |
| `src/app/[locale]/page.tsx` | Page d'accueil (métadonnées SEO + hreflang) |
| `src/app/[locale]/Landing.tsx` | Les 9 sections de la landing |
| `src/app/[locale]/LangSwitcher.tsx` | Bascule FR/EN (cookie `lysomba.lang` + navigation) |
| `src/app/[locale]/legal/page.tsx` | Mentions légales (bilingue) |
| `src/proxy.ts` | Redirige `/` → `/fr` ou `/en` (cookie puis `Accept-Language`) |
| `src/messages/{fr,en}.json` | Tout le contenu éditorial |
| `src/lib/site.ts` | URL du site, liens store, drapeaux d'indexation |
| `src/app/{robots,sitemap}.ts` | SEO |
| `design/` | Références de design d'origine (non déployées) |

## Variables d'environnement (Vercel)

| Variable | Effet | Quand la définir |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canonique (hreflang, sitemap, OG) | À la mise en ligne |
| `NEXT_PUBLIC_LIVE` | `1` autorise l'indexation Google (sinon `noindex` partout) | À la mise en ligne officielle uniquement |
| `NEXT_PUBLIC_PLAY_URL` | Lien Google Play (sinon bouton inactif) | Dès la publication de la fiche Play Store |
| `NEXT_PUBLIC_APPSTORE_URL` | Lien App Store (sinon « Bientôt sur iOS ») | À la sortie iOS |

Voir `.env.example`.

## Assets

- `uploads/lysomba_icon_master.png` — icône maître 1024×1024 (favicon + apple-icon via `src/app/icon.png`)
- `assets/screen-rayons.png`, `assets/screen-listes.png` — captures de l'app
- `public/og.png` — image de partage 1200×630
