/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				midnight: '#121063',
				tahiti: '#3ab7bf',
			}
		},
	},
	plugins: [],
}
