/**
 * Created by miguelcp on 10/01/17.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps'),
    cssnano = require('gulp-cssnano');

var config = {
    scssDir : './assets/scss', //Ruta Origen
    cssDir : './assets/css'    //Ruta Destino
};

gulp.task('style', function(){
    gulp.src(config.scssDir + '/*.scss') // Busqueda de todos los archivos que terminen en .scss en la ruta scssDir
    .pipe(sourcemaps.init())             // Inicializa el paquete sourcemaps para que registre la informacion cada vez que guardamos un archivo de sass.
    .pipe(sass())
    .on('error', sass.logError)          // Muestra errores al ejecutar la tarea
    .pipe(cssnano())                     // Minimiza el archivo antes de ser escrito
    .pipe(sourcemaps.write('maps'))      // Identificador de Ruta en archivos
    .pipe(gulp.dest(config.cssDir))
})


gulp.task('watch', function(){
    watch(config.scssDir + '/**/*.scss', function(){
        gulp.start('style');
    });
});