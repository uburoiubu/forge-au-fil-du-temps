import Image from "next/image";
import Breadcrumbs from "../../../components/breadcrumbs";

export const metadata = {
  title: "Grotte-Chapelle Notre Dame de la Sainte Espérance - Les grottes - Histoire & patrimoine - La Forge au fil du temps",
  description:
    "Découvrez l'histoire de la grotte-chapelle de Notre Dame de la Sainte Espérance à La Forge de Bourzolles, son origine en 1844 et son développement en pèlerinage au XIXème siècle.",
};

export default function TourPage() {
  return (
    <main className="min-h-screen text-justify">
      <Breadcrumbs />
      <h1 className="text-5xl text-center pt-2 pr-6 pl-6">
        La Grotte-Chapelle de Notre Dame de la Sainte Espérance
      </h1>
      <div className="mt-6 space-y-2 text-xl leading-relaxed pr-10 pl-10">
        <p>
          Au milieu du XIX<sup>ème</sup> siècle, Monsieur Lecomte, père d'Anaïs{" "}
          <b>DELTHEIL</b> (1811–1887), épouse du dernier maître des forges, et
          l'abbé <b>PECHMEGE</b>, curé de Bourzolles, avaient l'habitude de se
          promener dans les bois de la combe du Play.
        </p>

        <p>
          Leur promenade se terminait à mi-côte, près d'un rocher qui présente
          une petite anfractuosité. Ils eurent la pieuse inspiration de placer
          dans cette sorte de niche naturelle une statue de la Vierge, ce qu'ils
          firent le samedi 26 octobre 1844.
        </p>

        <p>
          Cet endroit devint un lieu de recueillement pour la famille et leurs
          proches.
        </p>

        <p>
          Anaïs DELTHEIL, qui voyageait souvent à Paris, avait une grande
          dévotion à Notre Dame de Saint-Séverin, connue et honorée depuis 1840
          sous le titre d'Immaculée Mère de la Sainte Espérance.
        </p>

        <p>
          Elle eut le désir de pouvoir la prier lors de ses séjours à la Forge
          et le souhait d'établir un pèlerinage en son honneur.
        </p>

        <p>
          Près du rocher où avait été placée la Vierge se trouvait une grotte
          qui pouvait permettre la réalisation de ce projet.
        </p>

        <p>
          La statue de Notre Dame de la Sainte Espérance fut achetée et bénie
          sur l'autel même de Saint-Séverin. Une grande croix fut placée sur le
          rocher qui domine la grotte.
        </p>

        <p>
          Le 10 octobre 1858, une procession réunissant les paroisses de
          Souillac, de Reyrevignes et de Bourzolles accompagna la statue sur le
          chemin élargi à cette intention, et l'on plaça la statue dans sa niche
          au chant des cantiques créés pour l'occasion.
        </p>

        <p>
          Le 16 octobre 1859, à la demande d’Anaïs, la paroisse de Bourzolles
          fut affiliée à l’archiconfrérie de Saint-Séverin. Depuis ce jour, tous
          les ans, la procession à la grotte eut lieu avec un nombre croissant
          de fidèles.
        </p>

        <p>
          En 1890, <b>Julien VALAT</b>, nouveau propriétaire de la
          Forge, encouragé par Monsieur <b>TOUREILLE</b>, curé de
          Bourzolles, œuvra pour que la messe, les vêpres et la bénédiction du
          Saint-Sacrement puissent avoir lieu dans la grotte.
        </p>

        <p>
          Pour cela, il fit élargir l’entrée de la grotte, aplanir l’intérieur,
          ériger un autel roman et creuser une chaire dans le roc.
        </p>

        <p>
          La première statue, un peu détériorée par le temps, fut remplacée par
          une autre de dimension moins modeste et d’un travail plus fini.
        </p>

        <p>
          Une cloche fut installée au-dessus de l’entrée de la grotte, elle-même
          fermée par une grille en fer portant l’écusson de la Vierge et
          l’inscription&nbsp;:
        </p>

        <blockquote>
          «&nbsp;N.D. des grottes, Immaculée Mère de la Sainte Espérance&nbsp;»
        </blockquote>

        <p>
          Julien fit aussi aménager un chemin de croix dont les 14 stations en
          fonte, fixées au rocher, guident le pèlerin jusqu’à la grotte.
        </p>

        <p>
          Le pape <strong>Léon XIII</strong>, par lettre du 17 septembre de la
          même année, fixait au dernier dimanche de septembre la date du
          pèlerinage, désignait Monsieur <strong>VERTU</strong>, curé de Souillac, pour la bénédiction du
          chemin de croix et autorisait la célébration de la messe dans le
          nouveau sanctuaire six fois par an.
        </p>

        <p>
          Ce fut le dimanche 28 septembre 1890 que fut célébrée la nouvelle fête
          qui, de très bonne heure, avait attiré un grand nombre de fidèles sur
          l’esplanade de la grotte. Le lieu fut béni et le curé de Bourzolles
          célébra le Saint-Sacrifice.
        </p>

        <p>
          L’après-midi, une procession partant de l’église du village où
          sonnaient les cloches, passant par la Forge, se dirigeait vers la
          grotte. Tout en montant, on procéda à la bénédiction du chemin de
          croix et c’est au chant du <em>Te Deum</em> qu’on pénétra dans la
          chapelle.
        </p>

        <p>
          À la nuit tombée, une immense croix brillamment illuminée portait au
          loin le symbole du Salut et de la Délivrance, tandis que des fusées et
          des feux de Bengale donnaient à la Forge un aspect féérique.
        </p>

        <p>
          Depuis, la fête des grottes a été transférée au premier dimanche
          d’octobre.
        </p>

        <p className="text-sm italic">
          D’après les archives de la Forge Patrimoine
        </p>
      </div>
    </main>
  );
}
