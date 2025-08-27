import Image from "next/image";
import Breadcrumbs from "../../components/breadcrumbs";

export const metadata = {
  title: "Maison du maître - Histoire & patrimoine - La Forge au fil du temps",
  description:
    "Explorez l'histoire détaillée de la maison du maître de la Forge de Bourzolles à Souillac, de sa construction par Jean-Baptiste Deltheil en 1825 aux transformations de Julien Valat, et découvrez ses occupants successifs.",
};

export default function TourPage() {
  return (
    <main className="min-h-screen text-justify">
      <Breadcrumbs />
      <h1 className="text-5xl text-center pt-2 pr-6 pl-6">La grande maison et le parc</h1>
      <div className="mt-6 space-y-2 text-xl leading-relaxed pr-10 pl-10">
        <p>
          C'est <strong>Jean-Baptiste DELTHEIL</strong>, dernier maître des
          forges de Bourzolles, qui fait bâtir la demeure en 1825.
        </p>

        <p>
          Il entre dans une période de grande prospérité grâce à la création de
          l'affinerie.
        </p>

        <p>
          Le fer, d'un usage plus courant et d'une commercialisation plus facile
          permet de nouveaux débouchés.
        </p>

        <p>
          Il se retrouve, d'achats en héritages, en possession d'un bloc foncier
          de 650 ha dont deux forges, celle de Bourzolles et celle d'Ans.
        </p>

        <p>
          À cette époque, la bâtisse est adossée au rocher, et la route passe
          entre la maison et le canal.
        </p>

        <p>
          Il y vit avec son épouse Anaïs (petite-fille d'Alexandre de
          Bauharnais) et tous deux jouent un rôle social important sur la
          commune de Souillac.
        </p>

        <p>
          Jean-Baptiste fut pendant 20 ans président ou vice-président du
          conseil général du Lot.
        </p>

        <p>
          Après sa mort, sa veuve fonde à Bourzolles une école gratuite dont
          elle payait les maîtresses et une maison de sœurs garde-malade.
        </p>

        <p>
          C'est elle aussi, qui a souhaité l'aménagement d'une des grottes de la
          propriété en chapelle dédiée à Notre-Dame de Sainte Espérance.
        </p>

        <p>
          En 1887, <strong>Julien VALAT</strong>, fils d'Edouard VALAT, ami et
          homme de confiance du couple DELTHEIL rachète la propriété.
        </p>

        <p>
          Ingénieur en électricité, il installe une petite centrale hydraulique
          sur l'ancien site des forges pour éclairer la demeure et son
          magnifique parc.
        </p>

        <p>Il travaille à agrandir et à embellir la propriété.</p>

        <p>Il fait ériger une tour centrale dotée de balcons à balustres.</p>

        <p>
          Il accole un jardin d'hiver sur le côté droit de la bâtisse et sur le
          côté gauche une grande salle prolongée d'une chapelle.
        </p>

        <p>
          On y trouve une cheminée monumentale surmontée de la devise de la
          famille :<em>Labora, profice, ora et spera</em>.
        </p>

        <p>
          Cette salle accueillera les nombreux ouvrages littéraires collectés
          par les familles DELTHEIL et VALAT.
        </p>

        <p>
          <strong>Marie-Anne LACOSTE</strong>, petite-fille de Julien VALAT,
          crée en 1983 l'association <q>La Forge Patrimoine</q> et met à la
          disposition du public cette magnifique bibliothèque !
        </p>

        <p>
          Ce fonds, qui comprend aussi des cartes postales et des plaques de
          photos, actuellement en dépôt, est consultable à la bibliothèque de
          Souillac.
        </p>

        <p>
          En décembre 2016, <strong>Virginie DESTREL</strong> rachète la
          demeure, inhabitée depuis dix ans, et entreprend sa rénovation.
        </p>

        <p>
          Elle crée l'association <q>La Forge au fil du temps</q> qui a pour but
          de valoriser le patrimoine historique et immobilier du site et de
          l'animer artistiquement et culturellement.
        </p>
      </div>
    </main>
  );
}
