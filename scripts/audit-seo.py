"""Audit generated HTML, language pairs and sitemap; run after npm run build."""
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1] / 'dist'
class Page(HTMLParser):
    def __init__(self, file):
        super().__init__(convert_charrefs=True)
        self.file = file
        self.meta = {}; self.links = []; self.headings = []; self.ids = set(); self.anchors = []
        self.titles = []; self.schemas = []; self.images = []; self.lang = ''; self.capture = None
        self.feed(file.read_text())
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get('id'): self.ids.add(a['id'])
        if tag == 'html': self.lang = a.get('lang', '')
        if tag == 'meta': self.meta.setdefault(a.get('name', a.get('property', '')), []).append(a.get('content', ''))
        if tag == 'link': self.links.append(a)
        if tag == 'a' and a.get('href'): self.anchors.append(a['href'])
        if tag == 'img': self.images.append(a)
        if tag == 'title': self.titles.append(''); self.capture = ('title', 0)
        if tag in ['h1','h2','h3','h4','h5','h6']:
            self.headings.append([int(tag[1]), '']); self.capture = ('heading', len(self.headings)-1)
        if tag == 'script' and a.get('type') == 'application/ld+json':
            self.schemas.append(''); self.capture = ('schema', len(self.schemas)-1)
    def handle_data(self, data):
        if self.capture:
            kind, i = self.capture
            if kind == 'title': self.titles[-1] += data
            elif kind == 'heading': self.headings[i][1] += data
            else: self.schemas[i] += data
    def handle_endtag(self, tag):
        if tag in ['title','h1','h2','h3','h4','h5','h6','script']: self.capture = None
    def value(self, key): return self.meta.get(key, [''])[0]
    @property
    def canonical(self): return next((x.get('href', '') for x in self.links if x.get('rel') == 'canonical'), '')
    @property
    def alternates(self): return {x['hreflang']:x['href'] for x in self.links if x.get('rel') == 'alternate' and 'hreflang' in x}
    @property
    def indexed(self): return 'noindex' not in self.value('robots')

pages = [Page(f) for f in ROOT.rglob('*.html') if f.name == 'index.html' or f == ROOT / '404.html']
by_url = {p.canonical:p for p in pages}
by_path = {urlsplit(p.canonical).path:p for p in pages}
errors = []; notes = []
def check(condition, page, message):
    if not condition: errors.append(f'{page}: {message}')
def local_file(url): return ROOT / unquote(urlsplit(url).path).lstrip('/')
for p in pages:
    label = str(p.file.relative_to(ROOT)); c = urlsplit(p.canonical)
    check(len(p.titles) == 1 and bool(p.titles[0].strip()), label, 'expected one nonempty title')
    check(len(p.meta.get('description', [])) == 1 and bool(p.value('description')), label, 'missing/duplicate description')
    check(sum(h[0] == 1 for h in p.headings) == 1, label, 'expected exactly one H1')
    for prev, curr in zip(p.headings, p.headings[1:]):
        check(curr[0] <= prev[0]+1, label, f'heading jump H{prev[0]} to H{curr[0]} ({curr[1]})')
    check(p.lang in ['tr','en'], label, 'invalid language')
    check(sum(x.get('rel') == 'canonical' for x in p.links) == 1, label, 'expected one canonical')
    check(c.scheme == 'https' and bool(c.netloc) and c.hostname not in ['localhost','127.0.0.1'] and not c.query and not c.fragment, label, 'canonical is not a clean production HTTPS URL')
    expected_path = '/' + str(p.file.relative_to(ROOT)).removesuffix('index.html').rstrip('/')
    if p.file.name == 'index.html': check(c.path == expected_path, label, 'canonical does not match the built route')
    check(c.path == '/' or not c.path.endswith('/'), label, 'noncanonical trailing slash')
    check(p.value('og:url') == p.canonical, label, 'OG URL differs from canonical')
    check(local_file(p.value('og:image')).is_file(), label, 'social image does not exist')
    check(all('alt' in image for image in p.images), label, 'image missing alt attribute')
    if p.indexed:
        check(p.alternates.get(p.lang) == p.canonical, label, 'missing self hreflang')
        for lang, url in p.alternates.items():
            target = by_url.get(url)
            check(target is not None and target.indexed, label, f'hreflang target absent/noindex: {url}')
            if target and lang != 'x-default':
                check(target.lang == lang and target.alternates.get(p.lang) == p.canonical, label, 'hreflang not reciprocal / wrong language')
        check(bool(p.schemas), label, 'structured data missing')
        for raw in p.schemas:
            try: graph = json.loads(raw)['@graph']
            except (ValueError, KeyError): check(False, label, 'invalid JSON-LD'); continue
            types = {node.get('@type') for node in graph}
            check({'Organization','WebSite'} <= types, label, 'organization/website schema missing')
            if p.value('og:type') == 'article': check('Article' in types, label, 'article schema absent')
            for node in graph:
                if node.get('@type') == 'Organization' and node.get('logo'): check(local_file(node['logo']['url']).is_file(), label, 'organization logo missing')
                if node.get('@type') == 'Article':
                    check(node['headline'] == next(h[1] for h in p.headings if h[0] == 1), label, 'article headline differs from H1')
                    check(bool(node.get('author')) and bool(node.get('datePublished')), label, 'article attribution/date missing')
                    for image in node.get('image', []): check(local_file(image).is_file(), label, 'article image absent')
    for href in p.anchors:
        link = urlsplit(href)
        if link.scheme or link.netloc or not link.path.startswith('/'): continue
        path = link.path.rstrip('/') or '/'
        target = by_path.get(path)
        check(target is not None or local_file(href).is_file(), label, f'broken internal URL: {href}')
        if target and link.fragment: check(unquote(link.fragment) in target.ids, label, f'broken fragment: {href}')
    if p.indexed and len(p.titles[0]) > 70: notes.append(f'{label}: editorial title length {len(p.titles[0])}; Google may truncate it (not an indexing error).')
    if p.indexed and len(p.value('description')) > 180: notes.append(f'{label}: description length {len(p.value("description"))}; review snippet brevity.')
for field, values in [('canonical', [p.canonical for p in pages]), ('title', [p.titles[0] for p in pages if p.indexed]), ('description', [p.value('description') for p in pages if p.indexed])]:
    for value, count in Counter(values).items(): check(count == 1, 'site', f'duplicate {field}: {value}')
ns = {'s':'http://www.sitemaps.org/schemas/sitemap/0.9','x':'http://www.w3.org/1999/xhtml'}
sitemap = ET.parse(ROOT/'sitemap-0.xml')
urls = {node.find('s:loc',ns).text:node for node in sitemap.findall('s:url',ns)}
check(set(urls) == {p.canonical for p in pages if p.indexed}, 'sitemap', 'indexable page coverage mismatch')
for url, node in urls.items():
    check({x.attrib['hreflang']:x.attrib['href'] for x in node.findall('x:link',ns)} == by_url[url].alternates, url, 'sitemap hreflang differs from HTML')
robots = (ROOT/'robots.txt').read_text()
check('Disallow: /\n' not in robots, 'robots', 'site is blocked')
check('Sitemap: '+urlsplit(pages[0].canonical).scheme+'://'+urlsplit(pages[0].canonical).netloc+'/sitemap-index.xml' in robots, 'robots', 'wrong sitemap domain')
print(json.dumps({'pages':len(pages),'indexable':sum(p.indexed for p in pages),'errors':errors,'notes':notes}, ensure_ascii=False, indent=2))
sys.exit(1 if errors else 0)
