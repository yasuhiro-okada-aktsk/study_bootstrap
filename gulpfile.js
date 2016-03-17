const gulp = require('gulp');
const webserver = require('gulp-webserver');
const sass = require('gulp-sass');

gulp.task('serv', function () {
  gulp.src('web')
    .pipe(webserver({
      host: 'localhost',
      port: 8000,
      livereload: true,
      open: true
    }));
});

gulp.task('style', function () {
  gulp.src('web/style/app.scss')
    //.pipe(sourcemaps.init())
    .pipe(sass({
      //outputStyle: 'compressed',
      includePaths: [
        'web/style',
        'node_modules'
      ]
    }).on('error', sass.logError))
    //.pipe(autoprefixer({browsers: ['last 1 version']}))
    //.pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('web/style'));
});

gulp.task('default', ['style', 'serv'], function () {
  gulp.watch(['web/style/**/*.scss'], ['style']);
});
