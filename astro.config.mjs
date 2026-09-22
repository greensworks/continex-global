// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Site URL: domain to be confirmed with the client. Update before go-live.
const site = process.env.SITE_URL ?? 'https://continexglobal.com';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !['/home-2', '/tr/ana-sayfa-2'].includes(new URL(page).pathname.replace(/\/$/, '')),
    }),
  ],
  image: {
    // Keep Sharp defaults; large source photos are downscaled per <Image> width.
    responsiveStyles: true,
    layout: 'constrained',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
