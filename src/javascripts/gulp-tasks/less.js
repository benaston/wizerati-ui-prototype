/* globals module, require */
'use strict';

const path = require('path');
const less = require('gulp-less');
const urlEmbed = require('gulp-css-base64');
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');

module.exports = function(options) {

	const distPathAbs = path.join(options.basePath, options.distDir);

	/**
	 * Help chatroom for gulp-css-base64: https://gitter.im/zckrs/gulp-css-base64.
	 * Todo: get fonts working.
	 */
	return {
		name: 'less',
		task: function() {
			return this.src(options.lessSrc)
				.pipe(less())
				.pipe(urlEmbed({
					baseDir: path.join(options.basePath, options.srcDir),
					maxWeightResource: 40000,
				}))
				.pipe(concat(options.packageName + '.min.css'))
				.pipe(minifyCss())
				.pipe(this.dest(distPathAbs));
		},
	};
};