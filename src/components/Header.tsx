import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#ECE4D8] bg-[#F8F5F0]/90 backdrop-blur-xl">
      <div className="mx-auto grid h-24 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-20 px-8 lg:px-12">

        {/* Logo */}
        <Link href="/" className="group">
          <div>
            <p className="font-serif text-3xl tracking-[0.28em] text-[#8C6A3B] transition-colors duration-300 group-hover:text-[#B88A44]">
              KEMEL
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-[#9B8D78]">
              Maison de services premium
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="justify-self-center">
          <ul className="flex items-center gap-10 text-xs uppercase tracking-[0.25em] text-[#555]">

            <li>
              <Link
                href="/la-maison"
                className="transition-colors duration-300 hover:text-[#B88A44]"
              >
                La Maison
              </Link>
            </li>

            <li>
              <Link
                href="/univers"
                className="transition-colors duration-300 hover:text-[#B88A44]"
              >
                Nos Univers
              </Link>
            </li>

            <li>
              <Link
                href="/prestations-signature"
                className="transition-colors duration-300 hover:text-[#B88A44]"
              >
                Prestations
              </Link>
            </li>

            <li>
              <Link
                href="/destinations-signature"
                className="transition-colors duration-300 hover:text-[#B88A44]"
              >
                Destinations
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="transition-colors duration-300 hover:text-[#B88A44]"
              >
                Contact
              </Link>
            </li>

          </ul>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="justify-self-end rounded-full border border-[#D9C39A] px-8 py-3 text-xs uppercase tracking-[0.25em] text-[#8C6A3B] shadow-sm transition-all duration-300 hover:bg-[#D9C39A] hover:text-white hover:shadow-md"
        >
          Parler à un conseiller
        </Link>

      </div>
    </header>
  );
}