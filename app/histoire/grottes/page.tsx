import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../../components/breadcrumbs";

export const metadata = {
  title: "Les grottes - Histoire & patrimoine - La Forge au fil du temps",
  description:
    "Découvrez les grottes mystérieuses de la Forge de Bourzolles à Souillac, dont la grotte-chapelle dédiée à Notre Dame de Sainte Espérance.",
};

export default function TourPage() {
  return (
    <main className="min-h-screen text-justify">
      <Breadcrumbs />
      <h1 className="text-5xl text-center pt-2 pr-6 pl-6">Les grottes</h1>
      <section className="mt-6 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/histoire/grottes/chapelle"
            className="group block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition"
          >
            <div className="relative h-48">
              <Image
                src="/images/grottes/grottes-cp-2.jpg"
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
                src="/images/grottes/grotte-pis-de-vache.jpg"
                alt="Grotte Pis de Vache."
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
