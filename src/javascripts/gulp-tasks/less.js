/* globals module, require */
'use strict';

var less = require('gulp-less');
var rename = require('gulp-rename');
var path = require('path');

var LESS_PATH = 'src/stylesheets';
var TARGET_FILE_NAME = 'fuckme.min.css';

module.exports = function(options) {

	var lessPath = path.join(options.basePath, LESS_PATH, '**', '*.less');
	var distPath = path.join(options.basePath, options.distPath);

	return {
		name: 'less',
		task: function() {
			return this.src(lessPath)
				.pipe(less({
					paths: [options.basePath],
					plugins: [],
				}))
				.pipe(rename(TARGET_FILE_NAME))
				.pipe(this.dest(distPath));
		},
	};
};