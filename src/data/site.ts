// Zentrale Firmendaten. Alles mit [SWAP] vor dem Livegang prüfen bzw. ersetzen.

// Solange true: Seite ist für Suchmaschinen gesperrt (noindex + robots.txt Disallow).
// Live seit 2026-10-27 unter sporer-webdesign.de.
export const isPreview = false;

export const site = {
  name: 'Sporer Webdesign',
  owner: 'Simon Sporer',
  claim: 'Websites, die bleiben.',
  description:
    'Webdesign aus Stuttgart: individuelle Websites und Web-Apps für Selbstständige, Vereine und kleine Unternehmen. Ruhiges Design, schnelle Technik, persönliche Betreuung.',
  url: 'https://sporer-webdesign.de',
  email: 'info@sporer-webdesign.de',
  // [SWAP] Geschäftsnummer, sobald die zweite Nummer da ist. Leer = Telefon und WhatsApp werden
  // überall ausgeblendet (Kopf, Karte, Aufmaß, unten, Fußzeile, Impressum).
  phone: '', // z. B. '+49 170 123 45 67'
  phoneHref: '', // gleiche Nummer ohne Leerzeichen, z. B. '+491701234567'
  whatsapp: '', // Nummer für wa.me ohne +, z. B. '491701234567'
  // [SWAP] Empfänger der Kontaktformulare (Versand über formsubmit.co, die Seite hat keinen eigenen Server).
  // Erst die eigene Adresse eintragen, einmal absenden, Bestätigungsmail anklicken, dann hier den
  // Zufallscode aus der FormSubmit-Mail eintragen, damit die Adresse nicht öffentlich im Code steht.
  formTo: 'd301b39892b2db0b90c7645825ad99e0', // FormSubmit-Code für info@sporer-webdesign.de
  street: 'Mittenfeldstraße 79',
  zip: '70499',
  city: 'Stuttgart',
  region: 'Stuttgart & Umgebung · deutschlandweit remote',
  taxNote: 'Kleinunternehmer gem. § 19 UStG, es wird keine Umsatzsteuer ausgewiesen.', // [SWAP] nur falls zutreffend
  instagram: '', // [SWAP] z. B. https://www.instagram.com/sporer.webdesign/
  linkedin: '', // [SWAP]
  founded: 2026,
  availability: 'Freie Termine ab November 2026', // [SWAP] regelmäßig aktualisieren
};

export const nav = [
  // Alles liegt auf der Startseite, das Menü springt nur zu den Abschnitten
  { href: '/#aufmass', label: 'Aufmaß' },
  { href: '/#arbeiten', label: 'Arbeiten' },
  { href: '/#ablauf', label: 'Ablauf' },
  { href: '/#fragen', label: 'Fragen' },
];
