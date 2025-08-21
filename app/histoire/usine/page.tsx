import Image from "next/image";

export default function HistoryPage() {
  return (
    <main className="min-h-screen text-justify">
      <h1 className="text-5xl text-center pt-6 pr-6 pl-6">
        L'usine électrique Ste Thérèse La Forge Souillac
      </h1>
      <div className="mt-6 space-y-2 text-xl leading-relaxed pr-10 pl-10">
        <p>
          En 1897, sur l'emplacement de l'ancienne forge dont il utilise la
          chute d'eau, Julien Valat crée une petite usine électrique pour
          fournir l'éclairage des lieux et, grâce à une pompe qu'elle actionne,
          assurer la distribution d'eau au château et à ses dépendances. Cette
          petite usine, d'intérêt privé et familial, avec sa turbine d'une
          vingtaine de chevaux accouplée à une dynamo à courant continu, ne va
          pas tarder à prendre de l'importance.
        </p>

        <p>
          La municipalité de Souillac souhaitant bénéficier de l'éclairage
          électrique, demande à M. Valat de le lui fournir. Pour cela la
          municipalité s'engage à lui consentir une concession de monopole de
          fourniture pour une période de 33 ans, à partir du 15 août 1900.
        </p>

        <p>
          Julien accepte et fait transformer sa petite installation pour lui
          donner une puissance en rapport avec l'importance de la concession.
        </p>

        <p>
          Il fait surélever de deux mètres les murs du canal de retenue et
          approfondir la « défuite » (évacuation). Il obtient ainsi une chute
          d'eau de 6 mètres qui permettra à la turbine, après de sérieuses
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
          fait construire, non loin de l'usine, un gazogène à anthracite.
        </p>

        <p>L'usine comprend donc :</p>
        <ul>
          <li>1) la salle des machines</li>
          <li>2) le gazogène</li>
          <li>3) un atelier de réparation</li>
        </ul>

        <p>
          La ville de Souillac est reliée à l'usine par une canalisation à 3
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
          au point. Malheureusement, moins d'un an après, elle est détruite par
          un incendie. La machinerie a été sauvée ou n'a été que légèrement
          détériorée.
        </p>

        <p>
          Quant à l'immeuble, Julien en profite pour le faire reconstruire et
          aménager dans les meilleures conditions possibles : charpentes en fer,
          avec intervalles garnis de briques, baies larges et hautes sur les
          côtés et verrières à la toiture. Il fait installer un pont roulant
          pour soulever et déplacer les machines et complète le tout par un
          tableau de distribution, établi sur les plus récentes données
          scientifiques.
        </p>

        <p>
          Ce travail de reconstruction et de réaménagement est réalisé
          rapidement, et le 15 août 1913, l'usine est de nouveau mise en marche
          et peut assurer, mieux encore, l'éclairage de Souillac.
        </p>

        <p>En 1926, Robert, le fils de Julien, en prend la direction.</p>

        <p>
          Ses connaissances d'ingénieur électricien lui font mener à bien son
          travail, tant du point de vue pratique que financier : l'usine qui
          rapportait 15 000 F en 1910, 60 000 F en 1925, en rapporte près de 250
          000 F en 1930.
        </p>

        <p>
          Pourtant, par acte du 1<sup>er</sup> octobre 1930, il cède à l'Union
          Électrique Rurale son droit de concession d'éclairage, que la ville de
          Souillac lui avait renouvelé pour une période de 35 ans.
        </p>

        <p>L'usine de La Forge, avec tout son matériel, reste sa propriété.</p>

        <p className="text-right">
          <i>Archives : La Forge Patrimoine</i>
        </p>
      </div>
    </main>
  );
}
