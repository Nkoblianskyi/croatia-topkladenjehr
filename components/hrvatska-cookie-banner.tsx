"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function HrvatskaCookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-journal-blue shadow-2xl">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-journal-black font-bold text-xl mb-3">Kolačići</h3>
            <p className="text-journal-gray text-sm leading-relaxed">
              Koristimo kolačiće za poboljšanje vašeg iskustva. Prihvaćanjem pristajete na našu{" "}
              <Link href="/cookie-policy" className="text-journal-blue hover:underline font-medium">
                Politiku kolačića
              </Link>{" "}
              i{" "}
              <Link href="/privacy-policy" className="text-journal-blue hover:underline font-medium">
                Politiku privatnosti
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={rejectCookies}
              className="flex-1 md:flex-none px-6 py-3 bg-white hover:bg-journal-paper border-2 border-journal-border text-journal-charcoal font-semibold rounded-lg transition-colors text-sm"
            >
              Odbij
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 md:flex-none px-6 py-3 bg-journal-blue hover:bg-journal-blue/90 text-white font-bold rounded-lg transition-colors text-sm shadow-lg shadow-journal-blue/20"
            >
              Prihvati
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
