import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <img
            src="/images/eaic-logo-transparent.png"
            alt="Eastern Africa International College logo"
            width={280}
            height={175}
            loading="lazy"
            className="h-28 w-auto object-contain sm:h-32"
          />
          <h2 className="mt-4 font-display text-lg font-bold">Eastern Africa International College</h2>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">{t("footer.about")}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            {t("footer.explore")}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/", key: "nav.home" },
              { to: "/about", key: "nav.about" },
              { to: "/programs", key: "nav.programs" },
              { to: "/enroll", key: "nav.enroll" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-foreground">
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-sky">
            {t("footer.contact")}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-rose" />
              Jigjiga Kebele 06, Around EX IRC Building, Jijiga, Ethiopia
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-brand-green" />
              <a href="tel:+251915074900" className="hover:text-foreground">
                +251 91 507 4900
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-brand-sky" />
              <a href="mailto:easternafrica.jigjigacampus@gmail.com" className="break-all hover:text-foreground">
                easternafrica.jigjigacampus@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-4 py-8 text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Eastern Africa International College. {t("footer.rights")}
        </p>
        <a
          href="https://fikrado2.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-3 inline-flex items-center justify-center gap-2.5 rounded-full border border-border bg-card/60 px-4 py-2 transition-all hover:border-brand-amber/60"
        >
          <img
            src="/images/fikrado-logo.png"
            alt="FIKRADO SECURITY logo"
            width={36}
            height={36}
            loading="lazy"
            className="h-9 w-auto rounded-sm object-contain glow-pulse"
          />
          <span className="text-base">
            Powered by{" "}
            <span className="font-bold tracking-wide text-gradient-brand">FIKRADO SECURITY</span>
          </span>
        </a>
      </div>
    </footer>
  );
}
