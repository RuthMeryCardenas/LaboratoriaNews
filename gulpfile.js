const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const addsrc = require('gulp-add-src');
// const browserSync = require('browser-sync').create();


const config = {
    source: './src/',
    dist  : './public/'
};

const paths = {
  html    : "**/*.html",
  assets  : "assets/",
  js      : "js/**/*.js",
  mainJS  : "js/app.js",
  jquery  : "js/vendor/jquery-3.2.1.min.js",
  jsMaterialize  : "js/vendor/materialize.min.js",
  sass    : "scss/**/*.scss",
  mainSass: "scss/main.scss"
};

const sources = {
  html  : config.source + paths.html,
  assets: config.source + paths.assets,
  js    : config.source + paths.assets + paths.js,
  rootJS: config.source + paths.assets + paths.mainJS,
  jquery: config.source + paths.assets + paths.jquery,
  materialize: config.source + paths.assets + paths.jsMaterialize,
  sass  : config.source + paths.assets + paths.sass,
  rootSass: config.source + paths.assets + paths.mainSass
};

gulp.task('sass', function () {
  gulp.src(sources.rootSass)
  .pipe(sass().on("error", sass.logError)) //sass({outputStyle: "compressed"})
  .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task('js', function () {
  // return gulp.src([sources.jquery, sources.materialize, sources.assets + "js/utils/*.js", sources.assets + "js/components/*.js", sources.rootJS])
  return gulp.src(sources.rootJS)
  // .pipe(concat('app.js'))
  .pipe(browserify())
  .pipe(rename("bundle.js"))
  .pipe(addsrc(sources.jquery))
  .pipe(gulp.dest(config.dist + paths.assets + "js"))
});

gulp.task('html', () => {
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task('start', ['html', 'sass', 'js']);

gulp.task('serve', function () {
    gulp.watch(sources.html, ["html"]);
    gulp.watch(sources.sass, ["sass"]);
    gulp.watch(sources.js, ["js"]);
});
