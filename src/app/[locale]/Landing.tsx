import Image from "next/image";
import { dictionaries, otherLocale, type Locale } from "@/lib/i18n";
import {
  PLAY_URL,
  APPSTORE_URL,
  HKB_URL,
  HKB_PRIVACY_URL,
  SITE_URL,
} from "@/lib/site";
import LangSwitcher from "./LangSwitcher";
import screenRayons from "../../../assets/screen-rayons.png";
import screenListes from "../../../assets/screen-listes.png";
import appIcon from "../../../uploads/lysomba_icon_master.png";

const CONTACT_EMAIL = "hkb.labs.contact@gmail.com";

function GooglePlayButton({
  label,
  size = "md",
}: {
  label: string;
  size?: "md" | "lg";
}) {
  const pad = size === "lg" ? "px-[34px] py-[18px]" : "px-[30px] py-[17px]";
  const cls = `inline-flex items-center justify-center gap-3 rounded-2xl bg-indigo font-display text-[17px] font-extrabold text-white shadow-cta transition-colors hover:bg-indigo-dark ${pad}`;
  if (PLAY_URL) {
    return (
      <a href={PLAY_URL} target="_blank" rel="noopener" className={cls}>
        {label}
      </a>
    );
  }
  return (
    <span
      className={`${cls} cursor-default opacity-90`}
      role="link"
      aria-disabled="true"
      title="Lien disponible à la sortie sur Google Play"
    >
      {label}
    </span>
  );
}

function IosButton({
  label,
  size = "md",
}: {
  label: string;
  size?: "md" | "lg";
}) {
  const pad = size === "lg" ? "px-[34px] py-[18px]" : "px-[30px] py-[17px]";
  const cls = `inline-flex items-center justify-center gap-3 rounded-2xl border border-[rgba(23,26,46,0.12)] bg-white font-display text-[17px] font-bold text-ink-700 transition-colors hover:bg-hover-light ${pad}`;
  if (APPSTORE_URL) {
    return (
      <a href={APPSTORE_URL} target="_blank" rel="noopener" className={cls}>
        {label}
      </a>
    );
  }
  return (
    <span className={`${cls} cursor-default`} role="link" aria-disabled="true">
      {label}
    </span>
  );
}

function FeatureIcon({ kind }: { kind: string }) {
  const wrap =
    kind === "euro" || kind === "lang"
      ? "bg-lime-50"
      : "bg-indigo-50";
  return (
    <div
      className={`mb-[22px] flex h-11 w-11 items-center justify-center rounded-[13px] ${wrap}`}
    >
      {kind === "check" && (
        <span className="block h-[9px] w-4 -translate-y-[2px] translate-x-[1px] rotate-[-45deg] border-b-[3.5px] border-l-[3.5px] border-indigo" />
      )}
      {kind === "euro" && (
        <span className="font-display text-[17px] font-black text-lime-text">
          €
        </span>
      )}
      {kind === "bars" && (
        <span className="flex flex-col items-center gap-[3px]">
          <span className="block h-[3px] w-[18px] rounded-[2px] bg-indigo" />
          <span className="block h-[3px] w-[18px] rounded-[2px] bg-indigo" />
          <span className="block h-[3px] w-[11px] rounded-[2px] bg-indigo-bar" />
        </span>
      )}
      {kind === "lang" && (
        <span className="font-display text-[13px] font-black text-lime-text">
          FR&nbsp;/&nbsp;EN
        </span>
      )}
    </div>
  );
}

