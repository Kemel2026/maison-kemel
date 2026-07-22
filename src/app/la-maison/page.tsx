import Header from "@/components/Header";
import Approach from "@/components/Approach";
import Commitment from "@/components/Commitment";
import Strengths from "@/components/Strengths";
import Manifest from "@/components/Manifest";
import FinalCTA from "@/components/FinalCTA";

export default function LaMaisonPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F8F5F0] text-[#2D2D2D]">

        {/* HERO */}

<section className="relative flex min-h-screen items-center justify-center overflow-hidden">

  {/* Vidéo */}

  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source src="/videos/maison-hero.mp4" type="video/mp4" />
  </video>

  {/* Voile pour la lisibilité */}

  <div className="absolute inset-0 bg-white/35" />

  {/* Dégradé haut */}

  <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F8F5F0] to-transparent" />

  {/* Dégradé bas */}

  <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#F8F5F0] to-transparent" />

  {/* Contenu */}

  <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-8 text-center">

    <p className="uppercase tracking-[0.45em] text-[#A67C35]">
      Maison de services premium
    </p>

    <h1 className="mt-10 font-serif text-6xl leading-none md:text-8xl">
      La Maison
    </h1>

    <div className="mt-10 h-px w-24 bg-[#C9A96A]" />

    <p className="mt-12 max-w-3xl font-serif text-2xl leading-relaxed text-[#494949] md:text-3xl">
      Le temps est devenu notre bien le plus précieux.
      <br />
      <span className="mt-6 block text-[#2D2D2D]">
        Nous avons choisi d'en prendre soin.
      </span>
    </p>

    <div className="mt-20 flex flex-col items-center text-[#A67C35]">

      <span className="text-[11px] uppercase tracking-[0.35em]">
        Découvrir
      </span>

      <div className="mt-4 h-12 w-px bg-[#C9A96A]" />

    </div>

  </div>

</section>

        {/* VISION */}

        <section className="mx-auto max-w-5xl bg-white px-8 py-36 text-center shadow-sm">

          <p className="uppercase tracking-[0.35em] text-[#B88A44]">
            Notre vision
          </p>

          <h2 className="mt-8 font-serif text-5xl text-[#2D2D2D]">
            Plus qu'une conciergerie.
          </h2>

          <div className="mx-auto mt-8 h-px w-24 bg-[#D9C39A]" />

          <div className="mx-auto mt-16 max-w-2xl space-y-10 text-lg leading-9 text-[#6B6B6B]">

            <p>
              Nous croyons que le véritable luxe ne réside plus dans
              l'accumulation, mais dans la liberté.
            </p>

            <p>
              La liberté de vivre pleinement, de déléguer les contraintes
              du quotidien et de consacrer son temps à ce qui compte réellement.
            </p>

            <p className="font-serif text-2xl text-[#2D2D2D]">
              La Maison KEMEL est née de cette conviction.
            </p>

          </div>

        </section>

        {/* PHILOSOPHIE */}

<section className="mx-auto max-w-7xl px-8 py-44">

  <div className="text-center">

    <p className="uppercase tracking-[0.35em] text-[#B88A44]">
      Notre Philosophie
    </p>

    <h2 className="mt-8 font-serif text-5xl text-[#2D2D2D]">
      Notre manière d'être.
    </h2>

    <div className="mx-auto mt-8 h-px w-24 bg-[#D9C39A]" />

  </div>

  <div className="mt-24 grid gap-8 md:grid-cols-2">

    <article className="rounded-3xl border border-[#E9E2D8] bg-white p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

      <p className="text-xs uppercase tracking-[0.4em] text-[#B88A44]">
        01
      </p>

      <h3 className="mt-6 font-serif text-4xl text-[#2D2D2D]">
        Le Temps
      </h3>

      <p className="mt-8 leading-8 text-[#6B6B6B]">
        Parce qu'il est la seule richesse que l'on ne peut remplacer. Notre rôle
        est de vous permettre de le consacrer à ce qui compte réellement.
      </p>

    </article>

    <article className="rounded-3xl border border-[#E9E2D8] bg-white p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

      <p className="text-xs uppercase tracking-[0.4em] text-[#B88A44]">
        02
      </p>

      <h3 className="mt-6 font-serif text-4xl text-[#2D2D2D]">
        Le Sur-Mesure
      </h3>

      <p className="mt-8 leading-8 text-[#6B6B6B]">
        Chaque accompagnement est conçu selon votre rythme, vos préférences et
        vos attentes. Rien n'est standardisé.
      </p>

    </article>

    <article className="rounded-3xl border border-[#E9E2D8] bg-white p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

      <p className="text-xs uppercase tracking-[0.4em] text-[#B88A44]">
        03
      </p>

      <h3 className="mt-6 font-serif text-4xl text-[#2D2D2D]">
        La Discrétion
      </h3>

      <p className="mt-8 leading-8 text-[#6B6B6B]">
        La confiance est au cœur de chaque relation. Vos informations, vos
        habitudes et vos demandes sont traitées avec la plus stricte
        confidentialité.
      </p>

    </article>

    <article className="rounded-3xl border border-[#E9E2D8] bg-white p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

      <p className="text-xs uppercase tracking-[0.4em] text-[#B88A44]">
        04
      </p>

      <h3 className="mt-6 font-serif text-4xl text-[#2D2D2D]">
        L'Exigence
      </h3>

      <p className="mt-8 leading-8 text-[#6B6B6B]">
        Nous sélectionnons avec soin nos partenaires et portons une attention
        constante à chaque détail afin d'offrir une qualité de service
        irréprochable.
      </p>

    </article>

  </div>

</section>

        <Approach />

        <Commitment />

        <Strengths />

        <Manifest />

        <FinalCTA />

      </main>
    </>
  );
}