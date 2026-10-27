// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Live unter der eigenen Domain (GitHub Pages mit Custom Domain, CNAME in public/).
export default defineConfig({
  site: 'https://sporer-webdesign.de',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !/\/(impressum|datenschutz)\/?$/.test(page) })],
  devToolbar: { enabled: false },
});
