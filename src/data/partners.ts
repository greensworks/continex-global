import type { ImageMetadata } from 'astro';

/**
 * Partner / client logos. Names come from the client's "usable logos" list;
 * the image files were matched by inspecting each logo.
 * `approved: true`  = on the client's confirmed list.
 * `approved: false` = present in the old site assets but NOT on the confirmed
 *                     list; hidden until the client signs off.
 */
const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/partners/*.webp', { eager: true });
const img = (n: number) => files[`/src/assets/partners/referanslar-${n}.webp`]!.default;

export interface Partner {
  name: string;
  logo: ImageMetadata;
  approved: boolean;
}

export const partners: Partner[] = [
  { name: 'Fiba', logo: img(1), approved: true },
  { name: 'Mint International Trading', logo: img(2), approved: false },
  { name: 'China State Construction', logo: img(3), approved: true },
  { name: 'Sinovel', logo: img(4), approved: true },
  { name: 'Minmetals', logo: img(5), approved: false },
  { name: 'China Tianchen (CNCEC)', logo: img(6), approved: false },
  { name: 'Eke Endüstri Tesisleri', logo: img(7), approved: true },
  { name: 'ÇİNSİAD', logo: img(8), approved: false },
  { name: 'Harbin Electric', logo: img(9), approved: true },
  { name: 'Mogan Enerji', logo: img(10), approved: true },
  { name: 'AVIC International', logo: img(11), approved: true },
  { name: 'Zaxe', logo: img(12), approved: false },
  { name: 'Artıbir Enerji', logo: img(13), approved: false },
  { name: 'Göktekin Enerji', logo: img(14), approved: true },
  { name: 'BGI', logo: img(15), approved: false },
  { name: 'Kwong Hing Group', logo: img(16), approved: true },
  { name: 'TBEA', logo: img(17), approved: true },
  { name: 'Tefirom', logo: img(18), approved: false },
  { name: 'Reges Enerji', logo: img(19), approved: true },
  { name: 'AFC China', logo: img(20), approved: false },
  { name: 'MCC', logo: img(21), approved: true },
  { name: 'CRRC', logo: img(22), approved: true },
  { name: 'Zorlu Enerji', logo: img(23), approved: true },
  { name: 'Sinosteel', logo: img(24), approved: false },
  { name: 'CreatBot', logo: img(25), approved: false },
];

export const approvedPartners = partners.filter((p) => p.approved);
