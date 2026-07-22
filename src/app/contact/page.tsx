import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() 
{
  return (
    <>
      <Header />

      {/* HERO */}

      <section className="relative h-[50vh] overflow-hidden">

        <Image
          src="/contact-hero.jpg"
          alt="Contact Maison KEMEL"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />

        <div className="absolute inset-0 flex items-center">

          <div className="mx-auto w-full max-w-7xl px-8 lg:px-24">

            <div className="max-w-3xl">

              <p className="mb-6 text-xs uppercase tracking-[0.55em] text-[#D9C39A]">
                MAISON KEMEL
              </p>

              <h1 className="font-serif text-6xl leading-[0.95] text-white md:text-7xl">
                CONTACT
              </h1>

              <div className="mt-10 h-px w-28 bg-[#D9C39A]" />

              <p className="mt-10 text-xl leading-9 text-white/90">
                Chaque demande commence par une conversation.
                Ensemble, imaginons une expérience pensée
                exclusivement pour vous.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="bg-[#F8F5F0] py-32">

        <div className="mx-auto max-w-4xl px-8 text-center">

          <p className="text-xl uppercase tracking-[0.45em] text-[#B88A44]">
            À VOTRE ÉCOUTE
          </p>

          <h2 className="mt-8 font-serif text-2xl leading-tight text-[#2D2D2D]">
            Un échange.
            <br />
            Une attention.
            <br />
            Une solution sur mesure.
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-[#666]">
            Chez Maison KEMEL, chaque demande est étudiée avec le même niveau
            d'exigence. Qu'il s'agisse d'un séjour, d'un accompagnement
            personnel ou d'une prestation confidentielle, nous prenons le
            temps de comprendre vos attentes afin de vous proposer une
            réponse adaptée.
          </p>

        </div>

      </section>
{/* COORDONNÉES */}

<section className="bg-white py-28">

  <div className="mx-auto grid max-w-7xl gap-12 px-8 md:grid-cols-3">

    <div className="rounded-sm border border-[#E6DDCF] p-10">

      <p className="text-xs uppercase tracking-[0.35em] text-[#B88A44]">
        NOUS TROUVER
      </p>

      <h3 className="mt-6 font-serif text-3xl text-[#2D2D2D]">
        Une présence internationale
      </h3>

      <p className="mt-6 leading-8 text-[#666]">
        France<br />
        Europe<br />
        Asie<br />
        Afrique<br /><br />
        Interventions sur demande dans d'autres destinations.
      </p>

    </div>

    <div className="rounded-sm border border-[#E6DDCF] p-10">

      <p className="text-xs uppercase tracking-[0.35em] text-[#B88A44]">
        NOUS JOINDRE
      </p>

      <h3 className="mt-6 font-serif text-3xl text-[#2D2D2D]">
        Restons en contact
      </h3>

      <p className="mt-6 leading-8 text-[#666]">
        +33 6 58 28 99 08
        <br /><br />
        contact@maisonkemel.com
        <br /><br />
        WhatsApp disponible
      </p>

    </div>

    <div className="rounded-sm border border-[#E6DDCF] p-10">

      <p className="text-xs uppercase tracking-[0.35em] text-[#B88A44]">
        DISPONIBILITÉ
      </p>

      <h3 className="mt-6 font-serif text-3xl text-[#2D2D2D]">
        Nous vous répondons rapidement
      </h3>

      <p className="mt-6 leading-8 text-[#666]">
        7 jours / 7
        <br />
        Réponse sous 24 heures
        <br />
        Demandes urgentes selon disponibilité.
      </p>

    </div>

  </div>

</section>


    {/* FORMULAIRE */}

<section className="bg-[#F8F5F0] py-32">

  <div className="mx-auto max-w-5xl px-8">

    {/* INTRODUCTION */}

    <div className="text-center">

      <p className="text-xs uppercase tracking-[0.45em] text-[#B88A44]">
        PARLONS DE VOTRE PROJET
      </p>

      <h2 className="mt-8 font-serif text-5xl leading-tight text-[#2D2D2D]">
        Chaque demande mérite
        <br />
        une attention particulière.
      </h2>

      <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-[#666]">
        Nous prenons le temps de comprendre chaque projet afin de proposer une
        réponse personnalisée, discrète et adaptée à vos attentes.
      </p>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-[#666]">
        Parlez-nous de vos envies, d'un voyage, d'un événement, d'une demande
        particulière ou simplement de votre idée. Notre équipe reviendra vers
        vous dans les meilleurs délais.
      </p>

    </div>

    {/* FORMULAIRE */}

    <div className="mt-24 rounded-sm bg-white p-16 shadow-xl">

      <form className="space-y-8">

        <div className="grid gap-6 md:grid-cols-2">

          <input
            type="text"
            placeholder="Prénom"
            className="w-full border border-[#DDD] px-5 py-4 outline-none transition focus:border-[#B88A44]"
          />

          <input
            type="text"
            placeholder="Nom"
            className="w-full border border-[#DDD] px-5 py-4 outline-none transition focus:border-[#B88A44]"
          />

        </div>

        <input
          type="email"
          placeholder="Adresse e-mail"
          className="w-full border border-[#DDD] px-5 py-4 outline-none transition focus:border-[#B88A44]"
        />

        <input
          type="tel"
          placeholder="Téléphone"
          className="w-full border border-[#DDD] px-5 py-4 outline-none transition focus:border-[#B88A44]"
        />

        <input
          type="text"
          placeholder="Pays de résidence"
          className="w-full border border-[#DDD] px-5 py-4 outline-none transition focus:border-[#B88A44]"
        />

        <select
          defaultValue=""
          className="w-full border border-[#DDD] bg-white px-5 py-4 outline-none transition focus:border-[#B88A44]"
        >
          <option value="" disabled>
            Objet de votre demande
          </option>

          <option>Voyage & Séjour</option>
          <option>Hospitalité Premium</option>
          <option>Personal Shopping</option>
          <option>Événement privé</option>
          <option>Accompagnement VIP</option>
          <option>Autre demande</option>

        </select>

        <textarea
          rows={12}
          placeholder="Décrivez votre projet, vos envies ou votre demande..."
          className="w-full border border-[#DDD] px-5 py-5 outline-none transition focus:border-[#B88A44]"
        />

        <button
          type="submit"
          className="w-full rounded-full bg-[#B88A44] py-5 text-xs uppercase tracking-[0.35em] text-white transition hover:bg-[#9D7439]"
        >
          Envoyer ma demande
        </button>

      </form>

    </div>

  </div>

</section>

{/* POURQUOI CHOISIR MAISON KEMEL */}

<section className="bg-white py-32">

  <div className="mx-auto max-w-7xl px-8">

    <div className="text-center">

      <p className="text-xs uppercase tracking-[0.45em] text-[#B88A44]">
        POURQUOI MAISON KEMEL ?
      </p>

      <h2 className="mt-8 font-serif text-5xl leading-tight text-[#2D2D2D]">
        Une relation fondée sur
        <br />
        la confiance et l'exigence.
      </h2>

    </div>

    <div className="mt-20 grid gap-10 md:grid-cols-3">

      <div className="rounded-sm border border-[#E8DED0] p-10">

        <h3 className="font-serif text-3xl text-[#2D2D2D]">
          Confidentialité
        </h3>

        <p className="mt-6 leading-8 text-[#666]">
          Vos demandes sont traitées avec la plus grande discrétion.
          Nous attachons une importance particulière à la confidentialité
          de chaque échange.
        </p>

      </div>

      <div className="rounded-sm border border-[#E8DED0] p-10">

        <h3 className="font-serif text-3xl text-[#2D2D2D]">
          Excellence
        </h3>

        <p className="mt-6 leading-8 text-[#666]">
          Nous sélectionnons rigoureusement nos partenaires afin de
          garantir une qualité de service constante et irréprochable.
        </p>

      </div>

      <div className="rounded-sm border border-[#E8DED0] p-10">

        <h3 className="font-serif text-3xl text-[#2D2D2D]">
          Personnalisation
        </h3>

        <p className="mt-6 leading-8 text-[#666]">
          Aucune demande ne ressemble à une autre.
          Chaque prestation est conçue sur mesure selon vos attentes.
        </p>

      </div>

    </div>

  </div>

</section>

{/* FAQ */}

<section className="bg-[#F8F5F0] py-32">

  <div className="mx-auto max-w-4xl px-8">

    <div className="text-center">

      <p className="text-xs uppercase tracking-[0.45em] text-[#B88A44]">
        QUESTIONS FRÉQUENTES
      </p>

      <h2 className="mt-8 font-serif text-5xl text-[#2D2D2D]">
        Vous vous posez peut-être
        quelques questions.
      </h2>

    </div>

    <div className="mt-20 space-y-10">

      <div>
        <h3 className="font-semibold text-xl text-[#2D2D2D]">
          Sous quel délai recevez-vous une réponse ?
        </h3>

        <p className="mt-4 leading-8 text-[#666]">
          Nous répondons généralement sous 24 heures ouvrées.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-xl text-[#2D2D2D]">
          Intervenez-vous à l'étranger ?
        </h3>

        <p className="mt-4 leading-8 text-[#666]">
          Oui. Maison KEMEL accompagne ses clients en Europe, en Afrique, en Asie, ainsi que dans d'autres destinations
          selon les projets.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-xl text-[#2D2D2D]">
          Puis-je demander une prestation entièrement sur mesure et selon mes envies ?
        </h3>

        <p className="mt-4 leading-8 text-[#666]">
          Oui. C'est le cœur de notre approche.
          Nous adaptons chacune de nos prestations à vos besoins.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-xl text-[#2D2D2D]">
          Comment se déroule le premier échange ?
        </h3>

        <p className="mt-4 leading-8 text-[#666]">
          Nous échangeons avec vous afin de comprendre vos attentes,
          puis nous élaborons une proposition adaptée à votre projet et à votre besoin.
        </p>
      </div>

    </div>

  </div>

</section>

    </>
  );
}