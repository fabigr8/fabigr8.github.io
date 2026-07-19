// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// Root user-site deployment: https://fabigr8.github.io  (no base path).
export default defineConfig({
  site: 'https://fabigr8.github.io',
  output: 'static',
  // The blog now lives at the site root ("/"); keep the old /blog path working.
  redirects: {
    '/blog': '/',
  },
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
