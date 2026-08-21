import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Building2,
  CalendarDays,
  FlaskConical,
  GraduationCap,
  Globe2,
  HandHeart,
  Landmark,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import campusHero from "@/assets/campus-hero.jpg";
import graduation from "@/assets/graduation.jpg";
import lab from "@/assets/lab.jpg";
import itStudents from "@/assets/it-students.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eastern Africa International College — Jigjiga, Ethiopia" },
      {
        name: "description",
        content:
          "Eastern Africa International College in Jigjiga offers accredited Master's, Degree and Diploma programs in Business, Health, IT, Science, Engineering and Law. Our Difference is Quality.",
      },
      { property: "og:title", content: "Eastern Africa International College — Jigjiga, Ethiopia" },
      {
        property: "og:description",
        content:
          "Accredited Master's, Degree and Diploma programs in Jigjiga, Ethiopia. Our Difference is Quality.",
      },
    ],
  }),
  component: Home,
});

const partners = [
  {
    name: "Ethiopian Ministry of Education",
    role: "Accreditation & academic standards",
    icon: Landmark,
    tint: "text-brand-royal",
  },
  {
    name: "Windle Trust International",
    role: "Scholarships & refugee education",
    icon: HandHeart,
    tint: "text-brand-green",
  },
  {
    name: "Somali Region Education Bureau",
    role: "Regional academic partnership",
    icon: Building2,
    tint: "text-brand-sky",
  },
  {
    name: "Higher Education Relevance & Quality Agency",
    role: "Program quality assurance",
    icon: ShieldCheck,
    tint: "text-brand-amber",
  },
];

const certificates = [
  {
    title: "Master of Business Administration (MBA)",
    level: "Postgraduate",
    detail: "Two-year accredited MBA with specialisation in Management and Finance.",
    icon: ScrollText,
    tint: "text-brand-royal",
  },
  {
    title: "Master of Public Health (MPH)",
    level: "Postgraduate",
    detail: "Advanced training in epidemiology, health policy and community health.",
    icon: Award,
    tint: "text-brand-green",
  },
  {
    title: "Master of Science in Information Technology (MSc IT)",
    level: "Postgraduate",
    detail: "Software engineering, data systems and network security track.",
    icon: Sparkles,
    tint: "text-brand-sky",
  },
];

const news = [
  {
    date: "August 2026",
    title: "2026/27 Academic Year Registration Now Open",
    body: "Applications for Master's, Degree and Diploma programs are open at the Jigjiga campus.",
    image: campusHero,
    tag: "Admissions",
  },
  {
    date: "July 2026",
    title: "9th Graduation Ceremony Celebrates 480 Graduates",
    body: "Graduates from Business, Health and IT faculties received their official credentials.",
    image: graduation,
    tag: "Campus Life",
  },
  {
    date: "June 2026",
    title: "New Medical Laboratory Complex Inaugurated",
    body: "A modern laboratory expands practical training for Health Science students.",
    image: lab,
    tag: "Facilities",
  },
];

const stats = [
  { value: "4,500+", label: "Students enrolled", icon: Users, tint: "text-brand-sky" },
  { value: "18", label: "Accredited programs", icon: BookOpen, tint: "text-brand-green" },
  { value: "7", label: "Faculties", icon: FlaskConical, tint: "text-brand-violet" },
  { value: "9", label: "Graduation classes", icon: GraduationCap, tint: "text-brand-amber" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={campusHero}
          alt="Students walking on the Eastern Africa International College campus"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-25 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-soft" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-green">
            <Globe2 className="h-4 w-4" /> Jigjiga, Ethiopia
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Eastern Africa <span className="text-gradient-brand">International College</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            One of the leading centres of academic excellence in Ethiopia and the Somali Region —
            offering accredited postgraduate, undergraduate and diploma education. Our Difference is
            Quality.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/enroll"
              className="rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.03]"
            >
              Enroll Now
            </Link>
            <Link
              to="/programs"
              className="rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Explore Programs
            </Link>
          </div>

          <dl className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="card-surface p-5">
                <s.icon className={`h-7 w-7 ${s.tint}`} />
                <dt className="mt-3 font-display text-2xl font-bold">{s.value}</dt>
                <dd className="text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Partners */}
      <section className="border-y border-border bg-card/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">
            Our Partners &amp; Accreditors
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
            We work with national and international institutions to keep our academic standards high.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p) => (
              <div key={p.name} className="card-surface flex flex-col items-start gap-3 p-6">
                <span className="rounded-xl bg-secondary p-3">
                  <p.icon className={`h-6 w-6 ${p.tint}`} />
                </span>
                <h3 className="font-display text-base font-semibold">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master certificates */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">Master's Certificates</h2>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                Official postgraduate credentials awarded by Eastern Africa International College.
              </p>
            </div>
            <Link to="/programs" className="text-sm font-semibold text-brand-sky hover:underline">
              View all programs →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {certificates.map((c) => (
              <article key={c.title} className="card-surface overflow-hidden">
                <div className="bg-gradient-brand p-5">
                  <c.icon className="h-8 w-8 text-primary-foreground" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground/85">
                    {c.level}
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="border-t border-border bg-card/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">University News</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Announcements, events and updates from the Jigjiga campus.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {news.map((n) => (
              <article key={n.title} className="card-surface overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-accent px-2.5 py-1 font-semibold text-accent-foreground">
                      {n.tag}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5 text-brand-rose" /> {n.date}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold">{n.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{n.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="card-surface grid items-center gap-8 overflow-hidden md:grid-cols-2">
            <img
              src={itStudents}
              alt="Students working in the college IT lab"
              width={1200}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="p-8 lg:p-12">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Ready to join the class of 2027?
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Applications are open for all faculties. Our admissions team in Jigjiga is ready to
                guide you through the process.
              </p>
              <Link
                to="/enroll"
                className="mt-7 inline-flex rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
              >
                Start your application
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
