import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Les grottes - Histoire & patrimoine - La Forge au fil du temps",
  description:
    "Découvrez les grottes mystérieuses de la Forge de Bourzolles à Souillac, dont la grotte-chapelle dédiée à Notre Dame de Sainte Espérance.",
};

export default function TourPage() {
  return (
    <main className="min-h-screen text-justify">
      <h1 className="text-5xl text-center pt-6 pr-6 pl-6">
        Historique des grottes de La Forge par l'Abbé Coldefy
      </h1>
      <div className="mt-6 space-y-2 text-xl leading-relaxed pr-10 pl-10">
        <p>
          Le pèlerinage bourzollais de Notre-Dame des Grottes n'est pas un de
          ces antiques pèlerinages dont l'existence se confond dans la nuit des
          temps avec l'histoire d'une province ou de quelque cité, ni l'effet
          d'une apparition de la Vierge. Il n'a guère plus de quatre-vingts ans,
          et c'est à la piété du père de Madame Deltheil, la châtelaine de La
          Forge, et d'un curé de Bourzolles qu'il doit son origine.
        </p>

        <p>
          Monsieur Lecomte et l'abbé Pechmège avaient l'habitude de se promener
          ensemble dans les bois de la Combe du Play. Leur promenade se
          terminait, à mi-côte de la montagne, près d'un rocher présentant une
          petite anfractuosité. Ils eurent la pieuse inspiration d'y placer une
          statue de la Vierge, ce qu'ils firent le samedi 26 octobre 1844.
        </p>

        <p>
          On peut dire que le pèlerinage était fondé. En même temps, quelques
          membres de la famille Deltheil et des personnes pieuses de la paroisse
          eurent à cœur de venir invoquer Marie auprès de ce rocher. Leur
          exemple fut fécond : peu à peu, le nombre des visiteurs augmenta et
          l'on put organiser des processions en ce lieu béni.
        </p>

        <p>
          Ce développement fut grandement favorisé par des modifications et
          améliorations, dues à Madame Deltheil, qui lui donnèrent son caractère
          particulier. Voici comment elle en prit l'initiative : il existe à
          Paris une église célèbre pour son culte à la Vierge,{" "}
          <em>Saint-Séverin</em>.
        </p>

        <blockquote>
          <p>
            « C'est sous sa nef que l'Immaculée Conception fut vénérée six
            siècles avant d'être déclarée dogme de foi. C'est en cette église
            que, lorsque l'Université de Paris eut adopté les thèses de saint
            Anselme et du docteur subtil, le franciscain Scot, fut fondée, en
            1311, une confrérie pour honorer sous le titre d'Immaculée la fille
            de Joachim (Huysmans). Aujourd'hui encore, si les fidèles ne s'y
            portent pas autant qu'à Notre-Dame des Victoires, elle a néanmoins,
            en dehors des fidèles du quartier, ses visiteurs ; nous avons nommé
            “Saint-Séverin”. [...] De même que la plupart des basiliques,
            l'église de Saint-Séverin telle que nous la voyons aujourd'hui fut
            construite en plusieurs fois ; elle chevauche, ainsi que ses grandes
            sœurs les cathédrales, sur plusieurs styles. L'abside est une des
            plus étonnantes ombellis qu'on ait jamais brodées pour abriter le
            Très-Saint-Sacrement de l'autel. »
          </p>
        </blockquote>

        <p>
          Quelles qu'aient été les circonstances, les raisons de famille ou de
          conscience qui l'avaient amenée à s'adresser à elle, Madame Deltheil
          avait une grande dévotion à Notre-Dame de Saint-Séverin, connue et
          honorée depuis 1840 sous le titre d’
          <em>Immaculée Mère de la Sainte Espérance</em>. C'est ainsi que, le 15
          août 1857, elle faisait placer dans la chapelle de Saint-Séverin, avec
          un écrit de sa main contenant ses intentions, un cœur brodé entouré de
          brillants, surmonté d'une croix en brillants avec chiffre de la Vierge
          et ses propres initiales en lettres gothiques.
        </p>

        <p>
          D'autre part, chaque fois que ses relations, ses affaires, les
          occupations de son mari l'appelaient à Paris, elle venait
          s'agenouiller dans cette même chapelle, y prier pour elle et ceux qui
          lui étaient chers. C'est sans doute à l'occasion de ces pieuses
          visites que le souvenir de la petite grotte du Play vint à son esprit.
          Cette grotte, pourquoi ne pas la consacrer à{" "}
          <strong>N.D. de la Sainte Espérance</strong> ? Pourquoi ne pas
          remplacer la statue placée par M. Lecomte et M. Pechmège par une copie
          de celle de Saint-Séverin ? Ne serait-ce point là le moyen de rappeler
          les grâces reçues et de s'attirer une protection plus bienveillante
          encore ?
        </p>

        <p>
          Et puis, durant les longs séjours à La Forge, quelle consolation de
          pouvoir, tout comme à Paris, aller prier au pied de l'image de sa
          bonne et sainte Patronne ! Ne serait-il même pas possible de faire
          connaître Notre-Dame de la Sainte Espérance et d'établir un pèlerinage
          en son honneur ? Les lieux s'y prêtaient admirablement.
        </p>

        <p>
          Un peu au-dessus du rocher devant lequel venaient prier M. Lecomte et
          M. Pechmège, dans un site encore plus sauvage, se trouvait une grotte
          vaste et spacieuse, à la voûte élancée. Devant l'entrée, on pouvait
          très facilement aménager une esplanade et tracer des sentiers pour y
          arriver. Dès lors, ce ne seraient plus quelques rares personnes, mais
          des foules qui viendraient y prier.
        </p>

        <p>
          C'est donc là, dans cette grotte, qu'il fallait placer la statue de
          Notre-Dame, non pas en cachette, en petit comité, en famille, mais
          avec le plus de solennité possible. L'idée était excellente et
          certainement voulue de Marie, inspirée par Elle.
        </p>

        <p>
          Immédiatement, Mme Deltheil se mit à l'œuvre. Elle sut intéresser à
          son projet le curé, les habitants de la paroisse et Mgr Bardoux,
          évêque de Cahors. La statue de N.D. de la Sainte Espérance fut achetée
          et bénie sur l'autel même de Saint-Séverin. Une grande croix fut
          placée sur le rocher qui domine la grotte. Un chemin assez large pour
          qu'une procession pût librement s'y développer fut ouvert. De nombreux
          et chaleureux appels furent adressés aux habitants de la paroisse et
          des paroisses avoisinantes.
        </p>

        <p>
          Et le 10 octobre 1858, jour de la fête de la maternité de la Sainte
          Vierge, eut lieu la grande cérémonie projetée. Si nous nous en
          rapportons à un compte rendu qui nous a été conservé et à quelques
          lettres de Mme Deltheil, cette cérémonie fut vraiment splendide.
        </p>

        <p>
          Après les vêpres, que présidait M. Gracie, curé de Souillac, assisté
          de M. Brunet, curé de la paroisse, et de M. Laverdet, curé de
          Reyrevignes, une procession se forma, compacte et nombreuse, grossie à
          chaque pas par des groupes de fidèles étrangers.
        </p>

        <p>
          La bannière de Reyrevignes, la nouvelle bannière de Bourzolles avec
          son inscription toute d'actualité{" "}
          <q>Notre Dame des Grottes, Immaculée, Mère de la Sainte Espérance</q>,
          dominaient la foule, tandis que les jeunes filles de la paroisse,
          vêtues de blanc, portaient en triomphe la statue de la Vierge.
        </p>

        <p>
          Aux chants des cantiques et aux pieux murmures des chapelets égrenés,
          on longea la vallée de la Borrèze que l'on traversa à La Forge, puis
          on s'engagea dans la Combe du Play. Là, de nouveaux fidèles se
          joignirent encore à la procession tandis que d'autres la contemplaient
          de loin, du haut de la montagne comme suspendues au rocher.
        </p>

        <p>
          À la grotte, la statue, une fois placée dans sa niche, M. le curé de
          Souillac, qui déjà à l'église avait célébré les grandeurs de Marie,
          inspiré par cette pompe rustique plus encore que par cette foule
          empressée, fit entendre des paroles qui émurent profondément les
          cœurs.
        </p>

        <p>
          Après quoi, toujours en procession dans le même ordre, on retourna à
          l'église pour recevoir la bénédiction du Très Saint Sacrement.
        </p>

        <p>
          Mme Deltheil, on le comprend, débordait de joie. Son rêve était enfin
          réalisé.
        </p>

        <blockquote>
          « Dans ces lieux sauvages, devant cette grotte dont la mystérieuse
          entrée conduit à des profondeurs ténébreuses, image de l'âme que
          n'éclaire pas le flambeau de la foi, brillera la douce image de la
          Mère de Dieu. »
        </blockquote>

        <p>
          On y viendra avec confiance offrir ses vœux et déposer ses peines au
          pied de Celle qui les guérira souvent et toujours les adoucira par
          l'espérance.
        </p>

        <p>
          Parmi les nombreuses lettres qu'elle reçut à l'occasion de cette fête,
          relevons-en une de Mgr Bardoux, homme d'une particulière bienveillance
          :
        </p>

        <blockquote>
          « Accord d’une indulgence de 40 jours, à toute personne qui récitera
          un Pater et un Ave soit au pied de la statue principale de la grotte,
          soit au pied de la croix plantée au bas de la côte qui conduit à la
          grotte, soit de la grotte dite de la Mission. »
        </blockquote>

        <p>
          Des stances à la Vierge lui furent adressées par un nommé{" "}
          <strong>Sidonie Chantelcuve</strong>
          de Souillac. Ces stances ne sont rien de très poétiques ; toutefois,
          elles ont fourni un thème de cantique en l'honneur de Notre-Dame de la
          Sainte Espérance.
        </p>

        <p>
          Malgré tous ces éloges en prose ou en vers, Mme Deltheil ne jugea pas
          son œuvre complètement terminée. Elle résolut encore de faire affilier
          la paroisse de Bourzolles à l’archiconfrérie en l’honneur de Marie,
          établie à Saint-Séverin. Pour cette affiliation, le jour anniversaire
          de l’érection de la statue paraissait tout indiqué.
        </p>

        <p>
          Elle fit, dans ce but, écrire à Mgr Bardoux par le curé de la
          paroisse. Une copie des statuts de l’archiconfrérie et des indulgences
          dont elle est enrichie était jointe à la demande, ainsi que le
          certificat d’affiliation délivré par le curé de Saint-Séverin, qui ne
          demandait que le visa de sa Grandeur. L’autorisation de faire une
          procession tous les ans à la grotte était également sollicitée.
        </p>

        <p>
          Mgr hésita un moment à accorder cette double faveur, sans que l’on
          voie bien pourquoi. Mme Deltheil intervint alors personnellement, et
          le 13 octobre, elle recevait la réponse qui suit :
        </p>

        <blockquote>
          « Madame, grâce à votre intervention et au nouveau motif que M. le
          curé veut bien m’exposer, j’accorde tout pour votre cérémonie de
          dimanche prochain. Je connaissais de réputation la confrérie de
          Saint-Séverin et je suis heureux de la voir s’établir dans mon
          diocèse. Nous sommes dans un temps où l’on trouve quelque consolation
          à invoquer Marie sous le titre de Notre-Dame de la Sainte Espérance. »
        </blockquote>

        <p>
          Le 16 octobre 1859, eut donc lieu en même temps que l’érection de la
          statue de la Vierge, l’affiliation de la paroisse à l’archiconfrérie
          de Saint-Séverin. Ce jour-là encore, M. Graeis, curé de Souillac,
          présidait la cérémonie.
        </p>

        <p>
          Depuis ce jour, tous les ans, avec l’assentiment de l’autorité
          diocésaine, la paroisse de Bourzolles se rendit en procession à la
          grotte ; chaque année vit s’accroître le nombre des fidèles qui
          prenaient part à cette pieuse manifestation. Mais il était réservé à
          l’année 1890 de voir se développer dans cet oratoire le culte de celle
          que l’on n’invoque jamais en vain.
        </p>

        <p>
          Jusqu’ici, une simple procession au pied de la statue constituait
          toute la fête en l’honneur de Notre-Dame de la Sainte Espérance.
          Combien différent aurait été l’éclat de cette fête si la messe, les
          vêpres et la bénédiction du Très Saint Sacrement, au lieu de se
          célébrer dans l’église paroissiale, avaient eu lieu dans la grotte
          même.
        </p>

        <p>
          Or ce résultat fut obtenu grâce à M. <strong>Julien Valat</strong>,
          nouveau propriétaire de La Forge, encouragé par M. Toureille, curé de
          Bourzolles. Il fit élargir l’entrée de la grotte et aplanir
          l’intérieur, érigea un autel roman, fit sculpter une chaire dans le
          roc, suspendit un lustre en fer forgé, et fit remplacer la statue de
          1858 par une autre, plus grande et plus soignée. Une cloche fut
          installée au-dessus de l’entrée, fermée par une grille portant
          l’écusson de la Vierge et l’inscription :
          <q>Notre-Dame des Grottes, Immaculée, Mère de la Sainte Espérance</q>.
        </p>

        <p>
          Un nouveau chemin, moins raide et plus large, fut aménagé, et pour que
          le trajet fût saintement employé, un chemin de croix de 14 stations en
          fonte fut fixé aux rochers.
        </p>

        <h2>Les faveurs accordées</h2>
        <p>
          Le pape <strong>Léon XIII</strong>, par un bref du 4 juin 1890,
          accorda une indulgence plénière applicable aux âmes du purgatoire à
          ceux qui, après avoir reçu les sacrements, visiteraient l’oratoire le
          dernier dimanche de septembre. De son côté, Mgr Grimardias, évêque de
          Cahors, accorda une indulgence de 40 jours à ceux qui réciteraient un
          Avé au pied de la Vierge. Enfin, par lettre du 17 septembre 1890, il
          fixa au dernier dimanche de septembre la date du pèlerinage, désigna
          M. Vertu, curé de Souillac, pour la bénédiction du chemin de croix et
          autorisa la célébration de la messe dans le sanctuaire six fois par
          an.
        </p>

        <h2>La fête du 28 septembre 1890</h2>
        <p>
          Le dimanche 28 septembre 1890, dès l’aube, une foule nombreuse se
          rassembla sur l’esplanade de la grotte. M. le chanoine Gracie,
          archiprêtre de Gourdon, procéda à la bénédiction de l’autel, de la
          statue et des ornements. Le curé de Bourzolles célébra la messe,
          accompagnée d’un cantique composé pour l’occasion par un chœur de
          jeunes filles.
        </p>

        <p>
          Après la messe, le Saint Sacrement fut exposé, et toute la journée une
          garde d’honneur de fidèles se succéda en prières et en chapelets.
          L’après-midi, une procession partit de l’église du village au son des
          cloches, passa par La Forge et rejoignit la grotte, grossie par des
          fidèles de toutes parts.
        </p>

        <p>
          Les bannières étincelantes, le clergé nombreux, les enfants portant le
          drapeau de Marie et chantant des cantiques angéliques donnaient un
          spectacle imposant. Tout en montant, la bénédiction du chemin de croix
          fut faite, et au chant du <em>Te Deum</em> on pénétra dans la grotte.
        </p>

        <p>
          Le salut solennel du Très Saint Sacrement fut donné par M. Vertu, curé
          de Souillac. Le soir, une immense croix illuminée brillait au-dessus
          de la grotte, tandis que des feux de Bengale et un feu d’artifice
          donnaient à La Forge un aspect féérique. On y vit apparaître le
          monogramme de la Vierge, accompagné des derniers cantiques et prières
          des fidèles.
        </p>

        <p>
          Depuis lors, avec l’autorisation de Mgr Enard, la fête de Notre-Dame
          des Grottes fut transférée au premier dimanche d’octobre. Chaque
          année, la paroisse de Bourzolles renouvelle cette pieuse et imposante
          manifestation.
        </p>
      </div>
    </main>
  );
}
