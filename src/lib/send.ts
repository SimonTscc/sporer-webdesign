// Verschickt Formulardaten per Mail über formsubmit.co (GitHub Pages hat keinen eigenen Server).
// `to` ist die Empfängeradresse oder der Zufallscode von FormSubmit (site.formTo).
export async function sendMail(to: string, subject: string, fields: Record<string, string>) {
  if (!to) throw new Error('Kein Empfänger eingerichtet');
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    // Vorlage „box“: jedes Feld als eigener Block mit Überschrift, liest sich auch am Handy gut
    body: JSON.stringify({ ...fields, _subject: subject, _template: 'box', _captcha: 'false' }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || String(data.success) !== 'true') throw new Error(data.message || `Fehler ${res.status}`);
}
