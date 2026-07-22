export default function Strengths() {
  const strengths = [
    {
      number: "01",
      title: "Une relation privilégiée",
      text: (
        <>
          Nous choisissons volontairement d'accompagner un nombre limité de
          clients.
          <br />
          <br />
          Parce que l'excellence demande du temps, de l'attention et une
          disponibilité réelle.
        </>
      ),
    },
    {
      number: "02",
      title: "Une exigence constante",
      text: (
        <>
          Chaque recommandation est le résultat d'une sélection rigoureuse.
          <br />
          <br />
          Rien n'est laissé au hasard. Chaque détail compte.
        </>
      ),
    },
    {
      number: "03",
      title: "Un accompagnement sur mesure",
      text: (
        <>
          Nous ne travaillons jamais à partir d'un catalogue figé.
          <br />
          <br />
          Chaque solution est pensée autour de votre besoin, de votre rythme et
          de vos attentes.
        </>
      ),
    },
    {
      number: "04",
      title: "Une confiance absolue",
      text: (
        <>
          La discrétion est le fondement de chacune de nos relations.
          <br />
          <br />
          Elle guide chacune de nos décisions, avant, pendant et après chaque
          mission.
        </>
      ),
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-8 py-40">
      <div className="text-center">
        <p className="uppercase tracking-[0.35em] text-[#B88A44]">
          Nos Forces
        </p>

        <h2 className="mt-8 font-serif text-5xl text-[#2D2D2D]">
          Ce qui fait la singularité de KEMEL.
        </h2>

        <div className="mx-auto mt-8 h-px w-24 bg-[#D9C39A]" />
      </div>

      <div className="mt-28 grid gap-20 md:grid-cols-2">
        {strengths.map((item) => (
          <div
            key={item.number}
            className="border-t border-[#E8E1D5] pt-10"
          >
            <span className="select-none font-serif text-7xl text-[#EFE6D7]">
              {item.number}
            </span>

            <h3 className="mt-8 font-serif text-3xl text-[#2D2D2D]">
              {item.title}
            </h3>

            <div className="mt-5 h-px w-12 bg-[#D9C39A]" />

            <p className="mt-8 max-w-md text-lg leading-9 text-[#6B6B6B]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}