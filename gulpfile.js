const fileinclude = require('gulp-file-include');
var gulp = require('gulp');

gulp.task('fileinclude', function() {
    gulp.src(['index.html'])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('./'));
  });