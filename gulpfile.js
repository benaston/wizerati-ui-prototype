var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

console.log(JSON.stringify(plugins.less));

gulp.task('default');
