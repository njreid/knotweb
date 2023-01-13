import adapter from '@sveltejs/adapter-auto'
// import { vitePreprocess } from '@sveltejs/kit/vite'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		preprocess({}),
		mdsvex({
			extensions: ['.md']
		})
	],

	kit: {
		adapter: adapter()
	},

	extensions: ['.svelte', '.md']
}

export default config
