export type ExhibitorLocation = {
  type: string;
  hallOrPlace: string;
  booth: string;
};

export type Exhibitor = {
  id: string;
  name: string;
  keywords: string[];
  location: ExhibitorLocation;
  role: string;
  profile: string;
  themes: string[];
  address?: string;
  website?: string;
  emails?: string[];
};

// Beispiel-Eintrag. Erweitere diese Liste mit deinem Datenbestand im exakt gleichen Schema.
export const EXHIBITORS_DB: Exhibitor[] = [
  {
    id: "christen-in-der-automobilindustrie-cai-ev",
    name: "Christen in der Automobilindustrie (CAI) e.V.",
    keywords: [
      "werte-gesteuerte mobilität",
      "christliche grundwerte",
      "netzwerk",
      "mobilitätsvorstellungen",
      "stakeholder",
      "umfrage",
      "werte-summit",
      "café-bus",
      "segen",
      "regulation",
      "liability",
      "esgs",
      "inclusion"
],
    location: { type: "Summit", hallOrPlace: "Atrium", booth: "B01" },
    role: "Hauptaussteller",
    profile:
      "Das Netzwerk Christen in der Automobilindustrie e.V. (CAI) gibt der modernen Mobilität in Verantwortung vor Gott und den Menschen eine neue Perspektive. Auf der IAA leisten wir einen Beitrag dazu, das Gegeneinander in den Mobilitätsvorstellungen zu überwinden. Mit unserem Motto: „It´s all about Value driven Mobility“ fokussieren wir das diesjährige Leitthema der IAA auf die Stakeholder.",
    themes: ["Regulation, Liability & ESGs", "Inclusion"],
    address: "Kirchstraße 23, 29221 Celle, Deutschland",
    website: "www.c-a-i.info",
    emails: ["info@c-a-i.info", "1.vorsitzender@c-a-i.info", "2.vorsitzender@c-a-i.info"],
  },

  {
id: 'calb',
name: 'CALB',
keywords: ['lithium batteries', 'battery management systems', 'energy operation system', 'product solutions', 'life-cycle management', 'new energy market', 'power storage', 'energy storage', 'technological innovation', 'material technology', 'structure technology', 'manufacturing technology', 'ecological health', 'technology r&d', 'industrialization projects', 'global influence'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'B20'
},
role: 'Hauptaussteller',
profile: 'CALB is a new energy enterprise specializing in the research, production, sales, and market application development of lithium batteries, battery management systems, and related integrated products and lithium battery materials. As Battery Expert, we aim to build a comprehensive energy operation system, to provide complete product solutions and full life-cycle management for the new energy application market, represented by power and energy storage.',
themes: [],
address: 'Changzhou City, Jintan District, No.1 Jiangdong Ave., 213000 Jiangsu, China',
website: 'en.calb-tech.com/',
emails: []
},
{
id: 'camel-energy-gmbh',
name: 'Camel Energy GmbH',
keywords: ['batterielösungen', 'automobilsektor', 'mobilitätssektor', 'batterietechnologien', 'energiespeichersysteme', 'niedervolt-blei-säure-batterien', 'lithium-ionen-batterien', 'batteriezellen', 'batterie-management-systeme', 'maßgeschneiderte batterielösungen', 'pkw', 'nutzfahrzeuge', 'elektrofahrzeuge', 'wohnmobile', 'boote', 'golfwagen', 'spezialfahrzeuge', 'energiespeichersysteme', 'netzunabhängigkeit', 'versorgungssicherheit', 'oem-partner', 'aftermarket-partner', 'eu-normen', 'sicherheit', 'qualität', 'umweltverträglichkeit', 'automotive', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C25'
},
role: 'Hauptaussteller',
profile: 'Camel Energy GmbH (CEG), der europäische Hauptsitz der Camel Group, ist ein führender Anbieter innovativer Batterietechnologien und Energiespeichersysteme für Automobil-, Mobilitäts- und erneuerbare Energiemärkte. Mit über 40 Jahren Erfahrung bietet CEG ein breites Portfolio an Batterien und maßgeschneiderten Lösungen. Als zuverlässiger OEM- und Aftermarket-Partner erfüllt CEG alle relevanten EU-Normen.',
themes: ['Automotive', 'Battery Tech'],
address: 'Notburgastr. 3, 80639 München, Deutschland',
website: 'www.camelenergy.de',
emails: ['info@camelenergy.de', 'markus.ehrhardt@camelenergy.de', 'charaf.bennani@camelenergy.de', 'scott.wei@chinacamel.com']
},
{
id: 'can-am',
name: 'Can Am',
keywords: ['cycling', 'open space', 'hauptaussteller'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS440'
},
role: 'Hauptaussteller',
profile: 'Can Am ist ein Hauptaussteller im Open Space der IAA MOBILITY 2025, spezialisiert auf Cycling.',
themes: [],
address: 'Alte Papierfabrik 16, 40699 Erkrath, Deutschland',
website: 'www.brp.com',
emails: []
},
{
id: 'canel-automotive',
name: 'Canel Automotive',
keywords: ['aluminium solutions', 'automotive industry', 'aluminum extrusion', 'die casting', 'railway solutions', 'innovation', 'efficiency', 'versatile partner', 'supplier', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D20'
},
role: 'Mitaussteller',
profile: 'Yesilova Group united four industry leaders in Aluminum extrusion, die casting, automotive and railway solutions. This integration streamlines our services, enhances innovation, and boosts efficiency.',
themes: ['Automotive', 'Supplier', 'Battery Tech'],
address: 'Hasanağa OSB Mah. 12. Cad. No: 4/2 Nilüfer, 16159 Bursa, Türkei',
website: 'www.canelotomotiv.com.tr',
emails: ['canelotomotiv@yesilova.com.tr', 'orhan.simsek@canelotomotiv.com.tr', 'asli.kok@canelotomotiv.com.tr', 'taha.tas@canelotomotiv.com.tr']
},
{
id: 'capgemini',
name: 'Capgemini',
keywords: ['business-transformation', 'technology-transformation', 'digitale transformation', 'nachhaltige transformation', 'circular economy', 'decarbonization', 'manufacturing', 'supply chain', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'battery tech', 'cybersecurity'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'B22'
},
role: 'Hauptaussteller',
profile: 'Capgemini ist ein globaler Business- und Technologie-Transformationspartner für Organisationen. Das Unternehmen unterstützt diese bei ihrer dualen Transformation für eine stärker digitale und nachhaltige Welt.',
themes: ['Circular Economy', 'Decarbonization', 'Manufacturing & Supply Chain', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Battery Tech', 'Cybersecurity'],
address: 'Potsdamer Platz 5, 10785 Berlin, Deutschland',
website: 'www.capgemini.com/news/events/iaa-mobility-2025/',
emails: ['markus.wild@capgemini.com', 'larissa.schediwy@capgemini.com', 'mark.wendling@capgemini.com']
},
{
id: 'carbmee-gmbh',
name: 'Carbmee GmbH',
keywords: ['carbon management', 'net-zero enterprise', 'environmental management', 'ontology-driven data model', 'erp integration', 'procurement integration', 'traceability', 'auditability', 'process automation', 'carbon compliance', 'emission tracking', 'sustainability'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D135'
},
role: 'Hauptaussteller',
profile: 'Carbmee EIS delivers the foundational architecture for environmental management—equivalent to what ERP systems provide for finance or operations. With an ontology-driven data model and transactional integration across ERP and procurement, the EIS enables complete traceability, auditability, and process automation for carbon and compliance.',
themes: [],
address: 'Rosenthaler Straße 36, 10178 Berlin, Deutschland',
website: 'www.carbmee.com',
emails: []
},
{
id: 'carbonify',
name: 'carbonify',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D104'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Lochhamer Schlag 11A, 82166 Gräfelfing, Deutschland',
website: 'www.carbonify.de',
emails: []
},
{
id: 'caresoft-global',
name: 'Caresoft Global',
keywords: ['automotive', 'supplier', 'software defined vehicles', 'ai', 'genai', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'B01'
},
role: 'Hauptaussteller',
profile: 'Caresoft Global ist ein führender Anbieter im Bereich Automotive und Software Defined Vehicles. Das Unternehmen bietet innovative Lösungen in den Bereichen AI, GenAI und Battery Tech.',
themes: ['Automotive', 'Supplier', 'Software Defined Vehicles', 'AI & GenAI', 'Battery Tech'],
address: 'Plot 1-3 Brome Industrial Park, Brome, Suffolk IP23 7HN, Großbritannien',
website: 'www.caresoftglobal.com',
emails: ['sales@caresoftglobal.com']
},
{
id: 'cargo-runner-schmitt-landtechnik-gmbh-co-kg',
name: 'Cargo Runner - Schmitt Landtechnik GmbH & Co KG',
keywords: ['elektrofahrzeuge', 'lastentransporter', 'micromobility'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'A10'
},
role: 'Hauptaussteller',
profile: 'Cargo Runner - Schmitt Landtechnik GmbH & Co KG bietet Elektrofahrzeuge und Lastentransporter an.',
themes: ['Micromobility'],
address: 'Bayernstraße 2, 97334 Sommerach, Deutschland',
website: 'www.cargo-runner.de',
emails: ['info@schmitt-landtechnik.de']
},
{
id: 'carlinx',
name: 'CARLINX',
keywords: ['automotive digital service', 'intelligent service provider', 'vehicle lifecycle services', 'vehicle-cloud platform', 'ai agent services', 'data commercialization', 'volume production projects', 'partnerships with automakers', 'digital solutions', 'geely', 'dongfeng', 'baic', 'chery', 'volvo', 'lotus', 'smart', 'jiangling ford', 'software defined vehicles', 'ai', 'genai', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D134'
},
role: 'Hauptaussteller',
profile: 'Carlinx offers full vehicle lifecycle services through an integrated vehicle-cloud platform, AI agent services, and data commercialization. It has participated in volume production projects and maintains long-term partnerships with top automakers. Driven by innovation, Carlinx delivers advanced digital solutions throughout the vehicle lifecycle.',
themes: ['Automotive', 'Supplier', 'Software Defined Vehicles', 'AI & GenAI', 'Future Drive Technologies incl. H2'],
address: 'No. 459 Qianmo Road, Binjiang District, 310000 Hangzhou, China',
website: 'www.carlinx.cn/',
emails: ['liuyang1@carlinx.cn']
},
{
id: 'carlor-estech-gmbh',
name: 'Carlor ESTech GmbH',
keywords: ['hardwareentwicklung', 'emv-design', 'applikationssoftware', 'buskommunikation', 'led', 'automobilelektronik', 'smart-rgb led', 'pcb', 'automobilkomponenten', 'smart-rgb-led-beleuchtung', 'narva', 'entwicklungspartner', 'forschung und entwicklung', 'technologische exzellenz', 'f&e-managementsystem', 'maßgeschneiderte lösungen', 'serienreife', 'automotive', 'smart city mobility', 'smart country mobility', 'road safety', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C310'
},
role: 'Hauptaussteller',
profile: 'Die Carlor ESTech GmbH steht für über ein Jahrzehnt an Erfahrung in der Forschung und Entwicklung im Bereich Automobilelektronik. Unser interdisziplinäres Team aus erfahrenen Hardware- und Softwareentwicklern vereint technologische Exzellenz mit einem effizienten F&E-Managementsystem. Als zuverlässiger Entwicklungspartner unterstützen wir unsere Kunden mit hochwertigen, innovativen und praxisnahen Lösungen – von der Idee bis zur Serienreife.',
themes: ['Automotive', 'Smart City Mobility', 'Smart Country Mobility', 'Road Safety', 'Supplier'],
address: 'Benzstraße. 2, 72636 Frickenhausen, Deutschland',
website: 'www.carlorestech.com',
emails: []
},
{
id: 'carux-technology-pte-ltd',
name: 'CarUX Technology Pte. Ltd.',
keywords: ['smart cockpit vision solutions', 'oem', 'tier-1', 'in-car user experience', 'displays', 'seamless integration', 'input methods', 'autonomous driving', 'in-cabin experiences', 'mobility', 'cockpit solutions', 'automotive', 'manufacturing', 'supply chain', 'supplier', 'software defined vehicles', 'connectivity', 'iot', 'big data', 'entertainment', 'vr'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'CarUX is a leading designer and manufacturer of smart cockpit vision solutions, trusted by major OEMs for over 20 years. As an established Tier 1 partner, CarUX specializes in enhancing the in-car user experience and offers this through best in class displays, seamless integration and effective input methods.',
themes: ['Automotive', 'Manufacturing & Supply Chain', 'Supplier', 'Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'Entertainment & VR'],
address: '10 Kallang Avenue, #09 – 16/18 APERIA, Singapore 339510, Singapur',
website: 'carux.com',
emails: ['info@carux.com', 'iaamobility@carux.com']
},
{
id: 'castman-co-ltd',
name: 'CASTMAN CO., LTD',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '421-24, Mado-ro, Mado-myeon, Hwaseong-si, Gyeonggi-do 18544, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'bmw-group',
name: 'BMW GROUP',
keywords: ['automobile', 'test drives', 'family', 'mobility', 'automotive industry', 'innovation', 'open space', 'summit', 'hauptaussteller'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'E01'
},
role: 'Hauptaussteller',
profile: 'BMW GROUP is a leading global automobile manufacturer known for its innovative vehicles and mobility solutions.',
themes: [],
address: '80809 München, Deutschland',
website: undefined,
emails: []
},
{
id: 'bmw-group',
name: 'BMW GROUP',
keywords: ['automotive', 'test drives', 'family', 'mobility', 'vehicles', 'innovation', 'transportation', 'open space', 'summit', 'exhibitor', 'main exhibitor'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'E01'
},
role: 'Hauptaussteller',
profile: 'BMW GROUP is a leading automotive company offering innovative solutions in mobility and transportation.',
themes: [],
address: '80809 München, Deutschland',
website: undefined,
emails: []
},
{
id: 'catl-contemporary-amperex-technology-co-ltd',
name: 'CATL | Contemporary Amperex Technology Co., Ltd.',
keywords: ['new energy', 'renewable energy', 'storage solutions', 'power battery systems', 'electrification', 'intelligent technologies', 'sustainable energy', 'power battery supplier', 'energy storage battery', 'automotive', 'mobility as a service', 'circular economy', 'decarbonization', 'regulation', 'liability', 'esgs', 'manufacturing', 'supply chain', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'C01'
},
role: 'Hauptaussteller',
profile: 'CATL is a global leader in new energy innovative technology. As a global leader in new energy innovation, CATL drives transformation through three core strategic pillars. Supported by four dedicated innovation systems, we deliver cutting-edge solutions accelerating global sustainable energy adoption.',
themes: ['Automotive', 'Mobility as a Service', 'Circular Economy', 'Decarbonization', 'Regulation, Liability & ESGs', 'Manufacturing & Supply Chain', 'Battery Tech'],
address: 'No.2 Xingang Road, Zhangwan Town Jiaocheng District, 352100 Ningde City, Fujian, China',
website: 'www.catl.com',
emails: []
},
{
id: 'cellcentric-gmbh-co-kg',
name: 'cellcentric GmbH & Co. KG',
keywords: ['brennstoffzellensysteme', 'brennstoffzellentechnologie', 'forschung und entwicklung', 'produktion', 'vermarktung', 'klimaneutrale mobilität', 'nachhaltige mobilität', 'future drive technologies', 'h2', 'zulieferer', 'antriebs-/motorenteile', 'teile für elektrische antriebe', 'brennstoffzellen-antriebssysteme', 'brennstoffzelle allgemein'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'cellcentric entwickelt, produziert und vermarktet Brennstoffzellensysteme. Basierend auf einem tiefgreifenden und langjährigen Know-how in der Brennstoffzellentechnologie ist cellcentric, ein 50:50-Joint Venture zwischen der Daimler Truck AG und der Volvo Group – für sämtliche Aktivitäten entlang der gesamten Wertschöpfungskette von Brennstoffzellensystemen verantwortlich.',
themes: ['Future Drive Technologies incl. H2'],
address: 'Neue Str. 95, 73230 Kirchheim/Teck, Deutschland',
website: 'www.cellcentric.net',
emails: ['contact@cellcentric.net']
},
{
id: 'centre-for-garment-production-limited',
name: 'Centre for Garment Production Limited',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B24'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Units 1215-1220, 12/F, Building 19W, Hong Kong Science Park, Pak Shek Kok, 000000 Hong Kong, China',
website: undefined,
emails: []
},
{
id: 'centre-for-garment-production-limited',
name: 'Centre for Garment Production Limited',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B24'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Units 1215-1220, 12/F, Building 19W, Hong Kong Science Park, Pak Shek Kok, 000000 Hong Kong, China',
website: undefined,
emails: []
},
{
id: 'certivity-gmbh',
name: 'Certivity GmbH',
keywords: ['ki-basierte software', 'technical compliance', 'oem', 'tier n zulieferer', 'globale vorschriften', 'normen', 'interne richtlinien', 'produktentwicklungszyklus', 'fahrzeugsicherheit', 'emissionen', 'elektrische systeme', 'jama', 'doors', 'polarion', 'regulation', 'liability', 'esgs', 'international trade', 'markets', 'connectivity', 'iot', 'big data', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D150'
},
role: 'Hauptaussteller',
profile: 'Certivity ist eine Software Firma, das eine KI-basierte Plattform entwickelt hat, mit der OEMs und Tier N Zulieferer technische Compliance schnell, präzise und nachvollziehbar managen können. Die Software analysiert globale Vorschriften, Normen sowie OEM-spezifische Dokumente etwa interne Richtlinien und liefert strukturierte, umsetzbare Anforderungen und Compliance-Daten entlang des gesamten Produktentwicklungszyklus. Speziell für die Komplexität der Automobilbranche entwickelt, identifiziert Certivity relevante Vorschriften, extrahiert Anforderungen und verfolgt Änderungen und reduziert so den manuellen Aufwand um bis zu 75 %.',
themes: ['Regulation, Liability & ESGs', 'International Trade and Markets', 'Connectivity, IoT & Big Data', 'AI & GenAI'],
address: 'St. Martin Str. 59, 4. OG, 81669 München, Deutschland',
website: 'www.certivity.io',
emails: ['contact@certiviy.io', 'nwaegerle@certivity.io', 'lmathias@certivity.io']
},
{
id: 'changan-gmbh',
name: 'Changan GmbH',
keywords: [],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP165'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Georg-Brauchle-Ring 56-58, 80992 München, Deutschland',
website: 'www.changaneurope.com/de',
emails: []
},
{
id: 'changan-co-ltd',
name: 'Changan Co., Ltd',
keywords: ['chinesische automobilgruppe', 'autohersteller', 'changan uni', 'changan nevo', 'changan lcv', 'deepal', 'avatr', 'changan ford', 'changan mazda', 'jmc', 'forschung und entwicklung', 'intelligente mobilität', 'niedrigemissionsfahrzeuge', 'innovation', 'unternehmertum', 'automotive', 'smart city mobility'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D40'
},
role: 'Hauptaussteller',
profile: 'CHANGAN Automobile is one of the four major Chinese automobile groups, with 40 years of car manufacturing experience. It has self-owned brands including CHANGAN UNI, CHANGAN NEVO, CHANGAN LCV, DEEPAL, AVATR, and joint venture brands including CHANGAN Ford, CHANGAN Mazda, and JMC. In 2021, the cumulative sales of CHANGAN\'s self-owned brand exceeded 20 million units.',
themes: ['Automotive', 'Smart City Mobility'],
address: 'Jianxingdonglu 260 Jiangbei District, 400023 Chongqing, China',
website: 'www.globalchangan.com',
emails: ['810349497@qq.com']
},
{
id: 'cijan',
name: 'Cijan',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D21'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Xipingtou Industry Zone, 474450 Nanyang, China',
website: 'www.cijan.com.cn',
emails: []
},
{
id: 'c-intertia',
name: 'C-INTERTIA',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'D10'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '31 PARC DU GOLF, 31290 Aix en Provence, Frankreich',
website: undefined,
emails: []
},
{
id: 'circunomics',
name: 'Circunomics',
keywords: ['startup', 'hauptaussteller'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D101'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Große Bleiche 15, 55116 Mainz, Deutschland',
website: 'www.circunomics.com',
emails: []
},
{
id: 'clarios',
name: 'Clarios',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'B12'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Am Leineufer 51, 30419 Hannover, Deutschland',
website: 'www.clarios.com',
emails: []
},
{
id: 'clarios',
name: 'Clarios',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'B12'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Am Leineufer 51, 30419 Hannover, Deutschland',
website: 'www.clarios.com',
emails: []
},
{
id: 'clemson-university',
name: 'Clemson University',
keywords: ['automotive r&d', 'education', 'global research institution', 'corporate partnerships', 'technology development', 'talent development', 'cu-icar', 'ph.d. program', 'automotive engineering', 'university research park', 'mobility industry', 'innovation', 'global automotive companies', 'suppliers'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'B21'
},
role: 'Mitaussteller',
profile: 'Clemson University is a leading global research institution educating and empowering more than 28,400 undergraduate and graduate students. Clemson has a strong commitment to corporate partnerships, working closely with global automotive companies and suppliers. The Clemson University International Center for Automotive Research (CU-ICAR) is home to the first Ph.D. program in Automotive Engineering.',
themes: [],
address: '105 Sikes Hall, Clemson, SC 29634, Clemson, SC 29634, USA',
website: undefined,
emails: []
},
{
id: 'cloud-wise',
name: 'Cloud-wise',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C12'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Atir Yeda 15, 4442211 Kfar Saba, Israel',
website: 'www.cloud-wise.com/',
emails: []
},
{
id: 'cluster-mobility-logistics',
name: 'Cluster Mobility & Logistics',
keywords: ['technologiecluster', 'mobilität', 'logistik', 'netzwerk', 'technologieführer', 'innovatoren', 'strategische projektpartner', 'internationale kooperationen', 'forschungsprojekte', 'wettbewerbsvorteile', 'marktchancen', 'innovationsmotor', 'automotive', 'smart city mobility', 'decarbonization', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E11'
},
role: 'Hauptaussteller',
profile: 'Als Spitzencluster entwickeln wir wegweisende Lösungen für die Herausforderungen in der Mobilität und Logistik von morgen. Gemeinsam mit unseren Partnern und Mitgliedern schaffen wir innovative Antworten auf die technologischen Herausforderungen unserer Zeit. Durch unsere umfassende Expertise und starke Vernetzung positionieren wir das Cluster als einen der führenden Innovationsmotoren für zukunftsweisende Technologien.',
themes: ['Automotive', 'Smart City Mobility', 'Decarbonization', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Future Drive Technologies incl. H2'],
address: 'Franz-Mayer-Str. 1, 93053 Regensburg, Deutschland',
website: 'www.mobilitylogistics.de',
emails: ['maria.hirschberger@techbase.de']
},
{
id: 'coastr',
name: 'Coastr',
keywords: ['startup', 'hauptaussteller'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C305'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: '84 Commercial Street, Leith, Edinburgh EH6 6LX, Großbritannien',
website: undefined,
emails: []
},
{
id: 'bmw-group',
name: 'BMW GROUP',
keywords: ['automotive', 'test drives', 'family', 'mobility', 'innovation', 'vehicles', 'transportation', 'open space', 'summit', 'exhibitor', 'main exhibitor'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'E01'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: '80809 München, Deutschland',
website: undefined,
emails: []
},
{
id: 'cognibit',
name: 'cogniBIT',
keywords: ['kognitive ki', 'autonome systeme', 'menschliches verhalten', 'verkehrssimulation', 'neurowissenschaften', 'machine learning', 'verhaltensmodelle', 'cognibot', 'cogniprove', 'verifikation und validierung', 'human intent prediction module', 'autonome mobilität', 'automotive', 'public transport', 'road safety', 'supplier', 'software defined vehicles', 'autonomous driving', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D134'
},
role: 'Hauptaussteller',
profile: 'cogniBIT entwickelt kognitive KI, die menschliches Verhalten im Verkehr realistisch simuliert und vorhersagt. Unsere patentierte Technologie verbindet Neurowissenschaften mit Machine Learning und bildet Wahrnehmung, Aufmerksamkeit und Entscheidungen so ab, wie sie beim Menschen tatsächlich ablaufen – selbst in kritischen Edge Cases. Mit dem Human Intent Prediction Module (HIP) bringen wir diese Intelligenz ins Fahrzeug: Es erkennt Absichten anderer Verkehrsteilnehmer in Echtzeit und ermöglicht proaktive, sichere Entscheidungen.',
themes: ['Automotive', 'Public Transport', 'Road Safety', 'Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'AI & GenAI'],
address: 'Agnes-Pockels-Bogen 1, 80992 München, Deutschland',
website: 'www.cognibit.ai',
emails: ['info@cognibit.ai', 'andreas.dirring@cognibit.ai', 'tobias.quente@cognibit.ai']
},
{
id: 'cognibit',
name: 'cogniBIT',
keywords: ['kognitive ki', 'autonome systeme', 'menschliches verhalten', 'verkehrssimulation', 'neurowissenschaften', 'machine learning', 'verhaltensmodelle', 'cognibot', 'cogniprove', 'verifikation und validierung', 'human intent prediction module', 'autonome mobilität', 'automotive', 'public transport', 'road safety', 'supplier', 'software defined vehicles', 'autonomous driving', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D134'
},
role: 'Hauptaussteller',
profile: 'cogniBIT entwickelt kognitive KI, die menschliches Verhalten im Verkehr realistisch simuliert und vorhersagt. Unsere patentierte Technologie verbindet Neurowissenschaften mit Machine Learning und bildet Wahrnehmung, Aufmerksamkeit und Entscheidungen so ab, wie sie beim Menschen tatsächlich ablaufen – selbst in kritischen Edge Cases. Mit dem Human Intent Prediction Module (HIP) bringen wir diese Intelligenz ins Fahrzeug: Es erkennt Absichten anderer Verkehrsteilnehmer in Echtzeit und ermöglicht proaktive, sichere Entscheidungen.',
themes: ['Automotive', 'Public Transport', 'Road Safety', 'Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'AI & GenAI'],
address: 'Agnes-Pockels-Bogen 1, 80992 München, Deutschland',
website: 'www.cognibit.ai',
emails: ['info@cognibit.ai', 'andreas.dirring@cognibit.ai', 'tobias.quente@cognibit.ai']
},
{
id: 'compal-usa-inc',
name: 'Compal USA, INC',
keywords: ['cdat ai perception stack', 'deep learning algorithms', 'object detection', 'object tracking', 'action prediction', 'adas functions', 'pedestrian automatic emergency braking', 'forward collision warning', 'level 2 driving', 'level 2.5 hands-free driving', 'level 3 eyes-off hands-off driving', 'level 4 full-self-driving', 'pedestrians', 'motorcycles', 'cars', 'bikes', 'trucks', 'buses', 'automotive', 'road safety', 'autonomous driving', 'semiconductors', 'chips'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'C40'
},
role: 'Mitaussteller',
profile: 'Compal’s CDAT AI perception stack is based on deep learning algorithms for object detection, combined with object tracking and action prediction to obtain object information. The system enables ADAS functions, including Pedestrian Automatic Emergency Braking (P-AEB), to avoid a collision.',
themes: ['Automotive', 'Road Safety', 'Autonomous Driving', 'Semiconductors & Chips'],
address: '1 Technology Way, Logansport 46947, USA',
website: 'www.compal.com/aep/en/',
emails: ['richard_seoane@compalusa.com', 'stuart_klapper@compalusa.com', 'christof_buettner@compaleu.com']
},
{
id: 'compredict',
name: 'COMPREDICT',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'CZ312'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Rheinstr. 40-42, 64283 Darmstadt, Deutschland',
website: 'www.compredict.ai',
emails: []
},
{
id: 'compredict',
name: 'COMPREDICT',
keywords: ['startup', 'hauptaussteller', 'mobility', 'automotive', 'software', 'predictive maintenance', 'datenanalyse', 'fahrzeugdiagnose', 'digitaler zwilling', 'künstliche intelligenz', 'maschinelles lernen', 'iot', 'datenplattform', 'flottenmanagement', 'energieeffizienz', 'fahrzeugüberwachung', 'zustandsüberwachung', 'datenintegration', 'cloudlösungen', 'datenvisualisierung'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C312'
},
role: 'Hauptaussteller',
profile: 'COMPREDICT bietet innovative Softwarelösungen für die Automobilindustrie, die auf künstlicher Intelligenz und maschinellem Lernen basieren. Das Unternehmen spezialisiert sich auf digitale Zwillinge und prädiktive Wartung, um die Effizienz und Sicherheit von Fahrzeugen zu verbessern.',
themes: [],
address: 'Birkenweg 14a, 64295 Darmstadt, Deutschland',
website: 'compredict.ai',
emails: ['contact@compredict.de']
},
{
id: 'connected-wise',
name: 'Connected Wise',
keywords: ['startup', 'connected technology', 'mobility solutions', 'innovation', 'transportation', 'smart systems', 'digital transformation', 'automotive', 'networking', 'data analytics', 'iot', 'cloud services', 'software development', 'integration', 'automation', 'sustainability', 'future mobility', 'urban mobility', 'connectivity', 'intelligent transport systems'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D110'
},
role: 'Hauptaussteller',
profile: 'Connected Wise is a leading startup in the field of connected technology, offering innovative mobility solutions. The company focuses on digital transformation and smart systems for the transportation industry.',
themes: [],
address: '3251 Progress Drive Rm138A, Orlando, FL 32826, USA',
website: 'www.connectedwise.com',
emails: []
},
{
id: 'crusoe',
name: 'Crusoe',
keywords: ['ai infrastructure', 'clean energy', 'data centers', 'environmentally friendly', 'scalable solutions', 'cost-effective', 'ai potential', 'energy abundance', 'intelligence', 'ai-optimized'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C04'
},
role: 'Hauptaussteller',
profile: 'Crusoe provides a reliable, scalable, cost-effective, and environmentally friendly solution for AI infrastructure by harnessing large-scale clean energy. Crusoe empowers its customers to build the future faster.',
themes: ['AI & GenAI'],
address: '255 Fillmore St, Denver, CO 80206, USA',
website: 'www.crusoe.ai',
emails: []
},
{
id: 'crusoe',
name: 'Crusoe',
keywords: ['ai infrastructure', 'clean energy', 'data centers', 'environmentally friendly', 'scalable solutions', 'cost-effective', 'ai potential', 'energy abundance', 'intelligence', 'ai-optimized'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C04'
},
role: 'Hauptaussteller',
profile: 'Crusoe is on a mission to accelerate the abundance of energy and intelligence. Crusoe provides a reliable, scalable, cost-effective, and environmentally friendly solution for AI infrastructure by harnessing large-scale clean energy, building AI-optimized data centers, and empowering builders to reach their AI potential.',
themes: ['AI & GenAI'],
address: '255 Fillmore St, Denver, CO 80206, USA',
website: 'www.crusoe.ai',
emails: []
},
{
id: 'cyberjoin-mpa-uni-stuttgart',
name: 'CyberJoin - MPA Uni Stuttgart',
keywords: ['fügetechnik', 'e-mobilität', 'automobilindustrie', 'zulieferindustrie', 'leichtbau', 'co2-neutralität', 'wissenstransfer', 'werkstofftechnologien', 'fertigungstechnologien', 'produktionsprozesse', 'synergien', 'wettbewerbsfähigkeit', 'automotive', 'decarbonization', 'manufacturing & supply chain', 'ai & genai', 'future drive technologies incl. h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B40'
},
role: 'Hauptaussteller',
profile: 'CyberJoin ist ein vom Bundesministerium für Wirtschaft und Energie gefördertes Innovationsnetzwerk, das Unternehmen, Forschungseinrichtungen und Institutionen im Bereich moderner Fügetechnologien miteinander verbindet. Der cyber-physische Transformations-Hub unterstützt Unternehmen der Automobil- und Zulieferindustrie auf ihrem Weg zur Elektromobilität, bei alternativen Antriebskonzepten und dem Leichtbau hin zur CO₂-Neutralität. CyberJoin bündelt die Kompetenzen seiner Partner, um innovative Lösungen zu erarbeiten und Produktionsprozesse effizienter, nachhaltiger und qualitativ hochwertiger zu machen.',
themes: ['Automotive', 'Decarbonization', 'Manufacturing & Supply Chain', 'AI & GenAI', 'Future Drive Technologies incl. H2'],
address: 'Pfaffenwaldring 32, 70569 Stuttgart, Deutschland',
website: 'www.cyberjoin.de',
emails: ['info@cyberjoin.de', 'martin.werz@mpa.uni-stuttgart.de', 'ewald.agresz@mpa.uni-stuttgart.de', 'nicole.franck@mpa.uni-stuttgart.de']
},
{
id: 'cyclic-materials-inc',
name: 'Cyclic Materials Inc.',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E25'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '70 Bond Street, Toronto M5B 1X3, Kanada',
website: 'www.cyclicmaterials.earth',
emails: []
},
{
id: '212-off-road-vehicle-co-ltd',
name: '212 Off-Road Vehicle Co., LTD',
keywords: ['off-road automobile', 'global sales network', 'tech-driven innovation', 'adventures', 'new energy off-road vehicle', 't01', 't01navigator', 'wy platform', 'three-door versions', 'pickup trucks', 'hybrid powertrains', 'wb product platform', 'cross-country travel', 'suburban camping', 'urban commuting', 'shandong weiqiao pioneering group', 'fortune global 500', 'aluminium industry', 'textile industry', 'auto sector'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'F13'
},
role: 'Hauptaussteller',
profile: '212 Off-Road Vehicle Co., Ltd. is a specialist off-road automobile company. It has hit about 50 countries and regions including Europe, the Middle East, South America, Central Asia, Southeast Asia and Africa, and is establishing its global sales network. Backed with 60 years of legendary heritage and tech-driven innovation, 212 is committed to empowering customers to embark on their long-cherished adventures.',
themes: ['Automotive', 'LEV', 'Smart City Mobility'],
address: '568, Jiushui East Road Qingdao, Shandong Province, China, 266000 Qingdao, China',
website: undefined,
emails: ['info@bawauto.com', 'cliff@bawauto.com', 'liyueru@212.com.cn', 'zhangbaoxia@baw.com.cn']
},
{
id: '2electron',
name: '2electron',
keywords: ['adas', 'telematics', 'mitaussteller', 'summit'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: '2electron ist ein Mitaussteller auf der IAA MOBILITY 2025, spezialisiert auf ADAS und Telematics.',
themes: [],
address: 'Corso Lombardia 21, 10078 Venaria Reale (TO), Italien',
website: 'www.2electron.com',
emails: []
},
{
id: '3d-mapping-solutions-auffanggesellschaft',
name: '3D Mapping Solutions Auffanggesellschaft',
keywords: ['3d mapping', 'auffanggesellschaft', 'summit', 'automotive', 'mapping solutions', 'geospatial data', 'digital mapping', 'navigation systems', 'spatial analysis', 'cartography', 'data visualization', 'location services', 'mapping technology', 'gis', 'topographic mapping'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B13'
},
role: 'Mitaussteller',
profile: '3D Mapping Solutions Auffanggesellschaft ist spezialisiert auf digitale Kartierung und geospatiale Datenlösungen. Das Unternehmen bietet umfassende Dienstleistungen im Bereich der räumlichen Analyse und Kartografie an.',
themes: [],
address: 'Raiffeisenstrasse 16, 83607 Holzkirchen, Deutschland',
website: 'www.3d-mapping.de',
emails: []
},
{
id: '3d-mapping-solutions-auffanggesellschaft',
name: '3D Mapping Solutions Auffanggesellschaft',
keywords: ['3d mapping', 'auffanggesellschaft', 'summit', 'automotive', 'mapping solutions', 'geospatial data', 'holzkirchen', 'bayern', 'innovativ', 'technologie', 'navigation', 'kartierung', 'digitalisierung', 'verkehr', 'infrastruktur', 'datenanalyse'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B13'
},
role: 'Mitaussteller',
profile: '3D Mapping Solutions Auffanggesellschaft bietet innovative Lösungen im Bereich der 3D-Kartierung und Geodatenanalyse. Das Unternehmen ist spezialisiert auf die Bereitstellung von hochpräzisen digitalen Karten für die Automobilindustrie und andere Branchen.',
themes: [],
address: 'Raiffeisenstrasse 16, 83607 Holzkirchen, Deutschland',
website: 'www.3d-mapping.de',
emails: []
},
{
id: '4screen-gmbh',
name: '4.screen GmbH',
keywords: ['echtzeit-interaktion', 'fahrzeugdisplay', 'digitale plattform', 'automobilhersteller', 'digitale geschäftsmodelle', 'nutzungserlebnis', 'agnostische architektur', 'in-car-marketing', 'kontextbezogene inhalte', 'datenschutz', 'verkehrsstandards', 'sicherheitsstandards', 'mercedes-benz', 'audi', 'kia', 'hyundai', 'zeekr', 'stellantis', 'mcdonald’s', 'shell', 'waitrose', 'automotive', 'supplier', 'software defined vehicles'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D40'
},
role: 'Hauptaussteller',
profile: '4screen hat die weltweit erste digitale Plattform entwickelt, die Autofahrende in Echtzeit über das Fahrzeugdisplay mit ihrer Umgebung verbindet. Die Plattform unterstützt Automobilhersteller dabei, neue digitale Geschäftsmodelle zu erschließen und gleichzeitig das digitale Nutzungserlebnis im Fahrzeug gezielt zu verbessern. Als Pionier im Bereich In-Car-Marketing eröffnet 4screen darüber hinaus Marken einen wirkungsvollen neuen Kanal, um kaufbereite Zielgruppen in relevanten Momenten direkt im Fahrzeug anzusprechen.',
themes: ['Automotive', 'Supplier', 'Software Defined Vehicles'],
address: 'Sailerstraße 17, 80809 München, Deutschland',
website: 'www.4screen.com',
emails: ['info@4screen.com', 'press@4screen.com', 'automotive@4screen.com']
},
{
id: 'daerim-c-c-co-ltd',
name: 'Daerim C&C Co., Ltd.',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '921, Gwahak-ro, Bongdong-eup, Wanju_gun, Jeonbuk-do 55321, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'daeyoung-electrics',
name: 'DAEYOUNG ELECTRICS',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '161, Gongdan 7-ro, Jillyang-eup, Gyeongsan-si, Gyeongsangbuk-do 38478, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'danisi-engineering-srl-asu',
name: 'DANISI ENGINEERING S.R.L. a.s.u.',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Via Ippolito Nievo 62, 10042 Nichelino (TO), Italien',
website: 'www.danisieng.com',
emails: []
},
{
id: 'db-regio-ag',
name: 'DB Regio AG',
keywords: ['innovative mobilitätslösungen', 'nachhaltige mobilitätslösungen', 'öpnv', 'smarte fahrkartenverkaufssysteme', 's-bahn-modelle', 'digitale buchung', 'integrierte nahverkehrsangebote', 'public transport', 'mobility on demand', 'mobility as a service', 'intermodality', 'smart city mobility', 'smart country mobility'],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP110'
},
role: 'Mitaussteller',
profile: 'Vor dem Hintergrund der zunehmend anspruchsvollen Herausforderungen wie Klimaschutz, Urbanisierung und Mobilität sind innovative und nachhaltige Mobilitätslösungen der Schlüssel zur Gestaltung einer lebenswerten Zukunft. Wir präsentieren Ihnen die neuesten Produkte und Entwicklungen, darunter smarte Fahrkartenverkaufssysteme, zukunftsweisende S-Bahn-Modelle und die nahtlose digitale Buchung von integrierten Nahverkehrsangeboten.',
themes: ['Public Transport', 'Mobility on demand', 'Mobility as a Service', 'Intermodality', 'Smart City Mobility', 'Smart Country Mobility'],
address: 'Europa-Allee 70-76, 60486 Frankfurt am Main, Deutschland',
website: 'www.zukunftnahverkehr.de',
emails: ['corinna.muschner@deutschebahn.com', 'julian.fordon@deutschebahn.com']
},
{
id: 'db-regio-ag',
name: 'DB Regio AG',
keywords: ['innovative mobilitätslösungen', 'nachhaltige mobilitätslösungen', 'öpnv', 'smarte fahrkartenverkaufssysteme', 's-bahn-modelle', 'digitale buchung', 'integrierte nahverkehrsangebote', 'public transport', 'mobility on demand', 'mobility as a service', 'intermodality', 'smart city mobility', 'smart country mobility'],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP110'
},
role: 'Mitaussteller',
profile: 'Vor dem Hintergrund der zunehmend anspruchsvollen Herausforderungen wie Klimaschutz, Urbanisierung und Mobilität sind innovative und nachhaltige Mobilitätslösungen der Schlüssel zur Gestaltung einer lebenswerten Zukunft. Wir präsentieren Ihnen die neuesten Produkte und Entwicklungen, darunter smarte Fahrkartenverkaufssysteme, zukunftsweisende S-Bahn-Modelle und die nahtlose digitale Buchung von integrierten Nahverkehrsangeboten.',
themes: ['Public Transport', 'Mobility on demand', 'Mobility as a Service', 'Intermodality', 'Smart City Mobility', 'Smart Country Mobility'],
address: 'Europa-Allee 70-76, 60486 Frankfurt am Main, Deutschland',
website: 'www.zukunftnahverkehr.de',
emails: ['corinna.muschner@deutschebahn.com', 'julian.fordon@deutschebahn.com']
},
{
id: 'deepdrive',
name: 'DeepDrive',
keywords: ['doppelrotor-technologie', 'elektromotoren', 'automobilbranche', 'radnabenantrieb', 'zentralantrieb', 'emobilität', 'reichweite', 'co2-emissionen', 'großserienprojekte', 'automobilhersteller', 'decarbonization', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C23'
},
role: 'Hauptaussteller',
profile: 'DeepDrive ist ein Münchener Hightech-Unternehmen mit dem Ziel, Marktführer für Elektromotoren in der Automobilbranche zu werden. Die patentierte Doppelrotor-Technologie löst zentrale Herausforderungen der Elektromobilität: Sie ermöglicht Reichweiten von über 800 km, spart bei Großserieneinsatz über 1 Milliarde Euro und senkt CO₂-Emissionen deutlich.',
themes: ['Decarbonization', 'Supplier'],
address: 'Carl-von-Linde Straße 23-25, 85748 Garching bei München, Deutschland',
website: 'www.deepdrive.tech',
emails: ['weare@deepdrive.tech', 'mauck@deepdrive.tech', 'sommer@deepdrive.tech', 'rosen@deepdrive.tech']
},
{
id: 'deepdrive-projekt-far-entwicklung-neuartiger-fertigungsprozesse-von-elektromotoren-deepdrives-patentierte-doppelrotor-radialfluss-topologie',
name: 'DeepDrive - Projekt FAR Entwicklung neuartiger Fertigungsprozesse von Elektromotoren DeepDrives patentierte Doppelrotor, Radialfluss Topologie',
keywords: ['elektromotoren', 'doppelrotor-technologie', 'e-mobilität', 'radnabenantrieb', 'zentralantrieb', 'automobilbranche', 'reichweiten', 'co2-emissionen', 'großserienprojekte', 'automotive', 'decarbonization', 'manufacturing & supply chain', 'supplier', 'future drive technologies incl. h2'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS435'
},
role: 'Mitaussteller',
profile: 'DeepDrive ist ein Münchener Hightech-Unternehmen mit dem Ziel, Marktführer für Elektromotoren in der Automobilbranche zu werden. Die patentierte Doppelrotor-Technologie löst zentrale Herausforderungen der Elektromobilität: Sie ermöglicht Reichweiten von über 800 km, spart bei Großserieneinsatz über 1 Milliarde Euro und senkt CO₂-Emissionen deutlich.',
themes: ['Automotive', 'Decarbonization', 'Manufacturing & Supply Chain', 'Supplier', 'Future Drive Technologies incl. H2'],
address: 'Carl-von-Linde Straße 23-25, 85748 Garching bei München, Deutschland',
website: 'www.deepdrive.tech',
emails: ['weare@deepdrive.tech', 'mauck@deepdrive.tech', 'sommer@deepdrive.tech', 'rosen@deepdrive.tech']
},
{
id: 'deepscenario-gmbh',
name: 'DeepScenario GmbH',
keywords: ['knowledge from motion data', 'automotive', 'transportation', 'ai-powered toolchain', 'adas development', 'ad development', 'scenario reconstruction', 'scenario mining', 'traffic agent modeling', 'object detection', 'smart parking', '3d computer vision', 'monocular cameras', 'dashcams', 'traffic cameras', 'drones', 'dynamic virtual world', '3d algorithms', 'generative ai', 'closed-loop simulation'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D102'
},
role: 'Hauptaussteller',
profile: 'DeepScenario builds the essential link between the physical and the virtual world to enable industry-specific solutions in dynamic environments. In the automotive industry, they provide an AI-powered toolchain for ADAS/AD development with a focus on scenario reconstruction, scenario mining, and traffic agent modeling. In the transportation industry, DeepScenario enables centimeter-accurate object detection with standard cameras paving the way for new applications like smart parking.',
themes: ['Automotive', 'Autonomous Driving', 'AI & GenAI'],
address: 'Industriestr. 4, 70565 Stuttgart, Deutschland',
website: 'www.deepscenario.com',
emails: ['info@deepscenario.com']
},
{
id: 'dekra-automobil',
name: 'DEKRA Automobil',
keywords: ['automobil', 'sicherheit', 'prüfung', 'zertifizierung', 'fahrzeuguntersuchung', 'technische dienstleistungen', 'beratung', 'inspektion', 'mobilität', 'verkehrssicherheit', 'umweltschutz', 'qualitätsmanagement', 'schadensgutachten', 'flottenmanagement', 'unfallanalyse'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C30'
},
role: 'Mitaussteller',
profile: 'DEKRA Automobil bietet umfassende Dienstleistungen in den Bereichen Sicherheit, Prüfung und Zertifizierung für die Automobilindustrie. Das Unternehmen ist spezialisiert auf Fahrzeuguntersuchungen, technische Dienstleistungen und Beratung. DEKRA unterstützt Kunden bei der Einhaltung von Sicherheits- und Umweltstandards.',
themes: [],
address: 'Senftenberger Str. 30, 01998 Klettwitz, Deutschland',
website: 'www.dekra.com',
emails: []
},
{
id: 'delfi-verein-zur-foerderung-einer-durchgaengigen-elektronischen-fahrgastinformation-e-v',
name: 'DELFI Verein zur Förderung einer durchgängigen elektronischen Fahrgastinformation e.V.',
keywords: ['oeffentlicher personennahverkehr', 'fahrgastinformation', 'bus', 'bahn', 'umweltverbund', 'fahrplaene', 'haltestellen', 'puenktlichkeit', 'stoerungen', 'barrierefreiheit', 'tarife', 'kooperationsnetzwerk', 'reiseketten', 'national', 'international', 'public transport', 'mobility on demand', 'intermodality', 'connectivity', 'iot', 'big data'],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP110'
},
role: 'Mitaussteller',
profile: 'DELFI ist ein Kooperationsnetzwerk aller Bundesländer und des Bundes, das die organisatorischen und technischen Voraussetzungen zur Beauskunftung durchgängiger Reiseketten auf nationaler und internationaler Ebene schafft. Es bietet Systeme, die die Nutzung öffentlicher Verkehrsmittel erleichtern, indem sie Informationen zu Fahrplänen, Pünktlichkeit, Störungen und mehr bereitstellen.',
themes: ['Public Transport', 'Mobility on demand', 'Intermodality', 'Connectivity, IoT & Big Data'],
address: 'Am Hauptbahnhof 6, c/o rms GmbH, 60329 Frankfurt am Main, Deutschland',
website: 'www.delfi.de',
emails: ['info@delfi.de']
},
{
id: 'delfi-verein-zur-foerderung-einer-durchgaengigen-elektronischen-fahrgastinformation-e-v',
name: 'DELFI Verein zur Förderung einer durchgängigen elektronischen Fahrgastinformation e.V.',
keywords: ['oeffentlicher personennahverkehr', 'fahrgastinformation', 'bus', 'bahn', 'umweltverbund', 'fahrplaene', 'haltestellen', 'puenktlichkeit', 'stoerungen', 'barrierefreiheit', 'tarife', 'kooperationsnetzwerk', 'reiseketten', 'national', 'international', 'public transport', 'mobility on demand', 'intermodality', 'connectivity', 'iot', 'big data'],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP110'
},
role: 'Mitaussteller',
profile: 'DELFI ist ein Kooperationsnetzwerk aller Bundesländer und des Bundes, das die organisatorischen und technischen Voraussetzungen zur Beauskunftung durchgängiger Reiseketten auf nationaler und internationaler Ebene schafft. Es bietet Systeme, die die Nutzung öffentlicher Verkehrsmittel erleichtern, indem sie Informationen zu Fahrplänen, Pünktlichkeit, Störungen und mehr bereitstellen.',
themes: ['Public Transport', 'Mobility on demand', 'Intermodality', 'Connectivity, IoT & Big Data'],
address: 'Am Hauptbahnhof 6, c/o rms GmbH, 60329 Frankfurt am Main, Deutschland',
website: 'www.delfi.de',
emails: ['info@delfi.de']
},
{
id: 'desay-sv',
name: 'Desay SV',
keywords: ['mobility technology', 'automotive industry', 'intelligent cabin', 'in-vehicle electronics', 'human-machine interaction', 'smart interaction', 'smart display', 'smart domain control', 'smart computing', 'driver assistance', 'intelligent vehicle-road-cloud transportation', 'navigation assisted driving', 'sensors', 'transportation system', 'intelligent transportation', 'software platform', 'oem', 'cloud services', 'data analytics', 'smart entry', 'multimodal solution', 'technical protocols'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D12'
},
role: 'Hauptaussteller',
profile: 'One of the leading mobility technology companies in automotive industry. Desay SV\'s Division Intelligent Cabin (IC) focuses on in-vehicle electronics integration while augmenting human-machine interaction experience with the aim to provide pleasure in driving. It offers a system solution including smart interaction, smart display, smart domain control and smart computing, which is a seamless scenario-based and user-centered integrated solution.',
themes: ['Automotive', 'Decarbonization', 'Regulation, Liability & ESGs', 'Manufacturing & Supply Chain', 'International Trade and Markets', 'Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'Entertainment & VR'],
address: 'No. 6, Huitai North Road Desay SV Huinan Technology Park, 516006 Huizhou, Guangdong, China',
website: undefined,
emails: []
},
{
id: 'deutscher-verkehrssicherheitsrat-dvr-e-v',
name: 'Deutscher Verkehrssicherheitsrat (DVR) e. V.',
keywords: ['straßenverkehrssicherheit', 'vision zero', 'informationskampagnen', 'trainings', 'programme', 'verkehrsunfälle vorbeugen', 'sicherer straßenverkehr', 'unabhängiger kompetenzträger', 'deutschland', 'hauptaussteller', 'open space', 'königsplatz'],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP155'
},
role: 'Hauptaussteller',
profile: 'Der Deutsche Verkehrssicherheitsrat (DVR) ist Deutschlands unabhängiger Kompetenzträger in allen Belangen der Straßenverkehrssicherheit. Mit unserem Ziel der Vision Zero – keine Getöteten und Schwerverletzten im Straßenverkehr – entwickeln wir Informationskampagnen, Trainings und Programme, um Verkehrsunfällen vorzubeugen und den Straßenverkehr für alle sicher zu machen.',
themes: [],
address: 'Jägertraße 67-69, 10117 Berlin, Deutschland',
website: 'www.dvr.de',
emails: ['info@dvr.de']
},
{
id: 'deutsches-zentrum-fur-luft-und-raumfahrt-ev-dlr',
name: 'Deutsches Zentrum für Luft- und Raumfahrt e.V. (DLR)',
keywords: ['forschungszentrum', 'technologiezentrum', 'luftfahrt', 'raumfahrt', 'energie', 'verkehr', 'sicherheitsforschung', 'verteidigungsforschung', 'wissensaustausch', 'technologietransfer', 'raumfahrtagentur', 'forschungsforderung', 'industrieforderung', 'automotive', 'lev', 'micromobility', 'intermodality', 'smart city mobility', 'circular economy', 'decarbonization', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'remote-controlled vehicles', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'B30'
},
role: 'Hauptaussteller',
profile: 'Das DLR ist das deutsche Forschungs- und Technologiezentrum für Luft- und Raumfahrt. In seinen Kerngebieten entwickelt das DLR Technologien für Luft- und Raumfahrt, Energie und Verkehr, sowie Sicherheits- und Verteidigungsforschung. Ein breites Spektrum an Ergebnissen und Innovationen bringen Nutzen für Industrie und Wirtschaft, Behörden und Verwaltung sowie für öffentliche Stakeholder.',
themes: ['Automotive', 'LEV', 'Micromobility', 'Intermodality', 'Smart City Mobility', 'Circular Economy', 'Decarbonization', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'Remote-Controlled Vehicles', 'Future Drive Technologies incl. H2'],
address: 'Linder Höhe, 51147 Köln, Deutschland',
website: 'www.dlr.de',
emails: []
},
{
id: 'dhg',
name: 'DHG',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '42 Dalseong2cha 4-ro, Guji-myeon, Daegu 43013, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'konec',
name: 'KONEC',
keywords: ['aluminium-druckgussteile', 'automotive', 'decarbonization', 'manufacturing', 'supply chain', 'supplier', 'autonomous driving'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'C23'
},
role: 'Hauptaussteller',
profile: 'Weltweiter Anbieter von präzisen Aluminium-Druckgussteilen.',
themes: ['Automotive', 'Decarbonization', 'Manufacturing & Supply Chain', 'Supplier', 'Autonomous Driving'],
address: '62, Gosugwan-ro, Gobuk-myeon, Seosan-si Chungcheongnam-do 32027, Südkorea (KR)',
website: 'www.konecauto.com/home/',
emails: ['hansang.lim@dongnam.com']
},
{
id: 'digital-hub-mobility-by-unternehmertum',
name: 'Digital Hub Mobility by UnternehmerTUM',
keywords: ['nachhaltige mobilität', 'innovation', 'start-ups', 'automobilbranche', 'mobilitätsbranche', 'technologiebranche', 'netzwerk-orchestrator', 'dienstleister', 'städte', 'forschungseinrichtungen', 'de:hub', 'bundesministerium für wirtschaft und energie', 'automotive', 'public transport', 'mobility on demand', 'mobility as a service', 'intermodality', 'smart city mobility', 'smart country mobility', 'charging and refueling infrastructure', 'energy grid', 'circular economy', 'decarbonization', 'autonomous driving', 'ai', 'genai', 'battery tech', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B11'
},
role: 'Mitaussteller',
profile: 'Der Digital Hub Mobility ist das Mobilitätsteam von UnternehmerTUM – Europas größtem Zentrum für Innovation und Start-ups. Als Dienstleister und Netzwerk-Orchestrator arbeiten wir mit Unternehmen aus der Automobil-, Mobilitäts- und Technologiebranche sowie mit Städten, Start-ups und Forschungseinrichtungen, um gemeinsam die Zukunft der Mobilität zu gestalten.',
themes: ['Automotive', 'Public Transport', 'Mobility on demand', 'Mobility as a Service', 'Intermodality', 'Smart City Mobility', 'Smart Country Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Circular Economy', 'Decarbonization', 'Autonomous Driving', 'AI & GenAI', 'Battery Tech', 'Future Drive Technologies incl. H2'],
address: 'Lichtenbergstr. 6, 85748 Garching bei München, Deutschland',
website: 'mobility.unternehmertum.de',
emails: ['mobility@unternehmertum.de', 'jasmin.eigemann@unternehmertum.de']
},
{
id: 'digital-hub-mobility-by-unternehmertum',
name: 'Digital Hub Mobility by UnternehmerTUM',
keywords: ['nachhaltige mobilität', 'innovation', 'automobilbranche', 'mobilitätsbranche', 'technologiebranche', 'netzwerk-orchestrator', 'start-ups', 'forschungseinrichtungen', 'de:hub', 'smart city mobility', 'smart country mobility', 'charging and refueling infrastructure', 'circular economy', 'decarbonization', 'autonomous driving', 'ai', 'genai', 'battery tech', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B11'
},
role: 'Mitaussteller',
profile: 'Der Digital Hub Mobility ist das Mobilitätsteam von UnternehmerTUM – Europas größtem Zentrum für Innovation und Start-ups. Als Dienstleister und Netzwerk-Orchestrator arbeiten wir mit Unternehmen aus der Automobil-, Mobilitäts- und Technologiebranche sowie mit Städten, Start-ups und Forschungseinrichtungen, um gemeinsam die Zukunft der Mobilität zu gestalten.',
themes: ['Automotive', 'Public Transport', 'Mobility on demand', 'Mobility as a Service', 'Intermodality', 'Smart City Mobility', 'Smart Country Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Circular Economy', 'Decarbonization', 'Autonomous Driving', 'AI & GenAI', 'Battery Tech', 'Future Drive Technologies incl. H2'],
address: 'Lichtenbergstr. 6, 85748 Garching bei München, Deutschland',
website: 'mobility.unternehmertum.de',
emails: ['mobility@unternehmertum.de', 'jasmin.eigemann@unternehmertum.de']
},
{
id: 'deutsches-zentrum-fur-luft-und-raumfahrt-ev-dlr',
name: 'Deutsches Zentrum für Luft- und Raumfahrt e.V. (DLR)',
keywords: ['forschungszentrum', 'technologiezentrum', 'luftfahrt', 'raumfahrt', 'energie', 'verkehr', 'sicherheitsforschung', 'verteidigungsforschung', 'wissensaustausch', 'technologietransfer', 'raumfahrtagentur', 'projekttrager', 'automotive', 'lev', 'micromobility', 'intermodality', 'smart city mobility', 'circular economy', 'decarbonization', 'autonomous driving', 'connectivity', 'iot', 'big data', 'battery tech', 'remote-controlled vehicles'],
location: {
type: 'Open Space',
hallOrPlace: 'Odeonsplatz',
booth: 'OP320'
},
role: 'Hauptaussteller',
profile: 'Das DLR ist das deutsche Forschungs- und Technologiezentrum für Luft- und Raumfahrt. In seinen Kerngebieten entwickelt das DLR Technologien für Luft- und Raumfahrt, Energie und Verkehr, sowie Sicherheits- und Verteidigungsforschung. Ein breites Spektrum an Ergebnissen und Innovationen bringen Nutzen für Industrie und Wirtschaft, Behörden und Verwaltung sowie für öffentliche Stakeholder.',
themes: ['Automotive', 'LEV', 'Micromobility', 'Intermodality', 'Smart City Mobility', 'Circular Economy', 'Decarbonization', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'Battery Tech', 'Remote-Controlled Vehicles'],
address: 'Linder Höhe, 51147 Köln, Deutschland',
website: 'www.dlr.de',
emails: ['contact-dlr@dlr.de']
},
{
id: 'drees-sommer-se',
name: 'Drees & Sommer SE',
keywords: ['beratung', 'umsetzung', 'automobilbranche', 'entwicklungsstandorte', 'produktionsstandorte', 'vertriebsstandorte', 'terminsicherheit', 'qualitätssicherheit', 'kostensicherheit', 'prozessplanung', 'anlagenplanung', 'smart factory', 'fabrik der zukunft', 'smarte infrastrukturen', 'vernetzte mobilität', 'nachhaltige mobilität', 'mobilitätslösungen', 'automotive', 'smart city mobility', 'smart country mobility', 'charging and refueling infrastructure', 'energy grid', 'circular economy', 'decarbonization', 'regulation', 'liability', 'esgs', 'manufacturing', 'supply chain', 'autonomous driving'],
location: {
type: 'Summit',
hallOrPlace: "",
booth: ""
},
role: 'Hauptaussteller',
profile: 'Wir begleiten unsere Kunden ganzheitlich – von der Beratung bis zur Umsetzung – und bieten alles aus einer Hand. In der Automobilbranche unterstützen wir weltweit Unternehmen dabei, ihre Entwicklungs-, Produktions- und Vertriebsstandorte strategisch zu sichern. Unsere Expertise in der Prozess- und Anlagenplanung ermöglicht es uns, innovative Konzepte für die Smart Factory und die Fabrik der Zukunft zu realisieren.',
themes: ['Automotive', 'Smart City Mobility', 'Smart Country Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Circular Economy', 'Decarbonization', 'Regulation, Liability & ESGs', 'Manufacturing & Supply Chain', 'Autonomous Driving'],
address: 'Obere Waldplätze 13, 70569 Stuttgart, Deutschland',
website: 'www.dreso.com',
emails: ['viktoria.wagner@dreso.com']
},
{
id: 'dunan',
name: 'DunAn',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D04'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Jiyang Street, 311800 Shaoxing Zhuji, China',
website: 'www.dunan.net',
emails: []
},
{
id: 'dynax-corporation',
name: 'Dynax Corporation',
keywords: ['friction materials', 'e-motors', 'wet friction materials', 'torque couplings', 'automotive', 'construction', 'agriculture', 'hybrid', 'ev', 'axial gap motors', 'mobility', 'supplier', 'autonomous driving', 'remote-controlled vehicles', 'future drive technologies', 'h2', 'decarbonization', 'manufacturing', 'supply chain', 'international trade', 'markets'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B02'
},
role: 'Hauptaussteller',
profile: 'Dynax is a Japanese high-quality manufacturer of friction materials and e-motors. They specialize in wet friction materials used for torque couplings in automotive, construction, and agriculture. Dynax is globally located and ready to cooperate in the development of hybrid and EV technologies.',
themes: ['Automotive', 'Micromobility', 'Smart City Mobility', 'Road Safety', 'Decarbonization', 'Manufacturing & Supply Chain', 'International Trade and Markets', 'Supplier', 'Autonomous Driving', 'Remote-Controlled Vehicles', 'Future Drive Technologies incl. H2'],
address: '1053-1 Kamiosatsu, Chitose 066-0077, Japan',
website: 'www.dynax-j.com/en',
emails: ['yy@dynax-e.de', 'db@dynax-e.de', 'viktor.horogh@exedydynax.hu']
},
{
id: 'dynax-corporation',
name: 'Dynax Corporation',
keywords: ['friction materials', 'e-motors', 'wet friction materials', 'torque couplings', 'automotive', 'construction', 'agriculture', 'hybrid', 'ev', 'axial gap motors', 'mobility', 'supplier', 'autonomous driving', 'remote-controlled vehicles', 'future drive technologies', 'h2', 'decarbonization', 'manufacturing', 'supply chain', 'international trade', 'markets', 'smart city mobility', 'road safety', 'micromobility'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B02'
},
role: 'Hauptaussteller',
profile: 'Dynax is a Japanese high-quality manufacturer of friction materials and e-motors. They specialize in wet friction materials used for torque couplings in automotive, construction, and agriculture. Dynax is globally located and cooperates in the development of hybrid and EV with wet friction materials and axial gap motors.',
themes: ['Automotive', 'Micromobility', 'Smart City Mobility', 'Road Safety', 'Decarbonization', 'Manufacturing & Supply Chain', 'International Trade and Markets', 'Supplier', 'Autonomous Driving', 'Remote-Controlled Vehicles', 'Future Drive Technologies incl. H2'],
address: '1053-1 Kamiosatsu, Chitose 066-0077, Japan',
website: 'www.dynax-j.com/en',
emails: ['yy@dynax-e.de', 'db@dynax-e.de', 'viktor.horogh@exedydynax.hu']
},
{
id: 'ecarus-gmbh',
name: 'ECARUS GmbH',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E10'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Karlsdorf bei Ilz 1, 8262 Ilz, Österreich',
website: undefined,
emails: []
},
{
id: 'eclever-systems-gmbh',
name: 'eClever Systems GmbH',
keywords: ['startup', 'hauptaussteller', 'iaa mobility', 'summit', 'halle b2', 'dresden', 'technologie', 'systeme', 'lösungen', 'innovation', 'digitalisierung', 'automotive', 'transport', 'mobilität', 'zukunftstechnologien'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D124'
},
role: 'Hauptaussteller',
profile: 'eClever Systems GmbH ist ein innovatives Unternehmen, das sich auf zukunftsweisende Technologien und Lösungen spezialisiert hat. Als Hauptaussteller auf der IAA MOBILITY präsentiert es seine neuesten Entwicklungen im Bereich Digitalisierung und Mobilität.',
themes: [],
address: 'Friedrichstraße 24, 01067 Dresden, Deutschland',
website: 'www.eclever.io',
emails: []
},
{
id: 'ecobat-resources-germany',
name: 'Ecobat Resources Germany',
keywords: ['recycler', 'batterien', 'blei', 'polypropylen', 'recyclingunternehmen', 'seculene', 'recycling-kunststofftechnologie', 'nachhaltigkeit', 'kreislauforientierte energie', 'ressourcenwirtschaft', 'sekundärblei', 'lme-qualität', 'post-consumer-abfälle', 'automotive', 'circular economy', 'international trade and markets'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Als weltweit größter Recycler von Batterien und global führender Hersteller von Blei bietet Ecobat nachhaltige und vollständig konforme Dienstleistungen für die kreislauforientierte Energie- und Ressourcenwirtschaft. Das Blei und Polypropylen des Recyclingunternehmens ist in den verschiedensten Branchen sehr gefragt. Ecobat liefert Sekundärblei in LME-Qualität mit einer Reinheit von bis zu 99,99 %.',
themes: ['Automotive', 'Circular Economy', 'International Trade and Markets'],
address: 'Emser Straße 11, 56338 Braubach, Deutschland',
website: 'www.ecobat.com',
emails: ['erich.esser@ecobat.com', 'marc.kochhan@ecobat.com', 'andreas.kroheck@ecobat.com']
},
{
id: 'edag-engineering-gmbh',
name: 'EDAG Engineering GmbH',
keywords: ['engineering-dienstleister', 'mobilitätsindustrie', 'automobilindustrie', 'produkte', 'produktionsfabriken', 'produktionsanlagen', 'ingenieurskunst', 'zukunftsweisende konzepte', 'innovative technologien', 'automotive', 'lev', 'micromobility', 'smart city mobility', 'charging and refueling infrastructure', 'energy grid', 'circular economy', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'battery tech', 'cybersecurity', 'remote-controlled vehicles'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'B21'
},
role: 'Mitaussteller',
profile: 'Die EDAG Group präsentiert sich auf der IAA 2025 als kompetenter und verlässlicher Engineering-Dienstleister der Mobilitätsindustrie – mit über 55 Jahren Erfahrung. Mit seinem weltweiten und interdisziplinären Team von rund 9.100 Expertinnen und Experten realisiert das Unternehmen vielfältige Projekte für die Automobilindustrie und weitere Branchen. Der 360-Grad-Entwicklungsansatz der EDAG Group deckt das gesamte Spektrum moderner Mobilität ab.',
themes: ['Automotive', 'LEV', 'Micromobility', 'Smart City Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Circular Economy', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Battery Tech', 'Cybersecurity', 'Remote-Controlled Vehicles'],
address: 'Kreuzberger Ring 40, 65202 Wiesbaden, Deutschland',
website: 'www.edag.com',
emails: ['info@edag.com']
},
{
id: 'edag-engineering-gmbh',
name: 'EDAG Engineering GmbH',
keywords: ['engineering-dienstleister', 'mobilitätsindustrie', 'automobilindustrie', '360-grad-entwicklungsansatz', 'produkte', 'produktionsfabriken', 'produktionsanlagen', 'ingenieurskunst', 'zukunftsweisende konzepte', 'innovative technologien', 'automotive', 'lev', 'micromobility', 'smart city mobility', 'charging and refueling infrastructure', 'energy grid', 'circular economy', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'battery tech', 'cybersecurity', 'remote-controlled vehicles'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'B21'
},
role: 'Mitaussteller',
profile: 'Die EDAG Group präsentiert sich auf der IAA 2025 als kompetenter und verlässlicher Engineering-Dienstleister der Mobilitätsindustrie – mit über 55 Jahren Erfahrung. Mit seinem weltweiten und interdisziplinären Team von rund 9.100 Expertinnen und Experten realisiert das Unternehmen vielfältige Projekte für die Automobilindustrie und weitere Branchen. Der 360-Grad-Entwicklungsansatz der EDAG Group deckt das gesamte Spektrum moderner Mobilität ab.',
themes: ['Automotive', 'LEV', 'Micromobility', 'Smart City Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Circular Economy', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Battery Tech', 'Cybersecurity', 'Remote-Controlled Vehicles'],
address: 'Kreuzberger Ring 40, 65202 Wiesbaden, Deutschland',
website: 'www.edag.com',
emails: ['info@edag.com']
},
{
id: 'ejad',
name: 'eJad',
keywords: ['softwarelösungen', 'automobilmobilität', 'e-mobilitätssysteme', 'wechselrichter', 'ladegeräte', 'bmus', 'autosar-steuergeräte', 'cybersicherheit', 'funktionale sicherheit', 'iso 26262', 'ki', 'tests', 'validierungen', 'oems', 'tier-1-zulieferer', 'offshore-engineering', 'connectivity', 'iot', 'big data', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'C10'
},
role: 'Hauptaussteller',
profile: 'eJad ist ein führender Partner für innovative Software- und Engineering-Lösungen in der globalen Automobilindustrie. Wir sind spezialisiert auf die Entwicklung, Modellierung und Prüfung von Software für E-Mobilitätssysteme wie Wechselrichter, Ladegeräte und BMUs sowie auf die Integration von AUTOSAR-Steuergeräten für klassische und adaptive Plattformen. Unsere Teams sind Vorreiter beim Einsatz von KI für Tests und Validierungen und ermöglichen so eine intelligentere, schnellere und zuverlässigere Überprüfung komplexer Automobilfunktionen.',
themes: ['Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Cybersecurity'],
address: 'Freezone, Nasr City, 11765 Cairo, Ägypten',
website: 'www.ejad.com',
emails: ['tarek.attia@ejad.com.eg']
},
{
id: 'ekoenergetyka-polska',
name: 'Ekoenergetyka-Polska',
keywords: ['hochleistungs-ladestationen', 'elektrofahrzeuge', 'schnellladeinfrastruktur', 'öffentliche verkehrsbetriebe', 'charge point operators', 'elektroautos', 'e-trucks', 'e-busse', 'ladetechnologie', 'skalierbare lösungen', '24/7-service', 'schulungen', 'training-center', 'elektromobilität', 'softwarelösungen', 'fernwartung', 'dynamisches lastmanagement', 'systemintegration', 'decarbonization', 'automotive', 'public transport', 'mobility as a service', 'smart city mobility', 'smart country mobility', 'charging and refueling infrastructure incl. energy grid'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C31'
},
role: 'Hauptaussteller',
profile: 'Ekoenergetyka ist ein führender europäischer Hersteller von Hochleistungs-Ladestationen für Elektrofahrzeuge. Gegründet im Jahr 2009 als universitäres Forschungsprojekt zweier Studienkollegen, hat sich das Unternehmen zu einem systemrelevanten Anbieter von Schnellladeinfrastruktur für öffentliche Verkehrsbetriebe und Charge Point Operators (CPOs) in über 40 Ländern auf 3 Kontinenten entwickelt. Unterstützt durch den Private-Equity-Fonds Enterprise Investors, baut Ekoenergetyka seine Präsenz in den Bereichen Elektroautos, E-Trucks und E-Busse zügig aus.',
themes: ['Automotive', 'Public Transport', 'Mobility as a Service', 'Smart City Mobility', 'Smart Country Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Decarbonization'],
address: 'Nowy Kisielin-Rozwojowa 7A, 66-002 Zielona Góra, Polen',
website: 'www.ekoenergetyka.com.pl',
emails: ['contact@ekoenergetyka.com.pl', 'paulina.senkow@ekoenergetyka.com', 'magdalena.grygier@ekoenergetyka.com']
},
{
id: 'ekpo-fuel-cell-technologies',
name: 'EKPO Fuel Cell Technologies',
keywords: ['brennstoffzellenstacks', 'co2-neutrale mobilität', 'full-service-supplier', 'stackmodule', 'automotive', 'zug', 'schifffahrt', 'industrialisierungskompetenz', 'elringklinger', 'opmobility', 'entwicklung', 'großserienproduktion', 'straße', 'schiene', 'wasser', 'gelände', 'hydrogen solutions', 'sustainable future'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'C01'
},
role: 'Mitaussteller',
profile: 'EKPO Fuel Cell Technologies (EKPO) ist ein führendes Joint Venture im Bereich der Entwicklung und Großserienproduktion von Brennstoffzellenstacks zur CO₂-neutralen Mobilität. Wir sind Full-Service-Supplier für Stackmodule und Komponenten, die im Automotive-Bereich aber auch in der Zug- und Schifffahrt Anwendung finden.',
themes: ['Automotive', 'Public Transport', 'Mobility on demand', 'Decarbonization', 'Future Drive Technologies incl. H2'],
address: 'Max-Eyth-Straße 2, 72581 Dettingen/Erms, Deutschland',
website: 'www.ekpo-fuelcell.com',
emails: ['info@ekpo-fuelcell.com', 'mohsine.zahid@ekpo-fuelcell.com']
},
{
id: 'eli-electric-vehicles',
name: 'Eli Electric Vehicles',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B26'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: '111 W. Ocean Blvd 4th Fl - Eli Electric Vehicles, Los Angeles 90802, USA',
website: 'www.eli.world',
emails: []
},
{
id: 'eli-electric-vehicles',
name: 'Eli Electric Vehicles',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B26'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: '111 W. Ocean Blvd 4th Fl - Eli Electric Vehicles, Los Angeles 90802, USA',
website: 'www.eli.world',
emails: []
},
{
id: 'elinkair',
name: 'eLinkAir',
keywords: ['automatische ladegeräte', 'e-busse', 'e-trucks', 'pantograph lösungen', 'traction batteries', 'ev kostenreduktion', 'nutzlaststeigerung', 'ladeinfrastruktur', 'flotteninvestition', 'sicherheit', 'depotflächeneinsparung', 'personalreduktion', 'autonome operation', 'oppcharge standard', 'oem', 'investoren', 'partner'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D123'
},
role: 'Hauptaussteller',
profile: 'Diamond-charging is a startup company that developed automatic charging devices for electric buses and trucks. The main benefits of these devices are dramatic reduction of traction batteries, which cuts the cost of the EV and at the same time increase its useful payload. The devices conform with the OppCharge standard and protocols that were adopted by most prominent OEM\'s in Europe and abroad.',
themes: ['Public Transport', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Autonomous Driving'],
address: '39 Givat Dauns St, 3434917 Haifa, Israel',
website: 'www.diamond-charging.com',
emails: ['office@diamond-chaging.com']
},
{
id: 'elringklinger',
name: 'ElringKlinger',
keywords: ['automobilzulieferer', 'elektromobilität', 'batterietechnologie', 'brennstoffzellentechnologie', 'elektrische antriebseinheiten', 'kunststoffgehäuse', 'metallische stanzteile', 'formteile', 'leichtbauteile', 'gewichtsreduktion', 'effizienz', 'funktionsintegration', 'e-mobility', 'pkw', 'nfz', 'entwicklung', 'serienproduktion', 'global', 'automotive'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'C01'
},
role: 'Hauptaussteller',
profile: 'ElringKlinger ist ein weltweit tätiger Automobilzulieferer mit über 140 Jahren Erfahrung, der innovative Lösungen für die Mobilität der Zukunft anbietet. Unser Portfolio umfasst zukunftsweisende Produkte für Pkw und Nfz mit Elektromotor, Hybridtechnik oder Verbrennungsmotor. Maßgeschneiderte Leichtbauteile von ElringKlinger sind im gesamten Fahrzeug einsetzbar und punkten unter anderem mit Gewichtsreduktion, Effizienz und Funktionsintegration.',
themes: ['Automotive'],
address: 'Max-Eyth-Str. 2, 72581 Dettingen an der Erms, Deutschland',
website: 'www.elringklinger.de/en',
emails: []
},
{
id: 'embedl',
name: 'Embedl',
keywords: ['ki-modelloptimierung', 'edge-ai-deployment', 'model optimization sdk', 'embedl hub', 'automotive', 'robotik', 'industrie', 'embedded systems', 'oem', 'tier-1', 'tier-2', 'ad', 'adas', 'interior sensing', 'mensch-maschinen-interaktion', 'bosch', 'volvo cars', 'zensact', 'tobii', 'kodiak robotics', 'supplier', 'ai & genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D106'
},
role: 'Hauptaussteller',
profile: 'Embedl bietet hochmoderne Tools zur Optimierung von KI-Modellen für den Einsatz auf ressourcenbeschränkten Plattformen. Mit der Model Optimization SDK und dem Embedl Hub schafft Embedl eine leistungsstarke End-to-End-Lösung, mit der Entwickler kompakte, performante und energieeffiziente KI-Modelle für verschiedenste Hardware-Plattformen entwickeln können. Mit Embedl lassen sich Modelle schneller entwickeln, effizienter skalieren und präziser ausführen – ideal für anspruchsvolle Anwendungen in Automotive, Robotik, Industrie und Embedded Systems.',
themes: ['Supplier', 'AI & GenAI'],
address: 'Gamla almedalsvägen 39, 412 63 Göteborg, Schweden',
website: 'www.embedl.com',
emails: ['info@embedl.com', 'peter.kristiansen@embedl.com', 'stefan.kunz@embedl.com']
},
{
id: 'e-mobility-rentals',
name: 'E-Mobility Rentals',
keywords: ['e-mobility', 'rentals', 'hauptaussteller', 'summit', 'halle a3'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B12'
},
role: 'Hauptaussteller',
profile: 'E-Mobility Rentals bietet umfassende Lösungen im Bereich der Elektromobilität an.',
themes: [],
address: 'Calea Șerban Vodă 216, 040221 Bucharest, Rumänien',
website: 'www.e-mobility-rentals.com',
emails: []
},
{
id: 'emotion3d-gmbh',
name: 'emotion3D GmbH',
keywords: ['kamerabasierte innenraumanalyse', 'sicherheit', 'komfort', 'fahrzeug', 'softwareunternehmen', 'automobilindustrie', 'fahrerüberwachung', 'insassenüberwachung', 'in-cabin-analyselösungen', 'sicherheitsvorschriften', 'cabin eye', 'aktive sicherheit', 'passive sicherheit', 'benutzererfahrung', 'automatisierung', 'automotive', 'supplier', 'autonomous driving'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'A12'
},
role: 'Hauptaussteller',
profile: 'emotion3D ist ein Softwareunternehmen mit Sitz in Wien, das seit 2017 in der Automobilindustrie tätig ist und Lösungen für die Analyse im Fahrzeuginnenraum wie Fahrer- und Insassenüberwachung für eine Vielzahl von Kunden anbietet. In-Cabin-Analyselösungen sind entscheidend, um aktuelle und zukünftige Sicherheitsvorschriften zu erfüllen. Mit seinem Softwarepaket Cabin Eye deckt emotion3D alle Bereiche ab: aktive Sicherheit, passive Sicherheit, Benutzererfahrung und Automatisierung.',
themes: ['Automotive', 'Supplier', 'Autonomous Driving'],
address: 'Rainergasse 1/8, 1040 Wien, Österreich',
website: 'www.emotion3d.ai',
emails: ['office@emotion3d.ai']
},
{
id: 'enplas-deutschland-gmbh',
name: 'Enplas (Deutschland) GmbH',
keywords: ['hochpräzise verzahnungsteile', 'injection molding', 'high-precision plastic components', 'energy saving solution', 'semiconductor peripheral', 'digital communication', 'life science', 'precision plastic gears', 'automotive applications', 'burn-in sockets', 'plastic lenses', 'optical communication', 'microfluidic chips', 'diagnostics', 'solution provider', 'zulieferer', 'kunststoffteile'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D05'
},
role: 'Hauptaussteller',
profile: 'Enplas Corporation is a global injection molding manufacturer specializing in the design and mass production of high-precision plastic components. The company operates under four main business units, contributing to solving customer challenges and creating value on a global scale.',
themes: ['Automotive'],
address: 'Oststraße 54, 40211 Düsseldorf, Deutschland',
website: 'en.enplas.com',
emails: ['t-otani@enplas.com', 'k-knospe@enplas.com', 'k-niiho@enplas.com']
},
{
id: 'umbria-e-mobility-network',
name: 'UMBRIA E-MOBILITY NETWORK',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B11'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Via Salvatore Allende, 11, 06073 Corciano (PG), Italien',
website: 'www.en4.it',
emails: []
},
{
id: 'en4',
name: 'EN4',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B11'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Via Salvatore Allende, 11, 06073 Corciano (PG), Italien',
website: 'www.en4.it',
emails: []
},
{
id: 'entroview',
name: 'Entroview',
keywords: ['diagnoselösungen', 'batterie-lebenszyklus', 'automotive', 'circular economy', 'supplier', 'software defined vehicles', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'C40'
},
role: 'Mitaussteller',
profile: 'Entroview entwickelt Diagnoselösungen für den gesamten Batterie-Lebenszyklus.',
themes: ['Automotive', 'Circular Economy', 'Supplier', 'Software Defined Vehicles', 'Battery Tech'],
address: '39 Rue de la Gare de Reuilly, 75012 Paris, Frankreich',
website: 'entroview.com',
emails: ['contact@entroview.com', 'gaetan.depaepe@entroview.com', 'patrick.natour@entroview.com', 'margo.landrier@entroview.com']
},
{
id: 'epalfer-lda',
name: 'EPALFER, Lda',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D20'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'R. do Lameiro, 230, Segadães, 3750-740 Águeda, Portugal',
website: 'www.epalfer.com',
emails: []
},
{
id: 'erdrich-umformtechnik-gmbh',
name: 'Erdrich Umformtechnik GmbH',
keywords: ['umformtechnik', 'spanlose umformtechnik', 'metallkomponenten', 'automobilindustrie', 'entwicklungspartner', 'tiefziehen', 'stanzen', 'feinschneiden', 'funktionsbaugruppen', 'technische exzellenz', 'präzision', 'konstruktion', 'werkzeugbau', 'fertigung', 'mobilität', 'automotive', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Als international agierender Spezialist für spanlose Umformtechnik steht Erdrich für höchste Präzision, technische Exzellenz und partnerschaftliche Zusammenarbeit. Mit jahrzehntelanger Erfahrung in der Entwicklung und Fertigung komplexer Metallkomponenten – insbesondere für die Automobilindustrie – begleiten wir unsere Kunden von der ersten Idee bis zur Serienreife.',
themes: ['Automotive', 'Supplier'],
address: 'Reiersbacher Str. 34, 77871 Renchen, Deutschland',
website: 'www.erdrich.de',
emails: ['info@erdrich.de', 'volker.streck@erdrich.de', 'manfred.ganter@erdrich.de', 'axel.knaf@erdrich.de']
},
{
id: 'erdrich-umformtechnik-gmbh',
name: 'Erdrich Umformtechnik GmbH',
keywords: ['umformtechnik', 'spanlose umformtechnik', 'metallkomponenten', 'automobilindustrie', 'entwicklungspartner', 'tiefziehen', 'stanzen', 'feinschneiden', 'funktionsbaugruppen', 'technische exzellenz', 'präzision', 'konstruktion', 'werkzeugbau', 'fertigung', 'automotive', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Als international agierender Spezialist für spanlose Umformtechnik steht Erdrich für höchste Präzision, technische Exzellenz und partnerschaftliche Zusammenarbeit. Mit jahrzehntelanger Erfahrung in der Entwicklung und Fertigung komplexer Metallkomponenten – insbesondere für die Automobilindustrie – begleiten wir unsere Kunden von der ersten Idee bis zur Serienreife.',
themes: ['Automotive', 'Supplier'],
address: 'Reiersbacher Str. 34, 77871 Renchen, Deutschland',
website: 'www.erdrich.de',
emails: ['info@erdrich.de', 'volker.streck@erdrich.de', 'manfred.ganter@erdrich.de', 'axel.knaf@erdrich.de']
},
{
id: 'etas',
name: 'ETAS',
keywords: ['fahrzeugsoftware', 'konnektivität', 'komfort', 'effizienz', 'sicherheit', 'software-definierte fahrzeuge', 'softwarekomplexität', 'entwicklungszyklen', 'safety', 'security', 'software-tools', 'fahrzeugsysteme', 'integration', 'kalibrierung', 'diagnose', 'software defined vehicles', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'cybersecurity', 'entwicklungsdienstleistungen'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D01'
},
role: 'Mitaussteller',
profile: 'Wir bei ETAS unterstützen Automobilhersteller und Zulieferer dabei, die Zukunft der Mobilität zu gestalten – eine Zukunft, in der innovative Fahrzeugsoftware für mehr Konnektivität und Komfort und höhere Effizienz und Sicherheit sorgt. Wir erleichtern die Entwicklung Software-definierter Fahrzeuge und helfen wir Ihnen, die Softwarekomplexität zu beherrschen, Entwicklungszyklen zu beschleunigen und alle Safety- und Security-Anforderungen einzuhalten.',
themes: ['Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Cybersecurity'],
address: 'Borsigstr. 24, 70469 Stuttgart, Deutschland',
website: 'www.etas.com',
emails: ['sales.de@etas.com', 'markus.menze@etas.com', 'bianka.ansperger@etas.com']
},
{
id: 'european-high-tech-pavilion',
name: 'European High-Tech Pavilion',
keywords: ['automobilindustrie', 'vernetzung', 'messe-gemeinschaftsstand', 'nachhaltige geschäftskontakte', 'catering', 'abendveranstaltungen', 'netzwerk', 'besucherverkehr', 'entscheider', 'automotive', 'smart city mobility', 'manufacturing & supply chain', 'supplier', 'autonomous driving', 'battery tech', 'dienstleistungen'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Hauptaussteller',
profile: 'Unser European High-Tech Pavilion® ist ein gemütlicher Messe-Gemeinschaftsstand mit familiärer Atmosphäre, in dem neue, nachhaltige Geschäftskontakte geknüpft und bestehende Kontakte ausgebaut werden können. Wir kümmern uns um die gesamte Vorbereitung, den Aufbau des Standes und während der Messe sorgen wir für möglichst viele und hochwertige Vernetzungen zwischen Ihnen und möglichen neuen Kunden.',
themes: ['Automotive', 'Smart City Mobility', 'Manufacturing & Supply Chain', 'Supplier', 'Autonomous Driving', 'Battery Tech'],
address: 'Schleptruper Strang 58, 49565 Bramsche, Deutschland',
website: 'www.europeanhightechpavilion.com',
emails: ['bernd@europeanhightechpavilion.com']
},
{
id: 'tmevnet-co-ltd',
name: 'TMEVnet Co., Ltd.',
keywords: ['megawatt-ultra-schnellladen', 'flüssigkeitskühlung', 'thermisches management', 'überhitzungsprobleme', 'hochleistungs-ev-ladungen', 'wärmeableitung', 'steckverbinder', 'kabel', 'leistungsmodule', 'flüssig-phasenwechselkühlung', 'schnellladestandards', 'fahrzeuganschluss', 'ladebuchse', 'steckverbinder', 'hochleitfähiges aluminium', 'kühlmittelführung', 'leistungsverluste', 'wärmemanagement', 'mobility on demand', 'mobility as a service', 'smart city mobility', 'smart country mobility', 'charging and refueling infrastructure incl. energy grid', 'future drive technologies incl. h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D113'
},
role: 'Hauptaussteller',
profile: 'TMEVnet entwickelt innovative thermische Management-Technologien zur Lösung von Überhitzungsproblemen bei Hochleistungs-EV-Ladungen. Unsere Lösung ermöglicht Megawatt-Laden mit bestehenden Schnellladestandards durch fortschrittliche Flüssig-Phasenwechselkühlung. Ein Schwerpunkt liegt auf dem Fahrzeuganschluss, der kritischen Schnittstelle zwischen Ladebuchse und Steckverbinder.',
themes: ['Mobility on demand', 'Mobility as a Service', 'Smart City Mobility', 'Smart Country Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Future Drive Technologies incl. H2'],
address: '1307, Building 201, Chunui Technopark, Chunui-dong, Bucheon-si, Gyeonggi-do, Bucheon-si 14557, Südkorea (KR)',
website: 'www.tmevnet.com',
emails: ['edwardchun@tmevnet.com', 'tm01@tmevnet.com']
},
{
id: 'tmevnet-co-ltd',
name: 'TMEVnet Co., Ltd.',
keywords: ['megawatt-ultra-schnellladen', 'flüssigkeitskühlung', 'thermisches management', 'überhitzungsprobleme', 'hochleistungs-ev-ladungen', 'wärmeableitung', 'steckverbinder', 'kabel', 'leistungsmodule', 'flüssig-phasenwechselkühlung', 'schnellladestandards', 'fahrzeuganschluss', 'ladebuchse', 'steckverbinder', 'hochleitfähiges aluminium', 'kühlmittelführung', 'leistungsverluste', 'wärmemanagement', 'mobility on demand', 'mobility as a service', 'smart city mobility', 'smart country mobility', 'charging and refueling infrastructure', 'future drive technologies'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D113'
},
role: 'Hauptaussteller',
profile: 'TMEVnet entwickelt innovative thermische Management-Technologien zur Lösung von Überhitzungsproblemen bei Hochleistungs-EV-Ladungen. Unsere Lösung ermöglicht Megawatt-Laden mit bestehenden Schnellladestandards durch fortschrittliche Flüssig-Phasenwechselkühlung. Ein Schwerpunkt liegt auf dem Fahrzeuganschluss, der kritischen Schnittstelle zwischen Ladebuchse und Steckverbinder.',
themes: ['Mobility on demand', 'Mobility as a Service', 'Smart City Mobility', 'Smart Country Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Future Drive Technologies incl. H2'],
address: '1307, Building 201, Chunui Technopark, Chunui-dong, Bucheon-si, Gyeonggi-do, Bucheon-si 14557, Südkorea (KR)',
website: 'www.tmevnet.com',
emails: ['edwardchun@tmevnet.com', 'tm01@tmevnet.com']
},
{
id: 'eve-energy-co-ltd',
name: 'EVE Energy Co., Ltd.',
keywords: ['batterien', 'energiespeicher', 'lithium-ionen', 'akkus', 'energieversorgung', 'elektromobilität', 'energiemanagement', 'batterietechnologie', 'energieeffizienz', 'energiesysteme'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'B11'
},
role: 'Hauptaussteller',
profile: 'EVE Energy Co., Ltd. ist ein führender Anbieter von Batterien und Energiespeicherlösungen. Das Unternehmen bietet innovative Lithium-Ionen-Technologien für verschiedene Anwendungen. EVE Energy ist bekannt für seine hochwertigen Akkus und Energiemanagementsysteme.',
themes: [],
address: 'No.38, Huifeng 7th Road, Zhongkai Hi-Tech Zone, 516000 Huizhou, Guangdong, China',
website: 'www.evebattery.com',
emails: []
},
{
id: 'eve-energy-co-ltd',
name: 'EVE Energy Co., Ltd.',
keywords: ['batterien', 'energiespeicher', 'lithium-ionen', 'akkus', 'energieversorgung', 'elektromobilität', 'energiemanagement', 'batterietechnologie', 'energieeffizienz', 'energiesysteme'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'B11'
},
role: 'Hauptaussteller',
profile: 'EVE Energy Co., Ltd. ist ein führender Anbieter von Batterien und Energiespeicherlösungen. Das Unternehmen bietet innovative Lithium-Ionen-Technologien für verschiedene Anwendungen. EVE Energy ist bekannt für seine hochwertigen Akkus und Energieversorgungssysteme.',
themes: [],
address: 'No.38, Huifeng 7th Road, Zhongkai Hi-Tech Zone, 516000 Huizhou, Guangdong, China',
website: 'www.evebattery.com',
emails: []
},
{
id: 'evr-motors',
name: 'EVR Motors',
keywords: ['electric motors', 'custom electric motors', 'patented technology', 'oem', 'tier-1', 'motor design', 'prototyping', 'manufacturing preparation', 'automotive', 'micromobility', 'supplier', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C12'
},
role: 'Mitaussteller',
profile: 'EVR Motors is an innovative Israeli company specializing in the design of advanced electric motors that are customized to meet specific customer requirements. The company’s electric motors are based on proprietary technology that reduces weight, volume, and cost relative to traditional state of the art motors. EVR Motors partners with OEMs and Tier 1s interested in manufacturing superior e-motors, and supports its partners through all the phases, from motor design through prototyping to manufacturing preparation.',
themes: ['Automotive', 'Micromobility', 'Supplier', 'Future Drive Technologies incl. H2'],
address: '31 Modi\'in St., 4927189 Petah Tikva, Israel',
website: 'evr-motors.com',
emails: ['info@evr-motors.com', 'kobem@evr-motors.com', 'noak@evr-motors.com']
},
{
id: 'eye-net-mobile',
name: 'Eye-Net Mobile',
keywords: ['v2x collision prevention', 'smart automotive systems', 'road safety', 'situational awareness', 'ai technology', 'advanced analytics', 'cellular networks', 'pre-collision alerts', 'smartphones', 'smart devices', 'eye-net protect', 'sdk', 'vulnerable road users', 'drivers', 'pedestrians', 'cyclists', 'micromobility riders', 'eye-net sense', 'driver assistance', 'control units', 'navigation', 'entertainment', 'virtual sensor'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C12'
},
role: 'Mitaussteller',
profile: 'Eye-Net develops next-generation V2X collision prevention solutions and smart automotive systems to enhance road safety and situational awareness for all road users in the urban mobility environment. By leveraging cutting-edge artificial intelligence (AI) technology, advanced analytics, and existing cellular networks, Eye-Net’s innovative solution suite delivers real-time pre-collision alerts to all road users using smartphones and other smart devices within vehicles.',
themes: ['Automotive', 'Micromobility', 'Smart City Mobility', 'Road Safety', 'Connectivity, IoT & Big Data'],
address: 'Golda Meir 7, 7403650 Ness Ziona, Israel',
website: 'www.eyenet-mobile.com/',
emails: ['benyaminp@eyenet-mobile.com']
},
{
id: 'eye-net-mobile',
name: 'Eye-Net Mobile',
keywords: ['v2x collision prevention', 'smart automotive systems', 'road safety', 'situational awareness', 'ai technology', 'advanced analytics', 'cellular networks', 'pre-collision alerts', 'smartphones', 'smart devices', 'eye-net protect', 'sdk', 'vulnerable road users', 'drivers', 'pedestrians', 'cyclists', 'micromobility riders', 'eye-net sense', 'driver assistance', 'control units', 'navigation', 'entertainment', 'virtual sensor'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C12'
},
role: 'Mitaussteller',
profile: 'Eye-Net develops next-generation V2X collision prevention solutions and smart automotive systems to enhance road safety and situational awareness for all road users in the urban mobility environment. By leveraging cutting-edge artificial intelligence (AI) technology, advanced analytics, and existing cellular networks, Eye-Net’s innovative solution suite delivers real-time pre-collision alerts to all road users using smartphones and other smart devices within vehicles.',
themes: ['Automotive', 'Micromobility', 'Smart City Mobility', 'Road Safety', 'Connectivity, IoT & Big Data'],
address: 'Golda Meir 7, 7403650 Ness Ziona, Israel',
website: 'www.eyenet-mobile.com/',
emails: ['benyaminp@eyenet-mobile.com']
},
{
id: 'factorial-energy',
name: 'Factorial Energy',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D29'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: '805 Middlesex Turnpike, Billerica 01821, USA',
website: 'www.factorialenergy.com',
emails: []
},
{
id: 'bmw-group',
name: 'BMW GROUP',
keywords: ['automotive', 'test drives', 'family', 'mobility', 'innovation', 'vehicles', 'transportation', 'open space', 'summit', 'exhibitor', 'main exhibitor', 'cars', 'technology', 'solutions', 'future mobility'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'E01'
},
role: 'Hauptaussteller',
profile: 'BMW GROUP is a leading automotive company known for its innovative vehicles and solutions in the mobility sector.',
themes: [],
address: '80809 München, Deutschland',
website: undefined,
emails: []
},
{
id: 'faluomi-srl',
name: 'FALUOMI SRL',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B11'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'VIA DEI FIORDALISI 15, 06063 MAGIONE (PG), Italien',
website: 'www.faluomi.it',
emails: []
},
{
id: 'faluomi-srl',
name: 'FALUOMI SRL',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B11'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'VIA DEI FIORDALISI 15, 06063 MAGIONE (PG), Italien',
website: 'www.faluomi.it',
emails: []
},
{
id: 'fark-labs',
name: 'FARK LABS',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'B323'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Maslak Mah. AOS 55.Sk. 42 Maslak A Blok No:2 Ic Kapi No: 9 Sariyer, 34485 Istanbul, Türkei',
website: 'www.farklabs.com',
emails: ['omer.hantal@farklabs.com']
},
{
id: 'farplas-otomotiv-as',
name: 'FARPLAS OTOMOTİV A.Ş.',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'B324'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'TOSB Otomotiv (OSB) Mah. 3. Cad. No:11/2, 41420 Kocaeli, Türkei',
website: 'www.farplas.com.tr',
emails: []
},
{
id: 'feintool-international-holding-ag',
name: 'Feintool International Holding AG',
keywords: ['elektroblechstanzen', 'feinschneiden', 'umformen', 'präzisionsteile', 'automobilproduktion', 'industrieanwendungen', 'energiesektor', 'erneuerbare energie', 'technologieführer', 'produktionsmethoden', 'intelligente lösungen', 'innovative werkzeuge', 'moderne fertigungsverfahren'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Feintool ist internationaler Technologie- und Marktführer im Elektroblechstanzen, Feinschneiden und Umformen. Wir stellen hochwertige Präzisionsteile in Grossserien aus Stahl her. Unsere Kunden stammen aus der Automobilproduktion, sind Anbieter von anspruchsvollen Industrieanwendungen und wirtschaften im Energiesektor.',
themes: [],
address: 'Industriering 8, 3250 Lyss, Schweiz',
website: 'www.feintool.com',
emails: ['patrick.vonmuellenen@feintool.com', 'julia.prinz@feintool.com']
},
{
id: 'feintool-international-holding-ag',
name: 'Feintool International Holding AG',
keywords: ['elektroblechstanzen', 'feinschneiden', 'umformen', 'präzisionsteile', 'automobilproduktion', 'industrieanwendungen', 'energiesektor', 'erneuerbare energie', 'technologieführer', 'innovative werkzeuge', 'moderne fertigungsverfahren', 'produktionstechnologien', 'wirtschaftlichkeit', 'produktivität', 'qualität', 'intelligente lösungen'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Feintool ist internationaler Technologie- und Marktführer im Elektroblechstanzen, Feinschneiden und Umformen. Wir stellen hochwertige Präzisionsteile in Grossserien aus Stahl her. Unsere Kunden stammen aus der Automobilproduktion, sind Anbieter von anspruchsvollen Industrieanwendungen und wirtschaften im Energiesektor.',
themes: [],
address: 'Industriering 8, 3250 Lyss, Schweiz',
website: 'www.feintool.com',
emails: ['patrick.vonmuellenen@feintool.com', 'julia.prinz@feintool.com']
},
{
id: 'fibet-spa',
name: 'FIBET SPA',
keywords: ['vibration solutions', 'elastomers', 'anti-vibration components', 'rubber-metal products', 'noise reduction', 'vibration reduction', 'weight reduction', 'automotive', 'commercial vehicles', 'sports cars', 'hybrid vehicles', 'electric vehicles', 'suspension bushes', 'engine mounts', 'transmission mounts', 'comfort improvement', 'vehicle handling', 'system lifespan', 'prototyping services', 'static testing', 'dynamic testing', 'lifecycle testing', 'bench fatigue testing', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: 'Fibet is a global leader in the mechanical application of elastomers and design, develops and manufactures anti-vibration components and other rubber-metal products to provide complete solutions to noise, vibration and weight reduction concerns. Our solutions support the entire automotive and commercial vehicle industry - from high performance sports cars to standard production models, as well as the latest hybrid and electric vehicles. Fibet specialises in suspension bushes and engine & transmission mounts which are designed to improve comfort, optimize vehicle handling, and extend the system’s lifespan.',
themes: ['Automotive', 'LEV', 'Micromobility', 'Public Transport', 'Manufacturing & Supply Chain', 'Supplier'],
address: 'Via Alba 12/6, 10024 Moncalieri (TO), Italien',
website: 'www.fibet.it',
emails: ['patrizia.cavallo@fibet.it', 'maria.grimaldi@fibet.it']
},
{
id: 'fih-co-ltd',
name: 'FIH Co., Ltd.',
keywords: ['automotive', 'road safety', 'regulation', 'liability', 'esgs', 'manufacturing', 'supply chain', 'supplier', 'autonomous driving', 'connectivity', 'iot', 'big data', 'entertainment', 'vr'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'A13'
},
role: 'Hauptaussteller',
profile: 'FIH Co., Ltd. ist ein führender Anbieter in der Automobilindustrie mit Fokus auf Sicherheit, Regulierung und Lieferkettenmanagement.',
themes: ['Automotive', 'Road Safety', 'Regulation, Liability & ESGs', 'Manufacturing & Supply Chain', 'Supplier', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'Entertainment & VR'],
address: 'No. 4, Minsheng St., Tucheng Dist, New Taipei City 236, Taiwan (Chinesisch-Taipeh)',
website: 'www.fihmobile.com/en',
emails: ['a_sales@fih-foxconn.com']
},
{
id: 'the-fine-hub',
name: 'The Fine Hub',
keywords: ['bußgeld-compliance', 'fahrzeugflotten', 'compliance', 'echtzeit-transparenz', 'proaktiver schutz', 'gesetzesänderungen', 'automatisierte fahrermeldung', 'behördenmeldungen', 'eu-vorschriften', 'dsgvo', 'auditierbar', 'bußgeld-daten', 'road safety', 'regulation', 'liability', 'esgs', 'connectivity', 'iot', 'big data', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D105'
},
role: 'Hauptaussteller',
profile: 'In Europas komplexem Bußgeld-Dschungel drohen Unternehmen mit Fahrzeugflotten hohe Strafen – schon kleine Fehler bei der Fahrermeldung werden teuer. The Fine Hub macht Schluss mit diesem Risiko.',
themes: ['Automotive', 'LEV', 'Micromobility', 'Mobility on demand', 'Mobility as a Service', 'Smart City Mobility', 'Smart Country Mobility', 'Road Safety', 'Regulation, Liability & ESGs', 'Connectivity, IoT & Big Data', 'AI & GenAI'],
address: 'Koningin Wilhelminaplein 1, 1062 HG Amsterdam, Niederlande',
website: 'www.thefinehub.com/',
emails: ['sales@thefinehub.com', 'markus@thefinehub.com', 'max@thefinehub.com', 'matthijs@thefinehub.com']
},
{
id: 'finest-automotive-technology-group-co-ltd',
name: 'FINEST Automotive Technology Group Co., Ltd.',
keywords: ['intelligente antriebstechnologien', 'verbrennungsmotoren', 'v8-motor', 'biturbo-technologie', 'hybridgetriebe', '9hat', '3dht215', 'sic-leistungselektronik', '800v-systeme', 'soundsysteme', 'softwaredefiniert', 'skalierbar', 'oem-partner', 'automotive', 'supplier', 'semiconductors & chips'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E22'
},
role: 'Hauptaussteller',
profile: 'FINEST Automotive (ehemals HYCET) ist ein führender Entwickler und Hersteller intelligenter Antriebstechnologien. Unsere drei Geschäftsbereiche – Engine, Transmission und Electronics – bieten ein umfassendes Technologieportfolio für die Mobilität von morgen. Mit deutscher Ingenieurskompetenz und chinesischer Innovationsdynamik realisiert FINEST durchgängige Entwicklung und Fertigung – von der Konzeptphase bis zur Serie.',
themes: ['Automotive', 'Supplier', 'Semiconductors & Chips'],
address: 'No.75 Dongsheng Road, 071000 Baoding, Hebei, China',
website: 'www.finestauto.com',
emails: ['tobias.lenz@finestauto.com', 'zhengdong@finestauto.com', 'michael.qi@finestauto.com']
},
{
id: 'finn',
name: 'FINN',
keywords: ['auto-abos', 'rundum-sorglos-paket', 'versicherung', 'finanzierung', 'anmeldung', 'steuern', 'wartung', 'klimaschutzprojekte', 'co2-kompensation', 'fahrzeugproduktion', 'mobilität', 'unabhängige plattform', 'auto abonnieren', 'lieferung', 'mobilität auf abruf', 'mobility as a service', 'decarbonization'],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP170'
},
role: 'Hauptaussteller',
profile: 'FINN ist die unabhängige Plattform für Auto-Abos von über 30 Marken. Mit wenigen Klicks ein Auto abonnieren, das in wenigen Tagen direkt vor die Haustür geliefert wird: FINN bietet einen Rundum-Sorglos-Service und kümmert sich um Versicherung, Finanzierung, Anmeldung, Steuern oder auch Wartung. Dazu unterstützt FINN zertifizierte Klimaschutzprojekte und kompensiert damit den CO₂-Fußabdruck jedes Fahrzeuges aller Antriebsarten – von der Produktion bis hin zu jedem gefahrenen Kilometer.',
themes: ['Automotive', 'LEV', 'Mobility on demand', 'Mobility as a Service', 'Decarbonization'],
address: 'Prinzregentenplatz 9, 81675 München, Deutschland',
website: 'https://www.finn.com/',
emails: ['events@finn.com', 'adrian.limbach-smiatek@finn.com', 'b2b@finn.com', 'iaa@finn.com']
},
{
id: 'fived',
name: 'fiveD',
keywords: ['radarsimulation', 'autonomes fahren', 'adas', 'softwarelösungen', 'automotive', 'industrie', 'consumer-elektronik', 'radarrohdaten', 'sensorfunktionalitäten', 'radar-ki', 'road safety', 'software defined vehicles', 'autonomous driving', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D125'
},
role: 'Hauptaussteller',
profile: 'fiveD ist ein innovatives Software-Startup, das sich zum Ziel gesetzt hat, die Zukunft der Radarentwicklung zu gestalten. Das Unternehmen entwickelt und vertreibt fortschrittliche Softwarelösungen für realistische Radarsimulationen in den Bereichen Automotive, Industrie und Consumer-Elektronik. Mit dem Produktportfolio können entlang der gesamten Wirkungskette von Radarrohdaten bis zu erweiterten Sensorfunktionalitäten hyperrealistische Daten simuliert werden.',
themes: ['Road Safety', 'Software Defined Vehicles', 'Autonomous Driving', 'AI & GenAI'],
address: 'Paul-Gossen-Straße 75, 91052 Erlangen, Deutschland',
website: 'www.five-d.ai',
emails: ['contact@five-d.ai', 'michael.stelzig@five-d.ai', 'marcel.hoffmann@five-d.ai', 'tim.pfahler@five-d.ai']
},
{
id: 'fived',
name: 'fiveD',
keywords: ['radarsimulation', 'autonomes fahren', 'adas', 'softwarelösungen', 'automotive', 'industrie', 'consumer-elektronik', 'radarrohdaten', 'sensorfunktionalitäten', 'radar-ki', 'road safety', 'software defined vehicles', 'autonomous driving', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D125'
},
role: 'Hauptaussteller',
profile: 'fiveD ist ein innovatives Software-Startup, das sich zum Ziel gesetzt hat, die Zukunft der Radarentwicklung zu gestalten. Das Unternehmen entwickelt und vertreibt fortschrittliche Softwarelösungen für realistische Radarsimulationen in den Bereichen Automotive, Industrie und Consumer-Elektronik. Mit dem Produktportfolio können entlang der gesamten Wirkungskette von Radarrohdaten bis zu erweiterten Sensorfunktionalitäten hyperrealistische Daten simuliert werden.',
themes: ['Road Safety', 'Software Defined Vehicles', 'Autonomous Driving', 'AI & GenAI'],
address: 'Paul-Gossen-Straße 75, 91052 Erlangen, Deutschland',
website: 'www.five-d.ai',
emails: ['contact@five-d.ai', 'michael.stelzig@five-d.ai', 'marcel.hoffmann@five-d.ai', 'tim.pfahler@five-d.ai']
},
{
id: 'fkg-scandinavian-automotive-supplier-association',
name: 'FKG Scandinavian Automotive Supplier Association',
keywords: ['automobilindustrie', 'zulieferer', 'tier-1', 'start-ups', 'oem', 'hochschulen', 'regierungsbehörden', 'grüner wandel', 'schwedische automobilindustrie', 'clepa', 'europäische automobilindustrie', 'swedish supplier power', 'nachhaltigkeit', 'emissionsreduzierung', 'energieeffizienz', 'kreislaufwirtschaft', 'f&e', 'automatisierung', 'digitalisierung', 'kooperation', 'innovation', 'branchenwachstum'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E20'
},
role: 'Hauptaussteller',
profile: 'FKG ist der Verband der skandinavischen Zulieferer der Automobilindustrie. FKG hat rund 300 Mitgliedsunternehmen, von großen Tier-1-Unternehmen bis hin zu Start-ups. FKG arbeitet eng mit Mitgliedern, OEMs, Hochschulen und Regierungsbehörden zusammen, um die Entwicklung und den grünen Wandel der schwedischen Automobilindustrie zu stärken und zu fördern.',
themes: ['Automotive', 'Regulation, Liability & ESGs', 'Manufacturing & Supply Chain', 'International Trade and Markets', 'Supplier'],
address: 'Dykarevägen 8, 451 41 Uddevalla, Schweden',
website: 'www.fkg.se',
emails: ['info@fkg.se', 'peter.bryntesson@fkg.se', 'lina.galow@fkg.se']
},
{
id: 'ford',
name: 'Ford',
keywords: ['elektromobilität', 'pkw', 'nfz', 'individuelle softwarelösungen', 'e-konzepte', 'assistenztechnologien', 'automotive', 'connectivity', 'iot', 'big data'],
location: {
type: 'Open Space',
hallOrPlace: 'Odeonsplatz',
booth: 'OP380'
},
role: 'Hauptaussteller',
profile: 'Seit 1925 haben mehr als 47 Millionen Ford Pkw und Nutzfahrzeuge die Bänder der deutschen Ford-Werke GmbH verlassen – und somit die Welt mobiler gemacht. Immer mit dem klaren Ziel, die Zukunft zu gestalten: durch wegweisende E-Konzepte, innovative Assistenztechnologien und individuelle Services.',
themes: ['Automotive', 'Connectivity, IoT & Big Data'],
address: 'Henry-Ford-Str. 1, 50735 Köln, Deutschland',
website: 'www.ford.de',
emails: []
},
{
id: 'ford',
name: 'Ford',
keywords: ['elektromobilität', 'pkw', 'nfz', 'individuelle softwarelösungen', 'e-konzepte', 'assistenztechnologien', 'automotive', 'connectivity', 'iot', 'big data'],
location: {
type: 'Open Space',
hallOrPlace: 'Odeonsplatz',
booth: 'OP380'
},
role: 'Hauptaussteller',
profile: 'Seit 1925 haben mehr als 47 Millionen Ford Pkw und Nutzfahrzeuge die Bänder der deutschen Ford-Werke GmbH verlassen – und somit die Welt mobiler gemacht. Immer mit dem klaren Ziel, die Zukunft zu gestalten: durch wegweisende E-Konzepte, innovative Assistenztechnologien und individuelle Services.',
themes: ['Automotive', 'Connectivity, IoT & Big Data'],
address: 'Henry-Ford-Str. 1, 50735 Köln, Deutschland',
website: 'www.ford.de',
emails: []
},
{
id: 'fpt-deutschland',
name: 'FPT Deutschland',
keywords: ['technologie', 'it services', 'automotive', 'telecommunications', 'education', 'artificial intelligence', 'semiconductor', 'digital transformation', 'green transformation', 'road safety', 'manufacturing', 'supply chain', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'cybersecurity'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'FPT Corporation (FPT) is a globally leading technology and IT services provider headquartered in Vietnam and operates in three core sectors: Technology, Telecommunications, and Education. The Corporation focuses on five strategic areas: Artificial Intelligence, Automotive, Semiconductor, Digital Transformation, and Green Transformation.',
themes: ['Automotive', 'Road Safety', 'Manufacturing & Supply Chain', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Cybersecurity'],
address: 'Am Thyssenhaus 1 - 3 (Haus 3), 45128 Essen, Deutschland',
website: 'www.fptsoftware.com',
emails: ['uyenvp2@fpt.com', 'ducnn16@fpt.com', 'nguyennnt2@fpt.com']
},
{
id: 'fraunhofer-allianz-verkehr',
name: 'Fraunhofer-Allianz Verkehr',
keywords: ['forschungsallianz', 'mobilitätskonzepte', 'digitalisierung', 'intelligente verkehrssysteme', 'vernetzte fahrzeuge', 'automatisierung', 'datenkommunikation', 'netzwerke', 'nachhaltige mobilitätslösungen', 'automotive', 'public transport', 'mobility as a service', 'intermodality', 'smart city mobility', 'smart country mobility', 'road safety', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Als führende Forschungsallianz im Bereich der Mobilität präsentieren wir Ihnen unsere neuesten Forschungsergebnisse und zukunftsweisenden Technologien. Mit unserer Expertise in den Bereichen Mobilitätskonzepte, Digitalisierung, intelligente Verkehrssysteme und vernetzte Fahrzeuge, Automatisierung sowie Datenkommunikation und Netzwerke sind wir Vorreiter in der Entwicklung nachhaltiger und effizienter Mobilitätslösungen.',
themes: ['Automotive', 'Public Transport', 'Mobility as a Service', 'Intermodality', 'Smart City Mobility', 'Smart Country Mobility', 'Road Safety', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI'],
address: 'Joseph-von-Fraunhofer-Str. 2-4, 44227 Dortmund, Deutschland',
website: 'www.verkehr.fraunhofer.de',
emails: ['info@verkehr.fraunhofer.de', 'christiane.kraas@iml.fraunhofer.de', 'christine.hupperich@izfp.fraunhofer.de']
},
{
id: 'fraunhofer-allianz-verkehr',
name: 'Fraunhofer-Allianz Verkehr',
keywords: ['forschungsallianz', 'mobilitätskonzepte', 'digitalisierung', 'intelligente verkehrssysteme', 'vernetzte fahrzeuge', 'automatisierung', 'datenkommunikation', 'netzwerke', 'nachhaltige mobilitätslösungen', 'effiziente mobilitätslösungen', 'automotive', 'public transport', 'mobility as a service', 'intermodality', 'smart city mobility', 'smart country mobility', 'road safety', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Als führende Forschungsallianz im Bereich der Mobilität präsentieren wir Ihnen unsere neuesten Forschungsergebnisse und zukunftsweisenden Technologien. Mit unserer Expertise in den Bereichen Mobilitätskonzepte, Digitalisierung, intelligente Verkehrssysteme und vernetzte Fahrzeuge, Automatisierung sowie Datenkommunikation und Netzwerke sind wir Vorreiter in der Entwicklung nachhaltiger und effizienter Mobilitätslösungen.',
themes: ['Automotive', 'Public Transport', 'Mobility as a Service', 'Intermodality', 'Smart City Mobility', 'Smart Country Mobility', 'Road Safety', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI'],
address: 'Joseph-von-Fraunhofer-Str. 2-4, 44227 Dortmund, Deutschland',
website: 'www.verkehr.fraunhofer.de',
emails: ['info@verkehr.fraunhofer.de', 'christiane.kraas@iml.fraunhofer.de', 'christine.hupperich@izfp.fraunhofer.de']
},
{
id: 'fraunhofer-gesellschaft',
name: 'Fraunhofer-Gesellschaft',
keywords: ['forschungsprojekte', 'autonomes fahren', 'konnektivität', 'urbane mobilität', 'digitale zukunftstechnologien', 'innovative konzepte', 'mobility as a service', 'intermodality', 'road safety', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'semiconductors', 'chips', 'entertainment', 'vr'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C10'
},
role: 'Hauptaussteller',
profile: 'Acht Fraunhofer-Institute stellen ein breites Spektrum an Forschungsprojekten und -ergebnissen aus den Bereichen autonomes Fahren & Konnektivität, urbane Mobilität und digitale Zukunftstechnologien vor und zeigen innovative Konzepte.',
themes: ['Mobility as a Service', 'Intermodality', 'Road Safety', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Semiconductors & Chips', 'Entertainment & VR'],
address: 'Hansastraße 27 c, 80686 München, Deutschland',
website: 'www.fraunhofer.de',
emails: ['info@fraunhofer.de', 'susanne.pichotta@zv.fraunhofer.de']
},
{
id: 'fraunhofer-gesellschaft',
name: 'Fraunhofer-Gesellschaft',
keywords: ['forschungsprojekte', 'autonomes fahren', 'konnektivität', 'urbane mobilität', 'digitale zukunftstechnologien', 'innovative konzepte', 'mobility as a service', 'intermodality', 'road safety', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'semiconductors', 'chips', 'entertainment', 'vr'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C10'
},
role: 'Hauptaussteller',
profile: 'Acht Fraunhofer-Institute stellen ein breites Spektrum an Forschungsprojekten und -ergebnissen aus den Bereichen autonomes Fahren & Konnektivität, urbane Mobilität und digitale Zukunftstechnologien vor und zeigen innovative Konzepte.',
themes: ['Mobility as a Service', 'Intermodality', 'Road Safety', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Semiconductors & Chips', 'Entertainment & VR'],
address: 'Hansastraße 27 c, 80686 München, Deutschland',
website: 'www.fraunhofer.de',
emails: ['info@fraunhofer.de', 'susanne.pichotta@zv.fraunhofer.de']
},
{
id: 'fraunhofer-idmt-institut-fuer-digitale-medientechnologie-institutsteil-hoer-sprach-und-audiotechnologie',
name: 'Fraunhofer IDMT - Institut für Digitale Medientechnologie Institutsteil Hör-, Sprach- und Audiotechnologie',
keywords: ['ki-basierte technologien', 'akustische szenenerfassung', 'autonomes fahren', 'akustische sensorik', 'fahrzeugsicherheit', 'gesundheitsüberwachung', 'fahrerzustandserkennung', 'elektroenzephalographie', 'mensch-maschine-interaktion', 'kurzstrecken-radar-sensor', 'vitaldaten', 'yoursound technologie', 'klangverbesserung', 'automotive', 'autonomous driving', 'entertainment & vr', 'future drive technologies incl. h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Mit »The Hearing Car« präsentiert das Fraunhofer IDMT in Oldenburg ein Demofahrzeug, das über KI-basierte Technologien zur akustischen Szenenerfassung verfügt. Akustische Sensoren erhöhen die Sicherheit und Zuverlässigkeit im Straßenverkehr. Verschiedene Technologien ermöglichen ein neues Niveau der Gesundheitsüberwachung und Fahrerzustandserkennung im Fahrzeuginnenraum.',
themes: ['Automotive', 'Autonomous Driving', 'Entertainment & VR', 'Future Drive Technologies incl. H2'],
address: 'Marie-Curie-Straße 2, 26129 Oldenburg, Deutschland',
website: 'www.idmt.fraunhofer.de',
emails: ['hsa-messen@idmt.fraunhofer.de', 'christian.colmer@idmt.fraunhofer.de', 'moritz.brandes@idmt.fraunhofer.de', 'axel.winneke@idmt.fraunhofer.de']
},
{
id: 'fraunhofer-institut-fur-angewandte-optik-und-feinmechanik-iof',
name: 'Fraunhofer Institut für Angewandte Optik und Feinmechanik IOF',
keywords: ['photonik', 'automobilindustrie', 'bildgebung', 'sensorik', 'intelligente anzeigen', 'medien', 'kommunikationsnetze', 'produktion', 'qualitätskontrolle', 'beleuchtung', 'automobil-photonik', 'systemdesign', 'simulation', 'kundenspezifische lösungen', 'systemintegration', 'photonische anwendungen', 'fahrzeug', 'produktion', 'innovation'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Die Photonik hat in den letzten Jahren in der Automobilindustrie eine Revolution erlebt. Sie hat sich von der reinen Beleuchtungsfunktion zu einer Spitzentechnologie für Bildgebung, Sensorik, intelligente Anzeigen, Medien und Kommunikationsnetze entwickelt. Das Fraunhofer IOF setzt Forschung in anwendbare Lösungen um und bietet die komplette Photonik-Prozesskette vom Systemdesign und der Simulation über die Realisierung kundenspezifischer Lösungen bis hin zur Systemintegration.',
themes: ['Automotive', 'Road Safety', 'Autonomous Driving', 'Future Drive Technologies incl. H2'],
address: 'Albert-Einstein-Str. 7, 07745 Jena, Deutschland',
website: 'www.iof.fraunhofer.de/de/maerkte/automobil-markt.html',
emails: ['stefan.riehemann@iof.fraunhofer.de']
},
{
id: 'gac',
name: 'GAC',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E01'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'NO. 60. Donglong Road Panyu District, 511434 Guangzhou, China',
website: undefined,
emails: []
},
{
id: 'gama-katech-technology-institute-katech',
name: 'GAMA / KATECH Technology Institute (KATECH)',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B42'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: '22, Bitdong 10-ro, Gwangsan-gu, Gwangju 62405, Südkorea (KR)',
website: 'www.gama.or.kr',
emails: []
},
{
id: 'gebauer-griller-kabelwerke-gesellschaft-mbh',
name: 'Gebauer & Griller Kabelwerke Gesellschaft m.b.H.',
keywords: ['e-mobility', 'hv-leitungssätze', 'aluminium-hv-verkabelung', 'leitungssätze lv/48v', 'energieverteilung', 'datenkabel', 'automobilanwendungen', 'oem', 'systemlieferanten', 'automotive', 'micromobility', 'public transport', 'supplier', 'software defined vehicles', 'connectivity', 'iot', 'big data'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'C40'
},
role: 'Mitaussteller',
profile: 'Die GG Group produziert hochwertige Lösungen für die Automobilindustrie. GG entwickelt maßgeschneiderte Lösungen für die spezifischen Bordnetzsysteme moderner Hybrid- und Elektroantriebe. Unsere hochautomatisierten und skalierbaren Produktionsprozesse garantieren höchste Qualität.',
themes: ['Automotive', 'Micromobility', 'Public Transport', 'Supplier', 'Software Defined Vehicles', 'Connectivity, IoT & Big Data'],
address: 'Muthgasse 34, 1190 Wien, Österreich',
website: 'www.gg-group.com',
emails: ['ggwien@gg-group.com']
},
{
id: 'gefim-ug-haftungsbeschraenkt',
name: 'GEFIM UG (haftungsbeschränkt)',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C306'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Neckarstraße 7, 38120 Braunschweig, Deutschland',
website: 'www.gefim.de',
emails: []
},
{
id: 'genesis-motor-deutschland-gmbh',
name: 'Genesis Motor Deutschland GmbH',
keywords: ['automobile luxuswelt', 'elektrifizierte ausrichtung', 'koreanische identität', 'premiumsegment', 'moderne technologien', 'dynamische performance', 'athletic elegance', 'gv60', 'electrified gv70', 'electrified g80', 'souveräne leistung', 'intelligente funktionen', 'koreanische ästhetik', 'schönheit des weißen raums', 'designorientierte performance-marke', 'gv60 magma', 'high-performance-modell', 'genesis magma racing', 'lmdh-fahrzeug', 'world endurance championship', 'nachhaltige zukunft', 'co2-neutral'],
location: {
type: 'Open Space',
hallOrPlace: 'Odeonsplatz',
booth: 'TD310'
},
role: 'Mitaussteller',
profile: 'Ursprünglich in Seoul gegründet, definiert Genesis das Premiumsegment mit einer klar elektrifizierten Ausrichtung und einer unverwechselbaren koreanischen Identität. Die preisgekrönten Modelle verbinden modernste Technologien mit dynamischer Performance und der charakteristischen Designphilosophie „Athletic Elegance“.',
themes: ['Automotive'],
address: 'Strahlenbergerstrasse 110-112, 63067 Offenbach, Deutschland',
website: 'www.genesis.com',
emails: ['ask@de.genesis.com', 'kai@performancecomms.com', 'michael.langen@de.genesis.com']
},
{
id: 'genesis-motor-deutschland-gmbh',
name: 'Genesis Motor Deutschland GmbH',
keywords: ['automobile luxuswelt', 'elektrifizierte ausrichtung', 'koreanische identität', 'premiumsegment', 'moderne technologien', 'dynamische performance', 'athletic elegance', 'gv60', 'electrified gv70', 'electrified g80', 'souveräne leistung', 'intelligente funktionen', 'koreanische ästhetik', 'schönheit des weißen raums', 'designorientierte performance-marke', 'gv60 magma', 'high-performance-modell', 'genesis magma racing', 'lmdh-fahrzeug', 'world endurance championship', 'nachhaltige zukunft', 'co2-neutral'],
location: {
type: 'Open Space',
hallOrPlace: 'Odeonsplatz',
booth: 'TD310'
},
role: 'Mitaussteller',
profile: 'Genesis setzt neue Maßstäbe in Sachen automobile Luxuswelt. Ursprünglich in Seoul gegründet, definiert Genesis das Premiumsegment mit einer klar elektrifizierten Ausrichtung und einer unverwechselbaren koreanischen Identität. Die preisgekrönten Modelle verbinden modernste Technologien mit dynamischer Performance und der charakteristischen Designphilosophie „Athletic Elegance“.',
themes: ['Automotive'],
address: 'Strahlenbergerstrasse 110-112, 63067 Offenbach, Deutschland',
website: 'www.genesis.com',
emails: ['ask@de.genesis.com', 'kai@performancecomms.com', 'michael.langen@de.genesis.com']
},
{
id: 'projekt-trasaar',
name: 'Projekt TraSaar (Teilprojekt 4: Wasserstoff und Brennstoffzelle)',
keywords: ['wasserstoff', 'brennstoffzelle', 'wirtschaftsfoerderung', 'summit', 'gw saar', 'wirtschaftsfoerderung saar', 'trasaar', 'saarland', 'technologie', 'innovation'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C21'
},
role: 'Mitaussteller',
profile: 'Projekt TraSaar beschäftigt sich mit Wasserstoff und Brennstoffzellen als Teilprojekt 4. Es ist ein Mitaussteller auf der IAA MOBILITY 2025.',
themes: [],
address: 'Konrad-Zuse-Straße 13, 66115 Saarbrücken, Deutschland',
website: 'www.trasaar.saarland/',
emails: []
},
{
id: 'getfocus',
name: 'GetFocus',
keywords: ['technologievorausschau', 'innovatoren', 'investitionsentscheidungen', 'technologischer fortschritt', 'mit-forscher', 'datengestützte weitsicht', 'zukunftstechnologien', 'automotive', 'supplier', 'ai', 'genai', 'digitale dienste', 'fahrzeugbetrieb', 'informationssysteme'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: 'Wir verfolgen die Mission, den weltweiten technologischen Fortschritt zu beschleunigen. Was mit den Grundlagen von MIT-Forschern begann, ist heute ein vollwertiges System zur Technologievorausschau. Indem wir Innovatoren datengestützte technologische Weitsicht bieten, helfen wir ihnen, die richtigen Investitionsentscheidungen zu treffen und schneller zu innovieren.',
themes: ['Automotive', 'Supplier', 'AI & GenAI'],
address: 'Marconistraat 16, 3029 AK Rotterdam, Niederlande',
website: 'www.getfocus.eu',
emails: ['info@getfocus.eu', 'adriaanandringa@getfocus.eu']
},
{
id: 'giraffevision',
name: 'GIRAFFEVISION',
keywords: ['in-vehicle vision', 'technical solutions', 'automotive electronic products', 'development services', 'testing services', 'whud', 'ar-hud', 'hud solutions', 'digital instrument clusters', 'stereo vision', 'visual interaction intelligence', 'human-machine co-driving', 'oem', 'supplier', 'autonomous driving'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D10'
},
role: 'Hauptaussteller',
profile: 'GIRAFFEVISION, a wholly-owned overseas subsidiary of NEWVISION, is a leading provider of technical solutions in the field of in-vehicle vision in China. The company specializes in the R&D, production and sales of automotive electronic products, while also providing development and testing services for automotive electronic products and their testing equipment. The company\'s current core products include WHUD, AR-HUD, and HUD solutions integrated with digital instrument clusters.',
themes: ['Automotive', 'Supplier', 'Autonomous Driving'],
address: 'Building 1, No. 3 Tianyue Road, 214000 Yizheng, China',
website: undefined,
emails: ['qiwei@zjautomotive.com', 'yongyuan@zjautomotive.com', 'kanghuanzhang@zjautomotive.com']
},
{
id: 'gis',
name: 'GIS',
keywords: ['touch module solutions', 'display module solutions', 'smart automotive systems', 'metaverse', 'biometric recognition', 'optical integration', 'mechanical integration', 'electronic integration', 'automotive', 'entertainment', 'vr', 'touch display product portfolio'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C43'
},
role: 'Hauptaussteller',
profile: 'GIS is a specialized provider of integrated touch and display module solutions. With years of experience in the design and manufacturing of touch and display modules, the company has won wide recognitions from world-class customers globally.',
themes: ['Automotive', 'Entertainment & VR'],
address: '6F, No.12, Kezhong Road Zhunan Science Park Zhunan Science Park, Miaoli County 350401, Taiwan (Chinesisch-Taipeh)',
website: 'www.gis-touch.com',
emails: ['david.jiang@gis-touch.com']
},
{
id: 'golden-devices-gmbh',
name: 'Golden Devices GmbH',
keywords: ['3d-printed mmwave components', 'radar systems', 'aerospace', 'automotive', 'telecommunication', 'waveguide systems', 'design process', 'manufacturing', 'testing', 'prototyping', 'series production', 'autonomous driving', 'automatisiertes fahren', 'autonomes fahren', 'fahrerassistenzsysteme', 'sensoren', 'radar'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D121'
},
role: 'Hauptaussteller',
profile: 'Golden Devices offers 3D-printed mmWave components used in sophisticated systems for various industries like aerospace, automotive or telecommunication. By combining the performance of waveguide systems with the manufacturing capabilities required for complex designs, we shift current limitations in performance. For its valued costumers, Golden Devices offers a turnkey solution including the design process, manufacturing and testing.',
themes: ['Autonomous Driving'],
address: 'Am Weichselgarten 27, 91058 Erlangen, Deutschland',
website: 'www.golden-devices.com',
emails: ['info@golden-devices.com']
},
{
id: 'gold-phoenix',
name: 'GOLD PHOENIX',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'F10'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: '999 Fule Road, 253600 Leling, China',
website: 'www.chinabrake.com',
emails: []
},
{
id: 'goodix-technology',
name: 'Goodix Technology',
keywords: ['voice and audio enhancements', 'car noise management', 'software', 'ic design', 'semiconductor solutions', 'smart devices', 'iot applications', 'automotive electronics', 'sensing', 'processing', 'connectivity', 'security', 'voice calling', 'voice recognition', 'localization', 'in-car communication', 'karaoke', 'multimedia sound staging', 'road noise cancellation', 'engine noise cancellation', 'automotive', 'supplier', 'software defined vehicles'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'A21'
},
role: 'Hauptaussteller',
profile: 'Goodix Technology is an integrated solution provider for applications based on IC design and software development, offering industry-leading software and hardware semiconductor solutions for smart devices, IoT applications, and automotive electronics. Goodix is dedicated to technological innovation within sensing, processing, connectivity, and security, striving to become a world-leading comprehensive IC design company.',
themes: ['Automotive', 'Supplier', 'Software Defined Vehicles'],
address: 'No.1 Meikang Road, 26F Futian District, 518000 Shenzhen, China',
website: 'www.goodix.com/en/product/audio/software_licensing',
emails: []
},
{
id: 'google-germany-gmbh',
name: 'Google Germany GmbH',
keywords: ['ki', 'künstliche intelligenz', 'automobilindustrie', 'produktivität', 'innovation', 'wertschöpfungskette', 'informationstechnologie', 'technologie', 'digitalisierung', 'datenmanagement', 'cloud', 'software', 'internetdienste', 'suchmaschine', 'datenanalyse', 'maschinelles lernen', 'automotive', 'partner', 'lösungen', 'verantwortung'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'B10'
},
role: 'Hauptaussteller',
profile: 'Google hat es sich zur Aufgabe gemacht, die Informationen der Welt zu organisieren und sie allgemein zugänglich und nutzbar zu machen. Zu dieser Mission gehört es auch, KI für alle hilfreich und verantwortungsvoll zu gestalten. Google ist seit 2001 in Deutschland ansässig und beschäftigt mehr als 2.500 Mitarbeitende an seinen vier Standorten in Hamburg, Berlin, München und Frankfurt.',
themes: [],
address: 'ABC-Str. 19, 20354 Hamburg, Deutschland',
website: 'about.google',
emails: []
},
{
id: 'gotion',
name: 'Gotion',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D02'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Jöhrenstraße 16, 30559 Hannover, Deutschland',
website: undefined,
emails: []
},
{
id: 'hallacast-co-ltd',
name: 'HALLACAST CO., LTD.',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '59 Eunbong-ro 105beon-gil, Incheon 21639, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'hamamatsu-photonics-deutschland-gmbh',
name: 'Hamamatsu Photonics Deutschland GmbH',
keywords: ['opto semiconductor products', 'optical components', 'ambient light sensors', 'optical semiconductor devices', 'in-vehicle information communication', 'automatic lighting', 'air conditioning', 'customized solutions', 'high-volume manufacturing', 'autonomous driving', 'semiconductors & chips'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B13'
},
role: 'Mitaussteller',
profile: 'Hamamatsu Photonics is a leading manufacturer of opto semiconductor products. For more than 40 years, Hamamatsu Photonics has been supplying market leading, high-quality optical components which contribute to the diverse advanced technologies that assist in safe, reliable, green and comfortable automobiles. From design to manufacturing, we deliver standard and customized solutions with high-volume manufacturing capabilities.',
themes: ['Autonomous Driving', 'Semiconductors & Chips'],
address: 'Arzberger Str. 10, 82211 Herrsching am Ammersee, Deutschland',
website: 'automotive.hamamatsu.com',
emails: ['info@hamamatsu.de', 'presse@hamamatsu.de', 'florian.friedl@hamamatsu.eu']
},
{
id: 'hanmicable',
name: 'Hanmicable',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '9, Noksansandan 382-ro 14beonga-gil, Gangseo-gu, Busan 46757, Südkorea (KR)',
website: 'www.hanmicable21.com',
emails: []
},
{
id: 'hans-tool-industrial-co-ltd',
name: 'HANS TOOL INDUSTRIAL CO., LTD.',
keywords: ['hand tools', 'professional tools', 'industrial tools', 'sockets', 'torque wrenches', 'spanners', 'screwdrivers', 'bits', 'hex keys', 'pliers', 'saws', 'cutters', 'hammers', 'automotive tools', 'tool sets', 'tool kits', 'tool trolleys', 'hardware shops', 'maintenance', 'repair', 'aircraft', 'cars', 'trucks', 'vessels', 'infrastructure', 'mining', 'heavy-duty industries'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E22'
},
role: 'Mitaussteller',
profile: 'Hans Tools, established in 1973, is a world-renowned Taiwanese manufacturer of professional and industrial hand tools. Leveraging over five decades of manufacturing expertise, we offer solid, heavy-duty tools at competitive prices.',
themes: [],
address: '475, DaFeng Road, Dali District, Taichung City 412, Taiwan (Chinesisch-Taipeh)',
website: 'www.hanstool.com',
emails: []
},
{
id: 'hans-tool-industrial-co-ltd',
name: 'HANS TOOL INDUSTRIAL CO., LTD.',
keywords: ['hand tools', 'industrial tools', 'sockets', 'torque wrenches', 'spanners', 'screwdrivers', 'bits', 'hex keys', 'pliers', 'saws', 'cutters', 'hammers', 'automotive tools', 'tool sets', 'tool kits', 'tool trolleys', 'maintenance', 'repair', 'hardware shops', 'aircraft', 'cars', 'trucks', 'vessels', 'infrastructure', 'mining', 'heavy-duty industries'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E22'
},
role: 'Mitaussteller',
profile: 'Hans Tools, established in 1973, is a world-renowned Taiwanese manufacturer of professional and industrial hand tools. Leveraging over five decades of manufacturing expertise, we offer solid, heavy-duty tools at competitive prices. Hans Tools provide over 9,000 products with a full range of items, sizes, and specifications.',
themes: [],
address: '475, DaFeng Road, Dali District, Taichung City 412, Taiwan (Chinesisch-Taipeh)',
website: 'www.hanstool.com',
emails: []
},
{
id: 'hatbit-illucom-co-ltd',
name: 'Hatbit Illucom Co., Ltd.',
keywords: ['interior lightings', 'exterior lightings', 'automotive industry', 'illuminated door sill plates', 'ambient lights', 'puddle lights', 'tail gate lamps', 'autoflush handles', 'supplier', 'automakers', 'toyota', 'nissan', 'hmc', 'kmc'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Hatbit is specialized in interior & exterior lightings for automotive industry. Founded in 2008, Hatbit Illucom Co.,Ltd. is specialized in interior & exterior lightings for automotive industry. Beginning with the supply to HMC & KMC in Korea, we have been supplying our products to various overseas automakers like as Toyota, Nissan and etc.',
themes: ['Supplier'],
address: '88 - 34, Sudo-ro, Bucheon (Gyeonggi-do) 14519, Südkorea (KR)',
website: 'www.hatbitillu.com',
emails: ['mjsong@hatbitillu.com']
},
{
id: 'hesai-technology',
name: 'Hesai Technology',
keywords: ['robotic intelligence', 'autonomous driving', 'mechanical lidar', 'adas vehicles', 'at lidar series', 'proprietary asic technology', 'automated production systems', 'intelligent automotive industry', 'robotics', 'lidar', 'autonomous driving projects', 'automotive', 'smart city mobility', 'road safety', 'manufacturing & supply chain', 'software defined vehicles'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'A10'
},
role: 'Hauptaussteller',
profile: 'Hesai is committed to becoming a globally influential technology company with the goal of making people\'s lives more efficient and comfortable. The company launched a 360-degree mechanical lidar for the autonomous driving industry, holding over 70% of the market share. Hesai developed the AT lidar series, making high-performance lidar more affordable through proprietary ASIC technology.',
themes: ['Automotive', 'Smart City Mobility', 'Road Safety', 'Manufacturing & Supply Chain', 'Software Defined Vehicles', 'Autonomous Driving'],
address: 'Charles-Lindbergh-Platz 1, 71034 Böblingen, Deutschland',
website: 'www.hesaitech.com',
emails: ['tilman.gasche@hesaitech.com']
},
{
id: 'hesai-technology',
name: 'Hesai Technology',
keywords: ['robotic intelligence', 'autonomous driving', 'mechanical lidar', 'adas vehicles', 'at lidar series', 'proprietary asic technology', 'automated production systems', 'intelligent automotive industry', 'robotics', 'lidar', 'autonomous driving projects', 'automotive', 'smart city mobility', 'road safety', 'manufacturing & supply chain', 'software defined vehicles'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'A10'
},
role: 'Hauptaussteller',
profile: 'Hesai is committed to becoming a globally influential technology company with the goal of making people\'s lives more efficient and comfortable. The company launched a 360-degree mechanical lidar for the autonomous driving industry, holding over 70% of the market share. Hesai developed the AT lidar series, making high-performance lidar more affordable through proprietary ASIC technology.',
themes: ['Automotive', 'Smart City Mobility', 'Road Safety', 'Manufacturing & Supply Chain', 'Software Defined Vehicles', 'Autonomous Driving'],
address: 'Charles-Lindbergh-Platz 1, 71034 Böblingen, Deutschland',
website: 'www.hesaitech.com',
emails: ['tilman.gasche@hesaitech.com']
},
{
id: 'highone',
name: 'HIGHONE',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '811 Sadori, Gunbukmyeon, Haman-Gun, Gyeongsangnam-do 637-821, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'highone',
name: 'HIGHONE',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '811 Sadori, Gunbukmyeon, Haman-Gun, Gyeongsangnam-do 637-821, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'hive-power',
name: 'Hive Power',
keywords: ['startup', 'energie', 'smart grid', 'energieverwaltung', 'nachhaltigkeit', 'energieeffizienz', 'netzmanagement', 'energieplattform', 'energieoptimierung', 'energiemanagement', 'energieverteilung', 'energieverbrauch', 'energieüberwachung', 'energieanalyse', 'energieeinsparung'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D110'
},
role: 'Hauptaussteller',
profile: 'Hive Power bietet innovative Lösungen für das Energiemanagement und die Optimierung von Smart Grids. Das Unternehmen fokussiert sich auf nachhaltige Energieverwaltung und Effizienzsteigerung.',
themes: [],
address: 'Via Cantonale 18, 6928 Manno, Schweiz',
website: 'www.hivepower.tech',
emails: []
},
{
id: 'hive-power',
name: 'Hive Power',
keywords: ['startup', 'energie', 'smart grid', 'energieverwaltung', 'nachhaltigkeit', 'energieeffizienz', 'netzmanagement', 'energieplattform', 'energieoptimierung', 'energiemanagement', 'energieverteilung', 'energieverbrauch', 'energieüberwachung', 'energieanalyse', 'energieintegration'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D110'
},
role: 'Hauptaussteller',
profile: 'Hive Power bietet innovative Lösungen für das Energiemanagement und die Optimierung von Smart Grids. Das Unternehmen fokussiert sich auf nachhaltige Energieeffizienz und Netzmanagement. Ihre Plattform ermöglicht eine effiziente Energieverteilung und -überwachung.',
themes: [],
address: 'Via Cantonale 18, 6928 Manno, Schweiz',
website: 'www.hivepower.tech',
emails: []
},
{
id: 'hyundai-motor-group-partners',
name: 'Hyundai Motor Group Partners',
keywords: ['automobilzulieferer', 'stanzen', 'schmieden', 'gießen', 'zerspanen', 'formgebung', 'mobilität', 'technische exzellenz', 'globale wettbewerbsfähigkeit', 'geschäftspartner', 'automobilindustrie', 'innovation', 'global expansion', 'koreanische zulieferer', 'schlüsselkomponenten', 'mobilität von morgen', 'automotive', 'cycling', 'lev', 'micromobility', 'public transport', 'mobility on demand', 'mobility as a service', 'intermodality', 'smart city mobility', 'circular economy', 'regulation', 'liability', 'esgs', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Hauptaussteller',
profile: 'Entdecken Sie die kollektive Stärke von 28 führenden koreanischen Automobilzulieferern, die alle in enger Partnerschaft mit der Hyundai Motor Group zusammenarbeiten. In unserem Pavillon präsentieren wir Ihnen ein breites Spektrum modernster Technologien – darunter Stanzen, Schmieden, Gießen, Zerspanen und Formgebung –, die als Schlüsselkomponenten für die Mobilität von morgen gelten.',
themes: ['Automotive', 'Cycling', 'LEV', 'Micromobility', 'Public Transport', 'Mobility on demand', 'Mobility as a Service', 'Intermodality', 'Smart City Mobility', 'Circular Economy', 'Regulation, Liability & ESGs', 'Supplier'],
address: 'Samseoung-ro 126-gil 12, B1F, Seoul 06084, Südkorea (KR)',
website: 'www.koreabridging.com',
emails: ['hmg.office@koreabridging.com']
},
{
id: 'holon-gmbh',
name: 'HOLON GmbH',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'B22'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Elsener Straße 95, 33102 Paderborn, Deutschland',
website: 'www.driveholon.com',
emails: []
},
{
id: 'hongkong-doit',
name: 'HONGKONG DOIT',
keywords: ['startup', 'summit', 'hauptaussteller'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D108'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Rm. 01, Fl. 26, Working View Commercial Bldg., 21 Yiu Wah Street, 999077 Hongkong, Hongkong (Sonderverwaltungsregion)',
website: 'www.58doit.com',
emails: []
},
{
id: 'hongkong-doit',
name: 'HONGKONG DOIT',
keywords: ['startup', 'summit', 'hauptaussteller'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D108'
},
role: 'Hauptaussteller',
profile: 'HONGKONG DOIT ist ein Hauptaussteller auf der IAA MOBILITY 2025.',
themes: [],
address: 'Rm. 01, Fl. 26, Working View Commercial Bldg., 21 Yiu Wah Street, 999077 Hongkong, Hongkong (Sonderverwaltungsregion)',
website: 'www.58doit.com',
emails: []
},
{
id: 'horizon-robotics',
name: 'Horizon Robotics',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'B20'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Unit 301, 3rd Floor, Building 2, No. 9, 100094 Beijing, China',
website: 'www.en.horizon.auto',
emails: []
},
{
id: 'horizon-robotics',
name: 'Horizon Robotics',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'B20'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Unit 301, 3rd Floor, Building 2, No. 9, 100094 Beijing, China',
website: 'www.en.horizon.auto',
emails: []
},
{
id: 'horse-powertrain',
name: 'Horse Powertrain',
keywords: ['hybrid powertrain solutions', 'combustion powertrain solutions', 'automotive oem', 'engines', 'transmissions', 'power electronics', 'integrated hybrid platforms', 'aurobay technologies', 'horse technologies', 'renault group', 'geely auto', 'volvo cars', 'proton', 'nissan', 'mitsubishi motors corporation', 'manufacturing', 'supply chain', 'supplier', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'B40'
},
role: 'Hauptaussteller',
profile: 'Horse Powertrain is a new global leader in hybrid and combustion powertrain solutions, supporting automotive OEMs with a range of systems including engines, transmissions, power electronics, and integrated hybrid platforms.',
themes: ['Automotive', 'Manufacturing & Supply Chain', 'Supplier', 'Future Drive Technologies incl. H2'],
address: 'Horse Powertrain Ltd. 4 Kingdom Street, Paddington Central, London W2 6BD, Großbritannien',
website: undefined,
emails: ['info@horse-powertrain.com']
},
{
id: 'hpb-optoelectronics-co-ltd',
name: 'H.P.B. Optoelectronics Co., Ltd.',
keywords: ['automotive camera module', 'camera design', 'odm', 'ultrasonic cleaning', 'camera manufacturing', 'icvs-instant clear view system', 'automotive optics', 'public transport', 'camera module provider', 'taiwan'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E22'
},
role: 'Mitaussteller',
profile: 'HPB is an automotive camera module provider and based in Taiwan. We provided ODM camera design & manufacturing service, and we specialized in integrating the ultrasonic cleaning cleaning function into our camera module and provide the best quality.',
themes: ['Automotive', 'Public Transport'],
address: 'No 18 Keya Rd Daya Dist. Central Taiwan Science Park, Taichung 428333, Taiwan (Chinesisch-Taipeh)',
website: 'www.hpbint.com/en/',
emails: ['irene.wu@hpbint.com']
},
{
id: 'hrc',
name: 'HRC',
keywords: ['composite solutions', 'carbon fiber composites', 'r&d', 'engineering design', 'tooling', 'mass production', 'recycling', 'reuse', 'oem', 'structural components', 'decorative components', 'hybrid monocoques', 'interior parts', 'exterior parts', 'wheels', 'body panels', 'automotive', 'circular economy', 'manufacturing', 'supply chain'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E12'
},
role: 'Hauptaussteller',
profile: 'HRC is a global leading composite solution provider, offering end-to-end services across the entire lifecycle of carbon fiber composites - spanning R&D, engineering design, tooling, mass production, recycling, and reuse. HRC works closely with leading OEMs worldwide to develop structural and decorative components -including hybrid monocoques, interior and exterior parts, wheels and body panels.',
themes: ['Automotive', 'Circular Economy', 'Manufacturing & Supply Chain'],
address: 'Passeig de Gracia, 97, 5´1, 08008 Barcelona, Spanien',
website: 'www.grouphrc.com',
emails: ['shruti.sahrawat@grouphrc.com', 'daniel.ferrara@grouphrc.com']
},
{
id: 'ht-automotive-electronics-technology-co-ltd',
name: 'H&T Automotive Electronics Technology Co., Ltd',
keywords: ['vehicle body', 'energy management', 'automotive electronic smart control solutions', 'oem', 'component manufacturers', 'smart cockpit', 'bdc', 'bbs', 'smart glass controller', 'hands on/off detection', 'seat controller', 'compressor controller', 'high voltage integrated module', 'pcba ecu process solution', 'r&d', 'manufacturing', 'global layout', 'odm', 'jdm', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D33'
},
role: 'Hauptaussteller',
profile: 'H&T Group, a listed company, founded in 2000, has over 5,000 employees globally. In the automotive field, it professionally focuses on areas such as vehicle body and energy management. We provide automotive electronic smart control solutions to global automotive OEMs and component manufacturers.',
themes: ['Automotive', 'Regulation, Liability & ESGs', 'Manufacturing & Supply Chain', 'International Trade and Markets'],
address: 'No.18 Baoshan Road, Guangming District, 518132 Shenzhen, China',
website: 'en.szhittech.com/our-industry/4.html',
emails: ['automotive.sales@szhittech.com', 'nicole.chiang@szhittech.com', 'david.yang@szhittech.com', 'chloe.jia@szhittech.com']
},
{
id: 'hybrid-lidar-systems-ag',
name: 'Hybrid Lidar Systems AG',
keywords: ['lidar', 'startup', 'sensorik', 'automotive', '3d-mapping', 'umfelderkennung', 'fahrassistenzsysteme', 'lidar-systeme', 'lidar-technologie', 'lidar-sensoren'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C304'
},
role: 'Hauptaussteller',
profile: 'Hybrid Lidar Systems AG ist ein führendes Unternehmen im Bereich der Lidar-Technologie. Es bietet innovative Lösungen für 3D-Mapping und Umfelderkennung. Die Produkte sind ideal für Fahrassistenzsysteme und andere Anwendungen in der Automobilindustrie.',
themes: [],
address: 'TecCenter 1, 31162 Bad Salzdetfurth, Deutschland',
website: 'www.hybrid-lidar.com',
emails: []
},
{
id: 'hyperdrives',
name: 'Hyperdrives',
keywords: ['deep-tech engineering', 'electric motors', 'hollow-conductor', 'super-efficient', 'power-dense', 'cost-effective', 'rare-earth-free', 'automotive', 'aviation', 'marine', 'patented manufacturing technology', 'automotive hairpin production', 'global gold standard', 'decarbonization', 'supplier', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D151'
},
role: 'Hauptaussteller',
profile: 'Hyperdrives is a pioneering deep-tech engineering company revolutionizing how we design and build electric motors. Hollow-conductor-enabled super-efficient, extremely power-dense, and exceptionally cost-effective electric motors without rare-earth elements increase range and reduce cost by up to 50%. Hyperdrives aims to establish a new global gold standard for electric motors in automotive, aviation, marine and beyond.',
themes: ['Automotive', 'Decarbonization', 'Supplier', 'Future Drive Technologies incl. H2'],
address: 'Winterstr. 6, 81543 München, Deutschland',
website: 'www.hyperdrives.de',
emails: ['info@hyperdrives.de']
},
{
id: 'hyundai-mobis',
name: 'Hyundai MOBIS',
keywords: ['automotive', 'mobility', 'hauptaussteller', 'summit', 'halle b2', 'fahrzeugtechnologie', 'zulieferer', 'innovation', 'technologie', 'südkorea', 'oem', 'tier-1', 'automobilindustrie', 'elektronik', 'fahrzeugsysteme', 'sicherheitssysteme', 'infotainment', 'nachhaltigkeit', 'zukunftstechnologien'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C10'
},
role: 'Hauptaussteller',
profile: 'Hyundai MOBIS ist ein führender Anbieter von Fahrzeugtechnologien und -systemen. Das Unternehmen bietet innovative Lösungen für die Automobilindustrie. Als Hauptaussteller präsentiert Hyundai MOBIS seine neuesten Entwicklungen im Bereich Mobilität.',
themes: [],
address: '203, Teheran-ro, Gangnam-gu, Seoul 06141, Südkorea (KR)',
website: 'en.mobis.co.kr',
emails: []
},
{
id: 'hyundai-motor-company',
name: 'Hyundai Motor Company',
keywords: ['smart mobility solution provider', 'robotics', 'advanced air mobility', 'zero-emission vehicles', 'hydrogen fuel cell', 'ev technologies', 'sustainable mobility', 'future mobility services', 'open innovation', 'mobility challenges'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS410'
},
role: 'Hauptaussteller',
profile: 'Established in 1967, Hyundai Motor Company is present in over 200 countries with more than 120,000 employees dedicated to tackling real-world mobility challenges around the globe. Based on the brand vision ‘Progress for Humanity,\' Hyundai Motor is accelerating its transformation into a Smart Mobility Solution Provider.',
themes: [],
address: '12, Heolleung-ro, Seocho-gu, Seoul 06797, Südkorea (KR)',
website: undefined,
emails: ['pr@hyundai-europe.com', 'media@hyundai.com']
},
{
id: 'hyundai-motor-company',
name: 'Hyundai Motor Company',
keywords: ['smart mobility solution', 'robotics', 'advanced air mobility', 'zero-emission vehicles', 'hydrogen fuel cell', 'ev technologies', 'sustainable mobility', 'open innovation', 'future mobility services', 'mobility challenges', 'progress for humanity'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS410'
},
role: 'Hauptaussteller',
profile: 'Established in 1967, Hyundai Motor Company is present in over 200 countries with more than 120,000 employees dedicated to tackling real-world mobility challenges around the globe. Based on the brand vision ‘Progress for Humanity,\' Hyundai Motor is accelerating its transformation into a Smart Mobility Solution Provider.',
themes: [],
address: '12, Heolleung-ro, Seocho-gu, Seoul 06797, Südkorea (KR)',
website: undefined,
emails: ['pr@hyundai-europe.com', 'media@hyundai.com']
},
{
id: 'iba-metropolregion-muenchen',
name: 'IBA Metropolregion München',
keywords: ['internationale bauausstellungen', 'stadtentwicklung', 'regionalentwicklung', 'mobilität', 'multimodale mobilität', 'gestaltungsqualität', 'soziale aspekte', 'demografische aspekte', 'ökologische aspekte', 'ökonomische aspekte', 'technologische aspekte', 'lebensqualität', 'kommunale zusammenarbeit', 'cycling', 'micromobility', 'public transport', 'mobility on demand', 'mobility as a service', 'intermodality', 'smart city mobility', 'smart country mobility', 'road safety', 'circular economy', 'international trade and markets', 'autonomous driving'],
location: {
type: 'Open Space',
hallOrPlace: 'Marienplatz',
booth: 'CL820'
},
role: 'Hauptaussteller',
profile: 'Internationale Bauausstellungen (IBA) sind ein einzigartiges, zeitlich begrenztes Instrument der Stadt- und Regionalentwicklung. Das Format verfolgt das Ziel, zukunftsweisende Lösungen für städtebauliche und regionale Herausforderungen neu zu denken, zu erproben und öffentlichkeitswirksam zu präsentieren. In den nächsten zehn Jahren wollen wir die Metropolregion zu einem internationalen Vorreiter für eine zukunftsfähige, lebenswerte und multimodale Mobilität machen.',
themes: ['Cycling', 'Micromobility', 'Public Transport', 'Mobility on demand', 'Mobility as a Service', 'Intermodality', 'Smart City Mobility', 'Smart Country Mobility', 'Road Safety', 'Circular Economy', 'International Trade and Markets', 'Autonomous Driving'],
address: 'Waisenhausstraße 4, 80637 München, Deutschland',
website: 'www.iba-m.de',
emails: ['kathrin.beckers@iba-m.de', 'leoni.vollmann@iba-m.de']
},
{
id: 'ibm-deutschland-gmbh',
name: 'IBM Deutschland GmbH',
keywords: ['sponsor', 'hauptaussteller', 'blue forum', 'summit', 'technologie', 'innovation', 'it-dienstleistungen', 'cloud computing', 'künstliche intelligenz', 'datenanalyse', 'digitalisierung', 'softwarelösungen', 'beratung', 'automotive', 'industrie 4.0'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C30'
},
role: 'Sponsor',
profile: 'IBM Deutschland GmbH ist ein führender Anbieter von IT-Dienstleistungen und -Lösungen. Das Unternehmen kuratiert das Blue Forum am 09.09 in Halle B2.C30. IBM bietet innovative Technologien und Beratungsdienste für verschiedene Branchen.',
themes: [],
address: 'IBM-Allee 1, 71139 Ehningen, Deutschland',
website: 'www.ibm.de',
emails: []
},
{
id: 'ibm-deutschland-gmbh',
name: 'IBM Deutschland GmbH',
keywords: ['sponsor', 'hauptaussteller', 'blue forum', 'summit', 'technologie', 'innovation', 'it-dienstleistungen', 'cloud computing', 'künstliche intelligenz', 'datenanalyse', 'digitalisierung', 'softwarelösungen', 'beratung', 'automotive', 'industrie 4.0', 'cybersicherheit', 'blockchain', 'internet der dinge', 'ki', 'big data', 'it-infrastruktur', 'business transformation', 'enterprise solutions'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C30'
},
role: 'Sponsor',
profile: 'IBM Deutschland GmbH ist ein führender Anbieter von IT-Dienstleistungen und -Lösungen. Das Unternehmen präsentiert innovative Technologien und kuratiert das Blue Forum. IBM unterstützt Unternehmen bei der digitalen Transformation.',
themes: [],
address: 'IBM-Allee 1, 71139 Ehningen, Deutschland',
website: 'www.ibm.de',
emails: []
},
{
id: 'iljeong-industrial',
name: 'ILJEONG Industrial',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '21, Sanseong-ro, Danwon-gu, Ansan-si, Gyeonggi-do 15613, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'imotion-automotive-technology',
name: 'iMotion Automotive Technology',
keywords: ['automotive technology', 'hauptaussteller', 'summit', 'halle b3', 'fahrzeugtechnologie', 'automobilindustrie', 'innovation', 'technologie', 'automotive solutions', 'fahrzeugentwicklung'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'F11'
},
role: 'Hauptaussteller',
profile: 'iMotion Automotive Technology ist ein führendes Unternehmen im Bereich der Fahrzeugtechnologie. Es bietet innovative Lösungen für die Automobilindustrie. Besuchen Sie uns auf der IAA MOBILITY 2025.',
themes: [],
address: 'No. 88 Jinji Lake Avenue, 215100 Suzhou, China',
website: 'www.imotion.ai',
emails: []
},
{
id: 'incompol-industria-de-componentes-sa',
name: 'INCOMPOL, Industria de Componentes S.A.',
keywords: ['precision-stamping', 'mobility industry', 'high-precision metal components', 'automotive', 'aerospace', 'home appliances', 'lightweight structures', 'stamping', 'machining', 'turning', 'welding', 'in-die bushing insertion', 'assembly systems', 'transfer stamping', 'progressive stamping', 'robotized welding', 'automated welding', 'cnc milling', 'cnc lathes', 'quality laboratory', 'tooling design', 'tooling manufacturing', 'iatf16949', 'iso14001', 'ecovadis bronze medal', 'sustainability'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D20'
},
role: 'Mitaussteller',
profile: 'With nearly 40 years’ experience, INCOMPOL has grown to become a key supplier of high-precision metal components, serving demanding sectors such as automotive, aerospace, and home appliances. Our core expertise lies in the production of high-volume, high-precision metal parts, incl. lightweight structures, using a wide range of technologies.',
themes: ['Automotive', 'Manufacturing & Supply Chain', 'Supplier'],
address: 'Av. Nossa Senhora da Guadalupe nº106, 2135-015 Samora Correia, Portugal',
website: 'www.incompol.pt',
emails: ['nuno.duarte@incompol.pt', 'francisco.ferro@incompol.pt', 'ricardo.pereira@incompol.pt']
},
{
id: 'infimotion-technology-europe-ab',
name: 'Infimotion Technology Europe AB',
keywords: ['electric drive systems', 'edus', 'evs', 'phevs', 'green logistics', 'sustainable product design', 'decarbonizing supply chain', 'drivetrain tech', '800v edu', 'e-mobility standards', 'innovation', 'agility', 'reliability', 'efficient solutions', 'reliable solutions', 'affordable solutions', 'power density', 'durability', 'strategic partnerships', 'manufacturing growth', 'ev adoption'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E23'
},
role: 'Hauptaussteller',
profile: 'InfiMotion: A global leader, pioneering electric drive systems (EDUs) for EVs and PHEVs. The company offer comprehensive solutions, from components to software, supporting a greener planet. Their solar-powered factory aims for zero emissions and zero industrial wastewater.',
themes: ['Automotive', 'Supplier'],
address: 'Pumpgatan 1, 417 55 Göteborg, Schweden',
website: 'www.infimotiontec.com',
emails: ['saleseu@infimotiontec.com']
},
{
id: 'infimotion-technology-europe-ab',
name: 'Infimotion Technology Europe AB',
keywords: ['electric drive systems', 'edus', 'evs', 'phevs', 'green logistics', 'sustainable product design', 'decarbonizing supply chain', 'drivetrain tech', 'high-performance 800v edu', 'e-mobility standards', 'innovation', 'agility', 'reliability', 'efficient solutions', 'reliable solutions', 'affordable solutions', 'power density', 'durability', 'strategic partnerships', 'manufacturing growth', 'ev adoption'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E23'
},
role: 'Hauptaussteller',
profile: 'InfiMotion: A global leader, pioneering electric drive systems (EDUs) for EVs and PHEVs. The company offer comprehensive solutions, from components to software, supporting a greener planet. Their solar-powered factory aims for zero emissions and zero industrial wastewater.',
themes: ['Automotive', 'Supplier'],
address: 'Pumpgatan 1, 417 55 Göteborg, Schweden',
website: 'www.infimotiontec.com',
emails: ['saleseu@infimotiontec.com']
},
{
id: 'infinite-mobility',
name: 'Infinite Mobility',
keywords: ['startup', 'hauptaussteller', 'summit', 'mobilität', 'technologie', 'innovation', 'transport', 'zukunft', 'elektromobilität', 'nachhaltigkeit'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D102'
},
role: 'Hauptaussteller',
profile: 'Infinite Mobility ist ein innovatives Unternehmen im Bereich der Mobilität. Es präsentiert zukunftsweisende Technologien und nachhaltige Transportlösungen.',
themes: [],
address: 'Siebkes gata 6c, 0562 Oslo, Norwegen',
website: 'www.gotoinfinite.com',
emails: []
},
{
id: 'shenzhen-infypower-co-ltd',
name: 'Shenzhen Infypower Co., Ltd.',
keywords: ['v2g', 'liquid cooled charging', 'renewable energy', 'power electronics', 'power conversion', 'electric vehicle charging', 'power module', 'energy storage system', 'constant power', 'wide voltage', 'internal discharge products', 'international market'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'C27'
},
role: 'Hauptaussteller',
profile: 'Infypower is a high-tech renewable energy company that stays centered on Power Electronics, focused on customer requirements in power conversion industry, offers professional product solution and committed to creating as maximum value for customers.',
themes: ['Charging and Refueling Infrastructure incl. Energy Grid'],
address: '1st Floor, Spring Building, Lingya Wisdom Valley, Tangtou No.1 Road, Shiyan sub-district, Bao\'an District, 518108 Shenzhen, China',
website: undefined,
emails: ['lorenzo.neckermann@infypower.de', 'christopher.lu@infypower.com', 'liam.lyu@infypower.com']
},
{
id: 'ingenev',
name: 'INGENEV',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'A10'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: '296, Rue de Neudorf, 2222 Cents-Luxembourg, Luxemburg',
website: 'www.ingenev.com',
emails: []
},
{
id: 'ingolstadt-business-mobilitats-und-wirtschaftsregion-ingolstadt',
name: 'Ingolstadt_business | Mobilitäts- und Wirtschaftsregion Ingolstadt',
keywords: ['mobilitätsregion', 'wirtschaftsregion', 'tradition', 'moderne technologie', 'technische hochschule', 'innovation', 'automotive', 'smart city mobility', 'autonomous driving', 'ai', 'genai'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS430'
},
role: 'Hauptaussteller',
profile: 'Erleben Sie das dynamische Herz Bayerns – eine einzigartige Verbindung aus gelebter Tradition und modernster Technologie. Zusammen mit der Technischen Hochschule Ingolstadt prägt der Standort kontinuierlichen Wandel und Innovation.',
themes: ['Automotive', 'Smart City Mobility', 'Autonomous Driving', 'AI & GenAI'],
address: '85049 Ingolstadt, Deutschland',
website: 'ingolstadt.business',
emails: ['marketing@ingolstadt.de', 'manuel.knill@ingolstadt.de', 'stefan.pitterle@ingolstadt.de', 'carina.bussolera@thi.de']
},
{
id: 'innerio-group-gmbh',
name: 'INNERIO Group GmbH',
keywords: ['mobilität', 'thermische lösungen', 'elektrische lösungen', 'hochleistungsprodukte', 'wärmemanagement', 'ladeluftkühler', 'radiatoren', 'kondensatoren', 'kühlmodule', 'elektrische verbinder', 'energieübertragung', 'innovationsgeist', 'automotive', 'public transport', 'charging and refueling infrastructure', 'decarbonization', 'manufacturing & supply chain', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Bei INNERIO entwickeln und fertigen wir Hochleistungsprodukte, die für die nächste Fahrzeuggeneration unverzichtbar sind. Unser Portfolio umfasst Lösungen für das Wärmemanagement wie leistungsstarke Ladeluftkühler, kosteneffiziente Radiatoren und hochwertige Kondensatoren. Ergänzt wird dies durch fortschrittliche Plug-&-Play-Kühlmodule, Komponentenlösungen mit modernen elektrischen Verbindern sowie hochwertige Rohre für effiziente Energieübertragung.',
themes: ['Automotive', 'Public Transport', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Decarbonization', 'Manufacturing & Supply Chain', 'Supplier'],
address: 'Etrich-Straße 59-73, 2542 Kottingbrunn, Österreich',
website: 'www.innerio.com',
emails: ['office@innerio.com', 'michael.lieser@innerio.com', 'andreas.hanselmann@innerio.com', 'thierry.forethier@innerio.com']
},
{
id: 'inova-semiconductors-gmbh',
name: 'INOVA Semiconductors GmbH',
keywords: ['fabless-halbleiter-hersteller', 'serielle datenkommunikation', 'gigabit/s-datenraten', 'apix', 'automotive pixel link', 'iseled', 'digitale led', 'ilas', 'iseled light and sensor network', 'apxpress', 'supplier', 'software defined vehicles', 'connectivity', 'iot', 'big data', 'entertainment', 'vr'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'C40'
},
role: 'Mitaussteller',
profile: 'Inova Semiconductors GmbH ist ein Fabless-Halbleiter-Hersteller mit Firmensitz in München, Deutschland. Das Unternehmen wurde 1999 gegründet und ist spezialisiert auf leistungsfähige Produkte für die serielle Datenkommunikation mit Gigabit/s-Datenraten.',
themes: ['Supplier', 'Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'Entertainment & VR'],
address: 'Zielstattstraße 32, 81379 München, Deutschland',
website: 'www.inova-semiconductors.de',
emails: ['info@inova-semiconductors.de', 'trothhaupt@inova-semiconductors.de', 'peter.gramenz@mexperts.de', 'mzimmermann@inova-semiconductors.de']
},
{
id: 'inovance-automotive',
name: 'Inovance Automotive',
keywords: ['new energy vehicle components', 'electric drive system', 'inverters', 'emotors', 'eaxle', 'power supply system', 'obc', 'dc/dc', 'e-powertrain system', 'chassis domain', 'automotive intelligence', 'intelligent electric vehicle components', 'solutions', 'supplier', 'software defined vehicles', 'cybersecurity'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E12'
},
role: 'Hauptaussteller',
profile: 'Inovance Automotive is a leading provider of new energy vehicle components since 2009. The company specializes in electric drive systems, power supply systems, and other core components of the e-powertrain system. It also develops core technologies in the chassis domain and expands the automotive intelligence business.',
themes: ['Automotive', 'Supplier', 'Software Defined Vehicles', 'Cybersecurity'],
address: 'No.52, Tianedang Road Yuexi Town, Wuzhong District, 215104 Suzhou, China',
website: 'www.en.inovance-automotive.com',
emails: []
},
{
id: 'inovance-automotive',
name: 'Inovance Automotive',
keywords: ['new energy vehicle components', 'electric drive system', 'inverters', 'emotors', 'eaxle', 'power supply system', 'obc', 'dc/dc', 'e-powertrain system', 'chassis domain', 'automotive intelligence', 'intelligent electric vehicle components', 'solutions', 'automotive', 'supplier', 'software defined vehicles', 'cybersecurity'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E12'
},
role: 'Hauptaussteller',
profile: 'A leading provider of new energy vehicle components since 2009. Inovance Automotive develops core technologies in the chassis domain and actively expands the automotive intelligence business. The company is committed to becoming the world\'s leading provider of intelligent electric vehicle components and solutions.',
themes: ['Automotive', 'Supplier', 'Software Defined Vehicles', 'Cybersecurity'],
address: 'No.52, Tianedang Road Yuexi Town, Wuzhong District, 215104 Suzhou, China',
website: 'www.en.inovance-automotive.com',
emails: []
},
{
id: 'institut-fuer-mensch-und-mobilitaet-der-hochschule-muenchen',
name: 'Institut für Mensch und Mobilität der Hochschule München',
keywords: ['mobilitätsinnovationen', 'forschung', 'industrie', 'autonome systeme', 'mensch-maschine-schnittstellen', 'sicherheit', 'nachhaltigkeit', 'talente', 'infrastruktur', 'autonomous driving', 'road safety', 'decarbonization', 'future drive technologies', 'h2', 'maschinenbau', 'fahrzeugtechnik', 'flugzeugtechnik', 'elektrotechnik', 'design'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'C26'
},
role: 'Hauptaussteller',
profile: 'Das Institut für Mensch und Mobilität (IMM) wurde 2024 an der Hochschule München gegründet und vereint elf Professuren aus Maschinenbau, Fahrzeug- und Flugzeugtechnik, Elektrotechnik sowie Design. Unter dem Leitmotiv „Leben in Bewegung“ entwickelt das Institut innovative Mobilitätslösungen für Forschung, Industrie und Fördergeber. Durch interdisziplinäre Zusammenarbeit verbindet das IMM neueste Wissenschaft mit praktischem Know-how und bietet Zugang zu Talenten sowie moderner Infrastruktur.',
themes: ['Automotive', 'Road Safety', 'Decarbonization', 'Autonomous Driving', 'Future Drive Technologies incl. H2'],
address: 'Lothstraße 64, 80335 München, Deutschland',
website: 'www.imm.hm.edu',
emails: ['joanne.arkless@hm.edu']
},
{
id: 'intensa-gmbh',
name: 'Intensa GmbH',
keywords: ['elektromechanische teile', 'baugruppen', 'elektrifizierte antriebsstränge', 'insert-trägerrahmen', 'komponententräger', 'stromschienen', 'busbars', 'leadframes', 'gehäuse', 'ecus', 'aktoren', 'sensoren', 'hv-komponenten', 'battery junction boxes', 'bdu', 'pdu', 'xdu', 'power inverter', 'dc-filtermodule', 'mhev', 'phev', 'bev', 'fc-applikationen', 'laser-dichtschweißen', 'laserschweißen', 'prototypen', 'serienfertigung', 'cad-konzeptkonstruktion', 'cae', 'luft-/kriechstreckensimulation'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E10'
},
role: 'Mitaussteller',
profile: 'Die Intensa-Gruppe ist ein spezialisierter Engineering-/Projektierungs-Dienstleister und Serienlieferant. Intensa konzentriert sich auf fein- und elektromechanische Teile und smarte Baugruppen für den elektrifizierten Antriebsstrang. Schwerpunkte sind Komponenten wie Insert-Trägerrahmen, integrierte Komponententräger und umspritzte oder montierte Stromschienen.',
themes: ['Automotive', 'Manufacturing & Supply Chain', 'Supplier', 'Battery Tech', 'Future Drive Technologies incl. H2'],
address: 'Schlossplatz 2 TBZ Technologiezentrum, 3812 Groß Siegharts, Österreich',
website: 'www.intensa.at',
emails: ['office@intensa.at', 'pgreulberger@intensa.at', 'whodulik@intensa.at', 'dberger@intensa.at']
},
{
id: 'inventec-corporation',
name: 'INVENTEC CORPORATION',
keywords: ['notebook', 'server', 'automotive electronics', 'smart health', 'ai tech', 'computing device design', 'manufacturing services', 'integrated vehicle architectures', 'hpc', 'gateways', 'digital cockpits', 'zonal systems', 'mobility products', 'wireless chargers', 'smart key fobs', 'car keys', 'zonal gateways', 'ad systems', 'iatf 16949', 'vda 6.3', 'iso 26262', 'aspice', 'iso 21434', 'automotive', 'supplier', 'entertainment & vr'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E22'
},
role: 'Mitaussteller',
profile: 'Inventec, founded in 1975, is a leading provider of computing device design and manufacturing services with proven success in servers, NB, and mobile technologies. Since entering the automotive industry in 2017, Inventec has applied its expertise in servers to create advanced solutions that support the shift toward integrated vehicle architectures. Our strong R&D capabilities and global manufacturing network allow us to deliver innovative, reliable solutions that shape the industry’s future.',
themes: ['Automotive', 'Supplier', 'Entertainment & VR'],
address: 'No. 349, Sec. 2, Renhe Rd., Daxi Dist., Taoyuan City 335005, Taiwan (Chinesisch-Taipeh)',
website: 'ame.inventec.com/en',
emails: ['kuo.andrew@inventec.com', 'zhan.elise@inventec.com', 'yeh.angela@inventec.com']
},
{
id: 'invest-in-canada',
name: 'Invest in Canada',
keywords: ['kanada', 'investitionen', 'wirtschaftsförderung', 'standortmarketing', 'ausländische direktinvestitionen', 'wirtschaftsstandort', 'kanadische wirtschaft', 'internationales geschäft', 'geschäftsentwicklung', 'kanadische regierung', 'wirtschaftsbeziehungen', 'kanadische märkte', 'wirtschaftsnetzwerke', 'kanadische investitionsmöglichkeiten'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E25'
},
role: 'Mitaussteller',
profile: 'Invest in Canada ist die kanadische Agentur für Wirtschaftsförderung, die internationale Investitionen in Kanada fördert. Sie bietet umfassende Unterstützung für Unternehmen, die in den kanadischen Markt eintreten möchten.',
themes: [],
address: '155 Queen Street, Ottawa K1A 0B8, Kanada',
website: 'www.investcanada.ca/',
emails: []
},
{
id: 'inyo-mobility',
name: 'INYO Mobility',
keywords: ['automatisierte leichtbaufahrzeuge', 'first mile', 'last mile', 'autonome fahrdienstleistungen', 'öpnv', 'individueller mobilitätsservice', 'verkehrsoptimierung', 'klimafreundliche stadtentwicklung', 'elektrisches leichtbau-fahrzeug', 'punkt zu punkt verbindungen', 'on-demand', 'modular', 'mobilitätssystem', 'effizienz', 'wirtschaftlichkeit', 'best-cost-per-mile', 'inklusion', 'komfort', 'deutschland', 'automotive', 'lev', 'public transport', 'mobility on demand', 'mobility as a service', 'smart city mobility', 'smart country mobility', 'decarbonization', 'inclusion', 'software defined vehicles', 'autonomous driving', 'remote-controlled vehicles'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS435'
},
role: 'Mitaussteller',
profile: 'INYO Mobility ist ein auf die Erste und Letzte Meile spezialisierter Systemanbieter für autonome Fahrdienstleistungen. INYO fügt sich nahtlos in den öffentlichen Verkehr in Stadt und Region ein und leistet als individueller Mobilitätsservice (iÖPNV) einen wichtigen Beitrag zur Verkehrsoptimierung und einer klimafreundlichen Stadt- und Regionalentwicklung. Das INYO-Cab ist ein elektrisches Leichtbau-Fahrzeug für maximal 4 Passagiere.',
themes: ['Automotive', 'LEV', 'Public Transport', 'Mobility on demand', 'Mobility as a Service', 'Smart City Mobility', 'Smart Country Mobility', 'Decarbonization', 'Inclusion', 'Software Defined Vehicles', 'Autonomous Driving', 'Remote-Controlled Vehicles'],
address: 'Am Schammacher Feld 37, 85567 Grafing, Deutschland',
website: 'www.inyo-mobility.com',
emails: []
},
{
id: 'irp-systems',
name: 'IRP Systems',
keywords: ['elektromobilität', 'e-antriebslösungen', 'steuergeräte', 'motoren', 'software', 'oem', 'elektrische motorräder', 'dreiräder', 'leichte nutzfahrzeuge', 'personenkraftfahrzeuge', 'modular', 'softwaredefiniert', 'nachhaltig', 'geschwindigkeit', 'skalierbarkeit', 'leistung', 'integration', 'agile entwicklung', 'markteintritt', 'automotive', 'lev', 'micromobility', 'decarbonization', 'supplier', 'software defined vehicles', 'ai', 'genai', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C02'
},
role: 'Hauptaussteller',
profile: 'IRP Systems ist ein Technologieunternehmen, das die Elektromobilität mit modularen, softwaredefinierten und nachhaltigen E-Antriebslösungen neu definiert. Die End-to-End-Plattformen des Unternehmens – von Steuergeräten über Motoren bis hin zu Software – sind auf Geschwindigkeit, Skalierbarkeit und Leistung ausgelegt. Mit Engineering- und Support-Teams in Israel, Indien und Spanien ermöglicht IRP führenden OEMs eine schnelle Integration, agile Entwicklung und einen beschleunigten Markteintritt für elektrische Motorräder, Dreiräder sowie leichte Nutz- und Personenkraftfahrzeuge.',
themes: ['Automotive', 'LEV', 'Micromobility', 'Decarbonization', 'Supplier', 'Software Defined Vehicles', 'AI & GenAI', 'Future Drive Technologies incl. H2'],
address: 'Avinguda Parc Logístic 22-26, 08040 Barcelona, Spanien',
website: 'www.irpsystems.com',
emails: ['fran@irpsystems.com']
},
{
id: 'israel-export-institute',
name: 'ISRAEL EXPORT INSTITUTE',
keywords: ['export-oriented services', 'joint ventures', 'strategic alliances', 'trade partnerships', 'automotive', 'mobility as a service', 'smart city mobility', 'road safety', 'software defined vehicles', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'semiconductors', 'chips', 'entertainment', 'vr'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C12'
},
role: 'Hauptaussteller',
profile: 'The Israel Export and International Cooperation Institute, supported by member firms, private sector bodies and the government of Israel, advances business relationships between Israeli exporters and overseas businesses and organizations.',
themes: ['Automotive', 'Mobility as a Service', 'Smart City Mobility', 'Road Safety', 'Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Semiconductors & Chips', 'Entertainment & VR'],
address: '29, Hamered St., 6812511 Tel-Aviv, Israel',
website: 'www.export.gov.il/en',
emails: ['camillak@export.gov.il', 'mayav@export.gov.il']
},
{
id: 'ivis-inc',
name: 'ivis Inc.',
keywords: ['eingebettete software', 'automobilindustrie', 'softwaretechnologien', 'lösungen für oems', 'tier-1-zulieferer', 'hyundai', 'kia', 'hyundai mobis', 'lg electronics', 'automotive', 'verteidigung', 'schiffbau', 'robotik', 'soafee', 'agl', 'covesa', 'sdv-ökosystem', 'plattformunabhängig', 'interoperabel', 'mobilität', 'software defined vehicles', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'cybersecurity'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D120'
},
role: 'Hauptaussteller',
profile: 'ivis Inc., gegründet im Jahr 2010, ist ein führender Anbieter von eingebetteter Software für die Automobilindustrie. Das Unternehmen liefert fortschrittliche Softwaretechnologien und maßgeschneiderte Lösungen für globale OEMs und Tier-1-Zulieferer. Mit einer starken Basis im Automotive-Bereich erweitert ivis seine Geschäftsfelder auf Branchen wie Verteidigung, Schiffbau und Robotik.',
themes: ['Automotive', 'Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Cybersecurity'],
address: '4F, Changnyong-daero 50beon-gil 50 Yeongtong-gu (Gwanggyo Flex Desian), Suwon-si 16229, Südkorea (KR)',
website: 'www.ivis.ai',
emails: ['ivis@ivis.ai']
},
{
id: 'ivis-inc',
name: 'ivis Inc.',
keywords: ['eingebettete software', 'automobilindustrie', 'softwaretechnologien', 'lösungen', 'oem', 'tier-1', 'hyundai', 'kia', 'hyundai mobis', 'lg electronics', 'automotive', 'verteidigung', 'schiffbau', 'robotik', 'soafee', 'agl', 'covesa', 'sdv-ökosystem', 'mobilität', 'software defined vehicles', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'cybersecurity'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D120'
},
role: 'Hauptaussteller',
profile: 'ivis Inc., gegründet im Jahr 2010, ist ein führender Anbieter von eingebetteter Software für die Automobilindustrie. Das Unternehmen liefert fortschrittliche Softwaretechnologien und maßgeschneiderte Lösungen für globale OEMs und Tier-1-Zulieferer. Mit einer starken Basis im Automotive-Bereich erweitert ivis seine Geschäftsfelder auf Branchen wie Verteidigung, Schiffbau und Robotik.',
themes: ['Automotive', 'Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Cybersecurity'],
address: '4F, Changnyong-daero 50beon-gil 50 Yeongtong-gu (Gwanggyo Flex Desian), Suwon-si 16229, Südkorea (KR)',
website: 'www.ivis.ai',
emails: ['ivis@ivis.ai']
},
{
id: 'jabez-korea-electronics-co-ltd',
name: 'JABEZ KOREA ELECTRONICS CO., LTD',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '255 Doksan-ro, Geumcheon-gu, Seoul 08577, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'jabez-korea-electronics-co-ltd',
name: 'JABEZ KOREA ELECTRONICS CO., LTD',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '255 Doksan-ro, Geumcheon-gu, Seoul 08577, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'jet-wagon-citc-panel-parts-co-ltd',
name: 'Jet Wagon-CITC Panel Parts Co., Ltd.',
keywords: ['leichtbau', 'karosseriestrukturen', 'batteriestrukturen', '1st-tier-automobilzulieferer', 'oem', 'ev-hersteller', 'metallbaugruppen', 'class-a-pressteile', 'batteriegehäuse', 'elektromobilität', 'jet-box-batteriegehäusesystem', 'aluminium warmgeformt', 'kühlsystem', 'reichweite', 'sicherheitsstandards', 'maßgeschneidertes leichtbaudesign'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Jet Wagon Metal Tech beliefert als in China ansässiger 1st-Tier-Automobilzulieferer seit über 30 Jahren sowohl globale OEMs als auch neue chinesische EV-Hersteller. Jet Wagon bietet All-Inclusive-Dienstleistungen in der Entwicklung und Produktion von Metallbaugruppen an. Gemeinsam mit chinesischen EV/REEV-Pionieren hat Jet Wagon innovative Leichtbaulösungen für die Elektromobilität entwickelt.',
themes: ['Battery Tech'],
address: 'No. 3963 Susong Rd., 230000 Hefei City, China',
website: 'www.jetwagon.cn',
emails: ['song.han@jetwagon.cn', 'ji.li@jetwagon.cn', 'liuxy@cac-citc.cn']
},
{
id: 'jiangsu-yunyi-electric-co-ltd',
name: 'Jiangsu Yunyi Electric Co., Ltd.',
keywords: ['ev-ladegeräte', 'windschutzscheibenwischer-systeme', 'nox-sensoren', 'automobil-elektronikkomponenten', 'fahrzeug-unterstützungsdienste', 'automatorektifizierer', 'spannungsregler', 'halbleiter', 'lambda-sensoren', 'präzise injektionsteile', 'hochspannungsbuchsen', 'ladepistolen', 'automotive', 'charging and refueling infrastructure incl. energy grid'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E40'
},
role: 'Hauptaussteller',
profile: 'Jiangsu Yunyi Electric Co., Ltd. ist ein High-Tech-Unternehmen, das sich auf die Forschung und Entwicklung, Herstellung und Vermarktung von Automobil-Elektronikkomponenten konzentriert und Kunden hochwertige Fahrzeug-Unterstützungsdienste anbietet.',
themes: ['Automotive', 'Charging and Refueling Infrastructure incl. Energy Grid'],
address: 'No. 26, Huangshan Road, Tongshan Zone, 221100 Xuzhou, China',
website: 'www.yunyi-china.com',
emails: ['xieying@yunyi-china.com']
},
{
id: 'jinyang-oilseal-co-ltd',
name: 'JINYANG OILSEAL CO., LTD.',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '17-24, Secheon-ro 7-gil, Dasa-eup, Dalseong-gun, Daegu 42921, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'jje-technologies-co-ltd',
name: 'JJE Technologies Co., Ltd.',
keywords: ['electric drive systems', 'passenger vehicles', 'commercial vehicles', 'electric motors', 'power electronics', 'transmissions', 'software', 'integrated electric drive systems', '3-in-1 systems', 'zero defect', 'high quality', 'off-road machinery', 'global technology supplier', 'engineering', 'manufacturing', 'automotive', 'decarbonization', 'semiconductors & chips'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E21'
},
role: 'Hauptaussteller',
profile: 'JJE is a leading global technology supplier in electric drive systems. The company develops cutting-edge solutions for passenger vehicles and commercial vehicles. JJE has a full suite of state-of-the-art technologies in electric motors, power electronics, transmissions, software and integrated electric drive (3-in-1) systems.',
themes: ['Automotive', 'Decarbonization', 'Semiconductors & Chips'],
address: 'Radiance Park 18, No. 20 Boda RD., Chaoyang Dist., 100023 Beijing, China',
website: 'www.jjeglobal.com',
emails: ['haibin.li@jjeglobal.com']
},
{
id: 'jobrad-loop',
name: 'JobRad® Loop',
keywords: ['cycling', 'hauptaussteller'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS496'
},
role: 'Hauptaussteller',
profile: 'JobRad® Loop präsentiert innovative Lösungen im Bereich Cycling.',
themes: [],
address: 'Landsberger Straße 318 C-D, 80687 München, Deutschland',
website: 'www.jobrad-loop.com',
emails: []
},
{
id: 'johnson-matthey-plc',
name: 'Johnson Matthey Plc',
keywords: ['nachhaltige technologien', 'netto-null-emissionen', 'fortschrittliche materialien', 'chemie', 'emissionsreduktion', 'ressourceneffizienz', 'saubere energie', 'wasserstofftechnologien', 'katalysatoren', 'sauberere luft', 'industriepartner', 'sauberere welt', 'gesündere welt', 'nachhaltiger transport', 'automotive', 'circular economy'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Johnson Matthey ist ein weltweit führendes Unternehmen im Bereich nachhaltiger Technologien und treibt den Übergang zu Netto-Null-Emissionen voran. Mit Fachwissen in fortschrittlichen Materialien und Chemie entwickeln wir innovative Lösungen, die Emissionen reduzieren, die Ressourceneffizienz verbessern und saubere Energie ermöglichen.',
themes: ['Automotive', 'Circular Economy'],
address: 'Orchard Road, Royston SG8 5HE, Großbritannien',
website: 'www.matthey.com',
emails: ['jmpr@matthey.com', 'rebecca.lawman@matthey.com']
},
{
id: 'johnson-matthey-plc',
name: 'Johnson Matthey Plc',
keywords: ['nachhaltige technologien', 'netto-null-emissionen', 'fortschrittliche materialien', 'chemie', 'emissionsreduktion', 'ressourceneffizienz', 'saubere energie', 'wasserstofftechnologien', 'katalysatoren', 'sauberere luft', 'industriepartner', 'sauberere welt', 'gesündere welt', 'nachhaltiger transport', 'automotive', 'circular economy'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Johnson Matthey ist ein weltweit führendes Unternehmen im Bereich nachhaltiger Technologien und treibt den Übergang zu Netto-Null-Emissionen voran. Mit Fachwissen in fortschrittlichen Materialien und Chemie entwickeln wir innovative Lösungen, die Emissionen reduzieren, die Ressourceneffizienz verbessern und saubere Energie ermöglichen.',
themes: ['Automotive', 'Circular Economy'],
address: 'Orchard Road, Royston SG8 5HE, Großbritannien',
website: 'www.matthey.com',
emails: ['jmpr@matthey.com', 'rebecca.lawman@matthey.com']
},
{
id: 'k2-mobility-gmbh',
name: 'K2 Mobility GmbH',
keywords: ['mobility', 'hauptaussteller', 'summit', 'automotive', 'transportation', 'innovation', 'technology', 'potsdam', 'germany', 'k2mobility', 'markus kröger', 'managing director', 'kontakt', 'vertrieb', 'produktkategorien'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C317'
},
role: 'Hauptaussteller',
profile: 'K2 Mobility GmbH ist ein führender Anbieter im Bereich Mobilität und Transportlösungen. Das Unternehmen präsentiert innovative Technologien und Produkte auf der IAA MOBILITY 2025. Besuchen Sie uns in Halle A2, Stand C317.',
themes: [],
address: 'Am Speicher 4, 14473 Potsdam, Deutschland',
website: 'www.k2mobility.com',
emails: ['hello@k2mobility.com']
},
{
id: 'kamo-karlsruhe-mobility-high-performance-center',
name: 'KAMO: Karlsruhe Mobility High Performance Center',
keywords: ['interdisziplinäre mobilitätsforschung', 'entwicklung', 'transfer', 'mobilitätslösungen', 'forschung', 'lehre', 'innovative lösungen', 'mobilität und gesellschaft', 'fahrzeuge und umwelt', 'digitalisierung', 'country to city bridge', 'aveas', 'dakimo', 'automotive', 'micromobility', 'public transport', 'mobility as a service', 'intermodality', 'smart city mobility', 'smart country mobility', 'road safety', 'circular economy', 'software defined vehicles', 'autonomous driving', 'ai & genai', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Das KAMO: Karlsruhe Mobility Leistungszentrum bündelt die Kompetenzen der Karlsruher Institutionen für Forschung, Lehre und Transfer, um Unternehmen bei der Entwicklung innovativer, marktfähiger Lösungen zu unterstützen. Unser Spektrum ist eingeordnet in die Forschungsfelder »Mobilität und Gesellschaft«, »Fahrzeuge und Umwelt« und »Digitalisierung«.',
themes: ['Automotive', 'Micromobility', 'Public Transport', 'Mobility as a Service', 'Intermodality', 'Smart City Mobility', 'Smart Country Mobility', 'Road Safety', 'Circular Economy', 'Software Defined Vehicles', 'Autonomous Driving', 'AI & GenAI', 'Battery Tech'],
address: 'Rintheimer Querallee 2 Gebäude 70.16, 76131 Karlsruhe, Deutschland',
website: 'www.kamo.one',
emails: ['miriam.ruf@ict.fraunhofer.de', 'matthias.vollat@kit.edu']
},
{
id: 'kamo-karlsruhe-mobility-high-performance-center',
name: 'KAMO: Karlsruhe Mobility High Performance Center',
keywords: ['interdisziplinäre mobilitätsforschung', 'entwicklung', 'transfer', 'mobilitätslösungen', 'forschung', 'lehre', 'innovative lösungen', 'mobilität und gesellschaft', 'fahrzeuge und umwelt', 'digitalisierung', 'country to city bridge', 'aveas', 'dakimo', 'automotive', 'micromobility', 'public transport', 'mobility as a service', 'intermodality', 'smart city mobility', 'smart country mobility', 'road safety', 'circular economy', 'software defined vehicles', 'autonomous driving', 'ai & genai', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Das KAMO: Karlsruhe Mobility Leistungszentrum bündelt die Kompetenzen der Karlsruher Institutionen für Forschung, Lehre und Transfer, um Unternehmen bei der Entwicklung innovativer, marktfähiger Lösungen zu unterstützen. Unser Spektrum ist eingeordnet in die Forschungsfelder »Mobilität und Gesellschaft«, »Fahrzeuge und Umwelt« und »Digitalisierung«.',
themes: ['Automotive', 'Micromobility', 'Public Transport', 'Mobility as a Service', 'Intermodality', 'Smart City Mobility', 'Smart Country Mobility', 'Road Safety', 'Circular Economy', 'Software Defined Vehicles', 'Autonomous Driving', 'AI & GenAI', 'Battery Tech'],
address: 'Rintheimer Querallee 2 Gebäude 70.16, 76131 Karlsruhe, Deutschland',
website: 'www.kamo.one',
emails: ['miriam.ruf@ict.fraunhofer.de', 'matthias.vollat@kit.edu']
},
{
id: 'karuso',
name: 'KARUSO',
keywords: ['bike-box', 'fahrradabstellanlagen', 'e-bikes', 'infrastruktur', 'radverkehr', 'modular', 'app steuerbar', 'verkauf', 'vermietung', 'werbeflächen', 'digitale services', 'fördermittel', 'nachhaltige mobilität', 'verkehrswende', 'pilotprojekte', 'partnerschaften', 'multiplikatoren'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C307'
},
role: 'Hauptaussteller',
profile: 'KARUSO – Die smarte, vernetzte Bike-Box mit dem Dreh für sichere Radplätze! Wir sind ein Familien—Startup aus Oberschwaben und entwickeln innovative, drehbare und digitale Fahrradabstellanlagen für Städte, Unternehmen und Events. Mit KARUSO schaffen wir eine sofort einsetzbare Infrastruktur für den wachsenden Radverkehr – insbesondere für hochwertige E—Bikes.',
themes: ['Cycling', 'Micromobility', 'Smart City Mobility', 'Manufacturing & Supply Chain', 'Connectivity, IoT & Big Data'],
address: 'Alleenstraße 21, 88400 Biberach, Deutschland',
website: 'www.karuso.eu',
emails: ['info@karuso.eu', 'anna-maria@karuso.eu']
},
{
id: 'karuso',
name: 'KARUSO',
keywords: ['bike-box', 'fahrradabstellanlagen', 'e-bikes', 'infrastruktur', 'radverkehr', 'modular', 'app steuerbar', 'verkauf', 'vermietung', 'werbeflächen', 'digitale services', 'fördermittel', 'nachhaltige mobilität', 'verkehrswende', 'pilotprojekte', 'multiplikatoren'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C307'
},
role: 'Hauptaussteller',
profile: 'KARUSO – Die smarte, vernetzte Bike-Box mit dem Dreh für sichere Radplätze! Wir sind ein Familien—Startup aus Oberschwaben und entwickeln innovative, drehbare und digitale Fahrradabstellanlagen für Städte, Unternehmen und Events. Mit KARUSO schaffen wir eine sofort einsetzbare Infrastruktur für den wachsenden Radverkehr – insbesondere für hochwertige E—Bikes.',
themes: ['Cycling', 'Micromobility', 'Smart City Mobility', 'Manufacturing & Supply Chain', 'Connectivity, IoT & Big Data'],
address: 'Alleenstraße 21, 88400 Biberach, Deutschland',
website: 'www.karuso.eu',
emails: ['info@karuso.eu', 'anna-maria@karuso.eu']
},
{
id: 'kia-deutschland-gmbh',
name: 'Kia Deutschland GmbH',
keywords: ['nachhaltige mobilitätslösungen', 'elektrifizierte fahrzeuge', 'batteriebetriebene fahrzeuge', 'mobilitätsdienste', 'automotive', 'mobility on demand', 'mobility as a service', 'charging and refueling infrastructure', 'energy grid', 'manufacturing', 'supply chain', 'autonomous driving', 'connectivity', 'iot', 'big data'],
location: {
type: 'Open Space',
hallOrPlace: 'Odeonsplatz',
booth: 'TD305'
},
role: 'Hauptaussteller',
profile: 'Kia ist eine globale Mobilitätsmarke mit der Vision, nachhaltige Mobilitätslösungen weltweit zu schaffen. Kia ist ein Vorreiter bei der Popularisierung von elektrifizierten und batteriebetriebenen Fahrzeugen und entwickelt vielfältige Mobilitätsdienste. Der Markenslogan „Movement that inspires“ verdeutlicht die Zielsetzung von Kia, Verbraucher durch seine Produkte und Services zu inspirieren.',
themes: ['Automotive', 'Mobility on demand', 'Mobility as a Service', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Manufacturing & Supply Chain', 'Autonomous Driving', 'Connectivity, IoT & Big Data'],
address: 'Theodor-Heuss-Allee 11, 60486 Frankfurt am Main, Deutschland',
website: 'www.kia.com',
emails: []
},
{
id: 'kika-tech',
name: 'KIKA TECH',
keywords: ['ime', 'schriftarten', 'auto-navigationslösungen', 'ki-gestützte eingabetechnologien', 'mensch-computer-interaktionslösungen', 'adaptive schriftarten', 'automotive-navigationssysteme', 'datenanalyse', 'maschinelles lernen', 'software defined vehicles', 'connectivity', 'iot', 'big data', 'entertainment', 'vr', 'digitale dienste', 'navigationssysteme', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C42'
},
role: 'Hauptaussteller',
profile: 'Gegründet im Jahr 2011, ist Kika ein global führendes Unternehmen im Bereich KI-gestützter Eingabetechnologien und Mensch-Computer-Interaktionslösungen. Im Kern unserer Innovation stehen IME-Tastaturen, adaptive Schriftarten und Automotive-Navigationssysteme – Produkte, die nahtlose Kommunikation über Geräte und Plattformen hinweg neu definieren. Basierend auf modernster Datenanalyse und maschinellem Lernen bedienen unsere Lösungen vielfältige Szenarien und Märkte weltweit.',
themes: ['Supplier', 'Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'Entertainment & VR'],
address: 'Dongsi North Street, 100000 Beijing, China',
website: 'www.kikatech.com',
emails: ['darwin.lu@kikatech.com', 'owen.yang@kikatech.com', 'bonnie.yang@kikatech.net']
},
{
id: 'kirchhoff-automotive-se',
name: 'KIRCHHOFF Automotive SE',
keywords: ['karosserielösungen', 'fahrwerkslösungen', 'automobilindustrie', 'sicherheitsstrukturen', 'metallstrukturen', 'hybridstrukturen', 'leichtbau', 'crashperformance', 'umformen', 'fügen', 'oberflächenbehandlung', 'crash management systeme', 'frontendrahmen', 'querträger', 'jit-werke', 'automotive', 'decarbonization', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'C30'
},
role: 'Hauptaussteller',
profile: 'KIRCHHOFF Automotive entwickelt und produziert Karosserie- und Fahrwerkslösungen für die weltweite Automobilindustrie. Sicherheitsrelevante Metall- und Hybridstrukturen von KIRCHHOFF Automotive sorgen dafür, dass die Fahrzeuginsassen bei einem Unfall optimal geschützt sind. Ein globales Produktionsnetzwerk gewährleistet einheitliche Fertigungs- und Produktionsstandards.',
themes: ['Automotive', 'Decarbonization', 'Supplier'],
address: 'Stefanstraße 2, 58638 Iserlohn, Deutschland',
website: 'www.kirchhoff-automotive.com',
emails: ['info@kirchhoff-automotive.com', 'christian.weiss@kirchhoff-automotive.com', 'andreas.heine@kirchhoff-automotive.com']
},
{
id: 'kirpart-otomotiv-parcalari',
name: 'Kirpart Otomotiv Parcalari',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D20'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Gedelek Mah. Gedelek Sk., 16800 Bursa, Türkei',
website: undefined,
emails: []
},
{
id: 'kognic',
name: 'Kognic',
keywords: ['data annotation', 'autonomy', 'safety', 'sensor-fusion', 'autonomous driving', 'mobile robotics', 'model training', 'validation', 'L2+ vehicle', 'robotaxi fleets', 'software defined vehicles', 'future drive technologies', 'digitale dienste', 'autonome zielführung'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E20'
},
role: 'Mitaussteller',
profile: 'Kognic is the market leader in data annotation for autonomy and safety, powering the most advanced and demanding autonomy companies worldwide. With over 100 million annotations delivered across 7 years, Kognic has proven its reliability and expertise in sensor-fusion and autonomy domains. Our purpose-built platform is tailored for the enormous scale and specific needs of industries such as autonomous driving and mobile robotics.',
themes: ['Software Defined Vehicles', 'Autonomous Driving', 'Future Drive Technologies incl. H2'],
address: 'Lindholmspiren 7, 417 56 Gothenburg, Schweden',
website: 'kognic.com',
emails: ['marketing@kognic.com', 'jon.jaleby@kognic.com']
},
{
id: 'kompetenzstelle-elektromobilitat-bayern-bayern-innovativ-gmbh',
name: 'Kompetenzstelle Elektromobilität Bayern (Bayern Innovativ GmbH)',
keywords: ['e-mobilität', 'beratung', 'förderung', 'ladeinfrastrukturnetz', 'markthochlauf', 'elektromobilität', 'bayern', 'umweltschonend', 'lärmarm', 'multimodal', 'unternehmen', 'kommunale einrichtungen', 'spitzenposition', 'zukunftsthema', 'charging and refueling infrastructure incl. energy grid', 'decarbonization', 'regulation', 'liability', 'esgs', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B11'
},
role: 'Mitaussteller',
profile: 'Als Kompetenzstelle Elektromobilität der Bayern Innovativ GmbH beraten wir Unternehmen und kommunale Einrichtungen zum Thema Ladeinfrastrukturnetz sowie dessen Förderung und treiben auf diese Weise den Markthochlauf der Elektromobilität voran und sichern die Spitzenposition Bayerns in diesem Zukunftsthema.',
themes: ['Charging and Refueling Infrastructure incl. Energy Grid', 'Decarbonization', 'Regulation, Liability & ESGs', 'Battery Tech'],
address: 'Am Tullnaupark 8, 90402 Nürnberg, Deutschland',
website: 'www.bayern-innovativ.de/leistungen/mobilitaet/kompetenzstelle-elektromobilitaet/',
emails: ['elektromobilitaet@bayern-innovativ.de', 'presse@bayern-innovativ.de']
},
{
id: 'konzelmann-gmbh',
name: 'Konzelmann GmbH',
keywords: ['kunststoff innovationen', 'reiboptimierung', 'emissionsreduktion', 'oem', 'tier-1', 'automobil', 'medizin', 'industrie', 'technische spezialanwendungen', 'kberstring', 'e-mobilität', 'batteriesicherheit', 'purkon2000', 'leckageschutz', 'wasserstoff', 'rechteckdichtring', 'leakage', 'reibmoment', 'polymerkompetenz', 'nachhaltige werkstoffkompetenz'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'A10'
},
role: 'Hauptaussteller',
profile: 'Seit mehr als 60 Jahren steht die Konzelmann GmbH für Innovationen aus Kunststoff. Das familiengeführte Unternehmen entwickelt Kunststoffbauteile und -systeme zur Reiboptimierung sowie Emissionsreduktion. Seine Kunden sind große OEMs und Tier-1-Zulieferer in den Branchen Automobil, Medizin und Industrie.',
themes: ['Automotive'],
address: 'Lise-Meitner-Str. 15, 74369 Löchgau, Deutschland',
website: 'www.konzelmann.com',
emails: ['info@konzelmann.com', 'm.jungen@konzelmann.com']
},
{
id: 'konzepthaus-consulting-gmbh',
name: 'Konzepthaus Consulting GmbH',
keywords: [],
location: {
type: "",
 hallOrPlace: "",
booth: ""
},
role: 'Partner',
profile: '',
themes: [],
address: 'Osterwaldstraße 10, 80805 München, Deutschland',
website: 'www.konzepthaus-consulting.com',
emails: []
},
{
id: 'korea-lost-wax-co-ltd',
name: 'Korea Lost-wax Co., Ltd',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '220, Sihwa-ro, Danwon-gu, Ansan-si, Gyeonggi-do 15416, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'korea-lost-wax-co-ltd',
name: 'Korea Lost-wax Co., Ltd',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '220, Sihwa-ro, Danwon-gu, Ansan-si, Gyeonggi-do 15416, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'kostal-automobil-elektrik-gmbh-co-kg',
name: 'KOSTAL Automobil Elektrik GmbH & Co. KG',
keywords: ['lenksäulenmodule', 'shift-by-wire-module', 'türsteuergeräte', 'onboard-charger', 'elektromobilität', 'oem', 'automobilindustrie', 'weltmarktführer', 'automotive', 'intermodality', 'supplier', 'software defined vehicles', 'driving experience', 'comfort experience', 'charging solutions', 'power solutions'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'C10'
},
role: 'Hauptaussteller',
profile: 'KOSTAL Automobil Elektrik entwickelt innovative Produkte für die Automobilindustrie und ist Weltmarktführer bei Lenksäulen- sowie Shift-by-Wire-Modulen und Türsteuergeräten. Das Unternehmen gestaltet die Elektromobilität mit über 5,5 Millionen Onboard-Chargern im Feld.',
themes: ['Automotive', 'Intermodality', 'Supplier', 'Software Defined Vehicles'],
address: 'An der Bellmerei 10, 58513 Lüdenscheid, Deutschland',
website: 'www.kostal-automobil-elektrik.com',
emails: ['info@kostal.com', 'f.loewen@kostal.com', 'h.ucar@kostal.com']
},
{
id: 'kotei-informatics',
name: 'KOTEI Informatics',
keywords: ['ai', 'automotive software', 'software dreamworks', 'sdv solutions', 'a²os', 'smart cockpit', 'autonomous driving', 'cloud', 'vehicle integration', 'testing', 'cross-domain control units', 'oem', 'tier-1', 'software defined vehicles', 'cybersecurity', 'entertainment', 'vr', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B21'
},
role: 'Hauptaussteller',
profile: 'Founded in 2002, KOTEI is a global leader in the “AI + Automotive Software” industry, committed to advancing the intelligent transformation of the automotive industry through comprehensive AI-integrated development capabilities. KOTEI has independently developed Software DreamWorks (SDW), pioneering a new paradigm of human-AI collaborative development. The company has developed A²OS, a vehicle operating system tailored for centralized computing architectures.',
themes: ['Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'AI & GenAI', 'Cybersecurity', 'Entertainment & VR', 'Future Drive Technologies incl. H2'],
address: 'Gangbiantian Road 1 NO.6, 430070 Wuhan, Hubei, China',
website: undefined,
emails: ['lv.nan@kotei.com.cn']
},
{
id: 'kreisel-electric-gmbh',
name: 'KREISEL Electric GmbH',
keywords: ['batterietechnologie', 'hochleistungsbatterien', 'elektromobilität', 'batterieintegrierte ladeinfrastruktur', 'prototypen', 'serienreife komplettlösungen', 'landwirtschaft', 'bergbau', 'straßenbau', 'bauwesen', 'straßenverkehr', 'schifffahrt', 'software- und hardware-entwicklung', 'forschung und test', 'batteriesysteme', 'automotive', 'smart city mobility', 'smart country mobility', 'charging and refueling infrastructure', 'energy grid', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E10'
},
role: 'Mitaussteller',
profile: 'KREISEL ist der Experte für Batterietechnologie. Das Unternehmen konzentriert sich auf die Entwicklung und Produktion von Hochleistungsbatterien für eine Vielzahl von Anwendungen und Branchen. Interne Software- und Hardware-Teams sowie Forschungs- und Testabteilungen stellen sicher, dass die Batteriesysteme den internationalen Standards und Kundenanforderungen entsprechen.',
themes: ['Automotive', 'Smart City Mobility', 'Smart Country Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Battery Tech'],
address: 'Kreiselstraße 1, 4261 Rainbach im Mühlkreis, Österreich',
website: 'www.kreiselelectric.com',
emails: ['info@kreiselelectric.com', 'markus.kaser@kreiselelectric.com', 'dominik.leidinger@kreiselelectric.com']
},
{
id: 'ks-terminals-inc',
name: 'K.S. Terminals Inc.',
keywords: ['electrical terminals', 'automotive connectors', 'battery modular connectors', 'ev charging connectors', 'precision mold design', 'cold press stamping', 'injection molding', 'connector solutions', 'automotive', 'charging and refueling infrastructure', 'energy grid'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E22'
},
role: 'Mitaussteller',
profile: 'K.S. Terminals Inc. is a global manufacturer of high-quality electrical terminals, automotive connectors, battery modular connectors (BMC) and EV Charging Connectors. KST was first established in Changhua, Taiwan in 1973 and has become known for its excellence in connector solutions.',
themes: ['Automotive', 'Charging and Refueling Infrastructure incl. Energy Grid'],
address: 'No.8, Zhangbin E. 3rd Road., Xianxi Township, Changhua 50741, Taiwan (Chinesisch-Taipeh)',
website: 'www.ksterminals.com.tw',
emails: ['exp@ksterminals.com.tw', 'brian@ksterminals.com.tw', 'phili@ksterminals.com.tw']
},
{
id: 'kumho-industrial-co-ltd',
name: 'KUMHO INDUSTRIAL CO., LTD.',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '104, Saneop-ro, Jeongchon-myeon, Jinju-si, Gyeongsangnam-do 52845, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'kupron-bv',
name: 'Kupron B.V.',
keywords: ['spritzgussteile', 'kunststoff-kleinserien', 'prototypen', 'konstruktionsteams', 'entwicklungsteams', 'fertigung', 'cad-design', 'thermoplasten', 'mucell', 'hybridteile', 'umspritzteile', 'montage', 'bauteilvermessung', 'baugruppenvermessung', 'werkzeugbau', 'aluminium-werkzeuge', 'stahl-werkzeuge', 'hybrid-werkzeuge', 'moldflow-simulationen', 'heißkanalsysteme', 'oberflächenbehandlungen', 'automotive', 'cycling', 'lev', 'micromobility', 'public transport'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: 'Kupron B.V. ist ein One-Stop-Shop-Lieferant für Spritzgussteile und spezialisiert auf Kunststoff-Kleinserien und Prototypen. Das Unternehmen unterstützt Konstruktions- und Entwicklungsteams bei der Fertigung von Kunststoffteilen und bietet umfassende Werkzeuglösungen.',
themes: ['Automotive', 'Cycling', 'LEV', 'Micromobility', 'Public Transport'],
address: 'Industriestraat 2D Industriestraat, 6135 KH Sittard, Niederlande',
website: 'www.kupron.nl',
emails: ['sales@kupron.nl']
},
{
id: 'leonhard-kurz-stiftung',
name: 'LEONHARD KURZ Stiftung',
keywords: ['dünnschichttechnologie', 'automobilindustrie', 'consumer electronics', 'health & beauty', 'produkt- und fälschungsschutz', 'innovationsführer', 'dienstleister', 'kreative lösungen', 'qualitätsstandards', 'umweltstandards', 'kurz-gruppe', 'burg design', 'kurz digital solutions', 'polyic'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C21'
},
role: 'Hauptaussteller',
profile: 'KURZ ist ein weltweit führender Experte im Bereich der Dünnschichttechnologie mit mehr als 5.500 Mitarbeitern, großartiger Innovationskraft und zahlreichen internationalen Standorten. Die größten Marken und Unternehmen der Welt zählen zu unseren Kunden – aus der Automobilindustrie, den Bereichen Consumer Electronics, Health & Beauty sowie dem Produkt- und Fälschungsschutz.',
themes: [],
address: 'Schwabacher Straße 482, 90763 Fürth, Deutschland',
website: 'www.kurz-automotive.com',
emails: ['sales@kurz.de']
},
{
id: 'leonhard-kurz-stiftung',
name: 'LEONHARD KURZ Stiftung',
keywords: ['dünnschichttechnologie', 'automobilindustrie', 'consumer electronics', 'health & beauty', 'produkt- und fälschungsschutz', 'innovationsführer', 'dienstleister', 'kreative lösungen', 'qualitätsstandards', 'umweltstandards', 'kurz-gruppe', 'burg design', 'kurz digital solutions', 'polyic'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C21'
},
role: 'Hauptaussteller',
profile: 'KURZ ist ein weltweit führender Experte im Bereich der Dünnschichttechnologie mit mehr als 5.500 Mitarbeitern, großartiger Innovationskraft und zahlreichen internationalen Standorten. Die größten Marken und Unternehmen der Welt zählen zu unseren Kunden – aus der Automobilindustrie, den Bereichen Consumer Electronics, Health & Beauty sowie dem Produkt- und Fälschungsschutz. Als Innovationsführer und Dienstleister stellen wir kreative Lösungen für ganz unterschiedliche Herausforderungen bereit.',
themes: [],
address: 'Schwabacher Straße 482, 90763 Fürth, Deutschland',
website: 'www.kurz-automotive.com',
emails: ['sales@kurz.de']
},
{
id: 'kurz-digital-solutions',
name: 'KURZ Digital Solutions',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Schwabacher Straße 106, 90763 Fürth, Deutschland',
website: 'www.kurzdigital.com',
emails: []
},
{
id: 'kusan-co-ltd',
name: 'KUSAN CO, LTD',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '64, Saposandanjungang-ro, Bubuk-myeon, Miryang-si, Gyeongsangnam-do 50404, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'kwang-duck-auto-technology',
name: 'Kwang Duck Auto & Technology',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '367, Aenggogae-ro, Namdong-gu, Incheon 21695, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'landesentwicklungsgesellschaft-thueringen-mbh-leg-thueringen',
name: 'Landesentwicklungsgesellschaft Thüringen mbH (LEG Thüringen)',
keywords: ['wirtschaftsförderung', 'immobilienmanagement', 'technologiestandort', 'international trade and markets', 'organisationen', 'unternehmen', 'behörden', 'institutionen'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D27'
},
role: 'Hauptaussteller',
profile: 'Seit 1992 unterstützen wir als Landesentwicklungsgesellschaft Thüringen mbH die Entwicklung des Freistaates zu einem attraktiven Wirtschafts-, und Technologiestandort. Als 100-prozentige Tochter des Freistaates sind wir mit mehr als 250 Mitarbeiter:innen kompetenter Partner in allen Fragen der Wirtschaftsförderung & Immobilienmanagements.',
themes: ['International Trade and Markets'],
address: 'Mainzerhofstraße 12, 99084 Erfurt, Deutschland',
website: 'www.leg-thueringen.de',
emails: ['info@leg-thueringen.de', 'joerg.griethe@leg-thueringen.de']
},
{
id: 'landesentwicklungsgesellschaft-thueringen-mbh-leg-thueringen',
name: 'Landesentwicklungsgesellschaft Thüringen mbH (LEG Thüringen)',
keywords: ['wirtschaftsförderung', 'immobilienmanagement', 'technologiestandort', 'international trade and markets', 'organisationen', 'unternehmen', 'behörden', 'institutionen'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D27'
},
role: 'Hauptaussteller',
profile: 'Seit 1992 unterstützen wir als Landesentwicklungsgesellschaft Thüringen mbH die Entwicklung des Freistaates zu einem attraktiven Wirtschafts-, und Technologiestandort. Als 100-prozentige Tochter des Freistaates sind wir mit mehr als 250 Mitarbeiter:innen kompetenter Partner in allen Fragen der Wirtschaftsförderung & Immobilienmanagements.',
themes: ['International Trade and Markets'],
address: 'Mainzerhofstraße 12, 99084 Erfurt, Deutschland',
website: 'www.leg-thueringen.de',
emails: ['info@leg-thueringen.de', 'joerg.griethe@leg-thueringen.de']
},
{
id: 'leapmotor',
name: 'Leapmotor',
keywords: ['e-autos', 'new energy vehicles', 'elektrofahrzeuge', 'high-tech', 'bezahlbare preise', 'stadtwagen', 'd-suv', 'kompakt-suv', 'range extended electric vehicle', 'automotive', 'software defined vehicles'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'B21'
},
role: 'Hauptaussteller',
profile: 'Leapmotor ist eines der am schnellsten wachsenden chinesischen Startups für E-Autos. In Europa hat das Unternehmen die Kräfte mit Stellantis gebündelt, um die Marke zu vertreiben. Leapmotor bietet High-Tech-Elektrofahrzeuge zu bezahlbaren Preisen.',
themes: ['Automotive', 'Software Defined Vehicles'],
address: 'Via Plava 86, 10135 TORINO, Italien',
website: 'www.leapmotor.com',
emails: ['nico.schmidt@stellantis.com']
},
{
id: 'lego',
name: 'LEGO',
keywords: ['lego technic', 'lego formel 1', 'modellautos', 'accessoires', 'bekleidung', 'spielzeug', 'kreatives bauen', 'kinder', 'erwachsene fans', 'familienunternehmen', 'spiel gut', 'entwicklung fördern', 'lego system in play'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS445'
},
role: 'Hauptaussteller',
profile: 'Die Mission der LEGO Gruppe ist es, Kinder durch Spiel zu inspirieren und in ihrer Entwicklung zu fördern. Das „LEGO® System in Play“ ermöglicht Kindern und erwachsenen Fans mit LEGO® Steinen alles kreativ zu bauen und nachzubauen, was sie sich vorstellen können. Die LEGO Gruppe wurde 1932 in Billund, Dänemark von Ole Kirk Kristiansen gegründet.',
themes: [],
address: 'Technopark 2 Werner-von-Siemens-Ring 14, 85630 Grasbrunn, Deutschland',
website: 'www.lego.com',
emails: ['presse@lego.com']
},
{
id: 'lego',
name: 'LEGO',
keywords: ['modellautos', 'accessoires', 'bekleidung', 'spielzeug', 'kreatives bauen', 'lego system in play', 'kinder', 'erwachsene fans', 'familienunternehmen', 'entwicklung fördern', 'spiel inspirieren'],
location: {
type: 'Summit',
hallOrPlace: 'Halle EW',
booth: 'EW02'
},
role: 'Hauptaussteller',
profile: 'Die Mission der LEGO Gruppe ist es, Kinder durch Spiel zu inspirieren und in ihrer Entwicklung zu fördern. Das „LEGO® System in Play“ ermöglicht Kindern und erwachsenen Fans mit LEGO® Steinen alles kreativ zu bauen und nachzubauen, was sie sich vorstellen können. Die LEGO Gruppe wurde 1932 in Billund, Dänemark von Ole Kirk Kristiansen gegründet.',
themes: [],
address: 'Technopark 2, 85630 Grasbrunn, Deutschland',
website: 'www.lego.com',
emails: ['presse@lego.com']
},
{
id: 'lego',
name: 'LEGO',
keywords: ['modellautos', 'accessoires', 'bekleidung', 'spielzeug', 'kreatives bauen', 'lego system in play', 'kinder', 'erwachsene fans', 'familienunternehmen', 'entwicklung fördern', 'spiel inspirieren'],
location: {
type: 'Summit',
hallOrPlace: 'Halle EW',
booth: 'EW02'
},
role: 'Hauptaussteller',
profile: 'Die Mission der LEGO Gruppe ist es, Kinder durch Spiel zu inspirieren und in ihrer Entwicklung zu fördern. Das „LEGO® System in Play“ ermöglicht Kindern und erwachsenen Fans mit LEGO® Steinen alles kreativ zu bauen und nachzubauen, was sie sich vorstellen können. Die LEGO Gruppe wurde 1932 in Billund, Dänemark von Ole Kirk Kristiansen gegründet.',
themes: [],
address: 'Technopark 2, 85630 Grasbrunn, Deutschland',
website: 'www.lego.com',
emails: ['presse@lego.com']
},
{
id: 'lightly-ag',
name: 'Lightly AG',
keywords: ['intelligente datenerfassung', 'ki', 'datenkuratierung', 'vision-modelle', 'computer vision', 'ml-teams', 'modell-pretraining', 'fine-tuning', 'edge-geräte', 'fortune-500-automobilunternehmen', 'start-ups', 'entwicklungszyklen', 'produktionsreife ki', 'supplier', 'software defined vehicles', 'autonomous driving', 'ai', 'genai', 'automatisiertes fahren', 'autonomes fahren', 'fahrerassistenzsysteme', 'maschinelles lernen', 'deep learning'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D131'
},
role: 'Hauptaussteller',
profile: 'Lightly bietet eine All-in-One-Softwarelösung für Computer Vision, die ML-Teams dabei unterstützt, bessere Vision-Systeme zu entwickeln – von der Datenkuratierung über das Modell-Pretraining und Fine-Tuning bis hin zur Bereitstellung von KI auf Edge-Geräten.',
themes: ['Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'AI & GenAI'],
address: 'Bahnhofstrasse 86, 8001 Zürich, Schweiz',
website: 'www.lightly.ai',
emails: ['kas@lightly.ai', 'matthias@lightly.ai', 'chiara@lightly.ai']
},
{
id: 'lightly-ag',
name: 'Lightly AG',
keywords: ['intelligente datenerfassung', 'ki', 'datenkuratierung', 'vision-modelle', 'computer vision', 'ml-teams', 'modell-pretraining', 'fine-tuning', 'edge-geräte', 'fortune-500-automobilunternehmen', 'start-ups', 'entwicklungszyklen', 'produktionsreife ki', 'supplier', 'software defined vehicles', 'autonomous driving', 'ai', 'genai', 'automatisiertes fahren', 'autonomes fahren', 'fahrerassistenzsysteme', 'maschinelles lernen', 'deep learning'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D131'
},
role: 'Hauptaussteller',
profile: 'Lightly bietet eine All-in-One-Softwarelösung für Computer Vision, die ML-Teams dabei unterstützt, bessere Vision-Systeme zu entwickeln – von der Datenkuratierung über das Modell-Pretraining und Fine-Tuning bis hin zur Bereitstellung von KI auf Edge-Geräten.',
themes: ['Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'AI & GenAI'],
address: 'Bahnhofstrasse 86, 8001 Zürich, Schweiz',
website: 'www.lightly.ai',
emails: ['kas@lightly.ai', 'matthias@lightly.ai', 'chiara@lightly.ai']
},
{
id: 'lightyear',
name: 'Lightyear',
keywords: ['saubere mobilität', 'solar', 'software', 'leistungselektronik', 'fahrzeugintegrierte photovoltaik', 'solarmodule', 'proprietäre leistungselektronik', 'intelligentes softwaresystem', 'netzunabhängige solarmobilität', 'energieausbeute', 'systemeffizienz', 'solare elektromobilität', 'nachhaltige mobilitätslösungen', 'co2-emissionen reduzieren', 'ladebedarf minimieren', 'betriebliche unabhängigkeit', 'mobilitätslösungen', 'sonnenenergie', 'intelligent', 'skalierbar', 'automotive', 'smart city mobility', 'charging and refueling infrastructure incl. energy grid', 'circular economy', 'decarbonization', 'manufacturing & supply chain', 'supplier', 'software defined vehicles', 'battery tech', 'future drive technologies incl. h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: 'Lightyear entwickelt nachhaltige Mobilitätslösungen, die CO₂-Emissionen reduzieren, den Ladebedarf minimieren und die betriebliche Unabhängigkeit erhöhen. Unsere intern entwickelte Plattform für fahrzeugintegrierte Photovoltaik (Vehicle Integrated Photovoltaics, VIPV) vereint drei zentrale Komponenten: hocheffiziente Solarmodule, proprietäre Leistungselektronik und ein intelligentes Softwaresystem. Gemeinsam ermöglichen sie netzunabhängige Solarmobilität durch maximale Energieausbeute und Systemeffizienz.',
themes: ['Automotive', 'Smart City Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Circular Economy', 'Decarbonization', 'Manufacturing & Supply Chain', 'Supplier', 'Software Defined Vehicles', 'Battery Tech', 'Future Drive Technologies incl. H2'],
address: 'De Amfoor 2, 5807 GW Venray, Niederlande',
website: 'www.lightyear.one',
emails: ['info@lightyear.one', 'raul.olivercarrasco@lightyear.one', 'florian.gruss@lightyear.one', 'sophie.adriaans@lightyear.one']
},
{
id: 'linktour-automotive-co-ltd',
name: 'Linktour Automotive Co., Ltd',
keywords: ['urban travel', 'new energy vehicles', 'aluminum industry', 'vehicle manufacturing', 'recycling', 'reuse', 'smart nev', 'urban companion', 'micromobility', 'smart city mobility', 'automotive'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'D20'
},
role: 'Hauptaussteller',
profile: 'Linktour belongs to Shandong WEIQIAO PIONEERING GROUP, who has 18 domestic and overseas production sites and over 100,000 employees worldwide, covering complete value chains of the textile, aluminum and the new energy vehicles industries. Leveraging the globally leading aluminum industry advantages of the Group, Linktour simultaneously possesses the capabilities of a complete aluminum industrial chain, vehicle manufacturing, recycling and reuse. Centering around users and using product as a key, Linktour aims to become a global boutique smart NEV brand for urban travel.',
themes: ['Automotive', 'Micromobility', 'Smart City Mobility'],
address: 'Yungu Innovation Park, Xizang Road, 230022 Hefei, China',
website: undefined,
emails: ['liqingyi@linktour-auto.com']
},
{
id: 'bmw-group',
name: 'BMW GROUP',
keywords: ['automobile', 'test drives', 'family', 'mobility', 'automotive industry', 'innovation', 'open space', 'summit', 'hauptaussteller'],
location: {
type: 'Open Space',
hallOrPlace: 'Max-Joseph-Platz',
booth: 'MJ900'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: '80809 München, Deutschland',
website: undefined,
emails: []
},
{
id: 'loxo',
name: 'LOXO',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B13'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Friedrichshafener Straße 3, 82205 Gilching, Deutschland',
website: 'www.loxo.ch/en',
emails: []
},
{
id: 'loxo',
name: 'LOXO',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B13'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Friedrichshafener Straße 3, 82205 Gilching, Deutschland',
website: 'www.loxo.ch/en',
emails: []
},
{
id: 'magic-lane-international-bv',
name: 'Magic Lane International BV',
keywords: ['privacy-first navigation', 'mapping solutions', 'next-gen mobility apps', 'customizable navigation', 'automotive applications', 'smart city applications', 'mobility solutions', 'navigation technology', 'mapping technology', 'privacy solutions'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C318'
},
role: 'Hauptaussteller',
profile: 'Magic Lane delivers privacy-first, customizable navigation and mapping solutions, empowering next-generation mobility, automotive, and smart city applications worldwide.',
themes: [],
address: 'Narva-eiland 52, 1014 ZJ Amsterdam, Niederlande',
website: 'www.magiclane.com',
emails: []
},
{
id: 'magic-lane-international-bv',
name: 'Magic Lane International BV',
keywords: ['privacy-first navigation', 'mapping solutions', 'next-gen mobility apps', 'customizable navigation', 'automotive applications', 'smart city applications'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C318'
},
role: 'Hauptaussteller',
profile: 'Magic Lane delivers privacy-first, customizable navigation and mapping solutions, empowering next-generation mobility, automotive, and smart city applications worldwide.',
themes: [],
address: 'Narva-eiland 52, 1014 ZJ Amsterdam, Niederlande',
website: 'www.magiclane.com',
emails: []
},
{
id: 'mahle',
name: 'MAHLE',
keywords: ['entwicklungspartner', 'zulieferer', 'automobilindustrie', 'pkw', 'nutzfahrzeugsektor', 'klimaneutrale mobilität', 'elektromobilität', 'thermomanagement', 'co2-ausstoß', 'brennstoffzelle', 'verbrennungsmotoren', 'synthetische kraftstoffe', 'wasserstoff', 'automotive', 'cycling', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C20'
},
role: 'Hauptaussteller',
profile: 'MAHLE ist ein international führender Entwicklungspartner und Zulieferer der Automobilindustrie mit Kunden sowohl im Pkw- als auch im Nutzfahrzeugsektor. Der 1920 gegründete Technologiekonzern arbeitet an der klimaneutralen Mobilität von morgen mit Fokus auf Elektromobilität und Thermomanagement. Jedes zweite Fahrzeug weltweit ist heute mit MAHLE Komponenten ausgestattet.',
themes: ['Automotive', 'Cycling', 'Supplier'],
address: 'Pragstraße 26-46, 70376 Stuttgart, Deutschland',
website: 'www.mahle.com',
emails: ['info@mahle.com']
},
{
id: 'makingculture-ev',
name: 'MakingCulture e.V.',
keywords: ['forschungsplattform', 'experimentierplattform', 'demokratische innovation', 'zivilgesellschaftliches engagement', 'rekonstruktion elektroauto', 'automotive', 'kulturelles engagement', 'elektrowagen', 'coburger elektroauto', 'andreas flocken', 'stadtmuseum kooperation', 'vierrädriges elektroauto', 'visionärer unternehmer', 'erfinder'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS435'
},
role: 'Mitaussteller',
profile: 'Als offene Forschungs- und Experimentierplattform steht MakingCulture® e.V. im Sinne einer demokratischen, aktiven Innovations- und Experimentierkultur interessierten Bürgern, Unternehmen und Institutionen zur Verfügung. Der Verein bietet ein vielfältiges Spektrum an Möglichkeiten für zivilgesellschaftliches kulturelles Engagement.',
themes: ['Automotive'],
address: 'Eichendorffweg 8, 96450 Coburg, Deutschland',
website: 'www.makingculture.de',
emails: ['franz.qante@gmail.com', 'pl@pl-innovation.com', 'sande.grub@t-online.de']
},
{
id: 'makingculture-ev',
name: 'MakingCulture e.V.',
keywords: ['forschungsplattform', 'experimentierplattform', 'demokratische innovation', 'zivilgesellschaftliches engagement', 'rekonstruktion elektroauto', 'automotive', 'kulturelles engagement', 'elektrowagen', 'coburger elektroauto', 'andreas flocken', 'stadtmuseum kooperation', 'vierrädriges elektroauto', 'visionärer unternehmer', 'erfinder'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS435'
},
role: 'Mitaussteller',
profile: 'Als offene Forschungs- und Experimentierplattform steht MakingCulture® e.V. im Sinne einer demokratischen, aktiven Innovations- und Experimentierkultur interessierten Bürgern, Unternehmen und Institutionen zur Verfügung. Der Verein wurde 2016 als gemeinnütziger Verein gegründet und bietet ein vielfältiges Spektrum an Möglichkeiten für zivilgesellschaftliches kulturelles Engagement. Anhand von Fotos und zeitgenössischen Berichten rekonstruierte ein Team von Experten das Fahrzeug des visionären Coburger Unternehmers und Erfinders.',
themes: ['Automotive'],
address: 'Eichendorffweg 8, 96450 Coburg, Deutschland',
website: 'www.makingculture.de',
emails: ['franz.qante@gmail.com', 'pl@pl-innovation.com', 'sande.grub@t-online.de']
},
{
id: 'manex-ai',
name: 'Manex AI',
keywords: ['ai', 'künstliche intelligenz', 'automatisierung', 'datenanalyse', 'maschinelles lernen', 'technologie', 'innovation', 'digitalisierung', 'softwareentwicklung', 'startups', 'industrie 4.0', 'zukunftstechnologien', 'smart solutions', 'datenverarbeitung', 'intelligente systeme'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D111'
},
role: 'Hauptaussteller',
profile: 'Manex AI ist ein führendes Unternehmen im Bereich der künstlichen Intelligenz und bietet innovative Lösungen für die Automatisierung und Datenanalyse. Das Unternehmen unterstützt seine Kunden bei der Implementierung intelligenter Systeme und der Digitalisierung ihrer Geschäftsprozesse.',
themes: [],
address: 'Schleißheimer Straße 187a, 80797 München, Deutschland',
website: 'www.manex.ai',
emails: ['info@manex.ai']
},
{
id: 'mapvision',
name: 'Mapvision',
keywords: ['ai inspection', 'quality assurance', 'process efficiency', 'automotive manufacturers', 'tier 1 suppliers', 'in-line inspection', 'multi-camera technology', 'real-time data analysis', 'defect detection', 'process adjustments'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Mapvision provides AI quality inspection solutions for automotive manufacturers and Tier 1 suppliers, aiming at ensuring quality assurance and process efficiency through 100% in-line inspection. Mapvision\'s multi-camera technology provides robust and reliable inspection results at high speeds.',
themes: ['Supplier'],
address: 'Malminkartanonkuja 4, 00390 Helsinki, Finnland',
website: 'www.mapvision.fi',
emails: ['chloe.li@mapvision.fi', 'robert.blumberg@mapvision.fi']
},
{
id: 'bmw-group',
name: 'BMW GROUP',
keywords: ['automotive', 'test drives', 'family', 'mobility', 'innovation', 'vehicles', 'transportation', 'open space', 'summit', 'exhibitor', 'main exhibitor', 'cars', 'technology', 'germany', 'munich'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'E01'
},
role: 'Hauptaussteller',
profile: 'BMW GROUP is a leading automotive company known for its innovative vehicles and mobility solutions.',
themes: [],
address: '80809 München, Deutschland',
website: undefined,
emails: []
},
{
id: 'mateligent-group',
name: 'mateligent Group',
keywords: ['aktor- und sensorsysteme', 'intelligente materialien', 'klappenantrieb', 'mikroantrieb', 'formgedächtnis-antriebe', 'bistabile aktuatoren', 'drehantriebe', 'linearantriebe', 'elektrischer vakuumgreifer', 'pneumatikfreie produktion', 'wegsensor', 'vibrationssensor', 'linearsensor', 'drucksensor', 'dehnmessstreifen', 'wearables', 'battery swelling', 'automotive', 'robotik', 'industrielle anwendungen', 'decarbonization', 'supplier', 'battery tech', 'future drive technologies incl. h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C21'
},
role: 'Mitaussteller',
profile: 'Die mateligent Group bietet serienreife Lösungen für kompakte, energieeffiziente Aktor- und Sensorsysteme. Unser Fokus: Klappenantrieb, Mikroantrieb, Formgedächtnis-Antriebe, bistabile Aktuatoren für Schalter, Schütze und Ventile. Unsere Produkte sind kompakt, skalierbar und ideal für Automotive, Robotik und industrielle Anwendungen.',
themes: ['Decarbonization', 'Supplier', 'Battery Tech', 'Future Drive Technologies incl. H2'],
address: 'Eschberger Weg 46, 66121 Saarbrücken, Deutschland',
website: 'www.mateligent.de',
emails: ['jens.preetz@mateligent.de', 'yannik.goergen@mateligent.de', 'julian.neiu@mateligent.de']
},
{
id: 'maxion-wheels',
name: 'Maxion Wheels',
keywords: ['stahlräder', 'aluminiumräder', 'fahrzeughersteller', 'individuelle mobilität', 'transport', 'landwirtschaft', 'verteidigung', 'off-highway-anwendungen', 'automotive', 'micromobility', 'circular economy', 'decarbonization', 'supplier', 'radhersteller', 'technische zentren', 'räderproduktion'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Maxion Wheels, ein führender Anbieter von Stahl- und Aluminiumrädern, arbeitet mit Fahrzeugherstellern weltweit an Lösungen für individuelle Mobilität, Transport, Landwirtschaft, Verteidigung und Off-Highway-Anwendungen.',
themes: ['Automotive', 'Micromobility', 'Circular Economy', 'Decarbonization', 'Supplier'],
address: 'Ladestraße, 53639 Königswinter, Deutschland',
website: 'www.maxionwheels.com',
emails: ['contactus@maxionwheels.com', 'colleen.york@maxionwheels.com', 'adrienne.hattingen@maxionwheels.com']
},
{
id: 'maxiplas-plasticos-engenharia-lda',
name: 'Maxiplás Plásticos & Engenharia Lda',
keywords: ['spritzgussindustrie', 'kunststoffkomponenten', 'automobilteile', 'mechatronische systeme', 'dekorative oberflächen', 'innenkomponenten', 'außenkomponenten', 'türverkleidungen', 'mittelkonsolen', 'handschuhfächer', 'beleuchtungskomponenten', 'batteriegehäuse', 'wärmemanagementsysteme', 'flexible lösungen', 'effiziente lösungen', 'hochwertige lösungen', 'automotive', 'cycling', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D20'
},
role: 'Mitaussteller',
profile: 'Mit über 36 Jahren Erfahrung an der Spitze der globalen Spritzgussindustrie. MAXIPLÁS zeichnet sich dadurch aus, visionäre Ideen in hochwertige Kunststoffkomponenten umzusetzen. Wir sind auf Automobilteile, mechatronische Systeme und dekorative Oberflächen spezialisiert.',
themes: ['Automotive', 'Cycling', 'Battery Tech'],
address: 'Parque industrial Manuel da Mota, Lt 31, 3100-354 Pombal, Portugal',
website: 'www.maxiplas.pt',
emails: ['carlos.novo@maxiplas.pt', 'carla.agostinho@maxiplas.pt']
},
{
id: 'mct-yedek-parca-imalat',
name: 'Mct Yedek Parca İmalat',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D20'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Yesilkoy SB Mah, Isbi Plaza, No : 4/1 - Bakirkoy, 34149 Istanbul, Türkei',
website: undefined,
emails: []
},
{
id: 'mct-yedek-parca-imalat',
name: 'Mct Yedek Parca İmalat',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D20'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Yesilkoy SB Mah, Isbi Plaza, No : 4/1 - Bakirkoy, 34149 Istanbul, Türkei',
website: undefined,
emails: []
},
{
id: 'mcube',
name: 'MCube',
keywords: ['zukunftscluster', 'mobilitätsinnovationen', 'autonomes fahren', 'elektromobilität', 'intelligente infrastrukturen', 'urbane mobilität', 'öffentlicher raum', 'automotive', 'cycling', 'micromobility', 'public transport', 'mobility on demand', 'mobility as a service', 'intermodality', 'smart city mobility', 'smart country mobility', 'software defined vehicles', 'autonomous driving'],
location: {
type: 'Open Space',
hallOrPlace: 'Marienplatz',
booth: 'CL810'
},
role: 'Hauptaussteller',
profile: 'MCube – der Münchner Cluster für die Zukunft der Mobilität in Metropolregionen – ist ein vom Bundesministerium für Forschung, Technologie und Raumfahrt (BMFTR) geförderter Zukunftscluster. Unter der Leitung der Technischen Universität München (TUM) und in Zusammenarbeit mit über 80 Partnern entwickeln wir innovative, nachhaltige und übertragbare Lösungen für die Mobilität von morgen. Unser Ziel ist es, Mobilitätsinnovationen schneller in die Praxis zu bringen.',
themes: ['Automotive', 'Cycling', 'Micromobility', 'Public Transport', 'Mobility on demand', 'Mobility as a Service', 'Intermodality', 'Smart City Mobility', 'Smart Country Mobility', 'Software Defined Vehicles', 'Autonomous Driving'],
address: 'Freddie-Mercury-Straße 5, 80797 München, Deutschland',
website: 'www.mcube-cluster.de',
emails: ['info@mcube-cluster.com', 'johanna.wantzen@mcube-cluster.com', 'daniel.schroeder@mcube-cluster.com']
},
{
id: 'shenzhen-megmeet-electrical-co-ltd',
name: 'Shenzhen Megmeet Electrical Co., Ltd.',
keywords: ['turnkey solution', 'power solutions', 'data centers', 'networking', 'e-mobility', 'ev infrastructure', 'industrial automation', 'drives', 'healthcare', 'green energy', 'consumer electronics', 'lifestyle electronics', 'automotive'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D22'
},
role: 'Hauptaussteller',
profile: 'Shenzhen Megmeet Electrical Co., Ltd. is a leading turnkey solution provider specializing in power solutions for data centers and networking, e-mobility and EV infrastructure, industrial automation and drives, healthcare, green energy, consumer and lifestyle electronics.',
themes: ['Automotive'],
address: '5th Floor,Block B Unisplendour Information Harbor Langshan Road, 518000 Shenzhen, China',
website: 'en.megmeet.com/',
emails: ['matthew.zheng@megmeet.com', 'futianhao@megmeet.com', 'niuhubing@megmeet.com']
},
{
id: 'shenzhen-megmeet-electrical-co-ltd',
name: 'Shenzhen Megmeet Electrical Co., Ltd.',
keywords: ['turnkey solution', 'power solutions', 'data centers', 'networking', 'e-mobility', 'ev infrastructure', 'industrial automation', 'drives', 'healthcare', 'green energy', 'consumer electronics', 'lifestyle electronics', 'automotive'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D22'
},
role: 'Hauptaussteller',
profile: 'Shenzhen Megmeet Electrical Co., Ltd. is a leading turnkey solution provider specializing in power solutions for data centers and networking, e-mobility and EV infrastructure, industrial automation and drives, healthcare, green energy, consumer and lifestyle electronics.',
themes: ['Automotive'],
address: '5th Floor,Block B Unisplendour Information Harbor Langshan Road, 518000 Shenzhen, China',
website: 'en.megmeet.com/',
emails: ['matthew.zheng@megmeet.com', 'futianhao@megmeet.com', 'niuhubing@megmeet.com']
},
{
id: 'megoelectric-ua-llc',
name: 'MeGoElectric UA LLC',
keywords: ['startup', 'elektromobilität', 'innovationen', 'nachhaltigkeit', 'elektrische fahrzeuge', 'technologie', 'transportlösungen', 'umweltfreundlich', 'energieeffizienz', 'zukunftstechnologien'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D117'
},
role: 'Hauptaussteller',
profile: 'MeGoElectric UA LLC ist ein innovatives Unternehmen im Bereich der Elektromobilität. Es bietet nachhaltige und umweltfreundliche Transportlösungen. Das Unternehmen ist bekannt für seine zukunftsweisenden Technologien.',
themes: [],
address: 'Avenue of Heroes of Ukraine 45, apt. 11., 54025 Mykolaiv, Ukraine',
website: undefined,
emails: []
},
{
id: 'meleghy-automotive',
name: 'Meleghy Automotive',
keywords: ['karosseriekomponenten', 'blechteile', 'schweißbaugruppen', 'automobilindustrie', 'nachhaltigkeitsinitiativen', 'oem', 'qualität', 'innovation', 'automobilherstellung', 'fachwissen', 'automotive', 'manufacturing', 'supply chain', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Meleghy Automotive, ein weltweit führendes Unternehmen für komplexe Karosseriekomponenten, Blechteile & Schweißbaugruppen. Unser dynamischer Ansatz & Spitzentechnologien gestalten die Zukunft der Automobilindustrie. Profitieren Sie als Partner von unseren Nachhaltigkeitsinitiativen, renommierten OEM-Kunden & unserem Engagement für Qualität.',
themes: ['Automotive', 'Manufacturing & Supply Chain', 'Supplier'],
address: 'Dortmunder Str. 23, 57234 Wilnsdorf, Deutschland',
website: 'www.meleghyautomotive.de',
emails: ['info@meleghyautomotive.de', 'sales@meleghyautomotive.de', 'redaktion@meleghyautomotive.de']
},
{
id: 'mercedes-amg',
name: 'Mercedes-AMG',
keywords: ['test drives', 'probefahrten', 'open space', 'residenzhöfe', 'hauptaussteller'],
location: {
type: 'Open Space',
hallOrPlace: 'Residenzhöfe',
booth: 'RA660'
},
role: 'Hauptaussteller',
profile: 'Mercedes-AMG präsentiert sich im Open Space der IAA MOBILITY. Erleben Sie Test Drives und Probefahrten an den Residenzhöfen.',
themes: [],
address: 'Daimlerstraße 1, 71563 Affalterbach, Deutschland',
website: 'www.mercedes-amg.com',
emails: []
},
{
id: 'messe-muenchen-gmbh',
name: 'Messe München GmbH',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'C40'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Messegelände, 81823 München, Deutschland',
website: undefined,
emails: []
},
{
id: 'messe-muenchen-gmbh',
name: 'Messe München GmbH',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'C40'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Messegelände, 81823 München, Deutschland',
website: undefined,
emails: []
},
{
id: 'mevis-spa',
name: 'Mevis SPA',
keywords: ['stamping', 'bending', 'welding', 'toolshop', 'metal stamping', 'wire bending', 'pipe bending', 'system welding', 'assembling', 'automotive sector', 'manufacturing technologies', 'co-development', 'lab services', 'in-house design', 'tooling', 'automation', 'innovation', 'sustainability', 'customized solutions', 'manufacturing & supply chain', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'C40'
},
role: 'Mitaussteller',
profile: 'Born in 1961 as a spring manufacturer, Mevis is today globally recognized for metal stamping, wire and pipe bending, and system welding/assembling. The company serves the automotive sector, offering advanced manufacturing technologies.',
themes: ['Manufacturing & Supply Chain', 'Supplier'],
address: 'Via Borgo Tocchi, 28/32, 36027 Rosà VI, Italien',
website: 'www.mevis.com',
emails: ['info@mevis.com', 'edoardojacopomaria.zen@mevis.com']
},
{
id: 'mevis-spa',
name: 'Mevis SPA',
keywords: ['stamping', 'bending', 'welding', 'in-house toolshop', 'metal stamping', 'wire bending', 'pipe bending', 'system welding', 'assembling', 'automotive sector', 'manufacturing technologies', 'co-development', 'lab services', 'in-house design', 'tooling', 'automation', 'innovation', 'sustainability', 'customized solutions', 'manufacturing & supply chain', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'C40'
},
role: 'Mitaussteller',
profile: 'Born in 1961 as a spring manufacturer, Mevis is today globally recognized for metal stamping, wire and pipe bending, and system welding/assembling. The company serves the automotive sector, offering advanced manufacturing technologies. Mevis is committed to innovation, sustainability, and customized solutions for customers worldwide.',
themes: ['Manufacturing & Supply Chain', 'Supplier'],
address: 'Via Borgo Tocchi, 28/32, 36027 Rosà VI, Italien',
website: 'www.mevis.com',
emails: ['info@mevis.com', 'edoardojacopomaria.zen@mevis.com']
},
{
id: 'miba-group',
name: 'Miba Group',
keywords: ['funktionsrelevante komponenten', 'konventionelle antriebe', 'emobility-anwendungen', 'sinterformteile', 'gleitlager', 'reibbeläge', 'leistungselektronikkomponenten', 'beschichtungen', 'eantriebe', 'batteriesysteme', 'leistungssicherungssysteme', 'hochvoltbatterien', 'widerstände', 'nvh optimierende sinterformteile', 'elektrofahrzeuge', 'hybridfahrzeuge'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'A11'
},
role: 'Hauptaussteller',
profile: 'Die Miba Gruppe entwickelt und produziert weltweit funktionsrelevante Komponenten mit höchsten Anforderungen an Leistung, Qualität und Kosten. Die Miba bietet bewährte Lösungen für konventionelle Antriebe und kundenspezifisch entwickelte Lösungen für eMobility-Anwendungen. Miba Sinterformteile, Gleitlager, Reibbeläge, Leistungselektronikkomponenten, Beschichtungen und Lösungen für eAntriebe machen Fahrzeuge effizienter, zuverlässiger und umweltfreundlicher.',
themes: ['Automotive'],
address: 'Dr.-Mitterbauer-Str. 3, 4663 Laakirchen, Österreich',
website: 'www.miba.com',
emails: ['info@miba.com']
},
{
id: 'micro-mobility-systems-ag',
name: 'Micro Mobility Systems AG',
keywords: ['micro mobility', 'scooter', 'urban transport', 'personal transport', 'electric vehicles', 'sustainable mobility', 'urban mobility solutions', 'last mile transport', 'innovative transport solutions', 'mobility systems'],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP110'
},
role: 'Mitaussteller',
profile: 'Micro Mobility Systems AG specializes in innovative urban transport solutions, focusing on personal and sustainable mobility. They offer a range of products designed for efficient last mile transport.',
themes: [],
address: 'Bahnhofstr. 10, 8700 Küsnacht, Schweiz',
website: 'www.chilli-proscooter.com',
emails: []
},
{
id: 'microsoft-deutschland-gmbh',
name: 'Microsoft Deutschland GmbH',
keywords: ['software', 'cloud-dienste', 'ki', 'microsoft 365', 'azure', 'windows', 'github', 'linkedin', 'xbox', 'automotive', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'cybersecurity'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'C20'
},
role: 'Hauptaussteller',
profile: 'Microsoft, gegründet 1975 mit Hauptsitz in Redmond, Washington, ist ein globales Technologieunternehmen, das Menschen und Organisationen durch Software, Cloud-Dienste und KI befähigt, mehr zu erreichen. Zu den Produkten gehören Microsoft 365, Azure, Windows, GitHub, LinkedIn und Xbox und erreichen Kunden in über 190 Ländern.',
themes: ['Automotive', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Cybersecurity'],
address: 'Walter-Gropius-Str. 5, 80807 München, Deutschland',
website: 'www.microsoft.de',
emails: ['robert.lokner@microsoft.com', 'joachimfranz@microsoft.com', 'rupert.stuetzle@microsoft.com']
},
{
id: 'microvision-gmbh',
name: 'MicroVision GmbH',
keywords: ['perception-lösungen', 'autonomes fahren', 'mobilität', 'lidar-komplettanbieter', 'solid-state sensoren', 'automobilindustrie', 'hardware-know-how', 'software-know-how', 'level 2 adas', 'vollständig autonomes fahren', 'road safety', 'supplier', 'autonomous driving'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D22'
},
role: 'Hauptaussteller',
profile: 'Als Technologiepionier und Lidar-Komplettanbieter liefert MicroVision moderne Perception-Lösungen im Bereich Autonomes Fahren und Mobilität. Mit über 30 Jahren innovativer Designexpertise und tiefgreifender Entwicklungserfahrung definiert MicroVision Lidar für die Automobilindustrie neu, indem es Solid-State Sensoren kleiner, energieeffizienter und deutlich kostengünstiger macht. Durch die Kombination von Hardware- und Software-Know-how bietet MicroVision vielseitige Lösungen von Level 2 ADAS bis hin zum vollständig autonomen Fahren (AD).',
themes: ['Automotive', 'Road Safety', 'Supplier', 'Autonomous Driving'],
address: 'Amsinckstraße 71, 20097 Hamburg, Deutschland',
website: 'www.microvision.com',
emails: ['info_hh@microvision.com', 'jannik_schottler@microvision.com']
},
{
id: 'mindtronic-ai-co-ltd',
name: 'Mindtronic AI Co., Ltd.',
keywords: ['ai', 'künstliche intelligenz', 'automotive', 'fahrassistenzsysteme', 'maschinelles lernen', 'computer vision', 'fahrerüberwachung', 'autonomes fahren', 'softwarelösungen', 'sensorfusion', 'startups', 'technologie', 'innovation', 'digitale lösungen', 'intelligente systeme'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D133'
},
role: 'Hauptaussteller',
profile: 'Mindtronic AI Co., Ltd. ist ein führendes Unternehmen im Bereich der künstlichen Intelligenz für die Automobilindustrie. Das Unternehmen bietet innovative Lösungen für Fahrerassistenzsysteme und autonomes Fahren. Mit modernster Technologie und Expertise in maschinellem Lernen und Computer Vision entwickelt Mindtronic AI intelligente Systeme für die Mobilität der Zukunft.',
themes: [],
address: '7F., No. 218, Sec. 6, Roosevelt Rd., Wenshan Dist., Taipei 11674, Taiwan (Chinesisch-Taipeh)',
website: 'www.mindtronicai.com',
emails: []
},
{
id: 'projekt-minga',
name: 'Projekt MINGA',
keywords: ['automatisierung', 'digitale vernetzung', 'öpnv', 'on-demand-shuttles', 'solobus', 'bus-platooning', 'öffentlicher personennahverkehr', 'automatisierte busse', 'on-demand-fahrzeuge', 'mobilitätswende', 'autonomes fahren', 'vernetztes fahren', 'smart city mobility', 'road safety', 'public transport', 'mobility on demand'],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP110'
},
role: 'Mitaussteller',
profile: 'MINGA - Münchens automatisierter Nahverkehr mit On-Demand-Shuttles, Solobus und Bus-Platooning. Für einen zukunftsfähigen öffentlichen Personennahverkehr (ÖPNV) erforschen wir seit 2023 im Projekt MINGA den Einsatz automatisierter Busse und On-Demand-Fahrzeuge im Verkehrsnetz in München. Zusammen mit 16 Partner*innen aus Verwaltung, Forschung und Wirtschaft wollen wir die damit verbundenen technischen, rechtlichen, finanziellen und organisatorischen Herausforderungen dieser wichtigen Zukunftsthemen des ÖPNV meistern und damit einen wesentlichen Beitrag zur Mobilitätswende leisten.',
themes: ['Public Transport', 'Mobility on demand', 'Smart City Mobility', 'Road Safety', 'Autonomous Driving'],
address: 'Blumenstraße 28b, 80331 München, Deutschland',
website: 'muenchenunterwegs.de/minga',
emails: ['projekt-minga@muenchen.de']
},
{
id: 'mini',
name: 'MINI',
keywords: ['probefahrten', 'test drives', 'automobil', 'fahrzeuge', 'open space', 'hauptaussteller'],
location: {
type: 'Open Space',
hallOrPlace: 'Max-Joseph-Platz',
booth: 'MJ930'
},
role: 'Hauptaussteller',
profile: 'MINI präsentiert sich als Hauptaussteller im Open Space am Max-Joseph-Platz. Probefahrten sind am Stand MJ930 möglich.',
themes: [],
address: 'Petuelring 130, 80809 München, Deutschland',
website: 'www.mini.com',
emails: []
},
{
id: 'minieye-technology-co-ltd',
name: 'MINIEYE Technology Co., Ltd',
keywords: ['intelligentes fahren', 'smarte cockpits', 'automatisierung', 'sicherheit', 'fahrerlebnis', 'l1-l4-lösungen', 'kooperative systeme', 'fahrzeug-infrastruktur', 'automobil-oems', 'serienproduktion', 'fahrzeugmodelle', 'export', 'forschung und entwicklung', 'kommerzialisierung', 'mobilität'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E44'
},
role: 'Hauptaussteller',
profile: 'MINIEYE Technology Co., Ltd, 2014 gegründet, ist ein führender Anbieter von Lösungen für intelligentes Fahren und intelligente Cockpits in China. Mit herausragenden F&E-Kompetenzen und starken Kommerzialisierungsfähigkeiten treibt MINIEYE die Automatisierung des Automobils voran, erhöht die Sicherheit und verbessert das Fahrerlebnis, um der zukünftigen Mobilität noch mehr Werte zu schaffen.',
themes: [],
address: '25th Floor, Tower A, Zhongzhou Binhai Commercial Center, 518000 Shen Zhen, China',
website: 'www.minieye.cc',
emails: ['iaa@minieye.cc']
},
{
id: 'mitac-digital-technology-corporation',
name: 'Mitac Digital Technology Corporation',
keywords: ['automotive electronics', 'aiot', 'pioneering force', 'automotive industry', 'electronics', 'technology', 'innovation', 'digital solutions', 'smart technology', 'connected devices'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E22'
},
role: 'Mitaussteller',
profile: 'As a pioneering force in the automotive electronics and AIoT industries.',
themes: [],
address: 'No. 200, Wenhua 2nd Rd., Guishan Dist., Taoyuan City 33383, Taiwan (Chinesisch-Taipeh)',
website: 'www.mitacmdt.com/en',
emails: ['business@mitacmdt.com', 'jolin.yen@mitacmdt.com']
},
{
id: 'mit-mobility-initiative',
name: 'MIT Mobility Initiative',
keywords: [],
location: {
type: 'Open Space',
hallOrPlace: "",
booth: ""
},
role: 'Partner',
profile: '',
themes: [],
address: '77 Massachusetts Avenue, Cambridge 02139, USA',
website: undefined,
emails: []
},
{
id: 'mit-mobility-initiative',
name: 'MIT Mobility Initiative',
keywords: [],
location: {
type: "",
 hallOrPlace: "",
booth: ""
},
role: 'Partner',
profile: '',
themes: [],
address: '77 Massachusetts Avenue, Cambridge 02139, USA',
website: undefined,
emails: []
},
{
id: 'mobileye-vision-technologies-ltd',
name: 'Mobileye Vision Technologies Ltd.',
keywords: ['adas', 'telematics', 'driver-assist technology', 'autonomous technology', 'computer vision', 'ai', 'robotaxis', 'automotive', 'mobility', 'road safety', 'software defined vehicles', 'autonomous driving', 'mobility on demand'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'B30'
},
role: 'Hauptaussteller',
profile: 'Mobileye delivers safer, scalable driver-assist & autonomous technology globally. Mobileye’s vision is to help save lives and make mobility more accessible, sustainable, and scalable worldwide. With more than 25 years of designing and delivering advanced solutions powered by computer vision and AI, we bring life-changing benefits of autonomous technology globally.',
themes: ['Mobility on demand', 'Road Safety', 'Software Defined Vehicles', 'Autonomous Driving'],
address: 'Shlomo Momo Halevi 1, 9777015 Jerusalem, Israel',
website: 'www.mobileye.com',
emails: []
},
{
id: 'mobility2grid-ev',
name: 'Mobility2Grid e.V.',
keywords: ['intelligente energie- und mobilitätslösungen', 'klimaneutrale stadt', 'vernetzte mobilitätskonzepte', 'smarte ladeinfrastruktur', 'klimaneutrale quartiere', 'forschungscampus', 'energie- und mobilitätswende', 'wissenschaft', 'wirtschaft', 'gesellschaft', 'verwaltung', 'nachhaltig', 'flexibel', 'lebenswert', 'micromobility', 'public transport', 'intermodality', 'smart city mobility', 'charging and refueling infrastructure incl. energy grid', 'decarbonization', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C30'
},
role: 'Mitaussteller',
profile: 'Mobility2Grid ist ein zukunftsweisender Forschungscampus, der vom BMFTR gefördert wird und intelligente Lösungen für die Energie- und Mobilitätswende entwickelt. Im Fokus stehen vernetzte Mobilitätskonzepte, smarte Ladeinfrastruktur und klimaneutrale Quartiere. Mobility2Grid erforscht mit Partnern aus Wissenschaft, Wirtschaft, Gesellschaft und Verwaltung gemeinsam praxisnahe Innovationen.',
themes: ['Micromobility', 'Public Transport', 'Intermodality', 'Smart City Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Decarbonization', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data'],
address: 'EUREF-Campus 9, 10829 Berlin, 10829 Berlin, Deutschland',
website: 'www.mobility2grid.de',
emails: ['nina.weber@mobility2grid.de']
},
{
id: 'moia-gmbh',
name: 'MOIA GmbH',
keywords: ['mobilitätsdienstleistungen', 'ride-sharing', 'volkswagen', 'urban mobility', 'nachhaltige mobilität', 'elektrofahrzeuge', 'transportlösungen', 'carsharing', 'verkehrsmanagement', 'intelligente transportlösungen'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'D10'
},
role: 'Mitaussteller',
profile: 'MOIA GmbH ist ein Mobilitätsdienstleister und Mitaussteller auf der IAA MOBILITY 2025. Das Unternehmen bietet innovative Lösungen im Bereich urbaner Mobilität und nachhaltiger Transportlösungen.',
themes: [],
address: 'Alexanderufer 5, 10117 Berlin, Deutschland',
website: 'www.moia.io',
emails: []
},
{
id: 'moia-gmbh',
name: 'MOIA GmbH',
keywords: ['mobilitätsdienstleistungen', 'ride-sharing', 'volkswagen', 'urban mobility', 'nachhaltige mobilität', 'elektrofahrzeuge', 'carsharing', 'verkehrslösungen', 'intelligente transportlösungen', 'fahrzeugflotte', 'kundenorientierte dienste', 'technologieintegration', 'verkehrssicherheit', 'umweltfreundliche lösungen'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'D10'
},
role: 'Mitaussteller',
profile: 'MOIA GmbH ist ein Mobilitätsdienstleister, der innovative Lösungen für den urbanen Verkehr bietet. Als Teil der Volkswagen Group fokussiert sich MOIA auf nachhaltige und kundenorientierte Mobilitätskonzepte.',
themes: [],
address: 'Alexanderufer 5, 10117 Berlin, Deutschland',
website: 'www.moia.io',
emails: []
},
{
id: 'momenta-europe-gmbh',
name: 'Momenta Europe GmbH',
keywords: ['assisted driving', 'autonomous driving', 'ai technology', 'robotaxis', 'safe driving services', 'future travel experience', 'adas', 'telematics'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'B02'
},
role: 'Hauptaussteller',
profile: 'As a world-leading assisted driving company, Momenta is committed to realizing the mass production of assisted driving and scalable autonomous driving robotaxis through AI technology, allowing more people to enjoy safe and secure driving services and comprehensively improve the future travel experience.',
themes: ['Autonomous Driving'],
address: 'Charles-Lindbergh-Straße 7, 71034 Böblingen, Deutschland',
website: 'www.momenta.ai',
emails: ['media@momenta.ai', 'maximilian.figel@momenta.ai', 'leyla.brunner@momenta.ai']
},
{
id: 'moplat',
name: 'MOPLAT',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '133, Jeonpo-daero, Nam-gu, Busan 48400, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'motorworld-group',
name: 'MOTORWORLD Group',
keywords: ['erlebniswelten', 'marktplätze', 'exklusive mobilität', 'fahrkultur', 'lifestyle', 'events', 'fahrzeughandel', 'luxusautomobile', 'supercars', 'hypercars', 'sportwagen', 'oldtimer', 'youngtimer', 'bikes', 'automobile dienstleister', 'spezialisierte werkstätten', 'lifestyle-shops', 'merchandise-shops', 'restaurants', 'feinkostläden', 'entertainment', 'themenhotels', 'designhotels', 'eventlocations'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B22'
},
role: 'Hauptaussteller',
profile: 'Motorworld Locations sind Erlebniswelten & Marktplätze für exklusive Mobilität. Die Motorworld-Standorte sind automobile Erlebniswelten für Fahrkultur, Lifestyle und Events. Die Motorworld gilt in ihrer Gesamtheit als weltweit größtes markenunabhängiges Mobilitätszentrum.',
themes: [],
address: 'Ferdinand-Dünkel-Straße 5, 88433 Schemmerhofen, Deutschland',
website: 'www.motorworld.de',
emails: ['info@motorworld.de']
},
{
id: 'mst-groep-bv',
name: 'MST Groep B.V.',
keywords: ['ingenieurunternehmen', 'beratungsunternehmen', 'mobilitätslösungen', 'nutzfahrzeuge', 'mobile arbeitsmaschinen', 'autonome mobilität', 'sichere mobilität', 'nachhaltige mobilität', 'technische herausforderungen', 'regulatorische herausforderungen', 'organisatorische herausforderungen', 'innovatoren', 'oem', 'reifeentwicklung', 'markt', 'technologie', 'geschäft', 'fertigbarkeit', 'turnkey-lösungen', 'praktisches fachwissen', 'strategische einblicke', 'produktentwicklung', 'konstruktion', 'fertigung', 'einzelstücke', 'kleinserien', 'automotive', 'public transport', 'manufacturing & supply chain', 'autonomous driving'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: 'MST Groep ist ein Ingenieur- und Beratungsunternehmen mit Sitz in den Niederlanden und Rumänien. Wir konzentrieren uns auf die Mobilitätslösungen von heute und morgen in unseren Kernmärkten: Nutzfahrzeuge und mobile Arbeitsmaschinen. Unsere Rolle besteht darin, die Reifeentwicklung in den Bereichen Markt, Technologie, Geschäft und Fertigbarkeit ausgewogen zu beschleunigen.',
themes: ['Automotive', 'Public Transport', 'Manufacturing & Supply Chain', 'Autonomous Driving'],
address: 'Rapenburgweg 12, 4365 ND Meliskerke, Niederlande',
website: 'www.mstgroep.nl',
emails: ['info@mstgroep.nl', 'devin.matthijsse@mstgroep.nl', 'richard.matthijsse@mstgroep.nl']
},
{
id: 'murata-electronics',
name: 'Murata Electronics',
keywords: ['electronics components', 'modules', 'solutions', 'advanced passives', 'batteries', 'wireless connectivity', 'sensors', 'mems', 'dc-dc converters', 'ac-dc power supplies', 'bluetooth modules', 'wifi modules', 'lpwan modules', 'psemi semiconductors', 'ceramic capacitors', 'polymer capacitors', 'silicon capacitors', 'resistors', 'thermistors', 'inductors', 'timing devices', 'buzzers', 'emi filters', 'rfid solutions', 'automotive', 'smart city mobility', 'smart country mobility', 'charging and refueling infrastructure', 'energy grid', 'supplier', 'autonomous driving', 'connectivity', 'iot', 'big data', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'A20'
},
role: 'Hauptaussteller',
profile: 'Murata’s technologies, electronics components, modules and solutions are used everywhere, contributing to a safer, healthier and more efficiently connected world. As a leading innovator in electronics we challenge ourselves every day to develop solutions that create a smarter future for everyone. We develop, manufacture and supply world-class products that cover every key technology in electronics.',
themes: ['Automotive', 'Smart City Mobility', 'Smart Country Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Supplier', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'Future Drive Technologies incl. H2'],
address: 'Wegalaan 2, 2132 JC Hoofddorp, Niederlande',
website: 'www.murata.com',
emails: []
},
{
id: 'nationale-leitstelle-ladeinfrastruktur-now-gmbh',
name: 'Nationale Leitstelle Ladeinfrastruktur - NOW GmbH',
keywords: ['ladeinfrastruktur', 'bmw', 'ladesäulen', 'daten erfassung', 'akteure vernetzen', 'wissen weitergeben', 'nutzer im blick', 'charging and refueling infrastructure', 'energy grid', 'planung', 'umsetzung', 'förderung'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'A30'
},
role: 'Hauptaussteller',
profile: 'Im Auftrag des BMV koordiniert und steuert die Nationale Leitstelle Ladeinfrastruktur unter dem Dach der bundeseigenen NOW GmbH die Aktivitäten zum Ausbau der Ladeinfrastruktur in Deutschland. Wir unterstützen beim Planen, Umsetzen und Fördern der Ladeinfrastruktur. Um den Bedarf an Ladesäulen besser zu verstehen, erfassen wir relevante Daten.',
themes: ['Charging and Refueling Infrastructure incl. Energy Grid'],
address: 'Fasanenstr. 5, 10623 Berlin, Deutschland',
website: 'www.nationale-leitstelle.de',
emails: ['kontakt@now-gmbh.de']
},
{
id: 'nc-co-ltd',
name: 'NC & Co., Ltd',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'C21'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: '5F, Uspace A 1, 660, Daewangpangyo-ro Bundang-gu, Seongnam-si 13494, Südkorea (KR)',
website: 'www.vueroid.com',
emails: []
},
{
id: 'nedschroef',
name: 'Nedschroef',
keywords: ['verbindungselemente', 'sonderteile', 'automobilindustrie', 'kaltumformung', 'maschinen', 'werkzeuge', 'hochleistungskomponenten', 'komplettlösungen', 'ingenieurdienstleistungen', 'luftfahrtindustrie', 'supplier', 'circular economy', 'manufacturing & supply chain', 'semiconductors & chips', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Nedschroef ist einer der weltweit größten Lieferanten von Verbindungselementen und anderen hochentwickelten kaltgeformten technischen Komponenten für die Automobil- und Luftfahrtindustrie. Zusammen mit CP-Tech verfügen wir über eine nachgewiesene globale Erfolgsbilanz in der Konstruktion, Entwicklung und Herstellung von Hochleistungskomponenten und Komplettlösungen einschließlich Ingenieurdienstleistungen für die Automobilindustrie.',
themes: ['Automotive', 'Circular Economy', 'Manufacturing & Supply Chain', 'Supplier', 'Semiconductors & Chips', 'Battery Tech'],
address: 'Kanaaldijk N.W. 75, 5707 LC Helmond, Niederlande',
website: 'www.nedschroef.com',
emails: ['timo.harrer@nedschroef.com']
},
{
id: 'neomind-designstudio',
name: 'neomind designstudio',
keywords: ['designstudio', 'future mobility design', 'schienenverkehr', 'öffentlicher raum', 'nutzerzentriert', 'nachhaltig', 'technologisch präzise', 'ideenzug', 's-bahnen', 'hochgeschwindigkeitsprojekt', 'mobilitätslösungen', 'hersteller', 'verkehrsunternehmen', 'aufgabenträger', 'cycling', 'micromobility', 'public transport', 'intermodality', 'smart city mobility', 'smart country mobility', 'circular economy'],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP110'
},
role: 'Mitaussteller',
profile: 'neomind ist ein vielfach ausgezeichnetes Designstudio mit Standorten in München, Frankfurt und San Francisco. Seit 2010 gestalten wir die Mobilität von morgen – mit besonderem Fokus auf den Schienenverkehr. Zur IAA 2025 zeigen wir, wie öffentlicher Raum neu gedacht werden kann: nutzerzentriert, nachhaltig und technologisch präzise.',
themes: ['Cycling', 'Micromobility', 'Public Transport', 'Intermodality', 'Smart City Mobility', 'Smart Country Mobility', 'Circular Economy'],
address: 'Kapuzinerstraße 9, 80337 München, Deutschland',
website: 'www.neomind.eu',
emails: ['info@neomind.eu']
},
{
id: 'neomind-designstudio',
name: 'neomind designstudio',
keywords: ['designstudio', 'future mobility design', 'schienenverkehr', 'öffentlicher raum', 'nutzerzentriert', 'nachhaltig', 'technologisch präzise', 'ideenzug', 's-bahnen', 'hochgeschwindigkeitsprojekt', 'mobilitätslösungen', 'hersteller', 'verkehrsunternehmen', 'aufgabenträger', 'cycling', 'micromobility', 'public transport', 'intermodality', 'smart city mobility', 'smart country mobility', 'circular economy'],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP110'
},
role: 'Mitaussteller',
profile: 'neomind ist ein vielfach ausgezeichnetes Designstudio mit Standorten in München, Frankfurt und San Francisco. Seit 2010 gestalten wir die Mobilität von morgen – mit besonderem Fokus auf den Schienenverkehr. Zur IAA 2025 zeigen wir, wie öffentlicher Raum neu gedacht werden kann: nutzerzentriert, nachhaltig und technologisch präzise.',
themes: ['Cycling', 'Micromobility', 'Public Transport', 'Intermodality', 'Smart City Mobility', 'Smart Country Mobility', 'Circular Economy'],
address: 'Kapuzinerstraße 9, 80337 München, Deutschland',
website: 'www.neomind.eu',
emails: ['info@neomind.eu']
},
{
id: 'neuman-aluminium-fliesspresswerk-gmbh',
name: 'Neuman Aluminium Fließpresswerk GmbH',
keywords: ['aluminium', 'fliesspresswerk', 'metallverarbeitung', 'automotive', 'leichtbau', 'komponenten', 'zulieferer', 'industrie', 'produktion', 'technologie', 'innovation', 'nachhaltigkeit', 'oem', 'tier-1', 'supplier', 'transportation', 'mobilität', 'engineering', 'materialien', 'fertigung'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E10'
},
role: 'Mitaussteller',
profile: 'Neuman Aluminium Fließpresswerk GmbH ist ein führender Anbieter von Aluminiumlösungen und spezialisiert auf die Herstellung von hochwertigen Komponenten für die Automobilindustrie. Das Unternehmen bietet innovative und nachhaltige Lösungen für verschiedene Industrien.',
themes: [],
address: 'Werkstrasse 1, 3182 Marktl, Österreich',
website: 'www.neuman.at',
emails: []
},
{
id: 'neusoft-corporation',
name: 'Neusoft Corporation',
keywords: ['information technology', 'intelligent vehicle connectivity', 'healthcare', 'smart city', 'enterprise digital transformation', 'digital services', 'global software business', 'automotive software', 'sdv', 'software defined vehicles', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'entertainment', 'vr', 'supplier', 'oem'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'A11'
},
role: 'Hauptaussteller',
profile: 'Neusoft is an industry leading information technology, products and solutions company for the global market. Founded in 1991, Neusoft is the first listed software company in China. Our business focuses on the fields of intelligent vehicle connectivity, healthcare, smart city, enterprise digital transformation, digital services, as well as global software business.',
themes: ['Supplier', 'Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Entertainment & VR'],
address: 'Neusoft Park, No. 2 Xinxiu Street, 110179 Shenyang, China',
website: 'www.neusoft.com',
emails: ['bd@neusoft.com', 'tangyi@neusoft.com', 'hanshu@de.neusoft.com']
},
{
id: 'nexperia-germany-gmbh',
name: 'Nexperia Germany GmbH',
keywords: ['halbleiter', 'automobilelektronik', 'automotive', 'industrieanwendungen', 'mobile geräte', 'consumer-elektronik', 'charging and refueling infrastructure', 'energy grid', 'supplier', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'semiconductors', 'chips', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'C40'
},
role: 'Mitaussteller',
profile: 'Nexperia ist ein weltweit tätiges Halbleiterunternehmen mit einer starken europäischen Tradition. Es ermöglicht mit seinen Komponenten die grundlegende Funktionalität nahezu jeder elektronischen Anwendung weltweit.',
themes: ['Charging and Refueling Infrastructure incl. Energy Grid', 'Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'Semiconductors & Chips', 'Battery Tech'],
address: 'Putzbrunner Strasse 71, 81739 München, Deutschland',
website: 'www.nexperia.com/',
emails: ['info@nexperia.com']
},
{
id: 'nidec-amec',
name: 'Nidec AMEC',
keywords: ['driving future mobility', 'automotive', 'technologically ahead', 'globally strong', 'locally present'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B10'
},
role: 'Hauptaussteller',
profile: 'Driving Future Mobility–Technologically Ahead. Globally Strong. Locally Present',
themes: ['Automotive'],
address: 'Schwarzbacher Str. 28, 98673 Auengrund OT Merbelsrod, Deutschland',
website: 'www.nidec-gpm.com',
emails: ['daniela.taemmler@nidec-gpm.com']
},
{
id: 'nira-dynamics',
name: 'NIRA Dynamics',
keywords: ['connected vehicle data', 'ev range', 'safety', 'sustainability', 'road surface alerts', 'road surface conditions', 'fleet sensors', 'satellite data', 'radar data', 'weather models', 'hazard warnings', 'grip forecasts', 'adaptive vehicle controls', 'oem', 'tier 1 suppliers', 'adas performance', 'ev efficiency', 'driver safety', 'mobility as a service', 'smart city mobility', 'road safety', 'decarbonization', 'software defined vehicles', 'autonomous driving'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E20'
},
role: 'Mitaussteller',
profile: 'NIRA Dynamics transforms every journey into predictive intelligence. Our connected Road Surface Alerts (RSA) and Road Surface Conditions (RSC) platforms fuse fleet sensors, satellite & radar data and advanced weather models to deliver live hazard warnings, grip forecasts and adaptive vehicle controls. OEMs and Tier 1 suppliers tap into our flexible APIs and map integrations to enhance ADAS performance, optimize EV efficiency and elevate driver safety.',
themes: ['Mobility as a Service', 'Smart City Mobility', 'Road Safety', 'Decarbonization', 'Supplier', 'Software Defined Vehicles', 'Autonomous Driving'],
address: 'Wallenbergs Gata 4 Wallenbergs gata, 583 30 Linköping, Schweden',
website: 'www.niradynamics.com',
emails: ['johan.hagg@niradynamics.se', 'andreas.andersson@niradynamics.se']
},
{
id: 'nisar-autonomy-gmbh',
name: 'NISAR Autonomy GmbH',
keywords: ['automatisierung', 'ki', 'multi-agenten-ki', 'human-in-the-loop', 'datenanalyse', 'qualitätssicherung', 'anforderungsmanagement', 'testfallgenerierung', 'fahrzeug-bus', 'sensor-signal-matrix', 'remote debugging', 'virtuelle integration', 'automobilindustrie', 'produktion', 'software defined vehicles', 'connectivity', 'iot', 'big data', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B11'
},
role: 'Mitaussteller',
profile: 'NISAR automatisiert komplexe industrielle Prozesse und Aufgaben mit Multi-Agenten-KI und Human-in-the-loop-Ansatz: Reduktion von manuellem Aufwand & Kosten; Experten werden frei für die kritischen Aufgaben. Datenanalyse mit best-fit-Ansatz: verschiedene KI-Methoden werden kombiniert für beste Ergebnisse; Moderator-Agenten ermöglichen Interaktion und Strategie in natürlicher Sprache.',
themes: ['Automotive', 'Road Safety', 'Regulation, Liability & ESGs', 'Manufacturing & Supply Chain', 'Supplier', 'Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'AI & GenAI'],
address: 'Lichtenbergstraße 8, 85748 Garching b. München, Deutschland',
website: 'www.nisar.ai',
emails: ['m.goeller@nisar.ai', 'k.zhu@nisar.ai']
},
{
id: 'nissha',
name: 'Nissha',
keywords: ['industriematerialien', 'geräte', 'medizintechnik', 'druck', 'beschichtung', 'laminierung', 'formgebung', 'strukturierung', 'metallverarbeitung', 'cmf-design', 'oberflächendesigns', 'oem', 'tier-lieferanten', 'automotive', 'road safety', 'circular economy', 'manufacturing & supply chain', 'supplier', 'autonomous driving', 'entertainment & vr'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D27'
},
role: 'Mitaussteller',
profile: 'Nissha bietet Design und Funktionalitäten im Mobilitätsbereich, indem es Oberflächendesigns integriert. Das Unternehmen liefert weltweit an OEMs und Tier-Lieferanten.',
themes: ['Automotive', 'Road Safety', 'Circular Economy', 'Manufacturing & Supply Chain', 'Supplier', 'Autonomous Driving', 'Entertainment & VR'],
address: 'Lauchaer Höhe 13, 99880 Waltershausen, Deutschland',
website: 'www.nissha.com',
emails: ['zentrale@nissha.com', 'n-amirzadeh@nissha.com', 's-naimen@nissha.com', 'j.reinhardt@nissha.com']
},
{
id: 'nixxen-van',
name: 'NIXXEN Van',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C315'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Grasweg 8, 1031 HW Amsterdam, Niederlande',
website: 'www.nixxen.eu',
emails: []
},
{
id: 'nl-pavilion',
name: 'NL Pavilion',
keywords: ['automobilzulieferer', 'niederlande', 'automobilproduktion', 'mobilitätslösungen', 'innovation', 'humankapital', 'automotive', 'public transport', 'mobility as a service', 'smart city mobility', 'smart country mobility', 'charging and refueling infrastructure', 'road safety', 'circular economy', 'decarbonization', 'manufacturing & supply chain', 'international trade and markets', 'supplier', 'software defined vehicles', 'autonomous driving', 'semiconductors & chips', 'battery tech', 'cybersecurity', 'future drive technologies'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C20'
},
role: 'Hauptaussteller',
profile: 'RAI Automotive Industry NL ist die führende Instanz der niederländischen Automobilzuliefer- und -produktionsbranche. Der Schwerpunkt liegt auf globalen Automobil- und Mobilitätslösungen – durch die Bündelung von Kräften mit Branchenmitgliedern und Stakeholdern fungiert RAI als Katalysator in den Bereichen Innovation und Humankapital. RAI Automotive Industry ist Teil der RAI Vereniging und gemeinsam vertreten sie die Interessen der niederländischen Automobilindustrie auf nationaler und internationaler Ebene.',
themes: ['Automotive', 'Public Transport', 'Mobility as a Service', 'Smart City Mobility', 'Smart Country Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Road Safety', 'Circular Economy', 'Decarbonization', 'Manufacturing & Supply Chain', 'International Trade and Markets', 'Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'Semiconductors & Chips', 'Battery Tech', 'Cybersecurity', 'Future Drive Technologies incl. H2'],
address: 'Automotive Campus 30, 5708 JZ Helmond, Niederlande',
website: 'www.rai-automotiveindustry.nl',
emails: ['j.heijster@raivereniging.nl', 'b.hendrix@raivereniging.nl']
},
{
id: 'nxp-semiconductors-germany-gmbh',
name: 'NXP Semiconductors Germany GmbH',
keywords: ['audio dsp', 'ki', 'ml', 'immersive audio', 'automotive', 'industrie', 'iot', 'mobilfunk', 'kommunikationsinfrastruktur', 'systemlösungen', 'vernetzte welt', 'sicherheit', 'zuverlässigkeit', 'spitzentechnologie', 'pioniergeist'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'A21'
},
role: 'Mitaussteller',
profile: 'NXP Semiconductors N.V. ist der verlässliche Partner für innovative Lösungen in den Bereichen Automotive, Industrie & IoT, Mobilfunk und Kommunikationsinfrastruktur. Der „Brighter Together“-Ansatz von NXP bringt Spitzentechnologie mit Menschen voller Pioniergeist zusammen, um Systemlösungen zu entwickeln, welche die vernetzte Welt besser, sicherer und zuverlässiger machen.',
themes: ['Automotive'],
address: 'Beiersdorfstraße 12, 22529 Hamburg, Deutschland',
website: 'www.nxp.com',
emails: []
},
{
id: 'oberland-mangold-gmbh',
name: 'Oberland Mangold GmbH',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B11'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'In der Enz 1, 82438 Eschenlohe, Deutschland',
website: 'www.oberland-mangold.de',
emails: ['info@oberland-mangold.de']
},
{
id: 'oberland-mangold-gmbh',
name: 'Oberland Mangold GmbH',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B11'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'In der Enz 1, 82438 Eschenlohe, Deutschland',
website: 'www.oberland-mangold.de',
emails: ['info@oberland-mangold.de']
},
{
id: 'o-j-automotive-netherlands-b-v',
name: 'O&J Automotive Netherlands B.V.',
keywords: ['ev suvs', 'phev suvs', 'urban-stil', 'offroad-power', 'chery group', 'smarte technologien', 'intelligente antriebe', 'nachhaltige mobilität', 'automotive', 'smart city mobility', 'future drive technologies', 'h2'],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP130'
},
role: 'Hauptaussteller',
profile: 'OMODA und JAECOO sind zwei innovative Marken der Chery Group. OMODA steht für urbanen Lifestyle und smarte Technologien, JAECOO für modernen Offroad und intelligente Antriebe. In Deutschland setzen sie auf lokale Präsenz und höchste Qualität – für eine nachhaltige Mobilität „In Germany, for Germany“.',
themes: ['Automotive', 'Smart City Mobility', 'Future Drive Technologies incl. H2'],
address: 'Herikerbergweg 33, 1101 CN Amsterdam, Niederlande',
website: 'www.omodajaecoo.com',
emails: ['omoda@otbtcomms.com', 'zhaozhan@mychery.com', 'jinbinyu@mychery.com', 'franzi@otbtcomms.com']
},
{
id: 'onegene-electronics',
name: 'ONEGENE ELECTRONICS',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '27-5, Udeung-gil, Hyangnam-eup, Hwaseong-si 18625, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'ontario-government',
name: 'Ontario Government',
keywords: ['mobility solutions', 'innovative goods', 'technologically advanced solutions', 'alcohol interlock devices', 'breath alcohol testers', 'precision machined components', 'ai', 'analytics', 'azure', 'iot', 'vehicle inspection system', 'touch-less drive thru wheel alignment', 'circular supply chain', 'rare earth elements', 'transformative ai solutions', 'manufacturing', 'life sciences', 'supply chain', 'food', 'beverage', 'north american transportation services', 'metal additive manufacturing', 'resistance welding consumables', 'ai-masterlyflow', 'predictive mobility', 'interior ai-based sensing solutions', 'industrial safety', 'enclosure solutions', 'high performance ai-computers', 'risc-v architecture', 'mobility and automotive innovation', 'automotive', 'road safety', 'circular economy', 'international trade and markets', 'mining and handling of raw materials', 'supplier', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai & genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E25'
},
role: 'Hauptaussteller',
profile: 'Ontario suppliers produce innovative goods/services at competitive prices. Trusted source of technologically advanced solutions.',
themes: ['Automotive', 'Road Safety', 'Circular Economy', 'International Trade and Markets', 'Mining and Handling of Raw Materials', 'Supplier', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI'],
address: '777 Bay Street, 21st Floor, Toronto M7A 2J3, Kanada',
website: 'www.sourcefromontario.com',
emails: ['helen.hemmingsen@ontario.ca', 'angela.spreng@international.gc.ca', 'musfiq.islam@investontario.ca']
},
{
id: 'opel-automobile-gmbh',
name: 'Opel Automobile GmbH',
keywords: ['nachhaltige mobilitätslösungen', 'deutsche ingenieurskunst', 'automobilhersteller', 'multi-energy-plattformen', 'vollelektrischer antrieb', 'bezahlbare mobilität', 'stellantis', 'vauxhall', 'automotive'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'B20'
},
role: 'Hauptaussteller',
profile: 'Opel ist einer der größten europäischen Automobilhersteller und begann 1899 mit der Automobilproduktion in Deutschland. Opel gehört zur Stellantis NV und bietet auf Basis seiner Multi-Energy-Plattformen bereits heute als erste deutsche Marke alle Modelle auch mit vollelektrischem Antrieb an.',
themes: ['Automotive'],
address: 'Bahnhofsplatz 1, 65423 Rüsselsheim am Main, Deutschland',
website: 'www.opel.de',
emails: ['kontakt-opel@opel.com']
},
{
id: 'bmw-group',
name: 'BMW GROUP',
keywords: ['automotive', 'test drives', 'family', 'mobility', 'innovation', 'vehicles', 'transportation', 'cars', 'technology', 'sustainability'],
location: {
type: 'Open Space',
hallOrPlace: 'Max-Joseph-Platz',
booth: 'MJ900'
},
role: 'Hauptaussteller',
profile: 'BMW GROUP is a leading automotive company offering innovative mobility solutions and test drives.',
themes: [],
address: '80809 München, Deutschland',
website: undefined,
emails: []
},
{
id: 'oth-regensburg-tc-kelheim-wasserstoffcluster-donau',
name: 'OTH Regensburg TC Kelheim | Wasserstoffcluster Donau',
keywords: ['prüfstandsdienstleistungen', 'forschung', 'entwicklung', 'h2-systeme', 'wasserstoffsysteme', 'verbrennungsmotoren', 'elektrolyseure', 'brennstoffzellen', 'sensoren', 'aktoren', 'wertschöpfungskette', 'erzeugung', 'speicherung', 'transport', 'mobile anwendungen', 'stationäre anwendungen', 'synthetische kraftstoffe', 'biogene kraftstoffe', 'emissionsreduzierende technologien', 'katalysatoren', 'aktivkohlefilter', 'abgasnachbehandlung', 'medienkonditionierung', 'brennstoffzellen', 'entwicklungspartner', 'wissenschaft', 'industrie'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B13'
},
role: 'Mitaussteller',
profile: 'Wir sind Entwicklungspartner und Schnittstelle zwischen Wissenschaft und Industrie. Unsere Prüfstandsdienstleistungen ermöglichen es, innovative Wasserstoffsysteme sowie dazugehörige Sensoren und Aktoren unter realitätsnahen Bedingungen zu erproben und weiterzuentwickeln. Ein weiterer Schwerpunkt liegt auf synthetischen und biogenen Kraftstoffen sowie der Weiterentwicklung emissionsreduzierender Technologien.',
themes: ['Future Drive Technologies incl. H2'],
address: 'Hopfenbachweg 4, 93309 Kelheim, Deutschland',
website: 'www.oth-regensburg.de/tc-kelheim',
emails: ['hans-peter.rabl@oth-regensburg.de']
},
{
id: 'oth-regensburg-tc-kelheim-wasserstoffcluster-donau',
name: 'OTH Regensburg TC Kelheim | Wasserstoffcluster Donau',
keywords: ['prüfstandsdienstleistungen', 'forschung', 'entwicklung', 'h2-systeme', 'wasserstoffsysteme', 'verbrennungsmotoren', 'elektrolyseure', 'brennstoffzellen', 'sensoren', 'aktoren', 'wertschöpfungskette', 'erzeugung', 'speicherung', 'transport', 'mobile anwendungen', 'stationäre anwendungen', 'synthetische kraftstoffe', 'biogene kraftstoffe', 'emissionsreduzierende technologien', 'katalysatoren', 'aktivkohlefilter', 'abgasnachbehandlung', 'medienkonditionierung', 'bayern innovativ', 'entwicklungspartner', 'wissenschaft', 'industrie'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B13'
},
role: 'Mitaussteller',
profile: 'Wir sind Entwicklungspartner und Schnittstelle zwischen Wissenschaft und Industrie. Unsere Prüfstandsdienstleistungen ermöglichen es, innovative Wasserstoffsysteme sowie dazugehörige Sensoren und Aktoren unter realitätsnahen Bedingungen zu erproben und weiterzuentwickeln. Ein weiterer Schwerpunkt liegt auf synthetischen und biogenen Kraftstoffen sowie der Weiterentwicklung emissionsreduzierender Technologien.',
themes: ['Future Drive Technologies incl. H2'],
address: 'Hopfenbachweg 4, 93309 Kelheim, Deutschland',
website: 'www.oth-regensburg.de/tc-kelheim',
emails: ['hans-peter.rabl@oth-regensburg.de']
},
{
id: 'oxidos-automotive',
name: 'OxidOS Automotive',
keywords: ['automotive', 'startup', 'summit', 'software', 'innovation', 'technology', 'mobility', 'transportation', 'digital solutions', 'automotive software', 'connected vehicles', 'vehicle technology', 'automotive innovation', 'software development', 'automotive industry', 'digital transformation', 'automotive solutions', 'automotive technology', 'automotive systems', 'automotive applications'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D124'
},
role: 'Hauptaussteller',
profile: 'OxidOS Automotive ist ein führendes Unternehmen im Bereich der Automobilsoftware, das innovative digitale Lösungen für die Mobilitätsbranche entwickelt. Als Hauptaussteller auf der IAA MOBILITY präsentiert OxidOS seine neuesten Technologien und Anwendungen. Besuchen Sie uns in Halle B3.D124, um mehr über unsere Produkte und Dienstleistungen zu erfahren.',
themes: [],
address: 'Teleorman 61, 400573 Cluj-Napoca, Rumänien',
website: 'www.oxidos.io',
emails: []
},
{
id: 'pcq-technologies',
name: 'PCQ Technologies',
keywords: ['light weight', 'optical quality', 'super hard coated polycarbonate glazings', 'networking tours'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E42'
},
role: 'Hauptaussteller',
profile: 'PCQ Technologies specializes in light weight, optical quality, super hard coated polycarbonate glazings.',
themes: [],
address: '2200 South Maywood Drive, Maywood, Illinois 60153, USA',
website: 'www.pcqtech.com',
emails: ['jason@pcqtech.com', 'barry@pcqtech.com', 'ann@nationalcycle.com']
},
{
id: 'pgub-management-consultants-gmbh',
name: 'PGUB Management Consultants GmbH',
keywords: ['charging and refueling infrastructure', 'energy grid', 'manufacturing', 'supply chain', 'international trade', 'markets', 'supplier', 'software defined vehicles', 'ai', 'genai', 'semiconductors', 'chips', 'battery tech', 'cybersecurity'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'C40'
},
role: 'Hauptaussteller',
profile: 'PGUB Management Consultants GmbH ist ein Hauptaussteller auf der IAA MOBILITY 2025. Das Unternehmen bietet umfassende Beratungsdienstleistungen in den Bereichen Energie, Fertigung und internationale Märkte an.',
themes: ['Charging and Refueling Infrastructure incl. Energy Grid', 'Manufacturing & Supply Chain', 'International Trade and Markets', 'Supplier', 'Software Defined Vehicles', 'AI & GenAI', 'Semiconductors & Chips', 'Battery Tech', 'Cybersecurity'],
address: 'Hagenauer Straße 47, 65203 Wiesbaden, Deutschland',
website: 'www.pgub-consult.de',
emails: ['info@pgub-consult.de']
},
{
id: 'piemonte-agency',
name: 'Piemonte Agency',
keywords: ['internationalization', 'investment attraction', 'automotive industry', 'transportation clusters', 'supply chain', 'styling', 'engineering', 'prototyping', 'industrialization', 'testing', 'validation', 'certification', 'components', 'mass production', 'robotics', 'automation', 'italian suppliers', 'business in piemonte'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C20'
},
role: 'Hauptaussteller',
profile: 'Piemonte region (North-West of Italy), and its capital Torino are the core of the national automotive industry and one the main European transportation clusters. The region’s ecosystem covers the entire supply chain, offering products, technologies and know-how from the concept of the vehicle to its delivery: styling, engineering, prototyping, industrialization, testing, validation and certification, components and mass production, as well as robotics and automation.',
themes: [],
address: 'Via Nizza 262 Int. 56, 10126 Torino, Italien',
website: 'www.centroestero.org/en/',
emails: ['automotive@centroestero.org']
},
{
id: 'piemonte-agency',
name: 'Piemonte Agency',
keywords: ['internationalization', 'investment attraction', 'automotive industry', 'transportation clusters', 'supply chain', 'styling', 'engineering', 'prototyping', 'industrialization', 'testing', 'validation', 'certification', 'components', 'mass production', 'robotics', 'automation', 'italian suppliers', 'business in piemonte', 'turnkey assistance', 'institutional support'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C20'
},
role: 'Hauptaussteller',
profile: 'Piemonte region (North-West of Italy), and its capital Torino are the core of the national automotive industry and one the main European transportation clusters. The region’s ecosystem covers the entire supply chain, offering products, technologies and know-how from the concept of the vehicle to its delivery. Piemonte Agency is a one-stop-shop to do business in Piemonte, offering free, responsive and tailored services.',
themes: [],
address: 'Via Nizza 262 Int. 56, 10126 Torino, Italien',
website: 'www.centroestero.org/en/',
emails: ['automotive@centroestero.org']
},
{
id: 'pim-korea-co-ltd',
name: 'PIM KOREA co., Ltd',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '26, Secheon-ro 8-gil, Dasa-eup, Dalseong-gun, Daegu 42921, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'pix-moving',
name: 'PIX Moving',
keywords: ['ai-driving robotics', 'smart mobility', 'moving spaces', 'modular platforms', 'level 4 autonomy', 'lidar', 'gnss/ins fusion', 'v2x', 'edge-compute architecture', 'biomimetic 3d-printed frame', 'ai-driven interiors', 'short-range transport', 'smart cities', 'modular mobility solutions', 'scalable mobility solutions', 'eco-friendly mobility solutions', 'autonomous driving', 'ai & genai', 'remote-controlled vehicles', 'entertainment & vr', 'future drive technologies'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B20'
},
role: 'Hauptaussteller',
profile: 'PIX Moving envisions vehicles as “Moving Spaces”—modular platforms that transform into cafés, libraries, or theaters. PIX RoboBus and RoboShop serve as mobile service hubs, delivering Level 4 autonomy in low-speed urban environments, using LiDAR, camera, GNSS/INS fusion, and V2X in a robust, edge-compute architecture. The compact Beastie EV, featuring a biomimetic 3D-printed frame and AI-driven interiors, is purpose-built for navigating tight city streets.',
themes: ['Automotive', 'LEV', 'Micromobility', 'Public Transport', 'Mobility on demand', 'Mobility as a Service', 'Smart City Mobility', 'Smart Country Mobility', 'Road Safety', 'Circular Economy', 'Decarbonization', 'Regulation, Liability & ESGs', 'Manufacturing & Supply Chain', 'Inclusion', 'International Trade and Markets', 'Software Defined Vehicles', 'Autonomous Driving', 'AI & GenAI', 'Remote-Controlled Vehicles', 'Entertainment & VR', 'Future Drive Technologies incl. H2'],
address: '10F, Tokyo Port City Takeshiba, Tokyo 105-0022, Japan',
website: 'www.pixmoving.com',
emails: ['nancy@pixmoving.com', 'neve@pixmoving.com']
},
{
id: 'pocons-co-ltd',
name: 'POCONS CO., LTD',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '30, Saneop-ro 155beon-gil, Gwonseon-gu, Suwon-si, Gyeonggi-do 16648, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'podium-srl',
name: 'podium Srl',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Via Carlo Viola 65, 11026 Pont-Saint-Martin (AO), Italien',
website: 'www.podium-tech.com',
emails: []
},
{
id: 'podium-srl',
name: 'podium Srl',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Via Carlo Viola 65, 11026 Pont-Saint-Martin (AO), Italien',
website: 'www.podium-tech.com',
emails: []
},
{
id: 'polizeipraesidium-unterfranken',
name: 'Polizeipräsidium Unterfranken',
keywords: ['elektromobilität', 'bayerische polizei', 'elektrofahrzeuge', 'ladeinfrastruktur', 'polizeidienst', 'fuhrpark', 'verbrennungsmotor', 'fahrzeugtests', 'polizeieigene ladeinfrastruktur', 'schrittweise einführung'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS435'
},
role: 'Mitaussteller',
profile: 'Der Fuhrpark der Bayerischen Polizei umfasst über 9.000 Personenkraftwagen, wobei derzeit nahezu ausschließlich Fahrzeuge mit Verbrennungsmotor betrieben werden. Die Arbeitsgruppe Elektromobilität beim Polizeipräsidium Unterfranken arbeitet an einer schrittweisen Einführung der Elektromobilität bei der Bayerischen Polizei. Hierbei werden beispielsweise geeignete Elektrofahrzeuge eingehend auf ihre Einsatzfähigkeit im Polizeidienst getestet sowie die erforderliche polizeieigene Ladeinfrastruktur betrachtet.',
themes: [],
address: 'Frankfurter Straße 79, 97082 Würzburg, Deutschland',
website: 'www.polizei.bayern.de/wir-ueber-uns/organisation/dienststellen/0900600000000.html',
emails: []
},
{
id: 'polizeipraesidium-muenchen',
name: 'Polizeipräsidium München',
keywords: ['polizei', 'polizeiliche themen', 'organisationen', 'behörden', 'institutionen'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS550'
},
role: 'Hauptaussteller',
profile: 'Die Münchner Polizei steht für Fragen zu polizeilichen Themen gern bereit.',
themes: [],
address: 'Ettstr. 2- 4, 80331 München, Deutschland',
website: 'www.polizei.bayern.de/muenchen/',
emails: ['muenchen.presse@polizei.bayern.de']
},
{
id: 'polizeipraesidium-muenchen',
name: 'Polizeipräsidium München',
keywords: ['polizei', 'polizeiliche themen', 'organisationen', 'behörden', 'institutionen'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS550'
},
role: 'Hauptaussteller',
profile: 'Die Münchner Polizei steht für Fragen zu polizeilichen Themen gern bereit.',
themes: [],
address: 'Ettstr. 2- 4, 80331 München, Deutschland',
website: 'www.polizei.bayern.de/muenchen/',
emails: ['muenchen.presse@polizei.bayern.de']
},
{
id: 'polyic',
name: 'PolyIC',
keywords: ['elektronik', 'folien', 'drucktechnologie', 'sensoren', 'flexible elektronik', 'gedruckte elektronik', 'smart surfaces', 'kapazitive sensoren', 'gedruckte schaltungen', 'polymer', 'technologie', 'innovation', 'automotive', 'industrie', 'integration', 'oberflächen', 'intelligente oberflächen', 'leitfähige materialien', 'elektronische komponenten', 'folie', 'polymerfolien', 'elektronische schaltungen'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C21'
},
role: 'Mitaussteller',
profile: 'PolyIC entwickelt und produziert innovative Folienlösungen für die Elektronikindustrie. Die Produkte umfassen gedruckte Elektronik, kapazitive Sensoren und intelligente Oberflächen. Diese Technologien finden Anwendung in verschiedenen Branchen, insbesondere in der Automobilindustrie.',
themes: [],
address: 'Tucherstraße 2, 90763 Fürth, Deutschland',
website: 'www.polyic.com',
emails: []
},
{
id: 'polyn-technology',
name: 'POLYN Technology',
keywords: ['ultra-low-power solution', 'real-time monitoring', 'tire-road grip', 'neuromorphic analog signal processing', 'nasp technology', 'analog chips', 'thin-edge ai applications', 'vibrosense tms chip', 'tpms node', 'adas', 'tire wear', 'rolling resistance', 'fleet management', 'vehicle dynamics', 'vehicle oems', 'tire grip', 'ai-processed data', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'semiconductors', 'chips'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C12'
},
role: 'Mitaussteller',
profile: 'POLYN Technology is a fabless semiconductor company that supplies high-performance Neuromorphic Analog Signal Processing (NASP) technology and application-specific, ultra-low-power Neuromorphic Front End analog chips, ideal for pre-processing raw sensor data. In the automotive industry, the NASP VibroSense TMS chip enables continuous, real-time monitoring of tire-road grip directly within the tire. It can also supply tire wear and rolling resistance data to fleet management applications.',
themes: ['Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Semiconductors & Chips'],
address: '1 HaEshel, 370000 Caesarea, Israel',
website: 'polyn.ai/',
emails: ['info@polyn.ai', 'ksorkin@polyn.ai']
},
{
id: 'dr-ing-h-c-f-porsche-aktiengesellschaft',
name: 'Dr. Ing. h.c. F. Porsche Aktiengesellschaft',
keywords: ['automobilhersteller', 'sportwagen', 'nachhaltigkeit', 'digitalisierung', 'organisation', 'transformation', 'test drives', 'automotive', 'cycling', 'charging and refueling infrastructure', 'connectivity', 'iot', 'big data'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'D10'
},
role: 'Hauptaussteller',
profile: 'Die Porsche AG ist ein deutscher Automobilhersteller mit Sitz in Stuttgart-Zuffenhausen. Das Unternehmen gehört seit 2009 dem Volkswagen Konzern an und produziert vor allem Sportwagen.',
themes: ['Automotive', 'Cycling', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Connectivity, IoT & Big Data'],
address: 'Porscheplatz 1, 70435 Stuttgart, Deutschland',
website: 'www.porsche.de',
emails: ['contact@porsche.de']
},
{
id: 'portugal-bike-value-am2r-abimota',
name: 'Portugal Bike Value - AM2R - ABIMOTA',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D28'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Rua Ramiro Soares de Miranda 133 Brejo, 3750-866 Agueda, Portugal',
website: 'www.abimota.pt',
emails: []
},
{
id: 'preciforge-sa',
name: 'PRECIFORGE SA',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'D10'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '45 Avenue Leo Lagrange, 63300 Thiers, Frankreich',
website: undefined,
emails: []
},
{
id: 'preh-gmbh',
name: 'Preh GmbH',
keywords: ['hmi-systeme', 'e-mobility-komponenten', 'automobilzulieferer', 'pkw', 'nutzfahrzeuge', 'nieder- und hochvoltbereich', 'joyson group', 'automotive electronics', 'manufacturing & supply chain', 'supplier', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'C40'
},
role: 'Mitaussteller',
profile: 'Als globaler Automobilzulieferer beschäftigt die Preh Group derzeit rund 7.000 Mitarbeiter und erwirtschaftete im Jahr 2024 einen Umsatz von rund 1,53 Milliarden Euro. Preh wurde 1919 in Bad Neustadt a. d. Saale gegründet und ist seit 2011 Teil der Joyson Group. Die Entwicklungs- und Fertigungskompetenz von Preh umfasst insbesondere HMI-Systeme für Pkw und Nutzfahrzeuge sowie E-Mobility-Komponenten im Nieder- und Hochvoltbereich.',
themes: ['Automotive', 'Manufacturing & Supply Chain', 'Supplier', 'Battery Tech'],
address: 'Schweinfurter Straße 5-9, 97616 Bad Neustadt, Deutschland',
website: 'www.preh.de',
emails: ['automotive@preh.de', 'ronald.schaare@preh.de', 'daniel.schmid@preh.de', 'sven.ress@preh.de']
},
{
id: 'pricewaterhousecoopers-gmbh',
name: 'PricewaterhouseCoopers GmbH',
keywords: ['unternehmensberatung', 'wirtschaftsprüfung', 'beratung', 'global player', 'familienunternehmen', 'kommunaler träger', 'erfahrung', 'branchenkenntnis', 'fachwissen', 'qualitätsanspruch', 'innovationskraft', 'expert:innennetzwerk', 'automotive', 'mobility as a service', 'software defined vehicles', 'autonomous driving', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'C20'
},
role: 'Sponsor',
profile: 'Unsere Mandanten stehen tagtäglich vor vielfältigen Aufgaben, möchten neue Ideen umsetzen und suchen unseren Rat. Sie erwarten, dass wir sie ganzheitlich betreuen und praxisorientierte Lösungen mit größtmöglichem Nutzen entwickeln. Besonders wichtig ist uns die vertrauensvolle Zusammenarbeit mit unseren Mandanten.',
themes: ['Automotive', 'Mobility as a Service', 'Software Defined Vehicles', 'Autonomous Driving', 'AI & GenAI'],
address: 'Friedrich-Ebert-Anlage 35-37, 60327 Frankfurt, Deutschland',
website: 'www.pwc.de/IAA',
emails: ['m.krause@pwc.com']
},
{
id: 'project-urban-23-gmbh',
name: 'project urban 2|3 GmbH',
keywords: ['e-scooter', '2-rad-e-scooter', '3-rad-e-scooter', 'leasing', 'rental', 'sharing', 'delivery', 'privatkunden', 'importeure', 'fahrzeughaendler', '3w cell', 'sicherheit', 'flexible energieloesung', 'design', 'pkw-fuehrerschein', 'sicherheitszellen-system', 'automotive', 'lev', 'micromobility', 'public transport', 'mobility on demand', 'mobility as a service', 'smart city mobility', 'road safety', 'circular economy', 'connectivity', 'iot', 'big data', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'B21'
},
role: 'Hauptaussteller',
profile: 'Die project urban 2I3 GmbH startet auf der IAA 2025 den offiziellen Verkauf ihrer neu entwickelten E-Scooter-Familie. Die 2-Rad- und 3-Rad-E-Scooter eignen sich sowohl für gewerbliche Anwendungen in den Bereichen Leasing, Rental, Sharing und Delivery als auch für das Privatkundengeschäft für Importeure und Fahrzeughändler. Highlight: Der 3W CELL ist der innovativste E-Scooter aus unserer modularen Familie, der in puncto Sicherheit, flexibler Energielösung und preisgekröntem Design neue Maßstäbe auf dem E-Scooter-Markt weltweit setzt.',
themes: ['Automotive', 'LEV', 'Micromobility', 'Public Transport', 'Mobility on demand', 'Mobility as a Service', 'Smart City Mobility', 'Road Safety', 'Circular Economy', 'Connectivity, IoT & Big Data', 'Battery Tech'],
address: 'Reesbergstraße 1, 36039 Fulda, Deutschland',
website: 'www.projecturban23.com',
emails: ['info@projecturban23.com', 'm.dongus@projecturban23.com', 'g.rzadkowolski@projecturban23.com', 'p.leibold@ext.projecturban23.com']
},
{
id: 'projekt-h2-oha-hydrogen-mixture-formation-in-off-highway-applications',
name: 'Projekt H2-OHA – Hydrogen Mixture Formation in Off-Highway Applications',
keywords: ['hydrogen mixture formation', 'off-highway applications', 'wasserstoff', 'gemischbildung', 'off-highway', 'anwendungen', 'projekt h2-oha'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS435'
},
role: 'Mitaussteller',
profile: 'Projekt H2-OHA beschäftigt sich mit der Wasserstoff-Gemischbildung in Off-Highway-Anwendungen.',
themes: [],
address: 'Kreuzäcker 8, 94469 Deggendorf, Deutschland',
website: 'www.liebherr.com/de-de/firmengruppe/standort/deggendorf-profil-3705450',
emails: []
},
{
id: 'projekt-h2-oha-hydrogen-mixture-formation-in-off-highway-applications',
name: 'Projekt H2-OHA – Hydrogen Mixture Formation in Off-Highway Applications',
keywords: ['hydrogen mixture formation', 'off-highway applications', 'wasserstoff', 'gemischbildung', 'off-highway', 'anwendungen', 'projekt h2-oha'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS435'
},
role: 'Mitaussteller',
profile: 'Projekt H2-OHA beschäftigt sich mit der Wasserstoff-Gemischbildung in Off-Highway-Anwendungen.',
themes: [],
address: 'Kreuzäcker 8, 94469 Deggendorf, Deutschland',
website: 'www.liebherr.com/de-de/firmengruppe/standort/deggendorf-profil-3705450',
emails: []
},
{
id: 'gwsaar-gesellschaft-fuer-wirtschaftsfoerderung-saar-mbh',
name: 'gwSaar Gesellschaft für Wirtschaftsförderung Saar mbH',
keywords: ['batterieherstellung', 'batterierecycling', 'wirtschaftsfoerderung', 'trasaar', 'summit', 'mitaussteller', 'saarland', 'projekt trasaar', 'teilprojekt 5', 'batterietechnologie'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C21'
},
role: 'Mitaussteller',
profile: 'Projekt TraSaar (Teilprojekt 5: Batterieherstellung und -recycling).',
themes: [],
address: 'Konrad-Zuse-Straße 13, 66115 Saarbrücken, Deutschland',
website: 'www.trasaar.saarland/',
emails: []
},
{
id: 'prologium',
name: 'ProLogium',
keywords: ['batteries', 'lithium-ceramic', 'electric vehicles', 'consumer markets', 'industrial applications', 'global automakers', 'next-generation', 'proprietary technologies', 'international patents', 'gigawatt-hour production', 'rd center', 'gigafactory', 'automotive', 'cycling', 'lev', 'micromobility', 'public transport', 'smart city mobility', 'smart country mobility', 'charging and refueling infrastructure', 'energy grid', 'circular economy', 'decarbonization', 'manufacturing', 'supply chain', 'supplier', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E20'
},
role: 'Hauptaussteller',
profile: 'ProLogium Technology was founded in 2006 and is an innovative company specializing in the development and manufacturing of next-generation lithium-ceramic batteries. ProLogium offers advanced solutions for electric vehicles, consumer markets, and industrial applications. Its proprietary technologies are protected by over 900 international patents.',
themes: ['Automotive', 'Cycling', 'LEV', 'Micromobility', 'Public Transport', 'Smart City Mobility', 'Smart Country Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Circular Economy', 'Decarbonization', 'Manufacturing & Supply Chain', 'Supplier', 'Battery Tech'],
address: 'No. 6-1, Ziqiang 7th Rd Zhongli District, Taoyuan City 320023, Taiwan (Chinesisch-Taipeh)',
website: 'prologium.com',
emails: ['media@prologium.com']
},
{
id: 'promess',
name: 'PROMESS',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C30'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Schaffhausener Str. 44, 12209 Berlin, Deutschland',
website: 'www.promess-gmbh.de',
emails: []
},
{
id: 'promess',
name: 'PROMESS',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C30'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Schaffhausener Str. 44, 12209 Berlin, Deutschland',
website: 'www.promess-gmbh.de',
emails: []
},
{
id: 'protean-electric',
name: 'Protean Electric',
keywords: ['in-wheel-motor', 'automobiltechnologie', 'radnabenmotoren', 'proteandrive', 'elektrifizierung', 'oem', 'fahrzeugkonzepte', 'nutzererlebnis', 'reichweite', 'fahrzeugkosten', 'innovation', 'patente', 'automotive', 'decarbonization', 'software defined vehicles', 'future drive technologies incl. h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B01'
},
role: 'Hauptaussteller',
profile: 'Protean Electric ist ein Innovator im Bereich Automobiltechnologie und ein weltweit führender Entwickler von Radnabenmotoren, darunter ProteanDrive, eine vollständig integrierte Radnabenantriebslösung. Die Technologie von Protean Electric ist strategisch positioniert, um eine wichtige Rolle bei der Elektrifizierung der Mobilität zu spielen, indem sie OEMs die Möglichkeit bietet, ihre Fahrzeugkonzepte neu zu definieren, um das Nutzererlebnis und die Reichweite zu verbessern und gleichzeitig die Fahrzeugkosten zu senken.',
themes: ['Automotive', 'Decarbonization', 'Software Defined Vehicles', 'Future Drive Technologies incl. H2'],
address: 'Silvertree, Unit 10B Coxbridge Business Park, Alton Road, Farnham​, Surrey GU10 5EH, Großbritannien',
website: 'www.proteanelectric.com',
emails: ['info@proteanelectric.com']
},
{
id: 'prototype-club',
name: 'prototype.club',
keywords: ['industrie', 'startups', 'innovation', 'impact', 'innovationswettbewerbe', 'lösungspartner', 'prototypen', 'risikofreies testen', 'schnelle entwicklungszyklen', 'bosch', 'daimler truck', 'siemens energy', 'zukunftsthemen'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D107'
},
role: 'Hauptaussteller',
profile: 'prototype.club verbindet Industrieunternehmen mit wegweisenden Startups, um echte Innovationen umzusetzen. Auf Basis konkreter Bedarfe organisieren wir Innovationswettbewerbe und identifizieren weltweit passende Lösungspartner. Diese entwickeln in wenigen Wochen funktionierende Prototypen.',
themes: [],
address: 'Birkenwaldstr. 127, 70191 Stuttgart, Deutschland',
website: 'www.prototype.club',
emails: ['hello@prototype.club']
},
{
id: 'proven-concepts-bv',
name: 'Proven Concepts B.V.',
keywords: ['prototyping', 'kleinserien', 'kunststoff', 'metall', 'produktentwicklung', 'prototypenbau', 'kleinserienfertigung', 'stahl', 'messvorrichtungen', 'montagevorrichtungen', 'mockups', 'reverse engineering', 'automobilindustrie', 'agrar', 'lebensmittel', 'medizintechnik', 'transport', 'gesundheitswesen', 'freizeit', 'automotive', 'cycling', 'lev', 'micromobility', 'public transport', 'intermodality', 'charging and refueling infrastructure', 'manufacturing & supply chain', 'international trade and markets', 'supplier', 'autonomous driving', 'semiconductors & chips', 'battery tech', 'remote-controlled vehicles'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: 'Proven Concepts B.V. ist ein Familienunternehmen in der Brainport-Region, das sich auf hochwertige Produktentwicklung, Prototypenbau und Kleinserienfertigung spezialisiert hat. Das Unternehmen ist bekannt für seine Expertise in der Automobilindustrie und bietet maßgeschneiderte Lösungen für verschiedene Branchen. Ein interdisziplinäres Team sorgt für effiziente Produktionsverfahren und höchste Standards.',
themes: ['Automotive', 'Cycling', 'LEV', 'Micromobility', 'Public Transport', 'Intermodality', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Manufacturing & Supply Chain', 'International Trade and Markets', 'Supplier', 'Autonomous Driving', 'Semiconductors & Chips', 'Battery Tech', 'Remote-Controlled Vehicles'],
address: 'De Haak 4, 5555 XK Valkenswaard, Niederlande',
website: 'www.provenconcepts.nl',
emails: ['m.maessen@provenconcepts.nl', 'r.maessen@provenconcepts.nl']
},
{
id: 'purflux-group',
name: 'PURFLUX GROUP',
keywords: ['fahrzeugfiltration', 'antriebssysteme', 'mobilität', 'elektrofahrzeuge', 'hybridfahrzeuge', 'wasserstofffahrzeuge', 'getriebe', 'bremssysteme', 'brennstoffzellen', 'innovation', 'automobilhersteller', 'aftermarket', 'zulieferer', 'produktleistung', 'industrielle lösungen', 'fachkompetenz', 'kontinuierliche innovation', 'verantwortungsvolle lösungen'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'D10'
},
role: 'Mitaussteller',
profile: 'PURFLUX GROUP ist Marktführer in der Fahrzeugfiltration und bei Antriebssystemen. Das Unternehmen ist ein globaler Lösungsanbieter für Mobilität und entwickelt Technologien für Elektro-, Hybrid- und Wasserstofffahrzeuge.',
themes: ['Automotive'],
address: '1 Avenue Claude Monet, 78280 Guyancourt, Frankreich',
website: 'www.purfluxgroup.com',
emails: ['katia.gornes@purfluxgroup.com', 'olivier.cuzin@purfluxgroup.com', 'leonard.devito@purfluxgroup.com']
},
{
id: 'purflux-group',
name: 'PURFLUX GROUP',
keywords: ['fahrzeugfiltration', 'antriebssysteme', 'mobilität', 'elektrofahrzeuge', 'hybridfahrzeuge', 'wasserstofffahrzeuge', 'getriebe', 'bremssysteme', 'brennstoffzellen', 'automobilhersteller', 'aftermarket', 'innovation', 'industrielle lösungen', 'fachkompetenz', 'produktleistung', 'kontinuierliche innovation', 'verantwortungsvolle lösungen'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'D10'
},
role: 'Mitaussteller',
profile: 'PURFLUX GROUP ist ein Marktführer in der Fahrzeugfiltration und bei Antriebssystemen. Das Unternehmen bietet Lösungen für Elektro-, Hybrid- und Wasserstofffahrzeuge und ist bekannt für seine Innovationen und Exzellenz in der Produktentwicklung.',
themes: ['Automotive'],
address: '1 Avenue Claude Monet, 78280 Guyancourt, Frankreich',
website: 'www.purfluxgroup.com',
emails: ['katia.gornes@purfluxgroup.com', 'olivier.cuzin@purfluxgroup.com', 'leonard.devito@purfluxgroup.com']
},
{
id: 'pyunghwa-oil-seal-industry',
name: 'PyungHwa Oil Seal Industry',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B05'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '42 Nongongjungang-ro 51-gil Nongong-eup, Dalseong-gun, Daegu 42982, Südkorea (KR)',
website: 'www.ph.co.kr/',
emails: []
},
{
id: 'qualcomm-technologies-inc',
name: 'Qualcomm Technologies Inc.',
keywords: ['intelligent computing', 'ai', 'high-performance computing', 'low-power computing', 'connectivity', 'snapdragon platforms', 'digital transformation', 'software defined vehicles', 'autonomous driving', 'iot', 'big data', 'genai', 'semiconductors', 'chips', 'entertainment', 'vr'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C01'
},
role: 'Hauptaussteller',
profile: 'Qualcomm relentlessly innovates to deliver intelligent computing everywhere, helping the world tackle some of its most important challenges. Our proven solutions drive transformation across major industries, and our Snapdragon® branded platforms power extraordinary consumer experiences.',
themes: ['Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Semiconductors & Chips', 'Entertainment & VR'],
address: '5775 Morehouse Dr, San Diego, CA 92121, USA',
website: 'www.qualcomm.com',
emails: []
},
{
id: 'quanten-technologies-inc',
name: 'Quanten Technologies Inc',
keywords: ['high-performance electric motors', 'rare-earth-free', 'electric drives', 'vehicles', 'robotics', 'evtol platforms', 'software-defined electric drive', 'dynamic pole/phase reconfiguration', 'multi-phase motors', 'power density', 'material cost reduction', 'induction motors', 'synchronous motors', 'pm motors', 'boost drives', 'traction drives', 'mild hybrid systems', 'motors', 'inverters', 'eaxles', 'automotive', 'lev', 'public transport', 'manufacturing', 'supply chain', 'future drive technologies'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D131'
},
role: 'Hauptaussteller',
profile: 'Quanten designs high-performance rare-earth-free or rare-earth-light electric motors and drive systems that push the boundaries of performance, reliability, and design flexibility in electric drives for vehicles, robotics, and eVTOL platforms.',
themes: ['Automotive', 'LEV', 'Public Transport', 'Manufacturing & Supply Chain', 'Future Drive Technologies incl. H2'],
address: '3420 Black Canyon Dr, Plano 75025, USA',
website: 'www.quantentech.com/',
emails: ['ted.mao@quantentech.com', 'sales@quantentech.com', 'hcmao@quantentech.com']
},
{
id: 'radkersburger-metal-forming',
name: 'Radkersburger Metal Forming',
keywords: ['metal forming', 'automotive', 'manufacturing', 'metal components', 'oem', 'tier-1', 'supplier', 'industrial solutions', 'engineering', 'innovation', 'technology', 'production', 'austria', 'automotive industry', 'metal processing', 'precision engineering', 'advanced manufacturing', 'custom solutions', 'quality assurance', 'sustainability'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E10'
},
role: 'Mitaussteller',
profile: 'Radkersburger Metal Forming specializes in metal forming and manufacturing solutions for the automotive industry. They provide high-quality metal components and engineering services. Their expertise includes precision engineering and advanced manufacturing technologies.',
themes: [],
address: 'Austria Südost Gewerbepark A 2, 8490 Bad Radkersburg, Österreich',
website: 'www.radkersburger.at',
emails: []
},
{
id: 'sekisui-europe',
name: 'Sekisui Europe',
keywords: ['hochleistungsmaterialien', 'innovative lösungen', 'chemische produkte', 'hightech-materialien', 'oem', 'wohnungsbau', 'fahrzeuginnenräume', 'fahrzeugaußenteile', 'verglasungsanwendungen', 'flexible printed electronics', 'automobilinnovationen', 'forschung und entwicklung', 'zukunftstechnologien', 'mobilität', 'elektronik', 'infrastruktur', 'medizinische diagnostik', 'start-ups', 'kmu', 'forschungseinrichtungen'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: 'SEKISUI ist ein japanisches Chemieunternehmen, das für sein vielfältiges Portfolio an Hochleistungsmaterialien und innovativen Lösungen bekannt ist. Im Mobilitätssektor bietet SEKISUI ein umfassendes Sortiment an Materialien und Komponenten für Fahrzeuginnenräume, -außenteile und Verglasungsanwendungen an. Kürzlich hat das Unternehmen sein Produktportfolio im Bereich Mobilität um Flexible Printed Electronics (FPE) erweitert.',
themes: ['Automotive', 'Cycling', 'LEV', 'Micromobility', 'Public Transport', 'Smart City Mobility', 'Smart Country Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Road Safety', 'Circular Economy', 'Decarbonization', 'Regulation, Liability & ESGs', 'Manufacturing & Supply Chain', 'International Trade and Markets', 'Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Semiconductors & Chips', 'Battery Tech', 'Remote-Controlled Vehicles', 'Entertainment & VR', 'Future Drive Technologies incl. H2'],
address: 'Automotive Campus 30, 5708 JZ Helmond, Niederlande',
website: 'www.sekisui-europe.com',
emails: ['d.vereijken@raivereniging.nl', 'masashi.yanai@sekisuieurope.com', 'lena.tiedeken@sekisuieurope.com']
},
{
id: 'raiffeisen-bank-international-ag',
name: 'Raiffeisen Bank International AG',
keywords: ['geschäftsbank', 'automobilindustrie', 'corporate banking', 'investment banking', 'cee', 'filialnetz', 'finanzprodukte', 'repräsentanzen', 'leasing', 'vermögensverwaltung', 'factoring', 'm&a', 'raiffeisen research', 'analysen', 'publikationen', 'automotive', 'dienstleistungen', 'finanzierungen'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E10'
},
role: 'Mitaussteller',
profile: 'Die Raiffeisen Bank International (RBI) bietet österreichischen und internationalen Unternehmen ein breites Produktangebot im Corporate und Investment Banking. Sie versorgt lokale Unternehmen und Privatkunden mit hochqualitativen Finanzprodukten. Die RBI betrachtet Österreich sowie Zentral- und Osteuropa (CEE) als ihren Heimmarkt.',
themes: ['Automotive'],
address: 'Am Stadtpark 9, 1030 Wien, Österreich',
website: 'www.rbinternational.com',
emails: ['susanne.haider@rbinternational.com']
},
{
id: 'ras-al-khaimah-economic-zone-rakez',
name: 'RAS AL KHAIMAH ECONOMIC ZONE (RAKEZ)',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E43'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Island street, Al Nakheel RAK, 10055 Ras Al Khaimah, Vereinigte Arabische Emirate',
website: 'www.rakez.com',
emails: []
},
{
id: 'redi-group-gmbh',
name: 'redi-Group GmbH',
keywords: ['technischer qualitätsdienstleister', 'qualitätsmanagement', 'oem', 'tier-1-zulieferer', 'fertigungsunternehmen', 'beratungsleistungen', 'lieferantenmanagement', 'qualitätssicherung', 'reklamationsmanagement', 'resident engineering', 'task force-teams', 'automotive', 'manufacturing & supply chain', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Die redi-Group ist ein international führender technischer Dienstleister im Qualitätsmanagement. Wir unterstützen OEMs, Tier-1-Zulieferer und Fertigungsunternehmen gezielt bei der Umsetzung ihrer Qualitätsstrategie. Unsere Teams sorgen weltweit für operative Exzellenz.',
themes: ['Automotive', 'Manufacturing & Supply Chain', 'Supplier'],
address: 'Katzbergstr. 3a, 40764 Langenfeld, Deutschland',
website: 'www.redi-group.com',
emails: ['info@redi-group.com', 'onur.kayhan@redi-group.com']
},
{
id: 'regis-motors',
name: 'Regis Motors',
keywords: ['startup', 'automotive', 'mobility', 'transportation', 'innovation', 'technology', 'vehicles', 'electric vehicles', 'sustainable mobility', 'future mobility', 'automotive solutions', 'vehicle technology', 'transport solutions', 'mobility services', 'automotive industry', 'smart mobility', 'connected vehicles', 'automotive innovation', 'vehicle manufacturing', 'automotive engineering'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D111'
},
role: 'Hauptaussteller',
profile: 'Regis Motors ist ein führendes Unternehmen im Bereich der Automobiltechnologie, das innovative Lösungen für die Mobilität der Zukunft bietet. Mit einem Fokus auf nachhaltige und intelligente Mobilität entwickelt Regis Motors fortschrittliche Fahrzeugtechnologien. Besuchen Sie uns auf der IAA MOBILITY 2025, um mehr über unsere neuesten Innovationen zu erfahren.',
themes: [],
address: 'VIa San Quintino 28, 10121 Torino, Italien',
website: 'www.regis-motors.com/',
emails: []
},
{
id: 'reich-gmbh',
name: 'REICH GmbH',
keywords: ['metallverarbeitung', 'drehteile', 'frästeile', 'verzahnungsteile', 'prototypen', 'serienfertigung', 'automotive', 'e-bike', 'elektrotechnik', 'medizintechnik', 'maschinenbau', 'sicherheitsindustrie', 'verteidigungsindustrie', 'sicherheitsrelevante komponenten', 'liefertrreue', 'prozesssicherheit', 'technologische kompetenz', 'zollabwicklung', 'zukunftsmärkte'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B13'
},
role: 'Mitaussteller',
profile: 'Die REICH GmbH mit Sitz in Mellrichstadt ist ein inhabergeführtes Familienunternehmen mit über 100 Jahren Erfahrung in der Metallverarbeitung. Mit rund 825 Mitarbeitenden zählt REICH zu den führenden Anbietern hochpräziser Dreh-, Fräs- und Verzahnungsteile – von Prototypen bis zur Serienfertigung. Unsere Kunden kommen aus zukunftsorientierten Branchen wie Automotive, E-Bike, Elektrotechnik, Medizintechnik, Maschinenbau sowie zunehmend der Sicherheits- und Verteidigungsindustrie.',
themes: ['Automotive', 'Cycling', 'Micromobility'],
address: 'Industriestr. 1, 97638 Mellrichstadt, Deutschland',
website: 'www.reich-gmbh.com',
emails: ['public.relations@reich-gmbh.com', 'marco.straub@reich-gmbh.com']
},
{
id: 'remotivelabs',
name: 'RemotiveLabs',
keywords: ['vehicle simulation', 'automotive software development', 'prototype', 'integration testing', 'full vehicle simulation', 'left-shifting', 'collaboration', 'ci pipeline integration', 'feedback', 'remotivetopology', 'modular vehicle development', 'interface validation', 'platform integration', 'remotivecloud', 'visualize vehicle data', 'stream vehicle data', 'analyze vehicle data', 'remotivebroker', 'automotive communication protocols', 'api', 'silos', 'sil', 'hil', 'reuse tests', 'workflows', 'simulations', 'tools integration', 'development lifecycle', 'automotive', 'mobility as a service', 'smart city mobility', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'battery tech', 'remote-controlled vehicles'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D130'
},
role: 'Hauptaussteller',
profile: 'RemotiveLabs accelerates automotive software development by enabling teams to prototype, build, and test smarter – from early integration testing to full vehicle simulation. Our platform reduces silos between SIL and HIL, enabling teams to reuse tests, workflows, and simulations. It integrates easily with existing tools, bringing consistency, efficiency, and speed across the entire development lifecycle.',
themes: ['Automotive', 'Mobility as a Service', 'Smart City Mobility', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Battery Tech', 'Remote-Controlled Vehicles'],
address: 'Stora Varvsgatan 6A, 211 19 Malmö, Schweden',
website: 'www.remotivelabs.com',
emails: ['hello@remotivelabs.com', 'emil.dautovic@remotivelabs.com', 'aleksandar@remotivelabs.com', 'carin.lagerstedt@remotivelabs.com']
},
{
id: 'renault',
name: 'RENAULT',
keywords: [],
location: {
type: 'Open Space',
hallOrPlace: 'Odeonsplatz',
booth: 'OP370'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: '122 Avenue Du Général Leclerc, 92100 Boulogne Billancourt, Frankreich',
website: 'www.renault.com',
emails: []
},
{
id: 'riese-muller',
name: 'Riese & Müller',
keywords: ['e-bikes', 'cargo-bikes', 'premiumhersteller', 'mobilität', 'nachhaltiger lebensstil', 'nutzerorientierte produktentwicklung', 'innovative e-bike technologien', 'cargo bikes', 'hs-bikes', 'händlernetz', 'verantwortung', 'kultur', 'ökologie', 'soziales', 'ökonomie'],
location: {
type: 'Open Space',
hallOrPlace: 'Odeonsplatz',
booth: 'OP330'
},
role: 'Hauptaussteller',
profile: 'Riese & Müller ist ein deutscher Premiumhersteller von E-Bikes und Cargo Bikes. Gegründet 1993, beschäftigt das Unternehmen rund 800 Mitarbeitende und vertreibt seine Produkte weltweit über ein exklusives Händlernetz. Es steht für einen nachhaltigen Lebensstil, nutzerorientierte Produktentwicklung und innovative E-Bike Technologien.',
themes: ['Family', 'Cycling'],
address: 'Am Alten Graben 2, 64367 Mühltal, Deutschland',
website: 'www.r-m.de',
emails: ['team@r-m.de']
},
{
id: 'rimac-technology',
name: 'Rimac Technology',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C22'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Ljubljanska 7, 10431 Brezje, Kroatien',
website: undefined,
emails: []
},
{
id: 'roadrover-technology',
name: 'Roadrover Technology',
keywords: ['oem', 'tier 1 supplier', 'smart cockpit', 'smart driving solutions', 'smart cockpit domain controller', 'intelligent autonomous driving controller', 'l2+adas', 'apa', 'digital cluster', 'in-vehicle infotainment', 'cms', 'hud', '360 surround view', 'streaming rear view mirror', 'dvr', 'wireless charger', 'automotive', 'micromobility', 'supplier', 'autonomous driving', 'connectivity', 'iot', 'big data'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E41'
},
role: 'Hauptaussteller',
profile: 'We RoadRover are a Global Automotive Electronic Solution supplier, and focus on OEM projects to be the Tier 1 suppliers in the automotive industry. RoadRover is dedicated to providing customers with Smart Cockpit and Smart Driving solutions, including the solution of Smart Cockpit Domain Controller, Intelligent Autonomous Driving Controller( L2+ADAS, APA ), Digital Cluster, In-vehicle Infotainment, CMS, HUD, 360 Surround View, Streaming Rear View Mirror, DVR, Wireless Charger, etc.',
themes: ['Automotive', 'Micromobility', 'Supplier', 'Autonomous Driving', 'Connectivity, IoT & Big Data'],
address: 'No.5 Bld, Software Industrial Base, Nanshan, 518000 Shenzhen, China',
website: 'e.roadrover.cn/',
emails: ['mandy@roadrover.cn', 'overseas@roadrover.cn']
},
{
id: 'robosense-suteng-innovation-technology-co-ltd',
name: 'RoboSense - Suteng Innovation Technology Co., Ltd.',
keywords: ['robotiklösungen', 'ki-gestützte technologie', 'lidar-sensoren', 'intelligente wahrnehmungslösungen', 'automobil-oems', 'tier-1-zulieferer', 'robotiktechnologieplattformen', 'autonomes fahren', 'straßensicherheit', 'automotive', 'robotikmarkt', 'innovative komponenten', 'sicherere welt', 'intelligenteres leben'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'F10'
},
role: 'Hauptaussteller',
profile: 'RoboSense ist ein KI-gestütztes Robotiktechnologieunternehmen, das innovative Komponenten und Lösungen für die Robotikbranche liefert. Es strebt an, ein weltweit führender Anbieter von Robotiktechnologieplattformen zu werden – für eine sicherere Welt und ein intelligenteres Leben.',
themes: ['Automotive', 'Road Safety', 'Autonomous Driving'],
address: 'Zhongguan Honghualing Ind South District, 1213 Liuxian Ave, Taoyuan Street, Nanshan Distr Build 9, Block 2, 518000 Shenzhen, China',
website: 'www.robosense.ai',
emails: ['service@robosense.cn', 'grace.ye@robosense.cn', 'felix.yang@robosense.ai']
},
{
id: 'royaltek-company-ltd',
name: 'RoyalTek Company Ltd.',
keywords: ['road safety', 'advanced tech', 'commercial vehicle safety', '77ghz radar', 'motorcycles', 'industrial vehicles', '60ghz mmwave radar', 'smart automation', 'autonomous systems', 'high precision', 'compact design', 'robust performance', 'automotive', 'cycling', 'lev', 'micromobility', 'public transport', 'smart city mobility', 'smart country mobility'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E22'
},
role: 'Mitaussteller',
profile: 'RoyalTek boosts road safety for all with advanced tech for safe journeys. Today, we officially unveil RoyalTek’s latest innovation in commercial vehicle road safety—the RAR-7701, a 77GHz dual-mode radar specifically designed for motorcycles and industrial vehicles, bringing safety and intelligence to a whole new level. With RoyalTek, we\'re committed to improving road safety for all, making every journey more secure with our advanced technologies.',
themes: ['Automotive', 'Cycling', 'LEV', 'Micromobility', 'Public Transport', 'Smart City Mobility', 'Smart Country Mobility', 'Road Safety'],
address: '8 F, No. 40, Wenhua 2nd Rd, Taoyuan City 33377, Taiwan (Chinesisch-Taipeh)',
website: 'www.royaltek.com',
emails: ['mika.chang@royaltek.com', 'tiffany,chen@royaltel.com', 'debbie.liao@royaltek.com']
},
{
id: 'royaltek-company-ltd',
name: 'RoyalTek Company Ltd.',
keywords: ['road safety', 'advanced tech', 'commercial vehicle safety', '77ghz radar', 'motorcycles', 'industrial vehicles', '60ghz mmwave radar', 'smart automation', 'autonomous systems', 'high precision', 'compact design', 'robust performance', 'automotive', 'cycling', 'lev', 'micromobility', 'public transport', 'smart city mobility', 'smart country mobility'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E22'
},
role: 'Mitaussteller',
profile: 'RoyalTek boosts road safety for all with advanced tech for safe journeys. Today, we officially unveil RoyalTek’s latest innovation in commercial vehicle road safety—the RAR-7701, a 77GHz dual-mode radar specifically designed for motorcycles and industrial vehicles, bringing safety and intelligence to a whole new level. With RoyalTek, we\'re committed to improving road safety for all, making every journey more secure with our advanced technologies.',
themes: ['Automotive', 'Cycling', 'LEV', 'Micromobility', 'Public Transport', 'Smart City Mobility', 'Smart Country Mobility', 'Road Safety'],
address: '8 F, No. 40, Wenhua 2nd Rd, Taoyuan City 33377, Taiwan (Chinesisch-Taipeh)',
website: 'www.royaltek.com',
emails: ['mika.chang@royaltek.com', 'tiffany,chen@royaltel.com', 'debbie.liao@royaltek.com']
},
{
id: 'royos-joining-solutions-gmbh',
name: 'Royos joining solutions GmbH',
keywords: ['polymer stir welding', 'psw', 'kunststoff-metall-verbindung', 'kunststoff-holz-verbindung', 'batteriesysteme', 'leichtbau', 'interieur', 'nachhaltige materialkombinationen', 'automatisierte serienprozesse', 'designfreiheit', 'funktionale integration', 'oem', 'zulieferer', 'circular economy', 'decarbonization', 'manufacturing & supply chain', 'battery tech', 'future drive technologies'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E10'
},
role: 'Mitaussteller',
profile: 'Royos joining solutions ist spezialisiert auf Polymer Stir Welding (PSW), zur Verbindung von Kunststoff-Metall- und Kunststoff-Holz-Bauteilen. Der Prozess erfolgt in nur einem Arbeitsschritt, benötigt keine Vorbehandlung oder Klebstoffe und eignet sich ideal für nachhaltige hybride Materialkombinationen. PSW lässt sich effizient in automatisierte Serienprozesse integrieren und bietet hohe Designfreiheit sowie funktionale Integration.',
themes: ['Circular Economy', 'Decarbonization', 'Manufacturing & Supply Chain', 'Battery Tech', 'Future Drive Technologies incl. H2'],
address: 'Industriestraße West 6a, 8501 Lieboch, Österreich',
website: 'www.royos.at',
emails: ['mario.leitner@royos.at']
},
{
id: 'samas-electronics-co-ltd',
name: 'SAMAS Electronics Co., Ltd',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '6 flr, 7, Ogeum-ro 11-gil, Songpa-gu, Seoul 05542, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'samas-electronics-co-ltd',
name: 'SAMAS Electronics Co., Ltd',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '6 flr, 7, Ogeum-ro 11-gil, Songpa-gu, Seoul 05542, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'samsung-electronics-gmbh',
name: 'Samsung Electronics GmbH',
keywords: ['elektronik', 'verbraucherelektronik', 'technologie', 'innovation', 'smartphones', 'fernseher', 'haushaltsgeräte', 'halbleiter', 'displaylösungen', 'netzwerktechnologie'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS455'
},
role: 'Hauptaussteller',
profile: 'Samsung Electronics GmbH ist ein führendes Unternehmen in der Elektronikbranche, das innovative Produkte und Technologien anbietet. Das Unternehmen ist bekannt für seine Smartphones, Fernseher und Haushaltsgeräte.',
themes: [],
address: 'Frankfurter Straße 2, 65760 Eschborn, Deutschland',
website: 'www.samsung.de',
emails: []
},
{
id: 'samsung-metal-ltd',
name: 'Samsung Metal Ltd',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '61, Gongdan-ro 8-gil, Waegwan-eup, Chilgok-gun, Gyeongsangbuk-do 39909, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'samsung-metal-ltd',
name: 'Samsung Metal Ltd',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '61, Gongdan-ro 8-gil, Waegwan-eup, Chilgok-gun, Gyeongsangbuk-do 39909, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'samsung-sdi',
name: 'Samsung SDI',
keywords: ['automotive', 'lev', 'micromobility', 'smart city mobility', 'smart country mobility', 'road safety', 'circular economy', 'decarbonization', 'regulation', 'liability', 'esgs', 'manufacturing', 'supply chain', 'supplier', 'battery tech', 'cybersecurity', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B40'
},
role: 'Mitaussteller',
profile: 'Samsung SDI ist ein führender Anbieter von Batterietechnologien und Lösungen für die Automobilindustrie.',
themes: ['Automotive', 'LEV', 'Micromobility', 'Smart City Mobility', 'Smart Country Mobility', 'Road Safety', 'Circular Economy', 'Decarbonization', 'Regulation, Liability & ESGs', 'Manufacturing & Supply Chain', 'Supplier', 'Battery Tech', 'Cybersecurity', 'Future Drive Technologies incl. H2'],
address: 'Reichenbachstr.2, 85737 Ismaning, Deutschland',
website: undefined,
emails: []
},
{
id: 'samsung-semiconductor',
name: 'Samsung Semiconductor',
keywords: ['semiconductors', 'chips', 'memory', 'system lsi', 'foundry', 'logic chip solutions', 'automotive', 'micromobility', 'public transport', 'road safety', 'regulation', 'liability', 'esgs', 'supplier', 'autonomous driving', 'ai', 'genai', 'automatisiertes fahren', 'autonomes fahren', 'fahrerassistenzsysteme', 'fahrmodusspeicher'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B40'
},
role: 'Hauptaussteller',
profile: 'Samsung’s Device Solutions Division offers one of the widest product portfolios in the industry from three main businesses: Memory, System LSI and Foundry. We have been the leading memory provider in the industry for the past 30 years. Our components will spark the imagination of device manufacturers and developers and continue to be the foundation for a better world to live in.',
themes: ['Automotive', 'Micromobility', 'Public Transport', 'Road Safety', 'Regulation, Liability & ESGs', 'Supplier', 'Autonomous Driving', 'AI & GenAI', 'Semiconductors & Chips'],
address: 'Einsteinstraße 174, 81677 München, Deutschland',
website: 'www.samsung.com/semiconductor',
emails: []
},
{
id: 'sangshin-elecom',
name: 'SANGSHIN ELECOM',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '507, Dangsan-ro, Yeonseo-myeon, Sejong-si 30049, Südkorea (KR)',
website: 'www.sangshinec.com/kr/index.php',
emails: []
},
{
id: 'sangshin-elecom-co-ltd',
name: 'Sangshin Elecom Co., Ltd.',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Dangsan-ro Yunsuh-myeon 507, Sejong-si 30049, Südkorea (KR)',
website: 'www.sangshinec.com',
emails: []
},
{
id: 'sap-mercedes-amg-petronas-formula-one-team',
name: 'SAP + Mercedes-AMG PETRONAS Formula One Team',
keywords: ['performance steigern', 'innovation', 'insights', 'intelligente technologien', 'cloud-lösungen', 'ki-lösungen', 'technologische innovation', 'datengestützte erkenntnisse', 'ressourcennutzung', 'it-strategie', 'automotive', 'mobility as a service', 'circular economy', 'decarbonization', 'regulation', 'liability', 'esgs', 'manufacturing', 'supply chain', 'supplier', 'software defined vehicles', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'battery tech', 'cybersecurity'],
location: {
type: 'Summit',
hallOrPlace: 'Halle EW',
booth: 'EW01'
},
role: 'Hauptaussteller',
profile: 'Als offizieller Teampartner unterstützt SAP das Mercedes-AMG PETRONAS F1 Team, seine betriebliche Effizienz und Wettbewerbsfähigkeit durch technologische Innovation und datengestützte Erkenntnisse gezielt zu steigern.',
themes: ['Automotive', 'Mobility as a Service', 'Circular Economy', 'Decarbonization', 'Regulation, Liability & ESGs', 'Manufacturing & Supply Chain', 'Supplier', 'Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Battery Tech', 'Cybersecurity'],
address: 'Hasso-Plattner-Ring 7, 69190 Walldorf, Deutschland',
website: 'www.sap.de',
emails: ['info.germany@sap.com', 'th.pohl@sap.com', 'dana.roesiger@sap.com']
},
{
id: 'sap-mercedes-amg-petronas-formula-one-team',
name: 'SAP + Mercedes-AMG PETRONAS Formula One Team',
keywords: ['technologische innovation', 'datengestützte erkenntnisse', 'intelligente cloud-lösungen', 'ki-lösungen', 'fundierte entscheidungen', 'optimierte ressourcennutzung', 'zukunftssichere it-strategie', 'automotive', 'mobility as a service', 'circular economy', 'decarbonization', 'regulation', 'liability', 'esgs', 'manufacturing', 'supply chain', 'supplier', 'software defined vehicles', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'battery tech', 'cybersecurity'],
location: {
type: 'Summit',
hallOrPlace: 'Halle EW',
booth: 'EW01'
},
role: 'Hauptaussteller',
profile: 'Als offizieller Teampartner unterstützt SAP das Mercedes-AMG PETRONAS F1 Team, seine betriebliche Effizienz und Wettbewerbsfähigkeit durch technologische Innovation und datengestützte Erkenntnisse gezielt zu steigern. Intelligente Cloud- und KI-Lösungen ermöglichen fundierte Entscheidungen, optimierte Ressourcennutzung und eine zukunftssichere IT-Strategie.',
themes: ['Automotive', 'Mobility as a Service', 'Circular Economy', 'Decarbonization', 'Regulation, Liability & ESGs', 'Manufacturing & Supply Chain', 'Supplier', 'Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Battery Tech', 'Cybersecurity'],
address: 'Hasso-Plattner-Ring 7, 69190 Walldorf, Deutschland',
website: 'www.sap.de',
emails: ['info.germany@sap.com', 'th.pohl@sap.com', 'dana.roesiger@sap.com']
},
{
id: 'sap-deutschland-se-co-kg',
name: 'SAP Deutschland SE & Co. KG',
keywords: ['business ai', 'automobilbranche', 'ki-anwendungen', 'wertschöpfungskette', 'optimierung von abläufen', 'kundenerlebnis', 'entwicklung beschleunigen', 'diskussionen', 'praxisbeispiele', 'kundenstories', 'experteneinblicke', 'automotive', 'manufacturing', 'supply chain', 'supplier', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C30'
},
role: 'Sponsor',
profile: 'SAP und Capgemini zeigen, wie Business AI in der Automobilbranche eingesetzt wird, um Abläufe zu optimieren, das Kundenerlebnis zu verbessern und die Entwicklung zu beschleunigen. Der Fokus liegt auf konkreten KI-Anwendungen entlang der automobilen Wertschöpfungskette.',
themes: ['Automotive', 'Manufacturing & Supply Chain', 'Supplier', 'AI & GenAI'],
address: 'Hasso-Plattner-Ring 7, 69190 Walldorf, Deutschland',
website: 'www.sap.de',
emails: ['info.germany@sap.com', 'th.pohl@sap.com', 'rico.liese@sap.com', 'dana.roesiger@sap.com']
},
{
id: 'saykal-electronics',
name: 'Saykal Electronics',
keywords: ['intelligente fahrzeugelektronik', 'energiesysteme', 'e-mobilität', 'engineering', 'automobilelektronik', 'eingebettete systeme', 'oem', 'tier-1', 'dc-dc-wandler', 'inverter', 'onboard-ladegeräte', 'batterie-cmus', 'sensoren', 'usb-ladegeräte', 'kabellose ladegeräte', 'radargestützte sicherheitssysteme', 'mois', 'bsis', 'tpms', 'vitalzeichen-erkennung', 'ece r158', 'ece r159', 'ece r141', 'euro ncap cpd', 'leistungselektronik', 'kommunikationssysteme', 'radarbasierte sensortechnologien', 'automobile', 'nutzfahrzeuge', 'elektrofahrzeuge'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'B322'
},
role: 'Hauptaussteller',
profile: 'Saykal Electronics ist ein Engineering-Unternehmen, das fortschrittliche Lösungen im Bereich der Automobilelektronik und eingebetteten Systeme entwickelt und produziert. Wir bieten End-to-End-Systemlösungen für OEMs und Tier-1-Zulieferer. Unser Produktportfolio umfasst DC-DC-Wandler, Inverter, Onboard-Ladegeräte (OBC), Batterie-CMUs, Sensoren sowie USB- und kabellose Ladegeräte.',
themes: ['Automotive', 'LEV', 'Micromobility', 'Public Transport', 'Supplier', 'Autonomous Driving', 'Battery Tech'],
address: 'IT Valley, 41400 Kocaeli, Türkei',
website: 'www.saykal.com',
emails: ['akif.gumus@saykal.com', 'ozge.ceylan@saykal.com']
},
{
id: 'db-regio-ag-s-bahn-muenchen',
name: 'DB Regio AG S-Bahn München',
keywords: ['s-bahn', 'eisenbahnnahverkehr', 'öffentlicher nahverkehr', 'mobilitätswende', 'fahrzeug-generation', 'lebensqualität', 'grüne mobilität', 'mockup', 'xxl-s-bahn', 'neufahrzeug', 'außendesign', 'innenausstattung', 'public transport', 'mobilitätsanbieter', 'öpnv'],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP100'
},
role: 'Hauptaussteller',
profile: 'Die S-Bahn München verbindet seit über 50 Jahren die Menschen in Stadt und Umland. Zwei Drittel aller bayerischen Fahrgäste im Eisenbahnnahverkehr sind mir ihr unterwegs. Mit der Einführung einer komplett neuen Fahrzeug-Generation, die ab Ende 2028 in Betrieb geht, macht sich die S-Bahn München fit für die Zukunft.',
themes: ['Public Transport'],
address: 'Orleansstr. 56, 81667 München, Deutschland',
website: 'www.s-bahn-muenchen.de',
emails: ['kundendialog.muenchen@deutschebahn.com']
},
{
id: 'schaeffler',
name: 'Schaeffler',
keywords: ['motion technology', 'elektromobilität', 'co2-effiziente antriebe', 'fahrwerkslösungen', 'erneuerbare energien', 'lagerlösungen', 'linearführungen', 'reparaturservices', 'monitoring-services', 'automotive', 'decarbonization', 'supplier', 'software defined vehicles', 'autonomous driving', 'battery tech', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'B40'
},
role: 'Hauptaussteller',
profile: 'We pioneer motion: Seit über 75 Jahren treibt die Schaeffler Gruppe zukunftsweisende Erfindungen und Entwicklungen im Bereich Motion Technology voran. Mit innovativen Technologien, Produkten und Services in den Feldern Elektromobilität, CO₂-effiziente Antriebe, Fahrwerkslösungen und erneuerbare Energien ist das Unternehmen ein verlässlicher Partner, um Bewegung effizienter, intelligenter und nachhaltiger zu machen.',
themes: ['Automotive', 'Decarbonization', 'Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'Battery Tech', 'Future Drive Technologies incl. H2'],
address: 'Industriestr. 1-3, 91074 Herzogenaurach, Deutschland',
website: 'www.schaeffler.de',
emails: ['info@schaeffler.com', 'steffen.nielaender@schaeffler.com', 'georg.geinzer@schaeffler.com']
},
{
id: 'schall-e-kaiser-showtechnik-gmbh',
name: 'Schall-E - Kaiser Showtechnik GmbH',
keywords: ['showtechnik', 'veranstaltungstechnik', 'audiovisuelle lösungen', 'eventtechnik', 'messebau', 'konferenztechnik', 'lichttechnik', 'tontechnik', 'videotechnik', 'bühnenbau', 'veranstaltungsplanung', 'eventmanagement', 'audiotechnik', 'projektionstechnik', 'multimedia', 'präsentationstechnik'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E21'
},
role: 'Hauptaussteller',
profile: 'Schall-E - Kaiser Showtechnik GmbH bietet umfassende Lösungen in der Veranstaltungstechnik. Das Unternehmen ist spezialisiert auf audiovisuelle Technik für Messen und Events. Es bietet maßgeschneiderte Lösungen für jede Art von Veranstaltung.',
themes: [],
address: 'Steinerne Furt 88, 86167 Augsburg, Deutschland',
website: 'www.schall-e.de',
emails: ['info@schall-e.de']
},
{
id: 'schall-e-kaiser-showtechnik-gmbh',
name: 'Schall-E - Kaiser Showtechnik GmbH',
keywords: ['showtechnik', 'veranstaltungstechnik', 'audiovisuelle lösungen', 'eventtechnik', 'messebau', 'konferenztechnik', 'lichttechnik', 'tontechnik', 'videotechnik', 'bühnenbau', 'veranstaltungsplanung', 'eventmanagement', 'audiotechnik', 'projektionstechnik', 'multimedia', 'präsentationstechnik'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E21'
},
role: 'Hauptaussteller',
profile: 'Schall-E - Kaiser Showtechnik GmbH bietet umfassende Lösungen in der Veranstaltungstechnik. Das Unternehmen ist spezialisiert auf audiovisuelle Technik für Messen und Events. Mit Sitz in Augsburg betreut es Kunden deutschlandweit.',
themes: [],
address: 'Steinerne Furt 88, 86167 Augsburg, Deutschland',
website: 'www.schall-e.de',
emails: ['info@schall-e.de']
},
{
id: 'schrader-pacific',
name: 'Schrader Pacific',
keywords: ['automotive', 'regulation', 'liability', 'esgs', 'manufacturing', 'supply chain', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'A15'
},
role: 'Hauptaussteller',
profile: 'Schrader Pacific ist ein führender Anbieter in der Automobilindustrie mit Fokus auf Regulation, Haftung und ESGs. Das Unternehmen bietet Lösungen für die Fertigung und Lieferkette sowie Batterietechnologie.',
themes: ['Automotive', 'Regulation, Liability & ESGs', 'Manufacturing & Supply Chain', 'Battery Tech'],
address: '48 rue de Salins, 25300 Pontarlier, Frankreich',
website: 'www.schrader-pacific.fr',
emails: ['jean.chevalier@schrader-pacific.fr', 'christophe.dasilva@schrader-pacific.fr']
},
{
id: 'schrader-pacific',
name: 'Schrader Pacific',
keywords: ['automotive', 'regulation', 'liability', 'esgs', 'manufacturing', 'supply chain', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'A15'
},
role: 'Hauptaussteller',
profile: 'Schrader Pacific ist ein führender Anbieter in der Automobilindustrie mit Fokus auf Regulation, Haftung und ESGs sowie Fertigung und Lieferkette. Das Unternehmen bietet innovative Lösungen im Bereich der Batterietechnologie.',
themes: ['Automotive', 'Regulation, Liability & ESGs', 'Manufacturing & Supply Chain', 'Battery Tech'],
address: '48 rue de Salins, 25300 Pontarlier, Frankreich',
website: 'www.schrader-pacific.fr',
emails: ['jean.chevalier@schrader-pacific.fr', 'christophe.dasilva@schrader-pacific.fr']
},
{
id: 'scii-electronics-co-ltd',
name: 'SCII Electronics Co., Ltd.',
keywords: ['hv dc contactors', 'filter', 'battery disconnect unit', 'bdu', 'automotive', 'manufacturing', 'supply chain', 'volvo', 'magna', 'stellantis', 'vinfast', 'denso', 'volkswagen', 'general motors'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'C20'
},
role: 'Hauptaussteller',
profile: 'Shanghai CII Electronics Co., Ltd. (SCII) was founded in March, 1999. Main products: HV DC Contactors, Filter, Battery Disconnect Unit (BDU) etc. Until Oct 2022, SCII was joint venture company with TE Connectivity.',
themes: ['Automotive', 'Manufacturing & Supply Chain'],
address: 'No 1058 Xiaoyun Road Baoshan District, 200949 Shanghai, China',
website: 'www.scii.cn',
emails: ['global@shanghaicii.com', 'sales.eu@shanghaicii.com']
},
{
id: 'scio-technology',
name: 'SCIO Technology',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B11'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Hefner-Alteneck-Straße 11, 63743 Aschaffenburg, Deutschland',
website: 'www.scio-technology.com',
emails: []
},
{
id: 'seat-financial-services',
name: 'SEAT Financial Services',
keywords: [],
location: {
type: 'Open Space',
hallOrPlace: 'Residenzhöfe',
booth: 'RK600'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Gifhorner Straße 57, 38112 Braunschweig, Deutschland',
website: undefined,
emails: []
},
{
id: 'secor-chips-library-gmbh',
name: 'SECOR Chips & Library GmbH',
keywords: ['software-definierte fahrzeuge', 'sdv', 'automobilelektronik', 'standardisierte chips', 'modulare software-library', 'oem', 'app library', 'fahrzeugentwicklung', 'software-architektur', 'halbleiter-produktion', 'komplexitätsreduktion', 'markteinführung', 'kostenvorteile', 'integrationsaufwand', 'gewichtsreduktion', 'resiliente versorgung'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D141'
},
role: 'Hauptaussteller',
profile: 'SECOR – Der Quantensprung für das software-definierte Fahrzeug (SDV) der Zukunft. Unser zum Patent angemeldetes SECOR SDV CONCEPT wird maßgeblich mit standardisierten Chips und modularer Software-Library die Komplexität in der Automobilelektronik reduzieren. So werden Entwicklungszeiten verkürzt, Markteinführungen beschleunigt, die Kosten für OEMs deutlich gesenkt und der Ressourceneinsatz optimiert.',
themes: ['Automotive', 'Manufacturing & Supply Chain', 'Software Defined Vehicles'],
address: 'Schmidbauerstraße 4, 82166 Gräfelfing, Deutschland',
website: 'www.secor-cl.com',
emails: ['info@secor-cl.com', 'tanja.wirzius-schwerdtle@secor.group', 'guenther.schaefer@secor.group', 'w.glogauer@glogauer.de']
},
{
id: 'secor-chips-library-gmbh',
name: 'SECOR Chips & Library GmbH',
keywords: ['software-definiertes fahrzeug', 'sdv', 'automobilelektronik', 'standardisierte chips', 'modulare software-library', 'oem', 'app library', 'fahrzeugentwicklung', 'software-architektur', 'halbleiter-produktion', 'automotive', 'manufacturing', 'supply chain', 'software defined vehicles'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D141'
},
role: 'Hauptaussteller',
profile: 'SECOR – Der Quantensprung für das software-definierte Fahrzeug (SDV) der Zukunft. Unser zum Patent angemeldetes SECOR SDV CONCEPT wird maßgeblich mit standardisierten Chips und modularer Software-Library die Komplexität in der Automobilelektronik reduzieren. So werden Entwicklungszeiten verkürzt, Markteinführungen beschleunigt, die Kosten für OEMs deutlich gesenkt und der Ressourceneinsatz optimiert.',
themes: ['Automotive', 'Manufacturing & Supply Chain', 'Software Defined Vehicles'],
address: 'Schmidbauerstraße 4, 82166 Gräfelfing, Deutschland',
website: 'www.secor-cl.com',
emails: ['info@secor-cl.com', 'tanja.wirzius-schwerdtle@secor.group', 'guenther.schaefer@secor.group', 'w.glogauer@glogauer.de']
},
{
id: 'seniorenbeirat-muenchen',
name: 'Seniorenbeirat München',
keywords: ['senioren', 'beteiligung', 'bürgerbeteiligung', 'stadtentwicklung', 'sozialpolitik', 'generationen', 'seniorenvertretung', 'kommunalpolitik', 'seniorenarbeit', 'interessenvertretung'],
location: {
type: 'Open Space',
hallOrPlace: 'Marienplatz',
booth: 'CL840'
},
role: 'Hauptaussteller',
profile: 'Der Seniorenbeirat München vertritt die Interessen der älteren Bürgerinnen und Bürger in der Stadt. Er fördert die Beteiligung von Senioren an der Stadtentwicklung und Sozialpolitik. Der Beirat setzt sich für generationenübergreifende Projekte ein.',
themes: [],
address: 'Burgstr. 4, 80331 München, Deutschland',
website: 'www.seniorenbeirat-muenchen.de',
emails: []
},
{
id: 'seoul-dynamics',
name: 'Seoul Dynamics',
keywords: ['physical-ai', 'roboterlösungen', 'industrieautomatisierung', 'autonomes fahren', 'elektrische antriebshardware', 'fpga-basierte lidar-kamera-fusion', 'antriebssysteme', 'autonome fahralgorithmen', 'mobilitätsplattform', 'automotive', 'mobility on demand', 'mobility as a service', 'smart city mobility', 'road safety', 'decarbonization', 'autonomous driving', 'ai & genai', 'semiconductors & chips', 'battery tech', 'remote-controlled vehicles'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C303'
},
role: 'Hauptaussteller',
profile: 'Seoul Dynamics bietet branchenspezifische, massenangepasste Roboterlösungen auf Basis einer integrierten Softwareplattform für autonomes Fahren in Innen- und Außenbereichen, hochleistungsfähiger elektrischer Antriebshardware sowie FPGA-basierter LiDAR-Kamera-Fusionstechnologie.',
themes: ['Automotive', 'Mobility on demand', 'Mobility as a Service', 'Smart City Mobility', 'Road Safety', 'Decarbonization', 'Autonomous Driving', 'AI & GenAI', 'Semiconductors & Chips', 'Battery Tech', 'Remote-Controlled Vehicles'],
address: 'A-407, 46 Dallaenae-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do 13449, Südkorea (KR)',
website: 'www.seouldynamics.com',
emails: ['admin@seouldynamics.com', 'manage@seouldynamics.com']
},
{
id: 'seyond-europe-gmbh',
name: 'Seyond Europe GmbH',
keywords: ['lidar-systeme', 'autonome fahrzeuge', 'intelligente verkehrslösungen', 'automotive', 'smart transportation', 'bahnverkehr', 'industrieautomation', 'sensorlösungen', 'software defined vehicles', 'connectivity', 'iot', 'big data', 'future drive technologies', 'road safety', 'smart city mobility'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D24'
},
role: 'Hauptaussteller',
profile: 'Seyond steht für höchste Präzision und Innovationskraft in der Entwicklung und Serienfertigung modernster LiDAR-Systeme. Mit Hauptsitz im Silicon Valley und weiteren Standorten weltweit gehört Seyond zur internationalen Spitze im Bereich leistungsstarker LiDAR-Technologie für autonome Fahrzeuge und intelligente Verkehrslösungen. Unsere Sensorlösungen werden von führenden Unternehmen in den Bereichen Automotive, Smart Transportation, Bahnverkehr und Industrieautomation eingesetzt – weltweit und branchenübergreifend.',
themes: ['Automotive', 'Smart City Mobility', 'Road Safety', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'Future Drive Technologies incl. H2'],
address: 'Frankfurter Str. 92, 65760 Eschborn, Deutschland',
website: 'www.seyond.com',
emails: ['christian.kimmle@seyond.com', 'oliver.ramoli@seyond.com', 'frank.schuetz-ext@seyond.com']
},
{
id: 'bmw-group',
name: 'BMW GROUP',
keywords: ['automobile', 'test drives', 'family', 'mobility', 'automotive industry', 'innovation', 'open space', 'summit', 'hauptaussteller'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'E01'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: '80809 München, Deutschland',
website: undefined,
emails: []
},
{
id: 'shenzhen-k-d-technology-co-ltd',
name: 'SHENZHEN K&D TECHNOLOGY CO., LTD',
keywords: ['displays', 'automobile', 'tft-lcd', 'mini led', 'micro led', 'notebooks', 'tablets', 'mobile phones', 'vehicles', 'internet of everything', 'outdoor large scenes', 'smart conferences', 'intelligent big data control centers', 'xr immersive exhibitions', 'new business display', 'r&d', 'manufacturing', 'sales', 'serdeputy', 'triumph science & technology group', 'cnbm', 'industrial integration', 'display solutions', 'global scale'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E24'
},
role: 'Hauptaussteller',
profile: 'K&D Technology was founded in 2006 and provides various displays in automobile. It focuses on the R&D, manufacturing, sales and serdeputy of TFT-LCD and Mini/Micro LED display. K&D Technology offers display solutions and services on a global scale.',
themes: ['Automotive', 'Supplier'],
address: 'No.1 Qiaoli Road, Pingxi Community Pingdi Street, Longgang Dist, 518000 Shenzhen, China',
website: 'www.kingdisplay.com',
emails: ['service@kingdisplay.com', 'chaishuhong@kingdisplay.com', 'duxiaojian@kingdisplay.com', 'fuyaosheng@kingdisplay.com']
},
{
id: 'shenzhen-k-d-technology-co-ltd',
name: 'SHENZHEN K&D TECHNOLOGY CO., LTD',
keywords: ['displays', 'automobile', 'tft-lcd', 'mini led', 'micro led', 'notebooks', 'tablets', 'mobile phones', 'vehicles', 'internet of everything', 'outdoor large scenes', 'smart conferences', 'intelligent big data control centers', 'xr immersive exhibitions', 'new business display', 'automotive', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E24'
},
role: 'Hauptaussteller',
profile: 'K&D Technology was founded in 2006. It provides various displays in automobile. K&D provides display solutions and services on a global scale.',
themes: ['Automotive', 'Supplier'],
address: 'No.1 Qiaoli Road, Pingxi Community Pingdi Street, Longgang Dist, 518000 Shenzhen, China',
website: 'www.kingdisplay.com',
emails: ['service@kingdisplay.com', 'chaishuhong@kingdisplay.com', 'duxiaojian@kingdisplay.com', 'fuyaosheng@kingdisplay.com']
},
{
id: 'sispark',
name: 'SISPARK',
keywords: ['ai', 'digital industry', 'innovation incubator', 'science and technology', 'knowledge innovation', 'business incubation', 'sci-tech new horizon', 'creative industrial park', 'dushu lake digital economy industrial park', 'al industrial park', 'high-tech enterprises', 'smart city mobility', 'autonomous driving', 'connectivity', 'iot', 'big data', 'genai', 'semiconductors', 'chips'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B23'
},
role: 'Hauptaussteller',
profile: 'SISPARK is one of the best AI & Digital Industry innovation incubators in China. It is an important cluster in Suzhou for science and technology innovation, knowledge innovation and business incubation. The park is now home to nearly 31,000 high-caliber talents.',
themes: ['Smart City Mobility', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Semiconductors & Chips'],
address: '15/16F, Block G1, No.88, Jinjihu Avenue, 215123 Suzhou, China',
website: 'www.sispark.com.cn',
emails: ['jiting@sispark.com.cn', 'xiaon@sispark.com.cn', 'zsb@sispark.com.cn', 'dylan.xu0422@outlook.com', 'luyh@sispark.com.cn']
},
{
id: 'sispark',
name: 'SISPARK',
keywords: ['ai', 'digital industry', 'innovation incubator', 'science and technology', 'knowledge innovation', 'business incubation', 'sci-tech new horizon', 'creative industrial park', 'dushu lake digital economy industrial park', 'al industrial park', 'high-tech enterprises', 'smart city mobility', 'autonomous driving', 'connectivity', 'iot', 'big data', 'genai', 'semiconductors', 'chips'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B23'
},
role: 'Hauptaussteller',
profile: 'SISPARK is one of the best AI & Digital Industry innovation incubators in China. It is an important cluster in Suzhou for science and technology innovation, knowledge innovation and business incubation. The park is now home to nearly 31,000 high-caliber talents.',
themes: ['Smart City Mobility', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Semiconductors & Chips'],
address: '15/16F, Block G1, No.88, Jinjihu Avenue, 215123 Suzhou, China',
website: 'www.sispark.com.cn',
emails: ['jiting@sispark.com.cn', 'xiaon@sispark.com.cn', 'zsb@sispark.com.cn', 'dylan.xu0422@outlook.com', 'luyh@sispark.com.cn']
},
{
id: 'sixt',
name: 'SIXT',
keywords: ['autovermietung', 'mobilitätsdienstleistungen', 'fahrzeugvermietung', 'carsharing', 'flottenmanagement', 'transportlösungen', 'fahrzeugleasing', 'mobilitätslösungen', 'fahrzeugreservierung', 'fahrzeugbuchung', 'fahrzeugflotte', 'kundenservice', 'fahrzeugrückgabe', 'fahrzeugabholung', 'fahrzeugauswahl', 'fahrzeugkategorien', 'premiumfahrzeuge', 'luxusfahrzeuge', 'elektrofahrzeuge', 'umweltfreundliche fahrzeuge', 'fahrzeugversicherung', 'zusatzleistungen', 'kundenbetreuung', 'kundenbindung', 'kundenloyalität'],
location: {
type: 'Open Space',
hallOrPlace: 'Max-Joseph-Platz',
booth: 'MJ930'
},
role: 'Mitaussteller',
profile: 'SIXT bietet umfassende Mobilitätsdienstleistungen, einschließlich Autovermietung, Carsharing und Flottenmanagement. Das Unternehmen ist bekannt für seine breite Fahrzeugauswahl und exzellenten Kundenservice.',
themes: [],
address: 'Zugspitzstr. 1, 82049 Pullach, Deutschland',
website: 'www.sixt.de',
emails: []
},
{
id: 'sjf',
name: 'SJF',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '93, Dalseo-daero 109-gil, Dalseo-gu, Daegu 42709, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'skidata-gmbh',
name: 'SKIDATA GmbH',
keywords: ['zutrittslösungen', 'management', 'flughäfen', 'einkaufszentren', 'städte', 'bürogebäude', 'hotels', 'krankenhäuser', 'universitäten', 'skigebiete', 'stadien', 'freizeitparks', 'personen', 'fahrzeuge', 'intuitiv', 'einfach zu bedienen', 'sicher', 'integrierte konzepte', 'leistung optimieren', 'erträge maximieren', 'assa abloy', 'iso 9001:2015', 'iso 14001:2015', 'isae 3402', 'automotive', 'micromobility', 'public transport', 'mobility as a service'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E10'
},
role: 'Mitaussteller',
profile: 'SKIDATA ist ein international führender Anbieter von Zutrittslösungen und deren Management. Weltweit vertrauen führende Unternehmen und Betreiber auf sichere, zukunftsorientierte und zuverlässige Zutrittslösungen für Personen und Fahrzeuge. SKIDATA ist Teil der ASSA ABLOY Gruppe, dem weltweit führenden Anbieter von Zutrittslösungen.',
themes: ['Automotive', 'Micromobility', 'Public Transport', 'Mobility as a Service'],
address: 'Untersbergstraße 40, 5083 Grödig, Österreich',
website: 'www.skidata.com',
emails: ['info@skidata.com', 'ralf.klomp@skidata.com', 'klara.svejdova@skidata.com', 'iris.perz@skidata.com']
},
{
id: 'smart-europe',
name: 'smart Europe',
keywords: ['voll-elektrische premiumfahrzeuge', 'innovation', 'mobilität', 'design', 'konnektivität', 'digitale services', 'elektromobilität', 'alltagstauglichkeit', 'technologie', 'smart #1', 'smart #3', 'smart #5', 'automotive', 'smart city mobility', 'smart country mobility', 'charging and refueling infrastructure', 'road safety', 'software defined vehicles', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B01'
},
role: 'Hauptaussteller',
profile: 'Mit einem Portfolio an intelligenten, vollelektrischen Fahrzeugen definiert smart Mobilität neu. Seit 2020 vereint das Unternehmen die Innovationskraft von Mercedes-Benz und Geely. Als Marke für hochwertige Elektromobilität schafft smart Lösungen, die sich mühelos in den Alltag der Kundinnen und Kunden integrieren.',
themes: ['Automotive', 'Smart City Mobility', 'Smart Country Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Road Safety', 'Software Defined Vehicles', 'Battery Tech'],
address: 'Esslinger Strasse 7, 70771 Leinfelden-Echterdingen, Deutschland',
website: 'www.de.smart.com/de',
emails: ['eu.communications@smart.com']
},
{
id: 'solbian',
name: 'Solbian',
keywords: ['flexible solar panels', 'sustainable mobility', 'smart mobility', 'electric vehicles', 'hybrid vehicles', 'trailers', 'off-grid systems', 'transport solutions', 'curved surfaces', 'space-constrained surfaces', 'vibration resistance', 'thermal cycle resistance', 'harsh environmental conditions', 'oem', 'system integrators', 'customized solutions', 'energy autonomy', 'battery charging', 'range extension', 'auxiliary power', 'quality controls', 'field-proven testing'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: 'Solbian designs and manufactures flexible, lightweight solar panels tailored for mobility applications. Made in Italy using high-efficiency monocrystalline cells, our modules offer excellent power-to-weight ratio and adaptability. Ideal for electric and hybrid vehicles, trailers, off-grid systems, and transport solutions where conventional panels are not suitable.',
themes: ['Decarbonization'],
address: 'Viale Gandhi 21b, 10051 Avigliana (TO), Italien',
website: 'www.solbian.eu/',
emails: ['sales@solbian.eu', 'karin.mussino@solbian.eu', 'marco.anfossi@solbian.eu']
},
{
id: 'sonatus',
name: 'Sonatus',
keywords: ['software defined vehicles', 'ai', 'genai', 'networking tours'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'B14'
},
role: 'Hauptaussteller',
profile: 'Sonatus is a leading company in the field of Software Defined Vehicles and AI technologies.',
themes: ['Software Defined Vehicles', 'AI & GenAI'],
address: '330 Gibraltar Dr, Sunnyvale, CA 94089, USA',
website: 'www.sonatus.com',
emails: ['contact@sonatus.com']
},
{
id: 'sonima-gmbh-a-company-of-the-pfennig-group',
name: 'SONIMA GmbH - a company of the pfennig group',
keywords: ['supply chain', 'production service', 'oem', 'tier-1', 'automotive', 'overseas logistics', 'bonded warehousing', 'customs clearance', 'packaging', 'jis delivery', 'jit delivery', 'industrial cleaning', 'assembly', 'welding', 'pressing', 'screwing', 'quality services', 'iatf-certified', 'value-added services', 'european oems', 'worldwide suppliers'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'C17'
},
role: 'Hauptaussteller',
profile: 'Sonima GmbH, as part of the pfennig group, is specialized in automotive and covers the specific challenges with deep understanding of the entire supply chain –from overseas logistics and (bonded) warehousing, through customs clearance, packaging, and JIS/JIT delivery, to industrial cleaning and assembly such as welding, pressing, and screwing.',
themes: ['Automotive', 'Circular Economy', 'Manufacturing & Supply Chain', 'International Trade and Markets', 'Supplier'],
address: 'Ruhweg 17, 67307 Göllheim, Deutschland',
website: 'www.sonima.net',
emails: ['k.falke@sonima.net', 'o.wettstein@sonima.net', 'a.knutzen@sonima.net']
},
{
id: 'sonobeacon-gmbh',
name: 'SonoBeacon GmbH',
keywords: ['motion data intelligence', 'echtzeitdaten', 'personenströme', 'öpnv', 'handel', 'großveranstaltungen', 'bewegungserkennung', 'smarte analysen', 'vernetzte mobilität', 'smart city mobility'],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP110'
},
role: 'Mitaussteller',
profile: 'SonoBeacon ist Spezialist für Motion Data Intelligence. Unsere 3-Komponenten-Lösung liefert datenschutzkonforme Echtzeitdaten zu Personenströmen – etwa im ÖPNV, Handel oder auf Großveranstaltungen. Mit präziser Bewegungserkennung und smarten Analysen schaffen wir die Grundlage für bessere Entscheidungen in der vernetzten Mobilität von morgen.',
themes: ['Smart City Mobility'],
address: 'Alter Holzhafen 17a, 23966 Wismar, Deutschland',
website: 'www.sonobeacon.com',
emails: ['info@sonobeacon.com', 'olaf.stepputat@sonobeacon.com', 'uensal.ates@sonobeacon.com']
},
{
id: 'soplast',
name: 'Soplast',
keywords: ['automotive', 'supplier', 'electronics', 'sales', 'engineering', 'shapetronics', 'automotive supplier', 'electronics engineering', 'sales manager', 'electronics engineering manager', 'automotive electronics', 'automotive engineering', 'automotive sales', 'engineering manager', 'electronics supplier', 'automotive shapetronics'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C41'
},
role: 'Hauptaussteller',
profile: 'Soplast is a key player in the automotive supplier industry, specializing in electronics and engineering solutions. With a strong focus on innovation, Soplast delivers high-quality products and services to meet the demands of the automotive market.',
themes: ['Automotive', 'Supplier'],
address: 'Rua Alto da Mina 438, 4440-103 Valongo, Portugal',
website: 'www.soplast.com',
emails: ['sales@soplast.com', 'tiago.carvalho@soplast.com', 'miguel.maranha@shape-tronics.com']
},
{
id: 'soplast',
name: 'Soplast',
keywords: ['automotive', 'supplier', 'electronics', 'sales', 'engineering', 'shapetronics', 'automotive supplier', 'electronics engineering', 'sales manager', 'electronics engineering manager'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C41'
},
role: 'Hauptaussteller',
profile: 'Soplast is a key player in the automotive and electronics supply industry, offering innovative solutions and engineering expertise.',
themes: ['Automotive', 'Supplier'],
address: 'Rua Alto da Mina 438, 4440-103 Valongo, Portugal',
website: 'www.soplast.com',
emails: ['sales@soplast.com', 'tiago.carvalho@soplast.com', 'miguel.maranha@shape-tronics.com']
},
{
id: 'sparkpark-as',
name: 'SparkPark AS',
keywords: ['startup', 'summit', 'automotive', 'innovation', 'technology', 'mobility', 'transportation', 'solutions', 'future mobility', 'sustainability', 'smart city', 'urban mobility', 'electric vehicles', 'connected cars', 'autonomous driving', 'digitalization', 'infrastructure', 'green technology', 'clean energy', 'smart transportation', 'intelligent systems'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C314'
},
role: 'Hauptaussteller',
profile: 'SparkPark AS ist ein führendes Unternehmen im Bereich der Mobilitätslösungen, das innovative Technologien für die Zukunft der urbanen Mobilität entwickelt. Als Hauptaussteller auf der IAA MOBILITY präsentiert SparkPark AS seine neuesten Produkte und Dienstleistungen. Besuchen Sie uns in Halle A2, Stand C314, um mehr über unsere nachhaltigen und intelligenten Verkehrslösungen zu erfahren.',
themes: [],
address: 'Grundingen 6, 0250 Oslo, Norwegen',
website: 'www.sparkpark.no',
emails: []
},
{
id: 'stadt-regensburg-amt-fuer-wirtschaft-und-wissenschaft',
name: 'Stadt Regensburg Amt für Wirtschaft und Wissenschaft',
keywords: ['automotive', 'public transport', 'mobility on demand', 'mobility as a service', 'smart city mobility', 'circular economy', 'decarbonization', 'regulation', 'liability', 'esgs', 'inclusion', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'cybersecurity', 'entertainment', 'vr', 'future drive technologies', 'h2', 'organisationen', 'unternehmen', 'behörden', 'institutionen'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E11'
},
role: 'Mitaussteller',
profile: 'Stadt Regensburg Amt für Wirtschaft und Wissenschaft ist ein Mitaussteller auf der IAA MOBILITY 2025. Sie präsentieren sich im Summit in Halle B2, Stand E11.',
themes: ['Automotive', 'Public Transport', 'Mobility on demand', 'Mobility as a Service', 'Smart City Mobility', 'Circular Economy', 'Decarbonization', 'Regulation, Liability & ESGs', 'Inclusion', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Cybersecurity', 'Entertainment & VR', 'Future Drive Technologies incl. H2'],
address: 'Bruderwöhrdstr. 15b, 93055 Regensburg, Deutschland',
website: 'www.regensburg.de',
emails: ['wirtschaft-und-wissenschaft@regensburg.de']
},
{
id: 'stmicroelectronics',
name: 'STMicroelectronics',
keywords: ['semiconductor technologies', 'integrated device manufacturer', 'electronics applications', 'supply chain', 'manufacturing facilities', 'carbon neutrality', 'sustainable world', 'semiconductors & chips', 'zulieferer gruppe 1', 'elektrik- und elektronikteile', 'steuerelektroniksysteme'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'B11'
},
role: 'Hauptaussteller',
profile: 'ST is a global semiconductor leader serving a range of electronics applications. An integrated device manufacturer, we work with more than 200,000 customers and thousands of partners to design and build products, solutions, and ecosystems. We are committed to carbon neutrality on scope 1 and 2 and partially scope 3 by 2027.',
themes: ['Semiconductors & Chips'],
address: '39, Chemin du Champ des Filles null, 1228 Plan-les-Quates, Geneva, Schweiz',
website: 'www.st.com',
emails: ['julia.riedel@st.com', 'miu.oishi@st.com', 'alfred.eiblmayr@st.com']
},
{
id: 'storm-reply-gmbh',
name: 'Storm Reply GmbH',
keywords: ['cloud services', 'aws', 'amazon web services', 'cloud computing', 'it consulting', 'digital transformation', 'cloud architecture', 'cloud migration', 'cloud management', 'cloud security'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'B10'
},
role: 'Mitaussteller',
profile: 'Storm Reply GmbH ist ein führender Anbieter von Cloud-Services und spezialisiert auf die Implementierung und Verwaltung von AWS-Lösungen.',
themes: [],
address: 'Bartholomäusweg 26, 33334 Gütersloh, Deutschland',
website: 'www.reply.de',
emails: []
},
{
id: 'surprice-mobility',
name: 'Surprice Mobility',
keywords: ['carrental', 'mobility', 'car rental', 'affordable rates', '24 hours support', 'customer care', 'after sales service', 'fleet variety', 'worldwide expansion', 'service quality', 'rent a car industry', 'automotive', 'mobility on demand', 'mobility as a service', 'smart city mobility', 'smart country mobility'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B04'
},
role: 'Hauptaussteller',
profile: 'Surprice Mobility is a leading company in the CarRental market, providing quality services at affordable rates with 24 hours support. The company offers a variety of car groups and focuses on customer care and after sales service. Surprice Car Rentals is expanding worldwide, aiming to become a leader in the rent a car industry.',
themes: ['Automotive', 'Mobility on demand', 'Mobility as a Service', 'Smart City Mobility', 'Smart Country Mobility'],
address: 'Apostolou Varnava number 8, Shop 8A, 3065 Limassol, Zypern',
website: 'www.surpricemobility.com/',
emails: ['d.antoniou@surpricemobility.com', 'k.assiotou@surpricemobility.com', 'a.sotiriou@surpicemobility.com']
},
{
id: 'surprice-mobility',
name: 'Surprice Mobility',
keywords: ['carrental', 'mobility', 'car rental', 'affordable rates', '24 hours support', 'customer care', 'after sales service', 'fleet variety', 'worldwide expansion', 'service quality', 'rent a car industry', 'automotive', 'mobility on demand', 'mobility as a service', 'smart city mobility', 'smart country mobility'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B04'
},
role: 'Hauptaussteller',
profile: 'Surprice Mobility is a leading company in CarRental market - Empowering mobility. Surprice Car Rentals is a constantly growing car rental brand, which has as priority to provide quality services at affordable rates and flexible terms and conditions, combined with real 24 hours support. Our vision is to become one of the world leaders in the rent a car industry.',
themes: ['Automotive', 'Mobility on demand', 'Mobility as a Service', 'Smart City Mobility', 'Smart Country Mobility'],
address: 'Apostolou Varnava number 8, Shop 8A, 3065 Limassol, Zypern',
website: 'www.surpricemobility.com/',
emails: ['d.antoniou@surpricemobility.com', 'k.assiotou@surpricemobility.com', 'a.sotiriou@surpicemobility.com']
},
{
id: 'suzhou-nonead-robot-s-t-co-ltd',
name: 'Suzhou Nonead Robot S&T Co., Ltd.',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B23'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Room.A1101, No.1355, Jinji Lake Avenue, 215021 Suzhou, China',
website: 'www.nonead.com',
emails: []
},
{
id: 'taitra',
name: 'TAITRA',
keywords: ['trade promotion', 'business consultation', 'international market', 'smart integrator', 'government policies', 'industry needs', 'business opportunities', 'automotive', 'cycling', 'micromobility'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E22'
},
role: 'Hauptaussteller',
profile: 'Founded in 1970, TAITRA is Taiwan\'s foremost nonprofit trade promoting organization. Sponsored by the government and industry organizations, TAITRA assists enterprises to expand their global reach. Headquartered in Taipei, TAITRA has a team of 1,300 specialists and operates 5 local offices as well as 60+ branches worldwide.',
themes: ['Automotive', 'Cycling', 'Micromobility'],
address: '5th Fl., 333 Keelung Rd., Sec. 1, Taipei 110208, Taiwan (Chinesisch-Taipeh)',
website: 'www.taitra.org.tw/en',
emails: ['claire@taitra.org.tw', 'suhuei@taitra.org.tw', 'munich@taitra.org.tw']
},
{
id: 'taitra',
name: 'TAITRA',
keywords: ['trade promotion', 'business consultation', 'international market', 'smart integrator', 'government policies', 'industry needs', 'business opportunities', 'automotive', 'cycling', 'micromobility'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E22'
},
role: 'Hauptaussteller',
profile: 'Founded in 1970, TAITRA is Taiwan\'s foremost nonprofit trade promoting organization. Sponsored by the government and industry organizations, TAITRA assists enterprises to expand their global reach. Headquartered in Taipei, TAITRA has a team of 1,300 specialists and operates 5 local offices as well as 60+ branches worldwide.',
themes: ['Automotive', 'Cycling', 'Micromobility'],
address: '5th Fl., 333 Keelung Rd., Sec. 1, Taipei 110208, Taiwan (Chinesisch-Taipeh)',
website: 'www.taitra.org.tw/en',
emails: ['claire@taitra.org.tw', 'suhuei@taitra.org.tw', 'munich@taitra.org.tw']
},
{
id: 'tas-force-gmbh',
name: 'T.A.S. FORCE GmbH',
keywords: ['supply chain', 'produktion', 'qualität', 'automobilindustrie', 'oem', 'tier-1', 'wertschöpfungskette', 'industrialisierung', 'turnaround', 'verlagerung', 'krisenmanagement', 'prozessoptimierung', 'shopfloor', 'lieferantenstabilisierung', 'versorgungsengpässe', 'qualitätsprobleme', 'produktionsverlagerung', 'operative exzellenz', 'messbare resultate', 'umsetzungspartner'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'T.A.S. FORCE ist ein spezialisierter Umsetzungspartner für die Automobilindustrie. Wir unterstützen OEMs und Tier-1-Zulieferer entlang der industriellen Wertschöpfungskette – von Supply Chain und Qualität über Produktion und Industrialisierung bis zu Turnaround und Verlagerung.',
themes: ['Automotive', 'Regulation, Liability & ESGs', 'Manufacturing & Supply Chain', 'Supplier', 'AI & GenAI', 'Semiconductors & Chips'],
address: 'Paul-Dessau-Str. 5, 22761 Hamburg, Deutschland',
website: 'www.tas-force.com',
emails: ['arash.farsian@tas-force.com', 'soroush.farsian@tas-force.com']
},
{
id: 'taysad-automotive-suppliers-association-of-turkiye',
name: 'TAYSAD Automotive Suppliers Association of Türkiye',
keywords: ['automotive suppliers', 'oem', 'tier-1', 'supplier', 'automotive industry', 'exporters', 'automotive association', 'turkey automotive', 'industry association', 'automotive export'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D20'
},
role: 'Mitaussteller',
profile: 'TAYSAD Automotive Suppliers Association of Türkiye is a key player in the automotive industry, representing suppliers and exporters from Turkey.',
themes: [],
address: 'TOSB Otomotiv Tedarik Sanayi İhtisas OSB 1. Cadde No:10 Sekerpinar / Çayirova, 41420 KOCAELI, Türkei',
website: 'www.taysad.org.tr',
emails: []
},
{
id: 'teamsworld-innovation',
name: 'Teamsworld Innovation',
keywords: ['ev-komponenten', 'geschmiedete fahrwerke', 'bremssättel', 'druckgussgehäuse', 'kühlkörper', 'cloudbasierter fertigungspartner', 'tier-1', 'tier-2', 'e-mobilität', 'intelligente infrastruktur', 'fertigungsgerechte entwicklung', 'rapid prototyping', 'serienproduktion', 'nachhaltige mobilität', 'verantwortungsvolle fertigung', 'transparente prozesse', 'nachhaltige wertschöpfung'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E22'
},
role: 'Mitaussteller',
profile: 'Teamsworld ist ein cloudbasierter Fertigungspartner, der globale Mobilitätsinnovatoren mit hochwertigen geschmiedeten, druckgegossenen und präzisionsbearbeiteten Komponenten verbindet. Das Unternehmen bietet flexible, skalierbare und kosteneffiziente Lösungen für Tier-1- und Tier-2-Zulieferer weltweit. Als zertifiziertes B Corporation-Unternehmen mit ESG-Fokus stehen wir für verantwortungsvolle Fertigung, transparente Prozesse und nachhaltige Wertschöpfung.',
themes: [],
address: '2F., No. 26, Qingcheng St., Songshan Dist., Taipei 10547, Taiwan (Chinesisch-Taipeh)',
website: 'www.teamsworld.com/',
emails: ['hello@twiio.com', 'alice11310@twiio.com']
},
{
id: 'technik-in-form-blechbearbeitung-gmbh',
name: 'Technik in Form Blechbearbeitung GmbH',
keywords: ['prototypenfertigung', 'kleinserienfertigung', 'serienauslaufproduktion', 'ersatzteilproduktion', 'blechumformung', 'blechbearbeitung', 'konzeptteile', 'versuchsteile', 'rohbau', 'karosserie', 'fahrwerk', 'sitzteile', 'batteriegehäusekomponenten', 'hydraulische pressen', 'lasermaschinen', 'schweißroboter', 'handlingsroboter', 'messtechnik', 'werkzeugbau', 'drehteile', 'frästeile', 'konstruktionsabteilung', 'vorrichtungen', 'messaufnahmen', 'lehren', 'automotive'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D27'
},
role: 'Mitaussteller',
profile: 'Als ISO 9001 zertifizierter Systemlieferant entwickeln, fertigen und liefern wir ein komplettes Leistungsspektrum für den Prototypen- und Kleinserienbau. Spezialisiert auf die Blechumformung und -bearbeitung bieten wir unseren Kunden Konzept- und Versuchsteile sowie Kleinserienfertigung an. Zu unseren Kernkompetenzen gehören komplexe Einzelteile und hochwertige modulare Baugruppen aus den Bereichen Rohbau/Karosse, Fahrwerk und Sitzteile sowie Batteriegehäusekomponenten.',
themes: ['Automotive'],
address: 'Werner-von-Siemens-Str. 2, 37308 Heilbad Heiligenstadt, Deutschland',
website: 'www.technikinform.de',
emails: ['info@technikinform.de']
},
{
id: 'technische-hochschule-ingolstadt',
name: 'Technische Hochschule Ingolstadt',
keywords: ['hochschule', 'mobilität', 'wirtschaftsregion', 'ingolstadt', 'open space', 'bildung', 'forschung', 'innovation', 'technologie', 'wissenschaft', 'kooperation', 'entwicklung', 'zukunft', 'nachhaltigkeit', 'digitalisierung'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS430'
},
role: 'Mitaussteller',
profile: 'Die Technische Hochschule Ingolstadt ist eine führende Bildungseinrichtung in der Mobilitäts- und Wirtschaftsregion Ingolstadt. Sie bietet innovative Studiengänge und engagiert sich in Forschung und Entwicklung. Die Hochschule fördert Kooperationen mit der Industrie und setzt auf Nachhaltigkeit und Digitalisierung.',
themes: [],
address: 'Esplanade 10, 85049 Ingolstadt, Deutschland',
website: 'www.thi.de',
emails: []
},
{
id: 'technische-hochschule-ingolstadt',
name: 'Technische Hochschule Ingolstadt',
keywords: ['hochschule', 'mobilität', 'wirtschaftsregion', 'ingolstadt', 'open space', 'bildung', 'forschung', 'innovation', 'technologie', 'wissenschaft', 'lehre', 'kooperation', 'entwicklung', 'zukunft', 'nachhaltigkeit'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS430'
},
role: 'Mitaussteller',
profile: 'Die Technische Hochschule Ingolstadt ist eine Hochschule, die sich auf Mobilität und Wirtschaftsregionen spezialisiert hat. Sie bietet Bildung und Forschung in den Bereichen Technologie und Innovation. Die Hochschule fördert Kooperationen und nachhaltige Entwicklungen.',
themes: [],
address: 'Esplanade 10, 85049 Ingolstadt, Deutschland',
website: 'www.thi.de',
emails: []
},
{
id: 'technologiezentrum-energie-der-hochschule-landshut',
name: 'Technologiezentrum Energie der Hochschule Landshut',
keywords: ['elektroladeinfrastruktur', 'speicher', 'v2g', 'ki', 'omei', 'forschungsprojekt', 'nachhaltige energie', 'e-ladekonzept', 'erneuerbare energie', 'energie', 'dekarbonisierung', 'battery tech', 'charging and refueling infrastructure', 'energy grid'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B13'
},
role: 'Mitaussteller',
profile: 'OMEI (Open Mobility Electric Infrastructure) – ein Datenbasiertes Forschungsprojekt für einen gesamtheitlichen Lösungsansatz zum Aufbau einer nachhaltigen Elektroladeinfrastruktur. Mit einem Team aus starken Akteuren im Bereich Energie hat sich das Projekt zum Ziel gesetzt, die Entwicklung einer modernen, sauberen und effizienten Elektroladeinfrastruktur zu unterstützen, auch unter Einbeziehung von Künstlicher Intelligenz. Unter der Leitung der Hochschule Landshut mit dem Technologiezentrum Energie wird hierzu im Projekt OMEI eine umfassende, frei zugängliche Datengrundlage aufgebaut und ein E-Ladekonzept mit nachhaltigem Speichersystem und Nutzung regionaler, erneuerbarer Energie entwickelt.',
themes: ['Charging and Refueling Infrastructure incl. Energy Grid', 'Decarbonization', 'Battery Tech'],
address: 'Wiesenweg 1, 94099 Ruhstorf an der Rott, Deutschland',
website: 'www.haw-landshut.de',
emails: ['tze-info@haw-landshut.de', 'robert.hahn@haw-landshut.de']
},
{
id: 'technologiezentrum-energie-der-hochschule-landshut',
name: 'Technologiezentrum Energie der Hochschule Landshut',
keywords: ['elektroladeinfrastruktur', 'speicher', 'v2g', 'ki', 'omei', 'forschungsprojekt', 'nachhaltige energie', 'e-ladekonzept', 'erneuerbare energie', 'energie', 'dekarbonisierung', 'battery tech', 'charging and refueling infrastructure', 'energy grid'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B13'
},
role: 'Mitaussteller',
profile: 'OMEI (Open Mobility Electric Infrastructure) – ein Datenbasiertes Forschungsprojekt für einen gesamtheitlichen Lösungsansatz zum Aufbau einer nachhaltigen Elektroladeinfrastruktur. Mit einem Team aus starken Akteuren im Bereich Energie hat sich das Projekt zum Ziel gesetzt, die Entwicklung einer modernen, sauberen und effizienten Elektroladeinfrastruktur zu unterstützen, auch unter Einbeziehung von Künstlicher Intelligenz. Unter der Leitung der Hochschule Landshut mit dem Technologiezentrum Energie wird hierzu im Projekt OMEI eine umfassende, frei zugängliche Datengrundlage aufgebaut und ein E-Ladekonzept mit nachhaltigem Speichersystem und Nutzung regionaler, erneuerbarer Energie entwickelt.',
themes: ['Charging and Refueling Infrastructure incl. Energy Grid', 'Decarbonization', 'Battery Tech'],
address: 'Wiesenweg 1, 94099 Ruhstorf an der Rott, Deutschland',
website: 'www.haw-landshut.de',
emails: ['tze-info@haw-landshut.de', 'robert.hahn@haw-landshut.de']
},
{
id: 'telenor-iot',
name: 'Telenor IoT',
keywords: ['iot connectivity', 'global partner', 'automotive connectivity', 'managed connectivity', 'digital car', 'ai-driven insights', 'automotive-grade reliability', 'regulatory expertise', 'connected car', 'end-user experiences', 'connectivity', 'iot', 'big data'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D03'
},
role: 'Hauptaussteller',
profile: 'Telenor IoT is the portfolio of IoT solutions from Telenor Group, one of the world’s major mobile operators. With 20+ years of experience and powering 25M+ devices globally, Telenor IoT is a top-tier provider of managed connectivity for the automotive sector. We deliver reliable, secure, and compliant solutions for the digital car.',
themes: ['Connectivity, IoT & Big Data'],
address: 'Garvis Carlssons Gata 3, 169 41 Solna, Schweden',
website: 'https://iot.telenor.com',
emails: ['hello@telenorconnexion.com', 'vikram.datar@telenorconnexion.com', 'suvi.krook@telenorconnexion.com']
},
{
id: 'telenor-iot',
name: 'Telenor IoT',
keywords: ['iot connectivity', 'global iot solutions', 'automotive connectivity', 'managed connectivity', 'digital car solutions', 'ai-driven insights', 'automotive-grade reliability', 'regulatory expertise', 'connected car', 'end-user experiences', 'secure solutions', 'compliant solutions', 'telenor group', 'mobile operators', '25m devices'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D03'
},
role: 'Hauptaussteller',
profile: 'Telenor IoT is the portfolio of IoT solutions from Telenor Group, one of the world’s major mobile operators. With 20+ years of experience and powering 25M+ devices globally, Telenor IoT is a top-tier provider of managed connectivity for the automotive sector. We deliver reliable, secure, and compliant solutions for the digital car.',
themes: ['Connectivity, IoT & Big Data'],
address: 'Garvis Carlssons Gata 3, 169 41 Solna, Schweden',
website: 'https://iot.telenor.com',
emails: ['hello@telenorconnexion.com', 'vikram.datar@telenorconnexion.com', 'suvi.krook@telenorconnexion.com']
},
{
id: 'bmw-group',
name: 'BMW GROUP',
keywords: ['automotive', 'test drives', 'family', 'mobility', 'innovation', 'vehicles', 'transportation', 'open space', 'summit', 'exhibitor', 'main exhibitor', 'cars', 'technology', 'solutions', 'future mobility'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'E01'
},
role: 'Hauptaussteller',
profile: 'BMW GROUP is a leading automotive company offering innovative solutions in mobility and transportation. They provide test drives and family-friendly experiences at the IAA MOBILITY.',
themes: [],
address: '80809 München, Deutschland',
website: undefined,
emails: []
},
{
id: 't-global-technology-co-ltd',
name: 'T-GLOBAL TECHNOLOGY CO., LTD',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C01'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'No. 33, Ln. 50, Daren Rd., Taoyuan Dist., Taoyuan City 330058, Taiwan (Chinesisch-Taipeh)',
website: 'www.tglobalcorp.com',
emails: []
},
{
id: 'the-boston-consulting-group-gmbh',
name: 'The Boston Consulting Group GmbH',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: "",
booth: ""
},
role: 'Partner',
profile: '',
themes: [],
address: 'Ludwigstr. 21, 80539 München, Deutschland',
website: 'www.bcg.de',
emails: []
},
{
id: 'the-exploration-company',
name: 'The Exploration Company',
keywords: ['raumfahrzeuge', 'kooperative zukunft', 'nyx-familie', 'nachhaltiger zugang', 'erdumlaufbahn', 'modulare orbitalfahrzeuge', 'wiederverwendbare orbitalfahrzeuge', 'frachtlieferung', 'raumstationen', 'satellitenwartung', 'umlaufbahndemonstrationen', 'mondlogistik', 'kommerzieller raumfahrtanbieter', 'raumfahrtmobilität', 'weltraumforschung', 'nachhaltigkeit', 'kommerziell tragfähig', 'mobilitätsanbieter'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B11'
},
role: 'Mitaussteller',
profile: 'The Exploration Company entwickelt, baut und betreibt die Nyx-Familie von Raumfahrzeugen, die einen nachhaltigen und erschwinglichen Zugang zur niedrigen Erdumlaufbahn und darüber hinaus ermöglichen. Unsere modularen und wiederverwendbaren Orbitalfahrzeuge dienen einem breiten Spektrum von Missionen: von der Frachtlieferung zu Raumstationen und der Wartung von Satelliten bis hin zu Demonstrationen in der Umlaufbahn und Mondlogistik. Als Europas führender kommerzieller Raumfahrtanbieter arbeiten wir eng mit öffentlichen Einrichtungen, privaten Unternehmen und internationalen Partnern zusammen, um die Zukunft der Raumfahrtmobilität voranzutreiben.',
themes: [],
address: 'Behringstraße 6, 82152 Planegg, Deutschland',
website: undefined,
emails: ['fotios.kotzakioulafis@exploration.space']
},
{
id: 'th-ingolstadt-carissma-projekt-kicsafe',
name: 'TH Ingolstadt - CARISSMA - Projekt KICSAFe',
keywords: ['vorausschauende unfallerkennung', 'fahrzeugsicherheit', 'ki-mobilitätsknoten', 'indoor-versuchsanlage', 'sensortypen', 'körperschall-crashsensor', 'crash impact sound sensing', 'vision zero', 'automotive', 'software defined vehicles', 'autonomous driving', 'ai', 'genai', 'future drive technologies', 'h2'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS435'
},
role: 'Mitaussteller',
profile: 'Die Technische Hochschule Ingolstadt (THI) ist eine führende Mobilitätshochschule mit über 8.100 Studierenden und 900 Mitarbeitenden. CARISSMA ist das Leitzentrum für Fahrzeugsicherheit mit über 110 Wissenschaftler:innen und 16 Professor:innen. Das CARISSMA Institute of Safety in Future Mobility (C-ISAFE) fokussiert sich auf vorausschauende Unfallerkennung und -folgenminderung.',
themes: ['Automotive', 'Software Defined Vehicles', 'Autonomous Driving', 'AI & GenAI', 'Future Drive Technologies incl. H2'],
address: 'Esplanade 10, 85049 Ingolstadt, Deutschland',
website: 'www.thi.de',
emails: ['info@thi.de', 'fatih.sezgin@carissma.eu', 'maximilian.inderst@carissma.eu', 'thomas.brandmeier@thi.de']
},
{
id: 'th-ingolstadt-carissma-projekt-kicsafe',
name: 'TH Ingolstadt - CARISSMA - Projekt KICSAFe',
keywords: ['vorausschauende unfallerkennung', 'fahrzeugsicherheit', 'ki-mobilitätsknoten', 'indoor-versuchsanlage', 'sensortypen', 'körperschall-crashsensor', 'crash impact sound sensing', 'vision zero', 'automotive', 'software defined vehicles', 'autonomous driving', 'ai', 'genai', 'future drive technologies', 'h2'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS435'
},
role: 'Mitaussteller',
profile: 'Die Technische Hochschule Ingolstadt (THI) ist eine führende Mobilitätshochschule mit über 8.100 Studierenden und 900 Mitarbeitenden. CARISSMA ist das Leitzentrum für Fahrzeugsicherheit mit über 110 Wissenschaftler:innen und 16 Professor:innen. Das CARISSMA Institute of Safety in Future Mobility (C-ISAFE) fokussiert sich auf vorausschauende Unfallerkennung und -folgenminderung.',
themes: ['Automotive', 'Software Defined Vehicles', 'Autonomous Driving', 'AI & GenAI', 'Future Drive Technologies incl. H2'],
address: 'Esplanade 10, 85049 Ingolstadt, Deutschland',
website: 'www.thi.de',
emails: ['info@thi.de', 'fatih.sezgin@carissma.eu', 'maximilian.inderst@carissma.eu', 'thomas.brandmeier@thi.de']
},
{
id: 'thunder-software-technology-co-ltd',
name: 'Thunder Software Technology Co., Ltd.',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'B02'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Building3, No.9 QingHua Dong Road, 100083 Beijing, China',
website: 'www.thundersoft.com',
emails: []
},
{
id: 'thunder-software-technology-co-ltd',
name: 'Thunder Software Technology Co., Ltd.',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'B02'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Building3, No.9 QingHua Dong Road, 100083 Beijing, China',
website: 'www.thundersoft.com',
emails: []
},
{
id: 'tianhai-auto-electronics-group',
name: 'Tianhai Auto Electronics Group',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D23'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'No.003, Songjiang Road, Hebi, Henan, China, 458030 Hebi, China',
website: 'www.thb.com.cn',
emails: []
},
{
id: 'ticketmate-gmbh',
name: 'Ticketmate GmbH',
keywords: ['strafzettel management', 'mobilitätsdienstleister', 'fuhrparkmanager', 'unternehmen', 'ki-basierte plattform', 'behördenmitteilung', 'kamerabasierte parkraumüberwachung', 'automatisierte abrechnung', 'vertragsstrafen', 'unerlaubte parkraumnutzung', 'automotive', 'charging and refueling infrastructure incl. energy grid'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D121'
},
role: 'Hauptaussteller',
profile: 'Ticketmate bietet eine vollautomatisierte Lösung für das Management von Strafzetteln für Mobilitätsdienstleister, Fuhrparkmanager und Unternehmen. Unsere KI-basierte Plattform garantiert eine 100%ige Erkennungsquote relevanter Daten und sorgt für eine rechtssichere Behördenmitteilung. Außerdem bietet Ticketmate eine einfache und unkomplizierte, kamerabasierte Parkraum Überwachung mit automatisierter Abrechnung von Vertragsstrafen bei unerlaubter Parkraum Nutzung.',
themes: ['Automotive', 'Charging and Refueling Infrastructure incl. Energy Grid'],
address: 'Konrad-Zuse-Bogen 22, 82152 Krailling, Deutschland',
website: 'www.ticket-mate.com',
emails: ['heinz.schmutzler@ticketmate.com', 'bernd.schoepplein@ticket-mate.com']
},
{
id: 'ticketmate-gmbh',
name: 'Ticketmate GmbH',
keywords: ['strafzettel management', 'mobilitätsdienstleister', 'fuhrparkmanager', 'unternehmen', 'ki-basierte plattform', 'behördenmitteilung', 'kamerabasierte parkraumüberwachung', 'automatisierte abrechnung', 'vertragsstrafen', 'unerlaubte parkraumnutzung', 'automotive', 'charging and refueling infrastructure', 'energy grid'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D121'
},
role: 'Hauptaussteller',
profile: 'Ticketmate bietet eine vollautomatisierte Lösung für das Management von Strafzetteln für Mobilitätsdienstleister, Fuhrparkmanager und Unternehmen. Unsere KI-basierte Plattform garantiert eine 100%ige Erkennungsquote relevanter Daten und sorgt für eine rechtssichere Behördenmitteilung. Außerdem bietet Ticketmate eine einfache und unkomplizierte, kamerabasierte Parkraum Überwachung mit automatisierter Abrechnung von Vertragsstrafen bei unerlaubter Parkraum Nutzung.',
themes: ['Automotive', 'Charging and Refueling Infrastructure incl. Energy Grid'],
address: 'Konrad-Zuse-Bogen 22, 82152 Krailling, Deutschland',
website: 'www.ticket-mate.com',
emails: ['heinz.schmutzler@ticketmate.com', 'bernd.schoepplein@ticket-mate.com']
},
{
id: 'togg',
name: 'Togg',
keywords: ['global mobility brand', 'electric vehicles', 'connected vehicles', 'mobility ecosystem', 'zero emissions', 'automotive', 'mobility as a service', 'decarbonization', 'software defined vehicles', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C40'
},
role: 'Hauptaussteller',
profile: 'Togg was founded on June 25, 2018 in partnership with Anadolu Group, BMC, the Union of Chambers and Commodity Exchanges of Turkey, Zorlu Group, and Turkcell, which joined forces with the goal of creating a global mobility brand holding intellectual property rights. Togg designs electric and connected vehicles and builds a mobility ecosystem around them. Togg is the technology company of the future that aims to make life easier for the masses through this ecosystem and to create a sustainable future with zero emissions.',
themes: ['Automotive', 'Mobility as a Service', 'Decarbonization', 'Software Defined Vehicles', 'AI & GenAI'],
address: 'Bilisim Vadisi, Muaillimköy Mahallesi Deniz Caddesi No:143/1, Gebze, 41400 Kocaeli, Türkei',
website: 'www.togg.com.tr',
emails: []
},
{
id: 'tomtom-location-technology',
name: 'TomTom Location Technology',
keywords: ['location data', 'location technology', 'drivers', 'carmakers', 'businesses', 'developers', 'maps', 'routing', 'real-time traffic', 'apis', 'sdks', 'mobility', 'smart city mobility', 'road safety', 'automotive'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C30'
},
role: 'Mitaussteller',
profile: 'We are the mapmaker bringing it all together to build the world’s smartest map. We provide location data and technology to drivers, carmakers, businesses and developers. Our application-ready maps, routing, real-time traffic, APIs and SDKs empower the dreamers and doers to move our world forward.',
themes: ['Automotive', 'Smart City Mobility', 'Road Safety'],
address: 'Alexanderstraße 36, 10179 Berlin, Deutschland',
website: 'www.tomtom.com',
emails: []
},
{
id: 'tomtom-international-bv',
name: 'TomTom International BV',
keywords: ['maps', 'location data', 'technology', 'drivers', 'carmakers', 'businesses', 'developers', 'application-ready maps', 'routing', 'real-time traffic', 'apis', 'sdks', 'mobility', 'automotive', 'road safety', 'future drive technologies'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'A30'
},
role: 'Hauptaussteller',
profile: 'We are the mapmaker bringing it all together to build the world’s smartest map. We provide location data and technology to drivers, carmakers, businesses and developers. Our application-ready maps, routing, real-time traffic, APIs and SDKs empower the dreamers and doers to move our world forward.',
themes: ['Automotive', 'Road Safety', 'Future Drive Technologies incl. H2'],
address: 'De Ruijterkade 154, 1011 AC Amsterdam, Niederlande',
website: 'www.tomtom.com',
emails: []
},
{
id: 'toray-industries-europe-gmbh',
name: 'Toray Industries Europe GmbH',
keywords: [],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP110'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Am Gfild 6, 85375 Neufahrn bei Freising, Deutschland',
website: 'www.toray.eu/de/europe/network/teu/index.html',
emails: []
},
{
id: 'total-safety-solutions',
name: 'Total Safety Solutions',
keywords: ['sicherheitsprodukte', 'schulungen', 'einsatzkräfte', 'kfz-techniker', 'elektrofahrzeuge', 'hybridfahrzeuge', 'patentierte werkzeuge', 'fachwissen', 'globale partnerschaften', 'road safety', 'automotive', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: 'TSS entwickelt innovative Sicherheitsprodukte und Schulungen für Einsatzkräfte und Kfz-Techniker. Seit unserer Gründung in Oisterwijk sind wir zu einem vertrauenswürdigen Partner für Fachleute geworden, die mit Elektro- und Hybridfahrzeugen arbeiten. Mit patentierten Werkzeugen, fundiertem Fachwissen und globalen Partnerschaften tragen wir dazu bei, komplexe und risikoreiche Arbeiten sicherer zu machen – ob auf der Straße oder in der Werkstatt.',
themes: ['Automotive', 'Road Safety', 'Supplier'],
address: 'Laarakkerweg 8, 5061 JR Oisterwijk, Niederlande',
website: 'www.totalsafetysolutions.nl',
emails: ['info@totalsafetysolutions.nl', 'mass@totalsafetysolutions.nl', 'janwijnans@totalsafetysolutions.nl']
},
{
id: 'total-safety-solutions',
name: 'Total Safety Solutions',
keywords: ['sicherheitsprodukte', 'schulungen', 'einsatzkräfte', 'kfz-techniker', 'elektrofahrzeuge', 'hybridfahrzeuge', 'patentierte werkzeuge', 'fachwissen', 'globale partnerschaften', 'road safety', 'automotive', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: 'TSS entwickelt innovative Sicherheitsprodukte und Schulungen für Einsatzkräfte und Kfz-Techniker. Seit unserer Gründung in Oisterwijk sind wir zu einem vertrauenswürdigen Partner für Fachleute geworden, die mit Elektro- und Hybridfahrzeugen arbeiten. Mit patentierten Werkzeugen, fundiertem Fachwissen und globalen Partnerschaften tragen wir dazu bei, komplexe und risikoreiche Arbeiten sicherer zu machen – ob auf der Straße oder in der Werkstatt.',
themes: ['Automotive', 'Road Safety', 'Supplier'],
address: 'Laarakkerweg 8, 5061 JR Oisterwijk, Niederlande',
website: 'www.totalsafetysolutions.nl',
emails: ['info@totalsafetysolutions.nl', 'mass@totalsafetysolutions.nl', 'janwijnans@totalsafetysolutions.nl']
},
{
id: 'transatel',
name: 'Transatel',
keywords: ['cellular iot connectivity', 'mobile virtual network operators enabler', 'm2m connectivity', 'connectivity management platform', 'lte-m', '3g', '4g', '5g', 'esim', 'global cellular data connectivity', 'international travelers', 'distributed workforce', 'automotive', 'software defined vehicles', 'connectivity', 'iot', 'big data', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C05'
},
role: 'Hauptaussteller',
profile: 'Transatel is a global cellular IoT connectivity solutions provider and a leading Mobile Virtual Network Operators Enabler with over 120 MVNO managed on its own full core network. Pioneer of M2M connectivity, we simplify worldwide IoT deployments through a single integration to our connectivity management platform by leveraging LTE-M, 3G, 4G, and 5G network access agreements with 300+ international mobile carriers and regional infrastructures. Transatel’s global (e)SIM securely connects millions of vehicles, industrial and consumer devices to public and private cellular networks across the world.',
themes: ['Automotive', 'Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'AI & GenAI'],
address: 'Tour CBX - 1 Passerelle des Reflets, 92913 PARIS La Défense CEDEX, Frankreich',
website: undefined,
emails: ['lea.jaffarbandjee@transatel.com']
},
{
id: 'transatel',
name: 'Transatel',
keywords: ['cellular iot connectivity', 'mobile virtual network operators enabler', 'm2m connectivity', 'connectivity management platform', 'lte-m', '3g', '4g', '5g', 'international mobile carriers', 'esim', 'global cellular data connectivity', 'international travelers', 'distributed workforce', 'ubigi esim', 'automotive', 'software defined vehicles', 'connectivity', 'iot', 'big data', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C05'
},
role: 'Hauptaussteller',
profile: 'Transatel is a global cellular IoT connectivity solutions provider and a leading Mobile Virtual Network Operators Enabler with over 120 MVNO managed on its own full core network. Pioneer of M2M connectivity, Transatel simplifies worldwide IoT deployments through a single integration to its connectivity management platform by leveraging LTE-M, 3G, 4G, and 5G network access agreements with 300+ international mobile carriers and regional infrastructures. Transatel’s global (e)SIM securely connects millions of vehicles, industrial and consumer devices to public and private cellular networks across the world.',
themes: ['Automotive', 'Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'AI & GenAI'],
address: 'Tour CBX - 1 Passerelle des Reflets, 92913 PARIS La Défense CEDEX, Frankreich',
website: undefined,
emails: ['lea.jaffarbandjee@transatel.com']
},
{
id: 'transformation-bei-bayern-innovativ',
name: 'Transformation bei Bayern Innovativ',
keywords: ['beratung', 'netzwerke', 'transformationslotse', 'technologische weiterentwicklung', 'strategische weiterentwicklung', 'automotive', 'cycling', 'lev', 'micromobility', 'public transport', 'mobility on demand', 'mobility as a service', 'intermodality', 'smart city mobility', 'smart country mobility', 'charging and refueling infrastructure', 'road safety', 'circular economy', 'decarbonization', 'regulation', 'liability', 'esgs', 'manufacturing', 'supply chain', 'inclusion', 'international trade', 'markets', 'mining', 'raw materials', 'supplier', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'semiconductors', 'chips', 'battery tech', 'cybersecurity', 'remote-controlled vehicles', 'entertainment', 'vr', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B11'
},
role: 'Mitaussteller',
profile: 'Wir begleiten Ihr Unternehmen in herausfordernden Zeiten durch den Wandel. Unser Transformationslotse bietet eine persönliche sowie neutrale Anlaufstelle für technologische und strategische Weiterentwicklung.',
themes: ['Automotive', 'Cycling', 'LEV', 'Micromobility', 'Public Transport', 'Mobility on demand', 'Mobility as a Service', 'Intermodality', 'Smart City Mobility', 'Smart Country Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Road Safety', 'Circular Economy', 'Decarbonization', 'Regulation, Liability & ESGs', 'Manufacturing & Supply Chain', 'Inclusion', 'International Trade and Markets', 'Mining and Handling of Raw Materials', 'Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Semiconductors & Chips', 'Battery Tech', 'Cybersecurity', 'Remote-Controlled Vehicles', 'Entertainment & VR', 'Future Drive Technologies incl. H2'],
address: 'Am Technologiezentrum 5, 86159 Augsburg, Deutschland',
website: 'www.bayern-innovativ.de',
emails: ['presse@bayern-innovativ.de', 'sebastian.transiskus@bayern-innovativ.de']
},
{
id: 'transform-r-transformation-der-automobilindustrie-in-der-region-regensburg',
name: 'transform.r - Transformation der Automobilindustrie in der Region Regensburg',
keywords: ['automobilindustrie', 'qualifizierung', 'kooperation', 'vernetzung', 'fachkraefte', 'regensburg', 'trainings', 'technologiebezogen', 'praxisnah', 'wissenstransfer', 'strategiedialog', 'fachforen', 'workshops', 'dialogformate', 'transformation', 'automotive', 'smart city mobility', 'circular economy', 'decarbonization', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E11'
},
role: 'Mitaussteller',
profile: 'Wir unterstützen Unternehmen der Automobilindustrie mit zahlreichen neuen Qualifizierungs-, Kooperations- und Vernetzungsangeboten zur Sicherung der Fachkräfte in der Region Regensburg!',
themes: ['Automotive', 'Smart City Mobility', 'Circular Economy', 'Decarbonization', 'Future Drive Technologies incl. H2'],
address: 'Franz-Mayer-Str. 1, 93053 Regensburg, Deutschland',
website: 'www.transform-r.de',
emails: ['maria.hirschberger@techbase.de']
},
{
id: 'trescal-zoetermeer-bv',
name: 'Trescal Zoetermeer B.V.',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Storkstraat 2-4, 2722 NN Zoetermeer, Niederlande',
website: 'www.trescal.com',
emails: []
},
{
id: 'trinamix-gmbh',
name: 'trinamiX GmbH',
keywords: ['biometric imaging', 'face authentication', 'vitalzeichen monitoring', 'biomarker-analyse', 'spektroskopie', 'blutalkoholgehalt erkennung', 'unterhaltungselektronik', 'automobildesign', 'sicherheit', 'entscheidungsfindung', 'hightech', 'supplier', 'software defined vehicles', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Die trinamiX GmbH entwickelt zukunftsweisende Biometrie- und mobile Spektroskopie-Lösungen. Diese finden sowohl in der Unterhaltungselektronik als auch im Automobildesign Anwendung. Die Produkte des Hightech-Unternehmens ermöglichen es Mensch und Maschine, die Welt zu erfassen und zu verstehen – für mehr Sicherheit und eine bessere Entscheidungsfindung.',
themes: ['Supplier', 'Software Defined Vehicles', 'AI & GenAI'],
address: 'Industriestraße 35, 67063 Ludwigshafen, Deutschland',
website: 'www.trinamiXsensing.com',
emails: ['nicole.messmer-pohan@trinamix.de', 'vera.kockler@trinamix.de', 'sharat.ravi-shankar@trinamix.de']
},
{
id: 'tsingcar-beijing-technology-co-ltd',
name: 'Tsingcar (Beijing) Technology Co., Ltd.',
keywords: ['uwb-technologie', 'fahrzeuge', 'sensortechnik', 'kernalgorithmen', 'intelligente fahrzeuge', 'vernetzte fahrzeuge', 'car connectivity consortium', 'icce-standard', 'digitale schlüssel', 'iccoa-technikanforderungen', 'uwb-ortung', 'komfort', 'sicherheit', 'automotive', 'smart city mobility', 'supplier', 'connectivity', 'iot', 'big data', 'semiconductors', 'chips'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D125'
},
role: 'Hauptaussteller',
profile: 'Tsingcar (Beijing) Technology Co., Ltd ist ein führender Anbieter und Vorreiter der UWB-Technologie für Fahrzeuge. Mit innovativer Sensortechnik und Kernalgorithmen ermöglichen wir intelligente, vernetzte Fahrzeuge. Als Technologieführer verfügt Tsingcar über weltweit führendes UWB-Know-how.',
themes: ['Automotive', 'Smart City Mobility', 'Supplier', 'Connectivity, IoT & Big Data', 'Semiconductors & Chips'],
address: 'Floor 10, Tower A, Tsinghua Science Park Innovation Building, HaiDian District, 100000 Beijing, China',
website: 'www.tsingcar.cn/en',
emails: ['kelly@tsingoal.com', 'darren.liu@tsingcar.cn']
},
{
id: 'tsingcar-beijing-technology-co-ltd',
name: 'Tsingcar (Beijing) Technology Co., Ltd.',
keywords: ['uwb-technologie', 'fahrzeuge', 'sensortechnik', 'kernalgorithmen', 'intelligente fahrzeuge', 'vernetzte fahrzeuge', 'car connectivity consortium', 'icce-standard', 'digitale schlüssel', 'iccoa-technikanforderungen', 'uwb-ortung', 'komfort', 'sicherheit', 'automotive', 'smart city mobility', 'supplier', 'connectivity', 'iot', 'big data', 'semiconductors', 'chips'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D125'
},
role: 'Hauptaussteller',
profile: 'Tsingcar (Beijing) Technology Co., Ltd ist ein führender Anbieter und Vorreiter der UWB-Technologie für Fahrzeuge. Mit innovativer Sensortechnik und Kernalgorithmen ermöglichen wir intelligente, vernetzte Fahrzeuge. Als Technologieführer verfügt Tsingcar über weltweit führendes UWB-Know-how.',
themes: ['Automotive', 'Smart City Mobility', 'Supplier', 'Connectivity, IoT & Big Data', 'Semiconductors & Chips'],
address: 'Floor 10, Tower A, Tsinghua Science Park Innovation Building, HaiDian District, 100000 Beijing, China',
website: 'www.tsingcar.cn/en',
emails: ['kelly@tsingoal.com', 'darren.liu@tsingcar.cn']
},
{
id: 'tsubaki-deutschland-gmbh',
name: 'Tsubaki Deutschland GmbH',
keywords: ['kupplungen', 'ketten', 'mobilität', 'steuerkettensysteme', 'automobilhersteller', 'e-mobilität', 'parksperre', 'auskuppelsystem', 'drehmomentbegrenzungsfunktion', 'steuertriebketten', 'weltmarktführer', 'maßgeschneiderte lösungen', 'e-achsen', 'fahrradketten', 'automotive', 'lev', 'micromobility', 'public transport'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C40'
},
role: 'Hauptaussteller',
profile: 'TSUBAKI wurde im Jahr 1917 als Hersteller von Fahrradketten gegründet. Seitdem haben wir die Kettentechnologie weiterentwickelt und das Unternehmen vergrößert. Wir liefern Steuerkettensysteme an Automobilhersteller in der ganzen Welt.',
themes: ['Automotive', 'LEV', 'Micromobility', 'Public Transport'],
address: 'Oskar-Messter-Strasse 33, 85737 Ismaning, Deutschland',
website: 'www.tsubaki.com',
emails: ['contact@tsubaki-auto.de', 'info@tsubaki.cz']
},
{
id: 'bmw-group',
name: 'BMW GROUP',
keywords: ['automobile', 'test drives', 'family', 'mobility', 'automotive industry', 'innovation', 'open space', 'summit', 'hauptaussteller'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'E01'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: '80809 München, Deutschland',
website: undefined,
emails: []
},
{
id: 'yulchon-korea-mexico-poland',
name: 'Yulchon Korea, Mexico, Poland',
keywords: ['gezogene stahlrohre', 'dom-rohre', 'kfz-komponenten', 'lenksäulen', 'zahnstangenlenkungen', 'kardanwellen', 'gaszylinder', 'gasfedern', 'hydraulikzylinder', 'stoßdämpfer', 'buchsen', 'automobilindustrie', 'profilrohre', 'möbelindustrie', 'bauindustrie', 'technologieentwicklung', 'qualitätsverbesserung', 'export', 'globaler markt', 'dom-rohre-hersteller'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'C16'
},
role: 'Hauptaussteller',
profile: 'YULCHON ist ein spezialisierter Hersteller von kaltgezogenen Stahlrohren (DOM-Rohre) für verschiedene Anwendungen in der Automobil-, Möbel- und Bauindustrie. Seit 1986 investieren wir kontinuierlich in Technologieentwicklung und Qualitätsverbesserung. Unser Ziel ist es, der weltweit führende DOM-Rohre-Hersteller zu sein.',
themes: ['Automotive'],
address: '192, Gongdan 2-daero, Siheung-si 15102, Südkorea (KR)',
website: 'www.ycpipe.com',
emails: ['braeden@ycpipe.com', 'tina@ycpipe.com']
},
{
id: 'uae-parts-spare-parts',
name: 'UAE Parts Spare Parts',
keywords: ['spare parts', 'automotive', 'uae', 'summit', 'hauptaussteller'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D103'
},
role: 'Hauptaussteller',
profile: 'UAE Parts Spare Parts ist ein führender Anbieter von Ersatzteilen mit Sitz in Dubai, Vereinigte Arabische Emirate.',
themes: [],
address: 'Office No. 04 MF owned by Bushra Obaid Mohammed Al Mansouri Naif, 48885 Dubai, Vereinigte Arabische Emirate',
website: 'www.uae-part.com',
emails: []
},
{
id: 'udenco-bv',
name: 'Udenco B.V.',
keywords: ['ev-ladelösungen', 'ac/dc', 'v2g', 'modulare lösungen', 'white-label', 'private-label', 'ac-ladesysteme', 'dc-lösungen', 'flüssigkeitsgekühlte systeme', 'modulare designs', 'kosteneffiziente fertigung', 'e-mobilität', 'automotive', 'charging and refueling infrastructure incl. energy grid'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: 'Udenco bietet White-Label- und Private-Label-Ladelösungen für Elektrofahrzeuge, mit denen Unternehmen modernste Ladeinfrastruktur unter ihrer eigenen Marke integrieren und vermarkten können. Unser Produktportfolio umfasst AC-Ladesysteme bis 22 kW mit V2G- und V2H-Funktionen sowie DC-Lösungen von 7 kW bis in den Megawattbereich. Darüber hinaus bieten wir innovative Technologien wie vollständig flüssigkeitsgekühlte Systeme und modulare Designs.',
themes: ['Automotive', 'Charging and Refueling Infrastructure incl. Energy Grid'],
address: 'Park Forum 420, 5657 HD Eindhoven, Niederlande',
website: 'www.udenco.com',
emails: ['nick.kohler@udenco.com']
},
{
id: 'udenco-bv',
name: 'Udenco B.V.',
keywords: ['ev-ladelösungen', 'ac/dc', 'v2g', 'modulare lösungen', 'white-label', 'private-label', 'ac-ladesysteme', 'dc-lösungen', 'flüssigkeitsgekühlte systeme', 'modulare designs', 'kosteneffiziente fertigung', 'e-mobilität', 'elektrofahrzeuge', 'ladeinfrastruktur', 'v2h-funktionen'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: 'Udenco bietet White-Label- und Private-Label-Ladelösungen für Elektrofahrzeuge, mit denen Unternehmen modernste Ladeinfrastruktur unter ihrer eigenen Marke integrieren und vermarkten können. Unser Produktportfolio umfasst AC-Ladesysteme bis 22 kW mit V2G- und V2H-Funktionen sowie DC-Lösungen von 7 kW bis in den Megawattbereich. Darüber hinaus bieten wir innovative Technologien wie vollständig flüssigkeitsgekühlte Systeme und modulare Designs.',
themes: ['Automotive', 'Charging and Refueling Infrastructure incl. Energy Grid'],
address: 'Park Forum 420, 5657 HD Eindhoven, Niederlande',
website: 'www.udenco.com',
emails: ['nick.kohler@udenco.com']
},
{
id: 'uludag-automotive-industry-exporters-association',
name: 'Uludag Automotive Industry Exporters\' Association',
keywords: ['automotive industry', 'export', 'vehicle production', 'supplier industry', 'commercial vehicle production', 'oem', 'tier-1', 'automotive sector', 'exporters association', 'automotive exports', 'turkey automotive', 'automotive coordination', 'export representative', 'automotive suppliers', 'automotive export leader', 'european commercial vehicles'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D20'
},
role: 'Hauptaussteller',
profile: 'The Uludağ Automotive Industry Exporters\' Association (OİB) was formed in 1991 under the title of Uludağ Vehicle and Auxiliary Industry Exporters\' Association (UTAYSIB) with 246 members and exports of $163 million under the umbrella of the Uludağ Exporters\' Association. Having more than 9.500 active members as of the end of 2024, OIB is the only export representative of the automotive industry, which is the locomotive of the country\'s total exports.',
themes: [],
address: 'Isiktepe O.S.B. Kahverengi Cd. No.19 Nilufer, 16215 Bursa, Türkei',
website: 'www.oib.org.tr',
emails: ['aslantasu@uib.org.tr', 'tanerb@uib.org.tr']
},
{
id: 'uludag-automotive-industry-exporters-association',
name: 'Uludag Automotive Industry Exporters\' Association',
keywords: ['automotive industry', 'export', 'vehicle production', 'supplier industry', 'commercial vehicle production', 'oem', 'tier-1', 'automotive sector', 'exporters association', 'automotive exports', 'turkey automotive', 'automotive coordination', 'automotive leader', 'automotive union', 'automotive representative', 'automotive locomotive', 'automotive members', 'automotive companies', 'automotive share', 'automotive production', 'automotive main industry', 'automotive supplier industry'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D20'
},
role: 'Hauptaussteller',
profile: 'The Uludağ Automotive Industry Exporters\' Association (OİB) was formed in 1991 under the title of Uludağ Vehicle and Auxiliary Industry Exporters\' Association (UTAYSIB) with 246 members and exports of $163 million under the umbrella of the Uludağ Exporters\' Association. Having more than 9.500 active members as of the end of 2024, OIB is the only export representative of the automotive industry, which is the locomotive of the country\'s total exports.',
themes: [],
address: 'Isiktepe O.S.B. Kahverengi Cd. No.19 Nilufer, 16215 Bursa, Türkei',
website: 'www.oib.org.tr',
emails: ['aslantasu@uib.org.tr', 'tanerb@uib.org.tr']
},
{
id: 'unicore-communications-inc',
name: 'Unicore Communications, Inc.',
keywords: ['gnss-schaltkreise', 'satellitenpositionierungsverfahren', 'sensorfusion', 'gnss-empfänger', 'intelligentes fahren', 'autonome fahrzeugnavigation', 'unbemannte fahrzeuge', 'mechanische steuerung', 'vermessungsausrüstung', 'präzise landwirtschaft', 'cors-stationen', 'präzise zeitmessung', 'iot', 'supplier', 'autonomous driving', 'connectivity', 'big data', 'semiconductors', 'chips', 'entertainment', 'vr'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D02'
},
role: 'Hauptaussteller',
profile: 'Unicore ist ein Hochtechnologie-Unternehmen, das sich mit dem Entwurf hochkomplexer GNSS-Schaltkreise, der Entwicklung leistungsstarker Satellitenpositionierungsverfahren sowie der Erstellung von Algorithmen für die Fusion mehrerer Sensoren befasst.',
themes: ['Supplier', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'Semiconductors & Chips', 'Entertainment & VR'],
address: 'A301, No.7, Fengxian East Road, Haidian, 100094 Beijing, China',
website: 'www.en.unicore.com',
emails: ['info@unicorecomm.com', 'zhangyan3@unicorecomm.com']
},
{
id: 'unio-enterprise',
name: 'UNIO Enterprise',
keywords: ['newspace', 'satellitenbasierte konnektivität', 'mobilitätssektor', '5g', 'satellitennetze', 'ki-gestütztes smart switching', 'globale abdeckung', 'automatisierung', 'steuerung', 'effizienz', 'kommunikationsnetzwerke', 'autonome mobilitätsanwendungen', 'vernetzte mobilitätsanwendungen', 'automotive', 'mobility on demand', 'mobility as a service', 'supplier', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'remote-controlled vehicles', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D130'
},
role: 'Hauptaussteller',
profile: 'UNIO Enterprise ist ein NewSpace-Startup, das stets verfügbare, satellitenbasierte Konnektivität für den Mobilitätssektor bereitstellt. Sein Flaggschiffprodukt, UNIO Move, kombiniert 5G- und Satellitennetze mithilfe von KI-gestütztem Smart Switching für eine nahtlose, globale Abdeckung. UNIO wurde entwickelt, um Automatisierung, Steuerung und Effizienz zu verbessern.',
themes: ['Automotive', 'Mobility on demand', 'Mobility as a Service', 'Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Remote-Controlled Vehicles', 'Future Drive Technologies incl. H2'],
address: 'Rosental 5, 80331 München, Deutschland',
website: 'www.unio.global',
emails: ['liina@unio.global', 'jasmin@unio.global']
},
{
id: 'unio-enterprise',
name: 'UNIO Enterprise',
keywords: ['newspace', 'satellitenbasierte konnektivität', 'mobilitätssektor', '5g', 'satellitennetze', 'ki-gestütztes smart switching', 'globale abdeckung', 'automatisierung', 'steuerung', 'effizienz', 'kommunikationsnetzwerke', 'autonome mobilitätsanwendungen', 'vernetzte mobilitätsanwendungen', 'automotive', 'mobility on demand', 'mobility as a service', 'supplier', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'remote-controlled vehicles', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D130'
},
role: 'Hauptaussteller',
profile: 'UNIO Enterprise ist ein NewSpace-Startup, das stets verfügbare, satellitenbasierte Konnektivität für den Mobilitätssektor bereitstellt. Sein Flaggschiffprodukt, UNIO Move, kombiniert 5G- und Satellitennetze mithilfe von KI-gestütztem Smart Switching für eine nahtlose, globale Abdeckung. UNIO wurde entwickelt, um Automatisierung, Steuerung und Effizienz zu verbessern.',
themes: ['Automotive', 'Mobility on demand', 'Mobility as a Service', 'Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Remote-Controlled Vehicles', 'Future Drive Technologies incl. H2'],
address: 'Rosental 5, 80331 München, Deutschland',
website: 'www.unio.global',
emails: ['liina@unio.global', 'jasmin@unio.global']
},
{
id: 'united-electric-vehicles-ag',
name: 'United Electric Vehicles AG',
keywords: ['electric vehicles', 'startup', 'energy competence', 'automotive', 'sustainable mobility', 'innovation', 'technology', 'transportation', 'future mobility', 'clean energy'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D112'
},
role: 'Hauptaussteller',
profile: 'United Electric Vehicles AG is a leading company in the field of electric vehicles, focusing on sustainable mobility solutions and innovative technologies.',
themes: [],
address: 'Windscheidstraße 19 Energy Competence Centre, 10627 Berlin, Deutschland',
website: 'www.united-electric-vehicles.com/',
emails: []
},
{
id: 'universitat-stgallen-institut-fur-mobilitat',
name: 'Universität St.Gallen Institut für Mobilität',
keywords: [],
location: {
type: 'Open Space',
hallOrPlace: "",
booth: ""
},
role: 'Partner',
profile: '',
themes: [],
address: 'Blumenbergplatz 9, 9000 St.Gallen, Schweiz',
website: undefined,
emails: []
},
{
id: 'usa-group',
name: 'USA Group',
keywords: ['high precision machined parts', 'e-mobility', 'efficiency', 'security', 'production sites', 'cutting-edge lathes', 'turned parts', 'bespoke components', 'automotive', 'quality standards', 'sophisticated technology', 'innovative techniques', 'tailor-made batches', 'bar turning', 'manufacturing sites', 'tool shop', 'tooling design', 'automotive', 'emobility', 'worldwide'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'USA Group produces around 320M turned parts with 100M€ turnover, applying sophisticated technology and innovative techniques to produce bespoke turned components. Founded in 1965, the Group includes 7 companies with 6 manufacturing sites and 1 tool shop.',
themes: ['Automotive'],
address: 'Poligono Industrial de Goitondo, 48269 Mallabia, Spanien',
website: 'www.usagroup.es',
emails: ['contact@usagroup.es', 'service@usagroup.es']
},
{
id: 'usa-group',
name: 'USA Group',
keywords: ['high precision machined parts', 'e-mobility', 'efficiency', 'security', 'production sites', 'cutting-edge lathes', 'turned parts', 'bespoke components', 'automotive', 'quality standards', 'sophisticated technology', 'innovative techniques', 'tailor-made batches', 'bar turning', 'manufacturing sites', 'tool shop', 'tooling design', 'automotive parts', 'worldwide distribution', 'customer service', 'competitiveness'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'USA Group produces high precision machined parts for e-mobility, efficiency, and security. With 7 production sites and over 160 cutting-edge lathes, they produce around 320M turned parts annually. Their core business focuses on automotive and eMobility sectors, ensuring excellence in quality and customer service.',
themes: ['Automotive'],
address: 'Poligono Industrial de Goitondo, 48269 Mallabia, Spanien',
website: 'www.usagroup.es',
emails: ['contact@usagroup.es', 'service@usagroup.es']
},
{
id: 'valeo',
name: 'Valeo',
keywords: ['technology company', 'automakers', 'new mobility players', 'mobility safer', 'smarter mobility', 'sustainable mobility', 'electrification', 'driving assistance systems', 'interior experience', 'lighting', 'spare parts', 'aftermarket operators', 'greener mobility', 'safer mobility', 'diverse mobility', 'well-being', 'citizens', 'consumers', 'automotive', 'smart city mobility', 'road safety', 'circular economy', 'decarbonization', 'software defined vehicles', 'autonomous driving', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'B01'
},
role: 'Hauptaussteller',
profile: 'Valeo is a technology company and partner to all automakers and new mobility players worldwide. Valeo innovates to make mobility safer, smarter and more sustainable. Valeo enjoys technological and industrial leadership in electrification, driving assistance systems, reinvention of the interior experience and lighting everywhere.',
themes: ['Automotive', 'Smart City Mobility', 'Road Safety', 'Circular Economy', 'Decarbonization', 'Software Defined Vehicles', 'Autonomous Driving', 'Future Drive Technologies incl. H2'],
address: '100 Rue de Courcelles, 75017 Paris, Frankreich',
website: 'www.valeo.com',
emails: ['dora.khosrof@valeo.com']
},
{
id: 'valtech-mobility-gmbh',
name: 'Valtech Mobility GmbH',
keywords: ['software für vernetzte mobilität', 'plattformen', 'infotainment dienste', 'sdv', 'digitale lösungen', 'fahrzeughersteller', 'mobilitätsanbieter', 'wertschöpfungsmodelle', 'datenverwertung', 'user experience', 'automotive-cloud-plattformen', 'data & ai', 'android automotive', 'oem-dienste', 'vernetzte fahrzeuge', 'automotive', 'mobility as a service', 'supplier', 'software defined vehicles', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'remote-controlled vehicles', 'entertainment', 'vr'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'A11'
},
role: 'Hauptaussteller',
profile: 'Valtech Mobility ist ein globales Softwareunternehmen für ganzheitliche digitale Lösungen im Bereich vernetzte Mobilität. Wir konzipieren, entwickeln und betreiben digitale Plattformdienste und Produkte für Fahrzeughersteller und neue Mobilitätsanbieter. Unser Ziel ist es, unseren Kunden und Partnern zu ermöglichen, neue Wertschöpfungsmodelle zu schaffen und Daten aus vernetzten Fahrzeugen gewinnbringend zu nutzen.',
themes: ['Automotive', 'Mobility as a Service', 'Supplier', 'Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Remote-Controlled Vehicles', 'Entertainment & VR'],
address: 'Marsstraße 46, 80335 München, Deutschland',
website: 'www.valtech-mobility.com',
emails: ['marketing@valtech-mobility.com', 'rene.arbeithuber@valtech-mobility.com', 'otmar.kratzer@valtech.com']
},
{
id: 'vamos-ecosystem',
name: 'VAMOS Ecosystem',
keywords: ['autonomous mobility', 'smart spaces', 'innovation cluster', 'electrification', 'technology providers', 'service providers', 'end users', 'value ecosystems', 'oem providers', 'vertical industries', 'global market', 'autonomous smart mobility'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D23'
},
role: 'Hauptaussteller',
profile: 'VAMOS Ecosystem is an innovation cluster that focuses on autonomous mobility in smart spaces. It brings together companies that jointly collaborate, compete, and create solutions based on smart spaces technologies, electrification, and autonomous smart mobility for the global market.',
themes: [],
address: '8 Åkerlundinkatu, 33100 Tampere, Finnland',
website: 'vamosecosystem.fi/',
emails: ['tuulia.haveri@dimecc.com']
},
{
id: 'vdl-ets',
name: 'VDL ETS',
keywords: ['nachhaltige mobilität', 'elektrifizierung', 'alternative antriebe', 'autonomes fahren', 'energiespeicherung', 'batterietests', 'erneuerbare speicherlösungen', 'engineering', 'mechanik', 'software', 'elektrik', 'innovation', 'zukunftstechnologien', 'decarbonization', 'supplier', 'software defined vehicles', 'connectivity', 'iot', 'big data', 'battery tech', 'cybersecurity', 'remote-controlled vehicles'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: 'Wir entwickeln nachhaltige, innovative Hard- und Softwarelösungen für Mobilität und Energiespeicherung. Unsere Schwerpunkte sind E-Mobilität, Batterietechnologie, Ladeinfrastruktur, Energiewende und autonomes Fahren. Mit über 40 Jahren Erfahrung in Automotive, Hightech und Verteidigung sind wir ein unabhängiges Test- und Validierungszentrum mit Sitz in Helmond (NL).',
themes: ['Decarbonization', 'Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'Battery Tech', 'Cybersecurity', 'Remote-Controlled Vehicles'],
address: 'Automotive Campus 59, 5708 JZ Helmond, Niederlande',
website: 'www.vdlets.nl',
emails: ['info@vdlets.nl', 's.beemster@vdlets.nl', 'f.strijbos@vdlets.nl', 'g.haverkort@vdlets.nl']
},
{
id: 'vector-informatik-gmbh',
name: 'Vector Informatik GmbH',
keywords: ['software-defined vehicles', 'sdv', 'end-to-end-lösung', 'offene modulare softwareplattform', 'cloud-native software factory', 'sdv-services', 'automotive', 'softwareentwicklung', 'mobilität', 'technologien', 'services', 'experten', 'zukunft der mobilität', 'sdv tour', 'software entwerfen', 'software entwickeln', 'software einsetzen'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D11'
},
role: 'Hauptaussteller',
profile: 'Vector beschleunigt die Entwicklung von Software-Defined Vehicles (SDVs) mit einer leistungsstarken End-to-End-Lösung. Diese vereint eine offene, modulare Softwareplattform, eine automatisierte, cloud-native Software Factory und ein umfassendes Portfolio an SDV-Services. Mit diesem ganzheitlichen Ansatz ermöglichen wir Ihnen, Software für Ihre SDVs zu entwerfen, zu entwickeln und einzusetzen.',
themes: ['Automotive', 'Software Defined Vehicles'],
address: 'Holderäckerstr. 36, 70499 Stuttgart, Deutschland',
website: 'www.vector.com',
emails: ['info@vector.com', 'cordula.gielen@vector.com']
},
{
id: 'verband-der-automobilindustrie-ev',
name: 'Verband der Automobilindustrie e.V.',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'B31'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Behrenstraße 35, 10117 Berlin, Deutschland',
website: 'www.vda.de',
emails: []
},
{
id: 'verband-der-automobilindustrie-e-v-qualitats-management-center',
name: 'Verband der Automobilindustrie e. V. Qualitäts-Management-Center',
keywords: ['qualitatsmanagement', 'automobilindustrie', 'vda', 'zertifizierung', 'auditierung', 'prozessoptimierung', 'automotive standards', 'iso standards', 'supply chain management', 'automotive quality', 'produktentwicklung', 'technische beratung', 'schulungen', 'automotive compliance', 'qualitatskontrolle'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B41'
},
role: 'Hauptaussteller',
profile: 'Der Verband der Automobilindustrie e. V. Qualitäts-Management-Center bietet umfassende Dienstleistungen im Bereich Qualitätsmanagement für die Automobilindustrie. Dazu gehören Zertifizierungen, Auditierungen und Prozessoptimierungen. Ziel ist die Sicherstellung höchster Qualitätsstandards in der Automobilbranche.',
themes: [],
address: 'Behrenstrasse 35, 10117 Berlin, Deutschland',
website: 'www.vda-qmc.de',
emails: []
},
{
id: 'verband-der-automobilindustrie-e-v-qualitats-management-center',
name: 'Verband der Automobilindustrie e. V. Qualitäts-Management-Center',
keywords: ['qualitatsmanagement', 'automobilindustrie', 'vda', 'zertifizierung', 'auditierung', 'prozessoptimierung', 'automotive standards', 'iso standards', 'automotive quality', 'managementsysteme', 'automotive compliance', 'qualitatskontrolle', 'automotive engineering', 'supply chain management', 'automotive safety', 'produktentwicklung', 'automotive innovation', 'technische beratung', 'automotive consulting', 'automotive training'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B41'
},
role: 'Hauptaussteller',
profile: 'Der Verband der Automobilindustrie e. V. Qualitäts-Management-Center bietet umfassende Dienstleistungen im Bereich Qualitätsmanagement für die Automobilindustrie. Dazu gehören Zertifizierungen, Auditierungen und Prozessoptimierungen. Ziel ist die Sicherstellung höchster Qualitätsstandards in der Automobilbranche.',
themes: [],
address: 'Behrenstrasse 35, 10117 Berlin, Deutschland',
website: 'www.vda-qmc.de',
emails: []
},
{
id: 'vernetzte-mobilitat-bayern-innovativ-gmbh',
name: 'Vernetzte Mobilität (Bayern Innovativ GmbH)',
keywords: ['smarte mobilitätslösungen', 'nachhaltige mobilität', 'co2-emissionen', 'autoverkehr', 'optimierungsbedarf', 'ressourceneffizienz', 'förderangebote', 'trends', 'ausschreibungen', 'branchenevents', 'cycling', 'lev', 'micromobility', 'public transport', 'mobility on demand', 'mobility as a service', 'intermodality', 'smart city mobility', 'smart country mobility', 'charging and refueling infrastructure', 'road safety', 'circular economy', 'inclusion', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'semiconductors', 'chips', 'cybersecurity', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B11'
},
role: 'Mitaussteller',
profile: 'Vernetzte Mobilität eröffnet die Möglichkeit, vorhandene Ressourcen effizienter und bedarfsgerecht einzusetzen. Als Enabler und Plattform unterstützen wir Unternehmen und Kommunen mit einem starken Netzwerk und gezielten Förderangeboten. Zudem informieren wir regelmäßig über aktuelle Trends, Ausschreibungen und Branchenevents im Bereich Vernetzte Mobilität.',
themes: ['Cycling', 'LEV', 'Micromobility', 'Public Transport', 'Mobility on demand', 'Mobility as a Service', 'Intermodality', 'Smart City Mobility', 'Smart Country Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Road Safety', 'Circular Economy', 'Inclusion', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'Semiconductors & Chips', 'Cybersecurity', 'Future Drive Technologies incl. H2'],
address: 'Am Tullnaupark 8, 90402 Nürnberg, Deutschland',
website: 'www.bayern-innovativ.de/leistungen/mobilitaet/vernetzte-mobilitaet/',
emails: ['mobilitaet@bayern-innovativ.de', 'presse@bayern-innovativ.de']
},
{
id: 'vestel-mobility',
name: 'Vestel Mobility',
keywords: ['ev chargers', 'auto electronics', 'energy storage tech', 'ac/dc ladestationen', 'batteriespeichersystem', 'displaysysteme', 'togg', 'elektrofahrzeuge', 'nachhaltigkeit', 'energieeffizienz', 'exporteur', 'ease', 'globaler technologieführer', 'mobilität', 'automotive', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'B32'
},
role: 'Hauptaussteller',
profile: 'Vestel Mobility wurde von Vestel, einem weltweit führenden Technologieunternehmen in den Bereichen Mobilität und nachhaltige Energie gegründet. Das Unternehmen vereint tiefgreifendes technisches Know-how mit einer neuen Vision und entwickelt zukunftsweisende Lösungen in den Bereichen Ladestationen für Elektrofahrzeuge (EV), automobile Elektronik und Energiespeichersysteme. Mit dem Ziel, die Verbreitung von Elektrofahrzeugen zu beschleunigen, produziert Vestel Mobility innovative AC-/DC-Ladestationen und hat das erste in der Türkei entwickelte Batteriespeichersystem realisiert.',
themes: ['Automotive', 'Battery Tech'],
address: 'Organize Sanayi Bölgesi, 45030 Manisa, Türkei',
website: 'vestelmobility.com',
emails: ['vdt-marketing@zorlu.com', 'vestel_mobility_evc_satis@vestel.com.tr', 'vestel_mobility_batarya_satis@vestel.com.tr', 'vestel_mobility_otomotiv_satis@vestel.com.tr']
},
{
id: 'viasat',
name: 'Viasat',
keywords: ['global communications', 'connectivity', 'internet services', 'secure connectivity', 'resilient connectivity', 'military communications', 'information dominance', 'internet in the air', 'internet at sea', 'business connectivity', 'smart city mobility', 'smart country mobility', 'public transport', 'automotive', 'regulation', 'liability', 'esgs', 'supplier', 'iot', 'big data'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D32'
},
role: 'Hauptaussteller',
profile: 'Viasat is a global communications company that believes everyone, and everything can be connected. For more than 30 years, Viasat innovations have helped shape how consumers, businesses, governments, and militaries around the world communicate — bringing connectivity when, where, and how it’s needed most. Viasat focuses on the connections that matter as we deliver bold results for our customers, partners, and shareholders worldwide.',
themes: ['Automotive', 'Public Transport', 'Smart City Mobility', 'Smart Country Mobility', 'Regulation, Liability & ESGs', 'Supplier', 'Connectivity, IoT & Big Data'],
address: '50 Finsbury Square 50 Finsbury Square, London EC2A 1HD, Großbritannien',
website: 'www.viasat.com/enterprise',
emails: ['barnaby.atkinson@viasat.com']
},
{
id: 'vibe-moves-you',
name: 'vibe moves you',
keywords: ['e-auto-abo', 'vollelektrische fahrzeuge', 'fuhrparkmanagement', 'versicherung', 'wartung', 'zulassung', 'reifenmanagement', 'schadensmanagement', 'e-mobilität', 'ki-gestütztes fuhrparkmanagement', 'modulare services', 'laden', 'flottenmanagement', 'revibe', 'gebrauchte e-autos', 'nachhaltigkeit', 'zukunftsorientierte mobilität', 'digital vernetzt', 'automotive', 'mobility as a service'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D118'
},
role: 'Hauptaussteller',
profile: 'vibe moves you – Österreichs führendes Auto-Abo mit ausschließlich vollelektrischen Fahrzeugen ist jetzt auch in Deutschland verfügbar: digital, flexibel, innovativ und nachhaltig. Das vollumfängliche Abo umfasst alles, was Unternehmen für einen effizienten, elektrischen Fuhrpark benötigen: Versicherung, Wartung, Zulassung, Reifen- und Schadensmanagement – digital gesteuert und alles aus einer Hand. vibe ermöglicht Fuhrparkverantwortlichen, E-Mobilität mit nur wenigen Klicks zu managen – ohne starre Bindung, ohne Risiko, ohne komplexe Prozesse.',
themes: ['Automotive', 'Mobility as a Service'],
address: 'Brunnerstraße 77-79, 1230 Wien, Österreich',
website: 'www.vibemovesyou.com',
emails: ['medien_de@vibemovesyou.com', 'abohallo_de@vibemovesyou.com']
},
{
id: 'viettron-technology-co-ltd',
name: 'Viettron Technology CO., LTD.',
keywords: ['forschung und entwicklung', 'hardware', 'software', 'systemintegration', 'leichte elektrofahrzeuge', 'komplettlösungen', 'umrüstung', 'elektroantrieb', 'elektromobilität', 'grüne energie', 'esg'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E22'
},
role: 'Mitaussteller',
profile: 'Viettron Technology Co., Ltd. mit Sitz im Bezirk Xizhi in Neu-Taipeh, Taiwan, ist führend in der Forschung und Entwicklung von Hardware, Software und Systemintegration für leichte Elektrofahrzeuge. Wir bieten Komplettlösungen für die Umrüstung von Fahrzeugen mit Verbrennungsmotor auf Elektroantrieb im Rahmen der Elektromobilität und setzen uns für ESG ein, um grüne Energie für die nächste Generation zu gewährleisten.',
themes: ['LEV'],
address: '9F., No. 258, Nanyang St., Xizhi Dist., New Taipei City 221009, Taiwan (Chinesisch-Taipeh)',
website: 'www.viettron.com',
emails: ['cynthia.lin@viettron.com']
},
{
id: 'vishay-electronic-gmbh',
name: 'Vishay Electronic GmbH',
keywords: ['elektronische bauteile', 'diskrete halbleiter', 'passive bauelemente', 'diode', 'kondensator', 'forschung und entwicklung', 'fertigung', 'technologie', 'qualität', 'vertrieb', 'marketing', 'entwickler', 'innovatoren', 'supplier', 'connectivity', 'iot', 'big data', 'semiconductors', 'chips', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'C40'
},
role: 'Mitaussteller',
profile: 'Vishay ist einer der weltweit meistgefragten Hersteller elektronischer Bauteile. Von diskreten Halbleitern bis zu passiven Bauelementen, die breite Produktpalette von Vishay bildet die Grundlage dafür, dass moderne Technologie jeden Tag für jedermann erlebbar ist.',
themes: ['Connectivity, IoT & Big Data', 'Semiconductors & Chips', 'Battery Tech'],
address: 'Dr.-Felix-Zandman-Platz 1, 95100 Selb, Deutschland',
website: 'www.vishay.com',
emails: ['business-europe@vishay.com']
},
{
id: 'visic-technologies',
name: 'VisIC Technologies',
keywords: ['gan power semiconductors', 'electric mobility', 'd³gan technology', 'high-voltage applications', 'ev powertrains', 'inverters', 'onboard chargers', 'oem', 'tier-1', 'power electronics', 'next-generation ev platforms', 'decarbonization', 'automotive', 'semiconductors & chips'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C12'
},
role: 'Mitaussteller',
profile: 'VisIC Technologies is a global leader in high-performance GaN power semiconductors for electric mobility. Their patented D³GaN™ technology offers superior efficiency, scalability, and thermal performance compared to traditional solutions. VisIC is working closely with OEMs and Tier 1s to bring GaN technology to next-generation EV platforms.',
themes: ['Automotive', 'Decarbonization', 'Semiconductors & Chips'],
address: 'Golda Meir 7, 7403650 Nes Ziona, Israel',
website: 'www.visic-tech.com/',
emails: ['info@visic-tech.com', 'dieter@visic-tech.com']
},
{
id: 'vitra-gmbh',
name: 'VitraGmbH',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: "",
booth: ""
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Charles-Eames-Str. 2, 79576 Weil am Rhein, Deutschland',
website: undefined,
emails: []
},
{
id: 'vmax',
name: 'VMAX',
keywords: ['power electronics', 'power transmission', 'automotive powertrain', 'obcs', 'dcdcs', 'inverters', 'gearboxes', 'evcc', 'wevc', 'electric vehicle', 'customized solutions', 'automotive', 'cycling', 'lev', 'micromobility', 'public transport', 'manufacturing', 'supply chain', 'international trade', 'markets', 'supplier', 'semiconductors', 'chips', 'battery tech', 'future drive technologies'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'B21'
},
role: 'Hauptaussteller',
profile: 'Shenzhen VMAX New Energy (Group) Co., Ltd. founded in 2005 and headquartered in Shenzhen, China, is dedicated to the development, production and sales of power electronics and power transmission products. VMAX works with many automobile manufacturers to provide customers with high quality automotive powertrain domain products and efficient solutions.',
themes: ['Automotive', 'Cycling', 'LEV', 'Micromobility', 'Public Transport', 'Manufacturing & Supply Chain', 'International Trade and Markets', 'Supplier', 'Semiconductors & Chips', 'Battery Tech', 'Future Drive Technologies incl. H2'],
address: '5F, Fengyun Bld, North #5Rd, Hi-Tech, 518057 Shenzhen, China',
website: 'www.en.vmaxpower.com.cn',
emails: ['sales@vmaxpower.com.cn']
},
{
id: 'vodafone-iot-gmbh',
name: 'Vodafone IoT GmbH',
keywords: ['sichere vernetzte mobilität', 'internet im auto', 'iot', 'konnektivität', 'streaming', 'online-gaming', 'echtzeitkommunikation', 'infotainment-dienste', 'automobilmarken', 'fahrerlebnis', 'software defined vehicles', 'connectivity', 'big data', 'cybersecurity', 'remote-controlled vehicles', 'future drive technologies'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'B12'
},
role: 'Hauptaussteller',
profile: 'Sichere, vernetzte Mobilität – jederzeit und überall. In einer zunehmend digitalen Welt ist eine zuverlässige Internetverbindung unterwegs unverzichtbar – für Fahrer:innen wie Passagiere. Mit dem Vodafone Internet im Auto auf IoT-Basis ermöglichen Fahrzeughersteller eine leistungsstarke, stabile Verbindung.',
themes: ['Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'Cybersecurity', 'Remote-Controlled Vehicles', 'Future Drive Technologies incl. H2'],
address: 'Ferdinand-Braun Platz 1, 40549 Düsseldorf, Deutschland',
website: 'www.vodafone.com/business',
emails: []
},
{
id: 'voestalpine-precision-strip-gmbh',
name: 'voestalpine Precision Strip GmbH',
keywords: ['metallprodukte', 'aluminium-kupfer-verbund', 'stufenband', 'metallbänder', 'batterieanwendungen', 'stromtransport', 'signaltechnik', 'batteriemanagementsystem', 'dickdrahtbonden', 'federharte legierungen', 'fahrzeugelektronik', 'lasergeschweißtes metallband', 'kupferlegierungen', 'anbindungstechnologien', 'stanzbauteil', 'ultraschallschweißen', 'automotive', 'public transport', 'manufacturing & supply chain'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E10'
},
role: 'Mitaussteller',
profile: 'Österreichischer Hersteller von kundenspezifischen Metallbändern. Hersteller von Metallprodukten wie Aluminium-Kupfer-Verbund oder Stufenband.',
themes: ['Automotive', 'Public Transport', 'Manufacturing & Supply Chain'],
address: 'Waidhofner Straße 3, 3333 Boehlerwerk, Österreich',
website: 'www.voestalpine.com/precision-strip',
emails: ['precision-strip@voestalpine.com', 'axel.michels@voestalpine.com', 'robert.gegenhuber@voestalpine.com']
},
{
id: 'voi-technology-germany-gmbh',
name: 'Voi Technology Germany GmbH',
keywords: ['mikromobilität', 'e-scooter-sharing', 'e-bike-sharing', 'urban mobility', 'öffentlicher nahverkehr', 'nachhaltigkeit', 'smart city mobility', 'connectivity', 'iot', 'big data', 'intermodality', 'mobility as a service', 'städtische partnerschaften', 'sicherheit', 'inklusion'],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP110'
},
role: 'Mitaussteller',
profile: 'Voi ist ein führender europäischer Anbieter von E-Scooter- und E-Bike-Sharing mit Sitz in Stockholm. Das 2018 gegründete Unternehmen ist heute in über 100 Städten in 12 Ländern aktiv und verfolgt das Ziel, den motorisierten Individualverkehr zu reduzieren und lebenswerte Städte zu fördern. Die geteilten Fahrzeuge von Voi bieten eine flexible Ergänzung zum öffentlichen Nahverkehr und leisten einen Beitrag zu einer nachhaltigeren urbanen Mobilität.',
themes: ['Micromobility', 'Mobility as a Service', 'Intermodality', 'Smart City Mobility', 'Connectivity, IoT & Big Data'],
address: 'Oskar-Messter-Straße 15, 85737 Ismaning, Deutschland',
website: 'www.voi.com',
emails: ['tim.schaefer@voi.com']
},
{
id: 'volkswagen',
name: 'Volkswagen',
keywords: ['fahrzeuge', 'pkw', 'elektrofahrzeuge', 'nachhaltige mobilität', 'polo', 't-roc', 't-cross', 'golf', 'tiguan', 'passat', 'id. familie', 'automotive', 'cycling', 'lev', 'micromobility', 'public transport', 'mobility on demand', 'mobility as a service', 'intermodality', 'smart city mobility', 'smart country mobility', 'charging and refueling infrastructure', 'road safety', 'circular economy', 'decarbonization', 'regulation', 'liability', 'esgs', 'manufacturing', 'supply chain', 'inclusion', 'international trade', 'markets', 'mining', 'raw materials', 'supplier', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'semiconductors', 'chips', 'battery tech', 'cybersecurity', 'remote-controlled vehicles', 'entertainment', 'vr', 'future drive technologies', 'h2'],
location: {
type: 'Open Space',
hallOrPlace: 'Odeonsplatz',
booth: 'OP300'
},
role: 'Hauptaussteller',
profile: 'Die Marke Volkswagen Pkw ist weltweit präsent und produziert Fahrzeuge an 28 Standorten in zwölf Ländern. Im Jahr 2024 hat Volkswagen über 4,8 Millionen Fahrzeuge ausgeliefert. Volkswagen treibt seine Weiterentwicklung zur begehrenswertesten Marke für nachhaltige Mobilität konsequent voran.',
themes: ['Automotive', 'Cycling', 'LEV', 'Micromobility', 'Public Transport', 'Mobility on demand', 'Mobility as a Service', 'Intermodality', 'Smart City Mobility', 'Smart Country Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Road Safety', 'Circular Economy', 'Decarbonization', 'Regulation, Liability & ESGs', 'Manufacturing & Supply Chain', 'Inclusion', 'International Trade and Markets', 'Mining and Handling of Raw Materials', 'Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Semiconductors & Chips', 'Battery Tech', 'Cybersecurity', 'Remote-Controlled Vehicles', 'Entertainment & VR', 'Future Drive Technologies incl. H2'],
address: 'Berliner Ring 2, 38440 Wolfsburg, Deutschland',
website: 'www.volkswagen.de/de.html',
emails: []
},
{
id: 'volkswagen-nutzfahrzeuge',
name: 'Volkswagen Nutzfahrzeuge',
keywords: ['mobilität', 'leichte nutzfahrzeuge', 'mobile werkstätten', 'notärzte', 'polizisten', 'saubere mobilität', 'intelligente mobilität', 'nachhaltige mobilität', 'familien', 'abenteurer', 'pakete', 'surfbretter', 'gesellschaftlicher beitrag', 'transport', 'erfolg', 'freiheit', 'zukunft'],
location: {
type: 'Open Space',
hallOrPlace: 'Odeonsplatz',
booth: 'OP300'
},
role: 'Mitaussteller',
profile: 'Wir bei Volkswagen Nutzfahrzeuge haben Mobilität schon immer größer gedacht. Als eigenständige Marke im Volkswagen Konzern entwickeln, bauen und vertreiben wir leichte Nutzfahrzeuge weltweit. Wir machen Mobilität sauberer, intelligenter und nachhaltiger.',
themes: [],
address: 'Mecklenheidestraße 74, 30419 Hannover, Deutschland',
website: 'www.volkswagen-nutzfahrzeuge.de',
emails: []
},
{
id: 'volkswagen-financial-services',
name: 'Volkswagen Financial Services',
keywords: ['finanzdienstleistungen', 'mobilitätsdienstleistungen', 'fahrzeugleasing', 'volkswagen konzern', 'leasinggesellschaft', 'automobil-leasing', 'serviceleistungen', 'handels- und kooperationspartner', 'kundenmobilität', 'europäisches finanzgeschäft', 'volkswagen leasing gmbh', 'leasing für marken außerhalb', 'größte leasinggesellschaft europa'],
location: {
type: 'Open Space',
hallOrPlace: 'Odeonsplatz',
booth: 'OP300'
},
role: 'Mitaussteller',
profile: 'Als hundertprozentige Tochtergesellschaft der Volkswagen AG steuert die Volkswagen Financial Services AG das europäische Finanz- und Mobilitätsdienstleistungsgeschäft für die Marken des Volkswagen Konzerns. Die Volkswagen Leasing GmbH stellt die Mobilität der Kunden ins Zentrum ihrer Aktivitäten. Mit rund 1.978.000 verleasten Fahrzeugen ist sie die größte Automobil-Leasinggesellschaft in Europa.',
themes: [],
address: 'Gifhorner Straße 57, 38112 Braunschweig, Deutschland',
website: 'www.vwfs.de',
emails: ['info@vwfs.com']
},
{
id: 'volkswagen-group',
name: 'Volkswagen Group',
keywords: ['automobilhersteller', 'elektrische fahrzeuge', 'autonome fahrzeuge', 'kundenerlebnis', 'digitalisierung', 'nachhaltigkeit', 'luxussegment', 'produktion', 'automotive tech driver', 'mobilität', 'smart city mobility', 'charging infrastructure', 'road safety', 'circular economy', 'decarbonization', 'supply chain', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'battery tech', 'cybersecurity', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'D10'
},
role: 'Hauptaussteller',
profile: 'Die Volkswagen Group ist einer der weltweit führenden Automobilhersteller mit Hauptsitz in Wolfsburg, Deutschland. Gemeinsam mit seinen starken und ikonischen Marken setzt sich das Unternehmen dafür ein, die Zukunft der Mobilität im Hinblick auf elektrische und autonom fahrende Fahrzeuge, Kundenerlebnis, Digitalisierung und Nachhaltigkeit zu gestalten. Das Ziel: Als „Global Automotive Tech Driver“ die besten automobilen Technologien für Kunden weltweit zugänglich zu machen - von der Einstiegsmobilität bis zum Luxussegment.',
themes: ['Automotive', 'Mobility as a Service', 'Smart City Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Road Safety', 'Circular Economy', 'Decarbonization', 'Manufacturing & Supply Chain', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Battery Tech', 'Cybersecurity', 'Future Drive Technologies incl. H2'],
address: 'Berliner Ring 2, 38440 Wolfsburg, Deutschland',
website: 'www.volkswagen-group.com',
emails: []
},
{
id: 'volkswagen-zubehoer-und-lifestyle',
name: 'Volkswagen Zubehör und Lifestyle',
keywords: ['fahrzeug-zubehoer', 'lifestyle produkte', 'pkw-modelle', 'nutzfahrzeug-modelle', 'automobilhersteller', 'volkswagen', 'zubehoer', 'dreieich', 'volkswagen ag', 'tochtergesellschaft', 'entwicklung', 'vermarktung', 'weltweit'],
location: {
type: 'Open Space',
hallOrPlace: 'Odeonsplatz',
booth: 'OP300'
},
role: 'Mitaussteller',
profile: 'Die Volkswagen Zubehör GmbH mit Hauptsitz in Dreieich bei Frankfurt am Main ist eine 100-prozentige Tochtergesellschaft der Volkswagen AG. Das Unternehmen entwickelt und vermarktet weltweit Fahrzeug-Zubehör sowie Lifestyle Produkte für die Pkw- und Nutzfahrzeug-Modelle des Automobilherstellers.',
themes: [],
address: 'An der Trift 67, 63303 Dreieich, Deutschland',
website: 'www.volkswagen-zubehoer.de',
emails: ['info@volkswagen-zubehoer.de']
},
{
id: 'volkswagen-zubehoer-und-lifestyle',
name: 'Volkswagen Zubehör und Lifestyle',
keywords: ['fahrzeug-zubehoer', 'lifestyle produkte', 'pkw-modelle', 'nutzfahrzeug-modelle', 'automobilhersteller', 'volkswagen', 'zubehoer', 'automotive', 'fahrzeugzubehoer', 'volkswagen ag', 'dreieich', 'frankfurt am main', 'tochtergesellschaft', 'entwicklung', 'vermarktung', 'weltweit'],
location: {
type: 'Open Space',
hallOrPlace: 'Odeonsplatz',
booth: 'OP300'
},
role: 'Mitaussteller',
profile: 'Die Volkswagen Zubehör GmbH mit Hauptsitz in Dreieich bei Frankfurt am Main ist eine 100-prozentige Tochtergesellschaft der Volkswagen AG. Das Unternehmen entwickelt und vermarktet weltweit Fahrzeug-Zubehör sowie Lifestyle Produkte für die Pkw- und Nutzfahrzeug-Modelle des Automobilherstellers.',
themes: [],
address: 'An der Trift 67, 63303 Dreieich, Deutschland',
website: 'www.volkswagen-zubehoer.de',
emails: ['info@volkswagen-zubehoer.de']
},
{
id: 'volvo-car-germany-gmbh',
name: 'Volvo Car Germany GmbH',
keywords: ['automotive', 'circular economy', 'regulation', 'liability', 'esgs', 'manufacturing', 'supply chain'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'C12'
},
role: 'Hauptaussteller',
profile: 'Hej, IAA MOBILITY. Erleben Sie Volvo.',
themes: ['Automotive', 'Circular Economy', 'Regulation, Liability & ESGs', 'Manufacturing & Supply Chain'],
address: 'Siegburger Str. 229, 50679 Köln, Deutschland',
website: 'www.volvocars.com',
emails: []
},
{
id: 'waffer-technology',
name: 'Waffer Technology',
keywords: ['magnesium thixomolding', 'thixotropic injection molding', 'product design', 'mold development', 'material expertise', 'die casting', 'cnc machining', 'surface finishing', 'assembly', 'automotive', 'electronics', 'precision casting', 'global manufacturing', 'r&d investment', 'magnesium innovation'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B20'
},
role: 'Hauptaussteller',
profile: 'Waffer Technology is a pioneer in magnesium semi-solid thixotropic injection molding (Thixomolding®). Founded in 1997, it was the first Thixomolding manufacturer in China, offering comprehensive solutions for end-to-end development and production.',
themes: [],
address: 'No. 1430, South Huxi Road Maanshan Economic Development Zone An Hui Province, China, 243000 Maanshan, China',
website: 'www.waffer.com.tw/',
emails: ['tia.liu@waffer.com.cn', 'bella.shi@waffer.com.cn', 'wyman.wu@waffer.com.cn']
},
{
id: 'weelo-we-love-bikes-bicincitta-italia-srl',
name: 'Weelo - We Love Bikes Bicincitta Italia srl',
keywords: ['bike sharing', 'bike parking', 'bike rental', 'urban furniture', 'cycling', 'micromobility', 'intermodality', 'smart city mobility', 'smart country mobility', 'decarbonization'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: 'Weelo is the first network of bike sharing, bike parking and bike rental. Our solutions make life easier for cyclists and encourage new riders. Weelo allows cities to revamp their look with tidy structures and well-designed and sustainable urban furniture.',
themes: ['Cycling', 'Micromobility', 'Intermodality', 'Smart City Mobility', 'Smart Country Mobility', 'Decarbonization'],
address: '10034 Orbassano (TO), Italien',
website: 'www.weelo.it',
emails: ['v.giancola@weelo.it']
},
{
id: 'wirelesscar',
name: 'WirelessCar',
keywords: ['digital vehicle services', 'vehicle data', 'business value', 'consumers', 'mobility providers', 'vehicle makers', 'connected services', 'future mobility', 'oem', 'volkswagen', 'jaguar land rover', 'nissan', 'subaru', 'volvo cars', 'automotive', 'software defined vehicles', 'connectivity', 'iot', 'big data', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E20'
},
role: 'Mitaussteller',
profile: 'WirelessCar is one of the world’s leading innovators of digital vehicle services. We accelerate service creation and turn vehicle data into business value for consumers, mobility providers, vehicle makers, and society. Today, we are a highly recognized and award-winning company, connecting more than fifteen million vehicles in over 100 countries.',
themes: ['Automotive', 'Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'Future Drive Technologies incl. H2'],
address: 'Vädursgatan 6, 412 50 Gothenburg, Schweden',
website: undefined,
emails: []
},
{
id: 'zhejiang-wodeer-technology-group-co-ltd',
name: 'Zhejiang Wodeer Technology Group Co.,Ltd',
keywords: ['automobilelektronik', 'präzisionskomponenten', 'leichtbauteile', 'hallsensoren', 'zündspulen', 'elektronische hydraulikkupplungen', 'schaltaktuatoren', 'elektrische ölpumpen', 'schaltmotoren', 'f&e-zentren', 'produktionsstandorte', 'autohersteller', 'qualität', 'innovation', 'patente', 'chinesische autozuliefermarken', 'manufacturing & supply chain', 'international trade and markets', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D35'
},
role: 'Hauptaussteller',
profile: 'Gegründet im Januar 2012, konzentriert sich Wodeer auf Forschung, Entwicklung, Produktion und Vertrieb von Automobilelektronik, Präzisionskomponenten und Leichtbauteilen. Wodeer betreibt ein globales F&E- und Fertigungsnetzwerk mit neun F&E-Zentren und vier Produktionsstandorten. Das Unternehmen ist bekannt für Qualität und Innovation und arbeitet mit über zwei Dritteln der weltweiten Automobilhersteller zusammen.',
themes: ['Manufacturing & Supply Chain', 'International Trade and Markets', 'Supplier'],
address: 'Development Avenue No.818, 318000 Taizhou, Zhejiang, China',
website: 'www.wodeer.com.cn/en/index.html',
emails: ['demi.zhao@wodeer.eu', 'ali.mahdavi@wodeer.eu', 'wei.xia@wodeer.eu']
},
{
id: 'wolf-emobility-gmbh',
name: 'WOLF eMobility GmbH',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E10'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Weinberg 47, 6365 Kirchberg in Tirol, Österreich',
website: undefined,
emails: []
},
{
id: 'wolkenflug',
name: 'Wolkenflug',
keywords: ['decarbonization', 'remote-controlled vehicles', 'future drive technologies', 'h2', 'startup'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D115'
},
role: 'Hauptaussteller',
profile: 'Wolkenflug ist ein Hauptaussteller auf der IAA MOBILITY 2025. Das Unternehmen präsentiert innovative Lösungen in den Bereichen Dekarbonisierung und ferngesteuerte Fahrzeuge.',
themes: ['Decarbonization', 'Remote-Controlled Vehicles', 'Future Drive Technologies incl. H2'],
address: 'Gerhart-Hauptmann Str. 15, 02763 Zittau, Deutschland',
website: 'www.wolkenflug-cosmopolitan.de/',
emails: ['f.meyer@wirtz-meyer.de']
},
{
id: 'women-automotive-network',
name: 'Women Automotive Network',
keywords: ['automotive', 'mobility as a service', 'inclusion', 'software defined vehicles', 'ai', 'genai', 'future drive technologies', 'h2', 'career development', 'mentorship', 'knowledge-sharing', 'policy changes', 'shifting markets', 'workplace transformation', 'best practices', 'business relationships', 'inclusive workplaces', 'innovation'],
location: {
type: "",
 hallOrPlace: "",
booth: ""
},
role: 'Partner',
profile: 'The Women Automotive Network (WAN) is the leading global platform connecting professionals, organisations, and advocates to drive innovation, foster collaboration, and tackle key challenges in the automotive industry. WAN is a strategic partner helping companies navigate policy changes, shifting markets, and workplace transformation. WAN offers a safe, dynamic space for career development, mentorship, and knowledge-sharing.',
themes: ['Automotive', 'Mobility as a Service', 'Inclusion', 'Software Defined Vehicles', 'AI & GenAI', 'Future Drive Technologies incl. H2'],
address: '29A Square Hill Road, Maidstone ME15 7TN, Großbritannien',
website: undefined,
emails: ['hello@womenautomotive.com', 'emma@womenautomotive.com']
},
{
id: 'women-in-mobility',
name: 'Women in Mobility',
keywords: [],
location: {
type: "",
 hallOrPlace: "",
booth: ""
},
role: 'Partner',
profile: '',
themes: [],
address: 'An St. Magdalenen 8, 50678 Köln, Deutschland',
website: undefined,
emails: []
},
{
id: 'woongjun-ind-co-ltd',
name: 'WOONGJUN IND CO., LTD.',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '40-20 Yeonkkot-ro 145beon-gil, Jeongchon-myeon, Jinju-si 52845, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'wowtech',
name: 'WOWTECH',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '12, Dalseong2cha 3-ro, Guji-myeon, Daegu 43013, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'xing-mobility-inc',
name: 'XING Mobility Inc.',
keywords: ['immersion-cooled batteries', 'e-mobility', 'immersion cooling battery technology', 'mass production', 'thermal efficiency', 'fire safety', 'operational reliability', 'extreme conditions', 'cell-to-pack solution', 'energy density', 'high-performance evs', 'electrification transition', 'production-ready solutions', 'electric vehicles', 'machinery', 'wind-farm ess', 'global partnership strategy'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'B24'
},
role: 'Hauptaussteller',
profile: 'Founded in 2015, XING Mobility is a global leader in immersion cooling battery technology, with a mass production facility in Taoyuan, Taiwan. The company developed IMMERSIO™, the world’s only patented modular immersion cooling system, engineered to maximize thermal efficiency, fire safety, and operational reliability under extreme conditions. This year, XING will unveil its Cell-to-Pack (CTP) solution through a next-generation lightweight supercar.',
themes: ['Automotive', 'Battery Tech'],
address: 'No. 48, Huaya 1st Rd., guishan Dist., Taoyuan 333411, Taiwan (Chinesisch-Taipeh)',
website: 'www.xingmobility.com/en/',
emails: ['sales@xingmobility.com', 'press@xingmobility.com']
},
{
id: 'xotigo-gmbh',
name: 'Xotigo GmbH',
keywords: ['intelligenter vertrieb', 'ai', 'szenario simulation', 'on-demand collaboration', 'sales management', 'automobilindustrie', 'ki-gestützte analysen', 'echtzeit-szenarien', 'workflow-automatisierung', 'vertriebsplanung', 'prognose', 'volumenoptimierung', 'margenoptimierung', 'preissimulation', 'zollsimulation', 'datensilos eliminieren', 'strategische planung', 'operative planung', 'transparenz', 'automobilzulieferer', 'automobilhersteller', 'marktveränderungen', 'inflation', 'regulatorische anforderungen', 'agilität'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Xotigo ist die führende Plattform für Sales Management und -planung in der Automobilindustrie. Unsere Plattform kombiniert KI-gestützte Analysen, Echtzeit-Szenarien und Workflow-Automatisierung, um Entscheidungen entlang der gesamten Vertriebsplanung smarter und schneller zu machen. Wir eliminieren Datensilos, integrieren strategische und operative Planung und schaffen durchgängige Transparenz in globalen Organisationen.',
themes: ['Manufacturing & Supply Chain', 'AI & GenAI'],
address: 'Kaiserswerther Straße 215, 40474 Duesseldorf, Deutschland',
website: 'www.xotigo.com',
emails: ['john.macgoey@xotigo.com', 'andreas.geiger@xotigo.com']
},
{
id: 'xpeng',
name: 'XPENG',
keywords: ['elektrofahrzeuge', 'smart evs', 'fahrerassistenzsysteme', 'intelligentes bediensystem', 'antriebsstrang', 'elektrische architektur', 'volkswagen group', 'mobilitätserlebnis', 'technologie', 'autonomous driving', 'ai', 'genai', 'automotive'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'C20'
},
role: 'Hauptaussteller',
profile: 'XPENG (NYSE: XPEV und HKEX: 9868), ist ein führendes Unternehmen für Elektrofahrzeuge mit Hauptsitz in Guangzhou (China) und Niederlassungen in USA und Europa. Das Unternehmen hat es sich zur Aufgabe gemacht, die Transformation von Smart EVs durch Technologie voranzutreiben und das Mobilitätserlebnis der Zukunft zu gestalten. Um das Mobilitätserlebnis seiner Kunden zu optimieren, entwickelt XPENG im eigenen Haus eine umfassende Technologie für fortschrittliche Fahrerassistenzsysteme und ein intelligentes Bediensystem im Fahrzeug sowie die Kernsysteme des Fahrzeugs, einschließlich des Antriebsstrangs und der elektrischen/elektronischen Architektur.',
themes: ['Automotive', 'Autonomous Driving', 'AI & GenAI'],
address: 'Hoogoorddreef 11, 1101 BA Amsterdam, Niederlande',
website: 'www.heyxpeng.com',
emails: []
},
{
id: 'xyte-mobility',
name: 'XYTE mobility',
keywords: ['urbane mobilität', 'sharing', 'smarter öffentlicher verkehr', 'autonomes fahren', 'individuelle mobilität', 'sicherheit', 'emissionen senken', 'straßensicherheit', 'fahrspaß', 'xyte one', 'roller', 'auto', 'lev', 'smart city mobility', 'road safety'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D101'
},
role: 'Hauptaussteller',
profile: 'Die urbane Mobilität verändert sich – und wir treiben diesen Wandel voran. In einer Welt von Sharing, smartem öffentlichen Verkehr und autonomem Fahren braucht es mutige neue Ideen, um auch individuelle Mobilität sicherer, sauberer und effizienter zu machen. Bei XYTE mobility konzentrieren wir uns auf das, was Städte wirklich bewegt: Menschen.',
themes: ['LEV', 'Smart City Mobility', 'Road Safety'],
address: 'Maximilianstr. 23, 82319 Starnberg, Deutschland',
website: 'www.xyte-mobility.com',
emails: ['cwalz@xyte-mobility.com', 'fpizzuto@xyte-mobility.com', 'pmueller@xyte-mobility.com']
},
{
id: 'bmw-group',
name: 'BMW GROUP',
keywords: ['automobile', 'test drives', 'family', 'mobility', 'automotive industry', 'innovation', 'open space', 'summit', 'hauptaussteller'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'E01'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: '80809 München, Deutschland',
website: undefined,
emails: []
},
{
id: 'younghwa-tech-co-ltd',
name: 'Younghwa Tech Co., Ltd',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '132, Asanvalley-ro, Dunpo-myeon, Asan-si, Chungcheongnam-do 31409, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'yuratech',
name: 'YURATECH',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '38 Anmosan-gil, Jeonui-myeon, Sejong-si 30004, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'zealio-electronics-co-ltd',
name: 'ZEALIO ELECTRONICS CO., LTD.',
keywords: ['batteriebetriebene led-module', 'batteriebetriebene türschweller', 'oem', 'fahrzeug-innenbeleuchtung', 'sicherheit', 'energieeffizienz', 'benutzerfreundlichkeit', 'lichtlösungen', 'led-türschweller', 'fußmattenlichter', 'automotive'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E22'
},
role: 'Mitaussteller',
profile: 'Die Hauptprodukte von Zealio Electronics sind batteriebetriebene LED-Module und batteriebetriebene Türschweller. Derzeit beliefert Zealio weltweit 17 OEM-Automobilhersteller, darunter sowohl etablierte traditionelle Automarken als auch führende Hersteller von Elektrofahrzeugen. Zealio Electronics legt den Fokus auf Sicherheit, Energieeffizienz und Benutzerfreundlichkeit bei der Fahrzeug-Innenbeleuchtung.',
themes: ['Automotive'],
address: '4F-2. No. 83, Sec. 2 Gongdao 5th Rd., Hsinchu City 300070, Taiwan (Chinesisch-Taipeh)',
website: 'www.zealio.com.tw',
emails: ['sylvia@zealio.tw', 'paul@zealio.com.tw']
},
{
id: 'zeit-raum-performance-gmbh',
name: 'zeit:raum performance GmbH',
keywords: ['performance', 'wirtschaftsfoerderung', 'summit', 'aussteller', 'saarbruecken', 'gwsaar', 'wirtschaft', 'foerderung', 'beratung', 'netzwerk', 'innovation', 'technologie', 'entwicklung', 'kooperation', 'partner', 'sponsor', 'mobilitaet', 'zukunft', 'nachhaltigkeit', 'digitalisierung'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C21'
},
role: 'Mitaussteller',
profile: 'zeit:raum performance GmbH ist ein Mitaussteller auf der IAA MOBILITY 2025. Das Unternehmen bietet innovative Lösungen und Dienstleistungen im Bereich der Wirtschafts- und Standortförderung. Es unterstützt Unternehmen bei der Entwicklung und Umsetzung von Projekten.',
themes: [],
address: 'Europaallee 12, 66113 Saarbrücken, Deutschland',
website: 'www.zeitraum.com/',
emails: []
},
{
id: 'zema-ggmbh',
name: 'ZeMA gGmbH',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Eschberger Weg 46, 66121 Saarbrücken, Deutschland',
website: 'www.zema.de',
emails: []
},
{
id: 'zentralverband-deutsches-kraftfahrzeuggewerbe-e-v-zdk',
name: 'Zentralverband Deutsches Kraftfahrzeuggewerbe e. V. (ZDK)',
keywords: ['autohäuser', 'karosseriebetriebe', 'kfz-meisterbetriebe', 'fahrzeugverkauf', 'wartung', 'reparatur', 'service', 'ausbildung', 'automotive', 'handwerk', 'berufsständische interessen', 'umsatz', 'neufahrzeuge', 'gebrauchtfahrzeuge'],
location: {
type: "",
 hallOrPlace: "",
booth: ""
},
role: 'Hauptaussteller',
profile: 'Der ZDK in Bonn, Berlin und Brüssel vertritt die berufsständischen Interessen von 39.230 Autohäusern; Karosserie- und Kfz-Meisterbetrieben mit 468.000 Beschäftigten. Im Jahr 2024 erzielten die im ZDK organisierten Betriebe einen Umsatz von rund 224,2 Milliarden Euro mit dem Verkauf neuer und gebrauchter Fahrzeuge sowie mit Wartung, Reparatur und Service. Bei der Ausbildung ist der ZDK mit über 98.500 Auszubildenden im Handwerk führend.',
themes: ['Automotive'],
address: 'Franz-Lohe-Straße 21, 53129 Bonn, Deutschland',
website: 'www.kfzgewerbe.de',
emails: ['zdk@kfzgewerbe.de', 'weller@kfzgewerbe.de', 'black@kfzgewerbe.de', 'cremer@kfzgewerbe.de']
},
{
id: 'zf-group',
name: 'ZF Group',
keywords: ['technologiekonzern', 'mobilitätssysteme', 'pkw', 'nutzfahrzeuge', 'industrietechnik', 'fahrzeughersteller', 'transportdienstleistungen', 'mobilitätsdienstleistungen', 'produktlösungen', 'softwarelösungen', 'wachstumsmärkte', 'zukunftstechnologien', 'innovationen', 'technologietransfer', 'automotive', 'micromobility', 'road safety', 'circular economy', 'decarbonization', 'supplier', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'D30'
},
role: 'Hauptaussteller',
profile: 'ZF ist ein weltweit aktiver Technologiekonzern. Wir liefern Systeme für die Mobilität von Pkw, Nutzfahrzeugen und Industrietechnik. Für etablierte Fahrzeughersteller sowie für neu entstehende Anbieter von Transport- und Mobilitätsdienstleistungen bietet ZF umfassende Produkt- und Softwarelösungen.',
themes: ['Automotive', 'Micromobility', 'Road Safety', 'Circular Economy', 'Decarbonization', 'Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data'],
address: 'Löwentaler Straße 20, 88046 Friedrichshafen, Deutschland',
website: 'www.zf.com',
emails: ['postoffice@zf.com', 'johannes.jerg@zf.com', 'martin.ehrenfeuchter@zf.com', 'christoph.stroeher@zf.com']
},
{
id: 'zhejiang-sunny-smartlead-technologies',
name: 'Zhejiang Sunny Smartlead Technologies',
keywords: ['automotive camera module', 'sensing', 'viewing', 'in cabin', 'depth sensing', 'under body camera', 'automotive', 'autonomous driving', 'optical background', 'module development', 'manufacturing capacity', 'global suppliers', 'international operation', 'high-quality products', 'international enterprise'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'C22'
},
role: 'Hauptaussteller',
profile: 'Zhejiang Smartlead Technology Co., Ltd., is a subsidiary company of SUNNY Group. It specializes in automotive camera module. Relying on SUNNY\'s profound optical background, rich module development experience and large-scale manufacturing capacity, our company is committed to becoming one of the greatest global automotive camera module suppliers.',
themes: ['Automotive', 'Autonomous Driving'],
address: 'No. 67-69 Fengle Road, Yuyao City, 315400 Zhejiang, China',
website: 'www.sunnysmartlead.com',
emails: ['zl_sales@sunnyoptical.com']
},
{
id: 'zhuoyu-technology-co-ltd',
name: 'Zhuoyu Technology Co., Ltd.',
keywords: ['intelligente fahrlösungen', 'mobilitätstechnologien', 'adas', 'autonome fahrsysteme', 'kernkomponenten', 'personenfahrzeuge', 'automotive', 'mobility as a service', 'smart city mobility', 'road safety', 'regulation', 'liability', 'esgs', 'supplier', 'autonomous driving', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D01'
},
role: 'Hauptaussteller',
profile: 'Die ZHUOYU Technology, 2016 gegründet, ist ein weltweit führender Anbieter intelligenter Fahrlösungen und Mobilitätstechnologien. Mit der Mission, „ein sicheres und müheloses Mobilitätserlebnis für alle zu schaffen“, entwickelt ZHUOYU branchenführende ADAS- und autonome Fahrsysteme sowie ein komplettes Portfolio proprietärer Kernkomponenten.',
themes: ['Automotive', 'Mobility as a Service', 'Smart City Mobility', 'Road Safety', 'Regulation, Liability & ESGs', 'Supplier', 'Autonomous Driving', 'AI & GenAI'],
address: '16-21/F, East Tower, Lepu Building Nanshan District, 518055 ShenZhen, China',
website: 'www.zyt.com',
emails: ['lucas.liu@zyt.com']
},
{
id: 'zionentech',
name: 'Zionentech',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '65, Gadal 1-ro, Gangseo-gu, Busan 46729, Südkorea (KR)',
website: undefined,
emails: []
},
{
id: 'zoppas-industries-heating-element-technologies',
name: 'Zoppas Industries Heating Element Technologies',
keywords: ['heating solutions', 'temperature maintenance', 'automotive sector', 'sustainable development', 'heating elements', 'manufacturing', 'supply chain', 'battery tech', 'global presence', 'innovation', 'italian company', 'production sites'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C24'
},
role: 'Hauptaussteller',
profile: 'Our focus on innovation extends to our heating and temperature maintenance solutions. Our design and manufacturing keep place with the constantly evolving Automotive sector. Zoppas Industries is an Italian company with 60-years legacy in heating elements and systems that contribute to sustainable environmental development, with a global presence, over 8.000 employees and 15 production sites.',
themes: ['Automotive', 'Manufacturing & Supply Chain', 'Battery Tech'],
address: 'Via Podgora 26, 31029 Vittorio Veneto (TV), Italien',
website: 'www.zoppasindustries.com',
emails: ['marketing@zoppas.com', 'alberto.rizzetto@zoppas.com']
},
{
id: 'zukunft-nahverkehr',
name: 'ZUKUNFT NAHVERKEHR',
keywords: ['öffentlicher personennahverkehr', 'mobilitätsanbieter', 'verkehrsunternehmen', 'verbände', 'gewerkschaften', 'innovative konzepte', 'politik', 'mobilität von morgen', 'klimaschutz', 'soziale teilhabe', 'öffentlicher lebensraum'],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP110'
},
role: 'Hauptaussteller',
profile: 'Die Initiative ZUKUNFT NAHVERKEHR (ZNV) wurde gegründet, um etwas zu bewegen. Immerhin bestimmt Mobilität den Alltag von zahllosen Menschen, gestaltet ihren Alltag einfach oder schwierig. Gleichzeitig bietet der ÖPNV die Chance auf mehr Wohlstand, mehr Klimaschutz, mehr Gesundheit, mehr soziale Teilhabe und mehr öffentlichen Lebensraum.',
themes: ['Public Transport'],
address: 'Europa-Allee 70-76, 60486 Frankfurt am Main, Deutschland',
website: 'www.zukunftnahverkehr.de',
emails: ['znv@deutschebahn.com']
},
{
id: '212-off-road-vehicle-co-ltd',
name: '212 Off-Road Vehicle Co., LTD',
keywords: ['off-road automobile', 'global sales network', 'tech-driven innovation', 'adventures', 'new energy off-road vehicle', 't01', 't01navigator', 'wy platform', 'three-door versions', 'pickup trucks', 'hybrid powertrains', 'wb product platform', 'cross-country travel', 'suburban camping', 'urban commuting', 'shandong weiqiao pioneering group', 'fortune global 500', 'aluminium industry', 'textile industry', 'auto sector'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'F13'
},
role: 'Hauptaussteller',
profile: '212 Off-Road Vehicle Co., Ltd. is a specialist off-road automobile company. It has hit about 50 countries and regions and is establishing its global sales network. Backed with 60 years of legendary heritage and tech-driven innovation, 212 is committed to empowering customers to embark on their long-cherished adventures.',
themes: ['Automotive', 'LEV', 'Smart City Mobility'],
address: '568, Jiushui East Road Qingdao, Shandong Province, China, 266000 Qingdao, China',
website: undefined,
emails: ['info@bawauto.com', 'cliff@bawauto.com', 'liyueru@212.com.cn', 'zhangbaoxia@baw.com.cn']
},
{
id: '2electron',
name: '2electron',
keywords: ['adas', 'telematics'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Corso Lombardia 21, 10078 Venaria Reale (TO), Italien',
website: 'www.2electron.com',
emails: []
},
{
id: '3d-mapping-solutions-auffanggesellschaft',
name: '3D Mapping Solutions Auffanggesellschaft',
keywords: ['3d mapping', 'mapping solutions', 'geospatial data', 'digital mapping', 'automotive', 'navigation systems', 'spatial analysis', 'data visualization', 'cartography', 'gis', 'location services', 'mapping technology', 'surveying', 'topography', 'terrain modeling'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B13'
},
role: 'Mitaussteller',
profile: '3D Mapping Solutions Auffanggesellschaft bietet spezialisierte Dienstleistungen im Bereich der digitalen Kartierung und Geodatenverarbeitung an. Das Unternehmen ist bekannt für seine hochpräzisen 3D-Kartierungslösungen, die in verschiedenen Branchen Anwendung finden. Es unterstützt Kunden bei der Umsetzung komplexer Projekte durch innovative Technologien.',
themes: [],
address: 'Raiffeisenstrasse 16, 83607 Holzkirchen, Deutschland',
website: 'www.3d-mapping.de',
emails: []
},
{
id: '3m',
name: '3M',
keywords: ['automotive', 'oem', 'collision repair', 'auto care', 'efficiency', 'performance', 'connectivity', 'longevity', 'safety', 'materials science', 'global footprint', 'operational excellence', 'collaborative innovation', 'technology platforms', 'vehicle enhancement', 'mobility', 'road safety', 'decarbonization', 'manufacturing', 'supply chain', 'supplier', 'software defined vehicles', 'semiconductors', 'chips', 'battery tech', 'entertainment', 'vr'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E10'
},
role: 'Sponsor',
profile: 'In the ever-evolving automotive world, staying relevant requires more than just individual solutions, it demands collaboration with trusted partners who bring valuable insights across OEM, collision repair, auto care, and more. At 3M, we draw from over 100 years of automotive experience and leverage 49 technology platforms to address the industry\'s toughest challenges. Through our diverse portfolio and expertise, we can enhance efficiency, performance, connectivity, longevity, and safety for the entire industry—and advance nearly every vehicle worldwide.',
themes: ['Automotive', 'Road Safety', 'Decarbonization', 'Manufacturing & Supply Chain', 'Supplier', 'Software Defined Vehicles', 'Semiconductors & Chips', 'Battery Tech', 'Entertainment & VR'],
address: '3M Center, St. Paul, MN 55144, USA',
website: 'www.3m.com',
emails: []
},
{
id: '4screen-gmbh',
name: '4.screen GmbH',
keywords: ['echtzeit-interaktion', 'fahrzeugdisplay', 'digitale plattform', 'automobilhersteller', 'digitale geschäftsmodelle', 'nutzungserlebnis', 'agnostische architektur', 'in-car-marketing', 'kontextbezogene inhalte', 'datenschutz', 'verkehrsstandards', 'sicherheitsstandards', 'mercedes-benz', 'audi', 'kia', 'hyundai', 'zeekr', 'stellantis', 'mcdonald’s', 'shell', 'waitrose', 'automotive', 'supplier', 'software defined vehicles'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D40'
},
role: 'Hauptaussteller',
profile: '4screen hat die weltweit erste digitale Plattform entwickelt, die Autofahrende in Echtzeit über das Fahrzeugdisplay mit ihrer Umgebung verbindet. Die Plattform unterstützt Automobilhersteller dabei, neue digitale Geschäftsmodelle zu erschließen und gleichzeitig das digitale Nutzungserlebnis im Fahrzeug gezielt zu verbessern. Als Pionier im Bereich In-Car-Marketing eröffnet 4screen darüber hinaus Marken einen wirkungsvollen neuen Kanal, um kaufbereite Zielgruppen in relevanten Momenten direkt im Fahrzeug anzusprechen.',
themes: ['Automotive', 'Supplier', 'Software Defined Vehicles'],
address: 'Sailerstraße 17, 80809 München, Deutschland',
website: 'www.4screen.com',
emails: ['info@4screen.com', 'press@4screen.com', 'automotive@4screen.com']
},
{
id: 'ard-mobil-mehr-erleben',
name: 'ARD – mobil mehr erleben',
keywords: ['dab+', 'audiothek', 'radio im auto', 'digitalradio', 'hörkomfort', 'audioangebote', 'reportagen', 'podcasts', 'hörspiele', 'audionutzung', 'industrieprojekte', 'hörerlebnis'],
location: {
type: 'Open Space',
hallOrPlace: 'Marienplatz',
booth: 'CL830'
},
role: 'Hauptaussteller',
profile: 'Die ARD präsentiert Themen rund um ihr Audioangebot. Die ARD zeigt und erklärt die Vorteile von Digitalradio und wie es den Hörkomfort im Auto steigert. Die ARD Audiothek ist die Plattform für die vielfältigen Audioangebote der ARD.',
themes: [],
address: 'Rundfunkplatz 1, 80335 München, Deutschland',
website: 'www.ard.de',
emails: []
},
{
id: 'a2mac1',
name: 'A2MAC1',
keywords: ['benchmarking', 'engineering insights', 'automotive', 'mobility industries', 'technical insights', 'competitive analysis', 'trend forecasting', 'vehicle architecture', 'technology', 'performance', 'productivity solutions', 'product development', 'engineering cycle times', 'optimize costs', 'market positioning', 'global presence', 'automotive solutions', 'mobility solutions', 'sustainable engineering', 'ai & genai', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B10'
},
role: 'Hauptaussteller',
profile: 'A2MAC1 is a leading global provider of benchmarking and engineering insights, dedicated to decoding the future of the automotive and mobility industries. We offer a unique blend of technical insights, competitive analysis, and trend forecasting, tailored to meet the specific needs of our clients. A2MAC1’s extensive database and advanced analytical tools provide unparalleled insights into vehicle architecture, technology, and performance.',
themes: ['Automotive', 'AI & GenAI', 'Battery Tech'],
address: '24-26 Quai Alphonse Le Gallo, 92100 Boulogne-Billancourt, Frankreich',
website: 'www.a2mac1.com/',
emails: ['vruty@a2mac1.com', 'mrolland@a2mac1.com']
},
{
id: 'aac-technologies',
name: 'AAC Technologies',
keywords: [],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP160'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Hoogveld 50 24, 9200 Dendermonde, Belgien',
website: 'www.premiumsoundsolutions.com',
emails: []
},
{
id: 'accenture-gmbh',
name: 'Accenture GmbH',
keywords: ['professional services', 'digital core', 'operations optimization', 'revenue growth', 'citizen services', 'technology', 'cloud', 'data', 'ai', 'strategy & consulting', 'technology solutions', 'operations', 'industry x', 'song', '360° value', 'ecosystem relationships', 'global delivery', 'shared success', 'trusted relationships', 'automotive', 'public transport', 'mobility as a service', 'intermodality', 'smart city mobility', 'circular economy', 'decarbonization', 'manufacturing & supply chain', 'supplier', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'cybersecurity'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'E01'
},
role: 'Sponsor',
profile: 'Accenture is a leading global professional services company that helps the world’s leading businesses, governments and other organizations build their digital core, optimize their operations, accelerate revenue growth and enhance citizen services. Technology is at the core of change today, and we are one of the world’s leaders in helping drive that change, with strong ecosystem relationships. Our broad range of services, solutions and assets across Strategy & Consulting, Technology, Operations, Industry X and Song enable us to help our clients reinvent and build trusted, lasting relationships.',
themes: ['Automotive', 'Public Transport', 'Mobility as a Service', 'Intermodality', 'Smart City Mobility', 'Circular Economy', 'Decarbonization', 'Manufacturing & Supply Chain', 'Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Cybersecurity'],
address: 'Campus Kronberg 1, 61476 Kronberg, Deutschland',
website: 'www.accenture.com/',
emails: ['j.p.kupferschmidt@accenture.com', 'juergen.reers@accenture.com']
},
{
id: 'ac-styria-mobilitaetscluster-gmbh',
name: 'AC Styria Mobilitätscluster GmbH',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E10'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Parkring 1, 8074 Raab-Grambach, Österreich',
website: 'www.acstyria.com',
emails: []
},
{
id: 'actia-nordic',
name: 'ACTIA Nordic',
keywords: ['connectivity platforms', 'automotive', 'industrial applications', 'telematics platform', 'global data connectivity', 'ota sw update', 'sdk', 'lte', '5g connectivity', 'ecall', 'cyber security', 'post quantum', 'telematics control unit', 'micromobility', 'road safety', 'software defined vehicles', 'connectivity', 'iot', 'big data'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E20'
},
role: 'Mitaussteller',
profile: 'ACTIA delivers innovative technology and reliable solutions across industries, from automotive to industrial applications. ACU6 is our latest advanced telematics platform with global data connectivity and OTA SW update. Our TCUs offer LTE and 5G connectivity, eCall, and cyber security.',
themes: ['Automotive', 'Micromobility', 'Road Safety', 'Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'Cybersecurity'],
address: 'Datalinjen 3B, 583 30 Linköping, Schweden',
website: 'www.actia.se',
emails: ['sales@actia.se', 'olle.warn@actia.se', 'david.skold@actia.se', 'conny.pethnakin@actia.se']
},
{
id: 'adac-ev',
name: 'ADAC e.V.',
keywords: [],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP195'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Hansastrasse 19, 80686 München, Deutschland',
website: 'www.adac.de',
emails: []
},
{
id: 'advantage-austria-wirtschaftskammer-osterreich',
name: 'ADVANTAGE AUSTRIA Wirtschaftskammer Österreich',
keywords: ['automotive', 'organisationen', 'unternehmen', 'behörden', 'institutionen', 'hauptaussteller', 'wirtschaftskammer', 'austria', 'mobilität', 'summit'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E10'
},
role: 'Hauptaussteller',
profile: 'ADVANTAGE AUSTRIA ist die Außenwirtschaftsorganisation der Wirtschaftskammer Österreich. Sie unterstützt österreichische Unternehmen bei der Erschließung internationaler Märkte.',
themes: ['Automotive'],
address: 'Wiedner Hauptstraße 63, 1045 Wien, Österreich',
website: 'www.wko.at/aussenwirtschaft',
emails: ['aussenwirtschaft.mobility@wko.at']
},
{
id: 'aep-afia-portugal',
name: 'AEP / AFIA Portugal',
keywords: ['business association', 'economic information', 'legal information', 'technological information', 'vocational training', 'trade fairs', 'entrepreneurial trade missions', 'congresses', 'internationalisation', 'portuguese economy', 'business community', 'business associations', 'social partner', 'government', 'development', 'organisationen', 'unternehmen', 'behörden', 'verbände'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D20'
},
role: 'Hauptaussteller',
profile: 'AEP is a private non-profit making and public utility association that supports business activity in areas such as economic, legal and technological information, vocational training, and internationalisation. It acts as a social partner of the Government in discussions relevant to the development of the Portuguese economy.',
themes: [],
address: 'Av. Dr. Antonio Macedo 196, 4450-617 Leca da Palmeira, Portugal',
website: 'www.aeportugal.pt/www.afia.pt',
emails: ['sandra.silva@aeportugal.pt']
},
{
id: 'aew',
name: 'AEW',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E13'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Hammfelddamm 6, 41460 Neuss, Deutschland',
website: 'www.aew.cn',
emails: []
},
{
id: 'agc-automotive-europe',
name: 'AGC Automotive Europe',
keywords: ['autoglas', 'flachglas', 'automobilglas', 'displayglas', 'chemikalien', 'high-tech-materialien', 'fensterproduktion', 'oem', 'ersatzteile', 'montagefertige systeme', 'befestigungsvorrichtungen', 'antennen', 'sensoren', 'heizelemente', 'verglasungen', 'wärmekomfort', 'schallkomfort', 'sichtkomfort', 'automotive', 'supplier', 'autonomous driving', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'B10'
},
role: 'Hauptaussteller',
profile: 'AGC Automotive Europe mit Sitz in Louvain-la-Neuve (Belgien) ist die europäische Autoglas-Niederlassung der AGC-Gruppe. Die AGC Group, deren Kernstück die in Tokio ansässige AGC Inc. ist, ist ein weltweit führender Anbieter von Flach-, Automobil- und Displayglas, Chemikalien und anderen High-Tech-Materialien und -Komponenten.',
themes: ['Automotive', 'Supplier', 'Autonomous Driving', 'Future Drive Technologies incl. H2'],
address: 'Avenue Jean Monnet 4, 1348 Louvain la Neuve, Belgien',
website: 'www.agc-automotive.com',
emails: ['katia.hansen@agc.com', 'karine.druelle-lips@agc.com', 'uli.vennedey@agc.com']
},
{
id: 'ag-optics-co-ltd',
name: 'AG Optics Co., Ltd.',
keywords: ['optics', 'automotive optics', 'military application', 'precision optical components', 'aspherical glass lenses', 'led lighting solutions', 'optical systems', 'vehicle cameras', 'displays', 'design', 'tooling', 'molding', 'coating', 'assembly'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D01'
},
role: 'Mitaussteller',
profile: 'Founded in 2000, AG Optics specializes in the design, development, and manufacturing of precision optical components for automotive applications. Our core expertise lies in aspherical glass lenses, LED lighting solutions, and advanced optical systems used in vehicle cameras and displays.',
themes: [],
address: '198-7, Wangnim-gil Seonghwan-eup, Seobuk-gu, Cheonan-si, Chungcheongnam-do 31008, Südkorea (KR)',
website: 'www.agoptics.co.kr',
emails: ['jung.jaehee@agoptics.co.kr']
},
{
id: 'perciv-ai',
name: 'Perciv AI',
keywords: ['radarbasierte perzeptionssoftware', 'luft- und raumfahrt', 'automobil', 'industriesysteme', 'radar-ki-forschung', 'plattform', 'hardwareunabhängig', 'radarunabhängig', 'integration', 'sensorleistung', 'kostensenkung', 'funktionale sicherheit', 'allwetterbetrieb', 'erkennungsgenauigkeit', 'klassifizierungsgenauigkeit', 'zuverlässigkeit', 'straßen', 'robotik', 'flughäfen', 'lagerhallen', 'offroad-anwendungen', 'automotive', 'road safety', 'supplier', 'software defined vehicles', 'autonomous driving', 'ai & genai', 'remote-controlled vehicles'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D104'
},
role: 'Hauptaussteller',
profile: 'Perciv AI liefert radarbasierte Perzeptionssoftware für Luft- und Raumfahrt, Automobil- und Industriesysteme. Die Perciv-Software ist hardware- und radarunabhängig, lässt sich in bestehende Systeme integrieren und steigert die Leistung installierter Sensoren um bis zu 10×, wodurch Kosten gesenkt werden. Für funktionale Sicherheit und Allwetterbetrieb entwickelt, bietet sie höhere Erkennungs- und Klassifizierungsgenauigkeit sowie Zuverlässigkeit.',
themes: ['Automotive', 'Road Safety', 'Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'AI & GenAI', 'Remote-Controlled Vehicles'],
address: 'Molengraaffsingel 29, 2629 JD Delft, Niederlande',
website: 'www.perciv.ai',
emails: ['fanni.egresits@perciv.ai', 'andras.palffy@perciv.ai', 'balazs.szekeres@perciv.ai']
},
{
id: 'aisin',
name: 'AISIN',
keywords: ['vehicle systems', 'driving', 'turning', 'stopping', 'comfort', 'sustainable society', 'global warming prevention', 'traffic fatalities reduction'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'D21'
},
role: 'Hauptaussteller',
profile: 'AISIN has a wide range of products to offer as a partner in vehicle systems that support ""driving,"" ""turning,"" ""stopping,"" and ""comfort."" Through our products and services, we will contribute to a sustainable society by solving various issues in the world, such as the prevention of global warming and efforts to achieve traffic fatalities accidents free.',
themes: [],
address: '2-1 Asahi-machi, Kariya, Aichi 448-8650, Japan',
website: 'www.aisin.com',
emails: []
},
{
id: 'ai-speech',
name: 'AI Speech',
keywords: ['sprachverarbeitung', 'künstliche intelligenz', 'spracherkennung', 'sprachsynthese', 'automotive', 'smart devices', 'sprachsteuerung', 'dialogsysteme', 'sprachassistenten', 'machine learning'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'C28'
},
role: 'Hauptaussteller',
profile: 'AI Speech ist ein führendes Unternehmen im Bereich der Sprachverarbeitung und künstlichen Intelligenz. Es bietet Lösungen für Spracherkennung und Sprachsynthese an. Die Technologien werden in verschiedenen Branchen wie Automotive und Smart Devices eingesetzt.',
themes: [],
address: 'NO. 14 Building, No. 388 Xin Ping Street, 215021 Suzhou, China',
website: 'www.aispeech.com',
emails: ['marketing@aispeech.com', 'lin.zhou@aispeech.com', 'zhou.tong@aispeech.com']
},
{
id: 'aito',
name: 'AITO',
keywords: ['intelligent ev', 'luxury brand', 'intelligent driving', 'intelligent cockpits', 'intelligent safety', 'intelligent chassis', 'safety features', 'passive safety', 'active safety', 'power safety', 'data security', 'health protection', 'privacy safeguarding', 'cybersecurity', 'automotive'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D40'
},
role: 'Hauptaussteller',
profile: 'AITO is a high-end intelligent EV brand, redefining luxury with intelligence. It enhances safety features and reshapes comfort standards through innovative functions like intelligent driving and cockpits. AITO delivers comprehensive solutions covering power safety, data security, and cybersecurity.',
themes: ['Automotive'],
address: 'Burgemeester Stramanweg 102-103, 1101 AA Amsterdam, Niederlande',
website: 'www.aitoauto.com',
emails: ['press@aitoauto.com', 'kexin.chen570264@seres.cn', 'global-service@aitoauto.com', 'xiaoyu.guo656176@global-seres.com']
},
{
id: 'aladin',
name: 'ALADIN',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'D10'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '333 avenue Georges Clémenceau, 92741 Nanterre, Frankreich',
website: undefined,
emails: []
},
{
id: 'alango-technologies',
name: 'Alango Technologies',
keywords: ['dsp-software', 'sprachverbesserung', 'audiotechnologie', 'hörverbesserung', 'automobilstandards', 'multi-mikrofon-beamforming', 'in-car-kommunikation', 'in-car-karaoke', 'personasound', 'soundaround', 'akustische echounterdrückung', 'adaptive mikrofonarrays', 'dnn-basierte nachhallreduktion', 'geräuschunterdrückung', 'ankunftsrichtungsbestimmung', 'feedbackunterdrückung', 'automatische verstärkungsregelung', 'audio-nachbearbeitung', 'stereoerweiterung', 'bassverstärkung', 'kristallklares audio', 'geringe latenz', 'autoanwendungen', 'verbraucheranwendungen'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C12'
},
role: 'Mitaussteller',
profile: 'Alango ist ein führender Innovator im Bereich DSP-Software mit Spezialisierung auf Sprach-, Audio- und Hörverbesserung. Die lizensierbaren Lösungen erfüllen strenge Automobilstandards und umfassen Technologien wie Multi-Mikrofon-Beamforming und personalisiertes Audio. SoundAround™ ermöglicht das Erfassen kritischer Außengeräusche ohne externe Mikrofone.',
themes: ['Automotive', 'Software Defined Vehicles', 'Autonomous Driving', 'Semiconductors & Chips', 'Future Drive Technologies incl. H2'],
address: 'Etgar 2, 3903213 Tirat Carmel, Israel',
website: 'www.alango.com',
emails: ['info@alango.com', 'robert.schrager@alango.com']
},
{
id: 'aleph-alpha',
name: 'Aleph Alpha',
keywords: ['ki-stack', 'schlüsselfertige lösungen', 'souveräne ki', 'menschenzentrierte ki', 'transformative ki-lösungen', 'phariaai', 'daten sichern', 'vertrauenswürdige anwendungen', 'automotive', 'manufacturing', 'supply chain', 'software defined vehicles', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D143'
},
role: 'Hauptaussteller',
profile: 'Aleph Alpha bietet einen souveränen, E2E KI-Stack und schlüsselfertige Lösungen. Mit einem Team aus internationalen Wissenschaftlern, Ingenieuren und Innovatoren erforscht und entwickelt das Unternehmen transformative KI-Lösungen. Sein Full-Stack-Angebot, PhariaAI, ist die erste Wahl für Unternehmen und staatliche Institutionen, die ihre Souveränität bewahren, ihre Daten sichern und vertrauenswürdige Anwendungen entwickeln wollen.',
themes: ['Automotive', 'Manufacturing & Supply Chain', 'Software Defined Vehicles', 'AI & GenAI'],
address: 'Speyerer Straße 14, 69115 Heidelberg, Deutschland',
website: 'www.aleph-alpha.com/',
emails: ['sales@aleph-alpha.com', 'sophia.eichler@aleph-alpha.com']
},
{
id: 'al-kor-makine-kalip-san-ve-tic-a-s',
name: 'AL-KOR Makine Kalip San. Ve Tic. A.S.',
keywords: ['high-tech r&d', 'automotive industry', 'r&d engineering', 'testing', 'mold design', 'serial part manufacturing', 'lighting', 'electronics', 'mechatronics', 'plastic products', 'metal products', 'innovative products', 'efficient products', 'cutting-edge technology', 'automotive', 'manufacturing & supply chain'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'F12'
},
role: 'Hauptaussteller',
profile: 'We deliver high-tech R&D, design, and production for the automotive industry. We serve our customers across various business lines, including R&D engineering and testing, mold design and production, as well as serial part design and manufacturing. Our expertise on lighting, electronics, mechatronics, and both plastic and metal product groups.',
themes: ['Automotive', 'Manufacturing & Supply Chain'],
address: 'Ömerli Mahallesi, İhsangazi Sokak No:26/1 Arnavutköy, 34555 Istanbul, Türkei',
website: 'www.al-kor.com.tr',
emails: ['info@al-kor.com.tr', 'nairi.darcin@al-kor.com.tr', 'gulnihal.caner@al-kor.com.tr']
},
{
id: 'allied-motion-portugal-lda',
name: 'Allied Motion Portugal Lda',
keywords: ['custom electric motors', 'vehicle applications', 'high-volume production', 'quality management', 'iatf 16949 certification', 'vehicle electrification', 'electric mobility', 'permanent magnet brushless motors', 'system integration', 'safety', 'performance', 'torque range', 'steering systems', 'automotive', 'cycling', 'micromobility', 'public transport', 'supplier', 'autonomous driving'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D20'
},
role: 'Mitaussteller',
profile: 'Allied Motion Portugal develops fully customised electric motor solutions for vehicle applications. High-volume production and an excellent quality management system with IATF 16949 certification position us as one of the main suppliers for vehicle electrification and electric mobility for the most prestigious brands.',
themes: ['Automotive', 'Cycling', 'Micromobility', 'Public Transport', 'Supplier', 'Autonomous Driving'],
address: 'Rua da Longa 300, Modivas, 4485-595 Vila do Conde, Portugal',
website: 'www.alliedmotion.pt',
emails: ['inquiry.pt@allient.com', 'pedro.reis@allient.com', 'rita.lima@allient.com']
},
{
id: 'allied-motion-portugal-lda',
name: 'Allied Motion Portugal Lda',
keywords: ['custom electric motors', 'vehicle applications', 'high-volume production', 'quality management', 'iatf 16949 certification', 'vehicle electrification', 'electric mobility', 'permanent magnet brushless motors', 'system integration', 'safety', 'performance', 'torque range', 'steering systems', 'automotive', 'cycling', 'micromobility', 'public transport', 'supplier', 'autonomous driving'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D20'
},
role: 'Mitaussteller',
profile: 'Allied Motion Portugal develops fully customised electric motor solutions for vehicle applications. High-volume production and an excellent quality management system with IATF 16949 certification position us as one of the main suppliers for vehicle electrification and electric mobility for the most prestigious brands. Our Permanent Magnet Brushless Motors (PMBL), with customised designs, with or without housing, allow for total system integration and a high standard of safety and performance.',
themes: ['Automotive', 'Cycling', 'Micromobility', 'Public Transport', 'Supplier', 'Autonomous Driving'],
address: 'Rua da Longa 300, Modivas, 4485-595 Vila do Conde, Portugal',
website: 'www.alliedmotion.pt',
emails: ['inquiry.pt@allient.com', 'pedro.reis@allient.com', 'rita.lima@allient.com']
},
{
id: 'aws-amazon-web-services',
name: 'AWS (Amazon Web Services)',
keywords: ['cloud computing', 'automotive', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'data analytics', 'machine learning', 'cloud infrastructure', 'digital transformation', 'cybersecurity', 'serverless computing', 'edge computing', 'devops', 'blockchain', 'cloud migration', 'cloud storage', 'cloud security', 'cloud services', 'cloud solutions'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'B10'
},
role: 'Sponsor',
profile: 'AWS (Amazon Web Services) bietet eine breite Palette von Cloud-Computing-Diensten, die speziell für die Automobilindustrie entwickelt wurden. Diese umfassen Lösungen für Software Defined Vehicles, Autonomous Driving und mehr. AWS unterstützt Unternehmen bei der digitalen Transformation durch innovative Technologien.',
themes: ['Automotive', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI'],
address: 'Oskar-von-Miller-Ring 20, 80333 München, Deutschland',
website: 'www.aws.amazon.com/automotive',
emails: []
},
{
id: 'analog-devices',
name: 'Analog Devices',
keywords: ['halbleiter', 'signalverarbeitung', 'analogtechnik', 'mixed-signal', 'sensoren', 'verstärker', 'power-management', 'rf-technik', 'datenwandler', 'embedded-processing', 'automotive', 'industrie', 'kommunikation', 'verbraucherelektronik', 'gesundheitswesen', 'energie', 'aerospace', 'verteidigung'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'C40'
},
role: 'Mitaussteller',
profile: 'Analog Devices ist ein führender Anbieter von Halbleiterlösungen für Signalverarbeitung und Mixed-Signal-Anwendungen. Das Unternehmen bietet eine breite Palette von Produkten, darunter Sensoren, Verstärker, Power-Management- und RF-Technik. Die Lösungen von Analog Devices finden Anwendung in verschiedenen Branchen wie Automotive, Industrie, Kommunikation und Gesundheitswesen.',
themes: [],
address: '4th Floor Record Store 15 Pressing Lane, Hayes UB31EP, Großbritannien',
website: 'www.analog.com',
emails: ['emeamarketing@analog.com', 'mieu-ngan.pang@analog.com']
},
{
id: 'aoni-auto-automotive-technology-ltd',
name: 'Aoni-Auto Automotive Technology LTD',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D153'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Liuxian 2nd Road, 518101 Shenzhen, China',
website: undefined,
emails: []
},
{
id: 'bmw-group',
name: 'BMW GROUP',
keywords: ['automotive', 'test drives', 'family', 'mobility', 'innovation', 'vehicles', 'transportation', 'open space', 'summit', 'exhibitor', 'main exhibitor', 'cars', 'technology', 'driving experience', 'germany', 'munich'],
location: {
type: 'Open Space',
hallOrPlace: 'Max-Joseph-Platz',
booth: 'MJ900'
},
role: 'Hauptaussteller',
profile: 'BMW GROUP is a leading automotive company offering innovative mobility solutions and test drives.',
themes: [],
address: '80809 München, Deutschland',
website: undefined,
emails: []
},
{
id: 'arbe',
name: 'Arbe',
keywords: ['hd radar technology', 'hands-free driving', 'perception radar', 'automotive sensing', 'full autonomy', 'image quality', 'sensor fusion', 'ai perception algorithms', 'free space mapping', 'autonomous transportation', 'automakers', 'tier 1', 'vulnerable road users detection', 'stationary objects mapping', 'false alarms elimination', 'depth sensing', 'relative velocity', 'object orientation', 'long-range detection', 'urban scenarios', 'rural scenarios', 'highway scenarios'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'F11'
},
role: 'Hauptaussteller',
profile: 'Arbe, the global leader in Perception Radar solutions, revolutionizes automotive sensing, enabling safe hands-free driving today while paving the way to full autonomy. Arbe\'s chipset features the industry\'s largest channel array – 48 transmit and 48 receive channels, plus a dedicated processor for massive data streams. Using AI to analyze vehicle surroundings, Arbe enhances perception algorithms and enables real-time free space mapping—pivotal for full autonomy.',
themes: ['Automotive', 'Road Safety', 'Autonomous Driving', 'Semiconductors & Chips'],
address: 'Hashmonaim 107, 6713321 Tel Aviv, Israel',
website: 'www.arberobotics.com',
emails: ['roman.l@arberobotics.com', 'shlomit.h@arberobotics.com']
},
{
id: 'arcadyan-technology',
name: 'Arcadyan Technology',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C03'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'No.8, Sec.2, Guangfu Rd., Hsinchu City 30071, Taiwan (Chinesisch-Taipeh)',
website: undefined,
emails: []
},
{
id: 'arge-automotive-zulieferindustrie',
name: 'ARGE Automotive Zulieferindustrie',
keywords: ['automotive', 'zulieferindustrie', 'mitaussteller', 'summit'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E10'
},
role: 'Mitaussteller',
profile: 'ARGE Automotive Zulieferindustrie ist ein Mitaussteller auf der IAA MOBILITY 2025.',
themes: [],
address: 'Wiedner Hauptstraße 63, 1040 Wien, Österreich',
website: undefined,
emails: []
},
{
id: 'arkamys',
name: 'ARKAMYS',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'B30'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'De-Saint-Exupery-Strasse 10, 60549 Frankfurt am Main, Deutschland',
website: 'www.arkamys.com',
emails: ['contact@arkamys.com']
},
{
id: 'arraymo-technology-co-ltd',
name: 'Arraymo Technology Co., Ltd.',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B23'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '12F, Building N4, No.88, Dongchang Road, 215100 Suzhou, China',
website: 'www.arraymo.com',
emails: []
},
{
id: 'arraymo-technology-co-ltd',
name: 'Arraymo Technology Co., Ltd.',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B23'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '12F, Building N4, No.88, Dongchang Road, 215100 Suzhou, China',
website: 'www.arraymo.com',
emails: []
},
{
id: 'asas-aluminyum-sanayi-ve-ticaret-a-s',
name: 'ASAS Aluminyum Sanayi ve Ticaret A.S.',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'C41'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Ruzgarlibahce Mah. Kumlu Sok. No 2 Beykoz Kavacik, 34810 Istanbul, Türkei',
website: undefined,
emails: []
},
{
id: 'asb',
name: 'ASB',
keywords: ['1. hilfe', 'ausbildung', 'pflege', 'betreuung', 'katastrophenschutz', 'wünschewagen', 'rettung', 'hilfsorganisation', 'wohlfahrtsorganisation', 'gemeinnützig', 'organisationen', 'unternehmen', 'behörden', 'verbände'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS530'
},
role: 'Hauptaussteller',
profile: 'Der Arbeiter-Samariter-Bund Deutschland e.V. (ASB) ist eine bundesweit tätige, parteipolitisch und konfessionell unabhängige gemeinnützige Hilfs- und Wohlfahrtsorganisation, die von über 1,5 Millionen Mitgliedern unterstützt und getragen wird.',
themes: [],
address: 'Attilastr. 1, 12105 Berlin, Deutschland',
website: undefined,
emails: ['kontakt@an-promotion.de']
},
{
id: 'bmw-group',
name: 'BMW GROUP',
keywords: ['automotive', 'test drives', 'family', 'mobility', 'vehicles', 'innovation', 'transportation', 'open space', 'summit', 'exhibitor', 'main exhibitor', 'cars', 'technology', 'driving experience', 'germany', 'munich'],
location: {
type: 'Open Space',
hallOrPlace: 'Max-Joseph-Platz',
booth: 'MJ900'
},
role: 'Hauptaussteller',
profile: 'BMW GROUP is a leading automotive company offering innovative mobility solutions and test drives.',
themes: [],
address: '80809 München, Deutschland',
website: undefined,
emails: []
},
{
id: 'asterisco-tech-srl',
name: 'Asterisco Tech srl',
keywords: ['testsysteme', 'e-motoren', 'wechselrichter', 'onboard-ladegeräte', 'batterien', 'validierung', 'produktionsprüfung', 'mechanische komponenten', 'hydraulische komponenten', 'elektrische komponenten', 'elektronische komponenten', 'prüfsysteme', 'elektrofahrzeuge', 'e-achsen', 'stromrichter', 'automotive', 'supplier', 'battery tech', 'cybersecurity'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B11'
},
role: 'Mitaussteller',
profile: 'Asterisco Tech entwickelt und fertigt maßgeschneiderte Lösungen für die Validierung und Produktionsprüfung mechanischer, hydraulischer, elektrischer und elektronischer Komponenten. Wir sind spezialisiert auf Prüfsysteme für wichtige Komponenten von Elektrofahrzeugen, darunter Wechselrichter, E-Motoren, E-Achsen, Batterien, Bordladegeräte und Stromrichter.',
themes: ['Automotive', 'Supplier', 'Battery Tech', 'Cybersecurity'],
address: 'Via Yuri Gagarin 73, 06073 Corciano (PG), Italien',
website: 'www.asteriscotech.com/',
emails: ['info@asteriscotech.com']
},
{
id: 'at-automotive-thuringen-ev',
name: 'at - automotive thüringen e.V.',
keywords: ['automobilbranche', 'netzwerk', 'entwicklungen', 'innovationen', 'analysen', 'trends', 'weiterbildung', 'mitarbeiterqualifizierung', 'wirtschaftspolitische rahmenbedingungen', 'öffentlichkeitsarbeit', 'mitgliedsunternehmen', 'automotive'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D27'
},
role: 'Mitaussteller',
profile: 'automotive thüringen - Der Partner für die Automobilbranche in Thüringen. Als Partner und Netzwerk organisieren wir gemeinsam die besten Voraussetzungen, damit neue Entwicklungen und erfolgreiche Innovationen in Thüringen gelingen. Mit fundierten Analysen zu relevanten Trends, Programmen zur Weiterbildung und Mitarbeiterqualifizierung, der Gestaltung wirtschaftspolitischer Rehmenbedingungen und durch treffsichere Öffentlichkeitsarbeit unterstützt automotive thüringen seine Mitgliedsunternehmen.',
themes: ['Automotive'],
address: 'Schlösserstraße 24, 99084 Erfurt, Deutschland',
website: 'www.automotive-thueringen.de',
emails: ['office@automotive-thueringen.de', 'skellner@automotive-thueringen.de']
},
{
id: 'ate-audio-technology-engineering',
name: 'ATE Audio Technology Engineering',
keywords: ['lautsprechersysteme', 'automotive', 'proaudio', 'luftfahrtindustrie', 'rmd lautsprecher', 'ring mode driver', 'biegewellenwandler', 'umweltschonend', 'recyclebar', 'membranoberfläche', 'audiophile performance', 'akustisches off axis verhalten', 'mb glc showcar', 'automotive', 'public transport', 'mobility on demand', 'mobility as a service', 'entertainment & vr', 'future drive technologies incl. h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B13'
},
role: 'Mitaussteller',
profile: 'Nach über 30 Jahren der Lautsprechersystementwicklung für die Leader der Automotive-, Proaudio-, Luftfahrtindustrie etc. der Durchbruch. Die Weltneuheit mit Game Changer Qualität, die ideale Punktschallquelle. Der RMD = Ring Mode Driver.',
themes: ['Automotive', 'Public Transport', 'Mobility on demand', 'Mobility as a Service', 'Entertainment & VR', 'Future Drive Technologies incl. H2'],
address: 'Am Illerkanal 28, 89231 Neu-Ulm, Deutschland',
website: 'www.ateaudio.de',
emails: ['ng@ateaudio.de']
},
{
id: 'atqor',
name: 'atQor',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E25'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '2000 Argentia Road Plaza 2, Suite 207, Mississauga L5N 1P7, Kanada',
website: 'www.atqor.com',
emails: []
},
{
id: 'att-angelantoni-test-technologies-srl',
name: 'ATT Angelantoni Test Technologies Srl',
keywords: ['testtechnologien', 'emobility', 'automotive', 'umweltprüfungen', 'klimakammern', 'vibrationstests', 'thermische tests', 'prüfsysteme', 'oem', 'tier-1', 'supplier', 'elektromobilität', 'fahrzeugtests', 'umweltsimulation', 'prüfstände', 'automobilindustrie', 'forschung und entwicklung', 'qualitätssicherung', 'innovationen', 'technologiepartner'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'B11'
},
role: 'Mitaussteller',
profile: 'ATT Angelantoni Test Technologies Srl bietet umfassende Testlösungen für die Automobilindustrie, einschließlich Umweltprüfungen und Klimakammern. Als Mitaussteller auf der IAA MOBILITY präsentiert das Unternehmen seine neuesten Innovationen im Bereich der Elektromobilität.',
themes: [],
address: 'Località Cimacolle, 464, 06056 Massa Martana (PG), Italien',
website: 'www.angelantoni.it',
emails: []
},
{
id: 'bmw-group',
name: 'BMW GROUP',
keywords: ['automotive', 'test drives', 'family', 'mobility', 'innovation', 'vehicles', 'transportation', 'open space', 'summit', 'exhibitor', 'main exhibitor', 'cars', 'technology', 'future mobility', 'sustainability', 'urban mobility', 'electric vehicles', 'connected cars', 'autonomous driving', 'smart cities'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'E01'
},
role: 'Hauptaussteller',
profile: 'BMW GROUP is a leading automotive company known for its innovative vehicles and commitment to future mobility solutions.',
themes: [],
address: '80809 München, Deutschland',
website: undefined,
emails: []
},
{
id: 'bmw-group',
name: 'BMW GROUP',
keywords: ['automobile', 'test drives', 'family', 'mobility', 'automotive industry', 'innovation', 'open space', 'summit', 'hauptaussteller'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'E01'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: '80809 München, Deutschland',
website: undefined,
emails: []
},
{
id: 'attivar-gaskets-seals',
name: 'Attivar Gaskets & Seals',
keywords: ['gummi-dichtungen', 'silikon-dichtungen', 'maßlösungen', 'automotive', 'tier-1', 'haushaltsgeräte', 'industrie', 'transport', 'co-design', 'reverse engineering', 'materialauswahl', 'werkzeugentwicklung', 'fkm', 'vmq', 'acm', 'aem', 'cr', 'epdm', 'hnbr', 'nbr', 'iso 9001:2015', 'fmea', 'ppap', 'cpk', 'imds'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: 'Attivar ist ein familiengeführtes Unternehmen, spezialisiert auf technisch anspruchsvolle Gummi- und Silikonkomponenten für herausfordernde Anwendungen. Wir unterstützen Tier-1-Kunden im Automotive-Sektor sowie in Haushaltsgeräten, Industrie und Transport. Unser technisches Team stellt sicher, dass jedes Teil höchste Leistungs- und Haltbarkeitsstandards erfüllt.',
themes: ['Automotive'],
address: 'Borgata Vittori 1, 12046 Montà, Italien',
website: 'www.attivar.it/en/',
emails: ['info@attivar.it', 'marco.zuccone@attivar.it']
},
{
id: 'audi',
name: 'Audi',
keywords: ['automobilhersteller', 'fahrzeuge', 'test drives', 'probefahrten', 'hauptaussteller', 'wittelsbacherplatz', 'halle b1', 'summit', 'open space', 'kundenbetreuung'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'D10'
},
role: 'Hauptaussteller',
profile: 'Audi ist ein führender Automobilhersteller, der innovative Fahrzeuge und Technologien präsentiert. Besuchen Sie uns für Probefahrten am Wittelsbacherplatz.',
themes: [],
address: 'Auto-Union-Str. 1, 85057 Ingolstadt, Deutschland',
website: 'www.audi.de',
emails: ['kundenbetreuung@audi.de']
},
{
id: 'august-wilhelm-scheer-institut-fur-digitale-produkte-und-prozesse-ggmbh',
name: 'August - Wilhelm Scheer Institut für digitale Produkte und Prozesse gGmbH',
keywords: ['digitale produkte', 'prozesse', 'wirtschaftsforderung', 'summit', 'mitaussteller'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C21'
},
role: 'Mitaussteller',
profile: 'Das August - Wilhelm Scheer Institut für digitale Produkte und Prozesse gGmbH ist ein Mitaussteller auf der IAA MOBILITY 2025.',
themes: [],
address: 'Campus Nord D 5 1, 66123 Saarbrücken, Deutschland',
website: undefined,
emails: []
},
{
id: 'aumovio',
name: 'AUMOVIO',
keywords: ['adaptive powerhouse', 'future mobility', 'hard- und software', 'moderne mobilitätslösungen', 'innovative sensoren', 'displays', 'brems- und komfortsysteme', 'anzeige- und bedienelemente', 'audio- und kameraprodukte', 'vernetzung von fahrer und fahrzeug', 'software', 'architekturplattformen', 'assistenzsysteme', 'softwaredefinierte fahrzeuge', 'autonome fahrzeuge', 'automotive', 'supplier', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'cybersecurity'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'B01'
},
role: 'Hauptaussteller',
profile: 'AUMOVIO ist ein Spin-Off der Continental AG und bietet Hard- und Software, moderne Mobilitätslösungen und exzellente Services. Mit innovativen Produkten für Märkte von heute und morgen macht AUMOVIO die Mobilität der Zukunft sicher, begeisternd, vernetzt und autonom. Das Portfolio umfasst innovative Sensoren und Displays, Brems- und Komfortsysteme, Anzeige- und Bedienelemente sowie Audio- und Kameraprodukte.',
themes: ['Automotive', 'Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'Cybersecurity'],
address: 'Guerickestrasse 7, 60488 Frankfurt, Deutschland',
website: 'www.continental-mobile-robots.com/',
emails: []
},
{
id: 'authentic-vision-gmbh',
name: 'Authentic Vision GmbH',
keywords: ['fälschungen', 'graumärkte', 'smartphone', 'produktdigitalisierung', 'dpp', 'mobile authentifizierung', 'betrug', 'unberechtigter handel', 'gray market', 'technologien', 'regulation', 'liability', 'esgs', 'connectivity', 'iot', 'big data'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E10'
},
role: 'Mitaussteller',
profile: 'Authentic Vision, mit Hauptsitz in Salzburg, verfügt über mehr als ein Jahrzehnt an Erfahrung in verschiedenen Industrien. Das Unternehmen unterstützt weltweit führende Marken bei der Bekämpfung von Fälschungen, Betrug und unberechtigtem Handel auf dem Gray Market. Führend in den Bereichen Produktdigitalisierung (DPP) und mobiler Authentifizierung stellt Authentic Vision sicher, dass seine Kunden durch die Technologien von morgen geschützt sind.',
themes: ['Regulation, Liability & ESGs', 'Connectivity, IoT & Big Data'],
address: 'Ludwig-Bieringer-Platz 1, 5071 Wals-Siezenheim, Österreich',
website: 'www.authenticvision.com/industries/automotive/',
emails: ['contact-us@authenticvision.com', 'richard.stooss@authenticvision.com']
},
{
id: 'authentic-vision-gmbh',
name: 'Authentic Vision GmbH',
keywords: ['fälschungen', 'graumärkte', 'smartphone', 'produktdigitalisierung', 'mobile authentifizierung', 'betrug', 'unberechtigter handel', 'gray market', 'technologien', 'regulation', 'liability', 'esgs', 'connectivity', 'iot', 'big data'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E10'
},
role: 'Mitaussteller',
profile: 'Authentic Vision, mit Hauptsitz in Salzburg, verfügt über mehr als ein Jahrzehnt an Erfahrung in verschiedenen Industrien. Das Unternehmen unterstützt weltweit führende Marken bei der Bekämpfung von Fälschungen, Betrug und unberechtigtem Handel auf dem Gray Market. Führend in den Bereichen Produktdigitalisierung (DPP) und mobiler Authentifizierung stellt Authentic Vision sicher, dass seine Kunden durch die Technologien von morgen geschützt sind.',
themes: ['Regulation, Liability & ESGs', 'Connectivity, IoT & Big Data'],
address: 'Ludwig-Bieringer-Platz 1, 5071 Wals-Siezenheim, Österreich',
website: 'www.authenticvision.com/industries/automotive/',
emails: ['contact-us@authenticvision.com', 'richard.stooss@authenticvision.com']
},
{
id: 'die-autobahn-gmbh-des-bundes',
name: 'Die Autobahn GmbH des Bundes',
keywords: ['planung', 'bau', 'betrieb', 'erhaltung', 'finanzierung', 'verwaltung', 'autobahnnetz', 'verkehrsmanagement', 'verkehrszentrale', 'intelligente verkehrssysteme', 'mobilität', 'infrastruktur', 'road safety', 'charging and refueling infrastructure incl. energy grid'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'D11'
},
role: 'Hauptaussteller',
profile: 'Die Autobahn GmbH des Bundes ist seit dem 1. Januar 2021 für Planung, Bau, Betrieb, Erhaltung, Finanzierung und Verwaltung des deutschen Autobahnnetzes verantwortlich. Mit rund 13.000 Kilometern betreut sie eine der größten und leistungsfähigsten Infrastrukturen Europas. Ziel der Gesellschaft ist es, die Autobahnen deutschlandweit effizienter, sicherer und nachhaltiger zu betreiben – mit einheitlichen Standards und modernem Verkehrsmanagement.',
themes: ['Charging and Refueling Infrastructure incl. Energy Grid', 'Road Safety'],
address: 'Heidestraße 15, 10557 Berlin, Deutschland',
website: 'www.autobahn.de',
emails: ['kontakt@autobahn.de']
},
{
id: 'autodatas',
name: 'AUTODATAS',
keywords: ['automobile datendienste', 'benchmark', 'innovationskraft', 'moderne technologie', 'mobilität', 'intelligente datenplattform', 'analysen', 'maßgeschneiderte lösungen', 'leistung', 'kosten', 'engineering', 'nachhaltigkeit', 'lieferkette', 'automotive', 'circular economy', 'manufacturing & supply chain', 'supplier', 'ai & genai', 'semiconductors & chips', 'battery tech'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'F12'
},
role: 'Hauptaussteller',
profile: 'AUTODATAS ist ein weltweit führender Anbieter von automobilen Datendiensten und Benchmark. Mit Innovationskraft und modernster Technologie treiben wir die Zukunft der Mobilität voran. Gestützt auf unsere intelligente Datenplattform ‚DARWIN‘ liefern wir tiefgehende Analysen und maßgeschneiderte Lösungen in fünf entscheidenden Dimensionen: Leistung, Kosten, Engineering, Nachhaltigkeit und Lieferkette.',
themes: ['Automotive', 'Circular Economy', 'Manufacturing & Supply Chain', 'Supplier', 'AI & GenAI', 'Semiconductors & Chips', 'Battery Tech'],
address: 'Am Handwerkerhof 2, 85540 Haar, Deutschland',
website: 'www.autodatas.com',
emails: ['info@autodatas.com', 'berndeppert@autodatas.com', 'johannesbrand@autodatas.com', 'shuzichen@autodatas.com']
},
{
id: 'autolink-information-technology-co-ltd',
name: 'Autolink Information Technology Co., Ltd.',
keywords: ['intelligent vehicle cockpits', 'cockpit-driving integration controllers', 'smart cockpit domain controller', 'chinese car manufacturers', 'great wall motor', 'gac', 'chery', 'nio', 'byd', 'supplier', 'digitale dienste', 'autonome zielführung', 'intelligent mobility', 'technology company', 'automated production line', 'global market', 'eu', 'middle east', 'south america', 'southeast asia'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C13'
},
role: 'Hauptaussteller',
profile: 'Autolink is a leading Chinese technology company specializing in intelligent vehicle cockpits. The company focuses on intelligent cockpit and cockpit-driving integration controllers, and owns the world\'s first fully automated smart cockpit domain controller production line. Its products are supplied to major Chinese car manufacturers such as Great Wall Motor, GAC, Chery, NIO, and BYD.',
themes: ['Supplier'],
address: 'No.2 Gaokai Road, 214124 Wuxi, China',
website: 'www.en.auto-link.com.cn',
emails: ['jiangqi@auto-link.com.cn']
},
{
id: 'automobilwoche-crain-communications-gmbh',
name: 'Automobilwoche - Crain Communications GmbH',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'A10'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: 'Argelsrieder Feld 13 Technopark, 82234 Oberpfaffenhofen, Deutschland',
website: 'www.automobilwoche.de',
emails: []
},
{
id: 'auve-tech-ou',
name: 'Auve Tech OÜ',
keywords: ['autonomous driving', 'urban mobility', 'last-mile solutions', 'purpose-built vehicles', 'navigation software', 'scalability', 'adaptability', 'reliability', 'traffic conditions', 'reduce congestion', 'reduce emissions', 'quality of life', 'partners', 'collaborators', 'public transport', 'mobility as a service', 'smart city mobility', 'smart country mobility', 'manufacturing', 'supply chain'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C313'
},
role: 'Hauptaussteller',
profile: 'Auve Tech develops and produces autonomous driving technology focused on transforming urban mobility in only- and last-mile solutions. We develop both the purpose-built vehicles as well as the software that enables vehicles to navigate complex city environments safely and efficiently. Our mission is to make autonomous driving accessible, safe, and practical, helping cities reduce congestion and emissions while improving quality of life.',
themes: ['Public Transport', 'Mobility as a Service', 'Smart City Mobility', 'Smart Country Mobility', 'Manufacturing & Supply Chain', 'Autonomous Driving'],
address: 'Vabaõhumuuseumi tee 1, 13522 Tallinn, Estland',
website: 'www.auve.tech',
emails: ['ceo@auve.tech', 'hbraun@guident.com']
},
{
id: 'autonomous-reply',
name: 'Autonomous Reply',
keywords: ['autonome systeme', 'ki', 'edge', 'cloud', 'integration', 'automobilindustrie', 'nutzfahrzeugindustrie', 'smart-city-industrie', 'autonomous things', 'sensorik', 'infrastruktur', 'beratung', 'software-entwicklung', 'integration', 'computer vision', 'deep learning', 'edge-to-cloud', 'software defined vehicles', 'autonomous driving', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E11'
},
role: 'Mitaussteller',
profile: 'Autonomous Reply ist innerhalb der Reply Gruppe das spezialisierte Unternehmen für die Software- und System-Integration autonomer Dinge. Die Experten beraten und unterstützen Unternehmen in der Automobil-, Nutzfahrzeug- und Smart-City-Industrie in allen Aspekten der Autonomous Things, von der Sensorik bis zur Infrastruktur. Die Dienstleistungen umfassen Beratung, Software-Entwicklung und die Integration von autonomen Lösungen.',
themes: ['Software Defined Vehicles', 'Autonomous Driving', 'AI & GenAI'],
address: 'Riesstraße 22, 80992 München, Deutschland',
website: 'www.reply.com/autonomous-reply/de',
emails: ['autonomous@reply.de', 'p.schiekofer@reply.de', 's.meyer@reply.de']
},
{
id: 'autoregion-ev',
name: 'autoregion e.V.',
keywords: ['fahrzeugbranche', 'kooperationen', 'kompetenz-cluster', 'synergien', 'öffentlichkeitsarbeit', 'wirtschaft', 'wissenschaft', 'bildung', 'politik', 'wissenstransfer', 'strategische zusammenarbeit', 'strukturwandel'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C21'
},
role: 'Mitaussteller',
profile: 'Wir sind die Vertretung der unternehmerischen Interessen der Fahrzeugbranche und bündeln dabei die Kräfte der gesamten Großregion. Ein besonderer Schwerpunkt liegt auf den Kooperationen mit bestehenden Einrichtungen sowie auf der engen Zusammenarbeit mit etablierten Kompetenz-Clustern.',
themes: [],
address: 'Franz-Josef-Röder-Straße 9, 66119 Saarbrücken, Deutschland',
website: 'www.autoregion.eu',
emails: ['a.gehl@autoregion.eu']
},
{
id: 'autoregion-ev',
name: 'autoregion e.V.',
keywords: ['fahrzeugbranche', 'kooperationen', 'kompetenz-cluster', 'synergien', 'öffentlichkeitsarbeit', 'wirtschaft', 'wissenschaft', 'bildung', 'politik', 'wissenstransfer', 'strategische zusammenarbeit', 'strukturwandel'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C21'
},
role: 'Mitaussteller',
profile: 'Wir sind die Vertretung der unternehmerischen Interessen der Fahrzeugbranche und bündeln dabei die Kräfte der gesamten Großregion. Ein besonderer Schwerpunkt liegt auf den Kooperationen mit bestehenden Einrichtungen sowie auf der engen Zusammenarbeit mit etablierten Kompetenz-Clustern.',
themes: [],
address: 'Franz-Josef-Röder-Straße 9, 66119 Saarbrücken, Deutschland',
website: 'www.autoregion.eu',
emails: ['a.gehl@autoregion.eu']
},
{
id: 'avatr',
name: 'AVATR',
keywords: ['smart electric vehicles', 'sev', 'intelligent mobility', 'user experience', 'high-end brand', 'electric vehicles', 'future-oriented technologies', 'intelligent companion', 'global brand', 'software defined vehicles', 'automotive', 'smart city mobility', 'decarbonization', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D40'
},
role: 'Hauptaussteller',
profile: 'Founded in 2018, AVATR Technology commits to exploring future-oriented humanized mobility technologies and creating a warm and intelligent user experience. As a leader in the new track of smart electric vehicles (SEV), AVATR Technology is committed to building an international high-end SEV brand.',
themes: ['Automotive', 'Smart City Mobility', 'Decarbonization', 'Supplier', 'Software Defined Vehicles'],
address: 'Building 5, No.106 West Section of Jinkai Avenue, 400020 Chongqing, China',
website: 'www.avatr.com/en',
emails: []
},
{
id: 'avenga-germany-gmbh',
name: 'Avenga Germany GmbH',
keywords: ['automobilmarken', 'softwaredefinierte fahrzeuge', 'beratungsunternehmen', 'technologiepartner', 'ki-gesteuerte technologien', 'fahrzeugentwicklung', 'eingebettete systeme', 'ivi', 'fahrzeugsteuerungssoftware', 'vernetzte fahrzeuge', 'cloud-dienste', 'ki/ml', 'datentechnik', 'v2x-kommunikation', 'digitale abläufe', 'it-infrastruktur', 'mobile apps', 'ui/ux', 'enterprise software', 'devops', 'automotive', 'public transport', 'mobility on demand', 'mobility as a service', 'smart city mobility', 'supplier', 'connectivity', 'iot', 'big data', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'C40'
},
role: 'Mitaussteller',
profile: 'Avenga ist ein internationaler Beratungs- und Technologiepartner für weltweit führende Unternehmen und liefert einzigartige Lösungen zur Bewältigung komplexer geschäftlicher und gesellschaftlicher Herausforderungen. Wir unterstützen Unternehmen aus verschiedenen Branchen, einschließlich der Automobilindustrie, bei der Umstellung auf KI-gesteuerte Technologien. Mit über 300 Automobilspezialisten und einer soliden Erfolgsbilanz gestalten wir die Zukunft softwaredefinierter Fahrzeuge mit.',
themes: ['Automotive', 'Public Transport', 'Mobility on demand', 'Mobility as a Service', 'Smart City Mobility', 'Supplier', 'Software Defined Vehicles', 'Connectivity, IoT & Big Data', 'AI & GenAI'],
address: 'Bahnhofsvorplatz 1, 50667 Köln, Deutschland',
website: 'www.avenga.com',
emails: ['hello@avenga.com', 'liubov.lazarenko@avenga.com', 'katerina.kakasheva@avenga.com']
},
{
id: 'aves-reality-gmbh',
name: 'Aves Reality GmbH',
keywords: ['3d maps', 'simulation', 'adas', 'v&v', 'semantic 3d maps', 'geospatial data', 'physical ai', '3d digital twin', 'hd-roadmaps', 'autonomous driving'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D135'
},
role: 'Hauptaussteller',
profile: 'AVES Reality generates semantic 3D maps from geospatial data to make simulation of physical AI more efficient and globally scalable. Our software platform AVES Launcher turns any place on earth into a 3D digital twin world including HD-roadmaps, ready for simulation.',
themes: ['Autonomous Driving'],
address: 'Mittenwalder Str. 39, 82467 Garmisch-Partenkirchen, Deutschland',
website: 'www.avesreality.com',
emails: []
},
{
id: 'avl-software-and-functions-gmbh',
name: 'AVL Software and Functions GmbH',
keywords: ['public transport', 'mobility on demand', 'software defined vehicles', 'autonomous driving'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS435'
},
role: 'Mitaussteller',
profile: 'AVL Software and Functions GmbH ist ein Mitaussteller auf der IAA MOBILITY 2025, spezialisiert auf innovative Softwarelösungen im Bereich der Mobilität.',
themes: ['Public Transport', 'Mobility on demand', 'Software Defined Vehicles', 'Autonomous Driving'],
address: 'Im Gewerbepark B29, 93059 Regensburg, Deutschland',
website: 'www.avl.com',
emails: ['rodingresearch@avl.com', 'info.sfr@avl.com']
},
{
id: 'avl-software-and-functions-gmbh',
name: 'AVL Software and Functions GmbH',
keywords: ['mobility technology', 'automotive industry', 'drive systems', 'vehicle architectures', 'platform solutions', 'electromobility', 'adas', 'vehicle software', 'innovation', 'international customers', 'future technologies', 'r&d activities'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E11'
},
role: 'Mitaussteller',
profile: 'With more than 11,200 employees, AVL is one of the world\'s leading mobility technology companies with international customers from the automotive industry and other sectors. From the idea generation phase to series production, AVL covers the development of new drive systems, vehicle architectures and platform solutions. Special focus is on future technologies such as electromobility, ADAS/AD and vehicle software.',
themes: ['Automotive', 'Public Transport'],
address: 'Im Gewerbepark B 29, 93059 Regensburg, Deutschland',
website: 'www.avl.com',
emails: ['info.sfr@avl.com']
},
{
id: 'axera-semiconductor-co-ltd',
name: 'Axera Semiconductor Co., LTD.',
keywords: ['ai perception', 'edge computing chips', 'smart driving', 'smart cockpits', 'intelligent chassis', 'semiconductor technology', 'automotive', 'autonomous driving', 'ai computing', 'mobility experiences'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A3',
booth: 'A11'
},
role: 'Hauptaussteller',
profile: 'Axera Semiconductor Co., Ltd. (""AXERA"") was established in May 2019, a leading innovator dedicated to developing world-class AI perception and edge computing chips, empowering on device AI computing, smart driving, and edge computing applications. With a comprehensive chip portfolio tailored for the smart automotive market, including smart driving, smart cockpits, and intelligent chassis, we leverage cutting-edge semiconductor technology to enable safer, smarter, and more convenient mobility experiences.',
themes: ['Automotive', 'Autonomous Driving', 'AI & GenAI', 'Semiconductors & Chips'],
address: 'No. 505 Zhangjiang Road, 201210 Shanghai, China',
website: undefined,
emails: ['wangruozhu@axera-tech.com', 'zhoumo@axera-tech.com']
},
{
id: 'bako-motors',
name: 'Bako Motors',
keywords: ['solar electric vehicles', 'last-mile delivery', 'micro-mobility', 'sustainable transportation', 'eco-friendly mobility', 'environmental preservation', 'automotive', 'lev', 'micromobility', 'smart city mobility'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D109'
},
role: 'Hauptaussteller',
profile: 'Bako Motors is a manufacturer specializing in solar electric vehicles designed for last-mile delivery and micro-mobility. Committed to advancing sustainable transportation, Bako aims to democratize eco-friendly mobility for all while also contributing to environmental preservation by avoiding the emission of polluting gases.',
themes: ['Automotive', 'LEV', 'Micromobility', 'Smart City Mobility'],
address: '48 Quai du Lazaret, 13002 Marseille, Frankreich',
website: 'bakomotors.com',
emails: ['boubaker.siala@bakomotors.com']
},
{
id: 'bako-motors',
name: 'Bako Motors',
keywords: ['solar electric vehicles', 'last-mile delivery', 'micro-mobility', 'sustainable transportation', 'eco-friendly mobility', 'environmental preservation', 'automotive', 'lev', 'micromobility', 'smart city mobility'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'D109'
},
role: 'Hauptaussteller',
profile: 'Bako Motors is a manufacturer specializing in solar electric vehicles designed for last-mile delivery and micro-mobility. Committed to advancing sustainable transportation, Bako aims to democratize eco-friendly mobility for all while also contributing to environmental preservation by avoiding the emission of polluting gases.',
themes: ['Automotive', 'LEV', 'Micromobility', 'Smart City Mobility'],
address: '48 Quai du Lazaret, 13002 Marseille, Frankreich',
website: 'bakomotors.com',
emails: ['boubaker.siala@bakomotors.com']
},
{
id: 'bareways-gmbh',
name: 'Bareways GmbH',
keywords: ['location ai', 'navigation', 'travel ai', 'auftragsentwicklungen', 'full-stack-navigation', 'in-vehicle-ai', 'kartenbasiertes erlebnis', 'e-mobilität', 'off-grid-navigation', 'travel ai assistant', 'scenic routes', 'softwarelösungen', 'apis', 'white-label-produkte', 'overlanding', 'tourismus', 'flottenanalytik', 'automotive', 'decarbonization', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C319'
},
role: 'Hauptaussteller',
profile: 'Bareways entwickelt intelligente Software für die Mobilität von morgen – dort, wo Konnektivität auf Neugier trifft. Ob Full-Stack-Navigation, In-Vehicle-AI oder maßgeschneiderte Entwicklungen – Bareways ermöglicht smartere, sicherere und inspirierendere Mobilitätserlebnisse. Im Zentrum steht Location AI: eine einzigartige Fusion aus Karten-, Wetter- und Satellitendaten, Fahrerprofilen und nutzergenerierten Inhalten.',
themes: ['Automotive', 'Decarbonization', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI'],
address: 'Maria-Goeppert-Str. 3, 23562 Lübeck, Deutschland',
website: 'www.bareways.ai',
emails: ['info@bareways.com', 'moritz.vongrotthuss@bareways.com']
},
{
id: 'battery-competence-cluster-nl',
name: 'Battery Competence Cluster NL',
keywords: ['batterietechnologie', 'energiewende', 'batterie-ökosystem', 'industrie', 'wissenseinrichtungen', 'branchenverbände', 'niederländische batterieindustrie', 'transportindustrie', 'schifffahrtsindustrie', 'öffentlich-private partnerschaften', 'anwendungsorientierte entwicklung', 'internationale wertschöpfungskette', 'beschäftigung', 'industrielle entwicklung', 'automotive', 'charging and refueling infrastructure', 'circular economy', 'decarbonization', 'mining and handling of raw materials', 'battery tech', 'future drive technologies'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: 'Das Battery Competence Cluster – NL ist das Innovationsprogramm für Unternehmen, Wissensinstitutionen und Organisationen, die gemeinsam Wissen erwerben und Kompetenzen im Bereich der Batterietechnologie entwickeln möchten. Ziel ist es, das führende Programm für anwendungsorientierte Entwicklung von Batterietechnologie zu werden.',
themes: ['Automotive', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Circular Economy', 'Decarbonization', 'Mining and Handling of Raw Materials', 'Battery Tech', 'Future Drive Technologies incl. H2'],
address: 'Automotive Campus 30, 5708 JZ Helmond, Niederlande',
website: 'batterycompetencecluster.nl/',
emails: ['info@batterycompetencecluster.nl', 'p.engels@batterycompetencecluster.nl']
},
{
id: 'bayerisches-staatsministerium-fur-wirtschaft-landesentwicklung-und-energie',
name: 'Bayerisches Staatsministerium für Wirtschaft, Landesentwicklung und Energie',
keywords: ['mobilitätsbranche', 'transformation', 'automobilindustrie', 'innovation', 'nachhaltigkeit', 'digitalisierung', 'autonomes shuttle', 'elektromobilität', 'fahrzeugindustrie', 'maschinenbau', 'metallindustrie', 'bayern innovativ', 'resilientes umdenken', 'technologieoffener ermöglicher', 'interaktive erlebnisinseln', 'zeitreise durch die mobilität', 'familienaktivitäten', 'bayern tattoos'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B11'
},
role: 'Hauptaussteller',
profile: 'Bayern ist und bleibt ein Ort der Innovation. Als technologieoffener Ermöglicher unterstützt das Bayerische Staatsministerium für Wirtschaft, Landesentwicklung und Energie die Mobilitätsbranche aktiv und wirkungsvoll bei ihrer tiefgreifenden Transformation.',
themes: ['Bayern als Partner', 'Stärke durch Transformation', 'Innovation als Motor', 'Vergangenheit', 'Nachhaltigkeit', 'Gegenwart', 'Digitalisierung', 'Zukunft'],
address: 'Prinzregentenstraße 28, 80538 München, Deutschland',
website: 'www.stmwi.bayern.de',
emails: ['info@stmwi.bayern.de', 'lena.mueller@bayern-innovativ.de', 'larissa.klockner@stmwi.bayern.de', 'michael.schalk@stmwi.bayern.de']
},
{
id: 'bayerisches-staatsministerium-fur-wohnen-bau-und-verkehr',
name: 'Bayerisches Staatsministerium für Wohnen, Bau und Verkehr',
keywords: ['bayerische mobilitätskonzepte', 'digitale informationssysteme', 'radverkehr', 'schienenverkehr', 'straßenverkehr', 'mobilitätsprojekte', 'tag der kommunen', 'reality-schneepflugsimulator', 'automotive', 'cycling', 'public transport', 'intermodality', 'smart country mobility', 'road safety', 'circular economy', 'regulation', 'liability', 'esgs', 'autonomous driving'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS425'
},
role: 'Hauptaussteller',
profile: 'Auf der Ludwigstraße im Open Space bespielen wir viele interessante Mobilitätsthemen unseres Hauses. Wir präsentieren unsere digitalen Informationssysteme für den Rad-, Schienen- und Straßenverkehr und zeigen verschiedene Mobilitätsprojekte aus ganz Bayern.',
themes: ['Automotive', 'Cycling', 'Public Transport', 'Intermodality', 'Smart Country Mobility', 'Road Safety', 'Circular Economy', 'Regulation, Liability & ESGs', 'Autonomous Driving'],
address: 'Franz-Josef-Strauß-Ring 4, 80539 München, Deutschland',
website: 'www.stmb.bayern.de',
emails: ['poststelle@stmb.bayern.de']
},
{
id: 'bayern-innovativ-gmbh',
name: 'Bayern Innovativ GmbH',
keywords: ['innovationsmanagement', 'netzwerke', 'digitalisierung', 'energie', 'bau', 'gesundheit', 'material', 'produktion', 'mobilität', 'sicherheit', 'kreativwirtschaft', 'wirtschaft', 'wissenschaft', 'politik', 'synergien', 'mittelstand', 'unternehmensberatung', 'zukunftsfelder', 'markteinführung', 'ressourcen', 'ideen', 'technologien'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B13'
},
role: 'Hauptaussteller',
profile: 'Die Bayern Innovativ fördert die Entwicklung tragfähiger Ideen und Technologien zu echten Innovationen. Wir geben die richtigen Impulse, um Ihre Ideen zum Erfolg zu führen, wir fördern Ihre Projekte und wir vernetzen Branchen und Märkte. Unsere Leistungen zielt darauf ab, die bayerische Wirtschaft nachhaltig zu stärken.',
themes: ['Automotive', 'International Trade and Markets'],
address: 'Am Tullnaupark 8, 90402 Nürnberg, Deutschland',
website: 'www.bayern-innovativ.de',
emails: ['info@bayern-innovativ.de', 'messe@bayern-innovativ.de']
},
{
id: 'cluster-automotive-bayern-innovativ',
name: 'Cluster Automotive (Bayern Innovativ)',
keywords: ['automobilhersteller', 'automobilzulieferer', 'cluster-treffs', 'kongresse', 'arbeitskreise', 'workshops', 'verbundprojekte', 'förderprogramme', 'antriebsstrang', 'innenraum', 'elektrik', 'elektronik', 'fahrerassistenzsysteme', 'querschnittsthemen', 'kooperationsprojekte', 'bayern innovativ'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'B11'
},
role: 'Mitaussteller',
profile: 'Das Netzwerk des Clusters Automotive umfasst mehr als 700 Unternehmen und Institute aus dem Automobilsektor. Der Cluster bringt sich als Impulsgeber in viele Aktivitäten seines Trägers, der Netzwerkorganisation Bayern Innovativ, ein. Er unterstützt Akteure beim Zugang zu Förderprogrammen und beteiligt sich aktiv an Projekten.',
themes: ['Automotive', 'LEV', 'Intermodality', 'Smart City Mobility', 'Software Defined Vehicles', 'Autonomous Driving'],
address: 'Am Tullnaupark 8, 90402 Nürnberg, Deutschland',
website: 'www.bayern-innovativ.de',
emails: ['info@bayern-innovativ.de']
},
{
id: 'beamr',
name: 'Beamr',
keywords: ['autonomous driving', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'B31'
},
role: 'Hauptaussteller',
profile: 'Beamr ist ein führendes Unternehmen im Bereich Autonomous Driving und AI & GenAI.',
themes: ['Autonomous Driving', 'AI & GenAI'],
address: 'Hamenofim 10, 4672561 Hertzelya, Israel',
website: 'www.beamr.com',
emails: ['info@beamr.com']
},
{
id: 'beijing-qcraft-intelligent-technology-co-ltd',
name: 'Beijing QCraft Intelligent Technology Co., Ltd',
keywords: ['adas', 'telematics', 'automotive', 'public transport', 'supplier', 'autonomous driving', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'A11'
},
role: 'Hauptaussteller',
profile: 'Beijing QCraft Intelligent Technology Co., Ltd ist ein führendes Unternehmen im Bereich ADAS und Telematik. Das Unternehmen fokussiert sich auf autonome Fahrtechnologien und künstliche Intelligenz.',
themes: ['Automotive', 'Public Transport', 'Supplier', 'Autonomous Driving', 'AI & GenAI'],
address: 'No.19 Zhongguancun Street, Haidian District, Beijing, China, 100080 Beijing, China',
website: 'qcraft.ai/en',
emails: ['yunong@qcraft.ai', 'lidong@qcraft.ai', 'zhaogang@qcraft.ai']
},
{
id: 'beijing-qcraft-intelligent-technology-co-ltd',
name: 'Beijing QCraft Intelligent Technology Co., Ltd',
keywords: ['adas', 'telematics', 'automotive', 'public transport', 'supplier', 'autonomous driving', 'ai', 'genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'A11'
},
role: 'Hauptaussteller',
profile: 'Beijing QCraft Intelligent Technology Co., Ltd ist ein führendes Unternehmen im Bereich ADAS und Telematik. Das Unternehmen fokussiert sich auf autonome Fahrtechnologien und künstliche Intelligenz.',
themes: ['Automotive', 'Public Transport', 'Supplier', 'Autonomous Driving', 'AI & GenAI'],
address: 'No.19 Zhongguancun Street, Haidian District, Beijing, China, 100080 Beijing, China',
website: 'qcraft.ai/en',
emails: ['yunong@qcraft.ai', 'lidong@qcraft.ai', 'zhaogang@qcraft.ai']
},
{
id: 'bertrandt-ag',
name: 'Bertrandt AG',
keywords: ['engineering-dienstleister', 'automotive', 'digitalisierung', 'e-mobilität', 'autonome systeme', 'adas-lösungen', 'software', 'elektronik', 'systemkompetenz', 'wertschöpfungskette', 'technologische lösungen', 'sicherheit', 'nachhaltigkeit', 'public transport', 'mobility on demand', 'mobility as a service', 'smart city mobility', 'charging and refueling infrastructure', 'energy grid', 'circular economy', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'battery tech', 'cybersecurity'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'C40'
},
role: 'Mitaussteller',
profile: 'Bertrandt entwickelt passgenaue Lösungen für komplexe Anforderungen. Ein unabhängiger, internationaler Engineering-Dienstleister mit über 50 Jahren Erfahrung und rund 13.000 Mitarbeitenden an mehr als 50 Standorten weltweit. Mit tiefem Automotive-Know-how, branchenübergreifender Expertise und einem ganzheitlichen System- und Produktverständnis entwickeln wir technologische Lösungen entlang der gesamten Wertschöpfungskette.',
themes: ['Automotive', 'Public Transport', 'Mobility on demand', 'Mobility as a Service', 'Smart City Mobility', 'Charging and Refueling Infrastructure incl. Energy Grid', 'Circular Economy', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'Battery Tech', 'Cybersecurity'],
address: 'Birkensee 1, 71139 Ehningen, Deutschland',
website: 'www.bertrandt.com',
emails: ['info@bertrandt.com', 'verena.lindner@bertrandt.com', 'ramon.feldpausch@bertrandt.com', 'julia.schmid@bertrandt.com']
},
{
id: 'bike2future-gmbh',
name: 'BIKE2FUTURE GmbH',
keywords: ['gebrauchte premium bikes', 'nachhaltigkeit', 'fahrräder', 'ressourcen schonen', 'erstklassige fahrerlebnisse', 'cycling', 'micromobility'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS488'
},
role: 'Mitaussteller',
profile: 'Bei BIKE2FUTURE findest Du gebrauchte Premium Bikes in Top-Zustand. Wir geben Fahrrädern ein zweites Leben und tragen so aktiv zu mehr Nachhaltigkeit bei: Das schont wertvolle Ressourcen und sorgt für erstklassige Fahrerlebnisse – gut für die Umwelt und dich.',
themes: ['Cycling', 'Micromobility'],
address: 'Friedrich-Schaefer-Straße 2, 64331 Weiterstadt, Deutschland',
website: 'bike2future.de/',
emails: ['info@bike2future.de', 'petrak@bikeleasing.de']
},
{
id: 'bikeleasing-service-gmbh-co-kg',
name: 'Bikeleasing-Service GmbH & Co. KG',
keywords: ['dienstrad-leasing', 'nachhaltige mobilität', 'fahrradleasing', 'rennrad', 'cityrad', 'tourenrad', 'lastenrad', 'mountainbike', 'e-bike', 'pendlerfahrrad', 'freizeitfahrrad', 'unternehmen', 'selbstständige', 'freiberufler', 'cycling', 'circular economy', 'decarbonization'],
location: {
type: 'Open Space',
hallOrPlace: 'Ludwigstraße',
booth: 'LS488'
},
role: 'Hauptaussteller',
profile: 'Nachhaltige, gesunde Mobilität für alle - ganz ohne Risiko und zu unschlagbar günstigen Konditionen: Dienstrad-Leasing lohnt sich für Unternehmen und ihre Mitarbeiter ebenso wie für Selbstständige und Freiberufler. Das Traumrad günstig leasen: egal ob Rennrad, City-, Touren- oder Lastenrad, Mountain- oder E-Bike.',
themes: ['Cycling', 'Circular Economy', 'Decarbonization'],
address: 'Ernst-Reuter-Str. 2, 37170 Uslar, Deutschland',
website: 'www.bikeleasing.de',
emails: ['info@bikeleasing.de', 'petrak@bikeleasing.de']
},
{
id: 'bitsensing',
name: 'bitsensing',
keywords: ['radartechnologie', 'automotive', 'sensorlösungen', 'verkehrsüberwachung', 'sicherheitssysteme', 'iot', 'smart city', 'autonomes fahren', 'startups', 'innovation', 'technologie', 'südkorea', 'hauptaussteller', 'summit'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D140'
},
role: 'Hauptaussteller',
profile: 'bitsensing ist ein führendes Unternehmen im Bereich der Radartechnologie, das innovative Sensorlösungen für die Automobilindustrie und Smart Cities entwickelt. Das Unternehmen bietet fortschrittliche Systeme zur Verkehrsüberwachung und Sicherheit an. Als Startup aus Südkorea ist bitsensing ein Hauptakteur im Bereich autonomes Fahren und IoT.',
themes: [],
address: '4, Godeung-ro, Sujeong-gu, Seongnam-si 13105, Südkorea (KR)',
website: 'www.bitsensing.com',
emails: []
},
{
id: 'black-sesame-technologies',
name: 'Black Sesame Technologies',
keywords: ['intelligent vehicle computing', 'automotive-grade computing', 'smart vehicles', 'autonomous driving', 'adas', 'smart cockpit', 'advanced imaging', 'interconnection', 'computing platform', 'solutions', 'ip cores', 'algorithms', 'support software', 'huashan series', 'wudang series', 'mission-critical capabilities', 'supplier'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'A14'
},
role: 'Hauptaussteller',
profile: 'Black Sesame Technologies is a leading provider in automotive-grade computing platform and solutions for smart vehicles. The Company offers full-stack ADAS capabilities to meet broad customer needs through automotive-grade computing platform and solutions, powered by the Company\'s own IP cores, algorithms and support software.',
themes: ['Automotive', 'Supplier', 'Autonomous Driving'],
address: '32nd Floor, Shenzhen State Investment Center, 1278 Heping Avenue, Qingshan District, 430080 Wuhan, China',
website: 'www.blacksesame.com/en',
emails: ['pr@bst.ai']
},
{
id: 'bl-innovare',
name: 'BL Innovare',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle B2',
booth: 'E25'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '525 Cochrane Drive Unit E, Markham L3R 8E3, Kanada',
website: 'www.bl-innovare.com',
emails: []
},
{
id: 'bmw',
name: 'BMW',
keywords: ['automobilhersteller', 'fahrzeuge', 'bmw group', 'automotive', 'mobilität', 'innovation', 'technologie', 'premiumfahrzeuge', 'elektromobilität', 'nachhaltigkeit', 'fahrzeugentwicklung', 'automobilindustrie', 'bmw m', 'luxusfahrzeuge', 'fahrzeugdesign'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'E01'
},
role: 'Hauptaussteller',
profile: 'BMW ist ein führender Automobilhersteller, der für seine Premiumfahrzeuge und innovative Technologien bekannt ist. Das Unternehmen engagiert sich stark in den Bereichen Elektromobilität und Nachhaltigkeit.',
themes: [],
address: 'Petuelring 130, 80788 München, Deutschland',
website: 'www.bmwgroup.com',
emails: []
},
{
id: 'bmw-group',
name: 'BMW GROUP',
keywords: ['automobilhersteller', 'fahrzeuge', 'probefahrten', 'bmw', 'bmw m', 'bmw motorrad', 'mini', 'hauptaussteller', 'mitaussteller', 'open space', 'summit', 'max-joseph-platz', 'halle a1'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'E01'
},
role: 'Hauptaussteller',
profile: 'BMW GROUP präsentiert sich auf der IAA MOBILITY als Hauptaussteller. Entdecken Sie die Marken BMW, BMW M, BMW Motorrad und MINI.',
themes: [],
address: 'Petuelring 130, 80809 München, Deutschland',
website: 'www.bmwgroup.com/',
emails: ['corporate.website@bmwgroup.com']
},
{
id: 'bmw-m',
name: 'BMW M',
keywords: ['probefahrten', 'test drives', 'automotive', 'fahrzeuge', 'performance cars', 'sportwagen', 'bmw', 'max-joseph-platz', 'open space', 'mj900'],
location: {
type: 'Open Space',
hallOrPlace: 'Max-Joseph-Platz',
booth: 'MJ900'
},
role: 'Mitaussteller',
profile: 'BMW M präsentiert seine neuesten Performance-Fahrzeuge im Open Space am Max-Joseph-Platz. Erleben Sie die Faszination von BMW M bei Probefahrten.',
themes: [],
address: 'Daimlerstraße 19, 85748 Garching-Hochbrück, Deutschland',
website: undefined,
emails: []
},
{
id: 'bmw-motorrad',
name: 'BMW Motorrad',
keywords: ['motorrad', 'fahrzeuge', 'mobilität', 'hauptaussteller', 'open space', 'bmw', 'max-joseph-platz', 'iaa mobility', 'transportation', 'automotive'],
location: {
type: 'Open Space',
hallOrPlace: 'Max-Joseph-Platz',
booth: 'MJ960'
},
role: 'Hauptaussteller',
profile: 'BMW Motorrad präsentiert innovative Mobilitätslösungen und Fahrzeuge im Open Space der IAA MOBILITY.',
themes: [],
address: 'Petuelring 130, 80809 München, Deutschland',
website: 'www.bmw-motorrad.com',
emails: []
},
{
id: 'bmw-motorrad',
name: 'BMW Motorrad',
keywords: ['motorrad', 'open space', 'hauptaussteller', 'max-joseph-platz'],
location: {
type: 'Open Space',
hallOrPlace: 'Max-Joseph-Platz',
booth: 'MJ960'
},
role: 'Hauptaussteller',
profile: 'BMW Motorrad präsentiert sich auf der IAA MOBILITY 2025 im Open Space am Max-Joseph-Platz.',
themes: [],
address: 'Petuelring 130, 80809 München, Deutschland',
website: 'www.bmw-motorrad.com',
emails: []
},
{
id: 'bmw-group',
name: 'BMW GROUP',
keywords: ['automotive', 'test drives', 'family', 'mobility', 'innovation', 'vehicles', 'transportation', 'open space', 'summit', 'exhibitor', 'main exhibitor'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'E01'
},
role: 'Hauptaussteller',
profile: 'BMW GROUP is a leading automotive company offering innovative mobility solutions and test drives.',
themes: [],
address: '80809 München, Deutschland',
website: undefined,
emails: []
},
{
id: 'bosch-ebike-systems',
name: 'Bosch eBike Systems',
keywords: ['ebike-mobilität', 'innovative produkte', 'digitale services', 'antriebssysteme', 'abs fürs ebike', 'connected biking', 'drive unit', 'akku', 'display', 'app', 'fahrradmarken', 'modulares produkt-portfolio', 'technologie-know-how', 'fertigungs-know-how', 'gesunde mobilität', 'sichere mobilität', 'nachhaltige mobilität', 'cycling', 'micromobility', 'road safety', 'circular economy', 'manufacturing & supply chain', 'supplier', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'battery tech'],
location: {
type: 'Open Space',
hallOrPlace: 'Odeonsplatz',
booth: 'OP310'
},
role: 'Hauptaussteller',
profile: 'Bosch eBike Systems gestaltet die Zukunft der eBike-Mobilität mit innovativen Produkten und digitalen Services, die von hocheffizienten Antriebssystemen über das erste serienreife ABS fürs eBike bis hin zu Connected Biking Lösungen reichen. Heute vertrauen mehr als 100 weltweit führende Fahrradmarken dem perfekt aufeinander abgestimmten, modularen Produkt-Portfolio.',
themes: ['Cycling', 'Micromobility', 'Road Safety', 'Circular Economy', 'Manufacturing & Supply Chain', 'Supplier', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Battery Tech'],
address: 'Robert-Bosch-Platz 1, 70839 Gerlingen-Schillerhöhe, Deutschland',
website: 'www.bosch-ebike.com',
emails: ['kontakt@bosch.de', 'tamara.winograd@de.bosch.com']
},
{
id: 'robert-bosch-gmbh',
name: 'Robert Bosch GmbH',
keywords: ['technologieunternehmen', 'dienstleistungen', 'mobility', 'automobil', 'elektronisches motormanagement', 'schleuderschutz esp', 'common-rail-dieseltechnik', 'automotive', 'cycling', 'lev', 'decarbonization', 'supplier', 'software defined vehicles', 'autonomous driving', 'connectivity', 'iot', 'big data', 'ai', 'genai', 'semiconductors', 'chips', 'battery tech', 'future drive technologies', 'h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'D01'
},
role: 'Hauptaussteller',
profile: 'Die Bosch-Gruppe ist ein international führendes Technologie- und Dienstleistungsunternehmen mit weltweit rund 417 900 Mitarbeitenden. Mobility ist der größte Unternehmensbereich der Bosch-Gruppe und einer der führenden Anbieter in der Mobilitätsindustrie. Bosch Mobility verfolgt die Vision einer sicheren, nachhaltigen und begeisternden Mobilität.',
themes: ['Automotive', 'Cycling', 'LEV', 'Decarbonization', 'Supplier', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Semiconductors & Chips', 'Battery Tech', 'Future Drive Technologies incl. H2'],
address: 'Robert-Bosch-Platz 1, 70839 Gerlingen-Schillerhöhe, Deutschland',
website: 'www.iaa-mobility.com/de/',
emails: ['contact@bosch.com', 'kontakt@bosch.de']
},
{
id: 'bossard-group',
name: 'Bossard Group',
keywords: ['verbindungstechnik', 'multimaterialien', 'ultraschall-verbindungslösungen', 'litewweight', 'inwwerse', 'mm-welding', 'automobilindustrie', 'luftfahrt', 'nachhaltigkeit', 'produktion', 'energieverbrauch', 'metall-kunststoff-verbindungen', 'serienfertigung', 'ingenieurteams', 'umweltfreundlich', 'kosteneffizient', 'circular economy', 'manufacturing & supply chain'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E10'
},
role: 'Mitaussteller',
profile: 'Wir sind ein technologieorientiertes Unternehmen, das sich auf fortschrittliche Ultraschall-Verbindungslösungen für Multimaterial-Bauteile spezialisiert hat. Mit eigenen Verfahren wie LiteWWeight™ und InWWerse™ ermöglicht MM-Welding schnelle, formschlüssige Verbindungen in poröse und leichte Materialien – ganz ohne Vorbohren oder Klebstoffe. Die Technologie nutzt Ultraschallenergie und Reibung, um Komponenten in weniger als einer Sekunde zu verbinden.',
themes: ['Automotive', 'Circular Economy', 'Manufacturing & Supply Chain'],
address: 'Im Südpark 185, 4030 Linz, Österreich',
website: 'www.bossard.com/global-en/product-solutions/brands/welding-technology/mm-welding',
emails: ['matthias.mitter@bossard.com']
},
{
id: 'bourguignon-barre-pere-et-fils',
name: 'Bourguignon-Barré Père et Fils',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'D10'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: '45 Rue du Commodo, 08800 Thiers, Frankreich',
website: undefined,
emails: []
},
{
id: 'boxon-ab',
name: 'Boxon AB',
keywords: ['global packaging', 'automotive packaging', 'oem', 'suppliers', 'just-in-time delivery', 'quality assurance', 'sustainability', 'logistics flows', 'reusable packaging', 'custom-designed protective packaging', 'sustainable packaging solutions', 'automation systems', 'durable labels', 'global traceability', 'circular economy', 'international trade and markets'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B3',
booth: 'E20'
},
role: 'Mitaussteller',
profile: 'Boxon is a global packaging solutions provider. We are a trusted strategic partner in automotive packaging, with deep industry knowledge of the global automotive supply chain. Our portfolio includes over 3,000 products and services, designed to optimize efficiency, reduce costs, and support circularity.',
themes: ['Automotive', 'Circular Economy', 'International Trade and Markets', 'Supplier'],
address: 'Grustagsgatan 3, 254 64 Helsingborg, Schweden',
website: 'www.boxon.com',
emails: ['ellinor.persson@boxon.com', 'alexander.stautenberg@boxon.com', 'roy.lallo@boxon.com', 'thomas.leboulzec@boxon.com']
},
{
id: 'friedrich-boysen-gmbh-co-kg',
name: 'Friedrich Boysen GmbH & Co. KG',
keywords: ['abgastechnik', 'batteriegehäuse', 'wasserstoff-tanksysteme', 'bedienelemente', 'elektronikbauteile', 'energiespeicher', 'redox-flow-batteriesysteme', 'brennstoffzellen', 'wasserstoff', 'fertigungstechnologien', 'premium-automobilkunden', 'automotive', 'decarbonization', 'manufacturing & supply chain', 'supplier', 'battery tech', 'future drive technologies incl. h2'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'D12'
},
role: 'Hauptaussteller',
profile: 'Als Spezialist für Abgastechnik treibt Boysen die technologische Transformation entscheidend voran. Mit neuen Produktgruppen wie Batteriegehäusen, Wasserstoff-Tanksystemen, Bedienelementen und Elektronikbauteilen bieten wir unseren Premium-Automobilkunden eine herausragende Vielfalt an innovativen Fertigungstechnologien.',
themes: ['Automotive', 'Decarbonization', 'Manufacturing & Supply Chain', 'Supplier', 'Battery Tech', 'Future Drive Technologies incl. H2'],
address: 'Friedrich-Boysen-Str. 14-17, 72213 Altensteig, Deutschland',
website: 'www.boysen-online.de',
emails: ['friedrich.boysen@boysen-online.de', 'christian.grimm@bin.boysen-online.de']
},
{
id: 'braid-technologies',
name: 'Braid Technologies',
keywords: ['generative ai', 'industrial design automation', 'engineering design', 'manufacturing guarantees', 'shape generation', 'physics', 'mathematics', 'computer science', 'design requirements', 'automotive oem', 'vehicle weight reduction', 'development cycle reduction', 'physical constraints', 'strength', 'rigidity', 'vibration', 'manufacturing technology', 'automotive', 'decarbonization', 'ai & genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C302'
},
role: 'Hauptaussteller',
profile: 'Braid Technologies automates engineering design through innovative generative AI technology with manufacturing guarantees. By combining cutting-edge knowledge in physics, mathematics, computer science, and more, their proprietary generative AI enables efficient ""shape generation"" based on principles. Major automotive OEMs have already recognized the value of Braid\'s contributions in reducing vehicle weight and shortening development cycle.',
themes: ['Automotive', 'Decarbonization', 'AI & GenAI'],
address: '6F VORT Shibuya East, 1-3-7 Shibuya Shibuya-ku, Tokyo 150-0002, Japan',
website: 'www.braid.tech',
emails: ['hexi@braid.tech', 'ivo@braid.tech', 'yuta@braid.tech']
},
{
id: 'braid-technologies',
name: 'Braid Technologies',
keywords: ['generative ai', 'industrial design automation', 'engineering design', 'manufacturing guarantees', 'shape generation', 'automotive oem', 'vehicle weight reduction', 'development cycle reduction', 'physics', 'mathematics', 'computer science', 'strength', 'rigidity', 'vibration', 'manufacturing technology', 'design proposals', 'decarbonization', 'ai & genai'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C302'
},
role: 'Hauptaussteller',
profile: 'Braid Technologies automates engineering design through innovative generative AI technology with manufacturing guarantees. By combining cutting-edge knowledge in physics, mathematics, computer science, and more, our proprietary generative AI enables efficient ""shape generation"" based on principles. Major automotive OEMs have already recognized the value of Braid\'s contributions in reducing vehicle weight and shortening development cycle.',
themes: ['Automotive', 'Decarbonization', 'AI & GenAI'],
address: '6F VORT Shibuya East, 1-3-7 Shibuya Shibuya-ku, Tokyo 150-0002, Japan',
website: 'www.braid.tech',
emails: ['hexi@braid.tech', 'ivo@braid.tech', 'yuta@braid.tech']
},
{
id: 'bmw-group',
name: 'BMW GROUP',
keywords: ['automotive', 'test drives', 'family', 'mobility', 'innovation', 'vehicles', 'transportation', 'open space', 'summit', 'exhibitor', 'main exhibitor', 'cars', 'technology', 'future mobility', 'sustainability', 'urban mobility', 'electric vehicles', 'connected cars', 'autonomous driving', 'smart cities'],
location: {
type: 'Open Space',
hallOrPlace: 'Max-Joseph-Platz',
booth: 'MJ900'
},
role: 'Hauptaussteller',
profile: '',
themes: [],
address: '80809 München, Deutschland',
website: undefined,
emails: []
},
{
id: 'buhler-motor-gmbh',
name: 'Bühler Motor GmbH',
keywords: ['elektrohydraulische antriebssysteme', 'elektromechanische antriebssysteme', 'mechatronische antriebslösungen', 'dc kleinmotoren', 'bldc kleinmotoren', 'kleingetriebemotoren', 'pumpen', 'mechatronik', 'sensorik', 'aktorik', 'kundenspezifische antriebe', 'automobilindustrie', 'industrielle anwendungen', 'automotive', 'micromobility'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C10'
},
role: 'Mitaussteller',
profile: 'Bühler Motor steht für maßgeschneiderte und zuverlässige mechatronische Antriebslösungen. Unsere Kompetenz reicht weit über DC/BLDC-Kleinmotoren, Kleingetriebemotoren und Pumpen hinaus. Hauptsächlich für die Automobilindustrie und zahlreiche industrielle Anwendungen.',
themes: ['Automotive', 'Micromobility'],
address: 'Anne-Frank-Str. 33-35, 90459 Nürnberg, Deutschland',
website: 'www.buehlermotor.com',
emails: ['info@buehlermotor.com', 'peter.stengel@buehlermotor.com']
},
{
id: 'bundesamt-fur-sicherheit-in-der-informationstechnik-bsi',
name: 'Bundesamt für Sicherheit in der Informationstechnik (BSI)',
keywords: ['organisationen', 'unternehmen', 'behörden', 'normung', 'gesetzgebung', 'sicherheit', 'informationstechnik'],
location: {
type: 'Summit',
hallOrPlace: 'Halle B1',
booth: 'A21'
},
role: 'Hauptaussteller',
profile: 'Das Bundesamt für Sicherheit in der Informationstechnik (BSI) ist eine zentrale Behörde für die Sicherheit der Informationstechnik in Deutschland.',
themes: [],
address: 'Godesberger Allee 185-189, 53175 Bonn, Deutschland',
website: 'www.bsi.bund.de',
emails: []
},
{
id: 'bundesministerium-fuer-verkehr',
name: 'Bundesministerium für Verkehr',
keywords: ['moderne verkehrspolitik', 'sichere verkehrspolitik', 'nachhaltige verkehrspolitik', 'mobilität', 'wirtschaftlichkeit', 'zukunftsfähigkeit', 'klimaschutz', 'starke bahn', 'klimafreundliche fahrzeuge', 'sichere radwege', 'sichere fußwege', 'zuverlässige infrastruktur', 'gesellschaftliche teilhabe', 'ministerien', 'behörden'],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP180'
},
role: 'Hauptaussteller',
profile: 'Das Bundesministerium für Verkehr setzt sich für eine moderne, sichere und nachhaltige Verkehrspolitik ein – eine Politik, die Vertrauen schafft und Perspektiven eröffnet. Mobilität verbindet Menschen, stärkt Wirtschaft und verbessert die Lebensqualität.',
themes: [],
address: 'Invalidenstraße 44, 10115 Berlin, Deutschland',
website: 'www.bmv.de',
emails: ['buergerinfo@bmv.bund.de']
},
{
id: 'bund-gegen-alkohol-und-drogen-im-strassenverkehr-e-v',
name: 'Bund gegen Alkohol und Drogen im Straßenverkehr e.V.',
keywords: ['präventionsmedien', 'vortragsveranstaltungen', 'fahrsimulatoren', 'verkehrssicherheit', 'aufklärung', 'symposien', 'fortbildungen', 'richter', 'staatsanwälte', 'polizeibeamte', 'verkehrsteilnehmer', 'alkohol', 'drogen', 'medikamente', 'fahrtüchtigkeit', 'prävention', 'forschung', 'jugendverbände', 'fahrschulen', 'bundeswehr'],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'KP155'
},
role: 'Mitaussteller',
profile: 'Unser Ziel ist es, Unfälle durch die Einwirkung von Alkohol, Drogen oder Medikamenten beim Führen eines Fahrzeugs im Straßenverkehr zu verhindern. Wir klären über die Gefahren legaler und illegaler Substanzen auf und fördern Forschung in diesem Bereich.',
themes: [],
address: 'Hansastraße 13, 20149 Hamburg, Deutschland',
website: 'www.bads.de',
emails: ['zentrale@bads.de']
},
{
id: 'burg-design-a-kurz-company',
name: 'Burg Design – a KURZ company',
keywords: [],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'C21'
},
role: 'Mitaussteller',
profile: '',
themes: [],
address: 'Im Stadtgut Zone A/C, 4407 Steyr, Österreich',
website: 'www.burg-design.com',
emails: []
},
{
id: 'business-france',
name: 'BUSINESS FRANCE',
keywords: ['public consulting', 'international development', 'french economy', 'export-led growth', 'foreign investment', 'business image', 'investment location', 'v.i.e program', 'export revenues', 'french smes', 'mid-size companies', 'foreign investment decisions', 'jobs created', 'jobs maintained'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A1',
booth: 'D10'
},
role: 'Hauptaussteller',
profile: 'Business France is the public consulting business serving the international development of the French economy. It is responsible for fostering export-led growth by French businesses, as well as promoting and facilitating foreign investment in France.',
themes: [],
address: '77 Boulevard Saint Jacques, 75014 Paris, Frankreich',
website: 'www.businessfrance.fr',
emails: ['juliette.bernard@businessfrance.fr']
},
{
id: 'buyutech-teknoloji-san-ve-tic-as',
name: 'Büyütech Teknoloji San. ve Tic. A.Ş.',
keywords: ['intelligent camera', 'vision tech', 'camera-based perception systems', 'mobility industry', 'hardware', 'embedded software', 'ai', 'driver monitoring systems', 'occupant sensing', 'surround view cameras', 'safety', 'automation', 'vehicles', 'oem', 'tier-1', 'gsr regulations', 'ncap regulations', 'scalable solutions', 'cost-effective solutions', 'customizable solutions', 'automotive standards', 'serial production'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'B321'
},
role: 'Hauptaussteller',
profile: 'Büyütech develops end-to-end camera-based perception systems tailored for the mobility industry, combining hardware, embedded software, and AI. Its road-ready, regulation-compliant systems are already in serial production with OEMs including TOGG and Ford Trucks. Büyütech offers scalable, cost-effective and customizable solutions for OEMs and Tier-1s.',
themes: ['Automotive', 'Supplier', 'Autonomous Driving', 'Future Drive Technologies incl. H2'],
address: 'Üniversiteler Mh. ODTÜ Teknokent Silikon Blok ZK-12, 06800 Ankara, Türkei',
website: 'www.buyutech.com.tr',
emails: ['cemretepezenturk@buyutech.com.tr', 'omerorkun@buyutech.com.tr', 'alparslan@buyutech.com.tr']
},
{
id: 'byd',
name: 'BYD',
keywords: ['open space', 'test drives', 'hauptaussteller', 'probefahrten', 'königsplatz', 'odeonsplatz'],
location: {
type: 'Open Space',
hallOrPlace: 'Königsplatz',
booth: 'TD100'
},
role: 'Hauptaussteller',
profile: 'BYD ist ein führender Anbieter im Bereich Elektromobilität und bietet innovative Lösungen für nachhaltige Mobilität.',
themes: [],
address: 's-Gravelandseweg 256, 3125 BK Schiedam, Niederlande',
website: undefined,
emails: []
},
{
id: 'bylogix',
name: 'BYLOGIX',
keywords: ['automotive software', 'electronics', 'eea', 'oem', 'tier-1', 'electrical engineering', 'electronic engineering', 'e/e architectures', 'embedded software', 'hardware development', 'adas', 'autonomous driving', 'functional safety', 'cybersecurity', 'system engineering', 'safety procedures', 'electric vehicle', 'railway', 'defence', 'industrial sectors'],
location: {
type: 'Summit',
hallOrPlace: 'Halle A2',
booth: 'C20'
},
role: 'Mitaussteller',
profile: 'Bylogix is your one stop shop for Automotive software, electronics and EEA. Bylogix is focused on providing OEM’s and Tier1’s with unmatched electrical and electronic engineering services and solutions for the Automotive Industry. Bylogix offers an innovative engineering approach based on unique expertise in key automotive technologies.',
themes: ['Automotive', 'Software Defined Vehicles', 'Autonomous Driving', 'Connectivity, IoT & Big Data', 'AI & GenAI', 'Cybersecurity'],
address: 'Strada del Portone, 159, 10095 Grugliasco (TO), Italien',
website: 'www.bylogix.it',
emails: ['sales@bylogix.it', 'federico.veggia@bylogix.it', 'pasquale.marasco@bylogix.it']
}
];


