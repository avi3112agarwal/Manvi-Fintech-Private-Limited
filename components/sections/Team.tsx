import { Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TEAM = [
  {
    name: "Umakant Chaudhary",
    role: "Director",
    bio: "Strategic banking partnerships and large-ticket lending mandates.",
    initials: "UC",
  },
  {
    name: "Vanita Agarwal",
    role: "Director",
    bio: "Credit, compliance and customer relationships across loan products.",
    initials: "VA",
  },
  {
    name: "Himanshu Periwal",
    role: "Strategic Partnerships",
    bio: "Lender relationships and structuring for high-value mandates.",
    initials: "HP",
  },
  {
    name: "Nayan Pardesi",
    role: "Business Development",
    bio: "SME and enterprise relationships, long-term partnerships.",
    initials: "NP",
  },
  {
    name: "Ashutosh Agarwal",
    role: "Credit & Risk",
    bio: "Credit assessment, lender alignment, structuring.",
    initials: "AA",
  },
  {
    name: "Natasha Jain",
    role: "Customer Relations",
    bio: "Application onboarding and post-disbursal customer support.",
    initials: "NJ",
  },
];

export function Team() {
  return (
    <section id="team" className="section bg-ink-50/60 border-y border-ink-100">
      <Container>
        <SectionHeading
          eyebrow="Leadership"
          title={
            <>
              The people behind{" "}
              <span className="text-gradient">your loan</span>
            </>
          }
          description="Decades of combined experience in lending, credit and customer relationships — working for you."
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-5 hover:border-brand-200 hover:shadow-soft transition sm:p-6"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-brand-gradient" />
                <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-6xl font-bold text-white/95">
                    {m.initials}
                  </span>
                </div>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                {m.name}
              </h3>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                {m.role}
              </div>
              <p className="mt-3 text-sm text-ink-600 leading-relaxed">
                {m.bio}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <a
                  href="#"
                  aria-label={`${m.name} LinkedIn`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink-200 text-ink-600 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 transition"
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href="#contact"
                  aria-label={`Email ${m.name}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink-200 text-ink-600 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 transition"
                >
                  <Mail size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
