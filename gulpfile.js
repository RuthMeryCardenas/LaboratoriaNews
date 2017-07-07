const gulp = require('gulp');
// const sass = require('gulp-sass');
// const concat = require('gulp-concat');

const config = {
    source: './src/',
    dist  : './public/'
};

const paths = {
  html    : "**/*.html"
  // assets  : "assets/",
  // js      : "js/**/*.js",
  // sass    : "scss/**/*.scss",
  // jquery  : "js/vendor/jquery-3.2.1.min.js",
  // jsMaterialize  : "js/vendor/materialize.min.js",
  // mainSass: "scss/main.scss",
  // mainJS  : "js/app.js"
};

const sources = {
  html: config.source + paths.html
};

gulp.task('serve', () => {
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});
