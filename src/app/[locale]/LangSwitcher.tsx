"use client";

import { useRouter } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/lib/i18n";

export default function LangSwitcher({ current }: { current: Locale }) {
  const router = useRouter();

  function choose(l: Locale) {
    if (l === current) return;
    try {
      document.cookie = `lysomba.lang=${l}; path=/; max-age=31536000; samesite=lax`;
    } catch {}
    router.push(`/${l}`);
  }

  return (
    <div
      className="flex items-center rounded-full border border-[rgba(75,87,216,0.16)] bg-indigo-50 p-[3px]"
      role="group"
      aria-label="Language"
    >
      {locales.map((l) => {
        const active = l === current;
        return (
          <button
            key={l}
            type="button"
            onClick={() => choose(l)}
            aria-pressed={active}
            className={`cursor-pointer rounded-full px-[13px] py-[7px] font-display text-[13.5px] font-black tracking-[0.03em] transition-colors ${
              active ? "bg-indigo text-white" : "bg-transparent text-ink-tab"
            }`}
          >
            {localeLabels[l]}
          </button>
        );
      })}
    </div>
  );
}
