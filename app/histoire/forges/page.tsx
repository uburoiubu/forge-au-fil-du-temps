import Image from "next/image";
import Breadcrumbs from "../../components/breadcrumbs";
import Gallery, { type GalleryImage } from "../../components/gallery";

export const metadata = {
  title: "Les forges - Histoire & patrimoine - La Forge au fil du temps",
  description:
    "Découvrez l'histoire détaillée des forges de Bourzolles à Souillac, leur fonctionnement, leur production (artillerie, chaudières, objets domestiques), et l'histoire de leurs propriétaires successifs du XVIème au XIXème siècle.",
};

const galleryImages: GalleryImage[] = [
  {
    src: "/images/forges/plan forges 1828 bat + lég.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de LAFORGE près Souillac (Lot)",
  },
  {
    src: "/images/forges/plan forges 1828 batiments.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de LAFORGE près Souillac (Lot)",
  },
  {
    src: "/images/forges/plan forges 1828 légende.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de LAFORGE près Souillac (Lot)",
  },
  {
    src: "/images/forges/plan-forges-1828-haut-fourneau.jpg",
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
          src="/images/forges/plan-forges-1828-haut-fourneau.jpg"
          alt="Plafond de la maison du maître"
          fill
          className="object-cover"
          priority
        />
      </div>
      <h1 className="text-5xl text-center pt-6 pr-6 pl-6">
        Les forges de Bourzolles
      </h1>
      <div className="mt-6 space-y-2 text-xl leading-relaxed pr-10 pl-10">
        <p>
          Encouragée par la politique économique et les privilèges accordés par
          les rois successifs, l&apos;activité de forge se développe en France à
          partir du 15<sup>ème</sup>
          siècle, dans toutes les régions riches en cours d&apos;eau, en bois et en
          gisements ferrugineux.
        </p>

        <p>
          Les seigneurs <strong>de Coustin</strong>, châtelains de Bourzolles,
          établirent sur la Borrèze, leurs forges, au début du 16<sup>ème</sup>{" "}
          siècle.
        </p>

        <p>
          Elles étaient constituées, au départ, d&apos;un haut fourneau et d&apos;un
          atelier de moulage pour la production et l&apos;exploitation de la fonte.
        </p>

        <p>La production était utilisée&nbsp;:</p>
        <ul className="list-disc pl-6">
          <li>
            au service du roi (pièces d&apos;artillerie et boulets de canon en temps
            de guerre)
          </li>
          <li>
            pour la compagnie des Indes et les colonies (des chaudières qui
            servaient à l&apos;exploitation de la canne à sucre)
          </li>
          <li>
            pour l&apos;agriculture et le commerce (marmites, plaques de cheminées,
            fers à gaufres, landiers, heurtoirs, pièces de charrettes…)
          </li>
        </ul>

        <p>
          Avant chaque <q>campagne de fondage</q> et avant la mise à feu, le
          curé de la paroisse venait bénir le fourneau.
        </p>

        <p>
          Chaque fondage durait environ 6 mois, nuit et jour. 70 à 80 ouvriers y
          travaillaient, payés <q>à la tâche</q> : charbonniers, tireurs de
          mine, charretiers, laveurs de mine, forgerons, chargeurs, mouleurs…
        </p>

        <p>
          La production était transportée ensuite par la batellerie sur la
          Dordogne vers Libourne et Bordeaux.
        </p>

        <p>
          Après des périodes diverses de prospérité et de crise, elles
          atteignirent leur apogée de 1830 à 1845, grâce à la création d&apos;une
          affinerie pour la production de fer, autorisée par ordonnance royale
          le 13 mars 1828.
        </p>

        <p>
          La politique économique du libre-échange et la création de grandes
          usines plus perfectionnées signèrent la mort des Forges de Bourzolles.
        </p>

        <p>Elles furent fermées définitivement en 1869.</p>

        <h2>
          <b>Propriétaires successifs des Forges de Bourzolles :</b>
        </h2>

        <ul className="list-none pl-0">
          <li>
            <strong>Création :</strong> Seigneurs de Coustin jusqu&apos;en 1725
          </li>
          <li>
            <strong>Vente :</strong> Sclafer de Clary jusqu&apos;en 1775
          </li>
          <li>
            <strong>Légataire :</strong> Joseph de Coustin jusqu&apos;en 1792
          </li>
          <li>
            <strong>Vente :</strong> Denis Deltheil
          </li>
          <li>
            <strong>Légataire :</strong> Jean-Baptiste Deltheil jusqu&apos;en 1869
          </li>
        </ul>

        {/* GALLERIE (lightbox) */}
        <div className="pt-6">
          <Gallery images={galleryImages} />
        </div>
      </div>
    </main>
  );
}