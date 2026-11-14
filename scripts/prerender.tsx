import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App, { ROUTE_META } from '../src/App';

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

export function injectRouteHtml(templateHtml: string, routePath: string): string {
  const meta = ROUTE_META[routePath] || ROUTE_META['/'];
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
    /<!--canonical-link-->|<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    () => `<link rel="canonical" href="${escapeHtmlAttr(meta.canonical)}" />`
  );

  return html;
}

function runPrerender() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    throw new Error(`dist/index.html not found at ${templatePath}. Run vite build first.`);
  }

  const templateHtml = fs.readFileSync(templatePath, 'utf-8');

  for (const meta of Object.values(ROUTE_META)) {
    const renderedHtml = injectRouteHtml(templateHtml, meta.path);

    if (meta.path === '/') {
      fs.writeFileSync(templatePath, renderedHtml, 'utf-8');
      console.log(`Pre-rendered: / -> dist/index.html`);
    } else {
      const cleanRoute = meta.path.replace(/^\/+/, '');
      const routeDir = path.join(distDir, cleanRoute);
      fs.mkdirSync(routeDir, { recursive: true });

      const indexFilePath = path.join(routeDir, 'index.html');
      fs.writeFileSync(indexFilePath, renderedHtml, 'utf-8');

      const flatFilePath = path.join(distDir, `${cleanRoute}.html`);
      fs.mkdirSync(path.dirname(flatFilePath), { recursive: true });
      fs.writeFileSync(flatFilePath, renderedHtml, 'utf-8');

      console.log(`Pre-rendered: ${meta.path} -> dist/${cleanRoute}/index.html & dist/${cleanRoute}.html`);
    }
  }
}

runPrerender();
