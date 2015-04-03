var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var lessTask = gulpLoadPlugins();

gulp.task('less', partial(lessTask, ));

gulp.task('default');
