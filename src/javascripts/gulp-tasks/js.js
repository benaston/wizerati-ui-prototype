/* globals module, require */
'use strict';

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const tap = require('gulp-tap');

module.exports = function(options) {

	/**
	 * Help chatroom for gulp-css-base64: https://gitter.im/zckrs/gulp-css-base64.
	 */
	return {
		name: 'js',
		task: function(sharedMemory) {
			return this.src([options.glob.js, '!' + options.glob.gulpFiles, '!' + options.glob.testFiles])
				.pipe(concat(options.packageName + '.min.js'))
				.pipe(uglify())
				.pipe(tap(file => sharedMemory.js = file.contents.toString()));
		},
	};

};