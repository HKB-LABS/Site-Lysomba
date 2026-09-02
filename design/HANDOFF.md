# Handoff : site de présentation Lysomba

## Overview
Landing page marketing (une seule page, bilingue FR/EN) pour **Lysomba**, application mobile Android de listes de courses triées automatiquement par rayon. Éditeur : **HKB Labs**. Objectif de la page : présenter l'app, ses 4 bénéfices clés, le fonctionnement en 3 étapes, une FAQ, et pousser vers le téléchargement Google Play (iOS annoncé « bientôt »).

## About the Design Files
Les fichiers de ce dossier sont des **références de design réalisées en HTML** — un prototype qui montre l'apparence et le comportement attendus, **pas du code de production à copier tel quel**. Le fichier `Lysomba Landing.dc.html` utilise un runtime de composants propriétaire (`support.js`, balises `<sc-if>`, styles inline) qui n'a pas vocation à être déployé.

La tâche est de **recréer ce design dans un environnement web de production**. Aucun codebase n'existe pour l'instant : recommandation pour un site vitrine à publier vite et bien —

- **Option A (recommandée) : Astro + Tailwind CSS**, i18n natif (routes `/fr`, `/en`), sortie 100 % statique, hébergement GitHub Pages / Netlify / Vercel gratuit. Idéal pour du contenu marketing statique et un score Lighthouse ~100.
- **Option B : Next.js (App Router) + Tailwind**, si un blog, des pages légales dynamiques ou une future partie applicative sont prévus.
- **Option C : HTML + CSS statique** dans le repo GitHub Pages existant de HKB Labs (`britomyck.github.io/HKB-Labs-site`), avec deux fichiers `index.html` / `index.en.html`. Le plus rapide si l'objectif est juste de publier sous le même domaine.

## Fidelity
**Haute fidélité (hifi).** Couleurs, typographies, tailles, espacements et états de survol sont définitifs. À reproduire fidèlement, en réécrivant proprement en CSS/Tailwind (classes, pas de styles inline).

## Screens / Views

### Écran unique : Landing page (une variante par langue)
Ordre des sections, de haut en bas :

1. **Header (sticky)** — hauteur ~68px. `position:sticky; top:0; z-index:50`, fond `rgba(251,251,253,0.85)` + `backdrop-filter:blur(14px)`, bordure basse `1px solid rgba(23,26,46,0.07)`. Contenu : icône app 40×40 (radius 11px) + wordmark « Lysomba » (Nunito 900, 22px) à gauche ; à droite : 3 liens d'ancre (15px, 600, `#4A4F6B`), sélecteur de langue, bouton pill « Télécharger / Download » (fond `#4B57D8`, blanc, 700, 15px, padding 11/22, radius 999px, ombre `0 8px 20px -8px rgba(75,87,216,0.7)`, hover `#3843B8`). Row en `flex-wrap:wrap` pour ne jamais couper le CTA en mobile.
   - **Sélecteur FR/EN** : conteneur pill `#EEF0FE`, bordure `rgba(75,87,216,0.16)`, padding 3px ; deux boutons 13.5px Nunito 900, padding 7/13, radius 999px. Actif : fond `#4B57D8`, texte blanc. Inactif : transparent, texte `#5C6285`.

