import Image from "next/image";

export const metadata = {
  title:
    "Journées européeenes de patrimoine à la Forge - Événements - La Forge au fil du temps",
  description: "Journées européeenes de patrimoine à la Forge",
};

export default function PatrimoineEventPage() {
  return (
    <main className="h-auto">
      <article className="event-details">
        <header className="event-header">
          <h1 className="text-5xl text-center pt-6 pl-6 pr-6">
            Journées européeenes du patrimoine à la Forge
          </h1>
        </header>

        <section className="event-info" aria-labelledby="event-details">
          <p className="text-2xl text-center pt-6 pr-6 pl-6 pb-2">
            <span className="event-opening">
              Venez visiter le site des anciennes forges, entrée libre et
              panneaux expliquatifs. Vous pourrez aussi découvrir une exposition
              de photos sur le patrimoine architectural local. Ces photos prises
              par Armand Viré et Ernest Rupin sont issues du "Fonds la Forge,
              Marie Anne Valat Lacoste". Vous pourrez aussi consulter des
              ouvrages anciens ayant appartenus à Julien Valat, ancien
              propriétaire du site à l'origine de la centrale hydroélectrique.
              Merci à la bibliothèque de Souillac pour ces prêts.
            </span>
          </p>
        </section>

        <figure className="event-image mt-2 px-12 pt-6">
          <Image
            src="/images/events/AFFICHE 20_21 sept FORGE.jpg"
            alt="Journées européeenes du patrimoine à la Forge"
            fill={false}
            width={0}
            height={0}
            sizes="100vw"
            className="mx-auto h-auto w-auto max-w-full rounded-xl shadow-md"
            unoptimized
          />
        </figure>
      </article>
    </main>
  );
}
