"use client"

import { bettingSites } from "@/types"
import { HrvatskaBettingHero } from "@/components/hrvatska-betting-hero"
import { HrvatskaBettingRatingList } from "@/components/hrvatska-betting-rating-list"
import { HrvatskaBettingTopOffersModal } from "@/components/hrvatska-betting-top-offers-modal"
import { HrvatskaBettingOurChoice } from "@/components/hrvatska-betting-our-choice"
import { HrvatskaBettingResponsibleGambling } from "@/components/hrvatska-betting-responsible-gambling"
import { HrvatskaBettingSportsNews } from "@/components/hrvatska-betting-sports-news"
import { HrvatskaBettingFAQ } from "@/components/hrvatska-betting-faq"
import Image from "next/image"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TopKladenjehr",
  url: "https://topkladenjehr.com",
  description: "Stručan vodič za sportsko klađenje u Hrvatskoj s recenzijama najboljih kladionica",
  inLanguage: "hr",
  publisher: {
    "@type": "Organization",
    name: "TopKladenjehr",
    url: "https://topkladenjehr.com",
  },
}

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Image src="/main-stadium-bg.jpg" alt="Stadium background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* </CHANGE> */}

      <div className="min-h-screen relative">
        <main className="relative z-10 mx-auto">
          <HrvatskaBettingHero />
          <HrvatskaBettingRatingList sites={bettingSites} />
          <HrvatskaBettingResponsibleGambling />
          <HrvatskaBettingSportsNews />
          <HrvatskaBettingFAQ />
          <HrvatskaBettingOurChoice sites={bettingSites} />
        </main>
        <HrvatskaBettingTopOffersModal sites={bettingSites} />
      </div>
    </>
  )
}
