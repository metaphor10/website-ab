var gulp = require('gulp'),
    eslint = require('gulp-eslint');

module.exports = function () {
    return gulp.src(['**/*.js',
        '!node_modules/**/*.js',
        '!coverage/**/*.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
};

