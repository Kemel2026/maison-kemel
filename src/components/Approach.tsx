export default function Approach() {
  const steps = [
    {
      number: "01",
      title: "Nous vous écoutons",
      text: "Nous prenons le temps de comprendre votre besoin, votre style de vie et vos attentes afin de construire une réponse véritablement adaptée.",
    },
    {
      number: "02",
      title: "Nous recherchons",
      text: "Chaque prestataire, chaque adresse et chaque expérience est sélectionné selon nos propres critères d'exigence.",
    },
    {
      number: "03",
      title: "Nous orchestrons",
      text: "Nous coordonnons chaque intervenant avec précision afin que tout se déroule naturellement, sans que vous ayez à intervenir.",
    },
    {
      number: "04",
      title: "Nous restons présents",
      text: "Avant, pendant et après chaque prestation, nous restons disponibles afin d'anticiper les imprévus et d'ajuster chaque détail.",
    },
    {
      number: "05",
      title: "Vous profitez",
      text: "Pendant que nous gérons les contraintes, vous retrouvez ce qui compte réellement : votre temps.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-8 py-32">

      <div className="text-center">

        <p className="uppercase tracking-[0.35em] text-[#B88A44]">
          Notre approche
        </p>

        <h2 className="mt-8 font-serif text-5xl text-[#2D2D2D]">
          Une expérience pensée
          <br />
          dans les moindres détails.
        </h2>

        <div className="font-serif text-8xl text-[#EFE6D7] select-none" />

        <p className="mx-auto mt-12 max-w-3xl text-lg leading-9 text-[#6B6B6B]">
          Chaque demande suit le même principe :
          écouter, comprendre, sélectionner,
          orchestrer et rester présent jusqu'au dernier détail.
        </p>

      </div>

      <div className="mt-24">

        {steps.map((step) => (

          <div
            key={step.number}
            className="border-t border-[#E8E1D5] py-20 flex justify-between gap-10"
          >

            <div className="max-w-xl">

              <h3 className="font-serif text-[2.25rem] text-[#2D2D2D]">
                {step.title}
              </h3>

              <p className="mt-6 text-lg leading-9 text-[#6B6B6B]">
                {step.text}
              </p>

            </div>

            <div className="font-serif text-7xl text-[#E7D9C3]">
              {step.number}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}