export default function Landing({ locale }: { locale: Locale }) {
  const d = dictionaries[locale];
  const alt = otherLocale(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Lysomba",
    operatingSystem: "Android",
    applicationCategory: "LifestyleApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    publisher: { "@type": "Organization", name: "HKB Labs", url: HKB_URL },
    inLanguage: ["fr", "en"],
    url: `${SITE_URL}/${locale}`,
  };

  return (
    <div className="w-full overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[rgba(23,26,46,0.07)] bg-[rgba(251,251,253,0.85)] backdrop-blur-[14px]">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-x-[14px] gap-y-3 px-7 py-[14px]">
          <Image
            src={appIcon}
            alt="Lysomba"
            width={40}
            height={40}
            className="block rounded-[11px]"
            priority
          />
          <span className="font-display text-[22px] font-black text-ink">
            Lysomba
          </span>
          <nav className="ml-auto flex flex-wrap items-center justify-end gap-x-[22px] gap-y-3">
            <a
              href="#features"
              className="text-[15px] font-semibold text-ink-nav transition-colors hover:text-indigo"
            >
              {d.nav.features}
            </a>
            <a
              href="#how"
              className="text-[15px] font-semibold text-ink-nav transition-colors hover:text-indigo"
            >
              {d.nav.how}
            </a>
            <a
              href="#faq"
              className="text-[15px] font-semibold text-ink-nav transition-colors hover:text-indigo"
            >
              {d.nav.faq}
            </a>
            <LangSwitcher current={locale} />
            <a
              href="#download"
              className="inline-flex items-center rounded-full bg-indigo px-[22px] py-[11px] text-[15px] font-bold text-white shadow-pill transition-colors hover:bg-indigo-dark"
            >
              {d.nav.download}
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="striped relative overflow-hidden border-b border-[rgba(23,26,46,0.08)]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-end gap-12 px-7 pt-[88px]">
          <div className="min-w-0 pb-[110px]">
            <div className="mb-[26px] inline-flex items-center gap-[10px] rounded-full border border-[rgba(23,26,46,0.09)] bg-white py-2 pl-3 pr-4 shadow-card">
              <span className="block h-2 w-2 rounded-full bg-lime-dot" />
              <span className="text-[13.5px] font-semibold text-ink-700">
                {d.hero.badgePrefix}
                <a
                  href={HKB_URL}
                  target="_blank"
                  rel="noopener"
                  className="font-bold text-indigo hover:text-indigo-dark"
                >
                  {d.hero.badgeBrand}
                </a>
                {d.hero.badgeSuffix}
              </span>
            </div>
            <h1 className="m-0 mb-[22px] font-display text-[clamp(38px,7vw,64px)] font-black leading-[1.02]">
              {d.hero.titleLine1}
              <br />
              {d.hero.titleLine2Pre}
              <span className="text-indigo">{d.hero.titleAccent}</span>
              {d.hero.titleLine2Post}
            </h1>
            <p className="mb-[34px] max-w-[480px] text-[20px] leading-[1.55] text-ink-600">
              {d.hero.subtitle}
            </p>
            <div className="mb-[26px] flex flex-wrap gap-[14px]">
              <GooglePlayButton label={d.hero.ctaPrimary} />
              <IosButton label={d.hero.ctaSecondary} />
            </div>
            <div className="flex flex-wrap items-center gap-x-[22px] gap-y-[10px] text-[14px] font-semibold text-ink-500">
              {d.hero.microList.map((item, i) => (
                <span key={item} className="flex items-center gap-x-[22px]">
                  {i > 0 && (
                    <span aria-hidden className="opacity-40">
                      ·
                    </span>
                  )}
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="relative flex items-end justify-center">
            <div className="absolute bottom-[-40px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(75,87,216,0.16),transparent_66%)]" />
            <div className="animate-floaty absolute left-[-28px] top-[96px] z-[3] rounded-2xl border border-[rgba(23,26,46,0.07)] bg-white px-[18px] py-[14px] shadow-float">
              <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.09em] text-ink-400">
                {d.hero.floatingLabel}
              </div>
              <div className="font-display text-[24px] font-black text-indigo">
                {d.hero.floatingValue}
              </div>
            </div>
            <Image
              src={screenRayons}
              alt={d.hero.screenAlt}
              placeholder="blur"
              priority
              sizes="(max-width: 480px) 78vw, 330px"
              className="relative z-[2] block w-[min(330px,78vw)] rounded-[36px] shadow-shot-lg"
            />
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="bg-ink px-7 py-[26px] text-white">
        <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-x-[40px] gap-y-5">
          {d.proof.map((item) => (
            <span
              key={item}
              className="font-display text-[16px] font-bold text-white/55"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-[1180px] px-7 pb-10 pt-[104px]">
        <div className="mb-[56px] max-w-[640px]">
          <div className="mb-4 text-[12.5px] font-bold uppercase tracking-[0.14em] text-indigo">
            {d.features.eyebrow}
          </div>
          <h2 className="mb-[18px] text-[clamp(30px,4.5vw,46px)] font-black leading-[1.08]">
            {d.features.title}
          </h2>
          <p className="text-[18px] leading-[1.6] text-ink-600">
            {d.features.lead}
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[22px]">
          {d.features.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-[rgba(23,26,46,0.08)] bg-white p-8 transition-[transform,border-color] duration-150 hover:-translate-y-[3px] hover:border-indigo"
            >
              <FeatureIcon kind={card.icon} />
              <h3 className="mb-[10px] text-[21px] font-extrabold">
                {card.title}
              </h3>
              <p className="text-[15.5px] leading-[1.6] text-ink-600">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stores */}
      <section className="mx-auto max-w-[1180px] px-7 py-16">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-end gap-12 overflow-hidden rounded-[36px] bg-indigo-100 px-7 pt-16">
          <div className="min-w-0 pb-[76px] pl-10 pr-5">
            <div className="mb-4 text-[12.5px] font-bold uppercase tracking-[0.14em] text-indigo">
              {d.stores.eyebrow}
            </div>
            <h2 className="mb-5 text-[clamp(28px,4.2vw,42px)] font-black leading-[1.1]">
              {d.stores.title}
            </h2>
            <p className="mb-[30px] text-[17.5px] leading-[1.65] text-ink-600">
              {d.stores.lead}
            </p>
            <div className="flex flex-wrap gap-[10px]">
              {d.stores.chips.map((chip) => (
                <span
                  key={chip.label}
                  className={`rounded-full px-4 py-[9px] text-[14px] font-semibold ${
                    chip.active
                      ? "bg-indigo text-white"
                      : "border border-[rgba(23,26,46,0.09)] bg-white text-ink-700"
                  }`}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-end justify-center">
            <Image
              src={screenListes}
              alt={d.stores.screenAlt}
              placeholder="blur"
              sizes="(max-width: 480px) 78vw, 306px"
              className="block w-[min(306px,78vw)] translate-y-[6px] rounded-[34px] shadow-shot"
            />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="how" className="mx-auto max-w-[1180px] px-7 pb-24 pt-14">
        <h2 className="mb-[52px] text-center text-[clamp(28px,4.2vw,42px)] font-black">
          {d.steps.title}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[22px]">
          {d.steps.items.map((step, i) => {
            const bar = ["border-indigo", "border-lime-brand", "border-[rgba(23,26,46,0.15)]"][i];
            const num = ["text-indigo", "text-lime-text-alt", "text-ink"][i];
            return (
              <div key={step.num} className={`border-t-[3px] pt-[26px] ${bar}`}>
                <div className={`mb-3 font-display text-[15px] font-black ${num}`}>
                  {step.num}
                </div>
                <h3 className="mb-[10px] text-[22px] font-extrabold">
                  {step.title}
                </h3>
                <p className="text-[15.5px] leading-[1.6] text-ink-600">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="border-y border-[rgba(23,26,46,0.07)] bg-white"
      >
        <div className="mx-auto max-w-[900px] px-7 py-[88px]">
          <h2 className="mb-10 text-[clamp(27px,4vw,38px)] font-black">
            {d.faq.title}
          </h2>
          <div className="flex flex-col gap-2">
            {d.faq.items.map((item, i) => (
              <div
                key={item.q}
                className={`py-6 ${
                  i < d.faq.items.length - 1
                    ? "border-b border-[rgba(23,26,46,0.08)]"
                    : ""
                }`}
              >
                <h3 className="mb-2 text-[19px] font-extrabold">{item.q}</h3>
                <p className="text-[16px] leading-[1.6] text-ink-600">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="download"
        className="striped border-t border-[rgba(23,26,46,0.08)]"
      >
        <div className="mx-auto max-w-[900px] px-7 py-[100px] text-center">
          <Image
            src={appIcon}
            alt="Lysomba"
            width={78}
            height={78}
            className="mx-auto mb-[28px] rounded-[20px] shadow-[0_20px_40px_-16px_rgba(23,26,46,0.42)]"
          />
          <h2 className="mb-[18px] text-[clamp(32px,5.5vw,50px)] font-black leading-[1.06]">
            {d.downloadCta.titleLine1}
            <br />
            <span className="text-indigo">{d.downloadCta.titleAccent}</span>
          </h2>
          <p className="mx-auto mb-9 max-w-[520px] text-[19px] leading-[1.6] text-ink-600">
            {d.downloadCta.lead}
          </p>
          <div className="flex flex-wrap justify-center gap-[14px]">
            <GooglePlayButton label={d.downloadCta.ctaPrimary} size="lg" />
            <IosButton label={d.downloadCta.ctaSecondary} size="lg" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-white/60">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-x-8 gap-y-5 px-7 py-10">
          <div className="flex items-center gap-3">
            <Image
              src={appIcon}
              alt=""
              width={30}
              height={30}
              className="block rounded-[9px]"
            />
            <span className="font-display text-[17px] font-black text-white">
              Lysomba
            </span>
          </div>
          <span className="text-[14px]">
            {d.footer.madePrefix}
            <a
              href={HKB_URL}
              target="_blank"
              rel="noopener"
              className="font-bold text-lime-brand hover:text-lime-hover"
            >
              {d.footer.madeBrand}
            </a>
            {d.footer.madeSuffix}
          </span>
          <div className="ml-auto flex flex-wrap gap-x-[26px] gap-y-[14px] text-[14px]">
            <a
              href={HKB_PRIVACY_URL}
              target="_blank"
              rel="noopener"
              className="font-semibold text-white/60 hover:text-lime-brand"
            >
              {d.footer.privacy}
            </a>
            <a
              href={`/${locale}/legal`}
              className="font-semibold text-white/60 hover:text-lime-brand"
            >
              {d.footer.legal}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-white/60 hover:text-lime-brand"
            >
              {d.footer.contact}
            </a>
          </div>
          <a
            href={`/${alt}`}
            hrefLang={alt}
            className="sr-only"
          >
            {alt === "fr" ? "Version française" : "English version"}
          </a>
        </div>
      </footer>
    </div>
  );
}
