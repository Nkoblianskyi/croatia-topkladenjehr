import Link from "next/link"
import Image from "next/image"

export function HrvatskaBettingLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <Image src="/favicon.ico" alt="Hrvatska Betting Logo" width={48} height={48} />
      <div className="flex flex-col leading-none">
        <div className="text-2xl md:text-3xl font-bold tracking-tight uppercase">

          <span className="text-journal-blue font-[family-name:var(--font-libre-baskerville)]">top</span>
          <span className="text-journal-charcoal font-[family-name:var(--font-libre-baskerville)]">kladenjehr</span>
        </div>
        <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-journal-gray mt-0.5">
          Sportski Portal
        </div>
      </div>
    </Link>
  )
}
