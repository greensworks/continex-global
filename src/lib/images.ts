import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/*.webp', { eager: true });

/** Look up a photo in src/assets/images by its file name without extension. */
export function img(name: string): ImageMetadata {
  const hit = files[`/src/assets/images/${name}.webp`];
  if (!hit) throw new Error(`Image not found: ${name}`);
  return hit.default;
}
