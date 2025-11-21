"use client"
import { HrvatskaBettingLogo } from "./hrvatska-betting-logo"

export function HrvatskaBettingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-journal-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-center relative">
          <HrvatskaBettingLogo />
        </div>
      </div>
    </header>
  )
}
