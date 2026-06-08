# Manvi Fintech Private Limited — Website

Premium, modern, conversion-focused website for **Manvi Fintech Private Limited** — a loan consultancy helping individuals & businesses secure financing through India's leading banks and NBFCs.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS 3.4**
- **Framer Motion** for premium animations
- **Lucide React** icons
- Inter font via `next/font/google`

## Sections

1. Sticky header w/ glass effect
2. Hero with animated stat cards
3. Trust stats strip
4. 7 service cards + experts CTA
5. Why Choose Manvi
6. 6-step Loan Journey timeline
7. Banking partners marquee (17+ logos)
8. Branches with map preview
9. Team / Leadership
10. Accordion FAQs
11. Lead-capture contact form
12. Footer + floating WhatsApp button

## Run locally

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Notes

- Update phone numbers, email, branch addresses and team bios with real data.
- Replace bank initials with SVG logos when available (in `components/BankingPartners.tsx`).
- The contact form currently shows a thank-you state on submit; wire it to your backend / CRM (HubSpot, Zoho, Salesforce) in `components/Contact.tsx`.
