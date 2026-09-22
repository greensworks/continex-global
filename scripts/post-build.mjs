import fs from 'node:fs/promises';

/**
 * Astro writes nested pages as `<route>/index.html`, but Cloudflare looks for
 * a sibling `404.html` when a path is missing. Copy the localised 404 pages up
 * so /tr/* falls back to the Turkish page and the rest to the English one.
 */
const dist = new URL('../dist/', import.meta.url);
const locales = ['tr'];

for (const locale of locales) {
  const from = new URL(`${locale}/404/index.html`, dist);
  const to = new URL(`${locale}/404.html`, dist);
  try {
    await fs.copyFile(from, to);
    console.log(`post-build: ${locale}/404.html written`);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    console.warn(`post-build: no ${locale}/404 page to copy`);
  }
}
