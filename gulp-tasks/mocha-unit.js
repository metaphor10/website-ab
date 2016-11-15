var babel    = require('babel-register'),
    gulp     = require('gulp'),
    isparta  = require('isparta'),
    istanbul = require('gulp-istanbul'),
    mocha    = require('gulp-mocha');

module.exports = function (done) {
    gulp.src([

    ])
    .pipe(istanbul({
        instrumenter: isparta.Instrumenter,
        includeUntested: true
    }))
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
        gulp.src(['test/**/*.js'])
            .pipe(mocha({
                compilers: {
                    js: babel
                },
                reporter: 'spec',
                bail: true,
                timeout: 30000
            }))
            .pipe(istanbul.writeReports())
            // Enforce a coverage of 100%
            .pipe(istanbul.enforceThresholds({
                thresholds: {global: 100}
            }))
            .on('end', done);
    });
};
