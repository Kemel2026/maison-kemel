import Header from "@/components/Header";
import Link from "next/link";
import Services from "@/components/Services";
import SignatureServices from "@/components/SignatureServices";
import SignatureDestinations from "@/components/SignatureDestinations";
import WhyKemel from "@/components/WhyKemel";
import LuxuryBanner from "@/components/LuxuryBanner";

export default function Home() {
  return (
    <>
      <Header />

      <section className="relative h-screen overflow-hidden">

        {/* Vidéo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover scale-[1.02] animate-hero-zoom"
        >
          <source src="/videos/home-hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/10" />

        {/* Contenu */}
        <div className="absolute inset-0 flex items-center pt-24">
          <div className="mx-auto w-full max-w-7xl px-8 md:px-16 lg:px-28">

            <div className="max-w-xl animate-fade-up">

              <p className="mb-6 text-xs font-medium uppercase tracking-[0.55em] text-[#C6A15B]">
                MAISON DE SERVICES PREMIUM
              </p>

              <h1 className="font-serif text-6xl leading-[0.92] tracking-wide text-white md:text-8xl">
                LA MAISON
                <br />
                KEMEL
              </h1>

              <div className="mt-10 h-px w-32 bg-[#C6A15B]" />

              <p className="mt-10 max-w-lg text-xl leading-9 text-white/95">
                Le temps est devenu notre bien le plus précieux.
                <br />
                Nous avons choisi d'en prendre soin.
              </p>

              <div className="mt-14 flex flex-wrap gap-5">

                <Link
                  href="/la-maison"
                  className="rounded-sm bg-[#C6A15B] px-9 py-4 text-white transition-all duration-300 hover:bg-[#b18d4e] hover:shadow-2xl"
                >
                  Découvrir la Maison
                </Link>

                <Link
                  href="/contact"
                  className="rounded-sm border border-white/90 px-9 py-4 text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-2xl"
                >
                  Parler à un conseiller
                </Link>

              </div>

            </div>

          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white/70">

          <div className="animate-bounce">

            <div className="text-[11px] uppercase tracking-[0.45em]">
              SCROLL
            </div>

            <div className="mt-2 text-lg">
              ↓
            </div>

          </div>

        </div>

      </section>

      <Services />
      <SignatureServices />
      <SignatureDestinations />
      <WhyKemel />
      <LuxuryBanner />

    </>
  );
}