/* globals require, __dirname */
'use strict';

const gulp = require('gulp');
const path = require('path');
const packageJson = require('./package.json');
const requireDir = require('require-dir');
const partial = require('partial-application').partial;
const tasks = requireDir('./src/javascripts/gulp-tasks', {
	recurse: false
});
const sharedMemory = {};

/**
 * First the options object containing 
 * globally useful information is 
 * intantiated...
 */
const options = {
	packageName: packageJson.name,
	basePath: __dirname,
	dirRel: {
		dist: 'dist',
		src: 'src',
		fonts: 'src/fonts',
		images: 'src/images',
		javascripts: 'src/javascripts',
		stylesheets: 'src/stylesheets',
		templates: 'src/templates',
		tests: 'src/javascripts/tests',
		gulpTasks: 'src/javascripts/gulp-tasks',
	},
	dirAbs: {},
	glob: {},
};

options.dirAbs.src = path.join(options.basePath, options.dirRel.src);
options.dirAbs.dist = path.join(options.basePath, options.dirRel.dist);
options.dirAbs.stylesheets = path.join(options.basePath, options.dirRel.stylesheets);
options.dirAbs.templates = path.join(options.basePath, options.dirRel.templates);

options.glob.less = path.join(options.basePath, options.dirRel.stylesheets, '**', '*.less');
options.glob.js = path.join(options.basePath, options.dirRel.javascripts, '**', '*.js');
options.glob.gulpFiles = path.join(options.basePath, options.dirRel.gulpTasks, '**');
options.glob.testFiles = path.join(options.basePath, options.dirRel.tests, '**');

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
gulp.task('css', partial(configuredTasks.css, sharedMemory));
gulp.task('js', partial(configuredTasks.js, sharedMemory));
gulp.task('replace', ['css', 'js'], partial(configuredTasks.replace, sharedMemory));
gulp.task('build', ['replace']);
gulp.task('default', ['build']);