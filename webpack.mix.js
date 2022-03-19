const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js');

mix.vue();

mix.postCss('resources/css/app.css', 'public/css', [
    require("tailwindcss")
]);

mix.copy('resources/images', 'public/images');

mix.webpackConfig({
    output: {
        chunkFilename: "js/chunks/[chunkhash].js",
        clean: {
            keep: /^(?!.*js\/chunks.*$).*/
        }
    },
});
