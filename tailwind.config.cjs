const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],  
	plugins: [
	  require('@tailwindcss/typography'),
	  require('@tailwindcss/forms'),
	  require('@tailwindcss/aspect-ratio'),
	  require('tailwindcss-elevation'),
	]
  };
  
  module.exports = config;