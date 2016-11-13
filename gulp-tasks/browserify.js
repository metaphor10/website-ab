var gulp = require("gulp");
    var browserify = require("browserify");
    var babelify = require("babelify");
    var source = require("vinyl-source-stream");

    module.exports = function () {
    console.log("broswer");
    return browserify("./public/javascripts/app.js")
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source("javascripts/main.js"))
    .pipe(gulp.dest("./public/"));
    };
    
