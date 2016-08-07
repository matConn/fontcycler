// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/context_menu/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['src/*.js','src/context_menu/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'scripts', 'watch'], function(){
    gulp.src(['background.js', 'manifest.json'])
        .pipe(gulp.dest('public'));
});