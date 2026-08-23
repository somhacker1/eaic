import { Link } from "@tanstack/react-router";
import { Languages, Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/eaic-logo-transparent.png.asset.json";
import { LANGUAGES, useI18n } from "@/lib/i18n";

const nav = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/programs", key: "nav.programs" },
  { to: "/enroll", key: "nav.enroll" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t, lang, openPicker } = useI18n();
  const current = LANGUAGES.find((l) => l.code === lang);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="Eastern Africa International College logo"
            width={200}
            height={124}
            className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-24"
          />
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold sm:text-lg">
              Eastern Africa International College
            </span>
            <span className="block text-xs font-medium tracking-wide text-brand-green">
              {t("brand.tagline")}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
              activeProps={{
                className:
                  "rounded-full px-4 py-2 text-sm font-semibold bg-secondary text-foreground ring-1 ring-border",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openPicker}
            aria-label={t("gate.button")}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold transition-colors hover:bg-secondary"
          >
            <Languages className="h-4 w-4 text-brand-sky" />
            <span className="hidden sm:inline">{current?.native}</span>
          </button>
          <Link
            to="/enroll"
            className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.04] sm:inline-flex"
          >
            {t("nav.apply")}
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-4 py-3 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