2. **Hero** — fond `#F5F5FA` avec rayures verticales `repeating-linear-gradient(90deg, rgba(23,26,46,0.05) 0 1px, transparent 1px 46px)`, bordure basse `rgba(23,26,46,0.08)`. Grille 2 colonnes `repeat(auto-fit,minmax(320px,1fr))`, gap 48px, `align-items:end`, max-width 1180px, padding `88px 28px 0`.
   - Badge pill blanc (bordure `rgba(23,26,46,0.09)`, ombre `0 4px 14px -8px rgba(23,26,46,0.3)`) : point 8px `#94C40C` + texte 13.5px/600 `#3D4260` « Une application **HKB Labs** · Android » — « HKB Labs » est un lien `#4B57D8` (700) vers https://britomyck.github.io/HKB-Labs-site/index.html (nouvel onglet, URL non affichée).
   - H1 : Nunito 900, `clamp(38px,7vw,64px)`, line-height 1.02, encre `#171A2E` ; « par rayon » / « by aisle » en `#4B57D8`. FR : « Vos courses,⏎triées par rayon. » EN : « Your groceries,⏎sorted by aisle. »
   - Sous-titre : 20px, line-height 1.55, `#585E7A`, max-width 480px.
   - Boutons (radius 16px, Nunito, 17px) : primaire « Télécharger sur Google Play » / « Get it on Google Play » fond `#4B57D8`, blanc, 800, padding 17/30, ombre `0 16px 32px -14px rgba(75,87,216,0.85)`, hover `#3843B8` ; secondaire « Bientôt sur iOS » / « iOS coming soon » fond blanc, bordure `rgba(23,26,46,0.12)`, texte `#3D4260` 700, hover fond `#F0F1F9`.
   - Micro-liste 14px/600 `#7A8098` séparée par « · » : Gratuit · Sans inscription · Hors ligne · Français & English (EN : Free · No sign-up · Works offline · English & French).
   - Colonne droite : capture `assets/screen-rayons.png`, `width:min(330px,78vw)`, radius 36px, ombre `0 46px 80px -32px rgba(23,26,46,0.5)` ; halo radial `rgba(75,87,216,0.16)` 420×420 derrière ; carte flottante blanche en absolute (left -28px, top 96px) « TOTAL EN DIRECT » (11px, 700, letter-spacing 0.09em, `#8A8FA8`) + « 45,70 € » (Nunito 900, 24px, `#4B57D8`), animation `floaty` (translateY -10px, 5s ease-in-out infinite alternate).

3. **Bandeau de preuve** — fond `#171A2E`, padding 26/28, 5 libellés Nunito 700 16px `rgba(255,255,255,0.55)` en `flex-wrap` + `justify-content:space-between` : Tri automatique par rayon · Magasins personnalisés · Prix & total en direct · Modèles réutilisables · Français & English.

4. **Fonctionnalités** (`#fonctionnalites` / `#features`) — eyebrow 12.5px/700, letter-spacing 0.14em, uppercase, `#4B57D8` ; H2 Nunito 900 `clamp(30px,4.5vw,46px)` ; intro 18px `#585E7A`. Grille `repeat(auto-fit,minmax(280px,1fr))`, gap 22px, 4 cartes : fond blanc, bordure `rgba(23,26,46,0.08)`, radius 24px, padding 32px ; hover bordure `#4B57D8` + `translateY(-3px)`. Chaque carte : pastille 44×44 radius 13px (`#EEF0FE` ou `#F2FBDB`) avec une marque géométrique CSS (coche, « € », 3 barres, « FR / EN »), titre 21px/800, texte 15.5px/1.6 `#585E7A`. Contenus : « Chaque article à son rayon », « Le budget sous contrôle », « Autant de listes que besoin », « En français et en anglais ».

5. **Vos magasins** — panneau `#F1F2FB` radius 36px, grille `repeat(auto-fit,minmax(300px,1fr))` gap 48px, `align-items:end`, `overflow:hidden`. Texte à gauche (eyebrow, H2 `clamp(28px,4.2vw,42px)`, paragraphe 17.5px) + chips de rayons (padding 9/16, radius 999px, blanc bordé ; le chip actif « Boucherie » en `#4B57D8` blanc). À droite capture `assets/screen-listes.png`, `width:min(306px,78vw)`, radius 34px, ombre `0 40px 70px -28px rgba(23,26,46,0.42)`, `translateY(6px)` pour affleurer le bord du panneau.

