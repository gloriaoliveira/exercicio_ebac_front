/* compilação do SASS;
compressão de imagens disponibilizadas no Material de apoio;
compressão de código JavaScript. */

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
   return gulp.src('src/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('build/images'));
}

function compilaJavascript() {
   return gulp.src('src/scripts/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('build/scripts'));
}

function compilaSass() {
   return gulp.src('src/styles/main.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('build/styles'));
}



//exports.default = gulp.series('clean', 'scripts', 'styles', 'images', 'copy');

exports.default = function() {
   gulp.watch('src/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
   gulp.watch('src/scripts/*.js', {ignoreInitial: false}, gulp.series(compilaJavascript));
   gulp.watch('src/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
}
