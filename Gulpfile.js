const { task, src, dest, series } = require('gulp');
const clean = require('gulp-clean');
const zip = require('gulp-zip');

const COMPRESSED_FILE = 'LFC.zip';

task('clean', function () {
  return src('dist/*').pipe(clean());
});

task('zip', function () {
  return src('src/*').pipe(zip(COMPRESSED_FILE)).pipe(dest('dist'));
});

task('release', series('clean', 'zip'));
