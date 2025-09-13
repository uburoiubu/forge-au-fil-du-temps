import Image from "next/image";

export const metadata = {
  title:
    "Soirée occitane à Lachapelle Auzac, samedi 20 septembre à partir de 16h.",
  description: "Soirée occitane à Lachapelle Auzac, samedi 20 septembre à partir de 16h.",
};

export default function SoireeOccitaneEventPage() {
  return (
    <main className="h-auto">
      <article className="event-details">
        <header className="event-header">
          <h1 className="text-5xl text-center pt-6 pl-6 pr-6">
            Soirée occitane à Lachapelle Auzac, samedi 20 septembre à partir de 16h.
          </h1>
        </header>

        <figure className="event-image mt-2 px-12 pt-6">
          <Image
            src="/images/events/affiche soirée occitane.jpg"
            alt="affiche soirée occitane"
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