6. **3 étapes** (`#comment` / `#how`) — H2 centré `clamp(28px,4.2vw,42px)` ; grille `repeat(auto-fit,minmax(260px,1fr))` gap 22px ; chaque colonne a une barre supérieure 3px (`#4B57D8`, `#B5E619`, `rgba(23,26,46,0.15)`), un numéro Nunito 900 15px (`#4B57D8`, `#7E9F10`, `#171A2E`), un titre 22px/800 et un texte 15.5px.

7. **FAQ** (`#faq` / `#faq-en`) — fond blanc, bordures haut/bas `rgba(23,26,46,0.07)`, max-width 900px, padding 88/28. 4 entrées, séparateurs `1px solid rgba(23,26,46,0.08)`, question 19px/800, réponse 16px/1.6 `#585E7A` : gratuité, langues (FR/EN), hors ligne, reclassement d'un article.

8. **CTA final** (`#telecharger` / `#download`) — même fond clair rayé que le hero, bordure haute `rgba(23,26,46,0.08)`, centré, max-width 900px, padding 100/28 : icône app 78×78 radius 20px, H2 `clamp(32px,5.5vw,50px)` avec la 2ᵉ ligne en `#4B57D8`, paragraphe 19px `#585E7A`, les deux mêmes boutons (padding 18/34).

9. **Footer** — fond `#171A2E`, texte `rgba(255,255,255,0.6)`, padding 40/28, `flex-wrap` : icône 30px + wordmark blanc ; « Une application **HKB Labs** · © 2026 Lysomba. Tous droits réservés. » (lien lime `#B5E619`, hover `#C8F53A`) ; à droite Confidentialité / Mentions légales / Contact (14px/600, hover `#B5E619`).

## Interactions & Behavior
- **Bascule FR/EN** : remplace intégralement le contenu de la page (héros → footer). Au clic : mémorisation dans `localStorage` sous la clé `lysomba.lang`, puis `window.scrollTo({top:0, behavior:'smooth'})`. En production, préférer deux routes réelles (`/fr`, `/en`) + `<link rel="alternate" hreflang>` pour le SEO, avec le même bouton de bascule.
- **Langue par défaut** : `localStorage` s'il existe, sinon `navigator.language` commençant par « fr » → FR, sinon EN (fallback FR).
- **Navigation** : liens d'ancre vers les sections ; prévoir `scroll-behavior:smooth` et `scroll-margin-top:80px` sur les cibles à cause du header sticky.
- **Hover** : cartes fonctionnalités (bordure violette + élévation 3px), boutons (assombrissement), liens de nav et de footer. Transitions courtes 150–200ms ease.
- **Animation** : uniquement la carte « Total en direct » (`floaty`, 5s, infinie). Respecter `prefers-reduced-motion`.
- **Responsive** : aucune media query — grilles `auto-fit/minmax`, titres en `clamp()`, images en `min(px, 78vw)`, header et nav en `flex-wrap`. Vérifié de 390px à 1440px.
- **Liens externes** : `target="_blank" rel="noopener"`, URL jamais affichée en texte.

## State Management
Un seul état : `lang: 'fr' | 'en'` (persisté dans `localStorage['lysomba.lang']`). Aucun fetch, aucune donnée dynamique, aucun formulaire. Deux options de contenu documentées comme props du prototype : `showFaq` (bool, défaut true) et `defaultLang` (`'fr' | 'en'`, défaut `'fr'`).

## Design Tokens
**Couleurs**
- Indigo marque : `#4B57D8` — hover/foncé `#3843B8` — teintes : `#EEF0FE` (fond pastille), `#F1F2FB` (panneau), `#F5F5FA` (bandes claires), `#B9BEEF` (barre inactive)
- Lime marque : `#B5E619` — variantes : `#C8F53A` (hover), `#94C40C` (point badge), `#7E9F10` / `#6E9105` (texte lime lisible), `#F2FBDB` (fond pastille)
- Encre : `#171A2E` (titres + fonds sombres), `#3D4260`, `#585E7A` (corps), `#7A8098`, `#8A8FA8`, `#5C6285`, `#4A4F6B`
- Fond page : `#FBFBFD` ; blanc `#FFFFFF` ; hover clair `#F0F1F9`
- Bordures : `rgba(23,26,46,0.07 / 0.08 / 0.09 / 0.12)`

