import Image from "next/image";

export const metadata = {
  title: "Exposition/Vente Clémentine Renvoisé - Événements - La Forge au fil du temps",
  description: "Exposition/Vente de Clémentine Renvoisé à la Forge de Bourzolles à Souillac. Entrée libre, vernissage le 05/09 à 17h30. Découvrez ses œuvres dans ce lieu historique."
};

export default function HistoryPage() {
  return (
    <main className="h-auto">
      <h1 className="text-5xl text-center pt-6 pl-6 pr-6">
        Clémentine Renvoisé
      </h1>
      <h1 className="text-3xl pr-6 pl-6 pt-1 text-center">Exposition/Vente</h1>
      <h1 className="text-2xl text-center pt-1 pr-6 pl-6 pb-2">
        Entrée libre. Vernissage le 05/09 à 17h30
      </h1>
      <div className="mt-2 px-12">
        <Image
          src="/images/events/050925-070925.jpeg"
          alt="La Forge"
          fill={false}
          width={0}
          height={0}
          sizes="100vw"
          className="mx-auto h-auto w-auto max-w-full rounded-xl shadow-md"
          unoptimized
        />
      </div>
    </main>
  );
}
