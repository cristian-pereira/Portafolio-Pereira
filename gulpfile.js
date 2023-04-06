const {src, dest, watch, parallel} = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');

const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

const jsmin = require('gulp-jsmin');


function css(done) {
    
    src("src/sass/**/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('assets/css'))
    done();
}
function js(done) {
    
    src("src/js/**/*.js")
        .pipe(plumber())
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('assets/js'))
    done();
}

function dev(done) {
    
    watch("src/sass/**/*.scss", css);
    watch("src/js/**/*.js", js);

    done();
}

exports.dev = parallel(dev);