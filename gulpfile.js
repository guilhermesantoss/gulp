const gulp = require('gulp');
const html = require('gulp-htmlmin');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const del = require('del');
const browserSync = require('browser-sync').create();

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
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream());
});

// sass
gulp.task('sass', gulp.series('sass:minify'));

// build project
// gulp.task('build', gulp.parallel('clean', 'html', 'sass'));

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

// clean
gulp.task('clean:dist', function() {
    return del(['./dist/**/*', './dist/*.html', './dist/*.css', './dist/*.js']);
    //'!dist/mobile/deploy.json'
});

// limpa a pasta dist
gulp.task('clean', gulp.series('clean:dist'));

// task igual do curso atualizada para o gulp@4.0.0
// Default task
gulp.task('default', gulp.series('bs'));

// gulp.task('teste', function() {
//     return console.log("TESTANDOOOO!!!!!!");
// });
//
// gulp.task('exec', function() {
//     return console.log("Executando gulp!!!");
// });

// lembrete
// gulp.task('exec', gulp.series(function() {
//     return console.log("Executando gulp!!!");
// }));

// default
// gulp.task('default', function(){
//     gulp.watch('./src/*.html', gulp.parallel('html:minify'));
// });

// exemplo de task personalizada para chamar varias outras tasks
// gulp.task('html', gulp.parallel('html:minify', 'exec', 'teste'));
