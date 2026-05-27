import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';
import shiki from '@astrojs/markdoc/shiki';

export default defineMarkdocConfig({
  extends: [
    shiki({
      // Choose from Shiki's built-in themes (or add your own)
      // Default: 'github-dark'
      // https://shiki.style/themes
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      // Enable word wrap to prevent horizontal scrolling
      // Default: false
      wrap: false,
      // Pass custom languages
      // Note: Shiki has countless langs built-in, including `.astro`!
      // https://shiki.style/languages
      langs: [],
    }),
  ],
	tags: {
		aside: {
			render: component('./src/components/Aside.astro'),
			attributes: {
				type: { type: String },
				title: { type: String },
			},
		},
    grid: {
			render: component('./src/components/MarkdocGrid.astro'),
			attributes: {
				heading: { type: String },
				description: { type: String },
			},
    },
    article: {
			render: component('./src/components/MarkdocGridArticle.astro'),
			attributes: {
				image: { type: String },
				tags: { type: Array },
        title: { type: String },
        description: { type: String },
        url: { type: String },
			},
    },
	},
});
