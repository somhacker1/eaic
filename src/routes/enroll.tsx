import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ClipboardList, FileCheck2, Mail, MapPin, Phone, Send, UserPlus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/enroll")({
  head: () => ({
    meta: [
      { title: "Enroll Now — Eastern Africa International College" },
      {
        name: "description",
        content:
          "Apply to Eastern Africa International College in Jigjiga. Admission requirements, application steps and an online enrollment form for Master's, Degree and Diploma programs.",
      },
      { property: "og:title", content: "Enroll Now — Eastern Africa International College" },
      {
        property: "og:description",
        content: "Admission requirements and online application for our Jigjiga campus programs.",
      },
    ],
  }),
  component: Enroll,
});

const steps = [
  { title: "Submit the form", body: "Share your details and the program you want to join.", icon: ClipboardList, tint: "text-brand-sky" },
  { title: "Document review", body: "Send your transcripts and ID to our admissions office.", icon: FileCheck2, tint: "text-brand-green" },
  { title: "Admission letter", body: "Receive your offer and registration instructions.", icon: UserPlus, tint: "text-brand-royal" },
  { title: "Registration", body: "Complete payment and start your first semester.", icon: CheckCircle2, tint: "text-brand-amber" },
];

const requirements = [
  "Master's: Bachelor's degree from an accredited institution + official transcript",
  "Degree: Ethiopian preparatory (Grade 12) certificate with a passing entrance result",
  "Diploma: Grade 10 / Grade 12 national certificate",
  "Two passport-size photographs and a copy of a valid ID",
  "Completed application form and registration fee receipt",
];

const programOptions = [
  "MBA — Master of Business Administration",
  "MPH — Master of Public Health",
  "MSc in Information Technology",
  "MSc in Medical Laboratory Science",
  "LL.M — Master of Laws",
  "BA in Management",
  "BA in Accounting and Finance",
  "BSc in Information Technology",
  "BSc in Computer Science",
  "BSc in Public Health",
  "BSc in Nursing",
  "BSc in Medical Laboratory Science",
  "BSc in Civil Engineering",
  "LL.B — Bachelor of Laws",
  "Diploma programs (Level IV)",
];

function Enroll() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 mesh-bg" />
          <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Enroll <span className="text-gradient-brand">Now</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Admissions for the 2026/27 academic year are open. Complete the form below and our
            admissions office in Jigjiga will contact you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="glass-panel lift-hover p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-xl bg-secondary p-3">
                  <s.icon className={`h-6 w-6 ${s.tint}`} />
                </span>
                <span className="font-display text-3xl font-bold text-border">{i + 1}</span>
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel p-7">
            <h2 className="font-display text-xl font-bold">Application form</h2>
            {submitted ? (
              <div className="mt-6 rounded-xl bg-accent p-6 text-accent-foreground">
                <CheckCircle2 className="h-7 w-7" />
                <p className="mt-3 font-semibold">Application received</p>
                <p className="mt-1 text-sm">
                  Thank you. Our admissions team will contact you within two working days. For urgent
                  enquiries call +251 91 507 4900.
                </p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                  toast.success("Application submitted — we'll be in touch soon.");
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="font-medium">Full name</span>
                    <input
                      required
                      name="name"
                      className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium">Phone number</span>
                    <input
                      required
                      name="phone"
                      type="tel"
                      className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                    />
                  </label>
                </div>
                <label className="block text-sm">
                  <span className="font-medium">Email address</span>
                  <input
                    required
                    name="email"
                    type="email"
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
                <label className="block text-sm">
                  <span className="font-medium">Program of interest</span>
                  <select
                    required
                    name="program"
                    defaultValue=""
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="" disabled>
                      Select a program
                    </option>
                    {programOptions.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm">
                  <span className="font-medium">Message (optional)</span>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
                >
                  <Send className="h-4 w-4" /> Submit application
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="glass-panel lift-hover p-7">
              <h2 className="font-display text-xl font-bold">Admission requirements</h2>
              <ul className="mt-5 space-y-3">
                {requirements.map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-panel lift-hover p-7">
              <h2 className="font-display text-xl font-bold">Visit or call us</h2>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-rose" />
                  Jigjiga Kebele 06, Around EX IRC Building, Jijiga, Ethiopia
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-brand-sky" />
                  <a href="tel:+251915074900" className="hover:text-foreground">
                    +251 91 507 4900
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-brand-violet" />
                  <a href="mailto:easternafrica.jigjigacampus@gmail.com" className="break-all hover:text-foreground">
                    easternafrica.jigjigacampus@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
