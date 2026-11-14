import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {defineConfig, Plugin} from 'vite';

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

const VALID_ROUTES = new Set([
  '/',
  '/blog/local-seo-perth',
  '/blog/instagram-reels-small-business',
  '/blog/facebook-ads-small-business',
  '/privacy',
  '/terms',
  '/refunds',
]);

function devSsrPrerender(): Plugin {
  return {
    name: 'dev-ssr-prerender',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url || (req.method !== 'GET' && req.method !== 'HEAD')) {
          return next();
        }

        const [rawPathname] = req.url.split('?');

        // Serve robots.txt explicitly as text/plain
        if (rawPathname === '/robots.txt') {
          const robotsPath = path.resolve(__dirname, 'public/robots.txt');
          if (fs.existsSync(robotsPath)) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end(fs.readFileSync(robotsPath, 'utf-8'));
            return;
          }
        }

        // Serve sitemap.xml explicitly as application/xml
        if (rawPathname === '/sitemap.xml') {
          const sitemapPath = path.resolve(__dirname, 'public/sitemap.xml');
          if (fs.existsSync(sitemapPath)) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/xml; charset=utf-8');
            res.end(fs.readFileSync(sitemapPath, 'utf-8'));
            return;
          }
        }

        // Skip Vite internals and static assets
        if (
          rawPathname.startsWith('/@') ||
          rawPathname.startsWith('/__') ||
          rawPathname.startsWith('/src/') ||
          rawPathname.startsWith('/node_modules/') ||
          rawPathname.startsWith('/assets/') ||
          /\.(js|mjs|ts|tsx|jsx|css|json|png|jpg|jpeg|webp|gif|svg|ico|woff|woff2|ttf|eot|txt|xml|map|webmanifest)$/i.test(
            rawPathname
          )
        ) {
          return next();
        }

        const normalized =
          rawPathname
            .replace(/\/index\.html$/i, '')
            .replace(/\.html$/i, '')
            .replace(/\/+$/, '') || '/';

        if (!VALID_ROUTES.has(normalized)) {
          res.statusCode = 404;
          const origWriteHead = res.writeHead.bind(res);
          res.writeHead = ((statusCode: number, ...args: any[]) => {
            const finalCode = statusCode === 200 ? 404 : statusCode;
            res.statusCode = finalCode;
            return origWriteHead(finalCode, ...args);
          }) as typeof res.writeHead;
        }

        next();
      });
    },
    transformIndexHtml: {
      order: 'post',
      async handler(html, ctx) {
        if (!ctx.server) return html;
        try {
          const rawUrl = (ctx.originalUrl || ctx.path || '/').split('?')[0].split('#')[0];
          const mod = await ctx.server.ssrLoadModule('/src/App.tsx');
          const App = mod.default;
          const ROUTE_META = mod.ROUTE_META || {};
          const NOT_FOUND_META = mod.NOT_FOUND_META;
          const normalizePath = mod.normalizePath || ((p: string) => p || '/');
          const normalized = normalizePath(rawUrl);
          const meta = ROUTE_META[normalized] || NOT_FOUND_META || ROUTE_META['/'];
          if (!App || !meta) return html;

          const rawAppHtml = renderToString(React.createElement(App, {initialPath: meta.path}));
          const appHtml = rawAppHtml.replace(/^(<link\s+rel="preload"[^>]*\/>)+/i, '');
          let out = html.replace(/<div id="root">\s*<\/div>/, () => `<div id="root">${appHtml}</div>`);
          out = out.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escapeHtmlText(meta.title)}</title>`);
          out = out.replace(
            /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
            () => `<meta name="description" content="${escapeHtmlAttr(meta.description)}" />`
          );
          out = out.replace(
            /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
            () => `<meta property="og:title" content="${escapeHtmlAttr(meta.title)}" />`
          );
          out = out.replace(
            /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
            () => `<meta property="og:description" content="${escapeHtmlAttr(meta.description)}" />`
          );
          out = out.replace(
            /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/,
            () => `<meta property="og:type" content="${escapeHtmlAttr(meta.ogType)}" />`
          );
          out = out.replace(
            /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
            () => `<meta property="og:url" content="${escapeHtmlAttr(meta.canonical)}" />`
          );
          out = out.replace(
            /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
            () => `<meta property="og:image" content="${escapeHtmlAttr(meta.ogImage)}" />`
          );
          out = out.replace(
            /<!--robots-meta-->|<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/,
            () => (meta.noindex ? `<meta name="robots" content="noindex" />` : '')
          );
          out = out.replace(
            /<!--canonical-link-->|<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
            () => `<link rel="canonical" href="${escapeHtmlAttr(meta.canonical)}" />`
          );
          out = out.replace(
            /<!--json-ld-->|<script\s+id="rw-jsonld"\s+type="application\/ld\+json">[\s\S]*?<\/script>/,
            () =>
              meta.jsonLd
                ? `<script id="rw-jsonld" type="application/ld+json">${JSON.stringify(meta.jsonLd)}</script>`
                : ''
          );
          return out;
        } catch (err) {
          console.error('SSR pre-render error in dev:', err);
          return html;
        }
      },
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), devSsrPrerender()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
