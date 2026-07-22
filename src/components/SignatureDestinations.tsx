import Image from "next/image";
const destinations = [
{
  city: "PHUKET",
  country: "THAÏLANDE",
  image: "/destination-phuket-v2.png",
},
  {
  country: "INDONÉSIE",
  city: "BALI",
  image: "/destination-bali.png",
},
  {
  city: "ABIDJAN",
  country: "CÔTE D'IVOIRE",
  image: "/destination-abidjan.png",
},
  {
  city: "KUALA LUMPUR",
  country: "MALAISIE",
  image: "/destination-kualalumpur.png",
},
  {
  city: "SALY",
  country: "SÉNÉGAL",
  image: "/destination-saly.png",
},
];

export default function SignatureDestinations() {
  return (
    <section className="bg-[#F8F5F0] py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#B88A44]">
            Destinations Signatures
          </p>

          <h2 className="mt-4 font-serif text-5xl text-[#2D2D2D]">
            Le monde, selon vos envies
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Des destinations sélectionnées pour leur caractère, leur élégance
            et les expériences uniques qu&apos;elles offrent.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {destinations.map((destination) => (
  <div
    key={destination.city}
    className="relative min-h-[420px] overflow-hidden"
  >
    {"image" in destination && destination.image ? (
      <Image
        src={destination.image}
        alt={destination.city}
        fill
        sizes="20vw"
        className="object-cover"
      />
    ) : (
      <div className="absolute inset-0 bg-[#2D2D2D]" />
    )}

    <div className="absolute inset-0 bg-black/30" />

    <div className="absolute inset-0 flex items-end p-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-[#D8B56A]">
          {destination.country}
        </p>

        <h3 className="mt-3 font-serif text-3xl text-white">
          {destination.city}
        </h3>

        <div className="mt-5 h-px w-10 bg-[#D8B56A]" />

        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#D8B56A]">
          Explorer →
        </p>
      </div>
    </div>
  </div>
))}
        </div>
      </div>
    </section>
  );
}