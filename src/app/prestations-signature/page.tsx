import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function PrestationsSignaturePage() {
  return (
    <>
      <Header />

      <section className="relative h-[65vh] min-h-[560px] overflow-hidden">

    <Image
        src="/images/prestations-signature-hero.jpg"
        alt="Prestations Signature"
        fill
        priority
        className="object-cover object-right"
    />

    {/* Voile */}

    <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5F0]/95 via-[#F8F5F0]/60 to-transparent" />

    {/* Contenu */}

    <div className="relative z-10 flex h-full items-center">

        <div className="mx-auto w-full max-w-7xl px-8">

            <div className="max-w-xl">

                <p className="mb-8 uppercase tracking-[0.45em] text-xl text-stone-500">

                    Prestations Signature

                </p>

                <h1 className="font-display text-5xl md:text-6xl leading-[0.92] tracking-[-0.03em] text-[#2D2D2D]">

    Chaque prestation
    <br />
    est pensée comme
    <br />
    une expérience.

</h1>

                <p className="mt-10 max-w-md text-lg leading-8 text-stone-600">

    Derrière chaque demande se cache une histoire.
    Notre rôle est de l'imaginer,
    de l'orchestrer et de lui donner vie
    avec exigence et discrétion.

</p>

            </div>

        </div>

    </div>

</section>

      
{/* CITATION */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-5xl px-8 text-center">

    <div className="mx-auto mb-10 h-px w-24 bg-[#D9C39A]" />

    <p className="font-serif text-4xl leading-relaxed italic text-[#8C6A3B]">
      « Les prestations les plus mémorables sont celles dont le client
      n'a jamais eu à se préoccuper. »
    </p>

    <div className="mx-auto mt-10 h-px w-24 bg-[#D9C39A]" />

  </div>

</section>

{/* PRESTATION 1 */}

<section className="bg-[#F8F5F0] py-24">

  <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">

    <div className="relative h-[650px] overflow-hidden rounded-sm">

      <Image
        src="/accompagnements-vip.png"
        alt="Accompagnement VIP"
        fill
        className="object-cover transition duration-700 hover:scale-105"
      />

    </div>

    <div>

      <p className="text-xs uppercase tracking-[0.35em] text-[#B88A44]">
        PRESTATION SIGNATURE
      </p>

      <h2 className="mt-6 font-serif text-5xl text-[#2D2D2D]">
        Accompagnement VIP
      </h2>

      <div className="mt-8 h-px w-20 bg-[#D9C39A]" />

      <p className="mt-8 text-lg leading-9 text-[#666]">
        Dès votre arrivée et tout au long de votre parcours, nous coordonnons
        chaque étape pour vous offrir une expérience fluide, discrète et
        parfaitement maîtrisée.
      </p>

      <ul className="mt-10 space-y-3 text-[#555] leading-8">
        <li>• Accueil personnalisé</li>
        <li>• Chauffeur privé</li>
        <li>• Coordination complète</li>
        <li>• Assistance dédiée</li>
      </ul>

    </div>

  </div>

</section>

{/* PRESTATION 2 */}

<section className="bg-white py-24">

  <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">

    <div className="order-2 lg:order-1">

      <p className="text-xs uppercase tracking-[0.35em] text-[#B88A44]">
        PRESTATION SIGNATURE
      </p>

      <h2 className="mt-6 font-serif text-5xl text-[#2D2D2D]">
        Services Confidentiels
      </h2>

      <div className="mt-8 h-px w-20 bg-[#D9C39A]" />

      <p className="mt-8 text-lg leading-9 text-[#666]">
        Qu'il s'agisse d'une recherche spécifique, d'une organisation complexe, ou d'une coordination internationale, nous mobilisons nos partenaires de confiance pour orchestrer chaque mission avec confidentialité, rigueur et élégance.
      </p>

      <ul className="mt-10 space-y-3 text-[#555] leading-8">
        <li>• Coordination confidentielle</li>
        <li>• Recherche et sourcing sur mesure</li>
        <li>• Organisation de rendez-vous privés</li>
        <li>• Gestion de demandes urgentes</li>
        <li>• Livraison confidentielle à l'étranger</li>
      </ul>

      <blockquote className="mt-10 border-l-2 border-[#D9C39A] pl-6 italic text-[#8C6A3B]">
        « Certaines demandes ne s'expliquent pas. Elles se réalisent, simplement, avec confiance. »
      </blockquote>

    </div>

    <div className="relative order-1 h-[650px] overflow-hidden rounded-sm lg:order-2">

      <Image
    src="/services-confidentiels.png"
    alt="Services Confidentiels"
    fill
    className="object-cover transition duration-700 hover:scale-[1.03]"
/>

    </div>

  </div>

</section>

{/* PRESTATION 3 */}

<section className="bg-[#F8F5F0] py-24">

  <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">

    <div className="relative h-[650px] overflow-hidden rounded-sm">

      <Image
    src="/sejours-immersifs.png"
    alt="Séjours Immersifs"
    fill
    className="object-cover transition duration-700 hover:scale-[1.03]"
/>

    </div>

    <div>

      <p className="text-xs uppercase tracking-[0.35em] text-[#B88A44]">
        PRESTATION SIGNATURE
      </p>

      <h2 className="mt-6 font-serif text-5xl text-[#2D2D2D]">
        Séjours
        <br />
        Immersifs
      </h2>

      <div className="mt-8 h-px w-20 bg-[#D9C39A]" />

      <p className="mt-8 text-lg leading-9 text-[#666]">
        Découvrez une destination autrement. Nous imaginons des voyages
        où authenticité, raffinement et rencontres privilégiées
        se conjuguent pour créer des souvenirs durables.
      </p>

      <ul className="mt-10 space-y-3 text-[#555] leading-8">
        <li>• Itinéraires sur mesure</li>
        <li>• Guides privés</li>
        <li>• Expériences exclusives</li>
        <li>• Hébergements d'exception</li>
        <li>• Assistance durant le séjour</li>
      </ul>

      <blockquote className="mt-10 border-l-2 border-[#D9C39A] pl-6 italic text-[#8C6A3B]">
        « Les plus beaux voyages sont ceux qui racontent une histoire. »
      </blockquote>

    </div>

  </div>

</section>

{/* PRESTATION 4 */}

<section className="bg-white py-24">

  <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">

    <div className="order-2 lg:order-1">

      <p className="text-xs uppercase tracking-[0.35em] text-[#B88A44]">
        PRESTATION SIGNATURE
      </p>

      <h2 className="mt-6 font-serif text-5xl text-[#2D2D2D]">
        Hospitalité
        <br />
        Premium
      </h2>

      <div className="mt-8 h-px w-20 bg-[#D9C39A]" />

      <p className="mt-8 text-lg leading-9 text-[#666]">
        Avant même votre arrivée, votre résidence est préparée avec le plus
        grand soin. Chaque détail est pensé pour que vous retrouviez un lieu
        accueillant, élégant et parfaitement organisé.
      </p>

      <ul className="mt-10 space-y-3 text-[#555] leading-8">
        <li>• Préparation de villa ou appartement</li>
        <li>• Courses avant arrivée</li>
        <li>• Chef ou majordome sur demande</li>
        <li>• Intendance et coordination</li>
        <li>• Services à domicile</li>
      </ul>

      <blockquote className="mt-10 border-l-2 border-[#D9C39A] pl-6 italic text-[#8C6A3B]">
        « Se sentir attendu avant même d'être arrivé. »
      </blockquote>

    </div>

    <div className="relative order-1 h-[650px] overflow-hidden rounded-sm lg:order-2">

      <Image
  src="/hospitalite-premium_v2.jpg"
  alt="Hospitalité Premium"
  fill
  className="object-cover transition duration-700 hover:scale-[1.03]"
/>

    </div>

  </div>

</section>

{/* PRESTATION 5 */}

<section className="bg-[#F8F5F0] py-24">

  <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">

    <div className="relative h-[650px] overflow-hidden rounded-sm">

      <Image
    src="/personal-shopping.jpg"
    alt="Personal Shopping"
    fill
    className="object-cover transition duration-700 hover:scale-[1.03]"
/>

    </div>

    <div>

      <p className="text-xs uppercase tracking-[0.35em] text-[#B88A44]">
        PRESTATION SIGNATURE
      </p>

      <h2 className="mt-6 font-serif text-5xl text-[#2D2D2D]">
        Personal Shopping
      </h2>

      <div className="mt-8 h-px w-20 bg-[#D9C39A]" />

      <p className="mt-8 text-lg leading-9 text-[#666]">
        Nous recherchons les pièces qui vous ressemblent, des créations
        exclusives aux objets rares. Notre réseau international permet de
        répondre aux demandes les plus exigeantes.
      </p>

      <ul className="mt-10 space-y-3 text-[#555] leading-8">
        <li>• Mode & Haute Couture</li>
        <li>• Horlogerie</li>
        <li>• Joaillerie</li>
        <li>• Pièces rares</li>
        <li>• Achats internationaux</li>
      </ul>

      <blockquote className="mt-10 border-l-2 border-[#D9C39A] pl-6 italic text-[#8C6A3B]">
        « L'exception se trouve parfois là où personne ne pense à chercher. »
      </blockquote>

    </div>

  </div>

</section>

{/* PRESTATION 6 */}

<section className="bg-white py-24">

  <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">

    <div className="order-2 lg:order-1">

      <p className="text-xs uppercase tracking-[0.35em] text-[#B88A44]">
        PRESTATION SIGNATURE
      </p>

      <h2 className="mt-6 font-serif text-5xl text-[#2D2D2D]">
        Livraisons
        <br />
        Signature
      </h2>

      <div className="mt-8 h-px w-20 bg-[#D9C39A]" />

      <p className="mt-8 text-lg leading-9 text-[#666]">
        Parce que certaines attentions marquent davantage que de longs
        discours, nous imaginons et organisons des livraisons personnalisées
        qui créent des souvenirs durables.
      </p>

      <ul className="mt-10 space-y-3 text-[#555] leading-8">
        <li>• Champagnes de niche</li>
        <li>• Cadeaux personnalisés</li>
        <li>• Compositions florales</li>
        <li>• Coffrets premium</li>
        <li>• Livraison confidentielle</li>
      </ul>

      <blockquote className="mt-10 border-l-2 border-[#D9C39A] pl-6 italic text-[#8C6A3B]">
        « Les plus belles attentions sont celles qui arrivent au bon moment. »
      </blockquote>

    </div>

    <div className="relative order-1 h-[650px] overflow-hidden rounded-sm lg:order-2">

      <Image
    src="/livraisons-signature.png"
    alt="Livraisons Siganture"
    fill
    className="object-cover transition duration-700 hover:scale-[1.03]"
/>

    </div>

  </div>

</section>

{/* NOTRE MÉTHODE */}

<section className="bg-[#2D2D2D] py-32">

  <div className="mx-auto max-w-6xl px-8">

    <div className="text-center">

      <p className="text-xs uppercase tracking-[0.45em] text-[#D9C39A]">
        NOTRE MÉTHODE
      </p>

      <h2 className="mt-8 font-serif text-5xl leading-tight text-white">
        Une expérience fluide,
        <br />
        du premier échange jusqu'au dernier détail.
      </h2>

      <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-white/75">
        Derrière chaque prestation se cache une méthode exigeante.
        Notre rôle est de comprendre vos attentes, d'anticiper les besoins
        et de coordonner chaque étape avec discrétion et précision.
      </p>

    </div>

    <div className="mt-24 grid gap-16 md:grid-cols-2 lg:grid-cols-4">

      <div>
        <span className="font-serif text-6xl text-[#D9C39A]">01</span>

        <h3 className="mt-6 text-xl font-semibold text-white">
          Écouter
        </h3>

        <p className="mt-4 leading-8 text-white/70">
          Nous prenons le temps de comprendre vos attentes,
          vos habitudes et vos envies.
        </p>
      </div>

      <div>
        <span className="font-serif text-6xl text-[#D9C39A]">02</span>

        <h3 className="mt-6 text-xl font-semibold text-white">
          Concevoir
        </h3>

        <p className="mt-4 leading-8 text-white/70">
          Nous élaborons une proposition entièrement personnalisée,
          adaptée à votre demande.
        </p>
      </div>

      <div>
        <span className="font-serif text-6xl text-[#D9C39A]">03</span>

        <h3 className="mt-6 text-xl font-semibold text-white">
          Orchestrer
        </h3>

        <p className="mt-4 leading-8 text-white/70">
          Chaque prestataire est coordonné avec rigueur afin de
          garantir une exécution irréprochable.
        </p>
      </div>

      <div>
        <span className="font-serif text-6xl text-[#D9C39A]">04</span>

        <h3 className="mt-6 text-xl font-semibold text-white">
          Sublimer
        </h3>

        <p className="mt-4 leading-8 text-white/70">
          Vous profitez pleinement de l'instant pendant que
          nous veillons discrètement à chaque détail.
        </p>
      </div>

    </div>

  </div>

</section>

{/* CTA FINAL */}

<section className="bg-[#F8F5F0] py-32">

  <div className="mx-auto max-w-4xl px-8 text-center">

    <p className="text-xs uppercase tracking-[0.45em] text-[#B88A44]">
      UNE DEMANDE PARTICULIÈRE ?
    </p>

    <h2 className="mt-8 font-serif text-6xl leading-tight text-[#2D2D2D]">
      Donnons vie
      <br />
      à votre prochaine expérience.
    </h2>

    <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-[#666]">
      Chaque demande est unique.
      Que vous souhaitiez organiser un séjour, offrir une attention
      particulière ou bénéficier d'un accompagnement personnalisé,
      notre équipe est à votre écoute.
    </p>

    <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row">

      <Link
        href="/contact"
        className="rounded-full bg-[#B88A44] px-10 py-4 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-[#9E7438]"
      >
        Parler à un conseiller
      </Link>

      <Link
        href="/univers"
        className="rounded-full border border-[#B88A44] px-10 py-4 text-xs uppercase tracking-[0.3em] text-[#B88A44] transition hover:bg-[#B88A44] hover:text-white"
      >
        Découvrir nos univers
      </Link>

    </div>

  </div>

</section>

    </>
  );
}