var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream');

module.exports = function () {
    console.log('broswer'); // eslint-disable-line
    return browserify('./public/javascripts/app.js')
    .transform(babelify, {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('javascripts/main.js'))
    .pipe(gulp.dest('./public/'));
};

