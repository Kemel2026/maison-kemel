export default function WhyKemel() {
  const pillars = [
    {
      icon: "◇",
      title: "Discrétion",
      text: "Chaque demande demeure strictement confidentielle.",
    },
    {
      icon: "✦",
      title: "Excellence",
      text: "Des partenaires sélectionnés avec exigence.",
    },
    {
      icon: "◎",
      title: "Réseau",
      text: "Des expériences soigneusement orchestrées.",
    },
    {
      icon: "◷",
      title: "Disponibilité",
      text: "Une présence attentive, sept jours sur sept.",
    },
  ];

  return (
    <section className="bg-[#F8F5F0] pt-52 pb-40">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.4em] text-[#B88A44]">
            La signature Kemel
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-[#2D2D2D]">
            Plus qu'une conciergerie.
            <br />
            Une présence de confiance.
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-9 text-gray-600">
            Le véritable luxe ne réside pas dans ce que l'on voit.
            Il réside dans la tranquillité d'esprit, l'attention portée
            aux détails et la certitude que chaque expérience sera
            orchestrée avec exigence et discrétion.
          </p>

        </div>

        <div className="mx-auto mt-24 h-px max-w-5xl bg-[#D9C39A]/40" />

        <div className="mx-auto mt-20 grid max-w-6xl gap-24 md:grid-cols-2 lg:grid-cols-4">

          {pillars.map((pillar) => (

            <div
              key={pillar.title}
              className="text-center"
            >

              <div className="text-5xl text-[#B88A44]">
                {pillar.icon}
              </div>

              <h3 className="mt-8 font-serif text-3xl text-[#2D2D2D]">
                {pillar.title}
              </h3>

              <div className="mx-auto mt-5 h-px w-12 bg-[#B88A44]" />

              <p className="mt-6 leading-8 text-gray-600">
                {pillar.text}
              </p>

            </div>

          ))}

        </div>

        <div className="mx-auto mt-24 h-px max-w-5xl bg-[#D9C39A]/40" />

      </div>
    </section>
  );
}