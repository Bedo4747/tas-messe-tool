export type EventItem = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: { start: string; end: string };
  location: { hall: string | null; area: string | null; booth: string | null };
  organizer?: { name: string | null };
  summary?: string;
  tags?: string[];
};

export const EVENTS_DB: EventItem[] = [
  {
    id: "keynote-industrial-ai-0909",
    title: "Keynote: Industrial AI – Von PoC zu Scale",
    date: "2025-09-09",
    time: { start: "10:00", end: "10:45" },
    location: { hall: "Halle A2", area: "Forum", booth: null },
    organizer: { name: "Messeforum A2" },
    summary: "Praxisleitfaden für skalierbare KI in Produktion & Supply Chain.",
    tags: ["ai", "manufacturing", "operations"],
  },
  {
    id: "panel-supply-chain-automation-0910",
    title: "Panel: Automatisierte Supply Chain – Transparenz bis Tier‑n",
    date: "2025-09-10",
    time: { start: "14:00", end: "14:45" },
    location: { hall: "Halle B1", area: "Bühne 2", booth: null },
    organizer: { name: "SCM Alliance" },
    summary: "Use Cases zu End‑to‑End Transparenz, Supplier Risk & ESG‑Compliance.",
    tags: ["supplychain", "logistics", "visibility", "esg"],
  },
  {
    id: "workshop-process-optimization-0911",
    title: "Workshop: Lean & Prozessoptimierung am Shopfloor",
    date: "2025-09-11",
    time: { start: "13:00", end: "15:00" },
    location: { hall: "Open Space", area: "Königsplatz Zelt 3", booth: null },
    organizer: { name: "Lean Network" },
    summary: "Hands‑on Methoden für schnelle Effizienzgewinne (OEE, Durchsatz).",
    tags: ["lean", "shopfloor", "oee", "consulting"],
  },
  {
    id: 'from-blueprint-to-reality-disrupting-after-sales-vehicle-quality-with-ai',
    title: 'From Blueprint to Reality: Disrupting After-Sales Vehicle Quality with AI',
    date: '2025-09-09',
    time: { start: '10:30', end: '10:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über den Einsatz von KI zur Verbesserung der Fahrzeugqualität im After-Sales-Bereich.'
    },
    {
    id: 'driving-the-digital-future-bmws-connected-vehicle-vision-powered-by-aws',
    title: "Driving the Digital Future: BMW's Connected Vehicle Vision powered by AWS",
    date: '2025-09-09',
    time: { start: '11:00', end: '11:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'Dalila Delimedjac' },
    summary: 'Vorstellung von BMWs Connected-Vehicle-Strategie, unterstützt durch AWS.'
    },
    {
    id: 'expertenrunde-projektvorstellung-aufbau-der-schnellladeinfrastruktur-an-den-autobahnen',
    title: 'Expertenrunde & Projektvorstellung – Aufbau der Schnellladeinfrastruktur an den Autobahnen',
    date: '2025-09-09',
    time: { start: '11:00', end: '11:30' },
    location: { hall: 'Halle A2', area: null, booth: 'D11' },
    organizer: { name: 'Autobahn GmbH' },
    summary: 'Expertenrunde zur Planung und Umsetzung der Schnellladeinfrastruktur entlang der Autobahnen.'
    },
    {
    id: 'transforming-service-departments-with-ai-the-future-is-now',
    title: 'Transforming Service Departments with AI: The Future Is Now',
    date: '2025-09-09',
    time: { start: '11:00', end: '12:00' },
    location: { hall: 'Halle B3', area: null, booth: 'D120' },
    organizer: { name: 'Denise Chudy' },
    summary: 'Vortrag über die Transformation von Serviceabteilungen durch den Einsatz von KI.'
    },
    {
    id: 'scaling-automotive-safety-with-open-source-software-and-hpc-for-next-generation-sdvs',
    title: 'Scaling Automotive Safety with Open-Source Software and HPC for Next Generation SDVs',
    date: '2025-09-09',
    time: { start: '11:30', end: '11:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über Sicherheit in Software Defined Vehicles durch Open-Source-Software und HPC.'
    },
    {
    id: 'autobahn-os-quiz',
    title: 'Autobahn OS Quiz',
    date: '2025-09-09',
    time: { start: '11:50', end: '12:00' },
    location: { hall: 'Halle A2', area: null, booth: 'D11' },
    organizer: { name: 'Autobahn GmbH' },
    summary: 'Quiz zum Thema Autobahn OS.'
    },
    {
    id: 'startup-pitching-session',
    title: 'Startup Pitching Session',
    date: '2025-09-09',
    time: { start: '12:00', end: '13:00' },
    location: { hall: 'Halle B2', area: null, booth: 'D107' },
    organizer: { name: 'prototype.club' },
    summary: 'Pitching-Session für Startups im Bereich Mobilität und Technologie.'
    },
    {
    id: 'lunch-learn-automatisiertes-und-vernetztes-fahren-die-rolle-der-autobahn-gmbh-des-bundes',
    title: 'Lunch & Learn – Automatisiertes und vernetztes Fahren – die Rolle der Autobahn GmbH des Bundes',
    date: '2025-09-09',
    time: { start: '12:30', end: '12:50' },
    location: { hall: 'Halle A2', area: null, booth: 'D11' },
    organizer: { name: 'Autobahn GmbH' },
    summary: 'Lunch & Learn zu automatisiertem und vernetztem Fahren mit Fokus auf die Rolle der Autobahn GmbH des Bundes.'
    },
    {
    id: 'from-promise-to-performance-closing-the-value-void-in-automotive-with-it-driven-productivity',
    title: 'From Promise to Performance: Closing the Value Void in Automotive with IT-Driven Productivity',
    date: '2025-09-09',
    time: { start: '13:00', end: '13:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über die Schließung von Wertlücken in der Automobilbranche durch IT-gestützte Produktivität.'
    },
    {
    id: 'iaa-networking-tours-mobility-in-transition-from-automotive-to-micromobility',
    title: 'IAA Networking Tours: Mobility in Transition: from Automotive to Micromobility',
    date: '2025-09-09',
    time: { start: '13:00', end: '14:30' },
    location: { hall: 'Halle B3', area: 'Networking Area', booth: 'B11' },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Eine Networking-Tour zur Transformation der Mobilität vom Automobil hin zur Mikromobilität.'
    },
    {
    id: 'digital-customer-experience-insights-from-the-latest-global-car-launches',
    title: 'Digital Customer Experience Insights from the Latest Global Car Launches',
    date: '2025-09-09',
    time: { start: '13:30', end: '13:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über Einblicke in die digitale Kundenerfahrung bei aktuellen globalen Fahrzeuginführungen.'
    },
    {
    id: 'mobility-meetings',
    title: 'Mobility Meetings',
    date: '2025-09-09',
    time: { start: '13:30', end: '14:30' },
    location: { hall: 'Halle B3', area: 'Networking Area', booth: 'B11' },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Treffen zum Austausch über aktuelle Themen der Mobilität in der Networking Area.'
    },
    {
    id: 'unlocking-the-content-supply-chain-with-adobe-and-aws',
    title: 'Unlocking the Content Supply Chain with Adobe and AWS',
    date: '2025-09-09',
    time: { start: '14:00', end: '14:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über die Optimierung der Content Supply Chain durch Adobe und AWS.'
    },
    {
    id: 'startup-factory-masterclass',
    title: 'Startup Factory Masterclass',
    date: '2025-09-09',
    time: { start: '14:00', end: '16:00' },
    location: { hall: 'Halle B2', area: null, booth: 'D107' },
    organizer: { name: 'Sophia Bense' },
    summary: 'Masterclass der Startup Factory mit Fokus auf Innovations- und Unternehmensentwicklung.'
    },
    {
    id: 'leveraging-your-internal-innovation-investments-with-corporate-spin-offs',
    title: 'Leveraging your internal innovation investments with Corporate Spin-Offs',
    date: '2025-09-09',
    time: { start: '14:15', end: '15:15' },
    location: { hall: 'Halle B2', area: null, booth: 'D107' },
    organizer: { name: 'prototype.club' },
    summary: 'Vortrag über die Nutzung interner Innovationsinvestitionen durch Corporate Spin-Offs.'
    },
    {
    id: 'data-copilot-access-vehicle-configuration-data-with-natural-language',
    title: 'Data Copilot: Access Vehicle Configuration Data with Natural Language',
    date: '2025-09-09',
    time: { start: '14:30', end: '14:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über den Zugriff auf Fahrzeugkonfigurationsdaten mit natürlicher Sprache durch Data Copilot.'
    },
    {
    id: 'from-pitch-to-production-can-startups-survive-the-automotive-journey',
    title: 'From Pitch to Production: Can Startups survive the Automotive journey?',
    date: '2025-09-09',
    time: { start: '14:30', end: '14:45' },
    location: { hall: 'Halle B2', area: null, booth: 'D107' },
    organizer: { name: 'prototype.club' },
    summary: 'Vortrag über die Herausforderungen von Startups auf dem Weg durch die Automobilbranche.'
    },
    {
    id: 'projektvorstellung-aufbau-der-schnellladeinfrastruktur-an-den-autobahnen',
    title: 'Projektvorstellung – Aufbau der Schnellladeinfrastruktur an den Autobahnen',
    date: '2025-09-09',
    time: { start: '14:30', end: '14:50' },
    location: { hall: 'Halle A2', area: null, booth: 'D11' },
    organizer: { name: 'Autobahn GmbH' },
    summary: 'Projektvorstellung zum Aufbau der Schnellladeinfrastruktur entlang der Autobahnen.'
    },
    {
    id: 'drone-innovation-how-mercedes-benz-automates-inventory-in-logistics',
    title: 'Drone Innovation: How Mercedes-Benz Automates Inventory in Logistics',
    date: '2025-09-09',
    time: { start: '15:00', end: '15:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über den Einsatz von Drohnen zur Bestandsautomatisierung in der Logistik bei Mercedes-Benz.'
    },
    {
    id: 'how-porsche-leverages-internal-teams-and-external-partners-to-innovate-in-ai',
    title: 'How Porsche Leverages Internal Teams and External Partners to Innovate in AI',
    date: '2025-09-09',
    time: { start: '15:00', end: '16:00' },
    location: { hall: 'Halle B3', area: null, booth: 'D120' },
    organizer: { name: null },
    summary: 'Vortrag über Porsches Zusammenarbeit mit internen Teams und externen Partnern zur Innovation im Bereich KI.'
    },
    {
    id: 'transforming-service-departments-with-ai-the-future-is-now',
    title: 'Transforming Service Departments with AI: The Future Is Now',
    date: '2025-09-09',
    time: { start: '15:00', end: '16:00' },
    location: { hall: 'Halle B3', area: null, booth: 'D120' },
    organizer: { name: null },
    summary: 'Vortrag über die Transformation von Serviceabteilungen durch den Einsatz von KI.'
    },
    {
    id: 'iaa-networking-tours-inventive-power-of-technology-driven-ecosystems',
    title: 'IAA Networking Tours: Inventive power of technology-driven ecosystems',
    date: '2025-09-09',
    time: { start: '15:00', end: '16:30' },
    location: { hall: 'Halle B3', area: 'Networking Area', booth: 'B11' },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Networking-Tour zu technologiegetriebenen Ökosystemen und deren Innovationskraft.'
    },
    {
    id: 'digital-key-management-for-automotive-oems',
    title: 'Digital Key Management for Automotive OEMs',
    date: '2025-09-09',
    time: { start: '15:30', end: '15:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über digitales Schlüsselmanagement für Automobilhersteller.'
    },
    {
    id: 'transforming-automotive-aftermarket-with-generative-ai',
    title: 'Transforming Automotive Aftermarket with Generative AI',
    date: '2025-09-09',
    time: { start: '16:00', end: '16:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über den Einsatz von Generativer KI zur Transformation des Automotive Aftermarkets.'
    },
    {
    id: 'austrian-opening-drinks-snacks-powered-by-wko-arge-osterreichische-automotive-zulieferindustrie',
    title: 'Austrian Opening - Drinks & Snacks powered by WKÖ ARGE Österreichische Automotive Zulieferindustrie',
    date: '2025-09-09',
    time: { start: '16:00', end: '18:00' },
    location: { hall: 'Halle B3', area: null, booth: 'E10' },
    organizer: { name: 'Beatriz Schönstein-Wippel' },
    summary: 'Austrian Opening mit Drinks und Snacks, präsentiert von der österreichischen Automotive Zulieferindustrie.'
    },
    {
    id: 'autonomous-driving-solutions-practice-center-ad-insight-hub',
    title: 'Autonomous Driving Solutions Practice Center: AD Insight Hub',
    date: '2025-09-09',
    time: { start: '16:30', end: '16:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über das AD Insight Hub als Praxiszentrum für autonome Fahrtechnologien.'
    },
    {
    id: 'valeo-and-aws-sdv-and-adas-partnership-to-transform-automotive',
    title: "Valeo and AWS' SDV and ADAS Partnership to Transform Automotive",
    date: '2025-09-09',
    time: { start: '17:00', end: '17:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über die Partnerschaft von Valeo und AWS zur Transformation der Automobilbranche im Bereich SDV und ADAS.'
    },
    {
    id: 'how-here-and-aws-are-enabling-smarter-scalable-sdv-development',
    title: 'How HERE and AWS are Enabling Smarter, Scalable SDV Development',
    date: '2025-09-09',
    time: { start: '17:30', end: '17:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über die Zusammenarbeit von HERE und AWS zur Entwicklung intelligenter und skalierbarer SDV-Lösungen.'
    },
    
    {
    id: 'smart-art-shop',
    title: 'smart Art Shop',
    date: '2025-09-09',
    time: { start: '11:00', end: '17:00' },
    location: { hall: null, area: 'Odeonsplatz Family Trail Station 2', booth: null },
    organizer: { name: 'smart europe GmbH' },
    summary: 'Mitmachshop für Familien im Rahmen des Family Trails am Odeonsplatz.'
    },
    {
    id: 'welcome-kids',
    title: 'Welcome Kids',
    date: '2025-09-09',
    time: { start: '11:00', end: '17:00' },
    location: { hall: null, area: 'Residenz Apothekenhof Family Trail Station 8', booth: null },
    organizer: { name: 'Mercedes-Benz' },
    summary: 'Familienprogramm für Kinder im Residenz Apothekenhof im Rahmen des Family Trails.'
    },
    {
    id: 'adac-kids',
    title: 'ADAC Kids',
    date: '2025-09-09',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Königsplatz Family Trail Station 11', booth: null },
    organizer: { name: 'ADAC' },
    summary: 'Kinderprogramm des ADAC auf dem Königsplatz im Rahmen des Family Trails.'
    },
    {
    id: 'erlebniswelt-oepnv',
    title: 'Erlebniswelt ÖPNV',
    date: '2025-09-09',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Königsplatz Family Trail Station 12', booth: null },
    organizer: { name: 'ZUKUNFT NAHVERKEHR' },
    summary: 'Interaktive Erlebniswelt zum öffentlichen Nahverkehr auf dem Family Trail am Königsplatz.'
    },
    {
    id: 'zeitreise-der-mobilitaet-zum-anfassen-und-mitmachen',
    title: 'Zeitreise der Mobilität – zum Anfassen und Mitmachen!',
    date: '2025-09-09',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Ludwigstraße Family Trail Station 6', booth: null },
    organizer: { name: 'Bayern Innovativ GmbH' },
    summary: 'Interaktive Ausstellung zur Geschichte der Mobilität zum Mitmachen in der Ludwigstraße.'
    },
    {
    id: 'proactive-pairs-paare-finden-mit-bmw-proactive-care-stempel-sichern-preise-gewinnen',
    title: 'Proactive Pairs: Paare finden mit BMW Proactive Care, Stempel sichern & Preise gewinnen!',
    date: '2025-09-09',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Max-Joseph-Platz Family Trail Station 9', booth: null },
    organizer: { name: 'BMW AG' },
    summary: 'Mitmachspiel für Familien mit BMW Proactive Care am Max-Joseph-Platz.'
    },
    {
    id: 'volkswagen-entdecker-rallye',
    title: 'Volkswagen Entdecker-Rallye',
    date: '2025-09-09',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Odeonsplatz Family Trail Station 1', booth: null },
    organizer: { name: 'Volkswagen AG' },
    summary: 'Familienfreundliche Entdecker-Rallye von Volkswagen am Odeonsplatz.'
    },
    {
    id: 'new-mobility-explorers',
    title: 'New Mobility Explorers',
    date: '2025-09-09',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Odeonsplatz Family Trail Station 3', booth: null },
    organizer: { name: 'Riese & Müller' },
    summary: 'Interaktive Aktivitäten für Familien zu neuer Mobilität am Odeonsplatz.'
    },
    {
    id: 'vorsprung-durch-koepfchen-die-audi-kids-activities',
    title: 'Vorsprung durch Köpfchen – die Audi Kids Activities',
    date: '2025-09-09',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Wittelsbacherplatz Family Trail Station 4', booth: null },
    organizer: { name: 'Audi AG' },
    summary: 'Kinderprogramm von Audi unter dem Motto „Vorsprung durch Köpfchen“ am Wittelsbacherplatz.'
    },
    {
    id: 'little-explorer-das-porsche-quiz',
    title: 'Little Explorer - das Porsche Quiz',
    date: '2025-09-09',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Wittelsbacherplatz Family Trail Station 5', booth: null },
    organizer: { name: 'Porsche AG' },
    summary: 'Kinderquiz von Porsche im Rahmen des Family Trails am Wittelsbacherplatz.'
    },
    
    {
    id: 'rollen-fliegen-schwimmen-kinder-gestalten-fahrzeuge-der-zukunft',
    title: 'Rollen, fliegen, schwimmen? - Kinder gestalten Fahrzeuge der Zukunft',
    date: '2025-09-09',
    time: { start: '12:00', end: '14:00' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Family Trail Station 10', booth: null },
    organizer: { name: null },
    summary: 'Workshop für Kinder zum kreativen Gestalten von Fahrzeugen der Zukunft.'
    },
    {
    id: 'mit-sicherheit-selbststaendig-was-eltern-staedte-schulen-tun-koennen-um-die-mobilitaet-von-kindern-sicher-und-kindgerecht-zu-gestalten',
    title: 'Mit Sicherheit selbstständig: Was Eltern, Städte & Schulen tun können, um die Mobilität von Kindern sicher und kindgerecht zu gestalten',
    date: '2025-09-09',
    time: { start: '12:10', end: '12:45' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: null },
    summary: 'Diskussion zur sicheren und kindgerechten Gestaltung der Mobilität von Kindern durch Eltern, Städte und Schulen.'
    },
    {
    id: '1-2-oder-3-teste-dein-wissen-zu-verkehrssicherheit-und-regeln',
    title: '1, 2 oder 3? Teste dein Wissen zu Verkehrssicherheit und -regeln',
    date: '2025-09-09',
    time: { start: '13:00', end: '13:30' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: null },
    summary: 'Interaktive Wissensrunde für Kinder zu Verkehrssicherheit und Verkehrsregeln.'
    },
    {
    id: 'weniger-angst-mehr-zukunft-drei-mythen-ueber-nachhaltigkeit-und-wie-wir-sie-ueberwinden',
    title: 'Weniger Angst, mehr Zukunft: Drei Mythen über Nachhaltigkeit und wie wir sie überwinden',
    date: '2025-09-09',
    time: { start: '14:00', end: '14:30' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: null },
    summary: 'Vortrag zu gängigen Mythen über Nachhaltigkeit und wie diese überwunden werden können.'
    },
    {
    id: 'inklusionsrundgang-die-stadt-aus-einer-neuen-perspektive-erleben-unterwegs-mit-sehbehinderung',
    title: 'Inklusionsrundgang: Die Stadt aus einer neuen Perspektive erleben – Unterwegs mit Sehbehinderung',
    date: '2025-09-09',
    time: { start: '14:15', end: '15:30' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: null },
    summary: 'Stadtrundgang mit Fokus auf Barrierefreiheit aus der Perspektive von Menschen mit Sehbehinderung.'
    },
    {
    id: 'soundcheck-mobilitaet-erkennst-du-das-geraeusch',
    title: 'Soundcheck Mobilität – Erkennst du das Geräusch?',
    date: '2025-09-09',
    time: { start: '14:30', end: '14:40' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: 'Radio Gong 96.3' },
    summary: 'Interaktives Geräuscheraten rund um das Thema Mobilität.'
    },
    {
    id: 'nachhaltige-mobilitaet-welche-innovationen-bringen-uns-wirklich-voran',
    title: 'Nachhaltige Mobilität - Welche Innovationen bringen uns wirklich voran?',
    date: '2025-09-09',
    time: { start: '14:45', end: '15:15' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: null },
    summary: 'Vortrag zu nachhaltigen Mobilitätsinnovationen und deren tatsächlichem Nutzen.'
    },
    {
    id: 'powerplay-mit-dem-coach-oliver-david-vom-ehc-red-bull-im-interview',
    title: 'Powerplay mit dem Coach – Oliver David vom EHC Red Bull im Interview',
    date: '2025-09-09',
    time: { start: '15:00', end: '15:30' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: 'Radio Gong 96.3' },
    summary: 'Interview mit Oliver David, Coach des EHC Red Bull, auf der Siegestor Bühne.'
    },
    {
    id: 'wandel-auf-hochtouren-wie-viel-zukunft-steckt-in-unserer-autoindustrie',
    title: 'Wandel auf Hochtouren: Wie viel Zukunft steckt in unserer Autoindustrie?',
    date: '2025-09-09',
    time: { start: '15:30', end: '16:15' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: null },
    summary: 'Podiumsdiskussion über die Zukunft der Autoindustrie und aktuelle Herausforderungen.'
    },
    {
    id: 'gemeinsam-richtung-zukunft-eroeffnung-der-zukunft-nahverkehr-auf-der-iaa',
    title: 'Gemeinsam Richtung Zukunft - Eröffnung der ZUKUNFT NAHVERKEHR auf der IAA',
    date: '2025-09-09',
    time: { start: '16:00', end: '16:15' },
    location: { hall: null, area: 'Königsplatz ZNV Bühne', booth: null },
    organizer: { name: null },
    summary: 'Eröffnungsveranstaltung der ZUKUNFT NAHVERKEHR auf der IAA.'
    },
    
    {
    id: 'mobilitaet-geht-nur-gemeinsam-db-und-vda-im-gespraech',
    title: 'Mobilität geht nur gemeinsam - DB und VDA im Gespräch',
    date: '2025-09-09',
    time: { start: '16:15', end: '16:45' },
    location: { hall: null, area: 'Königsplatz ZNV Bühne', booth: null },
    organizer: { name: null },
    summary: 'Gesprächsrunde von DB und VDA zur gemeinsamen Gestaltung der Mobilität.'
    },
    {
    id: 'mobilitaet-neu-denken-muenchen-wird-modellregion-der-zukunft',
    title: 'Mobilität neu denken: München wird Modellregion der Zukunft',
    date: '2025-09-09',
    time: { start: '16:30', end: '17:00' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: null },
    summary: 'Diskussion über München als Modellregion für die Mobilität der Zukunft.'
    },
    {
    id: 'stell-dir-vor-die-zukunft-passiert-und-niemand-sieht-hin',
    title: 'Stell dir vor, die Zukunft passiert – und niemand sieht hin.',
    date: '2025-09-09',
    time: { start: '17:00', end: '17:20' },
    location: { hall: null, area: 'Königsplatz ZNV Bühne', booth: null },
    organizer: { name: null },
    summary: 'Vortrag über zukünftige Entwicklungen und deren Wahrnehmung in der Gesellschaft.'
    },
    {
    id: 'schmerzis',
    title: 'Schmerzis',
    date: '2025-09-09',
    time: { start: '17:15', end: '18:00' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: null },
    summary: 'Auftritt des Künstlers Schmerzis auf der Siegestor Bühne.'
    },
    {
    id: 'autonome-fahrzeuge-auf-dem-pruefstand-schaffen-autonome-fahrzeuge-den-fuehrerschein',
    title: 'Autonome Fahrzeuge auf dem Prüfstand: Schaffen autonome Fahrzeuge den Führerschein?',
    date: '2025-09-09',
    time: { start: '17:15', end: '18:00' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: 'MCube' },
    summary: 'Podiumsdiskussion über die Fähigkeiten autonomer Fahrzeuge im Vergleich zur Führerscheinprüfung.'
    },
    {
    id: 'schnellere-mobilitaetswende-durch-reallabore-fuer-integrierte-mobilitaet',
    title: 'Schnellere Mobilitätswende durch Reallabore für integrierte Mobilität?',
    date: '2025-09-09',
    time: { start: '17:30', end: '17:50' },
    location: { hall: null, area: 'Königsplatz ZNV Bühne', booth: null },
    organizer: { name: null },
    summary: 'Vortrag zu Reallaboren als Instrument zur Beschleunigung der Mobilitätswende.'
    },
    {
    id: 'mobilitaetsverhalten-nachhaltig-veraendern-mit-hilfe-von-kommunikation',
    title: 'Mobilitätsverhalten nachhaltig verändern – mit Hilfe von Kommunikation',
    date: '2025-09-09',
    time: { start: '18:00', end: '18:25' },
    location: { hall: null, area: 'Königsplatz ZNV Bühne', booth: null },
    organizer: { name: null },
    summary: 'Vortrag über die Rolle von Kommunikation bei der nachhaltigen Veränderung des Mobilitätsverhaltens.'
    },
    {
    id: 'nahverkehr-zwischen-deutschlandticket-nulltarif-und-realitaet-wer-zahlt-wer-profitiert-was-funktioniert',
    title: 'Nahverkehr zwischen Deutschlandticket, Nulltarif & Realität: Wer zahlt, wer profitiert, was funktioniert?',
    date: '2025-09-09',
    time: { start: '18:15', end: '19:00' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: null },
    summary: 'Diskussion über Finanzierung, Nutzen und Umsetzbarkeit von Deutschlandticket und Nulltarif im Nahverkehr.'
    },
    {
    id: 'mobilitaetsreport-2025-wie-vernetzt-ist-deutschland-wirklich',
    title: 'Mobilitätsreport 2025: Wie vernetzt ist Deutschland wirklich?',
    date: '2025-09-09',
    time: { start: '18:30', end: '18:55' },
    location: { hall: null, area: 'Königsplatz ZNV Bühne', booth: null },
    organizer: { name: null },
    summary: 'Vorstellung des Mobilitätsreports 2025 zur tatsächlichen Vernetzung in Deutschland.'
    },
    
    {
    id: 'kaled',
    title: 'Kaled',
    date: '2025-09-09',
    time: { start: '18:40', end: '19:20' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: null },
    summary: 'Musikauftritt des Künstlers Kaled auf der Siegestor Bühne.'
    },
    {
    id: 'take-the-biggest-small-step-learn-how-to-get-started-with-the-verkehrswende',
    title: 'Take the biggest small step - Learn how to get started with the "Verkehrswende"',
    date: '2025-09-09',
    time: { start: '19:00', end: '19:30' },
    location: { hall: null, area: 'Königsplatz ZNV Bühne', booth: null },
    organizer: { name: null },
    summary: 'Vortrag über erste Schritte zur Umsetzung der Verkehrswende von Prof. Dr. Marco te Brömmelstroet.'
    },
    {
    id: 'thaler',
    title: 'Thaler',
    date: '2025-09-09',
    time: { start: '20:00', end: '21:00' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: null },
    summary: 'Musikauftritt der Band Thaler auf der Siegestor Bühne.'
    },
    
    {
    id: 'bsi-im-dialog-cybersicherheit-von-fahrzeugdaten-chancen-und-herausforderungen',
    title: 'BSI im Dialog: Cybersicherheit von Fahrzeugdaten - Chancen und Herausforderungen',
    date: '2025-09-10',
    time: { start: '09:00', end: '13:00' },
    location: { hall: null, area: 'ICM Room 12', booth: null },
    organizer: { name: 'Bundesamt für Sicherheit in der Informationstechnik (BSI)' },
    summary: 'Dialogveranstaltung des BSI zu Chancen und Herausforderungen der Cybersicherheit von Fahrzeugdaten.'
    },
    {
    id: 'electronica-automotive-conference-2025',
    title: 'electronica Automotive Conference 2025',
    date: '2025-09-10',
    time: { start: '09:00', end: '18:00' },
    location: { hall: null, area: 'ICM Room 03 & Room 04', booth: null },
    organizer: { name: 'electronica' },
    summary: 'Fachkonferenz zu Zukunftstechnologien, Kreislaufwirtschaft und Batterietechnologien in der Automobilbranche.'
    },
    {
    id: 'energie-trifft-zukunft-die-e-on-new-energy-experience-2025-auf-der-iaa-mobility',
    title: 'Energie trifft Zukunft: Die E.ON New Energy Experience 2025 auf der IAA MOBILITY',
    date: '2025-09-10',
    time: { start: '09:00', end: '21:00' },
    location: { hall: null, area: 'ICM', booth: null },
    organizer: { name: 'E.ON' },
    summary: 'Präsentation der E.ON New Energy Experience 2025 mit Fokus auf Lade- und Energieinfrastruktur.'
    },
    {
    id: 'iaa-networking-tours-connected-intelligent-software-driven-technologies-for-the-future-of-mobility',
    title: 'IAA Networking Tours: Connected, intelligent, software-driven: Technologies for the future of mobility',
    date: '2025-09-10',
    time: { start: '09:45', end: '11:15' },
    location: { hall: 'Halle B3', area: 'Networking Area', booth: 'B11' },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Networking-Tour zu vernetzten, intelligenten und softwarebasierten Technologien für die Zukunft der Mobilität.'
    },
    {
    id: 'accelerate-innovation-in-automotive-with-virtual-sdv-composer-and-ai-assist',
    title: 'Accelerate Innovation in Automotive with Virtual SDV Composer and AI Assist',
    date: '2025-09-10',
    time: { start: '10:00', end: '10:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag zur Nutzung von Virtual SDV Composer und KI-Assistenz zur Innovationsbeschleunigung im Automobilbereich.'
    },
    {
    id: 'mobility-meetings',
    title: 'Mobility Meetings',
    date: '2025-09-10',
    time: { start: '10:00', end: '11:00' },
    location: { hall: 'Halle B3', area: 'Networking Area', booth: 'B11' },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Networking-Treffen rund um Mobilitätsthemen auf der IAA.'
    },
    {
    id: 'bayerisches-fruehstueck-auf-der-iaa-mobility-2025-am-gemeinschaftsstand-des-clusters-mobility-logistics',
    title: 'Bayerisches Frühstück auf der IAA MOBILITY 2025 am Gemeinschaftsstand des Clusters Mobility & Logistics',
    date: '2025-09-10',
    time: { start: '10:00', end: '13:00' },
    location: { hall: 'Halle B2', area: null, booth: 'E11' },
    organizer: { name: 'Cluster Mobility & Logistics' },
    summary: 'Netzwerkfrühstück des Clusters Mobility & Logistics am Gemeinschaftsstand auf der IAA.'
    },
    {
    id: 'vda-ikb-branchenforum-globale-neuaufstellung-der-wertschoepfungsketten-strategien-der-automobil-zuliefererindustrie',
    title: 'VDA / IKB Branchenforum: Globale Neuaufstellung der Wertschöpfungsketten: Strategien der Automobil-Zuliefererindustrie',
    date: '2025-09-10',
    time: { start: '10:00', end: '13:00' },
    location: { hall: null, area: 'ICM Room 21', booth: null },
    organizer: { name: 'IKB Deutsche Industriebank AG' },
    summary: 'Branchenforum von VDA und IKB zur globalen Neuaufstellung von Wertschöpfungsketten in der Automobilzulieferindustrie.'
    },
    {
    id: 'automotive-omnichannel-powered-by-gen-ai',
    title: 'Automotive Omnichannel Powered by Gen AI',
    date: '2025-09-10',
    time: { start: '10:30', end: '10:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Präsentation zum Einsatz von generativer KI für Omnichannel-Lösungen in der Automobilindustrie.'
    },
    {
    id: 'accelerating-legacy-transformation-using-aws-and-gen-ai',
    title: 'Accelerating Legacy Transformation Using AWS and Gen AI',
    date: '2025-09-10',
    time: { start: '11:00', end: '11:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag zur Beschleunigung der Transformation bestehender Systeme mit AWS und generativer KI.'
    },
    
    {
    id: 'expertenrunde-was-ist-c-its-in-kooperation-mit-dem-adac-und-der-polizei-hessen',
    title: 'Expertenrunde - Was ist C-ITS? (in Kooperation mit dem ADAC und der Polizei Hessen)',
    date: '2025-09-10',
    time: { start: '11:00', end: '11:30' },
    location: { hall: 'Halle A2', area: null, booth: 'D11' },
    organizer: { name: 'Autobahn GmbH' },
    summary: 'Expertenrunde zu C-ITS in Zusammenarbeit mit ADAC und Polizei Hessen.'
    },
    {
    id: 'transforming-service-departments-with-ai-the-future-is-now',
    title: 'Transforming Service Departments with AI: The Future Is Now',
    date: '2025-09-10',
    time: { start: '11:00', end: '12:00' },
    location: { hall: 'Halle B3', area: null, booth: 'D120' },
    organizer: { name: null },
    summary: 'Vortrag über den Einsatz von KI zur Transformation von Serviceabteilungen.'
    },
    {
    id: 'iaa-africa-day-2025',
    title: 'IAA Africa Day 2025',
    date: '2025-09-10',
    time: { start: '11:00', end: '14:30' },
    location: { hall: null, area: 'ICM Room 11', booth: null },
    organizer: { name: 'Verband der Automobilindustrie' },
    summary: 'Fachtag zur Rolle Afrikas in der Automobilindustrie im Rahmen der IAA.'
    },
    {
    id: 'regiosignale-2025',
    title: 'regiosignale 2025',
    date: '2025-09-10',
    time: { start: '11:00', end: '16:00' },
    location: { hall: null, area: 'ICM Room 13', booth: null },
    organizer: { name: 'ZUKUNFT NAHVERKEHR' },
    summary: 'Veranstaltung zu regionalen Mobilitätssignalen mit Fokus auf den öffentlichen Verkehr.'
    },
    {
    id: 'supercharging-adas-validation-speed-and-safety-through-the-cloud',
    title: 'Supercharging ADAS Validation: Speed and Safety Through the Cloud',
    date: '2025-09-10',
    time: { start: '11:30', end: '11:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag zur Validierung von ADAS mit Cloud-Technologien für mehr Geschwindigkeit und Sicherheit.'
    },
    {
    id: 'startup-pitching-session',
    title: 'Startup Pitching Session',
    date: '2025-09-10',
    time: { start: '12:00', end: '13:00' },
    location: { hall: 'Halle B2', area: null, booth: 'D107' },
    organizer: { name: 'prototype.club' },
    summary: 'Pitching-Session für Startups zur Präsentation ihrer Innovationen.'
    },
    {
    id: 'projektvorstellung-empower-induktives-laden-auf-der-a6',
    title: 'Projektvorstellung E|MPower – Induktives Laden auf der A6',
    date: '2025-09-10',
    time: { start: '12:30', end: '13:00' },
    location: { hall: 'Halle A2', area: null, booth: 'D11' },
    organizer: { name: 'Autobahn GmbH' },
    summary: 'Vorstellung des Projekts E|MPower zum induktiven Laden von Fahrzeugen auf der A6.'
    },
    {
    id: 'data-driven-innovations-in-autonomous-vehicles',
    title: 'Data-Driven Innovations in Autonomous Vehicles',
    date: '2025-09-10',
    time: { start: '13:00', end: '13:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über datengetriebene Innovationen im Bereich autonomer Fahrzeuge.'
    },
    {
    id: 'truck-parking-forecast',
    title: 'Truck Parking Forecast',
    date: '2025-09-10',
    time: { start: '13:00', end: '13:30' },
    location: { hall: 'Halle B2', area: null, booth: 'D107' },
    organizer: { name: 'prototype.club' },
    summary: 'Vorstellung eines Projekts zur Vorhersage von Lkw-Parkplätzen durch DLR und Toll Collect.'
    },
    {
    id: 'hyper-personalised-experiences-in-the-era-of-intelligent-mobility',
    title: 'Hyper-Personalised Experiences in the Era of Intelligent Mobility',
    date: '2025-09-10',
    time: { start: '13:30', end: '13:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über hyper-personalisierte Nutzererfahrungen in der intelligenten Mobilität.'
    },
    
    {
    id: 'iaa-networking-tours-mobility-in-transition-from-automotive-to-micromobility',
    title: 'IAA Networking Tours: Mobility in Transition: from Automotive to Micromobility',
    date: '2025-09-10',
    time: { start: '13:30', end: '14:30' },
    location: { hall: 'Halle B3', area: 'Networking Area', booth: 'B11' },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Networking-Tour zu Übergängen von Automobilität zu Mikromobilität und leichten Elektrofahrzeugen.'
    },
    {
    id: 'mobility-meetings',
    title: 'Mobility Meetings',
    date: '2025-09-10',
    time: { start: '13:30', end: '14:30' },
    location: { hall: 'Halle B3', area: 'Networking Area', booth: 'B11' },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Treffen zur Vernetzung und zum Austausch über Mobilitätsthemen.'
    },
    {
    id: 'accelerating-adas-development-in-the-genai-age',
    title: 'Accelerating ADAS Development in the GenAI Age',
    date: '2025-09-10',
    time: { start: '14:00', end: '14:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag zur Beschleunigung der ADAS-Entwicklung im Zeitalter generativer KI.'
    },
    {
    id: '2025-world-new-energy-vehicle-congress-wnevc',
    title: '2025 World New Energy Vehicle Congress (WNEVC)',
    date: '2025-09-10',
    time: { start: '14:00', end: '18:00' },
    location: { hall: null, area: 'ICM Room 5', booth: null },
    organizer: { name: 'WNEVC' },
    summary: 'Kongress zu neuen Energiefahrzeugen im Rahmen der IAA 2025.'
    },
    {
    id: 'accelerating-automotive-design-with-large-physics-models-on-aws',
    title: 'Accelerating Automotive Design with Large Physics Models on AWS',
    date: '2025-09-10',
    time: { start: '14:30', end: '14:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag zur Beschleunigung des Automobildesigns mit Large Physics Models auf AWS.'
    },
    {
    id: 'coffee-learn-aufbau-der-schnellladeinfrastruktur-an-den-autobahnen',
    title: 'Coffee & Learn - Aufbau der Schnellladeinfrastruktur an den Autobahnen',
    date: '2025-09-10',
    time: { start: '14:30', end: '15:00' },
    location: { hall: 'Halle A2', area: null, booth: 'D11' },
    organizer: { name: 'Autobahn GmbH' },
    summary: 'Informationsveranstaltung über den Aufbau von Schnellladeinfrastruktur an Autobahnen.'
    },
    {
    id: 'empowering-next-level-automotive-virtual-engineering-and-factory-assistant',
    title: 'Empowering Next Level Automotive: Virtual Engineering and Factory Assistant',
    date: '2025-09-10',
    time: { start: '15:00', end: '15:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über virtuelle Ingenieur- und Fabrikassistenz für die nächste Stufe der Automobilentwicklung.'
    },
    {
    id: 'transforming-service-departments-with-ai-the-future-is-now',
    title: 'Transforming Service Departments with AI: The Future Is Now',
    date: '2025-09-10',
    time: { start: '15:00', end: '16:00' },
    location: { hall: 'Halle B3', area: null, booth: 'D120' },
    organizer: { name: null },
    summary: 'Vortrag über den Einsatz von KI zur Transformation von Serviceabteilungen.'
    },
    {
    id: 'iaa-networking-tours-inventive-power-of-technology-driven-ecosystems',
    title: 'IAA Networking Tours: Inventive power of technology-driven ecosystems',
    date: '2025-09-10',
    time: { start: '15:00', end: '16:30' },
    location: { hall: 'Halle B3', area: 'Networking Area', booth: 'B11' },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Networking-Tour zu technologiegetriebenen Ökosystemen und deren Innovationskraft.'
    },
    
    {
    id: 'driving-scalable-devops-transformation-mercedes-benz-s-journey-to-gitlab-dedicated-on-aws',
    title: 'Driving Scalable DevOps Transformation Mercedes-Benz’s Journey to GitLab Dedicated on AWS',
    date: '2025-09-10',
    time: { start: '15:30', end: '15:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über die DevOps-Transformation bei Mercedes-Benz mit GitLab Dedicated auf AWS.'
    },
    {
    id: 'cloud-services-in-motion-transforming-mobility-with-aws',
    title: 'Cloud Services in Motion: Transforming Mobility with AWS',
    date: '2025-09-10',
    time: { start: '16:00', end: '16:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über den Einsatz von Cloud-Services zur Transformation der Mobilität.'
    },
    {
    id: 'driving-the-future-ai-powered-engineering-for-the-sdv',
    title: 'Driving the Future: AI-Powered Engineering for the SDV',
    date: '2025-09-10',
    time: { start: '16:30', end: '16:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über KI-gestützte Entwicklungsansätze für softwaredefinierte Fahrzeuge.'
    },
    {
    id: 'from-stage-to-street-real-time-event-streaming-into-the-cockpit',
    title: 'From Stage to Street: Real-Time Event Streaming into the Cockpit',
    date: '2025-09-10',
    time: { start: '17:00', end: '17:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über die Integration von Echtzeit-Event-Streaming in Fahrzeugcockpits.'
    },
    {
    id: 'messe-apero',
    title: 'Messe-Aperó',
    date: '2025-09-10',
    time: { start: '17:00', end: '20:00' },
    location: { hall: 'Halle B3', area: null, booth: 'E10' },
    organizer: { name: 'Beatriz Schönstein-Wippel' },
    summary: 'Netzwerkveranstaltung mit Aperó, organisiert von Advantage Austria.'
    },
    {
    id: 'thueringen-date',
    title: 'Thüringen-Date',
    date: '2025-09-10',
    time: { start: '18:00', end: '22:00' },
    location: { hall: 'Halle A2', area: null, booth: 'D27' },
    organizer: { name: 'Landesentwicklungsgesellschaft Thüringen mbH' },
    summary: 'Präsentation und Networking-Event des Bundeslands Thüringen.'
    },
    
    {
    id: 'smart-art-shop',
    title: 'smart Art Shop',
    date: '2025-09-10',
    time: { start: '11:00', end: '17:00' },
    location: { hall: null, area: 'Odeonsplatz', booth: 'Family Trail Station 2' },
    organizer: { name: 'smart europe GmbH' },
    summary: 'Interaktives Familienprogramm von smart europe GmbH mit Kunst- und Mitmachangeboten.'
    },
    {
    id: 'welcome-kids',
    title: 'Welcome Kids',
    date: '2025-09-10',
    time: { start: '11:00', end: '17:00' },
    location: { hall: null, area: 'Residenz Apothekenhof', booth: 'Family Trail Station 8' },
    organizer: { name: 'Mercedes-Benz' },
    summary: 'Familienprogramm von Mercedes-Benz mit interaktiven Aktivitäten für Kinder.'
    },
    {
    id: 'adac-kids',
    title: 'ADAC Kids',
    date: '2025-09-10',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Königsplatz', booth: 'Family Trail Station 11' },
    organizer: { name: 'ADAC' },
    summary: 'Interaktives Familienprogramm des ADAC für Kinder.'
    },
    {
    id: 'erlebniswelt-oepnv',
    title: 'Erlebniswelt ÖPNV',
    date: '2025-09-10',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Königsplatz', booth: 'Family Trail Station 12' },
    organizer: { name: 'ZUKUNFT NAHVERKEHR' },
    summary: 'Familienprogramm zur Erlebniswelt des öffentlichen Nahverkehrs mit Mitmachaktionen.'
    },
    {
    id: 'zeitreise-der-mobilitaet-zum-anfassen-und-mitmachen',
    title: 'Zeitreise der Mobilität – zum Anfassen und Mitmachen!',
    date: '2025-09-10',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Ludwigstraße', booth: 'Family Trail Station 6' },
    organizer: { name: 'Bayern Innovativ GmbH' },
    summary: 'Interaktive Zeitreise durch die Geschichte der Mobilität zum Mitmachen.'
    },
    {
    id: 'die-grosse-kia-autojagd-zaehl-mit-spiel-mit-wie-viele-kia-modelle-findest-du-und-welches-gefaellt-dir-am-besten',
    title: '„Die große Kia-Autojagd: Zähl mit, spiel mit!“ Wie viele Kia-Modelle findest du? Und welches gefällt dir am besten?',
    date: '2025-09-10',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Ludwigstraße', booth: 'Family Trail Station 7' },
    organizer: { name: 'Kia' },
    summary: 'Mitmachaktion für Kinder mit einer Autojagd durch Kia-Modelle.'
    },
    {
    id: 'proactive-pairs-paare-finden-mit-bmw-proactive-care-stempel-sichern-preise-gewinnen',
    title: 'Proactive Pairs: Paare finden mit BMW Proactive Care, Stempel sichern & Preise gewinnen!',
    date: '2025-09-10',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Max-Joseph-Platz', booth: 'Family Trail Station 9' },
    organizer: { name: 'BMW AG' },
    summary: 'Familienprogramm mit BMW Proactive Care, bei dem Kinder Paare finden und Preise gewinnen können.'
    },
    {
    id: 'volkswagen-entdecker-rallye',
    title: 'Volkswagen Entdecker-Rallye',
    date: '2025-09-10',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Odeonsplatz', booth: 'Family Trail Station 1' },
    organizer: { name: 'Volkswagen AG' },
    summary: 'Interaktive Entdecker-Rallye für Kinder von Volkswagen.'
    },
    {
    id: 'new-mobility-explorers',
    title: 'New Mobility Explorers',
    date: '2025-09-10',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Odeonsplatz', booth: 'Family Trail Station 3' },
    organizer: { name: 'Riese & Müller' },
    summary: 'Familienprogramm mit interaktiven Angeboten rund um neue Mobilität.'
    },
    {
    id: 'vorsprung-durch-koepfchen-die-audi-kids-activities',
    title: 'Vorsprung durch Köpfchen – die Audi Kids Activities',
    date: '2025-09-10',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Wittelsbacherplatz', booth: 'Family Trail Station 4' },
    organizer: { name: 'Audi AG' },
    summary: 'Kinderaktivitäten von Audi unter dem Motto „Vorsprung durch Köpfchen“.'
    },
    
    {
    id: 'little-explorer-das-porsche-quiz',
    title: 'Little Explorer - das Porsche Quiz',
    date: '2025-09-10',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Wittelsbacherplatz', booth: 'Family Trail Station 5' },
    organizer: { name: 'Porsche AG' },
    summary: 'Familienquiz von Porsche für Kinder im Rahmen des Family Trail.'
    },
    {
    id: 'gross-denken-gemeinsam-handeln-was-es-braucht-damit-projekte-wie-der-mobilityhub-muenchenost-realitaet-werden',
    title: 'Groß denken, gemeinsam handeln: Was es braucht, damit Projekte wie der MobilityHub MünchenOst Realität werden',
    date: '2025-09-10',
    time: { start: '11:15', end: '11:45' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: 'Stadt und Land München Ost e.V. - OstAllianz' },
    summary: 'Diskussion über Voraussetzungen für die Realisierung von Projekten wie dem MobilityHub MünchenOst.'
    },
    {
    id: 'wie-ein-oepnv-ohne-grenzen-gelingen-kann',
    title: 'Wie ein ÖPNV ohne Grenzen gelingen kann?',
    date: '2025-09-10',
    time: { start: '11:30', end: '12:00' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Vortrag über die Chancen und Herausforderungen eines grenzenlosen öffentlichen Nahverkehrs.'
    },
    {
    id: 'rollen-fliegen-schwimmen-kinder-gestalten-fahrzeuge-der-zukunft',
    title: 'Rollen, fliegen, schwimmen? - Kinder gestalten Fahrzeuge der Zukunft',
    date: '2025-09-10',
    time: { start: '12:00', end: '14:00' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Family Trail Station 10' },
    organizer: { name: null },
    summary: 'Kreatives Familienprogramm, bei dem Kinder Fahrzeuge der Zukunft gestalten.'
    },
    {
    id: 'eine-stadt-fuer-alle-gleichberechtigung-und-inklusion-in-der-stadtentwicklung',
    title: 'Eine Stadt für alle – Gleichberechtigung und Inklusion in der Stadtentwicklung',
    date: '2025-09-10',
    time: { start: '12:15', end: '12:45' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: null },
    summary: 'Dialogveranstaltung zu Gleichberechtigung und Inklusion in der Stadtentwicklung.'
    },
    {
    id: 'autonom-unterwegs-wie-roboshuttles-den-oepnv-veraendern',
    title: 'Autonom unterwegs: Wie Roboshuttles den ÖPNV verändern',
    date: '2025-09-10',
    time: { start: '13:00', end: '13:30' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Vortrag über den Einfluss von Roboshuttles auf den öffentlichen Nahverkehr.'
    },
    {
    id: 'von-ameise-bis-zeppelin-wie-viel-bewegung-steckt-in-unserem-alltag',
    title: 'Von Ameise bis Zeppelin: Wie viel Bewegung steckt in unserem Alltag?',
    date: '2025-09-10',
    time: { start: '13:00', end: '13:45' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: null },
    summary: 'Diskussion über Bewegung und Mobilität im Alltag.'
    },
    {
    id: 'mehr-oepnv-mehr-veraenderung',
    title: 'MEHR ÖPNV. MEHR VERÄNDERUNG.',
    date: '2025-09-10',
    time: { start: '13:40', end: '14:00' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Vortrag über die Rolle des ÖPNV als Treiber für Veränderungen.'
    },
    {
    id: 'die-zukunft-vorantreiben-wie-wir-startups-bei-mobilitaetsloesungen-unterstuetzen-koennen',
    title: 'Die Zukunft vorantreiben: Wie wir Startups bei Mobilitätslösungen unterstützen können',
    date: '2025-09-10',
    time: { start: '14:00', end: '14:30' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Labs' },
    organizer: { name: 'Hochschule Macromedia' },
    summary: 'Diskussion über die Unterstützung von Startups bei innovativen Mobilitätslösungen.'
    },
    {
    id: 'overcoming-the-hill-of-hysteria-3-ways-to-deal-with-the-resistance-against-change-to-your-streets',
    title: 'Overcoming the hill of hysteria – 3 ways to deal with the resistance against change to your streets',
    date: '2025-09-10',
    time: { start: '14:10', end: '14:30' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Vortrag über Strategien zum Umgang mit Widerständen gegen Veränderungen im Straßenverkehr.'
    },
    
    {
    id: 'inklusionsrundgang-die-stadt-aus-einer-neuen-perspektive-erleben-unterwegs-im-rollstuhl',
    title: 'Inklusionsrundgang: Die Stadt aus einer neuen Perspektive erleben – Unterwegs im Rollstuhl',
    date: '2025-09-10',
    time: { start: '14:15', end: '15:30' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: null },
    summary: 'Rundgang, bei dem Teilnehmende die Stadt aus der Perspektive eines Rollstuhlfahrers erleben.'
    },
    {
    id: 'verkehrswende-made-in-germany-was-deutsche-staedte-heute-schon-richtig-machen',
    title: 'Verkehrswende made in Germany - was deutsche Städte heute schon richtig machen',
    date: '2025-09-10',
    time: { start: '14:30', end: '15:00' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Vortrag über erfolgreiche Ansätze deutscher Städte bei der Verkehrswende.'
    },
    {
    id: 'mobilitaet-zum-schaetzen-wie-gut-liegst-du',
    title: 'Mobilität zum Schätzen – Wie gut liegst du?',
    date: '2025-09-10',
    time: { start: '14:45', end: '14:55' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz', booth: 'Siegestor Bühne' },
    organizer: { name: 'Radio Gong 96.3' },
    summary: 'Interaktive Familienaktion zum Thema Mobilität von Radio Gong 96.3.'
    },
    {
    id: 'rad-roller-rufbus-wie-neue-mobilitaet-den-staedtischen-und-laendlichen-alltag-erleichtern-kann',
    title: 'Rad. Roller. Rufbus: Wie neue Mobilität den städtischen und ländlichen Alltag erleichtern kann',
    date: '2025-09-10',
    time: { start: '14:45', end: '15:30' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: null },
    summary: 'Diskussion über den Beitrag neuer Mobilitätsformen zur Erleichterung des Alltags in Stadt und Land.'
    },
    {
    id: 'soundcheck-mobilitaet-erkennst-du-das-geraeusch',
    title: 'Soundcheck Mobilität – Erkennst du das Geräusch?',
    date: '2025-09-10',
    time: { start: '15:10', end: '15:25' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz', booth: 'Siegestor Bühne' },
    organizer: { name: 'Radio Gong 96.3' },
    summary: 'Familienaktion mit Geräuscherkennung rund um Mobilität von Radio Gong 96.3.'
    },
    {
    id: 'auf-die-plaetze-fertig-los-der-fc-bayern-basketball-startet-durch',
    title: 'Auf die Plätze, fertig, los! Der FC Bayern Basketball startet durch!',
    date: '2025-09-10',
    time: { start: '15:30', end: '15:45' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz', booth: 'Siegestor' },
    organizer: { name: 'Radio Gong 96.3' },
    summary: 'Unterhaltungsprogramm mit dem FC Bayern Basketball präsentiert von Radio Gong 96.3.'
    },
    {
    id: 'land-in-sicht-kommunen-machen-mobil',
    title: 'Land in Sicht: Kommunen machen mobil',
    date: '2025-09-10',
    time: { start: '15:45', end: '16:15' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Vortrag über kommunale Strategien zur Förderung von Mobilität.'
    },
    {
    id: 'mobilitaet-und-reflexe',
    title: 'Mobilität und Reflexe',
    date: '2025-09-10',
    time: { start: '15:45', end: '16:15' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: null },
    summary: 'Dialogveranstaltung über die Bedeutung von Reflexen im Zusammenhang mit Mobilität.'
    },
    {
    id: 'lederhosentraining',
    title: 'Lederhosentraining',
    date: '2025-09-10',
    time: { start: '16:15', end: '16:45' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz', booth: 'Siegestor Bühne' },
    organizer: { name: null },
    summary: 'Sportliches Mitmachprogramm mit Lederhosentraining von Klaus Reithmeier.'
    },
    
    {
    id: 'next-stop-digitale-mobilitaet-wann-steigen-wir-wirklich-um',
    title: 'Next Stop - Digitale Mobilität: Wann steigen wir wirklich um?',
    date: '2025-09-10',
    time: { start: '16:30', end: '17:00' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Diskussion über den tatsächlichen Umstieg auf digitale Mobilität mit Experten aus der Branche.'
    },
    {
    id: 'wie-kommen-wir-2035-von-a-nach-b-trendradar-mobilitaet-mehr-als-ein-blick-in-die-glaskugel',
    title: 'Wie kommen wir 2035 von A nach B? Trendradar Mobilität: Mehr als ein Blick in die Glaskugel.',
    date: '2025-09-10',
    time: { start: '16:30', end: '17:00' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: 'Bayern Innovativ GmbH' },
    summary: 'Vortrag und Diskussion über zukünftige Mobilitätstrends bis 2035.'
    },
    {
    id: 'action-mit-mike-die-ehc-red-bull-fan-experience',
    title: 'Action mit Mike – Die EHC Red Bull Fan-Experience',
    date: '2025-09-10',
    time: { start: '17:00', end: '17:15' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz', booth: 'Siegestor Bühne' },
    organizer: { name: 'Radio Gong 96.3' },
    summary: 'Familienprogramm mit Fan-Erlebnis des EHC Red Bull, präsentiert von Radio Gong 96.3.'
    },
    {
    id: 'laendliche-mobilitaetsinnovationen-langfristig-etablieren-aus-der-foerderung-in-den-regelbetrieb',
    title: 'Ländliche Mobilitätsinnovationen langfristig etablieren - Aus der Förderung in den Regelbetrieb',
    date: '2025-09-10',
    time: { start: '17:15', end: '18:00' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Vortrag über die dauerhafte Etablierung ländlicher Mobilitätsinnovationen nach Förderphasen.'
    },
    {
    id: 'barrierefrei-durch-den-alltag-wie-mobilitaet-fuer-menschen-mit-sehbehinderung-gelingen-kann',
    title: 'Barrierefrei durch den Alltag: Wie Mobilität für Menschen mit Sehbehinderung gelingen kann',
    date: '2025-09-10',
    time: { start: '17:15', end: '18:00' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: null },
    summary: 'Diskussion über Möglichkeiten einer barrierefreien Mobilität für Menschen mit Sehbehinderung.'
    },
    {
    id: 'vision-zero-verkehrssicherheit-weitergedacht',
    title: 'Vision Zero: Verkehrssicherheit weitergedacht',
    date: '2025-09-10',
    time: { start: '17:15', end: '18:00' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: 'Mobilitätsreferat Landeshauptstadt München' },
    summary: 'Diskussionsrunde zu innovativen Konzepten für mehr Verkehrssicherheit im Rahmen von Vision Zero.'
    },
    {
    id: 'fakt-oder-fake-mobilitaet-in-deutschland',
    title: 'Fakt oder Fake – Mobilität in Deutschland',
    date: '2025-09-10',
    time: { start: '17:30', end: '17:40' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz', booth: 'Siegestor Bühne' },
    organizer: { name: 'Radio Gong 96.3' },
    summary: 'Interaktive Familienaktion rund um Fakten und Mythen zur Mobilität in Deutschland.'
    },
    {
    id: 'soundcheck-mobilitaet-erkennst-du-das-geraeusch',
    title: 'Soundcheck Mobilität – Erkennst du das Geräusch?',
    date: '2025-09-10',
    time: { start: '17:50', end: '18:00' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz', booth: 'Siegestor Bühne' },
    organizer: { name: 'Radio Gong 96.3' },
    summary: 'Familienaktion mit Geräuscherkennung zum Thema Mobilität von Radio Gong 96.3.'
    },
    {
    id: 'on-the-way-to-new-work-live-podcast-mit-michael-trautmann',
    title: 'On the Way to New Work – Live Podcast mit Michael Trautmann',
    date: '2025-09-10',
    time: { start: '18:15', end: '19:00' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Live-Podcast zum Thema New Work mit Michael Trautmann und Katrin Habenschaden.'
    },
    
    {
    id: 'ask-me-anything-eure-fragen-zu-mobilitaet-nachhaltigkeit-und-dem-alltag-von-morgen',
    title: 'Ask me anything – Eure Fragen zu Mobilität, Nachhaltigkeit und dem Alltag von Morgen',
    date: '2025-09-10',
    time: { start: '18:15', end: '19:00' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: null },
    summary: 'Diskussion mit Experten zu Fragen rund um Mobilität, Nachhaltigkeit und den Alltag von morgen.'
    },
    {
    id: 'melli-zech',
    title: 'Melli Zech',
    date: '2025-09-10',
    time: { start: '18:30', end: '19:30' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz', booth: 'Siegestor Bühne' },
    organizer: { name: null },
    summary: 'Auftritt der Künstlerin Melli Zech im Rahmen des Familienprogramms.'
    },
    {
    id: 'ultimate-european-startup-event-by-tum-venture-labs',
    title: 'Ultimate European Startup Event by TUM Venture Labs',
    date: '2025-09-10',
    time: { start: '19:15', end: '22:00' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: 'TUM Venture Labs' },
    summary: 'Europäisches Startup-Event mit internationalen Experten organisiert von TUM Venture Labs.'
    },
    {
    id: 'blyte',
    title: 'BLŸTE',
    date: '2025-09-10',
    time: { start: '20:00', end: '21:00' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz', booth: 'Siegestor Bühne' },
    organizer: { name: null },
    summary: 'Musikauftritt der Band BLŸTE im Rahmen des Familienprogramms.'
    },
    
    {
    id: '2025-mobility-fall-briefing',
    title: '2025 Mobility Fall Briefing',
    date: '2025-09-11',
    time: { start: '09:00', end: '14:45' },
    location: { hall: 'ICM', area: 'Room 13a', booth: null },
    organizer: { name: 'S&P Global' },
    summary: 'Briefing zu aktuellen Trends der Mobilität mit Fokus auf Automotive, Wasserstofftechnologien und autonomes Fahren.'
    },
    {
    id: 'europa-asien-automobil-innovationsforum-markterfolg-durch-oekosystem-kollaboration',
    title: 'Europa-Asien Automobil-Innovationsforum: Markterfolg durch Ökosystem-Kollaboration',
    date: '2025-09-11',
    time: { start: '09:00', end: '19:00' },
    location: { hall: 'ICM', area: 'Room 14a', booth: null },
    organizer: { name: 'Gasgoo - China Automotive News' },
    summary: 'Forum über Zusammenarbeit im Automobilsektor zwischen Europa und Asien mit Fokus auf Märkte, Konnektivität und Lieferketten.'
    },
    {
    id: 'iaa-mobility-hackathon-by-prototype-club',
    title: 'IAA MOBILITY Hackathon by prototype.club',
    date: '2025-09-11',
    time: { start: '09:30', end: '18:00' },
    location: { hall: 'Halle B2', area: null, booth: 'D107' },
    organizer: { name: 'prototype.club' },
    summary: 'Hackathon zur Entwicklung innovativer Lösungen in den Bereichen Automotive, Konnektivität und Künstliche Intelligenz.'
    },
    {
    id: 'iaa-networking-tours-connected-intelligent-software-driven-technologies-for-the-future-of-mobility',
    title: 'IAA Networking Tours: Connected, intelligent, software-driven: Technologies for the future of mobility',
    date: '2025-09-11',
    time: { start: '09:45', end: '11:15' },
    location: { hall: 'Halle B3', area: 'Networking Area', booth: 'B11' },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Networking-Tour zu vernetzten, intelligenten und softwaregetriebenen Technologien für die Mobilität der Zukunft.'
    },
    {
    id: 'accelerating-automotive-innovation',
    title: 'Accelerating Automotive Innovation',
    date: '2025-09-11',
    time: { start: '10:00', end: '10:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über die Beschleunigung von Innovationen in der Automobilbranche durch AWS-Technologien.'
    },
    {
    id: 'mobility-meetings',
    title: 'Mobility Meetings',
    date: '2025-09-11',
    time: { start: '10:00', end: '11:00' },
    location: { hall: 'Halle B3', area: 'Networking Area', booth: 'B11' },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Networking-Session zu aktuellen Themen und Trends in der Mobilität.'
    },
    {
    id: 'accelerating-system-requirement-translation-with-genai',
    title: 'Accelerating System Requirement Translation with GenAI',
    date: '2025-09-11',
    time: { start: '10:30', end: '10:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über den Einsatz von GenAI zur schnelleren Übersetzung von Systemanforderungen in der Automobilbranche.'
    },
    
    {
    id: 'accelerating-system-requirement-translation-with-genai',
    title: 'Accelerating System Requirement Translation with GenAI',
    date: '2025-09-11',
    time: { start: '10:30', end: '10:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über den Einsatz von GenAI zur schnelleren Übersetzung von Systemanforderungen in der Automobilbranche.'
    },
    {
    id: 'continuous-testing-meets-ai-a-scalable-solution-for-automotive-software',
    title: 'Continuous Testing Meets AI: A Scalable Solution for Automotive Software',
    date: '2025-09-11',
    time: { start: '11:00', end: '11:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Präsentation einer skalierbaren KI-Lösung für kontinuierliches Testen von Automotive-Software.'
    },
    {
    id: 'expertengespraech-e-highway-auf-der-autobahn',
    title: 'Expertengespräch – E-Highway auf der Autobahn',
    date: '2025-09-11',
    time: { start: '11:00', end: '11:30' },
    location: { hall: 'Halle A2', area: null, booth: 'D11' },
    organizer: { name: 'Autobahn GmbH' },
    summary: 'Expertengespräch über den Einsatz von E-Highways auf Autobahnen.'
    },
    {
    id: 'transforming-service-departments-with-ai-the-future-is-now',
    title: 'Transforming Service Departments with AI: The Future Is Now',
    date: '2025-09-11',
    time: { start: '11:00', end: '12:00' },
    location: { hall: 'Halle B3', area: null, booth: 'D120' },
    organizer: { name: 'Sensigo' },
    summary: 'Vortrag von Rakesh Hedge über die Transformation von Serviceabteilungen durch Künstliche Intelligenz.'
    },
    {
    id: 'transform-into-an-sdv-business-with-siemens-accenture-and-aws',
    title: 'Transform into an SDV Business with Siemens, Accenture and AWS',
    date: '2025-09-11',
    time: { start: '11:30', end: '11:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über die Transformation zum Software Defined Vehicle Business in Kooperation mit Siemens, Accenture und AWS.'
    },
    {
    id: 'autobahnos-quiz',
    title: 'AutobahnOS Quiz',
    date: '2025-09-11',
    time: { start: '11:50', end: '12:00' },
    location: { hall: 'Halle A2', area: null, booth: 'D11' },
    organizer: { name: 'Autobahn GmbH' },
    summary: 'Quizveranstaltung zu AutobahnOS.'
    },
    {
    id: 'designing-cars-in-the-cloud-ai-digital-twins-and-synthetic-data',
    title: 'Designing Cars in the Cloud: AI, Digital Twins and Synthetic Data',
    date: '2025-09-11',
    time: { start: '12:00', end: '12:40' },
    location: { hall: 'Halle B1', area: null, booth: 'D10' },
    organizer: { name: 'Volkswagen AG' },
    summary: 'Vortrag über Cloud-Technologien zur Fahrzeugentwicklung mit KI, digitalen Zwillingen und synthetischen Daten.'
    },
    {
    id: 'conference',
    title: 'Conference',
    date: '2025-09-11',
    time: { start: '12:00', end: '12:40' },
    location: { hall: 'Halle B1', area: null, booth: null },
    organizer: { name: null },
    summary: 'Konferenzveranstaltung in Halle B1.'
    },
    {
    id: 'conference-2',
    title: 'Conference',
    date: '2025-09-11',
    time: { start: '12:00', end: '12:40' },
    location: { hall: 'Halle B1', area: null, booth: null },
    organizer: { name: null },
    summary: 'Konferenzveranstaltung in Halle B1.'
    },
    {
    id: 'conference-3',
    title: 'Conference',
    date: '2025-09-11',
    time: { start: '12:00', end: '12:40' },
    location: { hall: 'Halle B1', area: null, booth: null },
    organizer: { name: null },
    summary: 'Konferenzveranstaltung in Halle B1.'
    },
    
    {
    id: 'conference',
    title: 'Conference',
    date: '2025-09-11',
    time: { start: '12:00', end: '12:40' },
    location: { hall: 'Halle B1', area: null, booth: null },
    organizer: { name: null },
    summary: 'Konferenzveranstaltung in Halle B1.'
    },
    {
    id: 'lunch-learn-aufbau-der-schnellladeinfrastruktur-an-den-autobahnen',
    title: 'Lunch & Learn - Aufbau der Schnellladeinfrastruktur an den Autobahnen',
    date: '2025-09-11',
    time: { start: '12:30', end: '12:50' },
    location: { hall: 'Halle A2', area: null, booth: 'D11' },
    organizer: { name: 'Autobahn GmbH' },
    summary: 'Vortrag zum Aufbau der Schnellladeinfrastruktur an Autobahnen.'
    },
    {
    id: 'data-driven-development-and-testing-for-automated-driving',
    title: 'Data Driven Development and Testing for Automated Driving',
    date: '2025-09-11',
    time: { start: '13:00', end: '13:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Präsentation zu datengetriebener Entwicklung und Testung für automatisiertes Fahren.'
    },
    {
    id: 'iaa-networking-tours-mobility-in-transition-from-automotive-to-micromobility',
    title: 'IAA Networking Tours: Mobility in Transition: from Automotive to Micromobility',
    date: '2025-09-11',
    time: { start: '13:00', end: '14:30' },
    location: { hall: 'Halle B3', area: 'Networking Area', booth: 'B11' },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Networking-Tour zu den Übergängen von Automobilität hin zu Mikromobilität und leichten Elektrofahrzeugen.'
    },
    {
    id: 'sicher-schnell-innovativ-warum-die-zukunft-der-fahrzeug-software-offen-ist',
    title: 'Sicher, schnell, innovativ: Warum die Zukunft der Fahrzeug-Software offen ist',
    date: '2025-09-11',
    time: { start: '13:00', end: '15:00' },
    location: { hall: 'ICM', area: null, booth: 'Room 13b' },
    organizer: { name: 'Verband der Automobilindustrie' },
    summary: 'Fachforum über die Zukunft offener Fahrzeugsoftware.'
    },
    {
    id: 'how-to-transform-validation-to-a-software-ai-centric-testing-ecosystemconference',
    title: 'How to Transform Validation to a Software & AI Centric Testing EcosystemConference',
    date: '2025-09-11',
    time: { start: '13:30', end: '13:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag zur Umgestaltung von Validierungsprozessen in ein software- und KI-zentriertes Testökosystem.'
    },
    {
    id: 'mobility-meetings',
    title: 'Mobility Meetings',
    date: '2025-09-11',
    time: { start: '13:30', end: '14:30' },
    location: { hall: 'Halle B3', area: 'Networking Area', booth: 'B11' },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Networking-Treffen zu Mobilitätsthemen moderiert von Mobility Makers.'
    },
    {
    id: 'from-simple-voice-commands-to-powerful-assistant-bmws-and-amazons-voice-assistant-co-development-story',
    title: 'From Simple Voice Commands to Powerful Assistant: BMW’s and Amazon’s Voice Assistant Co-development Story',
    date: '2025-09-11',
    time: { start: '14:00', end: '14:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag zur gemeinsamen Entwicklung des Sprachassistenten von BMW und Amazon.'
    },
    {
    id: 'adas-for-all-moving-automation-into-the-mainstream',
    title: 'ADAS for All – Moving Automation into the Mainstream',
    date: '2025-09-11',
    time: { start: '14:00', end: '14:40' },
    location: { hall: 'Halle B1', area: null, booth: 'D10' },
    organizer: { name: 'Volkswagen AG' },
    summary: 'Präsentation zur Verbreitung von Fahrerassistenzsystemen (ADAS) im Massenmarkt.'
    },
    
    {
    id: 'transforming-powersports-with-ota-telemetry-and-gen-ai-readiness',
    title: 'Transforming Powersports with OTA, Telemetry, and Gen AI Readiness',
    date: '2025-09-11',
    time: { start: '14:30', end: '14:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über den Einsatz von OTA, Telemetrie und GenAI im Powersport-Bereich.'
    },
    {
    id: 'projektvorstellung-aufbau-der-schnellladeinfrastruktur-an-den-autobahnen',
    title: 'Projektvorstellung – Aufbau der Schnellladeinfrastruktur an den Autobahnen',
    date: '2025-09-11',
    time: { start: '14:30', end: '15:00' },
    location: { hall: 'Halle A2', area: null, booth: 'D11' },
    organizer: { name: 'Autobahn GmbH' },
    summary: 'Projektvorstellung zum Aufbau der Schnellladeinfrastruktur an Autobahnen.'
    },
    {
    id: 'the-iav-service-cloud-your-hub-for-automotive-excellence',
    title: 'The IAV Service Cloud: Your Hub for Automotive Excellence',
    date: '2025-09-11',
    time: { start: '15:00', end: '15:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag zur IAV Service Cloud als zentrale Lösung für Automotive-Exzellenz.'
    },
    {
    id: 'where-code-meets-the-road-how-software-is-changing-driving-dynamics',
    title: 'Where Code Meets the Road - How Software is Changing Driving Dynamics',
    date: '2025-09-11',
    time: { start: '15:00', end: '15:40' },
    location: { hall: 'Halle B1', area: null, booth: 'D10' },
    organizer: { name: 'Volkswagen AG' },
    summary: 'Präsentation darüber, wie Software die Fahrdynamik verändert.'
    },
    {
    id: 'transforming-service-departments-with-ai-the-future-is-now',
    title: 'Transforming Service Departments with AI: The Future Is Now',
    date: '2025-09-11',
    time: { start: '15:00', end: '16:00' },
    location: { hall: 'Halle B3', area: null, booth: 'D120' },
    organizer: { name: null },
    summary: 'Vortrag über die Umgestaltung von Serviceabteilungen durch den Einsatz von KI.'
    },
    {
    id: 'iaa-networking-tours-inventive-power-of-technology-driven-ecosystems',
    title: 'IAA Networking Tours: Inventive power of technology-driven ecosystems',
    date: '2025-09-11',
    time: { start: '15:00', end: '16:30' },
    location: { hall: 'Halle B3', area: 'Networking Area', booth: 'B11' },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Networking-Tour zu technologiegetriebenen Ökosystemen und deren Innovationskraft.'
    },
    {
    id: 'from-disruption-to-differentiation-turning-volatility-into-competitive-value-in-automotive',
    title: 'From Disruption to Differentiation: Turning Volatility Into Competitive Value in Automotive',
    date: '2025-09-11',
    time: { start: '15:30', end: '15:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag zur Nutzung von Marktvolatilität als Wettbewerbsvorteil in der Automobilbranche.'
    },
    {
    id: 'integrating-excelfore-esync-and-aws-iot-core-for-hero-motocorp',
    title: 'Integrating Excelfore eSync and AWS IoT Core for Hero Motocorp',
    date: '2025-09-11',
    time: { start: '16:00', end: '16:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über die Integration von Excelfore eSync und AWS IoT Core bei Hero Motocorp.'
    },
    {
    id: 'more-than-a-ride-how-are-oems-and-big-tech-redefining-the-cockpit',
    title: 'More than a Ride - How are OEMs and Big Tech Redefining the Cockpit?',
    date: '2025-09-11',
    time: { start: '16:00', end: '16:40' },
    location: { hall: 'Halle B1', area: null, booth: 'D10' },
    organizer: { name: 'Volkswagen AG' },
    summary: 'Vortrag über die Rolle von OEMs und Big Tech bei der Neugestaltung des Fahrzeuginnenraums.'
    },
    
    {
    id: 'transforming-automotive-workflows-with-adastras-generative-ai-maintenance-bot',
    title: 'Transforming Automotive Workflows with Adastra’s Generative AI Maintenance Bot',
    date: '2025-09-11',
    time: { start: '16:30', end: '16:45' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag über den Einsatz eines Generative-AI-Maintenance-Bots von Adastra zur Optimierung von Automotive-Workflows.'
    },
    {
    id: 'automotive-services-graphrag-on-aws',
    title: 'Automotive Services GraphRAG on AWS',
    date: '2025-09-11',
    time: { start: '17:00', end: '17:15' },
    location: { hall: 'Halle A2', area: null, booth: 'B10' },
    organizer: { name: 'AWS (Amazon Web Services)' },
    summary: 'Vortrag zu Automotive Services mit GraphRAG-Technologie auf AWS.'
    },
    {
    id: 'pwc-startup-corporate-reception',
    title: 'PwC Startup Corporate Reception',
    date: '2025-09-11',
    time: { start: '17:15', end: '23:59' },
    location: { hall: 'Halle B3', area: 'PwC Smart Mobility Space', booth: null },
    organizer: { name: 'PwC' },
    summary: 'Empfang für Startups und Unternehmen im PwC Smart Mobility Space.'
    },
    {
    id: 'verleihung-der-awards-von-firmenauto-des-jahres-2025',
    title: 'Verleihung der Awards von „firmenauto des Jahres 2025“',
    date: '2025-09-11',
    time: { start: '18:00', end: '23:00' },
    location: { hall: 'ICM', area: null, booth: 'Room 5' },
    organizer: { name: 'ETM Verlag' },
    summary: 'Preisverleihung der Auszeichnungen „firmenauto des Jahres 2025“.'
    },
    
    {
    id: 'smart-art-shop',
    title: 'smart Art Shop',
    date: '2025-09-11',
    time: { start: '11:00', end: '17:00' },
    location: { hall: null, area: 'Odeonsplatz', booth: 'Family Trail Station 2' },
    organizer: { name: 'smart europe GmbH' },
    summary: 'Interaktives Familienprogramm im Rahmen des smart Art Shops.'
    },
    {
    id: 'welcome-kids',
    title: 'Welcome Kids',
    date: '2025-09-11',
    time: { start: '11:00', end: '17:00' },
    location: { hall: null, area: 'Residenz Apothekenhof', booth: 'Family Trail Station 8' },
    organizer: { name: 'Mercedes-Benz' },
    summary: 'Familienprogramm für Kinder im Residenz Apothekenhof unter dem Motto Welcome Kids.'
    },
    {
    id: 'adac-kids',
    title: 'ADAC Kids',
    date: '2025-09-11',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Königsplatz', booth: 'Family Trail Station 11' },
    organizer: { name: 'ADAC' },
    summary: 'Mitmachaktionen für Kinder am ADAC Kids Stand.'
    },
    {
    id: 'erlebniswelt-oepnv',
    title: 'Erlebniswelt ÖPNV',
    date: '2025-09-11',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Königsplatz', booth: 'Family Trail Station 12' },
    organizer: { name: 'ZUKUNFT NAHVERKEHR' },
    summary: 'Interaktive Erlebniswelt rund um den öffentlichen Nahverkehr.'
    },
    {
    id: 'zeitreise-der-mobilitaet-zum-anfassen-und-mitmachen',
    title: 'Zeitreise der Mobilität – zum Anfassen und Mitmachen!',
    date: '2025-09-11',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Ludwigstraße', booth: 'Family Trail Station 6' },
    organizer: { name: 'Bayern Innovativ GmbH' },
    summary: 'Interaktive Station zur Mobilitätsgeschichte zum Anfassen und Mitmachen.'
    },
    {
    id: 'die-grosse-kia-autojagd-zaehl-mit-spiel-mit',
    title: '„Die große Kia-Autojagd: Zähl mit, spiel mit!“ Wie viele Kia-Modelle findest du? Und welches gefällt dir am besten?',
    date: '2025-09-11',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Ludwigstraße', booth: 'Family Trail Station 7' },
    organizer: { name: 'Kia' },
    summary: 'Mitmachaktion für Kinder zur Erkundung von Kia-Modellen.'
    },
    {
    id: 'proactive-pairs',
    title: 'Proactive Pairs: Paare finden mit BMW Proactive Care, Stempel sichern & Preise gewinnen!',
    date: '2025-09-11',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Max-Joseph-Platz', booth: 'Family Trail Station 9' },
    organizer: { name: 'BMW AG' },
    summary: 'Spielerische Paarsuche mit BMW Proactive Care und Gewinnmöglichkeiten.'
    },
    {
    id: 'volkswagen-entdecker-rallye',
    title: 'Volkswagen Entdecker-Rallye',
    date: '2025-09-11',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Odeonsplatz', booth: 'Family Trail Station 1' },
    organizer: { name: 'Volkswagen AG' },
    summary: 'Entdecker-Rallye für Familien am Volkswagen Stand.'
    },
    {
    id: 'new-mobility-explorers',
    title: 'New Mobility Explorers',
    date: '2025-09-11',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Odeonsplatz', booth: 'Family Trail Station 3' },
    organizer: { name: 'Riese & Müller' },
    summary: 'Interaktive Station für Familien zu neuer Mobilität.'
    },
    
    {
    id: 'vorsprung-durch-koepfchen-die-audi-kids-activities',
    title: 'Vorsprung durch Köpfchen – die Audi Kids Activities',
    date: '2025-09-11',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Wittelsbacherplatz', booth: 'Family Trail Station 4' },
    organizer: { name: 'Audi AG' },
    summary: 'Interaktive Kinderaktivitäten von Audi im Rahmen des Familienprogramms.'
    },
    {
    id: 'little-explorer-das-porsche-quiz',
    title: 'Little Explorer - das Porsche Quiz',
    date: '2025-09-11',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Wittelsbacherplatz', booth: 'Family Trail Station 5' },
    organizer: { name: 'Porsche AG' },
    summary: 'Quizangebot für Kinder von Porsche als Teil des Familienprogramms.'
    },
    {
    id: 'koffer-packen-klima-schonen-nachhaltig-unterwegs-mit-der-ganzen-familie',
    title: 'Koffer packen, Klima schonen: Nachhaltig unterwegs mit der ganzen Familie',
    date: '2025-09-11',
    time: { start: '11:10', end: '11:55' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: null },
    summary: 'Diskussion über nachhaltiges Reisen mit der Familie und Klimaschutz.'
    },
    {
    id: 'fuer-alle-ueberall-was-muss-vernetzte-mobilitaet-leisten',
    title: 'Für alle, überall: was muss vernetzte Mobilität leisten?',
    date: '2025-09-11',
    time: { start: '11:15', end: '11:45' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Gesprächsrunde über Anforderungen an vernetzte Mobilität.'
    },
    {
    id: 'denkraum25-zusammen-oepnv-neu-denken',
    title: 'DENKRAUM25 – Zusammen ÖPNV neu denken',
    date: '2025-09-11',
    time: { start: '12:00', end: '12:10' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Vortrag zu neuen Perspektiven im öffentlichen Personennahverkehr.'
    },
    {
    id: 'rollen-fliegen-schwimmen-kinder-gestalten-fahrzeuge-der-zukunft',
    title: 'Rollen, fliegen, schwimmen? - Kinder gestalten Fahrzeuge der Zukunft',
    date: '2025-09-11',
    time: { start: '12:00', end: '14:00' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Family Trail Station 10' },
    organizer: { name: null },
    summary: 'Künstlerisch-kreatives Familienprogramm, bei dem Kinder Fahrzeuge der Zukunft entwerfen.'
    },
    {
    id: 'studie-oepnv-als-wirtschaftsbooster',
    title: 'Studie: ÖPNV als Wirtschaftsbooster',
    date: '2025-09-11',
    time: { start: '12:10', end: '12:20' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Vorstellung einer Studie über den Beitrag des ÖPNV zur Wirtschaft.'
    },
    {
    id: 'state-of-the-art-mobilitaet-und-technik-wo-steht-die-forschung',
    title: 'State of the Art - Mobilität & Technik: Wo steht die Forschung?',
    date: '2025-09-11',
    time: { start: '12:15', end: '12:45' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: 'MCube' },
    summary: 'Diskussion zu aktuellem Stand der Forschung in den Bereichen Mobilität und Technik.'
    },
    {
    id: 'wie-traegt-der-oepnv-zur-wertschoepfung-bei',
    title: 'Wie trägt der ÖPNV zur Wertschöpfung bei?',
    date: '2025-09-11',
    time: { start: '12:20', end: '12:50' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Vortrag über die ökonomische Bedeutung des öffentlichen Nahverkehrs.'
    },
    
    {
    id: 'oepnv-und-handel-wie-neu-denken',
    title: 'ÖPNV und Handel: Wie neu denken?',
    date: '2025-09-11',
    time: { start: '12:55', end: '13:25' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Diskussion über neue Ansätze zur Verbindung von ÖPNV und Handel.'
    },
    {
    id: 'kicken-ohne-grenzen-mobilitaet-fuer-alle-mit-tobias-schweinsteiger-team-bananenflanke-muenchen-ev',
    title: 'Kicken ohne Grenzen – Mobilität für alle. Mit Tobias Schweinsteiger & Team Bananenflanke München e.V.',
    date: '2025-09-11',
    time: { start: '13:00', end: '13:45' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: null },
    summary: 'Interaktive Gesprächsrunde zu inklusiver Mobilität durch Sport mit Team Bananenflanke München e.V.'
    },
    {
    id: 'eine-idee-wird-wirklichkeit-von-den-leidenschaften-einer-zugentwicklung',
    title: 'Eine Idee wird Wirklichkeit – Von den Leidenschaften einer Zugentwicklung',
    date: '2025-09-11',
    time: { start: '13:30', end: '14:30' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Diskussion über die Entwicklung und Umsetzung neuer Zugprojekte.'
    },
    {
    id: 'zweite-chance-fuer-e-autos-wie-recycling-und-kreislaufwirtschaft-mobilitaet-nachhaltiger-machen',
    title: 'Zweite Chance für E-Autos: Wie Recycling und Kreislaufwirtschaft Mobilität nachhaltiger machen',
    date: '2025-09-11',
    time: { start: '14:00', end: '14:45' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: 'Bayern Innovativ GmbH' },
    summary: 'Gespräch über Recycling und Kreislaufwirtschaft als Beitrag zur nachhaltigen Mobilität.'
    },
    {
    id: 'fin-issue',
    title: 'Fin Issue',
    date: '2025-09-11',
    time: { start: '14:15', end: '15:00' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: null },
    summary: 'Auftritt des Künstlers Fin Issue im Rahmen des Familienprogramms.'
    },
    {
    id: 'inklusionsrundgang-die-stadt-aus-einer-neuen-perspektive-erleben-unterwegs-mit-gehoerlosigkeit',
    title: 'Inklusionsrundgang: Die Stadt aus einer neuen Perspektive erleben – Unterwegs mit Gehörlosigkeit',
    date: '2025-09-11',
    time: { start: '14:15', end: '15:30' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: null },
    summary: 'Inklusionsrundgang, der Mobilität und Stadtleben aus Sicht von Gehörlosen erfahrbar macht.'
    },
    {
    id: 'zukunft-autonomer-nahverkehr-wie-viele-shuttles-braucht-es-fuer-deutschland',
    title: 'Zukunft autonomer Nahverkehr: Wie viele Shuttles braucht es für Deutschland?',
    date: '2025-09-11',
    time: { start: '15:00', end: '15:15' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Vortrag über den Bedarf und die Rolle autonomer Shuttles im deutschen Nahverkehr.'
    },
    {
    id: 'mit-schwarmwissen-mobil-freizeitziele-in-und-um-muenchen-mit-rad-oepnv-und-zu-fuss',
    title: 'Mit Schwarmwissen mobil: Freizeitziele in & um München mit Rad, ÖPNV & zu Fuß',
    date: '2025-09-11',
    time: { start: '15:00', end: '15:30' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: null },
    summary: 'Vortrag über die Nutzung kollektiven Wissens zur Erreichung von Freizeitorten in München mit nachhaltiger Mobilität.'
    },
    {
    id: 'autonomes-fahren-im-oeffentlichen-verkehr-zwischen-vision-und-umsetzung',
    title: 'Autonomes Fahren im öffentlichen Verkehr - zwischen Vision und Umsetzung',
    date: '2025-09-11',
    time: { start: '15:15', end: '16:00' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Diskussionsrunde über Chancen und Herausforderungen des autonomen Fahrens im öffentlichen Verkehr.'
    },
    {
    id: 'mobilitaetsstammtisch-perspektiven-fuer-eine-nachhaltige-mobilitaet',
    title: 'Mobilitätsstammtisch: Perspektiven für eine nachhaltige Mobilität',
    date: '2025-09-11',
    time: { start: '15:45', end: '16:30' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: null },
    summary: 'Gesprächsrunde zu aktuellen Perspektiven und Ansätzen nachhaltiger Mobilität.'
    },
    
    {
    id: 'stiff-hips',
    title: 'STIFF HIPS',
    date: '2025-09-11',
    time: { start: '15:45', end: '16:45' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: null },
    summary: 'Musikauftritt der Band STIFF HIPS im Rahmen des Familienprogramms.'
    },
    {
    id: 'innovationsraeume-fuer-mobilitaet-wie-modellregionen-verkehrswende-erlebbar-machen',
    title: 'Innovationsräume für Mobilität : Wie Modellregionen Verkehrswende erlebbar machen',
    date: '2025-09-11',
    time: { start: '16:15', end: '16:45' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Vortrag über die Rolle von Modellregionen zur Veranschaulichung der Verkehrswende.'
    },
    {
    id: 'action-mit-mike-die-ehc-red-bull-fan-experience',
    title: 'Action mit Mike – Die EHC Red Bull Fan-Experience',
    date: '2025-09-11',
    time: { start: '17:00', end: '17:15' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: 'Radio Gong 96.3' },
    summary: 'Fan-Event mit dem EHC Red Bull, präsentiert von Radio Gong 96.3.'
    },
    {
    id: 'sharing-angebote-urbanes-wohnen-leben-ohne-eigenes-auto-funktioniert-das-wirklich',
    title: 'Sharing-Angebote & Urbanes Wohnen: leben ohne eigenes Auto - Funktioniert das wirklich?',
    date: '2025-09-11',
    time: { start: '17:10', end: '18:10' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: null },
    summary: 'Diskussion über die Verbindung von urbanem Wohnen und Sharing-Angeboten ohne eigenes Auto.'
    },
    {
    id: 'die-neuen-xxl-s-bahnen',
    title: 'Die neuen XXL-S-Bahnen',
    date: '2025-09-11',
    time: { start: '17:15', end: '17:30' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: 'DB Regio AG' },
    summary: 'Präsentation der neuen XXL-S-Bahnen durch DB Regio AG.'
    },
    {
    id: 'erzaehl-cafe-mobilitaetsgeschichten-fuer-gegenseitiges-verstaendnis',
    title: 'Erzähl-Café: Mobilitätsgeschichten für gegenseitiges Verständnis',
    date: '2025-09-11',
    time: { start: '17:15', end: '18:00' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab)', booth: 'Citizens Lab' },
    organizer: { name: null },
    summary: 'Storytelling-Format mit Mobilitätsgeschichten zum gegenseitigen Verständnis.'
    },
    {
    id: 'unsre-rosi-die-rollende-s-bahn',
    title: 'Unsre RoSi – die rollende S-Bahn',
    date: '2025-09-11',
    time: { start: '17:30', end: '17:45' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: 'DB Regio AG' },
    summary: 'Vorstellung der rollenden S-Bahn RoSi durch DB Regio AG.'
    },
    {
    id: 'spilled-milk',
    title: 'Spilled Milk',
    date: '2025-09-11',
    time: { start: '18:30', end: '19:30' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: null },
    summary: 'Auftritt der Band Spilled Milk im Rahmen des Familienprogramms.'
    },
    {
    id: 'sag-mal-du-als-physiker-die-edutainment-show-zur-physik-des-nahverkehrs',
    title: 'Sag mal du als Physiker - Die Edutainment-Show zur Physik des Nahverkehrs',
    date: '2025-09-11',
    time: { start: '19:00', end: '20:00' },
    location: { hall: null, area: 'Königsplatz', booth: 'ZNV Bühne' },
    organizer: { name: null },
    summary: 'Edutainment-Show des Podcasts „Sag mal, du als Physiker“ zur Physik des Nahverkehrs.'
    },
    
    {
    id: 'mynd-palace',
    title: 'MYND PALACE',
    date: '2025-09-11',
    time: { start: '20:00', end: '21:00' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: null },
    summary: 'Musikauftritt der Band MYND PALACE im Rahmen des Familienprogramms.'
    },
    
    {
    id: 'aktionfahrrad-lehrkrafetagung',
    title: 'AKTIONfahrRAD Lehrkräftetagung',
    date: '2025-09-12',
    time: { start: '09:30', end: '17:00' },
    location: { hall: 'ICM', area: null, booth: null },
    organizer: { name: 'Ulrich Fillies' },
    summary: 'Lehrkräftetagung von AKTIONfahrRAD zur Förderung von Radmobilität.'
    },
    {
    id: 'iaa-networking-tours-connected-intelligent-software-driven-technologies-for-the-future-of-mobility',
    title: 'IAA Networking Tours: Connected, intelligent, software-driven: Technologies for the future of mobility',
    date: '2025-09-12',
    time: { start: '09:45', end: '11:15' },
    location: { hall: 'Halle B3', area: 'Networking Area', booth: 'B11' },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Networking-Tour zu vernetzten, intelligenten und softwarebasierten Technologien der zukünftigen Mobilität.'
    },
    {
    id: 'mobility-meetings',
    title: 'Mobility Meetings',
    date: '2025-09-12',
    time: { start: '10:00', end: '11:00' },
    location: { hall: 'Halle B3', area: 'Networking Area', booth: 'B11' },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Networking-Treffen im Rahmen der IAA MOBILITY mit internationalen Teilnehmern.'
    },
    {
    id: 'projektvorstellung-aufbau-der-schnellladeinfrastruktur-an-den-autobahnen',
    title: 'Projektvorstellung – Aufbau der Schnellladeinfrastruktur an den Autobahnen',
    date: '2025-09-12',
    time: { start: '11:00', end: '11:30' },
    location: { hall: 'Halle A2', area: null, booth: 'D11' },
    organizer: { name: 'Autobahn GmbH' },
    summary: 'Vorstellung des Projekts zum Aufbau einer Schnellladeinfrastruktur an Autobahnen.'
    },
    {
    id: 'transforming-service-departments-with-ai-the-future-is-now',
    title: 'Transforming Service Departments with AI: The Future Is Now',
    date: '2025-09-12',
    time: { start: '11:00', end: '12:00' },
    location: { hall: 'Halle B3', area: null, booth: 'D120' },
    organizer: { name: 'Sensigo' },
    summary: 'Vortrag von Rakesh Hedge über den Einsatz von KI zur Transformation von Serviceabteilungen.'
    },
    {
    id: 'autobahnos-quiz',
    title: 'AutobahnOS Quiz',
    date: '2025-09-12',
    time: { start: '11:50', end: '12:00' },
    location: { hall: 'Halle A2', area: null, booth: 'D11' },
    organizer: { name: 'Autobahn GmbH' },
    summary: 'Quiz zur Initiative AutobahnOS.'
    },
    {
    id: 'iaa-networking-tours-mobility-in-transition-from-automotive-to-micromobility',
    title: 'IAA Networking Tours: Mobility in Transition: from Automotive to Micromobility',
    date: '2025-09-12',
    time: { start: '13:00', end: '14:30' },
    location: { hall: 'Halle B3', area: 'Networking Area', booth: 'B11' },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Networking-Tour zur Transformation der Mobilität von Automobilen hin zu Mikromobilität.'
    },
    {
    id: 'mobility-meetings-1',
    title: 'Mobility Meetings',
    date: '2025-09-12',
    time: { start: '13:30', end: '14:30' },
    location: { hall: 'Halle B3', area: 'Networking Area', booth: 'B11' },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Networking-Treffen im Rahmen der IAA MOBILITY mit internationalen Teilnehmern.'
    },
    {
    id: 'transforming-service-departments-with-ai-the-future-is-now-1',
    title: 'Transforming Service Departments with AI: The Future Is Now',
    date: '2025-09-12',
    time: { start: '15:00', end: '16:00' },
    location: { hall: 'Halle B3', area: null, booth: null },
    organizer: { name: 'Sensigo' },
    summary: 'Vortrag von Rakesh Hedge über den Einsatz von KI zur Transformation von Serviceabteilungen.'
    },
    
    {
    id: 'iaa-networking-tours-inventive-power-of-technology-driven-ecosystems',
    title: 'IAA Networking Tours: Inventive power of technology-driven ecosystems',
    date: '2025-09-12',
    time: { start: '15:00', end: '16:30' },
    location: { hall: 'Halle B3', area: 'Networking Area', booth: 'B11' },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Networking-Tour zu technologiegetriebenen Ökosystemen in der Mobilität.'
    },
    {
    id: 'gemeinsam-hupen-zum-grossen-iaa-mobility-finale',
    title: 'Gemeinsam hupen zum großen IAA MOBILITY Finale',
    date: '2025-09-12',
    time: { start: '17:55', end: '18:00' },
    location: { hall: 'All Halls', area: null, booth: null },
    organizer: { name: 'IAA MOBILITY 2025' },
    summary: 'Abschließende gemeinsame Aktion zum Finale der IAA MOBILITY 2025.'
    },
    
    {
    id: 'smart-art-shop',
    title: 'smart Art Shop',
    date: '2025-09-12',
    time: { start: '11:00', end: '17:00' },
    location: { hall: null, area: 'Odeonsplatz Family Trail Station 2', booth: null },
    organizer: { name: 'smart europe GmbH' },
    summary: 'Interaktive Familienaktion im smart Art Shop am Odeonsplatz.'
    },
    {
    id: 'welcome-kids',
    title: 'Welcome Kids',
    date: '2025-09-12',
    time: { start: '11:00', end: '17:00' },
    location: { hall: null, area: 'Residenz Apothekenhof Family Trail Station 8', booth: null },
    organizer: { name: 'Mercedes-Benz' },
    summary: 'Familienprogramm Welcome Kids im Residenz Apothekenhof.'
    },
    {
    id: 'adac-kids',
    title: 'ADAC Kids',
    date: '2025-09-12',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Königsplatz Family Trail Station 11', booth: null },
    organizer: { name: 'ADAC' },
    summary: 'ADAC bietet ein Kinderprogramm im Rahmen des Family Trail am Königsplatz.'
    },
    {
    id: 'erlebniswelt-oepnv',
    title: 'Erlebniswelt ÖPNV',
    date: '2025-09-12',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Königsplatz Family Trail Station 12', booth: null },
    organizer: { name: 'ZUKUNFT NAHVERKEHR' },
    summary: 'Die Erlebniswelt ÖPNV lädt Familien zu Mitmachaktionen rund um den Nahverkehr ein.'
    },
    {
    id: 'zeitreise-der-mobilitaet-zum-anfassen-und-mitmachen',
    title: 'Zeitreise der Mobilität – zum Anfassen und Mitmachen!',
    date: '2025-09-12',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Ludwigstraße Family Trail Station 6', booth: null },
    organizer: { name: 'Bayern Innovativ GmbH' },
    summary: 'Interaktive Zeitreise durch die Mobilität für Familien an der Ludwigstraße.'
    },
    {
    id: 'die-grosse-kia-autojagd-zaehl-mit-spiel-mit',
    title: '„Die große Kia-Autojagd: Zähl mit, spiel mit!“ Wie viele Kia-Modelle findest du? Und welches gefällt dir am besten?',
    date: '2025-09-12',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Ludwigstraße Family Trail Station 7', booth: null },
    organizer: { name: 'Kia' },
    summary: 'Spielerische Autojagd für Kinder mit Kia-Modellen auf der Ludwigstraße.'
    },
    {
    id: 'proactive-pairs',
    title: 'Proactive Pairs: Paare finden mit BMW Proactive Care, Stempel sichern & Preise gewinnen!',
    date: '2025-09-12',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Max-Joseph-Platz Family Trail Station 9', booth: null },
    organizer: { name: 'BMW AG' },
    summary: 'BMW bietet ein Familien-Mitmachspiel Proactive Pairs am Max-Joseph-Platz.'
    },
    {
    id: 'volkswagen-entdecker-rallye',
    title: 'Volkswagen Entdecker-Rallye',
    date: '2025-09-12',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Odeonsplatz Family Trail Station 1', booth: null },
    organizer: { name: 'Volkswagen AG' },
    summary: 'Die Volkswagen Entdecker-Rallye lädt Familien am Odeonsplatz zu einer Mitmachaktion ein.'
    },
    {
    id: 'new-mobility-explorers',
    title: 'New Mobility Explorers',
    date: '2025-09-12',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Odeonsplatz Family Trail Station 3', booth: null },
    organizer: { name: 'Riese & Müller' },
    summary: 'Familienprogramm New Mobility Explorers von Riese & Müller am Odeonsplatz.'
    },
    {
    id: 'vorsprung-durch-koepfchen-die-audi-kids-activities',
    title: 'Vorsprung durch Köpfchen – die Audi Kids Activities',
    date: '2025-09-12',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Wittelsbacherplatz Family Trail Station 4', booth: null },
    organizer: { name: 'Audi AG' },
    summary: 'Audi präsentiert die Kinderaktivitäten „Vorsprung durch Köpfchen“ am Wittelsbacherplatz.'
    },
    
    {
    id: 'little-explorer-das-porsche-quiz',
    title: 'Little Explorer - das Porsche Quiz',
    date: '2025-09-12',
    time: { start: '11:00', end: '21:00' },
    location: { hall: null, area: 'Wittelsbacherplatz Family Trail Station 5', booth: null },
    organizer: { name: 'Porsche AG' },
    summary: 'Familienprogramm mit dem Porsche Quiz im Rahmen der Little Explorer Aktivitäten am Wittelsbacherplatz.'
    },
    {
    id: 'auf-die-plaetze-fertig-los-der-fc-bayern-basketball-startet-durch',
    title: 'Auf die Plätze, fertig, los! Der FC Bayern Basketball startet durch!',
    date: '2025-09-12',
    time: { start: '11:15', end: '11:25' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: 'Radio Gong 96.3' },
    summary: 'Kurze Familien-Showeinlage mit dem FC Bayern Basketball am Siegestor.'
    },
    {
    id: 'von-pop-up-lane-bis-sommerstrasse-wie-helfen-strassenexperimente-die-mobilitaet-in-muenchen-zu-innovieren',
    title: 'Von Pop-Up Lane bis Sommerstraße - Wie helfen Straßenexperimente, die Mobilität in München zu innovieren?',
    date: '2025-09-12',
    time: { start: '11:15', end: '11:45' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: null },
    summary: 'Diskussion über den Beitrag von Straßenexperimenten zur Innovationsförderung der Mobilität in München.'
    },
    {
    id: 'keine-mobilitaetswende-ohne-fachkraefte',
    title: 'Keine Mobilitätswende ohne Fachkräfte',
    date: '2025-09-12',
    time: { start: '11:30', end: '12:15' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: 'DB Regio AG' },
    summary: 'Diskussionsveranstaltung zur Bedeutung von Fachkräften für die Mobilitätswende.'
    },
    {
    id: 'live-podcast-mobilitaet-im-wandel-doch-wo-bleiben-die-tech-giganten',
    title: 'Live-Podcast: Mobilität im Wandel – doch wo bleiben die Tech-Giganten?',
    date: '2025-09-12',
    time: { start: '12:00', end: '12:55' },
    location: { hall: null, area: 'Königsplatz ZNV Bühne', booth: null },
    organizer: { name: null },
    summary: 'Live-Podcast zu den Veränderungen in der Mobilität und der Rolle großer Technologieunternehmen.'
    },
    {
    id: 'rollen-fliegen-schwimmen-kinder-gestalten-fahrzeuge-der-zukunft',
    title: 'Rollen, fliegen, schwimmen? - Kinder gestalten Fahrzeuge der Zukunft',
    date: '2025-09-12',
    time: { start: '12:00', end: '14:00' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Family Trail Station 10', booth: null },
    organizer: { name: null },
    summary: 'Kinder entwickeln kreative Fahrzeugideen der Zukunft im Rahmen eines Mitmachprogramms.'
    },
    {
    id: 'mehr-als-bewegung-mobilitaet-als-schluessel-zur-gerechten-gesellschaft',
    title: 'Mehr als Bewegung: Mobilität als Schlüssel zur gerechten Gesellschaft',
    date: '2025-09-12',
    time: { start: '12:15', end: '13:00' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: 'Zukunft Nahverkehr' },
    summary: 'Podiumsdiskussion zur Rolle von Mobilität für gesellschaftliche Gerechtigkeit.'
    },
    {
    id: 'zukunft-bewegen-young-talents-linde',
    title: 'Zukunft bewegen: Young Talents @Linde',
    date: '2025-09-12',
    time: { start: '12:30', end: '13:00' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: 'Linde GmbH' },
    summary: 'Präsentation von Auszubildenden und dual Studierenden über ihre Erfahrungen bei Linde.'
    },
    {
    id: 'bahn-loves-bike-eine-echte-win-win-kombination-fuer-urbane-mobilitaet',
    title: 'Bahn loves Bike – eine echte Win-Win Kombination für urbane Mobilität',
    date: '2025-09-12',
    time: { start: '13:00', end: '13:20' },
    location: { hall: null, area: 'Königsplatz ZNV Bühne', booth: null },
    organizer: { name: null },
    summary: 'Vortrag zur Kombination von Bahn- und Fahrradnutzung als Beitrag zur urbanen Mobilität.'
    },
    
    {
    id: 'tanzshowgruppe-jazzada',
    title: 'Tanzshowgruppe JazzADa',
    date: '2025-09-12',
    time: { start: '13:15', end: '13:25' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: null },
    summary: 'Auftritt der Tanzshowgruppe JazzADa auf der Siegestor Bühne.'
    },
    {
    id: 'digital-vernetzt-buergernah-wie-digitalisierung-unsere-stadt-voranbringt',
    title: 'Digital, vernetzt, bürgernah: Wie Digitalisierung unsere Stadt voranbringt',
    date: '2025-09-12',
    time: { start: '13:15', end: '13:45' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: null },
    summary: 'Vortrag von Dr. Laura Dornheim zur Rolle der Digitalisierung für die Stadtentwicklung in München.'
    },
    {
    id: 'db-kiana-virtuelle-assistenz-im-oepnv',
    title: 'DB Kiana - Virtuelle Assistenz im ÖPNV',
    date: '2025-09-12',
    time: { start: '13:30', end: '13:50' },
    location: { hall: null, area: 'Königsplatz ZNV Bühne', booth: null },
    organizer: { name: null },
    summary: 'Vorstellung der virtuellen Assistenzlösung DB Kiana für den öffentlichen Nahverkehr.'
    },
    {
    id: 'mitgestalten-aushandeln-erleben-mobilitaetszukuenfte-im-strassenraum',
    title: 'Mitgestalten, aushandeln, erleben – Mobilitätszukünfte im Straßenraum',
    date: '2025-09-12',
    time: { start: '14:00', end: '14:15' },
    location: { hall: null, area: 'Königsplatz ZNV Bühne', booth: null },
    organizer: { name: null },
    summary: 'Kurzvortrag über die Gestaltung zukünftiger Mobilität im Straßenraum.'
    },
    {
    id: 'mehr-als-wohnen-wie-zukuenftige-stadtviertel-umwelt-und-gesellschaft-verbinden',
    title: 'Mehr als Wohnen - wie zukünftige Stadtviertel Umwelt und Gesellschaft verbinden',
    date: '2025-09-12',
    time: { start: '14:00', end: '14:30' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: null },
    summary: 'Vortrag von Susanne Kraus über nachhaltige Stadtviertel, die Umwelt und Gesellschaft verbinden.'
    },
    {
    id: 'karriere-aber-bitte-ohne-bullshit',
    title: 'Karriere – aber bitte ohne Bullshit!',
    date: '2025-09-12',
    time: { start: '14:00', end: '14:45' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: null },
    summary: 'Diskussion über authentische Karrierewege ohne leere Versprechen.'
    },
    {
    id: 'die-15-minuten-stadt-wie-vernetzte-quartiere-staedte-wie-muenchen-lebenswerter-machen',
    title: 'Die 15-Minuten-Stadt : Wie vernetzte Quartiere Städte wie München lebenswerter machen',
    date: '2025-09-12',
    time: { start: '14:15', end: '14:45' },
    location: { hall: null, area: 'Königsplatz ZNV Bühne', booth: null },
    organizer: { name: null },
    summary: 'Vortrag und Diskussion über die Vorteile vernetzter Quartiere für lebenswerte Städte.'
    },
    {
    id: 'inklusionsrundgang-die-stadt-aus-einer-neuen-perspektive-erleben-unterwegs-mit-gehoerlosigkeit',
    title: 'Inklusionsrundgang: Die Stadt aus einer neuen Perspektive erleben – Unterwegs mit Gehörlosigkeit',
    date: '2025-09-12',
    time: { start: '14:15', end: '15:30' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: null },
    summary: 'Geführter Rundgang zur Erfahrung der Stadt aus der Perspektive von Menschen mit Gehörlosigkeit.'
    },
    {
    id: 'vom-drahtesel-zum-high-tech-vehikel-sicher-mit-dem-fahrrad-unterwegs',
    title: 'Vom Drahtesel zum High-Tech-Vehikel: Sicher mit dem Fahrrad unterwegs',
    date: '2025-09-12',
    time: { start: '14:45', end: '15:15' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: null },
    summary: 'Diskussion über die Sicherheit beim Radfahren und die Entwicklung vom klassischen Fahrrad zum High-Tech-Vehikel.'
    },
    
    {
    id: 'mit-drive-in-deine-mobility-karriere-frauen-gestalten-die-zukunft-der-mobilitaet',
    title: 'Mit Drive in Deine Mobility-Karriere: Frauen gestalten die Zukunft der Mobilität',
    date: '2025-09-12',
    time: { start: '15:00', end: '16:00' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: 'Frauen Verbinden' },
    summary: 'Diskussion über die Rolle von Frauen bei der Gestaltung der zukünftigen Mobilität.'
    },
    {
    id: 'the-next-level-of-mobility-internationale-einblicke-in-moderne-mobilitaet-mit-seilbahnen',
    title: 'The next level of mobility: Internationale Einblicke in moderne Mobilität mit Seilbahnen',
    date: '2025-09-12',
    time: { start: '15:30', end: '16:00' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: null },
    summary: 'Vortrag über internationale Erfahrungen mit moderner Mobilität durch Seilbahnen.'
    },
    {
    id: 'live-podcast-ticket-to-anywhere-lets-talk-nahverkehr',
    title: 'Live-Podcast: “Ticket to Anywhere – Let’s talk Nahverkehr"',
    date: '2025-09-12',
    time: { start: '16:15', end: '17:00' },
    location: { hall: null, area: 'Königsplatz ZNV Bühne', booth: null },
    organizer: { name: null },
    summary: 'Podcast-Aufzeichnung mit Maximilian Mundt zum Thema Nahverkehr.'
    },
    {
    id: 'muenchen-von-morgen-politische-perspektiven-im-gespraech',
    title: 'München von morgen – Politische Perspektiven im Gespräch',
    date: '2025-09-12',
    time: { start: '16:15', end: '17:00' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: null },
    summary: 'Podiumsdiskussion über politische Perspektiven zur Mobilität in München.'
    },
    {
    id: 'beats-and-business-das-networking-event-zum-iaa-career-day',
    title: 'Beats & Business - das Networking Event zum IAA Career Day',
    date: '2025-09-12',
    time: { start: '16:30', end: '18:00' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: null },
    summary: 'Networking-Event mit Musik von DJ Felix Meindorfer zum IAA Career Day.'
    },
    {
    id: 'lebenswerte-staedte-statt-strassenlaerm-was-wir-weltweit-ueber-mobilitaet-lernen-koennen',
    title: 'Lebenswerte Städte statt Straßenlärm: Was wir weltweit über Mobilität lernen können',
    date: '2025-09-12',
    time: { start: '17:15', end: '18:00' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: null },
    summary: 'Vortrag von Kristian Skovbakke Villadsen über internationale Mobilitätslösungen für lebenswerte Städte.'
    },
    {
    id: 'olympia-bewegt-muenchen-chancen-eines-nachhaltigen-mobilitaetskonzepts-fuer-muenchen-und-die-region',
    title: 'Olympia bewegt München: Chancen eines nachhaltigen Mobilitätskonzepts für München und die Region',
    date: '2025-09-12',
    time: { start: '18:15', end: '19:00' },
    location: { hall: null, area: 'Marienplatz (Citizens Lab) Citizens Lab', booth: null },
    organizer: { name: null },
    summary: 'Podiumsdiskussion über nachhaltige Mobilitätskonzepte im Zusammenhang mit Olympia in München.'
    },
    {
    id: 'alice-viola',
    title: 'Alice Viola',
    date: '2025-09-12',
    time: { start: '18:30', end: '19:30' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: null },
    summary: 'Musikauftritt der Künstlerin Alice Viola auf der Siegestor Bühne.'
    },
    {
    id: 'micha-fritz-fail-forward-fritz',
    title: 'Micha Fritz: "Fail Forward Fritz"',
    date: '2025-09-12',
    time: { start: '19:00', end: '20:30' },
    location: { hall: null, area: 'Königsplatz ZNV Bühne', booth: null },
    organizer: { name: null },
    summary: 'Auftritt von Michael Fritz mit seiner Edutainment-Show "Fail Forward Fritz".'
    },
    {
    id: 'cellz',
    title: 'Cellz',
    date: '2025-09-12',
    time: { start: '20:00', end: '21:00' },
    location: { hall: null, area: 'Geschwister-Scholl-Platz Siegestor Bühne', booth: null },
    organizer: { name: null },
    summary: 'Musikauftritt der Band Cellz auf der Siegestor Bühne.'
    }
    
    
    
    
    
    
    
];


