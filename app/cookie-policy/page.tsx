export default function CookiePolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <article className="bg-white">
          <header className="text-center pb-12 border-b border-journal-border mb-12">
            <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-libre-baskerville)] font-bold text-journal-black mb-4 text-balance">
              Politika Kolačića
            </h1>
            <p className="text-journal-gray font-medium">
              Posljednje ažuriranje:{" "}
              {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-libre-baskerville)] font-bold text-journal-black mb-4">
                Uvod u Kolačiće
              </h2>
              <p className="text-journal-gray leading-relaxed mb-4">
                Kolačići su male datoteke koje web stranice pohranjuju na vaš uređaj tijekom pregledavanja. Omogućavaju
                stranicama da zapamte vaše postavke i preferencije.
              </p>
              <p className="text-journal-gray leading-relaxed">
                TopKladenjehr.com koristi kolačiće za poboljšanje funkcionalnosti platforme i pružanje bolje korisničke
                usluge.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-libre-baskerville)] font-bold text-journal-black mb-4">
                Svrha Korištenja
              </h2>
              <ul className="space-y-3 text-journal-gray">
                <li className="flex items-start gap-3">
                  <span className="text-journal-blue mt-1">•</span>
                  <span>Održavanje sigurnosti i integriteta platforme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-blue mt-1">•</span>
                  <span>Pamćenje vaših jezičnih i regionalnih postavki</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-blue mt-1">•</span>
                  <span>Analiza ponašanja korisnika radi poboljšanja sadržaja</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-blue mt-1">•</span>
                  <span>Personalizacija preporuka prema vašim interesima</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-libre-baskerville)] font-bold text-journal-black mb-6">
                Vrste Kolačića
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-journal-blue pl-6 bg-journal-blue/5 py-4 rounded-r">
                  <h3 className="font-bold text-xl mb-3 text-journal-black">Nužni Kolačići</h3>
                  <p className="text-journal-gray leading-relaxed">
                    Ovi kolačići su kritični za osnovne funkcije stranice. Bez njih platforma ne može funkcionirati
                    pravilno.
                  </p>
                </div>

                <div className="border-l-4 border-journal-green pl-6 bg-journal-green/5 py-4 rounded-r">
                  <h3 className="font-bold text-xl mb-3 text-journal-black">Analitički Kolačići</h3>
                  <p className="text-journal-gray leading-relaxed">
                    Prikupljamo agregirane podatke o tome kako posjetitelji koriste našu platformu. Svi podaci su
                    anonimizirani.
                  </p>
                </div>

                <div className="border-l-4 border-journal-orange pl-6 bg-journal-orange/5 py-4 rounded-r">
                  <h3 className="font-bold text-xl mb-3 text-journal-black">Funkcionalni Kolačići</h3>
                  <p className="text-journal-gray leading-relaxed">
                    Omogućavaju platformi da zapamti vaše izbore i pruži personalizirane značajke.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-libre-baskerville)] font-bold text-journal-black mb-4">
                Kontrola nad Kolačićima
              </h2>
              <p className="text-journal-gray leading-relaxed mb-4">
                Imate potpunu kontrolu nad kolačićima. Većina preglednika omogućava upravljanje kroz postavke:
              </p>
              <ul className="space-y-2 text-journal-gray">
                <li className="flex items-start gap-3">
                  <span className="text-journal-blue mt-1">•</span>
                  <span>Blokiranje svih kolačića</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-blue mt-1">•</span>
                  <span>Prihvaćanje samo kolačića s određenih stranica</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-blue mt-1">•</span>
                  <span>Brisanje kolačića nakon zatvaranja preglednika</span>
                </li>
              </ul>
            </section>

            <section className="bg-journal-paper border-2 border-journal-blue/20 p-8 rounded-lg">
              <h2 className="text-2xl font-[family-name:var(--font-libre-baskerville)] font-bold text-journal-black mb-4">
                Kontakt
              </h2>
              <p className="text-journal-gray mb-3">Za pitanja o našoj upotrebi kolačića:</p>
              <p className="text-journal-black font-semibold">
                <p className="text-journal-blue hover:underline">
                  info@topkladenjehr.com
                </p>
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
