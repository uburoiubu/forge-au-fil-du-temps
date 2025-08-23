import Image from "next/image";

export default function HistoryPage() {
  return (
    <main className="min-h-screen text-justify">
      <div className="w-full h-[400px] relative">
        <Image
          src="/images/plafond.jpg"
          alt="Plafond de la maison du maître"
          fill
          className="object-cover"
        />
      </div>
       <h1 className="text-5xl text-center p-6">Visiter</h1>
      <div className="text-xl leading-relaxed pr-10 pl-10">
        <p>
          <b>Bienvenue à la Forge</b>
        </p>

        <p>La maison vous est ouverte librement à la visite.</p>

        <p>
          Vous avez accès à tous les étages, mais toutes les pièces ne sont pas
          « accueillantes » !
        </p>

        <p>
          Vous trouverez sur les portes les « noms » des pièces, vous pourrez y
          entrer.
        </p>

        <p>
          Par ailleurs, je vous demande de ne pas entrer dans les pièces
          marquées « privé » !
        </p>

        <p>Il y va de votre sécurité !</p>

        <p>
          En vous remerciant, je vous souhaite une belle visite un peu «
          labyrinthique » mais qui, je l'espère, vous fera rêver !
        </p>

        <p className="text-right">
          <i>Virginie Destrel</i>
        </p>
      </div>
    </main>
  );
}
