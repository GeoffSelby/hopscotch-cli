let mix = require('laravel-mix')
let tailwindcss = require('tailwindcss');
	
mix.js('src/js/app.js', 'dist/js')
	.less('src/less/app.less', 'dist/css')
	.options({
		postCss: [
			tailwindcss('./tailwind.js'),
		]
	});
