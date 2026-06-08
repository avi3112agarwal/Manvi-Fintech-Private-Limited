import {
  Network,
  MapPin,
  Zap,
  Layers3,
  UserCheck,
  HeartHandshake,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const items = [
  {
    icon: Network,
    title: "25+ Banking Partners",
    sub: "Top private & public-sector banks and NBFCs",
  },
  {
    icon: MapPin,
    title: "Multiple Branches Across Surat",
    sub: "Westfield Complex (Main) · GIDC Sachin",
  },
  {
    icon: Zap,
    title: "Fast Loan Processing",
    sub: "Approvals in days, disbursal within 48 hrs of sanction",
  },
  {
    icon: Layers3,
    title: "Personalized Financial Solutions",
    sub: "Tailored to your business or personal profile",
  },
  {
    icon: UserCheck,
    title: "Dedicated Relationship Managers",
    sub: "Single point of contact through your loan journey",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Support",
    sub: "From first call to disbursement and beyond",
  },
];

export function Trust() {
  return (
    <section className="relative border-y border-ink-100 bg-ink-50/60">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, sub }) => (
            <div
              key={title}
              className="group flex items-start gap-4 bg-white p-6 transition-colors hover:bg-brand-50/30"
            >
              <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100 transition group-hover:bg-brand-gradient group-hover:text-white group-hover:ring-transparent">
                <Icon size={20} />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-[15px] font-semibold leading-tight text-ink-900">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-600">
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
