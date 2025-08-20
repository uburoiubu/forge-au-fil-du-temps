import Image from "next/image";

export default function HistoryPage() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Événements & Activités</h1>
      <div className="mt-6 space-y-2">
        <Image
                  src="/images/asso-expo.jpg"
                  alt="La Forge"
                  width={800}
                  height={500}
                  className="rounded-lg"
                />
        <p>...</p>
      </div>

    </main>
  )
}