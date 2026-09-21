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
      i18n: { defaultLocale: 'en', locales: { en: 'en', tr: 'tr' } },
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
