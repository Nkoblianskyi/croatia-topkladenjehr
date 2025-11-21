"use client"

import { useState } from "react"
import { AdvertiserInfoModal } from "./hrvatska-betting-advertiser-modal"
import Image from "next/image"

export function HrvatskaBettingHero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="relative h-[200px] md:h-[300px] overflow-hidden">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto sm:max-w-[1200px] relative z-10 px-4 h-full flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center flex-1 flex flex-col justify-center">
          <h1 className="text-xl md:text-3xl font-[family-name:var(--font-libre-baskerville)] font-bold text-white mb-2 leading-tight text-balance">
            Stručan Vodič za <span className="text-journal-blue">Sportsko Klađenje</span>
          </h1>

          <p className="text-xs md:text-sm text-white/90 leading-relaxed mb-3 max-w-2xl mx-auto">
            Detaljne recenzije, usporedbe kvota i ekskluzivni bonusi za hrvatske igrače.
          </p>

          {/* Stats/Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-[10px] md:text-xs">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center">
                <Image src="/flag.png" alt="Hrvatska Betting Logo" width={24} height={24} />
              </div>
              <span className="text-white font-semibold">Licencirano</span>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-journal-blue/30 backdrop-blur-sm flex items-center justify-center border border-journal-blue/40">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-journal-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <span className="text-white font-semibold">Objektivno</span>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-journal-red/30 backdrop-blur-sm flex items-center justify-center border border-journal-red/40">
                <span className="text-journal-red font-bold text-xs md:text-xs px-0.5 py-0.5">18+</span>
              </div>
              <span className="text-white font-semibold">Odgovorno</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-2 md:mt-3 pt-2 border-t border-white/20">
            <button
              onClick={openModal}
              className="text-[10px] md:text-xs text-white/80 hover:text-journal-blue transition-colors underline decoration-dotted underline-offset-2 font-medium"
            >
              Politika transparentnosti
            </button>
          </div>
        </div>

        <div className="text-center pb-2">
          <p className="text-[10px] md:text-xs text-white/70">Zadnje ažurirano: Siječanj 2025</p>
        </div>
      </div>

      <AdvertiserInfoModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
