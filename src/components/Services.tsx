import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Voyages & Expériences",
      description:
        "Des voyages sur mesure et des expériences pensées dans les moindres détails.",
    },
    {
      title: "Hospitalité Premium",
      description:
        "Des séjours d'exception, une assistance dédiée et un accueil entièrement personnalisé.",
    },
    {
      title: "Conciergerie & Assistance Personnelle",
      description:
        "Un accompagnement discret et réactif pour simplifier votre quotidien.",
    },
    {
      title: "Personal Shopping",
      description:
        "Une sélection personnalisée de pièces, cadeaux et objets d'exception.",
    },
    {
      title: "Événementiel Privé",
      description:
        "Des moments uniques imaginés et orchestrés selon vos envies.",
    },
    {
      title: "Services Privés & Premium",
      description:
        "Des services confidentiels et sur mesure pour répondre aux demandes les plus exigeantes.",
    },
  ];

  return (
    <section className="bg-[#F8F5F0] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Titre */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#B88A44]">
            Nos Univers
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#2D2D2D] sm:text-5xl lg:text-6xl">
            Un accompagnement
            <br />
            véritablement sur mesure
          </h2>

          <p className="mt-8 text-base leading-8 text-[#6B6B6B] sm:text-lg">
            Chaque demande est unique. Nous imaginons des solutions
            personnalisées afin d'offrir une expérience fluide, discrète et
            parfaitement adaptée à votre mode de vie.
          </p>
        </div>

        {/* Cartes */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-[#E8E0D5] bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#D9C39A] hover:shadow-xl"
            >
              <h3 className="font-serif text-2xl text-[#2D2D2D]">
                {service.title}
              </h3>

              <div className="my-6 h-px w-14 bg-[#B88A44] transition-all duration-500 group-hover:w-24" />

              <p className="leading-8 text-[#6B6B6B]">
                {service.description}
              </p>

              <Link
                href="/univers"
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-[#B88A44] transition-all duration-300 group-hover:gap-4"
              >
                Découvrir
                <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}