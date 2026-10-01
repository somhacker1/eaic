import { createFileRoute } from "@tanstack/react-router";

import { useI18n } from "@/lib/i18n";
import { Compass, Eye, Heart, Library, MapPin, Target, Users2 } from "lucide-react";


const graduationBatch = "/images/graduation-batch.jpg";
const registrationOpen = "/images/registration-open.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Eastern Africa International College" },
      {
        name: "description",
        content:
          "Learn about Eastern Africa International College in Jigjiga: our mission, vision, values, campus facilities and role in higher education across Ethiopia and the Somali Region.",
      },
      { property: "og:title", content: "About Eastern Africa International College" },
      {
        property: "og:description",
        content:
          "Our mission, vision, values and campus in Jigjiga, Ethiopia. Our Difference is Quality.",
      },
    ],
  }),
  component: About,
});

const pillars = [
  {
    titleKey: "about.mission",
    body: "To deliver accessible, high-quality higher education that equips students of Ethiopia and the Somali Region with professional skills and ethical leadership.",
    icon: Target,
    tint: "text-brand-royal",
  },
  {
    titleKey: "about.vision",
    body: "To be recognised as the leading private college in Eastern Africa for academic excellence, research and community impact.",
    icon: Eye,
    tint: "text-brand-sky",
  },
  {
    titleKey: "about.values",
    body: "Quality first, integrity, inclusiveness, respect for local culture, and lifelong learning for every graduate we send into the workforce.",
    icon: Heart,
    tint: "text-brand-rose",
  },
];

const facilities = [
  { title: "Modern lecture halls", icon: Users2, tint: "text-brand-green" },
  { title: "Digital library & e-resources", icon: Library, tint: "text-brand-sky" },
  { title: "Medical & science laboratories", icon: Compass, tint: "text-brand-violet" },
  { title: "Central Jigjiga campus", icon: MapPin, tint: "text-brand-amber" },
];

function About() {
  const { t } = useI18n();

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 mesh-bg" />
          <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <h1 className="max-w-3xl text-4xl font-extrabold sm:text-5xl">
            {t("about.title")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            {t("about.lead")}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <img
            src={registrationOpen}
            alt="Eastern Africa International College campus in Jigjiga"
            width={1600}
            height={1008}
            loading="lazy"
            className="rounded-2xl bg-secondary object-contain shadow-lift"
          />
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Who we are</h2>
            <p className="mt-4 text-muted-foreground">
              Founded to widen access to quality higher education in the Somali Region, the college
              has grown into a multi-faculty institution offering postgraduate, undergraduate and
              diploma programs. Our academic staff combine national accreditation standards with
              practical, industry-focused teaching.
            </p>
            <p className="mt-4 text-muted-foreground">
              Thousands of graduates now serve in hospitals, laboratories, government offices,
              schools, banks and technology companies across Ethiopia and beyond — a direct result of
              our founding promise: <span className="font-semibold text-brand-green">Our Difference is Quality.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.titleKey} className="glass-panel lift-hover p-7">
              <span className="inline-flex rounded-xl bg-secondary p-3">
                <p.icon className={`h-6 w-6 ${p.tint}`} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{t(p.titleKey)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">{t("about.campus")}</h2>
            <ul className="mt-8 space-y-4">
              {facilities.map((f) => (
                <li key={f.title} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                  <f.icon className={`h-6 w-6 ${f.tint}`} />
                  <span className="text-sm font-medium">{f.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={graduationBatch}
            alt="Graduates of Eastern Africa International College"
            width={1200}
            height={800}
            loading="lazy"
            className="rounded-2xl bg-secondary object-contain shadow-lift"
          />
        </div>
      </section>
    </>
  );
}
