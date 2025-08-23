import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Événements & Activités - La Forge au fil du temps",
  description: "Découvrez les événements culturels, expositions et activités organisés à la Forge de Bourzolles à Souillac. Restez informé des prochaines manifestations."
};

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

      {/* September section */}
      <section className="px-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">Septembre</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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