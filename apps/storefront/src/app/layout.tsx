import { getBaseURL } from "@lib/util/env"
import { siteConfig } from "@lib/site-config"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: `${siteConfig.name} | Online prodavnica garderobe`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Online prodavnica garderobe`,
    description: siteConfig.description,
    url: siteConfig.baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Online prodavnica garderobe`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="sr" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
