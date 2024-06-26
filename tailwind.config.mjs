/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Titillium Web", ...defaultTheme.fontFamily.sans],
			  },
		},
		variants: {
			fill: ['hover', 'focus'],
		  },
	},
	plugins: [],
}
