import Image from "next/image";

export default function HistoryPage() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Visiter</h1>
      <div className="mt-6 space-y-2 text-2xl leading-relaxed">
        <Image
                          src="/images/visit.jpg"
                          alt="La Forge"
                          width={400}
                          height={400}
                          
                        />
        <p>...</p>
      </div>

    </main>
  )
}