// ============================================================
// CONTENU DU PORTFOLIO — Guillermo Barboza Clavares
// ============================================================

export const hero = {
  prenom: "Guillermo",
  nom: "Barboza Clavares",
  titre: "Entrepreneur · Futur étudiant ESCP Business School · Master Real Estate",
  pitch:
    "Passionné d'entrepreneuriat depuis toujours, j'ai déjà fondé deux entreprises — Nostalgia Motors, une société d'importation de véhicules exotiques, et Petravio, une agence de prospection B2B pour les acteurs du BTP et de la construction. En parallèle, j'accompagne et co-fonde quatre nouveaux projets, tout en exerçant en freelance comme conseiller pour un cabinet spécialisé en M&A et Executive Search. Je rejoins ESCP Business School pour y préparer un Master en Immobilier, secteur qui me passionne profondément.",
  quote: "Là où les autres voient des étoiles, je vois des constellations.",
  cta: "Découvrir mon parcours",
};

export const about = {
  description:
    "Ambitieux dans l'âme, je suis convaincu que la réussite se construit à l'intersection de la rigueur intellectuelle, de l'audace entrepreneuriale et d'une curiosité insatiable. Bilingue depuis l'enfance et polyglotte, je navigue naturellement dans des environnements multiculturels et complexes. Ce qui me différencie ? Ma capacité à relier les points là où d'autres ne voient que du bruit — à transformer une intuition en stratégie, et une stratégie en action.",
  photo: "/photo.jpg", // → Déposez votre photo ici (renommez-la photo.jpg dans le dossier public/)
  valeurs: [
    {
      titre: "Ambition",
      description:
        "Je ne me fixe pas de plafond. Chaque projet que j'entreprends, je l'aborde avec la conviction qu'il peut devenir quelque chose de grand. L'ambition n'est pas une option pour moi — c'est un mode de vie.",
      emoji: "◆",
    },
    {
      titre: "Logique & Rigueur",
      description:
        "Je pense en systèmes. Avant de décider, j'analyse, je questionne, j'anticipe. Cette pensée logique est le moteur qui alimente mes projets entrepreneuriaux et ma capacité à identifier des opportunités là où d'autres voient des obstacles.",
      emoji: "◆",
    },
    {
      titre: "Leadership & Curiosité",
      description:
        "Diriger, pour moi, c'est avant tout comprendre. Je m'entoure des meilleurs, j'écoute, et je catalyse les talents. Ma curiosité permanente me pousse à explorer des secteurs aussi variés que l'immobilier, la crypto, le conseil ou l'aéronautique.",
      emoji: "◆",
    },
  ],
  langues: [
    { langue: "Français", niveau: "Bilingue", score: 100 },
    { langue: "Espagnol", niveau: "Bilingue", score: 100 },
    { langue: "Anglais", niveau: "Bilingue", score: 100 },
    { langue: "Portugais", niveau: "Intermédiaire (B2)", score: 50 },
  ],
};

