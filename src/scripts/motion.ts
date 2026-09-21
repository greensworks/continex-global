/**
 * Site-wide motion. Deliberately restrained: fade/rise reveals on scroll,
 * counters, and the logo marquee are CSS. Everything respects
 * prefers-reduced-motion.
 *
 * Usage in markup:
 *   <div data-reveal>…</div>                 fade + 24px rise when in view
 *   <div data-reveal data-reveal-delay="0.1"> stagger siblings manually
 *   <ul data-reveal-group>…</ul>              children stagger automatically
 *   <span data-count="18">0</span>            counts 0 → 18 when in view
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

function reveal() {
  const singles = document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-reveal-group] > [data-reveal])');
  singles.forEach((el) => {
    if (reduced) { el.classList.add('is-visible'); return; }
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1, y: 0, duration: 0.9, ease: 'expo.out',
        delay: Number(el.dataset.revealDelay ?? 0),
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        onStart: () => el.classList.add('is-visible'),
      },
    );
  });

  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    const items = Array.from(group.children) as HTMLElement[];
    items.forEach((i) => i.setAttribute('data-reveal', ''));
    if (reduced) { items.forEach((i) => i.classList.add('is-visible')); return; }
    gsap.fromTo(
      items,
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1, y: 0, duration: 0.8, ease: 'expo.out', stagger: 0.08,
        scrollTrigger: { trigger: group, start: 'top 85%', once: true },
        onStart: () => items.forEach((i) => i.classList.add('is-visible')),
      },
    );
  });
}

function counters() {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.countSuffix ?? '';
    if (reduced || Number.isNaN(target)) { el.textContent = target + suffix; return; }
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target, duration: 1.6, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => { el.textContent = Math.round(obj.v) + suffix; },
    });
  });
}

reveal();
counters();
