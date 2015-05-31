/* globals module, require */
'use strict';

const path = require('path');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
// const inline = require('gulp-inline-source');
// const inlineWebComponents = require('inline-web-components');
// const tap = require('gulp-tap');
// const file = require('gulp-file');

module.exports = function(options) {

	var indexTemplateFilePath;//, components;

	indexTemplateFilePath = path.join(options.dirAbs.templates, 'index.template.html');
	// components = { '': '' }

	/**
	 * Help chatroom for gulp-css-base64: https://gitter.im/zckrs/gulp-css-base64.
	 * Todo: get fonts working.
	 */
	return {
		name: 'replace',
		task: function(memoryForCssAndJs) {
			return this.src(indexTemplateFilePath)
				.pipe(replace('{{css}}', memoryForCssAndJs.css))
				.pipe(replace('{{js}}', memoryForCssAndJs.js))
				// .pipe(tap(function(f) {
				// 	return file('index.html', inlineWebComponents(f, components));
				// }))
				.pipe(rename('index.html'))
				.pipe(this.dest(path.join(options.dirAbs.dist)));
		},
	};

};