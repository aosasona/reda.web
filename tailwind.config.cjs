/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				dark: "#000000",
				light: "#f5f5f5",
				primary: "#006ee6",
			},
		},
	},
	plugins: [],
};
