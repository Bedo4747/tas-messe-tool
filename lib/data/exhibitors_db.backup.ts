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
      "inclusion",
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
];


