import Image from "next/image";

export default function HistoryPage() {
  return (
    <main className="min-h-screen">
      <h1 className="text-5xl text-center pt-6 pl-6 pr-6">Clémentine Renvoisé</h1>
      <h1 className="text-2xl pr-6 pl-6 pt-1 text-center">Exposition/Vente</h1>
       <h1 className="text-1xl text-center pt-1 pr-6 pl-6 pb-2">Entrée libre. Vernissage le 05/09 à 17h30</h1>
      <div className="mt-2 space-y-2">
        <Image
          src="/images/events/050925-070925.jpeg"
          alt="La Forge"
          width={800}
          height={500}
          className="mx-auto rounded-lg pr-12 pl-12"
        />
      </div>

    </main>
  );
}
