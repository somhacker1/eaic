import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/eaic-logo-transparent.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <img
            src={logo.url}
            alt="Eastern Africa International College logo"
            width={260}
            height={160}
            loading="lazy"
            className="h-24 w-auto object-contain sm:h-28"
          />
          <h2 className="mt-4 font-display text-lg font-bold">Eastern Africa International College</h2>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            A leading centre of academic excellence in Jigjiga, serving Ethiopia and the Somali
            Region with quality higher education.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-green">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/programs", label: "Programs" },
              { to: "/enroll", label: "Enroll Now" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-sky">Contact</h3>
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
      <div className="border-t border-border px-4 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Eastern Africa International College. All rights reserved.
      </div>
    </footer>
  );
}
