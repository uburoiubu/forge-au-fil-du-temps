import Image from "next/image";
import Breadcrumbs from "../../components/breadcrumbs";

export const metadata = {
  title: "Les forges - Histoire & patrimoine - La Forge au fil du temps",
  description:
    "Découvrez l'histoire détaillée des forges de Bourzolles à Souillac, leur fonctionnement, leur production (artillerie, chaudières, objets domestiques), et l'histoire de leurs propriétaires successifs du XVIème au XIXème siècle.",
};

export default function TourPage() {
  return (
    <main className="min-h-screen text-justify">
      <Breadcrumbs />
      <h1 className="text-5xl text-center pt-2 pr-6 pl-6">
        Les Forges de Bourzolles
      </h1>
      <div className="mt-6 space-y-2 text-xl leading-relaxed pr-10 pl-10">
        <p>
          Encouragée par la politique économique et les privilèges accordés par
          les rois successifs, l'activité de forge se développe en France à
          partir du 15<sup>ème</sup>
          siècle, dans toutes les régions riches en cours d'eau, en bois et en
          gisements ferrugineux.
        </p>

        <p>
          Les seigneurs <strong>DE COUSTIN</strong>, châtelains de Bourzolles,
          établirent sur la Borrèze, leurs forges, au début du 16<sup>ème</sup>{" "}
          siècle.
        </p>

        <p>
          Elles étaient constituées, au départ, d'un haut fourneau et d'un
          atelier de moulage pour la production et l'exploitation de la fonte.
        </p>

        <p>La production était utilisée&nbsp;:</p>
        <ul className="list-disc pl-6">
          <li>
            au service du roi (pièces d'artillerie et boulets de canon en temps
            de guerre)
          </li>
          <li>
            pour la compagnie des Indes et les colonies (des chaudières qui
            servaient à l'exploitation de la canne à sucre)
          </li>
          <li>
            pour l'agriculture et le commerce (marmites, plaques de cheminées,
            fers à gaufres, landiers, heurtoirs, pièces de charrettes…)
          </li>
        </ul>

        <p>
          Avant chaque <q>campagne de fondage</q> et avant la mise à feu, le
          curé de la paroisse venait bénir le fourneau.
        </p>

        <p>
          Chaque fondage durait environ 6 mois, nuit et jour. 70 à 80 ouvriers y
          travaillaient, payés <q>à la tâche</q> :
        </p>

        <p>
          Charbonniers, tireurs de mine, charretiers, laveurs de mine,
          forgerons, chargeurs, mouleurs…
        </p>

        <p>
          La production était transportée ensuite par la batellerie sur la
          Dordogne vers Libourne et Bordeaux.
        </p>

        <p>
          Après des périodes diverses de prospérité et de crise, elles
          atteignirent leur apogée de 1830 à 1845, grâce à la création d'une
          affinerie pour la production de fer, autorisée par ordonnance royale
          le 13 mars 1828.
        </p>

        <p>
          La politique économique du libre-échange et la création de grandes
          usines plus perfectionnées signèrent la mort des Forges de Bourzolles.
        </p>

        <p>Elles furent fermées définitivement en 1869.</p>

        <p>
          <b>Propriétaires successifs des Forges de Bourzolles :</b>
        </p>

        <ul className="list-none pl-0">
          <li>
            <strong>Création :</strong> Seigneurs de Coustin jusqu'en 1725
          </li>
          <li>
            <strong>Vente :</strong> Sclafer de Clary jusqu'en 1775
          </li>
          <li>
            <strong>Légataire :</strong> Joseph de Coustin jusqu'en 1792
          </li>
          <li>
            <strong>Vente :</strong> Denis Deltheil
          </li>
          <li>
            <strong>Légataire :</strong> Jean-Baptiste Deltheil jusqu'en 1869
          </li>
        </ul>
      </div>
    </main>
  );
}
