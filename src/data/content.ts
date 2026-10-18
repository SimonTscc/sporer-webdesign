// Texte für Startseite und Unterseiten. Preise sind [SWAP]: bewusst Einstiegspreise (Onepager 490 €),
// günstiger als die meisten Freelancer, aber nicht auf Baukasten-Niveau.

export const services = [
  {
    slug: 'websites',
    title: 'Websites',
    for: 'Handwerksbetriebe, Praxen, Studios, Coaches, Gastronomie',
    includes: ['Gestaltung nach Ihrem Logo und Ihren Farben', 'Optimiert für Handy, Tablet und Rechner', 'Kontaktformular, WhatsApp-Knopf, Karte, Öffnungszeiten', 'Grundlagen für Google: Titel, Beschreibungen, schnelle Ladezeit', 'Impressum und Datenschutzerklärung als Vorlage'],
    text: 'Von der einzelnen Seite mit Öffnungszeiten und Kontakt bis zum Auftritt mit mehreren Unterseiten. Ich gestalte jede Seite neu, ohne Baukasten-Vorlage, und achte darauf, dass sie auf dem Handy genauso gut funktioniert wie am Rechner.',
  },
  {
    slug: 'web-apps',
    title: 'Web-Apps',
    for: 'Vereine, Betriebe mit wiederkehrenden Abläufen',
    includes: ['Gemeinsam festgelegter Funktionsumfang', 'Login für Mitglieder oder Mitarbeitende', 'Datenbank, die auf allen Geräten aktuell ist', 'Listen und Auswertungen als PDF', 'Einweisung und kurze Anleitung'],
    text: 'Manchmal braucht es mehr als eine Website: eine Ergebnisliste für den Verein, ein Anmeldeformular mit Datenbank, ein kleines Werkzeug für den Betrieb. So etwas baue ich mit Login, sodass nur die richtigen Leute an die Daten kommen.',
  },
  {
    slug: 'drucksachen',
    title: 'Drucksachen',
    for: 'Alle, die schon ein Logo haben und Papier passend zur Website brauchen',
    includes: ['Visitenkarten, Flyer und Briefpapier mit Ihrem Logo', 'Gleiche Farben und Schriften wie auf der Website', 'Druckfertige PDF mit Beschnitt für jede Online-Druckerei', 'Profilbilder und Grafiken für Instagram & Co.'],
    text: 'Damit Website und Papier zusammenpassen, setze ich auf Wunsch Visitenkarten, Flyer und Briefpapier mit Ihrem vorhandenen Logo als fertige Druckdateien.',
  },
  {
    slug: 'betreuung',
    title: 'Betreuung',
    for: 'Alle, die sich nicht selbst um die Technik kümmern wollen',
    includes: ['Domain und E-Mail-Postfach einrichten', 'Hosting mit SSL-Zertifikat', 'Kleine Änderungen an Texten, Preisen und Bildern', 'Sicherheits-Updates', 'Erreichbar per Telefon, Mail und WhatsApp', 'Alternativ: eigener Admin-Bereich, in dem Sie Inhalte selbst ändern'],
    text: 'Domain, E-Mail-Adresse, Hosting und die kleinen Änderungen zwischendurch. Sie schreiben mir, was anders sein soll, und ich kümmere mich darum.',
  },
];

export const steps = [
  { text: 'Wir telefonieren oder treffen uns. Sie erzählen, was Sie vorhaben, ich stelle Fragen. Das kostet nichts.', time: 'etwa 30 Minuten' },
  { text: 'Sie bekommen ein schriftliches Angebot mit Festpreis und einem groben Zeitplan.', time: 'meist innerhalb von 2 Tagen' },
  { text: 'Ich baue einen ersten Entwurf, den Sie im Browser anklicken können. Wir ändern so lange, bis er passt.', time: '1 bis 4 Wochen' },
  { text: 'Die Seite geht online. Wenn später etwas zu ändern ist, melden Sie sich einfach.', time: 'danach nach Bedarf' },
];

export const prices = [
  { item: 'Website mit einer Seite', note: 'z. B. für Handwerker, Coaches, Praxen', price: 'ab 490 €' },
  { item: 'Website mit mehreren Seiten', note: 'bis etwa sechs Unterseiten', price: 'ab 890 €' },
  { item: 'Web-App', note: 'je nach Umfang', price: 'ab 1.190 €' },
  { item: 'Visitenkarten, Flyer, Briefpapier', note: 'druckfertige PDF', price: 'ab 69 €' },
  { item: 'Hosting und Betreuung', note: 'monatlich kündbar', price: '15 € / Monat' },
  { item: 'Oder: eigener Admin-Bereich', note: 'Inhalte selbst pflegen, einmalig statt monatlich', price: 'ab 490 €' },
];

