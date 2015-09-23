
// include gulp
var gulp = require('gulp');

// include plug-ins
var concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    autoprefix = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    minifyHTML = require('gulp-minify-html');


gulp.task('scripts', function() {
  gulp.src(['./bower_components/handlebars/handlebars.js','./src/js/game.js'])
    .pipe(concat('./game.js'))
    .pipe(plumber())
    .pipe(gulp.dest('./build/'))
    .pipe(livereload());
});


gulp.task('styles', function () {
  gulp.src('./src/scss/game.scss')
  .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefix("last 2 version", "> 1%", "ie 8", { cascade: true }))
    .pipe(gulp.dest('./build/'))
    .pipe(livereload());
});

gulp.task('html', function() {
  var htmlSrc = './src/*.html',
      htmlDst = './build';

  gulp.src(htmlSrc)
    .pipe(gulp.dest(htmlDst))
    .pipe(livereload());
});

// default gulp task
gulp.task('default', function() {
  livereload.listen();
  gulp.watch('./src/*.html', ['html']);
  gulp.watch('./src/scss/*.scss', ['styles']);
  gulp.watch('./src/js/*.js', ['scripts']);
});

