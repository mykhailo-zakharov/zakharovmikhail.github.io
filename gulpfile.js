var browserSync = require('browser-sync');

var gulp = require('gulp'),
sass = require('gulp-sass'),
uglify = require('gulp-uglify'),
// inlinesource = require('gulp-inline-source'),
jade = require('gulp-jade');



gulp.task('jade', function() {
        gulp.src('gulp/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('./raw'));

        gulp.src('gulp/**/*.jade')
        .pipe(jade({pretty: false}))
        .pipe(gulp.dest(''))
        .pipe(browserSync.reload({
                stream: true
        }));
});


gulp.task('sass', function () {
        return gulp.src('gulp/css/*.scss')
        // .pipe(sass().on('error', sass.logError))
        // .pipe(gulp.dest('./css')).pipe(csso());
        // .pipe(gulp.dest('css'));

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

// gulp.task('inline-code', function () {
//     return gulp.src('raw')
//         .pipe(inlinesource(compress: false))
//         .pipe(gulp.dest(''));


// });

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

// gulp.task('watch', ['browserSync', 'sass'], function (){
//   gulp.watch('app/scss/**/*.scss', ['sass']); 
//   // Обновляем браузер при любых изменениях в HTML или JS
//   gulp.watch('app/*.html', browserSync.reload); 
//   gulp.watch('app/js/**/*.js', browserSync.reload); 
// });


gulp.task('default', ['watch']);
