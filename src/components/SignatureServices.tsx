import Image from "next/image";
const signatures = [
  {
    city: "DAKAR",
    title: "Appartement premium",
    image: "/signature-dakar.png",
    description:
      "Une adresse d’exception sélectionnée pour votre confort, votre intimité et votre sérénité.",
  },
  {
  city: "PHUKET",
  title: "Chef privé",
  image: "/signature-phuket.png",
  description:
    "Une expérience gastronomique privée, imaginée et orchestrée selon vos envies.",
},
  {
  city: "SUR DEMANDE",
  title: "Transfert privé",
  image: "/signature-transfert.png",
  description:
    "Un service de transport discret et personnalisé pour chacun de vos déplacements.",
},
  {
  city: "PERSONAL SHOPPING",
  title: "Sélection & livraison",
  image: "/signature-shopping.png",
  description:
    "Une sélection personnalisée selon vos envies. Nous recherchons, proposons et achetons pour vous les pièces choisies, puis organisons leur livraison avec soin.",
},
];

export default function SignatureServices() {
  return (
    <section className="bg-[#2D2D2D] py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#B88A44]">
            L&apos;expérience KEMEL
          </p>

          <h2 className="mt-4 text-5xl font-serif text-white">
            Prestations Signatures
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Des expériences choisies avec exigence, pensées dans les moindres
            détails et entièrement adaptées à vos envies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2   ">
          {signatures.map((signature) => (
  <div
    key={signature.title}
    className="border border-[#B88A44]/40 overflow-hidden"
  >
    {"image" in signature && signature.image && (
      <div className="relative h-72 w-full">
        <Image
          src={signature.image}
          alt={signature.title}
          fill
          className={`object-cover ${
  signature.title === "Sélection & livraison"
    ? "object-[center_35%]"
    : ""
}`}
        />
      </div>
    )}

    <div className="p-10">
      <p className="text-xs uppercase tracking-[0.3em] text-[#B88A44]">
        {signature.city}
      </p>

      <h3 className="mt-5 text-3xl font-serif text-white">
        {signature.title}
      </h3>

      <div className="mt-6 h-px w-12 bg-[#B88A44]" />

      <p className="mt-7 text-lg leading-8 text-gray-300">
        {signature.description}
      </p>

      <button className="mt-10 text-sm uppercase tracking-[0.2em] text-[#B88A44]">
        Découvrir →
      </button>
    </div>
  </div>
))}
        </div>
      </div>
    </section>
  );
}