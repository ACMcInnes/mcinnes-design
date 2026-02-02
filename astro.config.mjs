// @ts-check
import { defineConfig } from 'astro/config';

import markdoc from '@astrojs/markdoc';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  experimental: {
    clientPrerender: true,
  },

  image: {
    domains: ["images.unsplash.com", "cdn.dummyjson.com"],
  },

  integrations: [markdoc(), alpinejs()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify()
});