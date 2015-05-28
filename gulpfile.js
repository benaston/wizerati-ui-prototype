/* globals require, __dirname */
'use strict';

const gulp = require('gulp');
const path = require('path');
const packageJson = require('./package.json');
const requireDir = require('require-dir');
const tasks = requireDir('./src/javascripts/gulp-tasks', {
	recurse: false
});

/**
 * First the options object containing 
 * globally useful information is 
 * intantiated...
 */
const options = {
	packageName: packageJson.name,
	basePath: __dirname,
	distDir: 'dist',
	lessDir: 'src/stylesheets',
	imageDir: 'src/images',
};

options.lessSrc = path.join(options.basePath, options.lessDir, '**', '*.less');

/**
 * ...then the options object is supplied 
 * to each of the gulp tasks individually
 * via closure (the tasks are not 
 * registered with gulp yet)...
 */
var configuredTasks = Object.keys(tasks)
	.map(k => tasks[k](options))
	.reduce((p, c) => (p[c.name] = c.task, p), {});

/**
 * ...then the configured tasks are registered 
 * with gulp, with their dependencies being 
 * defined too. In this way the definition of 
 * the tasks remains separate from their 
 * registration with gulp.
 */
gulp.task('less', configuredTasks.less);
gulp.task('build', ['less']);
gulp.task('default', ['build']);