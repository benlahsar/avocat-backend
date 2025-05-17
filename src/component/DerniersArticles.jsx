import React, { useState } from "react";

// Composant principal DerniersArticles
const DerniersArticles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "L’indépendance du parquet au centre du débat",
      description: "Le projet de loi portant sur l’indépendance du parquet a été adopté par la commission",
      content: "L’indépendance du parquet au centre du débat Le projet de loi portant sur l’indépendance du parquet a été adopté par la commission de la justice et législation de la chambre des représentants et passé en séance plénière le 24 juillet dernier, avant son transfert pour la chambre des conseillers. Toutefois, son adoption a fait l’objet d’un grand désaccord au sein du groupe parlementaire de la majorité. Notamment par rapport aux amendements concernant, l’obligation faite au parquet général d’appliquer la politique pénale régit par le gouvernement et la présentation d’un rapport annuel du parquet général devant le Parlement, qui pour sa part a été rejeté. Ce projet de loi a également soulevé des inquiétudes, surtout la question de savoir, si le parquet général devient autonome, elle ne serait plus sous l’autorité du ministère de la justice, il y aurait deux institutions judiciaire, qui serait dans ce cas à la tête ? En effet le parquet général aura un bâtiment, une autonomie financière et la prérogative de recruter les cadres qu’il souhaite. Un risque qui bien évidemment inquiète plusieurs collaborateurs. Néanmoins, à partir d’octobre prochain, ministre de la justice n’aura comme mission que de la gestion administrative des tribunaux et du recrutement du personnel et la fourniture de tout ce qui est matériel. Quant au procureur général, il sera à la tête du parquet selon la nouvelle organisation du pouvoir judiciaire.",
      image: "/img/img7.jpg",
    },
    {
      id: 2,
      title: "Le Cyber-harcèlement: que faire?",
      description: "Propos injurieux, le piratage de comptes, les intimidations, les insultes moqueries, la propagation de rumeurs, men.",
      content: "Le Cyber-harcèlement: que faire? Propos injurieux, le piratage de comptes, les intimidations, les insultes moqueries, la propagation de rumeurs, menaces en ligne… le cyber-harcèlement est devenu de plus en plus fréquents dans notre société causant de nombreux séquelles dans la vie des victimes. La plus part du temps, les gens ne savent pas y faire face et se contente de subir. Or la loi prévoit des sanctions pour ce genre de délit au même titre que le harcèlement physique. Le harcèlement sur le web peut occasionner beaucoup de stress dans la vie d’un individu et même pire, développer une certaine paranoïa vis-à-vis de son entourage. Un tel acte ne peut être considéré comme anodin. Etre dans une telle situation nécessite de prendre du recul et revoir les paramètres de sécurité de ses comptes, voir même changer son numéro de téléphone. En effet la sécurité est plus importante que tout et ce sont des éléments qui ne sont pas inchangeable. En cas de persistance de la part du dit harceleur,  Prenez votre courage à deux mains et contactez le, en lui demandant de cesser au risque d’être poursuivi en justice. Garder une trace de toutes les conversations et des captures d’écran des différents messages. Contacter l’administrateur du site et lui dire tout à propos des agissements du dit harceleur ; Il est à noter que un site diffusant des propos diffamatoires ou injurieux peut être tenu responsable juridiquement. S’il n’y a toujours pas d’effet entamez une poursuite judiciaire en remettant toutes preuves récoltées à la police.",
      image: "/img/img8.jpg",
    },
    {
      id: 3,
      title: "Litige avec une banque ou une assurance, que faire ?",
      description: "Il vous est peut être arrivé de vous plainte à cause d’un désaccord causé entre",
      content: "Il vous est peut être arrivé de vous plainte à cause d’un désaccord causé entre vous et votre banque ou assurance, vous n’osez pas agir parce que ce sont de grands organisme qui, sans doute, ont plusieurs ressources en cas de procédures judiciaire. Mais détrompez-vous, nul n’est au-dessus de la loi. Si vous avez une revendication ou si vous avez subit une quelconque injustice avec votre assurance, ou votre banque, sachez qu’il y a des recours adaptés qui pourrons vous aider et vous permettre de faire valoir vos droits. Comment vous défendre en cas de litige avec une banque ou une assurance ? Pour vous défendre en cas de litige avec votre assurance ou banque vous devez d’abord bien vous informer en lisant attentivement le contrat que vous avez signé lors de votre adhésion dans cet organisme. En effet ce document résume vos droits et vos devoirs vis-à-vis de celle-ci et est établit conformément aux exigences régit par la loi. C’est un document qui engage aussi bien le client que la Banque qui l’établit. Plusieurs cas rentrent dans le cadre d’un litige avec une banque ou assurance, notamment : En refus de remboursement ou de résiliation de la part d’une assurance, Des frais bancaires trop importants, Une situation de surendettement, etc.  Tout litige bancaire peut être pris en charge par la justice. Il est tout d’abord conseillé d’avoir recours à l’amiable en passant par un médiateur. Dans le cas contraire entamez une poursuite judiciaire.",
      image: "/img/img9.jpg",
    },
    {
      id: 4,
      title: "l’avocat au service de l’immigration",
      description: "Vous avez besoin d’immigrer quelque part pour : affaire, raison familiale, protection, etc. Plusieurs types d&rsqu",
      content: "l’avocat au service de l’immigration Vous avez besoin d’immigrer quelque part pour : affaire, raison familiale, protection, etc. Plusieurs types d’aides peuvent vous être apportés par un avocat. Immigration d’affaires Dans le cas d’un investissement à l’étranger, l’avocat peut : Vous conseiller sur le type d’entreprise à  entreprendre selon le domaine dans lequel vous souhaitez investir, vous aider dans la rédaction des documents utiles pour débuter de votre affaire et vous accompagner dans le développement de celui-ci. Il peut également vous conseiller sur l’admissibilité et la pertinence des projets d’affaires ou d’entreprise, voir dans quel cas votre affaire est éligible et vous montrer  qui vous adresser, si vous avez besoin d&#39;un complément de fonds.  Il peut Juger de la légitimité de votre expérience en affaires selon les critères légales et Vous conseiller avant la signature de la convention d’investissement. Immigration familiale Lorsqu’il s’agit d‘une affaire de famille, l’avocat peut vous conseiller sur les obligations légales liées à la signature d’un engagement envers une personne que vous désirez faire venir, Vérifier avec vous les différents exigences qui s’appliquent au garant, et dans quel cadre procéder au regroupement familial Immigration de protection En cas immigration de protection, l’avocat vous montre quelle procédure entreprendre pour les demandes de refuge ou de protection et vous aide dans les différents recours administratifs.",
      image: "/img/img10.jpg",
    },
    {
      id: 5,
      title: "La médiation lors d'un procès",
      description: "  La médiation est un processus de gestion et de résolution des conflits par lequel un médi",
      content: "  La médiation est un processus de gestion et de résolution des conflits par lequel un médiateur, qui est un tiers neutre, impartial et indépendant, aide les parties à trouver une solution équitable et durable au conflit qui les oppose. Il est devenu indispensable aux avocats d’utiliser cet outil car il est efficace, facile et non coûteux, à travers lequel le règlement du conflit s’effectue rapidement. Il est aussi nécessaire que l’avocat ait une bonne connaissance de son rôle durant la médiation, sachant que la nature juridique de ce rôle ainsi que la stratégie et les techniques sont différentes de celles de son rôle classique auprès du tribunal ou en arbitrage. La médiation  est aussi utilisée avant, pendant et après le procès.  Avant, pour essayer de régler le litige à l’amiable pour que cela arrange les deux parties, et éviter d’entrainer un allongement du procès qui sera coûteux. Pendant, car  durant le procès on peut toujours essayer d’arranger les choses ou alléger les peines. Après, car la décision qui sera prise par le juge peut porter préjudice à l’autre partie et donc un avocat médiateur pourra leur être utile. Le médiateur est garant du cadre. Il veille au partage équitable du temps de parole entre les parties et s&#39;assure de la bonne compréhension mutuelle de chacun. Il facilite la communication qui, dans la médiation, est directe et immédiate, ce qui permet de mettre en évidence les causes réelles du conflit ",
      image: "/img/img11.jpg",
    },
    {
      id: 6,
      title: "Avocat du dommage corporel",
      description: "  On parle d’avocat du dommage corporel lorsqu’un accident se produit, ou si on a été vie",
      content: " On parle d’avocat du dommage corporel lorsqu’un accident se produit, ou si on a été victime d’une agression et que l’on a des dommages corporels ; dans ce cas l’on saisit un avocat du dommage corporel. Quand un avocat de dommage corporel est saisi c’est pour qu’il est indemnisation. Dans le principe principe , tant qu’une procédure d’indemnisation est dans un cadre amiable, c’est plutôt à un expert en indemnisation et un médecin conseil qu’il faut faire appel et non pas à un avocat. En suivant cette logique, l’avocat choisi pour sa défense doit être expert dans les dommages corporels. Il sera donc dans un rôle d’expert tant que la procédure ne sera pas un contentieux. Il n’est pas très urgent de saisir un avocat de dommage corporel car  l’indemnisation n’aura lieu que lorsque la consolidation de l’état de santé de la victime sera acquise..",
      image: "/img/img2.jpg",
    },
    {
      id: 7,
      title: "Qui est donc le bâtonnier ?",
      description: "  Le Bâtonnier est le chef de l’ordre des avocats, il est élu pour un mandat de deux ans par l&",
      content: "Qui est donc le bâtonnier  Le Bâtonnier est le chef de l’ordre des avocats, il est élu pour un mandat de deux ans par l&#39;Assemblée Générale des Avocats. Le Bâtonnier convoque et préside le Conseil de l&#39;Ordre et l&#39;Assemblée Générale. Il fait exécuter les délibérations de l&#39;Ordre. Le bâtonnier est le porte-parole des avocats. Représentant le barreau dans tous les actes de la vie civile, le bâtonnier est là pour exprimer l&#39;avis d&#39;une profession en prise directe avec l&#39;actualité. Le Bâtonnier commet également les avocats d&#39;office, donne son avis sur les conventions d&#39;honoraires en matière d&#39;aide juridictionnelle partielle. Il intervient d&#39;une façon générale pour régler les difficultés pouvant survenir entre avocats et clients et veille à ce que chaque avocat remplisse les devoirs qui lui incombent. Il peut saisir le Conseil de l&#39;Ordre statuant comme conseil de discipline en vue de poursuites disciplinaires. Le bâtonnier est amené à exercer le rôle de conseil et d&#39;arbitre en traitant les réclamations des clients contre les avocats du Barreau.",
      image: "/img/img3.jpg",
    },
    {
      id: 8,
      title: "L'avocat garde d'enfant ? Quel est son utilité ?",
      description: "  Ici nous parlerons de l’avocat qui s’occupe de la garde des enfants lorsqu’il y’a lieu",
      content: "L'avocat garde d'enfant ? Quel est son utilité ? Ici nous parlerons de l’avocat qui s’occupe de la garde des enfants lorsqu’il y’a lieu de divorce. Dans le cas d’un divorce par  par consentement mutuel, un avocat garde partagée permettra de consigner les désirs des conjoints et de faciliter la procédure de divorce et le passage devant un juge aux affaires familiales. L’avocat garde d’enfant a pour rôle aussi bien que le juge de déterminer quel parti sera le plus avantageux pour l’enfant. L’utilité d’un avocat garde d’enfant est que cela légalisera le nombre de visites autorisées aux différents parents car il est très difficile de voir une famille se diviser et pour cela il faut réguler les visites ou savoir quel est le parent le plus stable, le plus habilité à avoir soit la garde permanente soit la garde alternée des enfants. Plusieurs aspects sont mis en avant, à savoir, les raisons du divorce, les ressentis des enfants, le traitement qu’ils reçoivent des deux parents. Il est important de noter que le recours à un avocat garde d’enfant est obligatoire en cas de divorce conflictuel. Pour les différents types de garde d’enfant, nous avons le schéma le plus répandu qui est : 2 semaines chez un parent, deux semaines chez l’autre. Cependant, il est maintenant remplacé par un schéma 5 semaines/2 semaines, 2 semaines/ 5 semaines, considéré comme moins contraignant pour l’enfant.",
      image: "/img/balance.jpg",
    },
    {
      id: 9,
      title: "L'avocat commis d'office",
      description: "Un avocat commis d&#39;office est un avocat désigné par le bâtonnier de votre juridiction lorsque vous n&#39;en avez pas choisi un précédemment, ou que l&#",
      content: "  Un avocat commis d&#39;office est un avocat désigné par le bâtonnier de votre juridiction lorsque  vous vous n&#39;en avez pas choisi un précédemment, ou que l&#39;urgence ne le permet pas. La commission d&#39;office est une aide précieuse pour obtenir l&#39;assistance d&#39;un avocat compétent pour vous défendre lors de votre convocation devant une juridiction pénale, ou un tribunal pour enfant. L’avocat commis d’office n’est pas gratuit. On peut seulement bénéficier d’une aide juridictionnelle si on n’a pas assez de moyens pour s’en procurer un.  La commission d&#39;office et l&#39;aide juridictionnelle sont donc deux choses bien distinctes. Un avocat commis d&#39;office n&#39;est pas nécessairement un avocat débutant ou qui vous défendra moins bien qu&#39;un autre client de son cabinet. Un avocat ne peut en principe pas refuser la tâche qui lui est confiée, sauf à justifier son impossibilité de l&#39;assumer et à condition que le bâtonnier l’approuve. L’avocat commis d’office n’est pas un « sous-avocat », au même titre que l&#39;avocat choisi par le client, l&#39;avocat commis d&#39;office assiste et représente son client au cours du procès : il a les mêmes attributions et les mêmes compétences, et obéit aux mêmes règles de déontologie de l&#39;avocat. Tous les avocats ont une mission de défense des justiciables. Ils sont donc tous concernés par la commission d&#39;office. De plus, leurs honoraires sont les mêmes que ceux proposés dans leur cabinet, sauf arrangement contraire.  ",
      image: "/img/img5.jpg",
    },
   

  ];

  return (
    <div>
      {/* Bannière */}
      <div
        className="relative py-24 text-center bg-cover bg-center"
        style={{ backgroundImage: `url('/img/bal.jpeg')` }}
      >
        <div className="absolute inset-0 bg-sky-950 opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white">Derniers Articles</h1>
          <p className="text-sm mt-2 text-gray-300">
            <a href="/" className="hover:underline">Blog</a> {" > "} Avocat
          </p>
        </div>
      </div>

      {/* Contenu : Liste ou Détail */}
      <div className="px-8 py-12">
        {selectedArticle ? (
          <ArticleDetail article={selectedArticle} onBack={() => setSelectedArticle(null)} />
        ) : (
          <ArticlesList articles={articles} onSelectArticle={setSelectedArticle} />
        )}
      </div>
    </div>
  );
};

// Composant Détail d'un Article
const ArticleDetail = ({ article, onBack }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
      <img src={article.image} alt={article.title} className="w-full h-60 object-cover rounded-lg" />
      <h2 className="text-2xl font-bold mt-4">{article.title}</h2>
      <p className="text-gray-700 mt-2">{article.content}</p>
      <button
        className="mt-4 bg-[#140051] text-white px-4 py-2 rounded hover:bg-indigo-100"
        onClick={onBack}
      >
        Retour
      </button>
    </div>
  );
};

// Composant Liste d’Articles
const ArticlesList = ({ articles, onSelectArticle }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article) => (
        <div key={article.id} className="bg-white p-4 shadow rounded-lg">
          <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded-lg" />
          <h3 className="text-lg font-bold mt-2">{article.title}</h3>
          <p className="text-gray-600">{article.description}</p>
          <button
            className="bg-[#ddd2fc] mt-2 hover:underline"
            onClick={() => onSelectArticle(article)}
          >
            En savoir plus →
          </button>
        </div>
      ))}
    </div>
  );
};

export default DerniersArticles;
