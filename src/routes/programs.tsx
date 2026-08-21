import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase,
  Cpu,
  FlaskConical,
  Gavel,
  GraduationCap,
  HeartPulse,
  Microscope,
  ScrollText,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs & Faculties — Eastern Africa International College" },
      {
        name: "description",
        content:
          "Master's, Bachelor's Degree and Diploma programs at Eastern Africa International College: Business, Health Sciences, IT, Natural Science, Medical Laboratory, Engineering and Law.",
      },
      { property: "og:title", content: "Programs & Faculties — Eastern Africa International College" },
      {
        property: "og:description",
        content:
          "Explore accredited Master's, Degree and Diploma programs across six faculties in Jigjiga, Ethiopia.",
      },
    ],
  }),
  component: Programs,
});

const faculties = [
  {
    name: "Faculty of Business & Economics",
    icon: Briefcase,
    tint: "text-brand-royal",
    majors: ["Accounting & Finance", "Management", "Marketing Management", "Economics"],
  },
  {
    name: "Faculty of Health Sciences",
    icon: HeartPulse,
    tint: "text-brand-rose",
    majors: ["Public Health", "Nursing", "Midwifery", "Pharmacy"],
  },
  {
    name: "Faculty of Computing & IT",
    icon: Cpu,
    tint: "text-brand-sky",
    majors: ["Information Technology", "Computer Science", "Software Engineering", "Networking"],
  },
  {
    name: "Faculty of Natural & Applied Science",
    icon: FlaskConical,
    tint: "text-brand-green",
    majors: ["Biology", "Chemistry", "Statistics", "Environmental Science"],
  },
  {
    name: "Faculty of Medical Laboratory Science",
    icon: Microscope,
    tint: "text-brand-violet",
    majors: ["Medical Laboratory Technology", "Clinical Chemistry", "Hematology", "Microbiology"],
  },
  {
    name: "Faculty of Engineering & Technology",
    icon: Wrench,
    tint: "text-brand-amber",
    majors: ["Civil Engineering", "Electrical Engineering", "Construction Technology", "Surveying"],
  },
  {
    name: "Faculty of Law & Governance",
    icon: Gavel,
    tint: "text-brand-royal",
    majors: ["Law (LL.B)", "Public Administration", "Governance & Development Studies"],
  },
];

const masters = [
  { name: "Master of Business Administration (MBA)", note: "Management · Finance · Marketing", years: "2 years" },
  { name: "Master of Public Health (MPH)", note: "Epidemiology · Health Policy", years: "2 years" },
  { name: "Master of Science in Information Technology (MSc in IT)", note: "Data Systems · Security", years: "2 years" },
  { name: "Master of Science in Medical Laboratory Science (MSc in MLS)", note: "Clinical diagnostics", years: "2 years" },
  { name: "Master of Arts in Accounting & Finance (MA in Accounting and Finance)", note: "Auditing · Corporate finance", years: "2 years" },
  { name: "Master of Laws (LL.M)", note: "Commercial & Constitutional Law", years: "2 years" },
];

const degrees = [
  { name: "Bachelor of Arts in Management (BA in Management)", years: "3 years" },
  { name: "Bachelor of Arts in Accounting & Finance (BA in Accounting and Finance)", years: "3 years" },
  { name: "Bachelor of Science in Information Technology (BSc in IT)", years: "3 years" },
  { name: "Bachelor of Science in Computer Science (BSc in Computer Science)", years: "3 years" },
  { name: "Bachelor of Science in Public Health (BSc in Public Health)", years: "4 years" },
  { name: "Bachelor of Science in Nursing (BSc in Nursing)", years: "4 years" },
  { name: "Bachelor of Science in Medical Laboratory Science (BSc in MLS)", years: "4 years" },
  { name: "Bachelor of Science in Civil Engineering (BSc in Civil Engineering)", years: "5 years" },
  { name: "Bachelor of Laws (LL.B)", years: "4 years" },
];

const diplomas = [
  { name: "Diploma (Level IV) in Accounting", years: "2 years" },
  { name: "Diploma (Level IV) in Information Technology Support Service", years: "2 years" },
  { name: "Diploma (Level IV) in Nursing", years: "3 years" },
  { name: "Diploma (Level IV) in Medical Laboratory Technology", years: "3 years" },
  { name: "Diploma (Level IV) in Pharmacy", years: "3 years" },
  { name: "Diploma (Level IV) in Surveying Technology", years: "2 years" },
];

function LevelBlock({
  title,
  icon: Icon,
  tint,
  items,
}: {
  title: string;
  icon: typeof GraduationCap;
  tint: string;
  items: { name: string; note?: string; years: string }[];
}) {
  return (
    <div className="glass-panel lift-hover p-7">
      <div className="flex items-center gap-3">
        <span className="rounded-xl bg-secondary p-3">
          <Icon className={`h-6 w-6 ${tint}`} />
        </span>
        <h3 className="font-display text-xl font-bold">{title}</h3>
      </div>
      <ul className="mt-6 space-y-4">
        {items.map((i) => (
          <li key={i.name} className="border-b border-border pb-4 last:border-0 last:pb-0">
            <p className="text-sm font-semibold">{i.name}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {i.note ? `${i.note} · ` : ""}
              {i.years}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Programs() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 mesh-bg" />
          <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Faculties &amp; <span className="text-gradient-brand">Programs</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Accredited Master's, Bachelor's Degree and Diploma programs across seven faculties —
            taught by qualified academic staff at our Jigjiga campus.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Our Faculties</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {faculties.map((f) => (
              <div key={f.name} className="glass-panel lift-hover p-6">
                <span className="inline-flex rounded-xl bg-secondary p-3">
                  <f.icon className={`h-6 w-6 ${f.tint}`} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold">{f.name}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {f.majors.map((m) => (
                    <li
                      key={m}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Qualifications we award</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Official credential names as they appear on graduate certificates and transcripts.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <LevelBlock title="Master's Degrees" icon={ScrollText} tint="text-brand-royal" items={masters} />
            <LevelBlock title="Bachelor's Degrees" icon={GraduationCap} tint="text-brand-sky" items={degrees} />
            <LevelBlock title="Diplomas" icon={FlaskConical} tint="text-brand-green" items={diplomas} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-bold">Found your program?</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Submit your application and our admissions office will contact you within two working days.
          </p>
          <Link
            to="/enroll"
            className="mt-7 inline-flex rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </>
  );
}
