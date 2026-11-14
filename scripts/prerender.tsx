import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App, { ROUTE_META, NOT_FOUND_META, RouteMeta } from '../src/App';

function escapeHtmlAttr(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlText(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function renderRouteWithMeta(templateHtml: string, meta: RouteMeta): string {
  const rawAppHtml = renderToString(<App initialPath={meta.path} />);
  const appHtml = rawAppHtml.replace(/^(<link\s+rel="preload"[^>]*\/>)+/i, '');

  let html = templateHtml.replace(
    /<div id="root">\s*<\/div>/,
    () => `<div id="root">${appHtml}</div>`
  );

  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    () => `<title>${escapeHtmlText(meta.title)}</title>`
  );

  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    () => `<meta name="description" content="${escapeHtmlAttr(meta.description)}" />`
  );

  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    () => `<meta property="og:title" content="${escapeHtmlAttr(meta.title)}" />`
  );

  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    () => `<meta property="og:description" content="${escapeHtmlAttr(meta.description)}" />`
  );

  html = html.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/,
    () => `<meta property="og:type" content="${escapeHtmlAttr(meta.ogType)}" />`
  );

  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    () => `<meta property="og:url" content="${escapeHtmlAttr(meta.canonical)}" />`
  );

  html = html.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
    () => `<meta property="og:image" content="${escapeHtmlAttr(meta.ogImage)}" />`
  );

  html = html.replace(
    /<!--robots-meta-->|<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/,
    () => (meta.noindex ? `<meta name="robots" content="noindex" />` : '')
  );

  html = html.replace(
    /<!--canonical-link-->|<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    () => `<link rel="canonical" href="${escapeHtmlAttr(meta.canonical)}" />`
  );

  html = html.replace(
    /<!--json-ld-->|<script\s+id="rw-jsonld"\s+type="application\/ld\+json">[\s\S]*?<\/script>/,
    () =>
      meta.jsonLd
        ? `<script id="rw-jsonld" type="application/ld+json">${JSON.stringify(meta.jsonLd)}</script>`
        : ''
  );

  return html;
}

export function injectRouteHtml(templateHtml: string, routePath: string): string {
  const meta = ROUTE_META[routePath] || NOT_FOUND_META;
  return renderRouteWithMeta(templateHtml, meta);
}

export function generateSitemapXml(): string {
  const urls = Object.values(ROUTE_META)
    .filter((meta) => !meta.noindex)
    .map((meta) => {
      const lastmodLine = meta.lastmod ? `\n    <lastmod>${meta.lastmod}</lastmod>` : '';
      return `  <url>\n    <loc>${escapeHtmlText(meta.canonical)}</loc>${lastmodLine}\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function runPrerender() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const publicDir = path.resolve(process.cwd(), 'public');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    throw new Error(`dist/index.html not found at ${templatePath}. Run vite build first.`);
  }

  const templateHtml = fs.readFileSync(templatePath, 'utf-8');

  for (const meta of Object.values(ROUTE_META)) {
    const renderedHtml = renderRouteWithMeta(templateHtml, meta);

    if (meta.path === '/') {
      fs.writeFileSync(templatePath, renderedHtml, 'utf-8');
      console.log(`Pre-rendered: / -> dist/index.html`);
    } else {
      const cleanRoute = meta.path.replace(/^\/+/, '');
      const duplicateFolder = path.join(distDir, cleanRoute);
      if (fs.existsSync(duplicateFolder) && fs.statSync(duplicateFolder).isDirectory()) {
        fs.rmSync(duplicateFolder, { recursive: true, force: true });
      }

      const flatFilePath = path.join(distDir, `${cleanRoute}.html`);
      fs.mkdirSync(path.dirname(flatFilePath), { recursive: true });
      fs.writeFileSync(flatFilePath, renderedHtml, 'utf-8');

      console.log(`Pre-rendered: ${meta.path} -> dist/${cleanRoute}.html`);
    }
  }

  // Pre-render 404.html for Netlify & direct /404 route
  const notFoundHtml = renderRouteWithMeta(templateHtml, NOT_FOUND_META);
  const notFoundFilePath = path.join(distDir, '404.html');
  fs.writeFileSync(notFoundFilePath, notFoundHtml, 'utf-8');
  console.log(`Pre-rendered: /404 -> dist/404.html`);

  // Generate sitemap.xml from the same route list
  const sitemapXml = generateSitemapXml();
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  if (fs.existsSync(publicDir)) {
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  }
  console.log(`Generated sitemap.xml -> dist/sitemap.xml & public/sitemap.xml`);
}

runPrerender();
