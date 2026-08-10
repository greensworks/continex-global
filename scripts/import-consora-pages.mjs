import { readFileSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';

const SOURCE_DIR = '/Users/busrayesil/Desktop/works/consora';

const pages = [
  ['index.html', 'index.astro'],
  ['index-2.html', 'index-2.astro'],
  ['index-3.html', 'index-3.astro'],
  ['index-4.html', 'index-4.astro'],
  ['index-5.html', 'index-5.astro'],
  ['about.html', 'about-us.astro'],
  ['blog.html', 'blog.astro'],
  ['blog-details.html', 'blog-details.astro'],
  ['career.html', 'career.astro'],
  ['career-details.html', 'career-details.astro'],
  ['case-studies.html', 'case-studies.astro'],
  ['case-studies-details.html', 'case-studies-details.astro'],
  ['contact.html', 'contact.astro'],
  ['error.html', 'error.astro'],
  ['industries.html', 'industries.astro'],
  ['industries-details.html', 'industries-details.astro'],
  ['press-release.html', 'press-release.astro'],
  ['pricing.html', 'pricing.astro'],
  ['service.html', 'service.astro'],
  ['service-details.html', 'service-details.astro'],
  ['story-details.html', 'story-details.astro'],
  ['sucess-story.html', 'sucess-story.astro'],
  ['team.html', 'team.astro'],
  ['team-details.html', 'team-details.astro'],
  ['testimonial.html', 'testimonial.astro'],
  ['worksheet.html', 'worksheet.astro'],
];

const onlySource = process.env.ONLY_SOURCE;
const pagesToImport = onlySource
  ? pages.filter(([sourceName]) => sourceName === onlySource)
  : pages;

const pageSectionRemovals = new Map([
  ['index-2.html', ['hero', 'brand', 'feature', 'service', 'counter']],
  ['index-4.html', ['hero']],
  ['index-5.html', ['award', 'price']],
]);

const pageBusinessSectionRemovals = new Map([
  ['index-2.html', ['Powering purposeful scale for']],
]);

const commonScripts = new Set([
  'assets/js/vendor/jquery.js',
  'assets/js/bootstrap-bundle.js',
  'assets/js/swiper-bundle.js',
  'assets/js/magnific-popup.js',
  'assets/js/nice-select.js',
  'assets/js/purecounter.js',
  'assets/js/plugin.js',
  'assets/js/slider-active.js',
  'assets/js/ajax-form.js',
  'assets/js/main.js',
]);

function extract(pattern, html, label, file) {
  const match = html.match(pattern);
  if (!match) {
    throw new Error(`Could not extract ${label} from ${file}`);
  }
  return match[1];
}

function removeClassTokens(html, tokens) {
  return html.replace(/\sclass=(["'])(.*?)\1/gs, (_match, quote, value) => {
    const classes = value
      .split(/\s+/)
      .filter(Boolean)
      .filter((className) => !tokens.has(className));

    return classes.length ? ` class=${quote}${classes.join(' ')}${quote}` : '';
  });
}

function stripMotion(html) {
  let cleaned = html;

  cleaned = removeClassTokens(cleaned, new Set([
    'tp-fade-anim',
    'tp-svg-drawing',
    'tp-line-anim',
    'wow',
    'fadeIn',
    'fadeInUp',
    'fadeInDown',
    'fadeInLeft',
    'fadeInRight',
    'slideInUp',
    'slideInDown',
    'slideInLeft',
    'slideInRight',
    'animated',
  ]));

  cleaned = cleaned
    .replace(/\sdata-fade-(?:from|to)(?:=(".*?"|'.*?'))?/gs, '')
    .replace(/\sdata-delay(?:=(".*?"|'.*?'))?/gs, '')
    .replace(/\sdata-duration(?:=(".*?"|'.*?'))?/gs, '')
    .replace(/\sdata-stagger(?:=(".*?"|'.*?'))?/gs, '')
    .replace(/\sdata-text-split(?:=(".*?"|'.*?'))?/gs, '')
    .replace(/\sdata-letters-fade-in(?:=(".*?"|'.*?'))?/gs, '')
    .replace(/\sdata-speed(?:-[xy])?(?:=(".*?"|'.*?'))?/gs, '');

  return cleaned;
}

function normalizeLinks(html) {
  return html
    .replace(/href="about\.html"/g, 'href="about-us.html"')
    .replace(/href="blog-standard\.html"/g, 'href="blog.html"');
}

function normalizeAssetPaths(html) {
  return html
    .replace(/\b(src|href)=("|')assets\//g, '$1=$2/assets/')
    .replace(/\bdata-bg-color=("|')url\(assets\//g, 'data-bg-color=$1url(/assets/');
}

function replaceContactOffices(html) {
  const offices = [
    {
      city: 'Istanbul',
      address: '19 Mayıs Mah. 19 Mayıs Cad. Nova Baran Plaza No:4 K:13<br>34360 Şişli / Istanbul, TURKIYE',
      phone: '0212 347 47 56 - 113',
      phoneHref: 'tel:02123474756113',
    },
    {
      city: 'Ankara',
      address: 'J.F.Kennedy Caddesi No: 84<br>Çankaya / Ankara, TURKIYE',
      phone: '+90(312)466 00 10',
      phoneHref: 'tel:+903124660010',
    },
    {
      city: 'Kuala Lumpur',
      address: '8072, Pantai HillPark Ph5<br>59200 Kuala Lumpur, MALAYSIA',
      phone: '+603-42657867',
      phoneHref: 'tel:+60342657867',
    },
  ];

  const officeCards = offices.map((office) => `                  <div class="col-lg-4 col-md-6">
                     <div class="tp-contact-city-item text-center mb-30">
                        <div class="tp-contact-city-item-content">
                           <h3 class="tp-contact-city-item-title">${office.city}</h3>
                           <p>${office.address}</p>
                           <div class="tp-contact-city-item-dvdr"></div>
                           <div class="tp-contact-city-item-contact">
                              <a href="${office.phoneHref}">${office.phone}</a>
                           </div>
                           <div class="tp-contact-city-item-contact">
                              <a href="mailto:info@continexglobal.com">info@continexglobal.com</a>
                           </div>
                        </div>
                     </div>
                  </div>`).join('\r\n');

  return html.replace(
    /<span class="tp-section-sub">Our office address<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<!-- city area end -->/,
    `<span class="tp-section-sub">Our Offices</span>
                        <h3 class="tp-section-title">Our Offices</h3>
                     </div>
                  </div>
               </div>
               <div class="row">
${officeCards}
               </div>
            </div>
         </div>
         <!-- city area end -->`,
  );
}

function replaceContactMessaging(html) {
  const formMarkup = `                        <form id="contact-form" action="/assets/mail.php" method="POST">
                           <div class="row">
                              <div class="col-md-6">
                                 <div class="tp-contact-input mb-15">
                                    <label>First Name</label>
                                    <input placeholder="e.g. John" name="first_name" type="text">
                                 </div>
                              </div>
                              <div class="col-md-6">
                                 <div class="tp-contact-input mb-15">
                                    <label>Last Name</label>
                                    <input placeholder="e.g. Smith" name="last_name" type="text">
                                 </div>
                              </div>
                              <div class="col-md-6">
                                 <div class="tp-contact-input mb-15">
                                    <label>Phone Number</label>
                                    <input placeholder="e.g. +132437436" name="phone" type="tel">
                                 </div>
                              </div>
                              <div class="col-md-6">
                                 <div class="tp-contact-input mb-15">
                                    <label>Email Address</label>
                                    <input placeholder="e.g. john@youremail.com" name="email" type="email">
                                 </div>
                              </div>
                              <div class="col-12">
                                 <div class="tp-contact-input mb-15">
                                    <label>Description</label>
                                    <textarea placeholder="Description" name="message"></textarea>
                                 </div>
                                 <div class="tp-contact-input-btn">
                                    <button class="tp-btn w-100" type="submit">
                                       How can we help?
                                    </button>
                                    <p class="ajax-response mt-5"></p>
                                 </div>
                              </div>
                           </div>
                        </form>`;

  return html
    .replace('class="tp-breadcrumb-ptb pt-90 pb-70 z-index-1"', 'class="tp-breadcrumb-ptb tp-contact-breadcrumb pt-90 pb-70 z-index-1"')
    .replace(/src="\/assets\/img\/breadcrumb\/image-1\.jpg"/, 'src="/assets/img/general/contact-breadcrumb-bg.webp"')
    .replace(
      /<title>[\s\S]*?<\/title>/,
      '<title>Contact | Continex Global</title>',
    )
    .replace(
      /<p>Through digital innovation[\s\S]*?<\/p>/,
      '<p>Tell us about your cross-border opportunity, market-entry need, or strategic partnership goal.</p>',
    )
    .replace(
      /<h3 class="tp-section-title">We’re ready to support <br> your financial journey\.<\/h3>/,
      '<h3 class="tp-section-title">Be a part of <br> Continex Culture</h3>',
    )
    .replace(/<h4 class="tp-contact-info-title">Call Us Directly<\/h4>\s*<p><a href="tel:\+0123456789">\+\(1\) 224 676 7430<\/a><\/p>/,
      '<h4 class="tp-contact-info-title">Call Us Directly</h4>\r\n                                 <p><a href="tel:+902123474756113">0212 347 47 56 - 113</a></p>',
    )
    .replace(/<h4 class="tp-contact-info-title">Need Support\?<\/h4>\s*<p><a href="mailto:info@gmail\.com">info@gmail\.com<\/a><\/p>/,
      '<h4 class="tp-contact-info-title">Need Support?</h4>\r\n                                 <p><a href="mailto:info@continexglobal.com">info@continexglobal.com</a></p>',
    )
    .replace(/<p><a href="#">Start Chat<\/a><\/p>/, '<p><a href="mailto:info@continexglobal.com">Discuss an Opportunity</a></p>')
    .replace(
      /src="\/assets\/img\/finance\/banner\/banner-bg-2\.jpg"/,
      'src="/assets/img/general/continex-global-2.webp"',
    )
    .replace(/<form id="contact-form"[\s\S]*?<\/form>/, formMarkup);
}

function replaceInsightsMessaging(html) {
  return html
    .replace('class="tp-breadcrumb-ptb pt-90 pb-70 z-index-1"', 'class="tp-breadcrumb-ptb tp-insights-breadcrumb pt-90 pb-70 z-index-1"')
    .replace(/src="\/assets\/img\/breadcrumb\/image-1\.jpg"/, 'src="/assets/img/general/insights.webp"')
    .replace(/<li>Blog<\/li>/, '<li>Insights</li>')
    .replace(/<h2 class="tp-breadcrumb-title">Blog<\/h2>/, '<h2 class="tp-breadcrumb-title">Insights</h2>');
}

function removeBusinessSectionsContaining(html, targets) {
  const start = '<!-- business area start -->';
  const end = '<!-- business area end -->';
  for (const target of targets) {
    let cursor = 0;
    while (true) {
      const startIndex = html.indexOf(start, cursor);
      if (startIndex === -1) break;
      const endIndex = html.indexOf(end, startIndex);
      if (endIndex === -1) break;
      const endPosition = endIndex + end.length;
      const block = html.slice(startIndex, endPosition);
      if (block.includes(target)) {
        html = html.slice(0, startIndex) + html.slice(endPosition);
        cursor = startIndex;
      } else {
        cursor = endPosition;
      }
    }
  }
  return html;
}

function removeNamedSections(html, sections) {
  for (const section of sections) {
    const start = `<!-- ${section} area start -->`;
    const end = `<!-- ${section} area end -->`;
    while (html.includes(start)) {
      const startIndex = html.indexOf(start);
      const endIndex = html.indexOf(end, startIndex);
      if (endIndex === -1) break;
      html = html.slice(0, startIndex) + html.slice(endIndex + end.length);
    }
  }
  return html;
}

function replaceHomeMessaging(html) {
  const teamCard = `<div class="tp-fi-stories-item continex-team-card mb-30" data-background="/assets/img/general/1.png" style="background-image: url('/assets/img/general/1.png');">
                        <div class="tp-fi-stories-item-content style-2">
                           <span>Professional team</span>
                           <h4 class="tp-fi-stories-item-title">130+</h4>
                        </div>
                     </div>`;

  return html
    .replace(
      /<h3 class="tp-fi-hero-title">[\s\S]*?<\/h3>/,
      `<h3 class="tp-fi-hero-title">Turning Cross-Border <br>
                              Opportunities into <br>
                              Business</h3>`,
    )
    .replace(
      /<p class="text">\s*Unlock the full potential[\s\S]*?<\/p>/,
      `<p class="text">
                                 Cross-Border Business Development &amp; Strategic Advisory for companies entering <br>
                                 new markets, building partnerships, and advancing commercial opportunities.
                              </p>`,
    )
    .replace(/Schedule a free consultation/g, 'Discuss an Opportunity')
    .replace(
      /<span class="tp-section-sub">What we provide<\/span>\s*<h3 class="tp-section-title">[\s\S]*?<\/h3>/,
      `<span class="tp-section-sub">What We Do</span>
                        <h3 class="tp-section-title">Cross-Border Business Development <br>
                           &amp; Strategic Advisory</h3>`,
    )
    .replace(
      /<span class="tp-section-sub">Know about us<\/span>\s*<h3 class="tp-section-title mb-30">[\s\S]*?<\/h3>\s*<div>\s*<p>[\s\S]*?<\/p>/,
      `<span class="tp-section-sub">About Continex Global</span>
                        <h3 class="tp-section-title mb-30">We help international companies <br>
                           turn market access into growth.</h3>
                        <div>
                           <p>Continex Global helps companies enter new markets, reach the right customers and business partners, <br>
                              develop strategic partnerships and projects, and move cross-border opportunities toward commercial results.</p>`,
    )
    .replace(
      /<div class="tp-fi-stories-item mb-30" data-bg-color="#F7F7F5">\s*<div class="tp-fi-stories-item-thumb pb-200">\s*<img src="\/assets\/img\/finance\/stories\/user\.png" alt="">\s*<\/div>\s*<div class="tp-fi-stories-item-content style-2">\s*<span>Professional team<\/span>\s*<h4 class="tp-fi-stories-item-title">130\+<\/h4>\s*<\/div>\s*<\/div>/,
      teamCard,
    );
}

function getPageHeader(head) {
  const keep = [];
  for (const pattern of [
    /<meta\s+http-equiv="x-ua-compatible"[^>]*>/i,
    /<title>[\s\S]*?<\/title>/i,
    /<meta\s+name="description"[^>]*>/i,
  ]) {
    const match = head.match(pattern);
    if (match) keep.push(match[0]);
  }

  return keep.join('\n');
}

function getExtraScripts(html) {
  const scripts = [];
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const attrs = match[1];
    const src = attrs.match(/\ssrc=(["'])(.*?)\1/i)?.[2];
    if (src && commonScripts.has(src)) continue;
    scripts.push(match[0]);
  }
  return scripts.join('\n');
}

function getBodyClass(html) {
  return html.match(/<body\b[^>]*\sclass=(["'])(.*?)\1/i)?.[2] ?? 'theme-finances';
}

function astroPage({ pageHeader, pageContent, pageScripts2, bodyClass }) {
  return `---\nimport BaseLayout from '../components/BaseLayout.astro';\n\nconst pageHeader = ${JSON.stringify(pageHeader)};\nconst pageContent = ${JSON.stringify(pageContent)};\nconst pageScripts2 = ${JSON.stringify(pageScripts2)};\nconst bodyClass = ${JSON.stringify(bodyClass)};\n---\n<BaseLayout pageHeader={pageHeader} pageScripts2={pageScripts2} bodyClass={bodyClass}>\n  <Fragment set:html={pageContent} />\n</BaseLayout>\n`;
}

for (const [sourceName, outputName] of pagesToImport) {
  const sourcePath = join(SOURCE_DIR, sourceName);
  const html = readFileSync(sourcePath, 'utf8');
  const head = extract(/<head[^>]*>([\s\S]*?)<\/head>/i, html, 'head', sourceName);
  const main = extract(/(<main\b[\s\S]*?<\/main>)/i, html, 'main', sourceName);
  let pageHeader = getPageHeader(head).replace(/\b[Cc]onsora\b/g, 'Continex Global');
  let pageContent = normalizeAssetPaths(normalizeLinks(stripMotion(main).replace(/\b[Cc]onsora\b/g, 'Continex Global')));
  if (sourceName === 'index.html') {
    pageHeader = pageHeader.replace(
      /<title>[\s\S]*?<\/title>/,
      '<title>Continex Global | Cross-Border Business Development & Strategic Advisory</title>',
    );
    pageContent = replaceHomeMessaging(pageContent);
  }
  if (sourceName === 'contact.html') {
    pageHeader = replaceContactMessaging(pageHeader);
    pageContent = replaceContactOffices(replaceContactMessaging(pageContent));
  }
  if (sourceName === 'blog.html') {
    pageContent = replaceInsightsMessaging(pageContent);
  }
  const sectionsToRemove = pageSectionRemovals.get(sourceName);
  if (sectionsToRemove) {
    pageContent = removeNamedSections(pageContent, sectionsToRemove);
  }
  const businessSectionsToRemove = pageBusinessSectionRemovals.get(sourceName);
  if (businessSectionsToRemove) {
    pageContent = removeBusinessSectionsContaining(pageContent, businessSectionsToRemove);
  }
  const pageScripts2 = getExtraScripts(html);
  const bodyClass = getBodyClass(html);

  writeFileSync(
    join(process.cwd(), 'src/pages', outputName),
    astroPage({ pageHeader, pageContent, pageScripts2, bodyClass }),
  );

  console.log(`${basename(sourcePath)} -> ${outputName}`);
}
