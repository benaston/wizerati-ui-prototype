/* globals module, require */
'use strict';

const jshint = require('gulp-jshint');

module.exports = function(options) {

	return {
		name: 'jshint',
		task: function() {
			return this.src(options.jsSrc)
				.pipe(jshint())
				.pipe(jshint.reporter('default'));
		},
	};
};