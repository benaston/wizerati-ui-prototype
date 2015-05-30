/* globals module, require */
'use strict';

const replace = require('gulp-replace');

module.exports = function(options) {

	return {
		name: 'replace',
		task: function() {
			return this.src([options.indexHtmlSrc])
				.pipe(replace(/{{css}}/g, '$1foo'))
				.pipe(this.dest(options.distPathAbs));
		},
	};

};