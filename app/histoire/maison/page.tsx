import Image from "next/image";

export const metadata = {
  title: "Maison du maître - Histoire & patrimoine - La Forge au fil du temps",
  description: "Explorez l'histoire de la maison du maître de la Forge de Bourzolles à Souillac, son architecture et son évolution au fil des siècles."
};

export default function TourPage() {
  return (
    <main className="min-h-screen text-justify">
      <h1 className="text-5xl text-center pt-6 pr-6 pl-6">
        Maison du maître
      </h1>
      <div className="mt-6 space-y-2 text-xl leading-relaxed pr-10 pl-10">
      </div>
    </main>
  );
}
