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
    name: "Main Office",
    area: "L.G. 44-45, Westfield Complex, Opp. Sankalp Shopping Center, Surat, Gujarat",
    note: "Main office",
    phone: "+91 90166 34710",
    hours: "Mon–Sat · 10:00 – 19:00",
    map: "https://maps.google.com/?q=Westfield+Complex+Sankalp+Shopping+Center+Surat",
    main: true,
  },
  {
    name: "Sachin Office",
    area: "First Floor, Plot No. 1084, Road No. 4, Nr. Surat People's Bank, GIDC Sachin, Surat",
    note: "Industrial loans desk",
    map: "https://maps.google.com/?q=Plot+1084+Road+4+GIDC+Sachin+Surat",
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
          description="Two offices, one team. Walk in for a face-to-face consultation — or call ahead and we'll have an expert ready."
        />

        <div className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-2 lg:gap-6">
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
                {MAIN.name}
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

          {/* Secondary branches */}
          <ul className="grid gap-3">
            {REST.map((b) => (
              <li key={b.name}>
                <a
                  href={b.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col justify-between rounded-2xl border border-ink-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-soft sm:p-7"
                >
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                      {b.note}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-semibold text-ink-900 sm:text-2xl">
                      {b.name}
                    </h3>
                    <p className="mt-2 flex items-start gap-2 text-sm text-ink-600 leading-relaxed">
                      <MapPin size={14} className="mt-0.5 flex-none text-ink-400" />
                      {b.area}
                    </p>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2.5">
                    Get directions
                    <ArrowUpRight size={14} />
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
