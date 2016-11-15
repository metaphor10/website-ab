/* eslint-disable no-unused-vars */
var gulp = require('gulp'),
    gulpTasks   = require('gulp-task-loader'),
    runSequence;

/* eslint-enable no-unused-vars */
gulpTasks('./gulp-tasks');
runSequence = require('run-sequence');
gulp.task('test', ['eslint', 'mocha-unit']);
gulp.task('browser', ['browserify']);

