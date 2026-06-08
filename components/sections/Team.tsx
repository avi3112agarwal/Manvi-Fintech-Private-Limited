import { Mail, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Person = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

const DIRECTORS: Person[] = [
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
];

const TEAM: Person[] = [
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
  {
    name: "Ramkishan Chaudhary",
    role: "Operations",
    bio: "Loan processing and lender coordination across products.",
    initials: "RC",
  },
  {
    name: "Rajesh Agarwal",
    role: "Credit Manager",
    bio: "Document review, eligibility checks and credit underwriting.",
    initials: "RA",
  },
  {
    name: "Sandhya Jagiwala",
    role: "Customer Success",
    bio: "Customer onboarding, KYC and post-sanction follow-through.",
    initials: "SJ",
  },
];

export function Team() {
  return (
    <section id="team" className="section bg-ink-50/60 border-y border-ink-100">
      <Container>
        <SectionHeading
          eyebrow="Leadership & team"
          title={
            <>
              The people behind{" "}
              <span className="text-gradient">your loan</span>
            </>
          }
          description="Decades of combined experience in lending, credit and customer relationships — working for you."
        />

        {/* Directors tier */}
        <div className="mt-10 sm:mt-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
              <Star size={11} className="fill-brand-700" />
              Directors
            </span>
            <span className="h-px flex-1 bg-ink-200" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:mx-auto lg:max-w-4xl">
            {DIRECTORS.map((m) => (
              <PersonCard key={m.name} person={m} featured />
            ))}
          </div>
        </div>

        {/* Team tier */}
        <div className="mt-12 sm:mt-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-700">
              Team
            </span>
            <span className="h-px flex-1 bg-ink-200" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {TEAM.map((m) => (
              <PersonCard key={m.name} person={m} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function PersonCard({ person, featured = false }: { person: Person; featured?: boolean }) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl border bg-white transition hover:shadow-soft",
        featured
          ? "border-brand-200/70 p-5 sm:p-6 ring-1 ring-inset ring-brand-100/50"
          : "border-ink-100 p-4 hover:border-brand-200 sm:p-5",
      ].join(" ")}
    >
      <div className="flex items-center gap-4">
        <div
          className={[
            "relative flex-none overflow-hidden rounded-xl",
            featured ? "h-20 w-20 sm:h-24 sm:w-24" : "h-14 w-14",
          ].join(" ")}
        >
          <div className="absolute inset-0 bg-brand-gradient" />
          <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 grid place-items-center">
            <span
              className={[
                "font-display font-bold text-white/95",
                featured ? "text-2xl sm:text-3xl" : "text-base",
              ].join(" ")}
            >
              {person.initials}
            </span>
          </div>
        </div>

        <div className="min-w-0">
          <h3
            className={[
              "font-display font-semibold text-ink-900 leading-tight",
              featured ? "text-lg sm:text-xl" : "text-[15px]",
            ].join(" ")}
          >
            {person.name}
          </h3>
          <div
            className={[
              "mt-0.5 font-semibold uppercase tracking-wider text-brand-700",
              featured ? "text-xs" : "text-[10px]",
            ].join(" ")}
          >
            {person.role}
          </div>
        </div>
      </div>

      <p
        className={[
          "mt-4 leading-relaxed text-ink-600",
          featured ? "text-sm" : "text-xs",
        ].join(" ")}
      >
        {person.bio}
      </p>

      <div className="mt-4 flex items-center gap-2">
        <a
          href="#contact"
          aria-label={`Email ${person.name}`}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
        >
          <Mail size={14} />
        </a>
      </div>
    </div>
  );
}
