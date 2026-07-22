"use client";

import { useState } from "react";
import Header from "@/components/Header";

type UniverseTemplateProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  philosophy: string;
};
export default function UniverseTemplate({
  eyebrow,
  title,
  subtitle,
  philosophy,
}: UniverseTemplateProps) {

  const [opened, setOpened] = useState<number | null>(null);

  const items = [
  {
    title: "Organisation du quotidien",
    content:
      "Nous orchestrons votre quotidien grâce à une organisation discrète, efficace et entièrement personnalisée."
  },
  {
    title: "Gestion d'agenda",
    content:
      "Planification, rappels, coordination de rendez-vous et optimisation de votre emploi du temps."
  },
  {
    title: "Réservations & déplacements",
    content:
      "Restaurants, hôtels, transports, billets et itinéraires organisés selon vos préférences."
  },
  {
    title: "Assistance administrative",
    content:
      "Accompagnement dans vos démarches administratives et suivi de vos demandes."
  },
  {
    title: "Coordination de prestataires",
    content:
      "Recherche, sélection et coordination de professionnels de confiance."
  },
  {
    title: "Demandes sur mesure",
    content:
      "Chaque demande est étudiée avec discrétion afin d'apporter une solution adaptée."
  }
];


  return (
    <main className="bg-[#F8F5F0]">
      <Header />

      {/* HERO */}

      <section className="mx-auto flex min-h-screen flex-col items-center justify-center pt-24 px-8 py-32 text-center">

        <p className="text-sm uppercase tracking-[0.45em] text-[#B88A44]">
          {eyebrow}
        </p>

        <h1 className="mt-8 font-serif text-5xl leading-tight text-[#2D2D2D] md:text-7xl">
          {title}
        </h1>

        <p className="mt-10 max-w-xl font-serif text-4xl leading-relaxed text-[#5B5B5B]">
          <>
Retrouvez ce que vous avez
<br />
de plus précieux.

<span className="mt-10 block text-5xl font-serif text-[#2D2D2D]">
Votre temps.
</span>
</>
        </p>

        <div className="mt-16 h-px w-24 bg-[#D9C39A]" />

      </section>

      <section className="mx-auto max-w-5xl px-8 py-32 text-center">
<div className="text-center">

  <h2 className="font-serif text-5xl text-[#2D2D2D]">
    Nos savoir-faire
  </h2>

  <div className="mx-auto mt-8 h-px w-24 bg-[#D9C39A]" />

</div>

  <div className="mt-20">

    <div className="mt-20">

  {items.map((item, index) => (

    <div
      key={index}
      className="border-b border-[#E8E1D5] py-8"
    >

      <button
        onClick={() =>
          setOpened(opened === index ? null : index)
        }
        className="w-full flex items-center justify-between"
      >

        <span className="font-serif text-4xl text-[#2D2D2D]">
          {item.title}
        </span>

        <span
  className={`text-4xl text-[#B88A44] transition-all duration-2000 ${
    opened === index ? "rotate-90" : ""
  }`}
>
  →
</span>

      </button>

      <div
  className={`overflow-hidden transition-all duration-1500 ease-in-out ${
    opened === index
      ? "max-h-40 opacity-100 translate-y-0"
      : "max-h-0 opacity-0 -translate-y-2"
  }`}
>

        <p className="mt-5 ml-4 max-w-2xl text-lg leading-9 text-[#6B6B6B]">
  {item.content}
</p>
      

      </div>

    </div>

  ))}

</div>

  </div>

</section>

<section className="mx-auto max-w-5xl px-8 pt-20 pb-28 text-center">

<h2 className="font-serif text-5xl text-[#2D2D2D]">
  Quand faire appel à KEMEL ?
</h2>

<div className="mx-auto mt-8 h-px w-24 bg-[#D9C39A]" />
<div className="mx-auto mt-12 max-w-4xl">

  <p className="font-serif text-2xl leading-relaxed text-[#2D2D2D]">
    Certaines situations méritent simplement de pouvoir compter sur quelqu'un de confiance.
  </p>

  <p className="mt-8 text-3xl leading-9 text-[#6B6B6B]">
    Derrière chaque demande se cache un moment important, un besoin, une urgence,
    une envie ou un projet.
    <br />
    KEMEL vous accompagne avec discrétion, exigence et sérénité.
  </p>

</div>

</section>

</main>
);
}