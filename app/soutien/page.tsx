export const metadata = {
  title: "Association - Soutenir le projet - La Forge au fil du temps",
  description:
    "Découvrez l'association La Forge au fil du temps, ses objectifs, ses activités et comment la soutenir. Rejoignez-nous pour valoriser ce patrimoine historique unique.",
};

export default async function Page() {
  return (
    <main className="min-h-screen text-justify">
      <div className="p-6">
        <h1 className="text-5xl text-center pr-6 pl-6">
          Association <br />« La Forge au fil du temps »
        </h1>
        <p className="text-right pt-6">
          <em>Association loi 1901</em>
        </p>
        <div className="mt-6 space-y-2 text-xl text-center pl-10 pr-10">
          <p>
            L'association a été créée en août 2018, sous l'impulsion de la
            nouvelle propriétaire d'une partie du site, Virginie Destrel, bien
            consciente de l'attachement de nombreux Souillagais à ce lieu et à
            son histoire, aussi bien humaine qu'industrielle: tout d'abord,
            l'usine de forge avec son bief et les vestiges du haut fourneau, la
            maison de maître et le parc. Ensuite, la première centrale
            hydroélectrique ayant alimenté Souillac, et les 3 grottes donc la
            grotte chapelle et les ruines de la tour médiévale «Rocafor,
            appartenant à Florence Lacoste.
          </p>

          <p>
            Partager ce magnifique endroit avec le plus grand nombre était une
            évidence !
          </p>

          <p>
            L'association à donc pour but de valoriser le patrimoine historique
            et immobilier du site et de l'animer culturellement et
            artistiquement.
          </p>

          <p>
            Sont programmées régulièrement des journées chantier participatifs
            où les bénévoles contribuent à l'entretien du parc et à des petits
            travaux de bricolage.
          </p>

          <p>
            Nous travaillons sur les archives historiques et industrielles du
            site afin de faire découvrir aux visiteurs la richesse de l'histoire
            de La « Forge ».
          </p>

          <p>Nous accueillons des artistes pour des expositions temporaires.</p>

          <p>Nous proposons des courts stages sur divers thèmes.</p>

          <p>
            Organisons soirées, animations, visites, Journées du Patrimoine...
          </p>

          <p>
            Le site nécessite encore d'importants travaux de restauration, mais,
            au fil du temps », nous souhaitons pouvoir élargir et enrichir nos
            capacités d'accueil pour créer un lieu vivant, harmonieux, de
            partage et d'échange artistique et culturel ouvert à tous!
          </p>

          <p>
            Composée d'un bureau et riche de 150 d'adhérents, de bénévoles
            motivés et enthousiastes, l'association vit déjà de formidables
            moments de convivialité!
          </p>

          <p>Nous vous attendons!</p>

          <p className="mt-6">
            Adhésion annuelle: <i>à partir de 10 €</i>
          </p>

          <div className="mt-8 text-center mb-16">
            <a
              href="https://la-forge-au-fil-du-temps.assoconnect.com/collect/description/599549-a-adhesions-annuelles"
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Adhérer en ligne
            </a>
          </div>

          <img
            src="images/association/asso-la-forge.png"
            alt="Site logo"
            className="mx-auto mt-8 w-32"
          />
        </div>
      </div>
    </main>
  );
}
