import Image from "next/image";

export default function HistoryPage() {
  return (
    <main className="min-h-screen">
      <h1 className="text-5xl text-center p-6">Événements & Activités</h1>
      <div className="mt-6 space-y-2">
        <Image
          src="/images/asso-expo.jpg"
          alt="La Forge"
          width={800}
          height={500}
          className="mx-auto rounded-lg pr-12 pl-12"
        />
      </div>
    </main>
  );
}
