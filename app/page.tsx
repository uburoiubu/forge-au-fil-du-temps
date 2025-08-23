import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const mobileCards = [
    {
      href: "/histoire",
      title: "Histoire",
      desc: "Découvrez l’histoire du site.",
      img: "/images/chateau.jpg",
      alt: "Histoire de la Forge",
    },
    {
      href: "/visiter",
      title: "Visiter",
      desc: "Préparez votre visite.",
      img: "/images/visiter.jpg",
      alt: "Visite de la Forge",
    },
    {
      href: "/events",
      title: "Événements & Activités",
      desc: "Ce qui se passe à la Forge.",
      img: "/images/asso-expo.jpg",
      alt: "Événements et activités",
    },
    {
      href: "/galerie",
      title: "Galerie",
      desc: "Photos et souvenirs.",
      img: "/images/plafond.jpg",
      alt: "Galerie photo",
    },
    {
      href: "/soutien",
      title: "Association",
      desc: "Soutenir / adhérer.",
      img: "/images/asso-2.jpg",
      alt: "Association",
    },
    {
      href: "/contact",
      title: "Contact",
      desc: "Nous écrire / venir.",
      img: "/images/association/asso-la-forge.png",
      alt: "Contact",
    },
  ];

  return (
    <div className="font-sans text-xl leading-relaxed text-center">
      <main className="flex flex-col items-center gap-8">
        {/* Banner / Cover Image */}
        <div className="w-full relative h-[25vh] sm:h-[300px] md:h-[400px]">
          <Image
            src="/images/forge-cover.jpg"
            alt="Ancienne forge à Souillac"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Intro Heading */}
        <h1 className="max-w-4xl px-4 text-4xl md:text-4xl">
          <b>La Forge au fil du temps</b> est une association dont le but est de
          sauvegarder, de valoriser et d&apos;animer le site des anciennes
          Forges de Bourzolles à Souillac.
        </h1>

        {/* Mobile-only cards */}
        <section className="block md:hidden px-4 pb-8 w-full">
          <h2 className="text-2xl font-semibold mb-4">Explorez le site :</h2>

          <div className="grid grid-cols-1 gap-4">
            {mobileCards.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition text-left"
              >
                <div className="relative h-40">
                  <Image
                    src={c.img}
                    alt={c.alt}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{c.title}</h3>
                  <p className="text-base mt-0.5">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}