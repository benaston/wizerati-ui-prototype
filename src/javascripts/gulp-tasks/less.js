module.exports = function(lessPath) {
    return gulp.src(lessPath)
        .pipe(less({
            paths: [
                path.join(__dirname, 'less', 'includes')
            ]
        }))
        .pipe(gulp.dest('./public/css'));
};
