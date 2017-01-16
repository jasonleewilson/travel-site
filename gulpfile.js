var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log('Horay you created a gulp task');
});

gulp.task('html', function() {
  console.log('Imagine something useful being done to HTML');
});

gulp.task('styles', function() {
  console.log('Imagine Sass or PostCss tasks running here');
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});
