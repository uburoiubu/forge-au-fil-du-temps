import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../components/breadcrumbs";

export const metadata = {
  title: "Histoire & patrimoine - La Forge au fil du temps",
  description: "Découvrez l'histoire fascinante de l'ancienne forge de Bourzolles à Souillac, de ses origines au XVIème siècle à nos jours, et explorez son riche patrimoine industriel et architectural."
};

export default function HistoryPage() {
  return (
    <main className="min-h-screen text-justify">
      <Breadcrumbs />
      <div className="w-screen">
        <Image
          src="/images/chateau.jpg"
          alt="Plafond de la maison du maître"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-cover md:max-h-[400px]"
          priority
        />
      </div>
      <h1 className="text-5xl text-center pt-6 pl-6 pr-6">
        Histoire & patrimoine
      </h1>
      <div className="mt-6 space-y-2 text-xl leading-relaxed pr-10 pl-10">
        <p>
          Le lieu doit son nom à l'ancienne activité de forge ou fonderie qui
          füt créée par la famille DE COUSTIN, probablement au début du XVIème
          siècle.
        </p>
        <p>
          Les DE COUSTIN ont acquis leur noblesse et leur fortune à la cour du
          roi François ler. Jean DE COUSTIN fût le premier de la famille à
          s'installer à Bourzolles, où il fit bâtir son château au bord de la
          Borrèze.
        </p>
        <h1 className="text-4xl text-center pt-3 pb-3 text-left">
          La période des forges
        </h1>
        <p>
          Les seigneurs DE COUSTIN, profitant des progrès de la sidérurgie,
          établirent une forge sur la rivière Borrèze, à l'emplacement d'un
          ancien moulin dit du Boulet. A cette époque, l'exploitation se
          composait d'un haut fourneau (toujours présent sur le site), avec pour
          force motrice, la Borrèze (qui alimentait une retenue d'eau de 800m de
          long. 7m de large et 2m de profondeur), et d'un atelier de moulage
          C'était une forge paysanne, intégrée dans l'espace villageois, et qui
          bénéficiait de matières premières à proximité: minières de fer
          (Cressensac, Nespouls, Nadaillac), carrières de castine et de sable,
          vastes forêts et d'une main d'œuvre peu coûteuse, fournie par les
          paysans qui, sans abandonner leurs terres, amélioraient leur quotidien
          en travaillant à la forge durant la période de l'année où l'eau est
          abondante et les travaux des champs peu importants.
        </p>
        <p>
          Dans le haut fourneau, le minerai était réduit et recueilli à l'état
          de métal en fusion: la fonte. Elle s'écoulait au pied du haut fourneau
          ou était disposée une épaisse couche de sable dans laquelle on
          aménageait une rigole où l'on coulait directement la fonte qui était
          récoltée sous forme de bloc prismatique que l'on appelait des gueuses.
          Les gueuses devaient être retraitées pour obtenir le fer, par
          décarburation et martelage. Si la fonte était destinée à des
          ustensiles (marmites, chaudières, plaques de cheminées...), des moules
          étaient nécessaires (moules fabriqués à base d'argile et de sable).
        </p>
        <p>
          La forge restera dans la famille des DE COUSTIN jusqu'en 1725. La
          châtellenie füt alors rachetée par Jérémie SCLAFER, qui avait épousé
          la sœur de Jean DE COUSTIN. En 1775 elle redevint la propriété de
          Joseph DE COUSTIN, légataire universel de Jérémie SCLAFER. Ni les DE
          COUSTIN ni les SCLAFER n'exploitèrent eux-mêmes leur forge, ils
          l'affermerent un temps à Henri BERTIN, contrôleur des finances de
          Louis XV et propriétaire de la forge d'Ans près de Périgueux. Durant
          cette période, d'importantes commandes de canons pour les armées du
          Roi, furent sous-traitées à Bourzolles. Lui succédèrent, en 1784,
          Guillaume LAVERGNE et Denis DELTHEIL en tant que fermiers. (Denis
          épousera une des filles de Guillaume)
        </p>
        <p>
          En 1791, Joseph DE COUSTIN vendit l'établissement à Denis DELTHEIL.
          Esprit très pratique, actif et intelligent, Denis fit considérablement
          prospérer le domaine et apporta d'importantes modifications à son
          usine. Parallèlement, Denis DELTHEIL qui avait adhéré aux idées
          révolutionnaires joua un rôle politique notable. Il maria son fils
          Jean Baptiste, à la petite-fille d'Alexandre DE BEAUHARNAIS (premier
          mari de Joséphine), issue d'une fille naturelle de ce dernier. Durant
          la révolution, la forge reçut des commandes de boulets, et de grosse
          artillerie, pour le compte de l'armée. En temps de paix, on y
          fabriquait des chenets, des plaques de cheminées, des essieux et pour
          les colonies d'Amérique de grandes chaudières à l'usage des
          raffineries de sucre. (Il en existe encore deux dans le parc). Tout
          ceci était convoyé en gabarre sur la Dordogne au départ du port de
          Lanzac vers Bordeaux.
        </p>
        <p>
          A la mort de Denis, son fils Jean Baptiste reprit l'affaire, et lui
          donna une nouvelle impulsion en améliorant la fonte. Il créa un
          affinerie pour la production du fer. Création autorisée par une
          ordonnance du Roi Charles X le 13 mars 1828. Le fer, d'un usage plus
          courant et d'une commercialisation plus facile, permit de nouveaux
          débouchés.
        </p>
        <p>
          C'est à cette période qu'il fit aussi agrandir près de la forge, la
          maison qui servait de logement aux propriétaires, pour y vivre plus
          confortablement avec son épouse Anais. A cette époque elle était
          adossée au rocher, et la route passait entre la bâtisse et le canal.
          Une période de prospérité s'ouvrit alors de 1830 à 1845.Jean Baptiste
          DELTHEIL se trouvant, d'achats en héritages, en possession d'un bloc
          foncier de 650 ha, dont deux forges (Bourzolles et D'Ans près de St
          Geniès en Dordogne). Jouissant de nombreuses relations et du prestige
          de sa situation, il se lança en politique, et fut pendant vingt années
          consécutives, président ou vice-président du conseil général du Lot.
        </p>
        <p>
          Jean Baptiste DELTHEIL, et Anais, jouèrent aussi un rôle social
          important sur la commune de Souillac. Jean Baptiste fit construire
          l'église de Bourzolles en grande partie à ses frais. Après sa mort
          (1871), sa veuve fonda à Bourzolles une école gratuite, dont elle
          payait les maîtresses, et une maison de scœurs garde-malades. Elle est
          aussi à l'origine de l'aménagement d'une des grottes de la propriété
          en chapelle dédiée à Notre Dame de Sainte Espérance (1858).
        </p>
        <p>
          La politique économique du libre-échange, la création des usines
          anglaises utilisant de la houille et la naissance du chemin de fer,
          provoquèrent le déclin inexorable de la forge de Bourzolles, qui ferma
          définitivement en 1860. Pour n'avoir pas compris à temps que lutter
          était impossible, Jean Baptiste DELTHEIL perdit une grande partie de
          sa fortune.
        </p>
        <h1 className="text-4xl text-center pt-3 pb-3 text-left">
          La période de la centrale électrique
        </h1>
        <p>
          En 1887, Julien VALAT devint le nouveau propriétaire du site. Il
          entreprit de le rénover et, passionné d'électricité, il installa une
          petite centrale hydraulique à l'endroit de l'affinerie pour utiliser
          la chute d'eau et illuminer le magnifique parc et alimenter la maison
          en eau courante.
        </p>
        <p>
          En 1900, l'éclairage électrique passa de l'exception à l'extension
          pour éclairer la ville de Souillac, grâce à l'aide de la municipalité.
          La petite centrale devint une usine électrique. Julien VALAT fit
          élever les murs du canal de retenue et approfondir le canal de fuite
          pour obtenir une chute de 6m alimentant une turbine de 40 chevaux.
          Pour transporter le courant à 5 kms, il fit placer un alternateur
          triphasé de 2000 volts et il installa un moteur de secours de 30
          chevaux pour parer aux irrégularités de débit de la Borrèze. L'usine
          électrique fonctionnera jusqu' 'en 1930.
        </p>
        <h1 className="text-4xl text-center pt-3 pb-3 text-left">
          Après la période industrielle
        </h1>
        <p>
          Julien VALAT travailla aussi à embellir et agrandir la demeure des
          anciens maîtres des forges. Il fit ériger une tour centrale dotée de
          balcons à balustres et d'une horloge. Il accola un jardin d'hiver sur
          le côté droit de la bâtisse (1895), et sur le côté gauche une grande
          salle très richement ornée où trone une cheminée monumentale sur
          laquelle figure la devise de la famille labora profice ora et spera».
          Cette salle communique avec une petite chapelle aux belles peintures
          murales. De très nombreux vitraux habillent les fenêtres.
        </p>
        <p>
          Il se chargea aussi de modifier le tracé de la route, qui dorénavant
          passera derrière la båtisse (1892). Ces modifications, ainsi que
          l'aménagement du parc, contribueront à donner au bâtiment
          l'appellation de Château de La Forge, sur les cartes postales du début
          du XXème siècle | Il poursuivit aussi « l'œuvre » de Mine DELTHEIL en
          améliorant l'accès à la chapelle de la grotte, y aménageant un chemin
          de croix (dont les plaques des stations sont toujours visibles). Il
          obtint aussi du Pape Léon XIII que des offices puissent y être
          célébrés (6 par an). En érudit, Jean Baptiste DELTHEIL possédait de
          nombreux ouvrages littéraires. Julien VALAT enrichit à son tour cette
          bibliothèque qui fût installée dans la grande salle. Son
          arrière-petite-fille, Marie Anne LACOSTE, mit ces magnifiques ouvrages
          à la disposition du public en créant une association « La Forge
          Patrimoine »
        </p>
        <p>
          A son décès, sa fille Florence LACOSTE fit don à la bibliothèque de
          SOUILLAC de ces nombreux ouvrages, cartes postales et photos qui
          constituent un fonds patrimonial extrêmement riche ! Ils sont
          consultables sur rendez-vous.
        </p>
        <h1 className="text-4xl text-center pt-3 pb-3 text-left">
          « La forge au fil du temps »
        </h1>
        <p>
          Le 7 décembre 2016, je suis devenue l'heureuse propriétaire de ce bel
          endroit ! Mon but est de sauvegarder ce lieu, de lui redonner vie et
          de lui faire retrouver son « lustre d'antan » ! C'est un projet de «
          longue haleine » compte tenu de l'ampleur des travaux ! J'ai créé une
          association, dans ce but:{" "}
          <b>
            <i>« La forge au fil du temps »</i>
          </b>
          .
        </p>
        <p>
          Tous les soutiens et toutes les bonnes volontés sont les bienvenus!
        </p>
        <p>Merci de votre visite !</p>
        <p className="text-right">Virginie</p>
      </div>
      <section className="mt-12 px-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Pour aller plus loin
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/histoire/forges"
            className="group block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition"
          >
            <div className="relative h-48">
              <Image
                src="/images/forges/plan-forges-1828-haut-fourneau.jpg"
                alt="Les forges à Souillac"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Les forges</h3>
              <p className="text-base mt-1">Découvrez l'histoire des forges.</p>
            </div>
          </Link>
          <Link
            href="/histoire/maison"
            className="group block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition"
          >
            <div className="relative h-48">
              <Image
                src="/images/maison/maison-cover-compressed.jpeg"
                alt="Maison La Forge"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">La grande maison</h3>
              <p className="text-base mt-1">
                Découvrez l'histoire de la grande maison.
              </p>
            </div>
          </Link>
          <Link
            href="/histoire/usine"
            className="group block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition"
          >
            <div className="relative h-48">
              <Image
                src="/images/usine.jpg"
                alt="Usine électrique"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                L'usine électrique Sainte Thérèse à La Forge (Souillac)
              </h3>
              <p className="text-base mt-1">
                Découvrez l'histoire de l'usine électrique.
              </p>
            </div>
          </Link>
        </div>
      </section>
      <section className="mt-12 px-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          À découvrir aussi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/histoire/grottes"
            className="group block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition"
          >
            <div className="relative h-48">
              <Image
                src="/images/grottes/grottes-cp.jpg"
                alt="Souillac. Grottes de Laforge"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Les grottes</h3>
              <p className="text-base mt-1">
                Découvrez l'histoire des grottes.
              </p>
            </div>
          </Link>
          <Link
            href="/histoire/roquefort"
            className="group block rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition"
          >
            <div className="relative h-48">
              <Image
                src="/images/roquefort/tour-roquefort.jpg"
                alt="La tour Roquefort de Bourzolles"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                La tour Roquefort de Bourzolles
              </h3>
              <p className="text-base mt-1">
                Explorez la tour et son histoire.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
