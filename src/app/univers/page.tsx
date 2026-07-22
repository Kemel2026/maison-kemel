"use client";

import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Image from "next/image";
import UniverseList from "@/components/UniverseList";

const univers = [
    {
        number: "01",
        title: "Personal Shopping",
        image: "/images/univers/personal-shopping.jpg",
        description:
            "Des sélections soigneusement pensées pour répondre à vos envies, partout dans le monde.",
        items: [
            "Achat & livraison internationale",
            "Montres & Joaillerie",
            "Art de vivre",
            "Beauté & Bien-être",
            "Produits d'exception",
            "Vins & Spiritueux",
        ],
    },
    {
        number: "02",
        title: "Hospitalité Premium",
        image: "/images/univers/hospitalite-premium.jpg",
        description:
            "Des lieux d'exception et des services personnalisés pour vivre chaque séjour dans les meilleures conditions.",
        items: [
            "Villas haut de gamme",
            "Appartements premium",
            "Chef privé",
            "Majordome",
            "Services à domicile",
        ],
    },
    {
        number: "03",
        title: "Voyages & Expériences",
        image: "/images/univers/voyages-experiences.jpg",
        description:
            "Des expériences immersives imaginées avec nos partenaires pour découvrir une destination autrement.",
        items: [
            "Séjours immersifs",
            "Expériences exclusives",
            "Voyages sur mesure",
            "Escapades privées",
        ],
    },
    {
        number: "04",
        title: "Événementiel Privé",
        image: "/images/univers/evenementiel-prive.jpg",
        description:
            "Des moments uniques imaginés jusque dans les moindres détails.",
        items: [
            "Événements privés",
            "Demandes en mariage",
            "Anniversaires",
            "Dîners intimistes",
        ],
    },
    {
        number: "05",
        title: "Services Privés Premium",
        image: "/images/univers/services-prives.jpg",
        description:
            "Une assistance discrète pour répondre aux demandes les plus exigeantes.",
        items: [
            "Accompagnement personnalisé",
            "Services confidentiels",
            "Livraison Signature",
            "Lifestyle Management",
        ],
    },
    {
        number: "06",
        title: "Conciergerie & Assistance",
        image: "/images/univers/conciergerie.jpg",
        description:
            "Un interlocuteur unique pour coordonner votre quotidien et vos déplacements.",
        items: [
            "Organisation de voyage",
            "Réservations",
            "Coordination de prestataires",
            "Assistance personnelle",
        ],
    },
];

export default function UniversPage() {
    const [activeUniverse, setActiveUniverse] = useState(0);
    const [imageVisible, setImageVisible] = useState(true);

    const currentUniverse = univers[activeUniverse];

    useEffect(() => {
        setImageVisible(false);

        const timer = setTimeout(() => {
            setImageVisible(true);
        }, 450);

        return () => clearTimeout(timer);
    }, [activeUniverse]);

    return (
        <main className="bg-[#faf9f7] text-stone-900">

            <Header />

            {/* HERO */}

            <section className="relative h-[65vh] overflow-hidden">

                <Image
                    src="/nos-univers-hero.png"
                    alt="Nos Univers"
                    fill
                    priority
                    className="object-cover brightness-95 saturate-90"
                />

                <div className="absolute inset-0 bg-white/20" />

                <div className="absolute inset-0 flex items-center">

                    <div className="max-w-6xl mx-auto w-full px-8">

                        <p className="uppercase tracking-[0.30em] text-[24px] font-light text-stone-500 mb-6">
                            Nos Univers
                        </p>

                        <h1 className="text-5xl md:text-6xl font-light leading-tight max-w-2xl">
                            Chaque demande mérite une attention particulière.
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg md:text-xl leading-8 text-stone-700">
                            <span className="uppercase tracking-[0.18em] font-medium">
                                Maison KEMEL
                            </span>{" "}
                            imagine des prestations pensées pour simplifier votre
                            quotidien, enrichir vos voyages et donner vie à vos
                            projets les plus personnels.
                        </p>

                    </div>

                </div>

            </section>

            <section className="max-w-7xl mx-auto px-8 py-24">

                <div className="grid lg:grid-cols-[1fr_430px] gap-24 items-start">

                    {/* Colonne de gauche */}

                    <div>

                        {univers.map((universe, index) => (
                            <UniverseList
                                key={universe.number}
                                number={universe.number}
                                title={universe.title}
                                description={universe.description}
                                items={universe.items}
                                image={universe.image}
                                isOpen={activeUniverse === index}
                                onOpen={() => setActiveUniverse(index)}
                            />
                        ))}

                    </div>

                    {/* Colonne de droite */}

                    <div className="hidden lg:block sticky top-32">

                        <div className="overflow-hidden rounded-[18px] bg-stone-100 aspect-[1/2]">

                            <img
                                key={currentUniverse.image}
                                src={currentUniverse.image}
                                alt={currentUniverse.title}
                                className={`
                                    h-full
                                    w-full
                                    object-cover
                                    transition-all
                                    duration-[3200ms]
                                    ease-[cubic-bezier(0.22,1,0.36,1)]
                                    ${imageVisible ? "opacity-100 scale-100" : "opacity-0 scale-[1.09]"}
                                `}
                            />

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}