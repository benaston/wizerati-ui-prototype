/* globals module, require */
'use strict';

const path = require('path');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

module.exports = function(options) {

	const distPathAbs = path.join(options.basePath, options.distDir);

	return {
		name: 'uglify',
		task: function() {
			return this.src(options.jsSrc)
				.pipe(concat(options.packageName + '.min.js'))
				.pipe(uglify())
				.pipe(this.dest(distPathAbs));
		},
	};
};