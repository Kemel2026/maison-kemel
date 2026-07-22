import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white">
      <div className="mx-auto max-w-7xl px-8 py-20 lg:px-12">
        <div className="grid gap-16 md:grid-cols-4">
          {/* Marque */}
          <div>
            <h2 className="font-serif text-3xl tracking-[0.25em] text-[#D9C39A]">
              KEMEL
            </h2>

            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-neutral-400">
              Maison de services premium
            </p>

            <p className="mt-8 leading-8 text-neutral-300">
              Nous orchestrons chaque détail avec discrétion afin que vous puissiez
              vous consacrer à l'essentiel.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-[#D9C39A]">
              Navigation
            </h3>

            <nav className="space-y-4 text-neutral-300">
              <Link href="/la-maison" className="block hover:text-white transition">
                La Maison
              </Link>

              <Link href="/univers" className="block hover:text-white transition">
                Nos Univers
              </Link>

              <Link href="/destinations-signature" className="block hover:text-white transition">
                Destinations
              </Link>

              <Link href="/contact" className="block hover:text-white transition">
                Contact
              </Link>
            </nav>
          </div>

          {/* Implantations */}
          <div>
            <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-[#D9C39A]">
              Implantations
            </h3>

            <ul className="space-y-4 text-neutral-300">
              <li>Europe</li>
              <li>Asie</li>
              <li>Afrique</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-[#D9C39A]">
              Contact
            </h3>

            <div className="space-y-4 text-neutral-300">
              <p>contact@maisonkemel.com</p>
              <p>+33 6 58 28 99 08</p>

              <div className="pt-6 flex gap-5">
                <a href="#" className="hover:text-white transition">
                  Instagram
                </a>

                <a href="#" className="hover:text-white transition">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-neutral-500 flex flex-col gap-3 md:flex-row md:justify-between">
          <p>© 2026 Maison KEMEL. Tous droits réservés.</p>

          <p>Discrétion • Excellence • Disponibilité</p>
        </div>
      </div>
    </footer>
  );
}