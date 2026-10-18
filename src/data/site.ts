// Zentrale Firmendaten. Alles mit [SWAP] vor dem Livegang prüfen bzw. ersetzen.

// [SWAP] Solange true: Seite ist für Suchmaschinen gesperrt (noindex + robots.txt Disallow).
export const isPreview = true;

export const site = {
  name: 'Sporer Webdesign',
  owner: 'Simon Sporer',
  claim: 'Websites, die bleiben.',
  description:
    'Webdesign aus Stuttgart: individuelle Websites und Web-Apps für Selbstständige, Vereine und kleine Unternehmen. Ruhiges Design, schnelle Technik, persönliche Betreuung.',
  url: 'https://sporer-webdesign.de', // [SWAP] Domain
  email: 'hallo@sporer-webdesign.de', // [SWAP]
  phone: '+49 170 000 00 00', // [SWAP]
  phoneHref: '+491700000000', // [SWAP] gleiche Nummer ohne Leerzeichen
  whatsapp: '491700000000', // [SWAP] Nummer für wa.me (ohne +)
  street: 'Musterstraße 1', // [SWAP]
  zip: '70000', // [SWAP]
  city: 'Stuttgart', // [SWAP]
  region: 'Stuttgart & Umgebung · deutschlandweit remote',
  taxNote: 'Kleinunternehmer gem. § 19 UStG, es wird keine Umsatzsteuer ausgewiesen.', // [SWAP] nur falls zutreffend
  instagram: '', // [SWAP] z. B. https://www.instagram.com/sporer.webdesign/
  linkedin: '', // [SWAP]
  founded: 2026,
  availability: 'Freie Termine ab November 2026', // [SWAP] regelmäßig aktualisieren
};

export const nav = [
  { href: '/arbeiten', label: 'Arbeiten' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/preise', label: 'Preise' },
  { href: '/ueber-mich', label: 'Über mich' },
  { href: '/fragen', label: 'Fragen' },
];
