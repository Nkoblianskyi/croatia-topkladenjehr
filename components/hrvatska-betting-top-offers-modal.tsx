"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import type { BettingSite } from "@/types"

interface TopOffersModalProps {
  sites: BettingSite[]
}

export function HrvatskaBettingTopOffersModal({ sites }: TopOffersModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedBefore")

    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem("hasVisitedBefore", "true")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const renderStars = (stars: number) => {
    const starElements = []
    const maxStars = 5

    for (let i = 0; i < maxStars; i++) {
      if (i < stars) {
        starElements.push(<Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />)
      } else {
        starElements.push(<Star key={i} className="h-3.5 w-3.5 text-gray-300" />)
      }
    }

    return starElements
  }

  const topSite = sites[0]

  if (!topSite) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90vw] max-w-[480px] p-0 bg-white border-2 border-journal-charcoal shadow-2xl">
        <div className="relative bg-journal-charcoal px-6 py-4 border-b-4 border-croatia-red">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center">
            <div className="text-xs uppercase tracking-widest text-croatia-red font-semibold mb-1">
              Ekskluzivna Preporuka
            </div>
            <h2 className="text-xl font-serif font-bold text-white">Najbolja Ponuda Dana</h2>
          </div>
        </div>

        <div className="bg-white px-6 py-6">
          {/* Logo and site name */}
          <div className="flex flex-col items-center justify-center gap-4 mb-5 pb-5 border-b border-gray-200">
            <div className="relative bg-black p-2 h-16 w-32 rounded border border-gray-200 overflow-hidden">
              <Image src={topSite.logo || "/placeholder.svg"} alt={topSite.name} fill className="object-contain p-2 max-w-[95%] mx-auto" />
            </div>
            <div>
              <div className="font-bold text-lg text-journal-charcoal">{topSite.name}</div>
              <div className="flex items-center gap-1.5 mt-1">
                {renderStars(topSite.stars)}
                <span className="text-sm font-semibold text-journal-charcoal ml-1">{topSite.rating.toFixed(1)}</span>
                <span className="text-xs text-gray-500">({topSite.reviews})</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-400 rounded p-5 text-center mb-5">
            <div className="text-[10px] uppercase tracking-widest text-gray-600 font-semibold mb-2">
              Bonus Dobrodošlice
            </div>
            <div className="font-bold text-2xl text-journal-charcoal leading-tight mb-1">{topSite.bonus}</div>
            {topSite.dopBonus && (
              <div className="text-sm text-journal-charcoal mt-2 pt-2 border-t border-amber-300">
                {topSite.dopBonus}
              </div>
            )}
          </div>

          <a
            href={topSite.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-3.5 bg-croatia-blue hover:bg-croatia-blue/90 text-white text-base font-bold rounded text-center transition-all shadow-md hover:shadow-lg mb-4"
            onClick={() => setIsOpen(false)}
          >
            Preuzmite Bonus
          </a>

          <div className="text-center pt-3 border-t border-gray-200">
            <p className="text-[10px] text-gray-500 leading-relaxed">
              +18 | Primjenjuju se Uvjeti i Odredbe | Kockajte se Odgovorno
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
