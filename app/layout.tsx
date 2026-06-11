import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import AnalyticsLoader from "@/components/AnalyticsLoader";
import { SITE_URL, site } from "@/content/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "optional",
  preload: true,
});

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "optional",
  preload: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "optional",
});

const title = "Patrick Munnelly | Full Stack Engineer";
const description =
  "Full-stack engineer — React, TypeScript, Node.js, Python. Marbella, Spain · remote across the EU · available now.";

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
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.jobTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
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
      className={`${jakarta.variable} ${inter.variable} ${jetbrains.variable}`}
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
