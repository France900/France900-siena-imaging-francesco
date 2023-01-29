let mix = require('laravel-mix');
    mix
      .sass('src/scss/app.scss', 'assets/css/')
      .js('src/js/app.js', 'assets/js/');