import fs from "node:fs/promises";
import path from "node:path";
import { CustomMDX } from "../components/mdx";

export const metadata = { title: "Histoire & Patrimoine" };

export default async function Page() {
  return (
    <main className="prose mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">ASSOCIATION « LA FORGE AU FIL DU TEMPS »</h1>
      <div className="mt-6 space-y-2 text-2xl leading-relaxed">
        <p><em>(Association loi 1901)</em></p>

        <p>L'association a été créée en août 2018, sous l'impulsion de la nouvelle propriétaire d'une partie site, Virginie DESTREL, bien consciente de l'attachement de nombreux Souillagais à ce lieu et à son histoire, aussi bien humaine qu'industrielle: tout d'abord, l'usine de forge avec son bief et les vestiges du haut fourneau, la maison de maître et le parc. Ensuite, la première centrale hydroélectrique ayant alimenté Souillac, et les 3 grottes donc la grotte chapelle et les ruines de la tour médiévale «Rocafor, appartenant à Florence LACOSTE.</p>

        <p>Partager ce magnifique endroit avec la plus grand nombre était une évidence!</p>

        <p>L'association à donc pour but de valoriser le patrimoine historique et immobilier du site et de l'animer culturellement et artistiquement.</p>

        <p>Sont programmées régulièrement des journées chantier participatifs où les bénévoles contribuent à l'entretien du parc et à des petits travaux de bricolage.</p>

        <p>Nous travaillons sur les archives historiques et industrielles du site afin de faire découvrir aux visiteurs la richesse de l'histoire de La Forge».</p>

        <p>Nous accueillons des artistes pour des expositions temporaires.</p>

        <p>Nous proposons des courts stages sur divers thèmes.</p>

        <p>Organisons soirées, animations, visites, Journées du Patrimoine...</p>

        <p>Le site nécessite encore d'importants travaux de restauration, mais, au fil du temps », nous souhaitons pouvoir élargir et enrichir nos capacités d'accueil pour créer un lieu vivant, harmonieux, de partage et d'échange artistique et culturel ouvert à tous!</p>

        <p>Composée d'un bureau et riche de 150 d'adhérents, de bénévoles motivés et enthousiastes, l'association vit déjà de formidables moments de convivialité!</p>

        <p>Nous vous attendons!</p>

        <p>Adhésion annuelle: à partir de 10€</p>
      </div>
    </main>
  );
}