export const timeline = [
  {
    periode: "2025 →",
    lieu: "ESCP Business School",
    titre: "Master in Real Estate",
    description:
      "Intégration du Master Immobilier d'ESCP Business School, école classée #1 en Europe. Un choix motivé par ma passion pour ce secteur et ma vision d'y construire des projets à fort impact — notamment à travers Talleyrand Advisory et mes futures initiatives immobilières.",
    type: "formation",
  },
  {
    periode: "2024 — 2025",
    lieu: "TBS Éducation, Toulouse",
    titre: "Bachelor in Management — B3 · Spécialisation Business Development",
    description:
      "Troisième année de Bachelor en Management, avec une spécialisation en Business Development. Lauréat de la Bourse Excellence Major, attribution méritocratique délivrée par Campus France et le gouvernement français, récompensant les meilleurs profils internationaux.",
    type: "formation",
  },
  {
    periode: "2022 — 2024",
    lieu: "France",
    titre: "BTS Commerce International",
    description:
      "Formation en deux ans axée sur les techniques du commerce international, la négociation interculturelle, la logistique et les opérations douanières. Cette formation m'a offert une solide base opérationnelle et m'a ouvert aux réalités du commerce mondial.",
    type: "formation",
  },
  {
    periode: "Août 2023 — Juillet 2026",
    lieu: "Diehl Aerospace, France",
    titre: "Alternant — Repair Coordinator",
    description:
      "Coordinateur de réparations au sein de Diehl Aerospace, leader mondial des systèmes embarqués aéronautiques. Pilotage des flux de réparation, coordination avec les fournisseurs MRO et les équipes internes, suivi des AOG (Aircraft on Ground) et optimisation des délais de remise en service. Une expérience de haute précision dans un environnement industriel exigeant.",
    type: "experience",
  },
  {
    periode: "2023 →",
    lieu: "France & International",
    titre: "Fondateur — Petravio",
    description:
      "Fondation de Petravio, agence B2B de prospection commerciale dédiée aux entreprises du BTP et de la construction. Développement de la stratégie commerciale, constitution de l'équipe, acquisition clients et déploiement des processus de prospection outbound.",
    type: "experience",
  },
  {
    periode: "2022 →",
    lieu: "International",
    titre: "Fondateur — Nostalgia Motors",
    description:
      "Création de Nostalgia Motors, société d'importation de véhicules exotiques et de collection. Sourcing international, gestion des opérations douanières, structuration juridique et développement d'un réseau d'acheteurs premium.",
    type: "experience",
  },
  {
    periode: "2024 →",
    lieu: "Freelance",
    titre: "Conseiller — M&A & Executive Search",
    description:
      "Conseil indépendant pour un cabinet spécialisé en fusions-acquisitions et Executive Search. Analyse de cibles, due diligence préliminaire, identification et qualification de profils dirigeants, et accompagnement stratégique des mandats.",
    type: "experience",
  },
];

export const hardSkills = [
  {
    categorie: "Langues",
    items: [
      { nom: "Français", niveau: 100 },
      { nom: "Espagnol", niveau: 100 },
      { nom: "Anglais", niveau: 100 },
      { nom: "Portugais", niveau: 50 },
    ],
  },
  {
    categorie: "Outils & Technologies",
    items: [
      { nom: "Pack Office (Excel, PowerPoint, Word)", niveau: 90 },
      { nom: "Notion", niveau: 88 },
      { nom: "Claude Code", niveau: 80 },
    ],
  },
  {
    categorie: "Compétences métier",
    items: [
      { nom: "Management & Direction d'entreprise", niveau: 90 },
      { nom: "Développement commercial B2B", niveau: 88 },
      { nom: "M&A & Conseil stratégique", niveau: 78 },
    ],
  },
];

// Test Hester — Top 3 soft skills avec méthode CAR
export const hesterSkills = [
  {
    competence: "Gestion d'équipe",
    icone: "01",
    categorie: "Leadership",
    contexte:
      "Lors de la création de Petravio, j'ai dû recruter et structurer une équipe opérationnelle depuis zéro, avec des profils aux compétences très différentes — développement commercial, marketing, et opérations — dans un contexte de démarrage sans ressources préexistantes.",
    action:
      "J'ai défini les rôles de chacun en m'appuyant sur leurs forces individuelles, mis en place des rituels de synchronisation hebdomadaires, et instauré un système de responsabilisation clair où chaque membre était autonome sur son périmètre tout en restant aligné sur les objectifs collectifs. J'ai également négocié les conditions de chacun pour maintenir la motivation malgré les incertitudes inhérentes à une start-up.",
    resultat:
      "L'équipe a atteint ses premiers objectifs d'acquisition client dans les délais fixés, avec un taux de rétention des membres élevé et une cohésion qui a permis à Petravio de se structurer rapidement en agence opérationnelle.",
  },
  {
    competence: "Développement de soi",
    icone: "02",
    categorie: "Amélioration continue",
    contexte:
      "En lançant Nostalgia Motors, j'ai réalisé que je manquais de connaissances spécifiques sur les réglementations douanières et la valorisation des véhicules exotiques — deux domaines absolument critiques pour la viabilité du modèle.",
    action:
      "J'ai adopté une démarche d'auto-formation intensive : lectures spécialisées, échanges avec des experts du secteur, et mise en pratique progressive sur des dossiers réels. J'ai également identifié mes lacunes en gestion financière d'entreprise et suivi des modules complémentaires pour y remédier. Chaque erreur commise a été analysée et intégrée comme leçon structurante.",
    resultat:
      "En moins de six mois, j'étais en capacité de gérer l'intégralité du processus d'importation de manière autonome, et de conseiller mes clients avec la rigueur attendue d'un spécialiste. Nostalgia Motors a pu réaliser ses premières opérations avec succès.",
  },
  {
    competence: "Pensée logique",
    icone: "03",
    categorie: "Pensée critique",
    contexte:
      "En travaillant comme conseiller freelance pour un cabinet M&A, j'ai été confronté à une situation où deux cibles semblaient équivalentes sur le papier, mais l'une d'elles présentait des signaux faibles que ni le client ni l'équipe n'avaient identifiés.",
    action:
      "J'ai structuré une analyse comparative approfondie en croisant des données financières publiques, des indicateurs sectoriels, et des informations qualitatives récoltées lors d'entretiens exploratoires. J'ai formalisé un scoring multicritères et présenté ma recommandation argumentée au client, en expliquant point par point les incohérences détectées sur la cible a priori préférée.",
    resultat:
      "Le client a suivi ma recommandation et orienté le mandat vers la seconde cible. Six mois plus tard, la première cible a révélé des problèmes comptables significatifs, validant rétrospectivement l'analyse. Le cabinet m'a depuis intégré sur plusieurs mandats en cours.",
  },
];

