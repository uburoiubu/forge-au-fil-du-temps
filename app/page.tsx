import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center text-2xl leading-relaxed">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/images/forge-vero-van-be.jpg" // path relative to /public
          alt="Ancienne forge à Souillac"
          width={800}
          height={500}
        />
        <p>
          <b>La Forge au fil du temps</b> est une association dont le but est de
          valoriser et d'animer l’ancienne forge de Bourzolles à Souillac.
        </p>
      </main>
    </div>
  );
}
