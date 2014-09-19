"use strict";

var path   = require("path");
var gulp   = require("gulp");
var jshint = require("gulp-jshint");
var mocha  = require("gulp-mocha");
var args   = require("yargs").argv;

gulp.task("default", ["lint", "test"], function () {});

gulp.task("lint", function () {
  gulp
    .src([
      path.resolve(__dirname, "gulpfile.js"),
      path.resolve(__dirname, "app.js"),
      path.resolve(__dirname, "bin", "*"),
      path.resolve(__dirname, "migrations", "**", "*"),
      path.resolve(__dirname, "models", "**", "*"),
      path.resolve(__dirname, "routes", "**", "*")
    ])
    .pipe(jshint())
    .pipe(jshint.reporter("default"))
    .pipe(jshint.reporter("fail"));
});

gulp.task("test", function () {
   gulp
      .src(path.resolve(__dirname, "test", "**", "*.test.js"), { read: false })
      .pipe(mocha({
        reporter:    "spec",
        ignoreLeaks: true,
        timeout:     10000,
        grep:        args.grep
      }));
});
