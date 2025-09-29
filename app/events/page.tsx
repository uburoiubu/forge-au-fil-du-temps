import Image from "next/image";
import Link from "next/link";
import Gallery, { type GalleryImage } from "../components/gallery";

export const metadata = {
  title: "Événements & Activités - La Forge au fil du temps",
  description:
    "Découvrez les événements culturels, expositions et activités organisés à la Forge de Bourzolles à Souillac. Restez informé des prochaines manifestations.",
};

const octoberImages: GalleryImage[] = [
  { src: "/images/events/oct-2025/AFFICHE ISRAEL.jpg", width: 1600, height: 1000, alt: "Château de Laforge près Souillac (Lot)" },
  { src: "/images/events/oct-2025/affiche varia voce (1).jpg", width: 1600, height: 1000, alt: "Château de Laforge près Souillac (Lot)" },
  { src: "/images/events/oct-2025/Gilles Favier_Jeannette Mac Donald SOUILLAC.jpg", width: 1000, height: 1600, alt: "Château de Laforge près Souillac (Lot)" },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      {/* Banner */}
      <div className="w-full relative h-[25vh] sm:h-[300px] md:h-[400px]">
        <Image
          src="/images/plafond.jpg"
          alt="Plafond de la maison du maître"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Page title */}
      <h1 className="text-5xl text-center p-6">Événements & Activités</h1>

      {/* October section */}
      <section className="px-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">Octobre</h2>
        <p className="text-xl mt-1 mb-8">
          <strong>Samedi 4</strong> dans le cadre du Festival Resurgence,
          vernissage "brunch" de l'exposition de photos de Gilles Favier
          "Jeannette Mac Donald" à 11h en présence de l'artiste dans la
          bibliothèque de La Forge. L'exposition sera ouverte du 4 octobre au 2
          novembre samedi et dimanche de 14h à 18h et sur RV au 0632146585.
        </p>
        <p className="text-xl mt-1 mb-8">
          <strong>Dimanche 5</strong>, concert de "Chants de la Renaissance" par
          le choeur de femmes "VARIA VOCE" à 16h, aussi dans la bibliothèque,
          suivi d'un pot de l'amitié, participation au chapeau.
        </p>

        <p className="text-xl mt-1 mb-8">
          Par ailleurs, <strong>vendredi 3</strong> nous reprenons l'atelier
          danses avec quelques modifications: Danses Israëliennes animées par
          Virginie, en cercles ou en lignes, ouvertes à tous de 18h15 à 19h45,
          tous les 15 jours, 2€ la séances au profit de l'association, première
          séance gratuite, possibilité de covoiturage au départ de Souillac.
          0767616888. N'hésitez pas à venir découvrir!
        </p>

        <div className="pt-6 pb-6">
          <Gallery images={octoberImages} />
        </div>

      </section>

      {/* September section */}
      <section className="px-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">Septembre</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/events/2025/patrimoine-20-09"
            className="group block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition"
          >
            <div className="relative h-48">
              <Image
                src="/images/events/AFFICHE 20_21 sept FORGE.jpg"
                alt="Les forges à Souillac"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                Journées européeenes du patrimoine à la Forge
              </h3>
              <p className="text-base mt-1">
                Les 20 et 21 septembre 2025, de 10 h à 18 h. Entrée libre,
                panneaux explicatifs. Venez visiter le site des anciennes
                forges.
              </p>
            </div>
          </Link>

          <Link
            href="/events/2025/occitane-20-09"
            className="group block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition"
          >
            <div className="relative h-48">
              <Image
                src="/images/events/affiche soirée occitane.jpg"
                alt="Les forges à Souillac"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Soirée occitane</h3>
              <p className="text-base mt-1">
                Soirée occitane à Lachapelle Auzac, samedi 20 septembre à partir
                de 16h.
              </p>
            </div>
          </Link>

          <Link
            href="/events/2025/renvoise-05-09"
            className="group block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition"
          >
            <div className="relative h-48">
              <Image
                src="/images/events/050925-070925.jpeg"
                alt="Les forges à Souillac"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                Exposition/Vente Clémentine Renvoisé
              </h3>
              <p className="text-base mt-1">
                Entrée libre. Vernissage le 05/09 à 17h30
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
