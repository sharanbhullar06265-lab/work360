import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
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

function devSsrPrerender(): Plugin {
  return {
    name: 'dev-ssr-prerender',
    transformIndexHtml: {
      order: 'post',
      async handler(html, ctx) {
        if (!ctx.server) return html;
        try {
          const rawUrl = (ctx.originalUrl || ctx.path || '/').split('?')[0].split('#')[0];
          const mod = await ctx.server.ssrLoadModule('/src/App.tsx');
          const App = mod.default;
          const ROUTE_META = mod.ROUTE_META || {};
          const normalizePath = mod.normalizePath || ((p: string) => p || '/');
          const normalized = normalizePath(rawUrl);
          const meta = ROUTE_META[normalized] || ROUTE_META['/'];
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
            /<!--canonical-link-->|<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
            () => `<link rel="canonical" href="${escapeHtmlAttr(meta.canonical)}" />`
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
