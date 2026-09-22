import fs from 'node:fs/promises';
import sharp from 'sharp';

// Re-run against the original image_gen PNGs listed in the manifest.
// The website only imports these compact, high-quality WebP masters.
const manifests = await Promise.all(['image-generation.json', 'insights-expansion-images.json', 'insights-image-style-v2.json', 'experience-image-style-v2.json', 'crisis-cover-v2.json'].map(async (name) =>
  JSON.parse(await fs.readFile(new URL(`../docs/${name}`, import.meta.url), 'utf8'))
));
for (const asset of manifests.flatMap((manifest) => manifest.assets)) {
  const target = new URL(`../${asset.output}`, import.meta.url);
  await sharp(asset.source).rotate().webp({ quality: 92, effort: 6 }).toFile(target.pathname);
  const { width, height } = await sharp(target.pathname).metadata();
  const { size } = await fs.stat(target);
  console.log(`${asset.name}: ${width}×${height}, ${(size / 1024).toFixed(1)} KiB`);
}
