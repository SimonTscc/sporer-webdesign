// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Vorschau auf GitHub Pages: https://simontscc.github.io/sporer-webdesign/
// [SWAP] Mit eigener Domain: site auf 'https://sporer-webdesign.de' und base auf '/' setzen.
export default defineConfig({
  site: 'https://simontscc.github.io',
  base: '/sporer-webdesign',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !/\/(impressum|datenschutz)\/?$/.test(page) })],
  devToolbar: { enabled: false },
});
