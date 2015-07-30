/*jslint node: true */
'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var ghPages = require('gulp-gh-pages');

var path = {
  src: 'src'
};

gulp.task('build', function() {
  return gulp.src(path.src + '/file-saver.js')
    .pipe($.plumber())
    .pipe($.uglify())
    .pipe($.rename({ suffix: '.min'}))
    .pipe(gulp.dest(path.src));
});

gulp.task('deploy', function() {
  return gulp.src('./docs/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['build']);
