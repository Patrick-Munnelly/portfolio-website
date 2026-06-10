import type { Metadata } from "next";
import { Crimson_Text, JetBrains_Mono, Playfair_Display } from "next/font/google";
import AnalyticsLoader from "@/components/AnalyticsLoader";
import { SITE_URL, site } from "@/content/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const crimson = Crimson_Text({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const title =
  "Patrick Munnelly — Full Stack Engineer (React, Node.js, Python) | Remote Spain/EU";
const description =
  "Full-stack engineer in Marbella, Spain. 8+ years shipping production React and TypeScript apps on Node.js and Python. Available for EU remote roles.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  other: {
    "geo.region": "ES-AN",
    "geo.placename": "Marbella",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.jobTitle,
  url: SITE_URL,
  email: `mailto:${site.email}`,
  sameAs: [site.linkedin, site.github],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marbella",
    addressCountry: "ES",
  },
  knowsAbout: ["React", "TypeScript", "Node.js", "Python", "Next.js", "AWS"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Technological University of the Shannon",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${site.name} — ${site.jobTitle}`,
  url: SITE_URL,
};

// Google Consent Mode v2: everything denied until the visitor accepts via the
// consent banner. Must run before gtag.js, hence a plain inline script.
const consentDefaultScript = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied'
});`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${crimson.variable} ${jetbrains.variable}`}
    >
      <body className="bg-cream font-body text-ink antialiased">
        <script dangerouslySetInnerHTML={{ __html: consentDefaultScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <a
          href="#main"
          className="sr-only rounded-sm focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-forest focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        {children}
        <AnalyticsLoader gaId={gaId} />
      </body>
    </html>
  );
}
