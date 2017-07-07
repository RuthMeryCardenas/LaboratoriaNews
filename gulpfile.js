const gulp = require('gulp');
const sass = require('gulp-sass');
// const concat = require('gulp-concat');

const config = {
    source: './src/',
    dist  : './public/'
};

const paths = {
  html    : "**/*.html",
  assets  : "assets/",
  // js      : "js/**/*.js",
  sass    : "scss/**/*.scss",
  mainSass: "scss/main.scss"
  // jquery  : "js/vendor/jquery-3.2.1.min.js",
  // jsMaterialize  : "js/vendor/materialize.min.js",
  // mainJS  : "js/app.js"
};

const sources = {
  html  : config.source + paths.html,
  assets: config.source + paths.assets,
  sass  : config.source + paths.assets + paths.sass,
  rootSass: config.source + paths.assets + paths.mainSass
};

gulp.task('serve', () => {
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task('sass', function () {
    gulp.src(sources.rootSass)
        .pipe(sass().on("error", sass.logError)) //sass({outputStyle: "compressed"})
        .pipe(gulp.dest(config.dist + paths.assets + "css"));
});
