import {
  Briefcase,
  Home,
  Landmark,
  Banknote,
  Cog,
  Factory,
  Car,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Home,
    title: "Home Loan",
    desc: "Finance your dream home with competitive rates and expert guidance.",
    benefits: ["Starting from 7%* p.a.", "Tenure up to 30 years", "Up to 90% LTV"],
  },
  {
    icon: Briefcase,
    title: "Unsecured Business Loan",
    desc: "Collateral-free funding to grow your business — no upper cap on loan amount.",
    benefits: [
      "Lower interest rates",
      "NIL foreclosure charges",
      "No maximum loan amount",
    ],
  },
  {
    icon: Landmark,
    title: "Loan Against Property",
    desc: "Unlock the value of your residential or commercial property without selling.",
    benefits: [
      "Lower interest rates",
      "NIL foreclosure charges",
      "No maximum loan amount",
    ],
  },
  {
    icon: Banknote,
    title: "CC / OD Facility",
    desc: "Working capital limits — unsecured under CGTMSE as well as secured options.",
    benefits: ["Unsecured under CGTMSE", "Secured CC / OD", "Renewable annually"],
  },
  {
    icon: Cog,
    title: "Machinery Loan",
    desc: "Finance new and old machines or equipment for business expansion.",
    benefits: ["New & old machines", "CGTMSE-backed schemes", "Up to 90% funding"],
  },
  {
    icon: Factory,
    title: "Industrial Plot Purchase",
    desc: "Purchase industrial land in GIDC and approved zones with flexible terms.",
    benefits: ["GIDC approved", "Long tenure", "Customised EMI"],
  },
  {
    icon: Car,
    title: "Car Loan — New & Used",
    desc: "Quick approvals for new cars as well as used-car finance, with attractive rates.",
    benefits: [
      "New car loans",
      "Used car loans",
      "Up to 100% on-road · low interest",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="section">
      <Container>
        <SectionHeading
          eyebrow="Loan products"
          title={
            <>
              One partner for{" "}
              <span className="text-gradient">every loan need</span>
            </>
          }
          description="From your first home loan to a multi-crore industrial acquisition — every product, matched to the right lender."
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((it, i) => (
            <a
              href="#contact"
              key={it.title}
              className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 transition hover:border-brand-300 hover:shadow-soft sm:p-7"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white sm:h-12 sm:w-12">
                  <it.icon size={20} />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-400">
                  0{i + 1}
                </span>
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-ink-900 sm:text-xl">
                {it.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {it.desc}
              </p>

              <ul className="mt-5 space-y-1.5 border-t border-ink-100 pt-4">
                {it.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-[12.5px] text-ink-700"
                  >
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2.5">
                Apply now <ArrowRight size={14} />
              </div>
            </a>
          ))}

          {/* Inline CTA card — institutional brand-gradient block */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-ink-900 p-6 text-white sm:p-7">
            <div className="pointer-events-none absolute -right-16 -top-16 hidden h-44 w-44 rounded-full bg-brand-700/40 blur-3xl lg:block" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 hidden h-44 w-44 rounded-full bg-accent-500/20 blur-3xl lg:block" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-100">
                Not sure?
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold leading-tight sm:text-xl">
                Let our experts match you with the right loan
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                Compare offers across 25+ banks and NBFCs. Free consultation,
                no obligation.
              </p>
            </div>

            <a
              href="#contact"
              className="relative mt-6 inline-flex items-center gap-1.5 self-start rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900 hover:bg-ink-50"
            >
              Talk to an expert <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
