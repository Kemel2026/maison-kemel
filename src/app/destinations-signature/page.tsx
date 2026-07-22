import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import LuxuryVideo from "@/components/LuxuryVideo";

export default function DestinationsPage() {
  return (
    <>
      <Header />

      {/* HERO */}

      <section className="relative h-[65vh] overflow-hidden">

        <Image
          src="/destinations-hero-v2.jpg"
          alt="Destinations Signature"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-white/15" />

        <div className="absolute inset-0 flex items-center">

          <div className="mx-auto w-full max-w-7xl px-8 lg:px-24">

            <div className="max-w-3xl">

              <p className="mb-6 text-xl uppercase tracking-[0.55em] text-[#8A6A35]">
                DESTINATIONS SIGNATURE
              </p>

              <h1 className="font-serif text-3xl leading-[0.95] text-[#1F1F1F] md:text-3xl">
                LE MONDE, 
                <br />
                SÉLECTIONNÉ AUTREMENT.
              </h1>

              <div className="mt-10 h-px w-28 bg-[#D9C39A]" />

              <p className="mt-10 text-xl leading-9 text-white/">
                Le monde, sélectionné autrement.
                Chaque destination est une invitation à vivre une
                expérience unique, imaginée autour de vos envies.
                Nous sélectionnons des destinations où l'excellence du service, l'authenticité des expériences et la qualité des partenaires répondent aux standards de la Maison KEMEL.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="bg-[#F8F5F0] py-32">

        <div className="mx-auto max-w-4xl px-8 text-center">

          <p className="text-xs uppercase tracking-[0.45em] text-[#B88A44]">
            L'ART DU VOYAGE
          </p>

          <h2 className="mt-8 font-serif text-5xl leading-tight text-[#2D2D2D]">
            Voyager autrement,
            <br />
            vivre intensément.
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-[#666]">
            Nous sélectionnons des destinations qui racontent une histoire.
            Des lieux où l'on ralentit, où l'on découvre, où l'on partage.
            Chaque séjour est construit autour d'expériences authentiques,
            d'adresses confidentielles et de partenaires soigneusement
            sélectionnés.
          </p>

        </div>

      </section>

      {/* DESTINATIONS */}

<section className="bg-white py-32">

  <div className="mx-auto max-w-7xl px-8">

    <div className="grid gap-16">

      {/* Phuket */}

      <div className="grid items-center gap-12 lg:grid-cols-2">

        <LuxuryVideo
  src="/videos/phuket.mp4"
  className="h-[500px] rounded-sm"
  playbackRate={0.4}
/>

        <div>

          <p className="text-xs uppercase tracking-[0.4em] text-[#B88A44]">
            THAÏLANDE
          </p>

          <h2 className="mt-6 font-serif text-5xl text-[#2D2D2D]">
            Sous le soleil de Phuket
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#666]">
            Entre plages préservées, villas confidentielles,
            gastronomie raffinée et excursions en mer,
            Phuket offre une parenthèse où luxe et authenticité
            se rencontrent.
          </p>

        </div>

      </div>

      {/* Bali */}

      <div className="grid items-center gap-12 lg:grid-cols-2">

        <div className="order-2 lg:order-1">

          <p className="text-xs uppercase tracking-[0.4em] text-[#B88A44]">
            INDONÉSIE
          </p>

          <h2 className="mt-6 font-serif text-5xl text-[#2D2D2D]">
            L'âme de Bali
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#666]">
            Rizières, temples, spas d'exception et expériences
            culturelles composent un voyage où le bien-être
            et la spiritualité prennent tout leur sens.
          </p>

        </div>

        <div className="relative order-1 h-[500px] overflow-hidden rounded-sm lg:order-2">

          <Image
            src="/bali.jpg"
            alt="Bali"
            fill
            className="object-cover"
          />

        </div>

      </div>

    </div>

  </div>

</section>

{/* DESTINATIONS IMMERSIVES */}

<section className="bg-[#F8F5F0] py-32">

  <div className="mx-auto max-w-7xl space-y-32 px-8">

    {/* CAMBODGE */}

    <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

      <div className="relative h-[620px] overflow-hidden rounded-sm">

        <Image
          src="/angkor.jpg"
          alt="Le silence d'Angkor"
          fill
          className="object-cover"
        />

      </div>

      <div>

        <p className="text-xs uppercase tracking-[0.45em] text-[#B88A44]">
          CAMBODGE
        </p>

        <h2 className="mt-6 font-serif text-5xl text-[#2D2D2D]">
          Le silence d'Angkor
        </h2>

        <blockquote className="mt-8 border-l-2 border-[#D9C39A] pl-6 italic text-xl leading-9 text-[#777]">
          « Certains voyages changent notre regard sur le monde. »
        </blockquote>

        <p className="mt-8 text-lg leading-9 text-[#666]">
          Entre temples millénaires, spiritualité et rencontres authentiques,
          le Cambodge invite à ralentir et à vivre une expérience profondément
          humaine.
        </p>

      </div>

    </div>

    {/* SALY */}

    <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

      <div>

        <p className="text-xs uppercase tracking-[0.45em] text-[#B88A44]">
          SÉNÉGAL
        </p>

        <h2 className="mt-6 font-serif text-5xl text-[#2D2D2D]">
          L'énergie de Saly
        </h2>

        <p className="mt-8 text-lg leading-9 text-[#666]">
          Entre océan, gastronomie, culture et hospitalité, Saly révèle une
          Afrique contemporaine, élégante et vibrante.
        </p>

      </div>

      <div className="relative h-[420px] overflow-hidden rounded-sm">

        <Image
          src="/saly.jpg"
          alt="Saly"
          fill
          className="object-cover"
        />

      </div>

    </div>

    {/* KUALA LUMPUR */}

    <div className="grid items-center gap-16 lg:grid-cols-2">

      <div className="relative h-[560px] overflow-hidden rounded-sm">

        <Image
          src="/kuala-lumpur.jpg"
          alt="Kuala Lumpur"
          fill
          className="object-cover"
        />

      </div>

      <div>

        <p className="text-xs uppercase tracking-[0.45em] text-[#B88A44]">
          MALAISIE
        </p>

        <h2 className="mt-6 font-serif text-5xl text-[#2D2D2D]">
          Les nuits de Kuala Lumpur
        </h2>

        <p className="mt-8 text-lg leading-9 text-[#666]">
          Rooftops confidentiels, architecture iconique, gastronomie
          cosmopolite et hôtels d'exception composent une destination
          aussi raffinée qu'effervescente.
        </p>

      </div>

    </div>

  </div>

</section>
{/* EXPÉRIENCES */}

<section className="bg-white py-32">

  <div className="mx-auto max-w-7xl px-8">

    <div className="text-center">

      <p className="text-xs uppercase tracking-[0.45em] text-[#B88A44]">
        EXPÉRIENCES SIGNATURE
      </p>

      <h2 className="mt-8 font-serif text-5xl leading-tight text-[#2D2D2D]">
        Bien plus qu'une destination.
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#666]">
        Nous imaginons des moments qui resteront gravés dans vos souvenirs.
      </p>

    </div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <div className="border border-[#E8DED0] p-10">
        <h3 className="font-serif text-3xl">🍽️ Dîner privé</h3>
        <p className="mt-5 leading-8 text-[#666]">
          Sur une plage, un rooftop ou dans une villa d'exception.
        </p>
      </div>

      <div className="border border-[#E8DED0] p-10">
        <h3 className="font-serif text-3xl">🛥️ Journée en yacht</h3>
        <p className="mt-5 leading-8 text-[#666]">
          Navigation privée vers des lieux confidentiels.
        </p>
      </div>

      <div className="border border-[#E8DED0] p-10">
        <h3 className="font-serif text-3xl">🧘 Bien-être</h3>
        <p className="mt-5 leading-8 text-[#666]">
          Retraites, spas et expériences de reconnexion.
        </p>
      </div>

      <div className="border border-[#E8DED0] p-10">
        <h3 className="font-serif text-3xl">🚁 Vue du ciel</h3>
        <p className="mt-5 leading-8 text-[#666]">
          Hélicoptère, hydravion ou vol panoramique.
        </p>
      </div>

      <div className="border border-[#E8DED0] p-10">
        <h3 className="font-serif text-3xl">👨‍🍳 Chef privé</h3>
        <p className="mt-5 leading-8 text-[#666]">
          Une table pensée exclusivement pour vous.
        </p>
      </div>

      <div className="border border-[#E8DED0] p-10">
        <h3 className="font-serif text-3xl">✨ Expérience sur mesure</h3>
        <p className="mt-5 leading-8 text-[#666]">
          Parce que les plus beaux souvenirs ne figurent dans aucun catalogue.
        </p>
      </div>

    </div>

  </div>

</section>
{/* NOTRE VISION */}

<section className="bg-[#2D2D2D] py-32">

  <div className="mx-auto max-w-5xl px-8 text-center">

    <p className="text-xs uppercase tracking-[0.45em] text-[#D9C39A]">
      NOTRE PHILOSOPHIE
    </p>

    <h2 className="mt-8 font-serif text-6xl leading-tight text-white">
      Nous ne proposons pas
      <br />
      des destinations.
    </h2>

    <p className="mx-auto mt-12 max-w-3xl text-2xl italic leading-10 text-white/80">
      Nous imaginons des histoires que vous aurez envie de raconter.
    </p>

    <div className="mt-20 grid gap-10 md:grid-cols-3">

      <div>

        <h3 className="font-serif text-3xl text-[#D9C39A]">
          Authenticité
        </h3>

        <p className="mt-6 leading-8 text-white/70">
          Des rencontres sincères, des lieux vivants et des expériences qui
          révèlent l'âme de chaque destination.
        </p>

      </div>

      <div>

        <h3 className="font-serif text-3xl text-[#D9C39A]">
          Excellence
        </h3>

        <p className="mt-6 leading-8 text-white/70">
          Des partenaires sélectionnés avec exigence pour offrir un niveau de
          qualité irréprochable.
        </p>

      </div>

      <div>

        <h3 className="font-serif text-3xl text-[#D9C39A]">
          Sur mesure
        </h3>

        <p className="mt-6 leading-8 text-white/70">
          Chaque itinéraire est conçu autour de vos envies, de votre rythme et
          de vos priorités.
        </p>

      </div>

    </div>

  </div>

</section>
{/* DESTINATION SUR MESURE */}

<section className="bg-[#F8F5F0] py-32">

  <div className="mx-auto max-w-4xl px-8 text-center">

    <p className="text-xs uppercase tracking-[0.45em] text-[#B88A44]">
      SUR MESURE
    </p>

    <h2 className="mt-8 font-serif text-5xl leading-tight text-[#2D2D2D]">
      Et si votre prochaine destination
      n'était pas encore sur cette page ?
    </h2>

    <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-[#666]">
      Les destinations présentées ici sont une source d'inspiration.
      Maison KEMEL imagine également des séjours entièrement personnalisés,
      partout dans le monde, selon vos envies, vos projets et vos aspirations.
    </p>

  </div>

</section>
{/* CTA FINAL */}

<section className="bg-white py-32">

  <div className="mx-auto max-w-5xl rounded-sm bg-[#2D2D2D] px-12 py-24 text-center">

    <p className="text-xs uppercase tracking-[0.45em] text-[#D9C39A]">
      MAISON KEMEL
    </p>

    <h2 className="mt-8 font-serif text-6xl leading-tight text-white">
      Où souhaitez-vous que
      votre prochaine histoire commence ?
    </h2>

    <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-white/75">
      Notre équipe imagine des expériences uniques, pensées autour de vos
      envies, de vos inspirations et de votre manière de voyager.
    </p>

    <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row">

      <Link
        href="/contact"
        className="rounded-full bg-[#B88A44] px-10 py-4 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-[#9D7439]"
      >
        Imaginer mon voyage
      </Link>

      <Link
        href="/prestations-signature"
        className="rounded-full border border-[#D9C39A] px-10 py-4 text-xs uppercase tracking-[0.3em] text-[#D9C39A] transition hover:bg-white hover:text-[#2D2D2D]"
      >
        Découvrir nos prestations
      </Link>

    </div>

  </div>

</section>
    </>
  );
}