var gulp = require('gulp');

// var es = require('event-stream');
var gutil = require('gulp-util');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
// var rimraf = require('rimraf');
// var jshint = require('gulp-jshint');
// var concat = require('gulp-concat');
// var rename = require('gulp-rename');
// var uglify = require('gulp-uglify');
// var less = require('gulp-less');
// var refresh = require('gulp-livereload');
// var lr = require('tiny-lr'); // "tiny live reload".
// var server = lr();
// var minifyCSS = require('gulp-minify-css');
// var embedlr = require('gulp-embedlr'); // Embed live reload in page.

// gulp.task('clean', function() {
//   rimraf.sync(paths.dist.css);
//     rimraf.sync(paths.dist.js);
// });

console.log('foo');
console.log(JSON.stringify(plugins.less));
console.log('bar');

// var paths = {
//     stylesheets: ['./stylesheets/*.less'],
//     javascripts: ['./javascripts/**/*.js'],
//     images: ['./images/**/*'],
//     dist: {
//         css: './public/css/',
//         js: './public/js/',
//         jsView: './public/views'
//     },
//     vendor: {
//         css: ['./vendor/twitter/bootstrap/dist/css/bootstrap.min.css'],
//         js: ['./js/vendor/*.js']
//     },
//     tests: ['./tests/**.js']
// };

// gulp.task('styles', function() {
//     gulp.src(paths.stylesheets)
//         .pipe(less())
//         .pipe(minifyCSS())
//         .pipe(gulp.dest(paths.dist.css))
//         .pipe(refresh(server))
// });

// gulp.task('default', ['styles']);
gulp.task('default');
// 
// 
// 
// 
// 

// gulp.task('lr-server', function() {
//     server.listen(35729, function(err) {
//         if(err) return console.log(err);
//     });
// });

// gulp.task('html', function() {
//     gulp.src("app/*.html")
//         .pipe(embedlr())
//         .pipe(gulp.dest('dist/'))
//         .pipe(refresh(server));
// });

// gulp.task('default', function() {
//     gulp.run('lr-server', 'scripts', 'styles', 'html');

//     gulp.watch('app/src/**', function(event) {
//         gulp.run('scripts');
//     })

//     gulp.watch('app/css/**', function(event) {
//         gulp.run('styles');
//     })

//     gulp.watch('app/**/*.html', function(event) {
//         gulp.run('html');
//     })
// })

// gulp.task('default', function() {
//     return gulp.src('script/lib/*.js')
//         .pipe(jshint()) // run their contents through jshint
//         .pipe(jshint.reporter('default')) // report any findings from jshint
//         .pipe(concat('app.js')) // concatenate all of the file contents into a file titled 'all.js'
//         .pipe(gulp.dest('dist/js')) // write that file to the dist/js directory
//         .pipe(rename('app.min.js')) // now rename the file in memory to 'all.min.js'
//         .pipe(uglify()) // run uglify (for minification) on 'all.min.js'
//         .pipe(gulp.dest('dist/js')); // write all.min.js to the dist/js file
// });
