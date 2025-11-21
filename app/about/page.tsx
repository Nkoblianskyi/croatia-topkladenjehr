export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-journal-blue-light/30 via-white to-journal-orange/10 py-20 md:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-journal-blue/20 mb-6">
              <span className="text-xs md:text-sm font-semibold text-journal-blue uppercase tracking-wide">O NAMA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-libre-baskerville)] font-bold text-journal-black mb-6 leading-tight text-balance">
              Vaš Pouzdani Sportski Portal
            </h1>
            <p className="text-xl md:text-2xl text-journal-gray leading-relaxed">
              Objektivne recenzije, stručne analize i transparentne informacije o kladionicama u Hrvatskoj
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        {/* Mission Statement */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-libre-baskerville)] font-bold text-journal-black mb-6 leading-tight">
                Transparentnost. Stručnost. Pouzdanost.
              </h2>
              <p className="text-lg text-journal-gray leading-relaxed mb-4">
                TopKladenjehr je nastao iz potrebe za iskrenim i objektivnim izvorom informacija o sportskom klađenju u
                Hrvatskoj. Umjesto marketinških priča, donosimo vam stvarne podatke temeljene na temeljitim analizama.
              </p>
              <p className="text-lg text-journal-gray leading-relaxed">
                Naš cilj je jednostavan: pomoći vam pronaći kladionicu koja odgovara vašim potrebama i zaštititi vas od
                neprovjerenih operatera.
              </p>
            </div>
            <div className="bg-journal-paper rounded-2xl p-8 border border-journal-border shadow-sm">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-journal-blue/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-journal-blue">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-journal-black">Detaljno Testiranje</h3>
                    <p className="text-journal-gray text-sm">
                      Svaka kladionica prolazi temeljitu provjeru prije objave
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-journal-green/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-journal-green">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-journal-black">Redovita Ažuriranja</h3>
                    <p className="text-journal-gray text-sm">Pratimo promjene kvota, bonusa i uvjeta korištenja</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-journal-orange/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-journal-orange">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-journal-black">Zaštita Korisnika</h3>
                    <p className="text-journal-gray text-sm">Promoviranje odgovornog klađenja i sigurnih praksi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-libre-baskerville)] font-bold text-journal-black mb-4">
              Naše Usluge
            </h2>
            <p className="text-xl text-journal-gray max-w-3xl mx-auto">
              Sve što trebate znati o sportskom klađenju na jednom mjestu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-journal-border p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-journal-blue/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-journal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-journal-black">Recenzije Kladionica</h3>
              <p className="text-journal-gray leading-relaxed">
                Detaljne analize licenciranih kladionica u Hrvatskoj. Testiramo sve aspekte - od registracije do
                isplate.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-journal-border p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-journal-green/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-journal-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-journal-black">Ekskluzivni Bonusi</h3>
              <p className="text-journal-gray leading-relaxed">
                Pregovaramo posebne ponude za naše čitatelje. Dobijete više nego direktno na stranici kladionice.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-journal-border p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-journal-orange/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-journal-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-journal-black">Usporedbe Kvota</h3>
              <p className="text-journal-gray leading-relaxed">
                Pratimo kvote za popularne događaje i pokazujemo gdje dobijete najbolju vrijednost.
              </p>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-20 bg-journal-paper rounded-2xl p-8 md:p-12 border border-journal-border">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-libre-baskerville)] font-bold text-journal-black mb-4">
              Kako Ocjenjujemo
            </h2>
            <p className="text-lg text-journal-gray max-w-3xl mx-auto">
              Naš sustav ocjenjivanja temelji se na objektivnim kriterijima i stvarnim testiranjima
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-journal-blue mb-2">40%</div>
              <div className="font-bold text-sm mb-1 text-journal-black">Sigurnost</div>
              <p className="text-xs text-journal-gray">Licence i zaštita</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-journal-green mb-2">25%</div>
              <div className="font-bold text-sm mb-1 text-journal-black">Ponuda</div>
              <p className="text-xs text-journal-gray">Sportovi i tržišta</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-journal-orange mb-2">20%</div>
              <div className="font-bold text-sm mb-1 text-journal-black">Kvote</div>
              <p className="text-xs text-journal-gray">Konkurentnost</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-journal-purple mb-2">10%</div>
              <div className="font-bold text-sm mb-1 text-journal-black">Iskustvo</div>
              <p className="text-xs text-journal-gray">Dizajn i brzina</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-journal-gray mb-2">5%</div>
              <div className="font-bold text-sm mb-1 text-journal-black">Bonusi</div>
              <p className="text-xs text-journal-gray">Uvjeti</p>
            </div>
          </div>
        </div>

        {/* Responsible Gambling */}
        <div className="bg-gradient-to-br from-journal-red/10 to-journal-orange/10 rounded-2xl p-8 md:p-12 border border-journal-red/20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-sm">
              <span className="text-journal-red font-bold text-2xl">18+</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-libre-baskerville)] font-bold text-journal-black mb-6">
              Odgovorno Klađenje
            </h2>
            <p className="text-lg text-journal-gray leading-relaxed mb-6">
              Klađenje je zabava, ali može postati problem. TopKladenjehr aktivno promovira odgovorno klađenje. Kladite
              se samo novcem koji možete priuštiti izgubiti. Postavite limite. Tražite pomoć ako osjećate da gubite
              kontrolu.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium text-journal-charcoal">
                18+
              </span>
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium text-journal-charcoal">
                Postavi Limite
              </span>
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium text-journal-charcoal">
                Traži Pomoć
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
