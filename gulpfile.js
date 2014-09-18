"use strict";

var gulp   = require("gulp");
var jshint = require("gulp-jshint");
var path   = require("path");

gulp.task("default", ["lint"], function () {});

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
