import Image from "next/image";
import Breadcrumbs from "../../../components/breadcrumbs";
import Gallery, { type GalleryImage } from "../../../components/gallery";

export const metadata = {
  title:
    "Grotte du Pis de la Vache par Armand Viré - Les grottes - Histoire & patrimoine - La Forge au fil du temps",
  description:
    "Découvrez l'étude archéologique de la grotte du Pis de la Vache par Armand Viré, site préhistorique unique avec vestiges du Moustérien au Néolithique à La Forge de Bourzolles.",
};

const galleryImages: GalleryImage[] = [
  {
    src: "/images/grottes/grotte viré.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de Laforge près Souillac (Lot)",
  },
  {
    src: "/images/grottes/fouilles-armand-vire.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de Laforge près Souillac (Lot)",
  },
  {
    src: "/images/grottes/pis de vache 1.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de Laforge près Souillac (Lot)",
  },
  {
    src: "/images/grottes/grotte-pis-de-vache.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de Laforge près Souillac (Lot)",
  },
  {
    src: "/images/grottes/g d l f 7.jpg",
    width: 1600,
    height: 1000,
    alt: "Château de Laforge près Souillac (Lot)",
  },
];

export default function TourPage() {
  return (
    <main className="min-h-screen text-justify">
      <Breadcrumbs />
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px]">
        <Image
          src="/images/grottes/fouilles-armand-vire.jpg"
          alt="La grotte du Pis de la Vache"
          fill
          className="object-cover shadow-md"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
            La grotte du Pis de la Vache
          </h2>
          <p className="mt-3 text-white/90 text-lg md:text-xl lg:text-2xl italic font-medium">
            par Armand Viré
          </p>
        </div>

        {/* Caption at bottom-right */}
        <p className="absolute bottom-2 right-4 text-white/90 text-xs md:text-sm italic">
          Les fouilles exécutées par Armand Viré en 1932
        </p>
      </div>

      <div className="mt-6 space-y-2 text-xl leading-relaxed pr-10 pl-10">
        <p>
          Parmi toutes les stations préhistoriques que nous avons fouillées dans
          le département du Lot, la grotte du Pis de la Vache nous paraît
          mériter une mention toute particulière.
        </p>

        <p>
          C&apos;est la seule qui nous ait donné une superposition de foyers
          s&apos;étendant depuis le <b>Moustérien</b> (entre 350 000 et 35 000 ans
          avant le présent) jusqu&apos;au <b>Néolithique</b> (entre 6000 et 3000 ans
          avant le présent).
        </p>

        <p>
          Située dans le parc du château de Laforge, à Bourzolles, commune de
          Souillac, elle appartenait à mon regretté ami Julien Valat,
          aujourd’hui occupé par son fils Robert Valat.
        </p>

        <p>
          Le parc est traversé par la Borrèze, affluent de la Dordogne. Dans sa
          partie occidentale, un ravin dit <q>Combe de la Grotte</q> entame
          profondément le plateau calcaire du Causse de Martel, qui porte à cet
          endroit le nom de <q>Camp de l’Hoste</q>, où l’on trouve divers
          tumulus et fortifications préhistoriques et médiévales.
        </p>

        <p>
          Ce ravin se termine en <q>bout du monde</q>, clos par des falaises à
          pic ou des pentes abruptes, percées vers le fond par trois grottes :
        </p>

        <ul className="list-disc pl-6">
          <li>
            La plus élevée : galerie étroite et longue, ornée de belles
            stalactites.
          </li>
          <li>
            La seconde : transformée au XIX<sup>e</sup> siècle en chapelle
            souterraine avec pèlerinage annuel.
          </li>
          <li>
            La plus basse (170 m), constituant un bel habitat préhistorique,
            avec porche de 15 m de large et 5 m de haut, donnant accès à une
            galerie de près de 70 m.
          </li>
        </ul>

        <p>
          Cette dernière porte le nom de <b>Pis de la Vache</b>, à cause d’une
          stalactite qui rappelle la forme de l’organe animal.
        </p>

        <h2>Résultats des fouilles (stratigraphie)</h2>

        <h3>Éboulis</h3>
        <p>
          Sable terrestre et fluviatile sur plus de 6 m d’épaisseur, dépourvu
          d’industrie humaine. On y trouve de nombreux ossements d’Ours.
        </p>

        <h3>Moustérien</h3>
        <p>
          Une rivière sortait encore de la grotte. La couche médiane est
          argilo-sableuse fluviatile, contenant outils et ossements roulés.
        </p>
        <p>Outils caractéristiques :</p>
        <ul className="list-disc pl-6">
          <li>Coup-de-poing en quartz (~12 cm)</li>
          <li>Pointes à main</li>
          <li>Disques tranchants</li>
          <li>Racloirs en quartz ou silex</li>
          <li>Boules rondes (bolas) en quartz, grès ferrugineux ou calcaire</li>
        </ul>

        <h3>Magdalénien</h3>
        <p>
          Couche peu épaisse, stratification confuse, interrompue par des
          éboulis.
        </p>
        <p>Industrie lithique :</p>
        <ul className="list-disc pl-6">
          <li>Burin (n°2, 3)</li>
          <li>Grattoir-burin (4)</li>
          <li>Grattoirs ronds ou allongés</li>
          <li>Scies (n°1)</li>
          <li>Lames à dos abattu</li>
        </ul>
        <p>Outillage osseux :</p>
        <ul className="list-disc pl-6">
          <li>Aiguilles en os (17)</li>
          <li>Hameçons (18)</li>
          <li>Lissoirs en bois de renne (1, 2)</li>
          <li>Harpons (3, 4)</li>
          <li>Perçoirs (14)</li>
          <li>
            Pointes de sagaies en bois de renne (10, 11, 13) ou ivoire (6, 7)
          </li>
          <li>Os creux orné de 28 traits parallèles (5)</li>
        </ul>
        <p>Parures :</p>
        <ul className="list-disc pl-6">
          <li>Coquilles marines percées (15)</li>
          <li>Dent striée (16)</li>
          <li>Petits cubitus striés (19)</li>
        </ul>
        <p>Faune : principalement du Renne, quelques restes de Cheval.</p>

        <h3>Azilien</h3>
        <p>
          Climat humide, abondance de félins et rongeurs. Industrie de petites
          dimensions :
        </p>
        <ul className="list-disc pl-6">
          <li>Perçoirs très fins, simples ou doubles</li>
          <li>Tarauds (11, 12)</li>
          <li>Microlithes (13 à 18)</li>
        </ul>

        <h3>Néolithique</h3>
        <p>
          Couche pauvre : charbons, lames sans caractéristique, fragment de
          hache polie (19), nombreux débris de poterie (20). Aucune trace des
          époques postérieures.
        </p>

        <h2>Conservation</h2>
        <p>
          Les récoltes sont en partie dans ma collection, en partie au Musée de
          Brive (Musée Labenche), certaines actuellement à la grotte de Pech
          Merle.
        </p>

        {/* GALLERIE (lightbox) */}
        <div className="pt-6 pb-6">
          <Gallery images={galleryImages} />
        </div>
      </div>
    </main>
  );
}