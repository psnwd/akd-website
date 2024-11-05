import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { SITE_CONFIG } from "@/config/site.config.mjs";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import Script from "next/script";
import { env } from "@/env";
import NotificationCard from "./_components/notfication-card";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  icons: SITE_CONFIG.icons.map((icon) => ({
    ...icon,
    fetchPriority: icon.fetchPriority as "auto" | "high" | "low" | undefined,
  })),
  openGraph: SITE_CONFIG.openGraph,
  twitter: SITE_CONFIG.twitter,
  facebook: {
    appId: SITE_CONFIG.facebook.appId,
  },
  verification: SITE_CONFIG.verification,
  // TODO: add other metadata
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            {/* Intoduction who dont know what is this site about */}
            {env.NODE_ENV === "production" && (
              <NotificationCard
                headerTitle="This Website Inspired by the Main akd.lk Website"
                description="This is a infomation card that will disappear after you click OK."
                disclaimer="This site is inspired by the original site, and the data may not be accurate. It may contain test sample data."
                buttonText="OK"
                disappearTime={3000}
                horizontalPosition="right"
                verticalPosition="bottom"
              />
            )}

            {children}
          </TRPCReactProvider>
        </ThemeProvider>
      </body>

      <GoogleTagManager gtmId={env.NEXT_PUBLIC_GOOGLE_TAGMANAGER_ID} />
      <GoogleAnalytics gaId={env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />

      <Script id="organization-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${env.NEXT_PUBLIC_URL}#organization`,
          name: "Anura Kumara Dissanayake",
          url: env.NEXT_PUBLIC_URL,
          image: `${env.NEXT_PUBLIC_URL}/static/images/akd.jpg`,
          description: SITE_CONFIG.description,
          jobTitle: "Politician",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Main St",
            addressLocality: "City Name",
            addressRegion: "State Name",
            postalCode: "12345",
            addressCountry: "Sri Lanka",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-800-555-5555",
            contactType: "Political Office",
            areaServed: "LK",
            availableLanguage: "English",
          },
          sameAs: [
            "https://www.facebook.com/",
            "https://twitter.com/",
            "https://www.linkedin.com/company/",
            "https://www.instagram.com/",
          ],
          alumniOf: {
            "@type": "Organization",
            name: "NPP",
          },
          memberOf: {
            "@type": "PoliticalParty",
            name: "NPP",
          },
          gender: "Male",
          knowsAbout: ["Politics", "Public Policy", "Community Development"],
        })}
      </Script>
    </html>
  );
}
