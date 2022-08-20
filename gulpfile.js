const { src, dest, watch, series, parallel } = require('gulp');

const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
var replace = require('gulp-replace');

// File paths
const files = { 
    scssPath: 'src/scss/**/*.scss',
    jsPath: 'src/js/**/*.js'
};

function scssTask() {   
    return src(files.scssPath, { sourcemaps: true })
      .pipe(sass())
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(dest("dist", { sourcemaps: "." })); // put final CSS in dist folder
}

function jsTask(){
    return src([
        files.jsPath
        ])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('dist')
    );
}

var cbString = new Date().getTime();
function cacheBustTask(){
    return src(['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));
}

function watchTask(){
    watch([files.scssPath, files.jsPath], 
        parallel(scssTask, jsTask));    
}

exports.default = series(
    parallel(scssTask, jsTask), 
    cacheBustTask,
    watchTask
);