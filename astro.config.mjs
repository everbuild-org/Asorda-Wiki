// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiki.asorda.net',
	integrations: [
		starlight({
			title: {
				en: 'Asordapedia',
				de: 'Asordapedia',
				fr: 'Asordapedia',
			},
			// Set English as the default language for this site.
			defaultLocale: 'en',
			locales: {
				// English docs in `src/content/docs/en/`
				en: {
					label: 'English',
					lang: 'en_US',
				},
				// German docs in `src/content/docs/de/`
				de: {
					label: 'Deutsch',
					lang: 'de_DE',
				},
				// France docs in `src/content/docs/es/`
				fr: {
					label: 'Français',
					lang: 'fr_FR',
				},
			},
		}),
	],
});