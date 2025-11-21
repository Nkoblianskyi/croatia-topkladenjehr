"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { X, Info, Shield } from "lucide-react"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-[700px] p-0 bg-white rounded-2xl shadow-2xl overflow-hidden border border-journal-border">
        <div className="relative bg-gradient-to-r from-journal-blue/5 to-journal-green/5 border-b border-journal-border px-8 py-6">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl text-journal-black font-bold pr-8 font-[family-name:var(--font-libre-baskerville)]">
              Politika Transparentnosti
            </DialogTitle>
            <p className="text-sm text-journal-gray mt-2">TopKladenjehr.com — poštene informacije o klađenju</p>
          </DialogHeader>
          <DialogClose className="absolute right-6 top-6 rounded-xl bg-white p-2.5 opacity-70 transition-all hover:opacity-100 hover:bg-journal-black hover:text-white focus:outline-none focus:ring-2 focus:ring-journal-blue shadow-sm">
            <X className="h-5 w-5" />
            <span className="sr-only">Zatvori</span>
          </DialogClose>
        </div>

        <div className="px-8 py-8 space-y-8 max-h-[70vh] overflow-y-auto">
          {/* Section 1 */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-journal-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Info className="w-5 h-5 text-journal-blue" />
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-xl text-journal-black font-[family-name:var(--font-libre-baskerville)]">
                  O Našoj Usluzi
                </h3>
                <div className="space-y-3 text-journal-gray leading-relaxed text-base">
                  <p>
                    TopKladenjehr.com je profesionalni sportski časopis koji pruža objektivne informacije o kladioničkim
                    platformama. Primamo partnersku naknadu od preporučenih brendova, što utječe na njihovo
                    pozicioniranje na stranici.
                  </p>
                  <p>
                    Svi predstavljeni operateri imaju službene licence regulatornih tijela. Ulažemo maksimalan trud da
                    pružimo točne informacije, ali ne preuzimamo odgovornost za moguće netočnosti.
                  </p>
                  <p className="font-semibold text-journal-charcoal">
                    Važno: Bonusi i promotivne ponude mogu se mijenjati. Uvijek provjerite aktualne uvjete na stranici
                    operatera prije registracije.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-journal-border"></div>

          {/* Section 2 */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-journal-red/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="w-5 h-5 text-journal-red" />
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-xl text-journal-black font-[family-name:var(--font-libre-baskerville)]">
                  Dobna Ograničenja
                </h3>
                <div className="space-y-3 text-journal-gray leading-relaxed text-base">
                  <p>
                    Ova stranica namijenjena je isključivo osobama starijim od 18 godina. Korištenjem TopKladenjehr.com,
                    potvrđujete da ste punoljetni prema zakonodavstvu vaše zemlje.
                  </p>
                  <p>
                    Sportsko klađenje treba biti zabava, a ne način zarade. Nikada ne kladite se na novac koji si ne
                    možete priuštiti izgubiti.
                  </p>
                  <p className="bg-journal-red/5 border-l-4 border-journal-red px-4 py-3 rounded-r-lg">
                    <span className="font-semibold text-journal-red">Trebate pomoć?</span> Ako imate problema s
                    kockanjem, obratite se specijaliziranim službama podrške i organizacijama koje pružaju stručnu
                    pomoć.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={onClose}
              className="w-full bg-journal-blue hover:bg-journal-blue/90 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-sm hover:shadow-md"
            >
              Razumijem, zatvori
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
