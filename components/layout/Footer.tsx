import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Mail, Phone, MapPin } from "lucide-react";

const columns = [
  {
    title: "Loans",
    items: [
      { href: "#services", label: "Home Loan" },
      { href: "#services", label: "Unsecured Business Loan" },
      { href: "#services", label: "Loan Against Property" },
      { href: "#services", label: "CC / OD Facility" },
      { href: "#services", label: "Machinery Loan" },
      { href: "#services", label: "Industrial Plot" },
      { href: "#services", label: "Car Loan" },
    ],
  },
  {
    title: "Branches",
    items: [
      { href: "#branches", label: "Main Office — Westfield Complex" },
      { href: "#branches", label: "Sachin Office" },
    ],
  },
  {
    title: "Company",
    items: [
      { href: "#why-manvi", label: "Why Manvi" },
      { href: "#process", label: "Our Process" },
      { href: "#partners", label: "Banking Partners" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo invert />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
              <span className="font-semibold text-white">
                Manvi Fintech Private Limited
              </span>{" "}
              helps individuals, professionals, business owners and enterprises
              secure the most suitable financing solutions through India&apos;s
              leading banks and NBFCs.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href="mailto:info@manvifintech.com"
                className="flex items-center gap-3 text-ink-300 hover:text-white transition"
              >
                <Mail size={16} className="text-accent-400" />
                info@manvifintech.com
              </a>
              <a
                href="tel:+919016634710"
                className="flex items-center gap-3 text-ink-300 hover:text-white transition"
              >
                <Phone size={16} className="text-accent-400" />
                +91 90166 34710
              </a>
              <a
                href="https://maps.google.com/?q=Westfield+Complex+Sankalp+Shopping+Center+Surat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-ink-400 hover:text-white transition"
              >
                <MapPin size={16} className="text-accent-400 mt-0.5 shrink-0" />
                <span>
                  Main Office — L.G. 44-45, Westfield Complex,
                  <br />
                  Opp. Sankalp Shopping Center, Surat, Gujarat
                </span>
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-white text-sm tracking-tight">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <Link
                      href={it.href}
                      className="text-sm text-ink-400 hover:text-white transition"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col-reverse items-start gap-6 border-t border-ink-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Manvi Fintech Private Limited. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-ink-500 hover:text-ink-300">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-ink-500 hover:text-ink-300">
              Terms
            </Link>
            <Link href="#" className="text-xs text-ink-500 hover:text-ink-300">
              Disclaimer
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
