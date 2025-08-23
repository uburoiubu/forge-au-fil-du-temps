import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans text-xl leading-relaxed text-center">
      <main className="flex flex-col items-center gap-8">
        {/* Banner / Cover Image */}
        <div className="w-full relative h-[25vh] sm:h-[300px] md:h-[400px]">
          <Image
            src="/images/forge-cover.jpg"
            alt="Ancienne forge à Souillac"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Intro Heading */}
        <h1 className="max-w-4xl px-4 text-4xl md:text-4xl">
          <b>La Forge au fil du temps</b> est une association dont le but est de
          sauvegarder, de valoriser et d&apos;animer le site des anciennes
          Forges de Bourzolles à Souillac.
        </h1>

        {/* Mobile-only quick links */}
        <section className="block md:hidden p-6">
          <h2 className="text-2xl font-semibold mb-4">Explorez le site :</h2>
          <nav>
            <ul className="flex flex-col items-center gap-2 text-xl">
              <li>
                <Link
                  href="/histoire"
                  className="underline hover:text-blue-600"
                >
                  Histoire
                </Link>
              </li>
              <li>
                <Link href="/visiter" className="underline hover:text-blue-600">
                  Visiter
                </Link>
              </li>
              <li>
                <Link href="/events" className="underline hover:text-blue-600">
                  Événements & Activités
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="underline hover:text-blue-600">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/soutien" className="underline hover:text-blue-600">
                  Association
                </Link>
              </li>
              <li>
                <Link href="/contact" className="underline hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
