import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans text-2xl leading-relaxed p-6">
      <main className="container mx-auto px-4 py-8 flex flex-col items-center gap-8">
        <Image
          src="/images/forge-vero-van-be.jpg"
          alt="Ancienne forge à Souillac"
          width={800}
          height={500}
          className="mx-auto"
        />
        <p>
          <b>La Forge au fil du temps</b> est une association dont le but est de
          valoriser et d'animer l’ancienne forge de Bourzolles à Souillac.
        </p>
      </main>
    </div>
  );
}