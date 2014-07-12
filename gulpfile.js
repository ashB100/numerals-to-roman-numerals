// include gulp
var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');

// JS hint task
gulp.task('jshint', function() {
    gulp.src('./src/scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// include plug-ins
var autoprefix = require('gulp-autoprefixer');

// CSS auto-prefix
gulp.task('styles', function() {
    gulp.src(['./src/styles/*.css'])
        .pipe(autoprefix('last 2 versions'))
        .pipe(gulp.dest('./build/styles/'));
});

// include plug-ins
var sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
    gulp.src(['./src/styles/scss/*.scss'])
    .pipe(sass({sourcemap: true, sourcemapPath: '../scss'}))
    .pipe(gulp.dest('./build/styles/css'));
});

// default gulp task
gulp.task('default', ['jshint', 'styles', 'sass'], function() {
    // watch for JS changes
    gulp.watch('./src/scripts/*.js', function() {
        gulp.run('jshint');
    });

    // watch for CSS changes
    gulp.watch('./src/styles/*.css', function() {
        gulp.run('styles');
        gulp.run('sass');
    });
});

