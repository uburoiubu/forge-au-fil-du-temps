import Image from "next/image";
import Breadcrumbs from "../../components/breadcrumbs";
import Gallery, { type GalleryImage } from "../../components/gallery";

export const metadata = {
  title:
    "L'usine électrique Sainte Thérèse - Histoire & patrimoine - La Forge au fil du temps",
  description:
    "Découvrez l'histoire de l'usine électrique Sainte Thérèse à La Forge de Bourzolles, la première centrale hydroélectrique ayant alimenté Souillac en électricité.",
};

const galleryImages: GalleryImage[] = [
  {
    src: "/images/usine/photo usine.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de Laforge près Souillac (Lot)",
  },
  {
    src: "/images/usine/usine de gaz de bois CP.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de Laforge près Souillac (Lot)",
  },
  {
    src: "/images/usine/photo centrale 1900.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de Laforge près Souillac (Lot)",
  },
  {
    src: "/images/usine/photo extérieur usine électrique.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de Laforge près Souillac (Lot)",
  },
  {
    src: "/images/usine/photo i u e 2.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de Laforge près Souillac (Lot)",
  },
  {
    src: "/images/usine/photo intérieur usine électrique.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de Laforge près Souillac (Lot)",
  },
  {
    src: "/images/usine.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de Laforge près Souillac (Lot)",
  },
];

export default function UsinePage() {
  return (
    <main className="min-h-screen text-justify">
      <Breadcrumbs />

      <div className="w-full relative h-[25vh] sm:h-[300px] md:h-[400px]">
        <Image
          src="/images/usine/photo usine.jpg"
          alt="Plafond de la maison du maître"
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-5xl text-center p-6">
        L&apos;usine électrique Sainte Thérèse à La Forge
      </h1>

      <div className="space-y-2 text-xl leading-relaxed pr-10 pl-10">
        <p>
          En 1897, sur l&apos;emplacement de l&apos;ancienne forge dont il utilise la
          chute d&apos;eau, Julien Valat crée une petite usine électrique pour
          fournir l&apos;éclairage des lieux et, grâce à une pompe qu&apos;elle actionne,
          assurer la distribution d&apos;eau au château et à ses dépendances. Cette
          petite usine, d&apos;intérêt privé et familial, avec sa turbine d&apos;une
          vingtaine de chevaux accouplée à une dynamo à courant continu, ne va
          pas tarder à prendre de l&apos;importance.
        </p>

        <p>
          La municipalité de Souillac souhaitant bénéficier de l&apos;éclairage
          électrique, demande à M. Valat de le lui fournir. Pour cela la
          municipalité s&apos;engage à lui consentir une concession de monopole de
          fourniture pour une période de 33 ans, à partir du 15 août 1900.
        </p>

        <p>
          Julien accepte et fait transformer sa petite installation pour lui
          donner une puissance en rapport avec l&apos;importance de la concession.
        </p>

        <p>
          Il fait surélever de deux mètres les murs du canal de retenue et
          approfondir la « défuite » (évacuation). Il obtient ainsi une chute
          d&apos;eau de 6 mètres qui permettra à la turbine, après de sérieuses
          modifications, de développer dans les 40 chevaux de force.
        </p>

        <p>
          Comme il faut transporter le courant à 5 km, distance de La Forge à
          Souillac, à côté de la dynamo à courant continu, il fait placer un
          alternateur triphasé de 2000 volts, haut voltage évitant des
          déperditions en ligne et permettant des fils de transport de plus
          faible diamètre.
        </p>

        <p>
          Pour parer à un éventuel manque de force en période de basses eaux, il
          fait construire, non loin de l&apos;usine, un gazogène à anthracite.
        </p>

        <p>L&apos;usine comprend donc :</p>
        <ul>
          <li>1) la salle des machines</li>
          <li>2) le gazogène</li>
          <li>3) un atelier de réparation</li>
        </ul>

        <p>
          La ville de Souillac est reliée à l&apos;usine par une canalisation à 3
          fils posée sur poteaux en bois. Sur ces mêmes poteaux, un téléphone
          particulier relie La Forge à Souillac.
        </p>

        <p>
          Face à une progression de consommation, Julien doit augmenter la
          puissance de son usine.
        </p>

        <p>
          Il achète en 1911 un second alternateur de 60 CV, et remplace le
          moteur à gaz par une machine à vapeur de 80 CV, brûlant du charbon à
          longue flamme. Cette machine très souple doit actionner les dynamos,
          soit seule soit accouplée à la turbine.
        </p>

        <p>
          Par cette acquisition, Julien pense avoir mis son usine définitivement
          au point. Malheureusement, moins d&apos;un an après, elle est détruite par
          un incendie. La machinerie a été sauvée ou n&apos;a été que légèrement
          détériorée.
        </p>

        <p>
          Quant à l&apos;immeuble, Julien en profite pour le faire reconstruire et
          aménager dans les meilleures conditions possibles : charpentes en fer,
          avec intervalles garnis de briques, baies larges et hautes sur les
          côtés et verrières à la toiture. Il fait installer un pont roulant
          pour soulever et déplacer les machines et complète le tout par un
          tableau de distribution, établi sur les plus récentes données
          scientifiques.
        </p>

        <p>
          Ce travail de reconstruction et de réaménagement est réalisé
          rapidement, et le 15 août 1913, l&apos;usine est de nouveau mise en marche
          et peut assurer, mieux encore, l&apos;éclairage de Souillac.
        </p>

        <p>En 1926, Robert, le fils de Julien, en prend la direction.</p>

        <p>
          Ses connaissances d&apos;ingénieur électricien lui font mener à bien son
          travail, tant du point de vue pratique que financier : l&apos;usine qui
          rapportait 15 000 F en 1910, 60 000 F en 1925, en rapporte près de 250
          000 F en 1930.
        </p>

        <p>
          Pourtant, par acte du 1<sup>er</sup> octobre 1930, il cède à l&apos;Union
          Électrique Rurale son droit de concession d&apos;éclairage, que la ville de
          Souillac lui avait renouvelé pour une période de 35 ans.
        </p>

        <p>L&apos;usine de La Forge, avec tout son matériel, reste sa propriété.</p>

        <p className="text-right">
          <i>Archives : La Forge Patrimoine</i>
        </p>

        {/* GALLERIE (lightbox) */}
        <div className="pt-6 pb-6">
          <Gallery images={galleryImages} />
        </div>
      </div>
    </main>
  );
}