export const faq = [
  {
    q: 'Wie lange dauert eine Website?',
    a: 'Eine einzelne Seite ist meistens nach zwei bis drei Wochen online, eine größere nach vier bis sechs. Am meisten hängt davon ab, wie schnell Texte und Fotos da sind.',
  },
  {
    q: 'Kann ich später selbst etwas ändern?',
    a: 'Kleine Änderungen erledige ich in der Regel am selben oder nächsten Tag. Wenn Sie Preise oder Termine regelmäßig selbst pflegen wollen, bekommen Sie einen eigenen Admin-Bereich. Dort ändern Sie Texte, Preise und Bilder ohne Programmierkenntnisse, und es fällt kein Monatsbeitrag bei mir an.',
  },
  {
    q: 'Was ist mit Texten und Fotos?',
    a: 'Am besten kommen sie von Ihnen, weil Sie Ihr Geschäft am besten kennen. Ich helfe beim Formulieren, kürze und suche passende Bilder aus, wenn eigene fehlen.',
  },
  {
    q: 'Warum nicht einfach Wix oder Jimdo?',
    a: 'Kann man machen. Bei Baukästen zahlen Sie aber dauerhaft ein Abo, die Seiten laden oft langsam und sehen sich ähnlich. Bei mir gehört Ihnen der Code, und Sie können damit jederzeit umziehen.',
  },
];

// Aufmaß: Besucher stellen ihre Website selbst zusammen. Grundpreise wie oben,
// Aufpreise für Extras sind [SWAP]-Vorschläge.
export const aufmass = {
  base: [
    { id: 'one', title: 'Eine Seite', note: 'Alles Wichtige untereinander: Leistungen, Kontakt, Anfahrt', price: 490 },
    { id: 'multi', title: 'Mehrere Seiten', note: 'Bis etwa sechs Unterseiten, z. B. je Leistung eine', price: 890 },
    { id: 'app', title: 'Web-App', note: 'Mit Login und Datenbank, z. B. Ergebnislisten oder Anmeldungen', price: 1190 },
    { id: 'unsure', title: 'Weiß ich noch nicht', note: 'Beraten Sie mich, wir finden es zusammen heraus', price: 0 },
  ],
  extras: [
    { id: 'termin', title: 'Termine online buchen', note: 'Kunden wählen selbst einen freien Termin', price: 120 }, // [SWAP]
    { id: 'wa', title: 'WhatsApp-Knopf', note: 'Ein Tipp, und die Nachricht an Sie ist offen', price: 0, checked: true },
    { id: 'texte', title: 'Ich schreibe die Texte mit', note: 'Sie erzählen, ich formuliere', price: 90 }, // [SWAP]
    { id: 'fotos', title: 'Fotos aussuchen und bearbeiten', note: 'Aus Ihren eigenen oder passenden lizenzfreien', price: 50 }, // [SWAP]
    { id: 'lang', title: 'Zweite Sprache', note: 'z. B. Englisch für internationale Kunden', price: 150 }, // [SWAP]
    { id: 'print', title: 'Visitenkarten und Flyer', note: 'Druckfertige PDF passend zur Website', price: 69 },
  ],
  // Nach dem Start: eins von dreien
  after: [
    { id: 'care', title: 'Ich kümmere mich danach', note: 'Hosting, Domain, E-Mail, und kleine Änderungen mache ich für Sie', monthly: 15, checked: true },
    { id: 'admin', title: 'Eigener Admin-Bereich', note: 'Sie ändern Texte, Preise und Bilder selbst und sind unabhängig von mir', price: 490 }, // [SWAP]
    { id: 'none', title: 'Ich kümmere mich selbst', note: 'Sie bekommen alle Dateien und hosten selbst' },
  ],
  branchen: [
    { id: 'handwerk', label: 'Handwerk', word: 'Malerbetrieb', head: 'Ihr Handwerksbetrieb in Stuttgart', text: 'Wir streichen, tapezieren und spachteln in Stuttgart und Umgebung. Rufen Sie an, wir kommen zum Aufmaß vorbei.', cta: 'Angebot anfragen', hours: 'Arbeitszeiten' },
    { id: 'praxis', label: 'Praxis oder Therapie', word: 'Praxis', head: 'Ihre Praxis in Stuttgart', text: 'Termine nach Vereinbarung. Neue Patientinnen und Patienten nehmen wir gern auf.', cta: 'Termin vereinbaren', hours: 'Sprechzeiten' },
    { id: 'gastro', label: 'Café, Restaurant, Laden', word: 'Café', head: 'Ihr Café in Stuttgart', text: 'Frühstück ab acht, Kuchen aus eigener Backstube und Kaffee von einer Rösterei um die Ecke.', cta: 'Tisch reservieren', hours: 'Öffnungszeiten' },
    { id: 'coach', label: 'Coaching oder Beratung', word: 'Coaching', head: 'Coaching aus Stuttgart', text: 'Ich begleite Sie persönlich, online oder vor Ort. Das erste Gespräch ist kostenlos.', cta: 'Erstgespräch buchen', hours: 'Termine' },
    { id: 'verein', label: 'Verein', word: 'Verein', head: 'Ihr Verein in Stuttgart', text: 'Training dienstags und donnerstags ab 18 Uhr. Schauen Sie gern unverbindlich vorbei.', cta: 'Probetraining', hours: 'Trainingszeiten' },
  ],
};
