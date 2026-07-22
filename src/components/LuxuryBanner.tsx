import Image from "next/image";
import Link from "next/link";

export default function LuxuryBanner() {
  return (
    <section className="relative h-[88vh] min-h-[680px] overflow-hidden">
      <Image
        src="/luxury-banner_v2.png"
        alt="L'attention et le service selon KEMEL"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="max-w-2xl text-center text-white">
          <p className="text-2xl uppercase tracking-[0.5em] text-[#D9C39A] md:text-xl">
            La signature KEMEL
          </p>

          <h2 className="mt-12 font-serif text-3xl leading-tight md:text-3xl lg:text-3xl">
            Le luxe ne se mesure pas
            <br />
            à ce que l&apos;on possède.
          </h2>

          <div className="mx-auto mt-10 h-px w-16 bg-[#D9C39A]" />

          <p className="mt-10 font-serif text-xs italic leading-relaxed text-white/90 md:text-xl">
            Il se reconnaît à l&apos;attention que l&apos;on reçoit.
          </p>

          <Link
            href="/univers"
            className="mt-14 inline-block border border-white/70 px-10 py-4 text-xs uppercase tracking-[0.3em] transition-all duration-500 hover:bg-white hover:text-[#2D2D2D] hover:scale-105"
          >
            Découvrir nos services
          </Link>
        </div>
      </div>
    </section>
  );
}