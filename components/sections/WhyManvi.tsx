import {
  Network,
  Zap,
  UserCheck,
  Layers3,
  Eye,
  HeartHandshake,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: UserCheck,
    title: "Expert Financial Guidance",
    desc: "Experienced professionals helping you choose the right loan product for your goals.",
  },
  {
    icon: Layers3,
    title: "Multiple Lending Options",
    desc: "Compare offers from 25+ leading banks and NBFCs before you commit.",
  },
  {
    icon: Zap,
    title: "Faster Processing",
    desc: "Quick documentation and approvals — disbursal in days, not weeks.",
  },
  {
    icon: Network,
    title: "Personalized Solutions",
    desc: "Customized financing tailored to your business or personal profile.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    desc: "Every step, fee and timeline disclosed upfront. No hidden surprises.",
  },
  {
    icon: HeartHandshake,
    title: "Complete Support",
    desc: "Hand-held from application to disbursement and post-disbursal service.",
  },
];

export function WhyManvi() {
  return (
    <section id="why-manvi" className="section">
      <Container>
        <SectionHeading
          eyebrow="Why Manvi Fintech"
          title={
            <>
              Built to put{" "}
              <span className="text-gradient">you first</span>
            </>
          }
          description="We're not just a broker. We're your financing partner — focused on outcomes, not commissions."
        />

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group relative bg-white p-6 transition-colors hover:bg-brand-50/30 sm:p-8"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100 transition group-hover:bg-brand-gradient group-hover:text-white group-hover:ring-transparent">
                <r.icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-ink-900 sm:text-lg">
                {r.title}
              </h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
