import { Check, Globe, Languages } from "lucide-react";
import { useState } from "react";

import { LANGUAGES, useI18n, type LangCode } from "@/lib/i18n";
import logo from "@/assets/eaic-logo-transparent.png.asset.json";

export function LanguageGate() {
  const { lang, pickerOpen, confirm, closePicker, chosen, t } = useI18n();
  const [selected, setSelected] = useState<LangCode>(lang);

  if (!pickerOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-background/45 px-4 py-10 backdrop-blur-2xl"
      role="dialog"
      aria-modal="true"
      aria-label={t("gate.title")}
    >
      <div className="glass-panel relative w-full max-w-2xl p-6 sm:p-9 ring-glow animate-fade-up">
        <div className="flex items-center gap-4">
          <img
            src={logo.url}
            alt="Eastern Africa International College logo"
            width={160}
            height={100}
            className="h-16 w-auto object-contain"
          />
          <div>
            <h2 className="font-display text-xl font-bold sm:text-2xl">{t("gate.title")}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t("gate.subtitle")}</p>
          </div>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {LANGUAGES.map((l) => {
            const active = selected === l.code;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => setSelected(l.code)}
                className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition-all ${
                  active
                    ? "border-transparent bg-gradient-brand text-primary-foreground shadow-lift"
                    : "border-border bg-card/70 hover:bg-secondary"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl">{l.flag}</span>
                  <span>
                    <span className="block text-sm font-semibold">{l.native}</span>
                    <span
                      className={`block text-xs ${active ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                    >
                      {l.label}
                      {l.code === "so" ? " · default" : ""}
                    </span>
                  </span>
                </span>
                {active ? <Check className="h-5 w-5" /> : <Globe className="h-4 w-4 text-brand-sky" />}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap justify-end gap-3">
          {chosen && (
            <button
              type="button"
              onClick={closePicker}
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
            >
              ✕
            </button>
          )}
          <button
            type="button"
            onClick={() => confirm(selected)}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.04]"
          >
            <Languages className="h-4 w-4" />
            {t("gate.continue")}
          </button>
        </div>
      </div>
    </div>
  );
}

export function TranslateButton() {
  const { openPicker, lang, t } = useI18n();
  const current = LANGUAGES.find((l) => l.code === lang);

  return (
    <button
      type="button"
      onClick={openPicker}
      aria-label={t("gate.button")}
      className="glow-pulse fixed bottom-5 right-5 z-[90] inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.06]"
    >
      <Languages className="h-5 w-5" />
      <span className="hidden sm:inline">{t("gate.button")}</span>
      <span className="rounded-full bg-black/15 px-2 py-0.5 text-xs uppercase">{current?.code}</span>
    </button>
  );
}
