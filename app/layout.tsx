import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manvifintech.com"),
  title: {
    default:
      "Manvi Fintech Private Limited — Your Trusted Partner for Smart Financial Solutions",
    template: "%s · Manvi Fintech",
  },
  description:
    "Manvi Fintech helps individuals, professionals and businesses secure the most suitable loan solutions through India's leading banks and financial institutions. Home loan, business loan, LAP, working capital, machinery, industrial plot and car loan — expertly matched and disbursed.",
  keywords: [
    "Home Loan Surat",
    "Business Loan Surat",
    "Loan Against Property Surat",
    "Working Capital Loan",
    "Machinery Loan",
    "EMI Calculator",
    "Loan Consultant Surat",
    "Financial Services Surat",
    "Industrial Plot Loan",
    "Car Loan Surat",
    "Manvi Fintech",
  ],
  openGraph: {
    title:
      "Manvi Fintech — Your Trusted Partner for Smart Financial Solutions",
    description:
      "Funding your growth, powering your dreams. Loans matched through India's leading banks and financial institutions.",
    type: "website",
    siteName: "Manvi Fintech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manvi Fintech",
    description: "Get the right loan for every need.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-white text-ink-900 antialiased">
        <Navbar />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
