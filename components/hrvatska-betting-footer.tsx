"use client"

import Link from "next/link"
import Image from "next/image"

export function HrvatskaBettingFooter() {
  return (
    <footer className="bg-white relative z-20">
      <div className="w-full h-1 bg-gradient-to-r from-journal-blue via-journal-green to-journal-orange" />

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-journal-black mb-3">TopKladenjehr</h3>
            <p className="text-sm text-journal-text leading-relaxed">
              Stručan vodič za sportsko klađenje u Hrvatskoj. Detaljne recenzije i objektivne analize najboljih
              kladionica.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-journal-black mb-3">Navigacija</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-journal-text hover:text-journal-blue transition-colors">
                  Početna stranica
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-journal-text hover:text-journal-blue transition-colors">
                  O nama
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-journal-text hover:text-journal-blue transition-colors"
                >
                  Politika privatnosti
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-sm text-journal-text hover:text-journal-blue transition-colors"
                >
                  Politika kolačića
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-journal-black mb-3">Odgovorno klađenje</h3>
            <p className="text-sm text-journal-text leading-relaxed mb-3">
              Klađenje je zabava. Igrajte odgovorno i budite svjesni rizika.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-journal-red/10 border border-journal-red/30 rounded-lg">
              <span className="text-journal-red font-bold text-xl">18+</span>
            </div>
          </div>
        </div>

        <div className="border-t border-journal-border pt-8 pb-8">
          <h4 className="font-serif text-base font-bold text-journal-black mb-6">
            Organizacije za pomoć kod ovisnosti o kockanju
          </h4>
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded bg-gray-50 hover:bg-gray-100">
                <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded bg-gray-50 hover:bg-gray-100">
                <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded bg-gray-50 hover:bg-gray-100">
                <Image src="/hupis.png" alt="Hupis" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded bg-gray-50 hover:bg-gray-100">
                <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded bg-gray-50 hover:bg-gray-100">
                <Image src="/pbsvi.svg" alt="PBSVI" fill className="object-contain" />
              </div>
            </Link>
          </div>
        </div>

        <div className="border-t border-journal-border pt-6">
          <div className="max-w-4xl mx-auto space-y-3">
            <p className="text-xs text-journal-text leading-relaxed text-center">
              <strong>Odricanje od odgovornosti:</strong> TopKladenjehr.com pruža informativne recenzije i vodiče za
              sportsko klađenje u Hrvatskoj. Mi nismo kladionica i ne prihvaćamo opklade. Sve informacije o bonusima i
              uvjetima podliježu promjenama od strane operatora. Uvijek provjerite aktualne uvjete na službenim
              stranicama kladionica prije registracije.
            </p>
            <p className="text-xs text-journal-text text-center">
              Klađenje može biti opasno i uzrokovati ovisnost. Igrajte odgovorno.{" "}
              <span className="font-bold text-journal-red">18+</span>
            </p>
          </div>
        </div>

        <div className="border-t border-journal-border mt-6 pt-6">
          <p className="text-xs text-journal-text text-center">
            © {new Date().getFullYear()} <span className="font-semibold">TopKladenjehr.com</span> — Sva prava pridržana
          </p>
        </div>
      </div>
    </footer>
  )
}
