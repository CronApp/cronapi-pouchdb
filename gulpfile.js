const gulp = require('gulp');
const concat = require('gulp-concat');
const ngAnnotate = require('gulp-ng-annotate');
const gulpwatch = require('gulp-watch');
const minify = require('gulp-minify');


var paths = {
    js: ['./src/**/*.js', '!./src/**/*test.js'],
    i18n: ['./src/i18n/**/*.json']
};

gulp.task('js', function () {
    gulp.src(paths.js)
        .pipe(ngAnnotate())
        .pipe(concat('pouchdb.cronapi.js'))
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            preserveComments: 'all',
            noSource: true
        }))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('i18n', function () {
    gulp.src(paths.i18n)
        .pipe(minify())
        .pipe(gulp.dest('./dist/i18n'))
});

gulp.task('default', function () {
    gulp.start(['js']);
    gulp.start(['i18n']);
});

gulp.task('start', function () {
    gulp.start(['default']);
    gulpwatch(paths.js, function () {
        gulp.start(['js']);
    });
    gulpwatch(paths.js, function () {
        gulp.start(['i18n']);
    });
});
