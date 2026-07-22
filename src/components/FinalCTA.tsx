import Link from "next/link";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[650px]">
        <Image
          src="/luxury-banner_v2.png"
          alt="Maison KEMEL"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white">
            <p className="text-xs uppercase tracking-[0.45em] text-[#D9C39A]">
              Maison KEMEL
            </p>

            <h2 className="mt-8 font-serif text-4xl leading-tight md:text-6xl">
              Chaque demande
              <br />
              mérite une attention singulière.
            </h2>

            <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-white/90">
              Derrière chaque prestation se trouve une équipe qui anticipe,
              coordonne et veille à chaque détail avec la plus grande
              discrétion.
            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-5">
              <Link
                href="/contact"
                className="rounded-full bg-[#D9C39A] px-8 py-4 text-sm uppercase tracking-[0.25em] text-[#2D2D2D] transition hover:scale-105 hover:bg-white"
              >
                Parler à un conseiller
              </Link>

              <Link
                href="/univers"
                className="rounded-full border border-white px-8 py-4 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-[#2D2D2D]"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}