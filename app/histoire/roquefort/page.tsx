import Image from "next/image";
import Breadcrumbs from "../../components/breadcrumbs";
import Gallery, { type GalleryImage } from "../../components/gallery";

export const metadata = {
  title:
    "La tour Roquefort de Bourzolles - Histoire & patrimoine - La Forge au fil du temps",
  description:
    "Découvrez l'histoire de la tour Roquefort de Bourzolles, donjon féodal du XIème siècle, témoin de l'histoire médiévale de la région de Souillac.",
};

const galleryImages: GalleryImage[] = [
  {
    src: "/images/roquefort/tour-roquefort.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de LAFORGE près Souillac (Lot)",
  },
  {
    src: "/images/roquefort/tour roquefort Viré gros plan.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de LAFORGE près Souillac (Lot)",
  },
  {
    src: "/images/roquefort/tour roquefort Viré.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de LAFORGE près Souillac (Lot)",
  },
  {
    src: "/images/roquefort/tour-roquefort-2.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de LAFORGE près Souillac (Lot)",
  },
];

export default function TourPage() {
  return (
    <main className="min-h-screen text-justify">
      <Breadcrumbs />
      <div className="w-full relative h-[25vh] sm:h-[300px] md:h-[400px]">
        <Image
          src="/images/roquefort/tour-roquefort.jpg"
          alt="Plafond de la maison du maître"
          fill
          className="object-cover"
          priority
        />
      </div>
      <h1 className="text-5xl text-center pt-6 pr-6 pl-6">
        La tour Roquefort de Bourzolles
      </h1>
      <div className="mt-6 space-y-2 text-xl leading-relaxed pr-10 pl-10">
        <p>
          La Tour Roquefort est le témoin du premier château implanté sur
          l&apos;ancienne commune de Bourzolles, maintenant rattachée à la ville de
          Souillac. Elle domine le village sur un piton rocheux dit « Puy de la
          Broussette ».
        </p>

        <p>
          Son origine remonte probablement au XI<sup>ème</sup> siècle, à
          l&apos;époque de la seigneurie des DE RIGNAC qui rendaient alors hommage au
          Vicomte de Turenne.
        </p>

        <p>On sait peu de chose sur cette famille :</p>

        <p>
          C&apos;est une famille fort ancienne qui a pris son nom de la terre de
          Rignac, à une lieue de Martel en Quercy, sur les confins du Périgord :
          Resplendine de Rignac, héritière de cette terre, la porta avant 1360 à
          son mari Bertrand de Vassal ».
        </p>

        <p>
          <b>Armes :</b> d&apos;azur à deux pals d&apos;or, chargés chacun de trois roses
          de gueules
        </p>

        <p>
          <i>(Armorial du Quercy – Louis Esquiou)</i>
        </p>

        <p>
          La tour Roquefort est donc un donjon de château féodal, demeure
          seigneuriale, dont nous avons une assez bonne description dans un
          hommage de 1486 : Castrum situé sur la montagne, ayant son jardin, son
          colombier, sa garenne.
        </p>

        <p>
          Le site consistait presque exclusivement en une tour carrée, d&apos;une
          surface intérieure d&apos;environ 10m², divisée en plusieurs étages reliés
          par des « échelles », les murs ne portant aucune trace d&apos;escalier en
          pierre.
        </p>

        <p>
          Elle s&apos;élevait à une vingtaine de mètres pour se terminer par une
          simple terrasse qui permettait d&apos;envoyer aux assaillants des
          projectiles en cas d&apos;attaque.
        </p>

        <p>
          Elle était prolongée, côté Sud-Ouest, par une esplanade d&apos;une longueur
          de 25m, doublée d&apos;un deuxième niveau 1m70 plus bas.
        </p>

        <p>
          Du côté de la colline, un fossé large et profond, défendu sans doute
          par une contrescarpe en terre garnie d&apos;une palissade ou couronnée d&apos;un
          mur protégeait la tour-château.
        </p>

        <p>
          En contrebas, côté Est, se trouve l&apos;entrée d&apos;une grotte accessible sur
          une longueur de 5-6 mètres puis remplie d&apos;argile, dont la légende
          locale veut qu&apos;il s&apos;agisse de l&apos;entrée d&apos;un souterrain reliant le
          second château de Bourzolles, celui de la vallée, construit au XV
          <sup>ème</sup> siècle.
        </p>

        <p>
          Prise par les Anglais pendant la guerre de 100 ans (1337-1453) et
          longtemps occupée par eux, elle est abandonnée et déjà en ruines en
          1486.
        </p>

        <p>
          Actuellement, partiellement démantelée, il ne reste plus de la tour
          que 3 pans de murs et d&apos;énormes blocs de maçonnerie que leur chute n&apos;a
          pas pu désagréger. Mais sur ces vestiges le temps semble ne pas avoir
          de prise : les mesures faites il y a une centaine d&apos;années par Armand
          Viré paraissent toujours exactes.
        </p>

        <p>
          Seule la végétation a repris ses droits, les arbres cachent maintenant
          la vue sur la vallée de la Borrèze, faisant perdre à la tour son côté
          défensif mais en lui donnant un charme des plus romanesque !
        </p>

        <p className="text-right">
          <i>Archives : Fonds « La Forge patrimoine »</i>
        </p>

        {/* GALLERIE (lightbox) */}
        <div className="pt-6 pb-6">
          <Gallery images={galleryImages} />
        </div>

        <a
          href="https://pop.culture.gouv.fr/notice/merimee/IA46101536"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition"
        >
          <div className="relative h-48">
            <Image
              src="/images/tour-roquefort.jpg"
              alt="Souillac. Grottes de Laforge"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">Château de Roquefort</h3>
            <p className="text-base mt-1">
              Découvrez la fiche officielle du ministère de la Culture.
            </p>
          </div>
        </a>
      </div>
    </main>
  );
}