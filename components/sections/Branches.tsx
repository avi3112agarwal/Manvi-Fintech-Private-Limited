"use client";

import { ArrowUpRight, MapPin, Phone, Clock, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Branch = {
  name: string;
  area: string;
  note: string;
  phone?: string;
  hours?: string;
  map: string;
  main?: boolean;
};

const BRANCHES: Branch[] = [
  {
    name: "Ghod Dod Road",
    area: "Ghod Dod Road, Surat, Gujarat",
    note: "Main office",
    phone: "+91 98765 43210",
    hours: "Mon–Sat · 10:00 – 19:00",
    map: "https://maps.google.com/?q=Ghod+Dod+Road+Surat",
    main: true,
  },
  {
    name: "Ring Road",
    area: "Ring Road, Surat",
    note: "Retail & home loans",
    map: "https://maps.google.com/?q=Ring+Road+Surat",
  },
  {
    name: "Sachin",
    area: "Sachin GIDC, Surat",
    note: "Industrial loans desk",
    map: "https://maps.google.com/?q=Sachin+GIDC+Surat",
  },
  {
    name: "Parvat Patiya",
    area: "Parvat Patiya, Surat",
    note: "Retail branch",
    map: "https://maps.google.com/?q=Parvat+Patiya+Surat",
  },
  {
    name: "Hoziwala Industries",
    area: "Hoziwala Estate, Surat",
    note: "MSME desk",
    map: "https://maps.google.com/?q=Hoziwala+Industries+Surat",
  },
];

const MAIN = BRANCHES.find((b) => b.main)!;
const REST = BRANCHES.filter((b) => !b.main);

export function Branches() {
  return (
    <section id="branches" className="section">
      <Container>
        <SectionHeading
          eyebrow="Branch network"
          title={
            <>
              Serving customers{" "}
              <span className="text-gradient">across Surat</span>
            </>
          }
          description="Five branches, one team. Walk in for a face-to-face consultation — or call ahead and we'll have an expert ready."
        />

        <div className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-[1.15fr_1fr] lg:gap-6">
          {/* Featured main-office card */}
          <a
            href={MAIN.map}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-ink-900 p-7 text-white sm:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 hidden h-64 w-64 rounded-full bg-brand-700/40 blur-3xl lg:block" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 hidden h-64 w-64 rounded-full bg-accent-500/20 blur-3xl lg:block" />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-400/40 bg-accent-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-300">
                <Star size={11} className="fill-accent-300" />
                Main office
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight sm:text-3xl">
                {MAIN.name} Branch
              </h3>
              <p className="mt-2 flex items-start gap-2 text-sm text-ink-300 sm:text-base">
                <MapPin size={16} className="mt-0.5 flex-none text-accent-400" />
                {MAIN.area}
              </p>

              <dl className="mt-7 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
                {MAIN.phone && (
                  <div className="flex items-center gap-2.5 text-sm">
                    <Phone size={14} className="flex-none text-accent-400" />
                    <span className="text-ink-200">{MAIN.phone}</span>
                  </div>
                )}
                {MAIN.hours && (
                  <div className="flex items-center gap-2.5 text-sm">
                    <Clock size={14} className="flex-none text-accent-400" />
                    <span className="text-ink-200">{MAIN.hours}</span>
                  </div>
                )}
              </dl>
            </div>

            <div className="relative mt-8 inline-flex items-center gap-1.5 self-start rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900 transition group-hover:gap-2.5">
              Get directions
              <ArrowUpRight size={14} />
            </div>
          </a>

          {/* Secondary branches — 2-col list on tablet+ */}
          <ul className="grid gap-3 sm:grid-cols-2">
            {REST.map((b) => (
              <li key={b.name}>
                <a
                  href={b.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col justify-between rounded-2xl border border-ink-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-soft"
                >
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-700">
                      {b.note}
                    </span>
                    <h4 className="mt-1 font-display text-base font-semibold text-ink-900">
                      {b.name} Branch
                    </h4>
                    <p className="mt-1.5 flex items-start gap-1.5 text-xs text-ink-600">
                      <MapPin size={12} className="mt-0.5 flex-none text-ink-400" />
                      {b.area}
                    </p>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-700 transition-all group-hover:gap-2">
                    Directions
                    <ArrowUpRight size={12} />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