**Typographies** (Google Fonts)
- Titres / chiffres / boutons : **Nunito** 600–900, letter-spacing -0.02em, `text-wrap:balance`
- Corps : **Plus Jakarta Sans** 400–700, `text-wrap:pretty`
- Échelle : 64 / 50 / 46 / 42 / 38 (clamp) → 22 / 21 / 20 / 19 / 18 / 17.5 / 16 / 15.5 / 15 / 14 / 13.5 / 12.5 / 11

**Espacements** : 3 · 6 · 8 · 10 · 12 · 14 · 18 · 22 · 26 · 28 · 32 · 36 · 40 · 48 · 56 · 64 · 88 · 96 · 100 · 104 px. Conteneur max 1180px (900px pour FAQ/CTA), gouttière 28px.

**Radius** : 9 · 11 · 13 · 16 · 20 · 24 · 34 · 36 · 999px
**Ombres** : `0 4px 14px -8px rgba(23,26,46,0.3)` · `0 8px 20px -8px rgba(75,87,216,0.7)` · `0 16px 32px -14px rgba(75,87,216,0.85)` · `0 22px 44px -18px rgba(23,26,46,0.4)` · `0 40px 70px -28px rgba(23,26,46,0.42)` · `0 46px 80px -32px rgba(23,26,46,0.5)`

## Assets
- `uploads/lysomba_icon_master.png` — icône/logo maître 1024×1024 fournie par le client. Sert d'icône header (40px), CTA final (78px) et footer (30px). À décliner en favicon (32/16), `apple-touch-icon` (180) et image Open Graph (1200×630).
- `assets/screen-rayons.png` et `assets/screen-listes.png` — captures d'écran de l'app, recadrées à partir des visuels store fournis (le texte marketing et le fond violet des visuels store ont été supprimés, seul le téléphone est conservé). 674×1470 px.
- Aucune icône tierce : toutes les marques visuelles sont des formes CSS (coche, barres, « € »).

## Files
- `Lysomba Landing.dc.html` — le design complet (FR + EN), référence unique.
- `support.js` — runtime du prototype, **à ne pas porter**.
- `assets/screen-rayons.png`, `assets/screen-listes.png`, `uploads/lysomba_icon_master.png` — assets à reprendre tels quels.

## Étapes de publication suggérées
1. Créer le repo (ex. `britomyck/lysomba-site`) et scaffolder Astro + Tailwind, ou ajouter une page au repo HKB Labs existant.
2. Porter les tokens ci-dessus dans `tailwind.config` (couleurs, fontFamily, radius, shadows) et charger Nunito + Plus Jakarta Sans.
3. Recréer les 9 sections en composants, contenu FR/EN dans deux fichiers de traduction, routes `/fr` et `/en`.
4. SEO/partage : `<title>`, meta description par langue, `hreflang`, Open Graph + Twitter card, favicon et `apple-touch-icon`, `sitemap.xml`, `robots.txt`.
5. Remplacer les `href="#"` des boutons store par l'URL Play Store réelle ; garder le bouton iOS inactif ou le retirer jusqu'à la sortie.
6. Pages légales : Mentions légales et Contact (Confidentialité pointe déjà vers la page HKB Labs).
7. Déployer (GitHub Pages / Netlify / Vercel), brancher un domaine, ajouter une mesure d'audience respectueuse (Plausible ou GA4 avec bandeau cookies si nécessaire).
8. Vérifier Lighthouse (perf/a11y/SEO), contraste, navigation clavier, `prefers-reduced-motion`, et le rendu de 390px à 1440px.
