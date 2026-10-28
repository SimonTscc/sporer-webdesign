// Referenzprojekte. [SWAP] Vor Livegang mit den Kunden abklären, dass sie gezeigt werden dürfen,
// und ggf. Live-Links (url) ergänzen.
import type { ImageMetadata } from 'astro';
import srh from '../assets/work/srh-wheels.png';
import flame from '../assets/work/flame-n-go.png';
import paul from '../assets/work/paul-scheifel.png';
import liga from '../assets/work/schuetzen-liga.png';
import vm from '../assets/work/schuetzen-vm.png';
import hilde from '../assets/work/hildes-pfotenkueche.png';

export type Project = {
  slug: string;
  client: string;
  kind: string;
  year: string;
  place: string;
  summary: string;
  images: ImageMetadata[];
  mobile?: boolean;
  url?: string;
  body: { h: string; p: string }[];
  built: string;
};

export const projects: Project[] = [
  {
    slug: 'hildes-pfotenkueche',
    client: 'Hildes Pfotenküche',
    kind: 'Website mit Logo',
    year: '2026',
    place: 'online',
    summary:
      'Hilde berät Hundehalter zur Rohfütterung und schreibt Futterpläne für jeden Hund einzeln. Die Seite erklärt das Angebot und lässt Besucher selbst einen Napf befüllen.',
    images: [hilde],
    body: [
      { h: 'Ausgangslage', p: 'Hilde verkauft kein Futter, sondern Beratung und Futterpläne. Die Seite sollte zeigen, welche Pläne es gibt, wie eine Beratung abläuft, und Hundehalter zu einer Anfrage bringen.' },
      { h: 'Was ich gemacht habe', p: 'Eine Website mit Unterseiten für die Futterpläne, die Beratung und Hilde selbst, dazu das Logo und die Farben. Auf der Startseite steht ein kleines Spiel: Besucher ziehen Zutaten in Hildes Napf. Die richtigen Bausteine bleiben drin, Schokolade, Zwiebeln oder gekochte Knochen fliegen mit einer kurzen Erklärung wieder raus. Ist der Napf voll, geht es direkt zur Anfrage.' },
    ],
    built: 'Astro, TypeScript, GitHub Pages',
  },
  {
    slug: 'flame-n-go',
    client: 'Flame n Go Keramik',
    kind: 'Website mit zehn Seiten',
    year: '2026',
    place: 'Hamburg',
    summary:
      'Ein Keramik-Mal-Studio aus Hamburg-Schnelsen wollte weg von Wix. Ich habe eine neue Seite gebaut: bunt, verspielt und mit einem Flamingo als Maskottchen.',
    images: [flame],
    url: 'https://www.flame-n-go.de',
    body: [
      { h: 'Ausgangslage', p: 'Die Website lief bisher über Wix. Sie war langsam, schwer zu pflegen und bot kaum Platz für mehr Inhalte. Gewünscht war keine einzelne lange Seite, sondern ein richtiger Auftritt mit Unterseiten.' },
      { h: 'Was ich gemacht habe', p: 'Ich habe die Seite in Unterseiten für das Mal-Studio, Anlässe, Preise und häufige Fragen aufgeteilt. Öffnungszeiten, Preise und Adressen stehen an einer zentralen Stelle, damit eine Änderung nicht an fünf Orten nachgezogen werden muss. Über ein Formular lässt sich direkt ein Tisch anfragen.' },
      { h: 'Stand', p: 'Die Seite ist seit Oktober 2026 online.' },
    ],
    built: 'Astro, TypeScript, Vercel',
  },
  {
    slug: 'srh-wheels',
    client: 'SRH Wheels',
    kind: 'Website',
    year: '2026',
    place: 'Region Stuttgart',
    summary:
      'Felgenaufbereitung, Reifenservice und Fahrzeugpflege. Der Betrieb wollte hochwertig wirken und trotzdem gleich zeigen, was es kostet. Herausgekommen ist ein dunkler Auftritt in Schwarz und Gold mit klaren Ab-Preisen.',
    images: [srh],
    body: [
      { h: 'Ausgangslage', p: 'Ein junger Betrieb mit hohem Anspruch an Qualität. Die Website sollte hochwertig aussehen, aber auch sofort beantworten, was eine Aufbereitung ungefähr kostet.' },
      { h: 'Was ich gemacht habe', p: 'Das Design orientiert sich am Logo: Carbon-Schwarz, Gold und ein roter Akzent wie die Bremszange auf der Felge. Für die drei Bereiche gibt es je drei Preisstufen. Das Kontaktformular schreibt aus den Angaben eine fertige WhatsApp-Nachricht, und ein Link führt zu den Angeboten auf Kleinanzeigen. Die Animationen im Hintergrund sind selbst programmiert, damit die Seite trotzdem schnell lädt.' },
    ],
    built: 'HTML, CSS, JavaScript, Canvas',
  },
  {
    slug: 'schuetzen-apps',
    client: 'Sportschützenverein Stuttgart-Untertürkheim',
    kind: 'Zwei Web-Apps',
    year: '2026',
    place: 'Stuttgart',
    summary:
      'Ergebnisse wurden bisher auf Papier notiert und später abgetippt. Jetzt tragen die Schützen sie direkt am Stand auf dem Handy ein, Schuss für Schuss, und alle sehen die Liste sofort.',
    images: [liga, vm],
    mobile: true,
    body: [
      { h: 'Ausgangslage', p: 'Beim Rundenwettkampf und bei der Vereinsmeisterschaft wurden Ergebnisse handschriftlich erfasst, abgetippt und per Mail verschickt. Das kostete Zeit, und Tippfehler waren kaum zu vermeiden.' },
      { h: 'Was ich gemacht habe', p: 'Zwei Apps, die im Browser laufen und sich auf dem Handy wie eine App anfühlen. Eine für den Rundenwettkampf mit Mannschaften, Meldungen und Saisonplanung, eine für die Vereinsmeisterschaft mit Anmeldung, Startplanung und Auswertung. Eingegeben wird über ein Ringraster mit großen Tasten, das sich gut mit einer Hand bedienen lässt. Die Daten liegen geschützt hinter einem Vereins-Login, die Listen lassen sich als PDF ausdrucken.' },
      { h: 'Stand', p: 'Beide Apps sind online und laufen hinter dem Vereins-Login.' },
    ],
    built: 'JavaScript, Firebase, GitHub Pages',
  },
  {
    slug: 'paul-scheifel',
    client: 'Paul Scheifel',
    kind: 'Website mit einer Seite',
    year: '2026',
    place: 'online',
    summary:
      'Paul ist Fitness-Coach und schreibt für jeden Kunden einen eigenen Plan, ohne App. Die Seite sollte genau das in den ersten Sekunden klar machen und dann zum Erstgespräch führen.',
    images: [paul],
    body: [
      { h: 'Ausgangslage', p: 'Online-Coaching gibt es sehr viel, und die meisten Angebote laufen über eine App mit Standardplänen. Pauls Unterschied ist die persönliche Betreuung.' },
      { h: 'Was ich gemacht habe', p: 'Eine einzelne Seite mit der Botschaft ganz oben, darunter der Ablauf in vier Schritten, Preise und häufige Fragen. Paul hat zwei Entwürfe bekommen, einen hellen und einen dunklen mit Video, und kann sich aussuchen, welcher online geht.' },
    ],
    built: 'HTML, CSS, JavaScript',
  },
];
