import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Partners } from "@/components/sections/Partners";
import { WhyManvi } from "@/components/sections/WhyManvi";
import { Services } from "@/components/sections/Services";
import { EMICalculator } from "@/components/sections/EMICalculator";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Branches } from "@/components/sections/Branches";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Manvi Fintech Private Limited",
  alternateName: "Manvi Fintech",
  url: "https://manvifintech.com",
  description:
    "Manvi Fintech Private Limited helps individuals, professionals and businesses secure loan solutions through India's leading banks and financial institutions.",
  email: "info@manvifintech.com",
  telephone: "+91-9876543210",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ghod Dod Road",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  areaServed: "Surat, Gujarat, India",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Manvi Fintech — Loan Consultancy",
  serviceType: [
    "Home Loan",
    "Unsecured Business Loan",
    "Loan Against Property",
    "CC / OD Facility (CGTMSE & Secured)",
    "Machinery Loan",
    "Industrial Plot Loan",
    "Car Loan",
  ],
  provider: { "@type": "Organization", name: "Manvi Fintech Private Limited" },
  areaServed: { "@type": "Country", name: "India" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Hero />
      <Trust />
      <Partners />
      <WhyManvi />
      <Services />
      <EMICalculator />
      <Process />
      <Stats />
      <Branches />
      <Team />
      <Testimonials />
      <FinalCTA />
      <Faq />
      <Contact />
      <WhatsAppButton />
    </>
  );
}
