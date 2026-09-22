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

// Use the rendered canonical and hreflang links as the single source of truth.
// Prefix-based sitemap pairing cannot match translated Turkish slugs.
async function htmlFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => {
    const file = new URL(entry.name + (entry.isDirectory() ? '/' : ''), dir);
    return entry.isDirectory() ? htmlFiles(file) : entry.name.endsWith('.html') ? [file] : [];
  }));
  return nested.flat();
}
const decode = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const xml = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decode(value)]));
const indexedPages = new Map();
for (const file of await htmlFiles(dist)) {
  const html = await fs.readFile(file, 'utf8');
  const head = html.split('</head>')[0];
  const metas = [...head.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attributes(tag));
  if (metas.some(meta => meta.name === 'robots' && /noindex/.test(meta.content))) continue;
  const links = [...head.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attributes(tag));
  const canonical = links.find(link => link.rel === 'canonical')?.href;
  if (!canonical) throw new Error(`Missing canonical in ${file}`);
  indexedPages.set(canonical, links.filter(link => link.rel === 'alternate' && link.hreflang));
}
const urls = [...indexedPages].sort(([a], [b]) => a.localeCompare(b));
const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' + urls.map(([url, alternates]) => `  <url><loc>${xml(url)}</loc>${alternates.map(link => `<xhtml:link rel="alternate" hreflang="${xml(link.hreflang)}" href="${xml(link.href)}"/>`).join('')}</url>`).join('\n') + '\n</urlset>\n';
await fs.writeFile(new URL('sitemap-0.xml', dist), sitemap);
const origin = new URL(urls[0][0]).origin;
await fs.writeFile(new URL('sitemap-index.xml', dist), `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${xml(origin)}/sitemap-0.xml</loc></sitemap></sitemapindex>\n`);
console.log(`post-build: sitemap generated from ${urls.length} indexable canonical pages with exact language alternates`);
