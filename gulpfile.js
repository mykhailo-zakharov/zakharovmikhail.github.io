var browserSync = require('browser-sync');

var gulp = require('gulp'),
sass = require('gulp-sass'),
uglify = require('gulp-uglify'),
jade = require('gulp-jade');

gulp.task('jade', function() {
        gulp.src('gulp/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('./raw'));

        gulp.src('gulp/**/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest(''))
        .pipe(browserSync.reload({
                stream: true
        }));
});

gulp.task('sass', function () {
        return gulp.src('gulp/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
                stream: true
        }))
});

gulp.task('js', function () {
        return gulp.src(['gulp/js/*.js'], ['js'])
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
  })
})

gulp.task('watch', ['browserSync'], function() {
        gulp.watch('./gulp/**/*.jade', ['jade']);
        gulp.watch('./gulp/css/**/*.scss', ['sass']);
        gulp.watch('./gulp/js/**/*.js', ['js']);

});

gulp.task('default', ['watch']);
