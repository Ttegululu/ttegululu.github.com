module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: "babel-eslint",
	},
	extends: [
		"@nuxtjs",
		"prettier",
		"prettier/vue",
		"plugin:prettier/recommended",
		"plugin:nuxt/recommended",
	],
	plugins: ["prettier"],
	// add your custom rules here
	rules: {
		"vue/require-prop-types": "off",
		"vue/order-in-components": "off",
		"no-new-func": "off",
		"no-console": "off",
		"no-undef-init": "off",
	},
}
