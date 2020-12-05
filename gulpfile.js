const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
exports.default = () => (
    gulp.src('/Users/boris/DMU/DMU/static/styles/aboutCompanyStyle.css')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('new'))
);
exports.default = () => (
    gulp.src('/Users/boris/DMU/DMU/static/styles/aboutCompanyStyle.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);