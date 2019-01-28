const gulp = require('gulp');

const sass = require('gulp-sass');
const rename = require("gulp-rename");
const del = require('del');
const html = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');


// const minifyCSS = require('gulp-minify-css');
// const imagemin = require('gulp-imagemin');

// gulp.task('css:minify', function() {
//     return gulp.src('./src/css/*.css')
//     .pipe(minifyCSS({keepBreaks: true}))
//     .pipe(gulp.dest('./dist/css/'));
// });
//
// gulp.task('css', gulp.series('css:minify'));

// gulp.task('img:compress', function() {
//     return gulp.src('./src/images/*')
//     .pipe(imagemin({optimizationLevel: 7}))
//     .pipe(gulp.dest('./dist/images/'));
// });
//
// gulp.task('img', gulp.series('img:compress'));
//---------------------------------------------------------------------
//task de teste
// gulp.task('exec', gulp.series(function() {
//     return console.log("Executando gulp!!!");
// }));
//---------------------------------------------------------------------

// minifica o html
gulp.task('html:minify', function() {
    return gulp.src('./src/*.html')
    .pipe(html({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
});

// html
gulp.task('html', gulp.series('html:minify'));

// minifica o sass
gulp.task('sass:minify', function() {
    return gulp.src('./src/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream());
});

// sass
gulp.task('sass', gulp.series('sass:minify'));

//minifica o js
gulp.task('js:minify', function() {
    return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

//js
gulp.task('js', gulp.series('js:minify'));

// clean
gulp.task('clean:dist', function() {
    return del(['./dist/**/*', './dist/*.html', './dist/*.css', './dist/*.js']);
    //'!dist/mobile/deploy.json'
});

// limpa a pasta dist
gulp.task('clean', gulp.series('clean:dist'));

// configurando o browserSync para auto-atualizar a pagina principal
gulp.task('bs', gulp.series('html', 'sass', function() {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });

    gulp.watch('./src/*.html', gulp.parallel('html'));
    gulp.watch('./src/scss/*.scss', gulp.parallel('sass'));
}));

// Default task
gulp.task('default', gulp.series('bs'));
