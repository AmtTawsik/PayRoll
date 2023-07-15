export default defineNuxtConfig({
	css: ["@/assets/css/main.css"],
	runtimeConfig: {
		public: {
			APP_ID: process.env.VITE_REALM_APP_ID,
			APP_NAME: process.env.VITE_APP_NAME,
			USER_API_KEY: process.env.VITE_USER_API_KEY,
		},
	},
	app: {
		head: {
			meta: [
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
			],
			title: process.env.VITE_APP_NAME,
		},
	},

	components: {
		global: true,
		dirs: ["~/components"],
	},

	alias: {
		pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
	},

	pinia: {
		autoImports: ["defineStore", "acceptHMRUpdate"],
	},
	modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
});
