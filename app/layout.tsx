import type React from "react"
import type { Metadata } from "next"
import { Inter, Libre_Baskerville } from "next/font/google"
import "./globals.css"
import { HrvatskaBettingHeader } from "@/components/hrvatska-betting-header"
import { HrvatskaBettingFooter } from "@/components/hrvatska-betting-footer"
import { HrvatskaCookieBanner } from "@/components/hrvatska-cookie-banner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
})

export const metadata: Metadata = {
  title: "TopKladenjehr - Vodič za Sportsko Klađenje u Hrvatskoj 2025",
  description:
    "TopKladenjehr je vaš pouzdani sportski portal s recenzijama najboljih kladionica u Hrvatskoj. Stručne analize, usporedbe kvota i ekskluzivni bonusi za 2025. godinu.",
  keywords: [
    "top kladionice hrvatska",
    "najbolje kladionice",
    "kladionice hrvatska 2025",
    "online klađenje",
    "sportsko klađenje hrvatska",
    "bonusi kladionice",
    "topkladionicehrvatska",
    "sportsko klađenje Hrvatska",
    "kladionice Hrvatska",
    "online klađenje Hrvatska",
    "najbolje kladionice",
    "nogometno klađenje Hrvatska",
    "tenis klađenje",
    "košarka klađenje",
    "bonusi za klađenje",
    "klađenje uživo",
    "legalne kladionice Hrvatska",
    "betting sites Croatia",
    "online sportsko klađenje",
    "Formula 1 klađenje",
    "MMA klađenje",
    "hokej klađenje",
    "pikado klađenje",
    "bilijar klađenje",
    "rang lista kladionica",
    "sigurno klađenje Hrvatska",
    "odgovorno klađenje",
    "najbolje kladionice Hrvatska",
    "sportsko klađenje savjeti",
    "klađenje aplikacije Hrvatska",
    "mobilno klađenje",
    "eSports klađenje",
    "virtualni sportovi klađenje",
    "klađenje na nogometne lige",
    "klađenje na teniske turnire",
    "klađenje na košarkaške utakmice",
    "ekskluzivni bonusi za nove korisnike",
    "promocije kladionica",
    "isplate dobitaka klađenje",
    "korisnička podrška kladionica",
    "zakonski okvir klađenja Hrvatska",
    "porezi na dobitke od klađenja",
    "kladionica",
    "sportska kladionica",
    "online kladionica",
    "klađenje uživo",
    "online klađenje",
    "kladionica uzivo",
    "online casino Hrvatska",
    "najbolji online casino",
    "casino bonusi",
    "casino igre Hrvatska",
    "casino Croatia",
    "online casino games",
    "casino bonuses",
  ],
  authors: [{ name: "TopKladenjehr" }],
  creator: "TopKladenjehr",
  publisher: "TopKladenjehr",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "https://topkladenjehr.com",
    siteName: "TopKladenjehr",
    title: "TopKladenjehr - Vodič za Sportsko Klađenje u Hrvatskoj",
    description:
      "Stručne recenzije i analize kladionica u Hrvatskoj. Usporedite kvote, bonuse i pronađite najbolju kladionicu za vas.",
    images: [
      {
        url: "https://topkladenjehr.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TopKladenjehr",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TopKladenjehr - Vodič za Sportsko Klađenje",
    description: "Stručne recenzije najboljih kladionica u Hrvatskoj za 2025. godinu.",
    images: ["https://topkladenjehr.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://topkladenjehr.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#5271B4" />
        <link rel="canonical" href="https://topkladenjehr.com" />
      </head>
      <body className={`${inter.variable} ${libreBaskerville.variable} font-sans antialiased`}>
        <HrvatskaBettingHeader />
        {children}
        <HrvatskaBettingFooter />
        <HrvatskaCookieBanner />
      </body>
    </html>
  )
}
