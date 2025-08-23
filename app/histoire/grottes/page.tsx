import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Les grottes - Histoire & patrimoine - La Forge au fil du temps",
  description:
    "Découvrez les grottes mystérieuses de la Forge de Bourzolles à Souillac, dont la grotte-chapelle dédiée à Notre Dame de Sainte Espérance.",
};

export default function TourPage() {
  return (
    <main className="min-h-screen text-justify">
      <h1 className="text-5xl text-center pt-6 pr-6 pl-6">Les grottes</h1>
      <div className="mt-6 space-y-2 text-xl leading-relaxed pr-10 pl-10"></div>
      <section className="mt-6 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/histoire/grottes/chapelle"
            className="group block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition"
          >
            <div className="relative h-48">
              <Image
                src="/images/grottes/grottes-cp.jpg"
                alt="Souillac. Grottes de Laforge"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">La Grotte - Chapelle de Notre Dame de la Sainte Espérance</h3>
              <p className="text-base mt-1">
                Découvrez l'histoire des grottes.
              </p>
            </div>
          </Link>
          <Link
            href="/histoire/grottes/vache"
            className="group block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition"
          >
            <div className="relative h-48">
              <Image
                src="/images/roquefort/tour-roquefort.jpg"
                alt="La tour Roquefort de Bourzolles"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                La Grotte — "Pis de la vache"
              </h3>
              <p className="text-base mt-1">
                Par Armand VIRÉ
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
