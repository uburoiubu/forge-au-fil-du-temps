import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans text-xl leading-relaxed text-center">
      <main className="flex flex-col items-center gap-8">
        <div className="w-full h-[300px] relative">
          <Image
            src="/images/forge-cover.jpg"
            alt="Ancienne forge à Souillac"
            fill
            className="object-cover"
          />
        </div>

        <h1 className="max-w-4xl px-4 text-4xl md:text-4xl">
          <b>La Forge au fil du temps</b> est une association dont le but est de
          valoriser et d'animer l’ancienne forge de Bourzolles à Souillac.
        </h1>
      </main>
    </div>
  );
}
