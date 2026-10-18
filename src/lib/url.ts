// Interne Links mit Basis-Pfad: Auf GitHub Pages liegt die Seite unter /sporer-webdesign/,
// mit eigener Domain später unter /. Der Pfad kommt aus `base` in astro.config.mjs.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const href = (path: string) => (path.startsWith('/') ? `${base}${path}` : path);

// Aktuellen Pfad ohne Basis, z. B. für aria-current im Menü
export const stripBase = (pathname: string) => pathname.slice(base.length) || '/';
