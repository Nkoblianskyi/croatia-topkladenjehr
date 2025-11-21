export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <article className="bg-white">
          <header className="text-center pb-12 border-b border-journal-border mb-12">
            <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-libre-baskerville)] font-bold text-journal-black mb-4 text-balance">
              Politika Privatnosti
            </h1>
            <p className="text-journal-gray font-medium">
              Posljednje ažuriranje:{" "}
              {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-libre-baskerville)] font-bold text-journal-black mb-4">
                Naša Predanost Privatnosti
              </h2>
              <p className="text-journal-gray leading-relaxed mb-4">
                TopKladenjehr.com tretira zaštitu vaše privatnosti s najvećom ozbiljnošću. Ova politika detaljno
                objašnjava kako prikupljamo, koristimo i štitimo vaše osobne podatke.
              </p>
              <p className="text-journal-gray leading-relaxed">
                Naša praksa je u potpunosti usklađena s GDPR-om i hrvatskim Zakonom o zaštiti osobnih podataka.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-libre-baskerville)] font-bold text-journal-black mb-4">
                Koje Podatke Prikupljamo
              </h2>
              <ul className="space-y-3 text-journal-gray">
                <li className="flex items-start gap-3">
                  <span className="text-journal-blue mt-1">•</span>
                  <span>
                    <strong className="text-journal-black">Identifikacijski podaci:</strong> Ime, prezime ili pseudonim
                    koji odaberete
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-blue mt-1">•</span>
                  <span>
                    <strong className="text-journal-black">Kontakt informacije:</strong> Email adresa za komunikaciju
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-blue mt-1">•</span>
                  <span>
                    <strong className="text-journal-black">Tehnički podaci:</strong> IP adresa, tip uređaja, preglednik
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-blue mt-1">•</span>
                  <span>
                    <strong className="text-journal-black">Podaci o korištenju:</strong> Stranice koje posjećujete i
                    interakcije s sadržajem
                  </span>
                </li>
              </ul>
            </section>

            <section className="mb-12 bg-journal-blue/5 border-l-4 border-journal-blue p-6 rounded-r">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-libre-baskerville)] font-bold text-journal-black mb-4">
                Kako Koristimo Vaše Podatke
              </h2>
              <ul className="space-y-2 text-journal-gray">
                <li className="flex items-start gap-3">
                  <span className="text-journal-blue mt-1">•</span>
                  <span>Pružanje i održavanje funkcionalnosti platforme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-blue mt-1">•</span>
                  <span>Personalizacija sadržaja prema vašim interesima</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-blue mt-1">•</span>
                  <span>Komunikacija o ažuriranjima i novostima</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-blue mt-1">•</span>
                  <span>Zaštita sigurnosti platforme</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-libre-baskerville)] font-bold text-journal-black mb-4">
                Sigurnost Vaših Podataka
              </h2>
              <p className="text-journal-gray leading-relaxed mb-4">Implementirali smo višeslojne sigurnosne mjere:</p>
              <ul className="space-y-2 text-journal-gray">
                <li className="flex items-start gap-3">
                  <span className="text-journal-green mt-1">✓</span>
                  <span>SSL/TLS enkripcija za sve prijenose</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-green mt-1">✓</span>
                  <span>Redovite sigurnosne revizije</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-green mt-1">✓</span>
                  <span>Ograničen pristup podacima</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-green mt-1">✓</span>
                  <span>Automatsko praćenje sumnjive aktivnosti</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-libre-baskerville)] font-bold text-journal-black mb-4">
                Vaša Prava
              </h2>
              <p className="text-journal-gray leading-relaxed mb-4">Prema GDPR-u imate sljedeća prava:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-journal-paper p-4 rounded-lg border border-journal-border">
                  <h4 className="font-bold text-journal-black mb-2">Pravo na pristup</h4>
                  <p className="text-sm text-journal-gray">Zatražite kopiju svojih podataka</p>
                </div>
                <div className="bg-journal-paper p-4 rounded-lg border border-journal-border">
                  <h4 className="font-bold text-journal-black mb-2">Pravo na ispravak</h4>
                  <p className="text-sm text-journal-gray">Ispravite netočne podatke</p>
                </div>
                <div className="bg-journal-paper p-4 rounded-lg border border-journal-border">
                  <h4 className="font-bold text-journal-black mb-2">Pravo na brisanje</h4>
                  <p className="text-sm text-journal-gray">Zatražite brisanje podataka</p>
                </div>
                <div className="bg-journal-paper p-4 rounded-lg border border-journal-border">
                  <h4 className="font-bold text-journal-black mb-2">Pravo na prigovor</h4>
                  <p className="text-sm text-journal-gray">Prigovorite obradi podataka</p>
                </div>
              </div>
            </section>

            <section className="bg-journal-paper border-2 border-journal-blue/20 p-8 rounded-lg">
              <h2 className="text-2xl font-[family-name:var(--font-libre-baskerville)] font-bold text-journal-black mb-4">
                Kontakt
              </h2>
              <p className="text-journal-gray mb-3">Za pitanja o privatnosti ili za ostvarivanje vaših prava:</p>
              <p className="text-journal-black font-semibold mb-4">
                <a href="mailto:info@topkladenjehr.com" className="text-journal-blue hover:underline">
                  info@topkladenjehr.com
                </a>
              </p>
              <p className="text-sm text-journal-gray">
                Također imate pravo podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP).
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
