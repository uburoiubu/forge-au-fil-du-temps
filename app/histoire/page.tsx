import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Histoire & patrimoine - La Forge au fil du temps",
  description:
    "Découvrez l'histoire fascinante de l'ancienne forge de Bourzolles à Souillac, de ses origines au XVIème siècle à nos jours, et explorez son riche patrimoine industriel et architectural.",
};

export default function HistoryPage() {
  return (
    <main className="min-h-screen text-justify">
      <div className="w-screen">
        <Image
          src="/images/chateau.jpg"
          alt="Plafond de la maison du maître"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-cover md:max-h-[400px]"
          priority
        />
      </div>
      <h1 className="text-5xl text-center pt-6 pl-6 pr-6">
        Histoire & patrimoine
      </h1>
      <div className="mt-6 space-y-2 text-xl leading-relaxed pr-10 pl-10">
        <p>
          Le lieu doit son nom à l’ancienne activité de forge ou de fonderie qui
          a été créée par la famille de Coustin, probablement au début du XVIᵉ
          siècle.
        </p>

        <p>
          Les seigneurs de Coustin, profitant des progrès de la sidérurgie,
          établissent une forge sur la rivière Borrèze, à l’emplacement d’un
          ancien moulin dit &laquo; du Boulet &raquo;.
        </p>

        <p>
          Plusieurs propriétaires se succèdent au cours de périodes plus ou
          moins fastes, le dernier étant Jean-Baptiste Deltheil et son épouse
          Anaïs, descendante d’Alexandre de Beauharnais.
        </p>

        <p>
          La politique économique du libre-échange, la création des usines
          anglaises utilisant de la houille et la naissance du chemin de fer
          provoquent le déclin inexorable de la forge de Bourzolles, qui ferme
          définitivement en 1860.
        </p>

        <p>
          En 1887, Julien Valat devient le nouveau propriétaire du site. Il
          entreprend de le rénover et, passionné d’électricité, il installe une
          petite centrale hydraulique à la place de l’affinerie pour utiliser la
          chute d’eau, illuminer le parc et alimenter la maison en eau courante.
        </p>

        <p>
          En 1900, la ville de Souillac souhaite s’ouvrir à l’électricité. Elle
          signe une convention avec M. Valat et la petite centrale devient une
          usine électrique&nbsp;: l’usine &laquo; Ste Thérèse &raquo;, qui
          fonctionnera jusqu’en 1930.
        </p>

        <p>
          Julien Valat travaille aussi à embellir et agrandir la demeure des
          anciens maîtres de forge.
        </p>

        <p>
          Il poursuit également &laquo; l’œuvre &raquo; de Mme Deltheil en
          améliorant l’accès à la &laquo; grotte-chapelle &raquo;.
        </p>

        <p>
          Jean-Baptiste Deltheil possédait de nombreux ouvrages littéraires.
          Julien Valat enrichit à son tour cette bibliothèque.
        </p>

        <p>
          Son arrière-petite-fille, Marie-Anne Lacoste, met ces magnifiques
          ouvrages à la disposition du public en créant une association&nbsp;:
          &laquo; La Forge Patrimoine &raquo;.
        </p>

        <p>
          À son décès, sa fille Florence Lacoste fait don à la bibliothèque de
          Souillac de ces nombreux ouvrages, cartes postales et photos, qui
          constituent un fonds patrimonial extrêmement riche&nbsp;!
        </p>

        <p>Ils sont consultables sur rendez-vous.</p>
      </div>
      <section className="mt-12 px-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Pour aller plus loin
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/histoire/forges"
            className="group block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition"
          >
            <div className="relative h-48">
              <Image
                src="/images/forges/plan-forges-1828-haut-fourneau.jpg"
                alt="Les forges à Souillac"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Les forges</h3>
              <p className="text-base mt-1">Découvrez l'histoire des forges.</p>
            </div>
          </Link>
          <Link
            href="/histoire/maison"
            className="group block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition"
          >
            <div className="relative h-48">
              <Image
                src="/images/maison/maison-cover-compressed.jpeg"
                alt="Maison La Forge"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">La grande maison</h3>
              <p className="text-base mt-1">
                Découvrez l'histoire de la grande maison.
              </p>
            </div>
          </Link>
          <Link
            href="/histoire/usine"
            className="group block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition"
          >
            <div className="relative h-48">
              <Image
                src="/images/usine.jpg"
                alt="Usine électrique"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                L'usine électrique Sainte Thérèse à La Forge (Souillac)
              </h3>
              <p className="text-base mt-1">
                Découvrez l'histoire de l'usine électrique.
              </p>
            </div>
          </Link>
        </div>
      </section>
      <section className="mt-12 px-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          À découvrir aussi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/histoire/grottes"
            className="group block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition"
          >
            <div className="relative h-48">
              <Image
                src="/images/grottes/grottes-cp.jpg"
                alt="Souillac. Grottes de Laforge"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Les grottes</h3>
              <p className="text-base mt-1">
                Découvrez l'histoire des grottes.
              </p>
            </div>
          </Link>
          <Link
            href="/histoire/roquefort"
            className="group block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition"
          >
            <div className="relative h-48">
              <Image
                src="/images/roquefort/tour-roquefort.jpg"
                alt="La tour Roquefort de Bourzolles"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                La tour Roquefort de Bourzolles
              </h3>
              <p className="text-base mt-1">
                Explorez la tour et son histoire.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