// Test Freya — valeurs professionnelles
export const freyaResults = [
  {
    dimension: "Missions",
    score: 96,
    description:
      "Ma principale source de motivation. J'ai besoin de projets stimulants qui développent mes compétences, de créativité intellectuelle et de variété. Je m'épanouis dans des environnements qui travaillent sur des innovations — ce qui explique mon attrait pour l'entrepreneuriat et le conseil.",
  },
  {
    dimension: "Conditions",
    score: 88,
    description:
      "L'autonomie est non négociable pour moi. Je performe quand je peux gérer mes priorités librement, sans que ma vie professionnelle empiète sur mon espace personnel. C'est pourquoi l'entrepreneuriat et le freelance me correspondent naturellement.",
  },
  {
    dimension: "Social",
    score: 61,
    description:
      "Je valorise les environnements de travail basés sur la confiance, la coopération et la bienveillance mutuelle. Travailler avec des personnes que je respecte et qui me respectent est un facteur clé de ma performance.",
  },
  {
    dimension: "Notoriété",
    score: 58,
    description:
      "La reconnaissance est un moteur — pas une fin en soi. Je recherche des postes à influence réelle et des organisations où l'excellence est valorisée. ESCP et mes choix de carrière reflètent cette aspiration à l'excellence.",
  },
  {
    dimension: "Sociétal",
    score: 24,
    description:
      "Je suis avant tout pragmatique et orienté résultats. Mon engagement va vers des projets concrets à impact mesurable, plutôt que vers des causes abstraites — même si Cyclyxo, mon projet de crypto mining circulaire, intègre une dimension environnementale réelle.",
  },
];

export const goals = [
  {
    titre: "Petravio — Croissance & Accélération",
    icone: "→",
    description:
      "Accélérer le développement de Petravio en structurant l'offre commerciale, en scalant les opérations de prospection B2B pour le BTP, et en visant une expansion sur de nouveaux marchés européens. L'objectif : faire de Petravio la référence de la prospection commerciale dans la construction.",
  },
  {
    titre: "Cyclyxo — Crypto Mining Circulaire",
    icone: "→",
    description:
      "Co-fondation de Cyclyxo, un projet innovant de crypto mining à modèle circulaire : récupération de chaleur fatale, utilisation d'énergies renouvelables et réinjection dans des réseaux locaux. Un projet à l'intersection de la tech, de l'énergie et de l'économie circulaire.",
  },
  {
    titre: "Talleyrand Advisory — Conseil Généraliste",
    icone: "→",
    description:
      "Construction de Talleyrand Advisory, cabinet de conseil à spectre large opérant sur des missions de stratégie, M&A, organisation et développement commercial. Une structure pensée pour accompagner dirigeants et investisseurs avec rigueur, discrétion et hauteur de vue.",
  },
];

export const contact = {
  email: "g.barbozaclavares@tbs-education.org",
  linkedin: "https://www.linkedin.com/in/guillermo-b-clavares-9a681a1bb/",
  phone: "",
  message:
    "Ouvert aux opportunités de collaboration, de co-fondation et aux échanges stratégiques.",
};
