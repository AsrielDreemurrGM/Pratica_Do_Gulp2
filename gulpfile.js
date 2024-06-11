const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function funcaoPadrao(callback) {
    setTimeout(function() {
        console.log("Executando via Gulp");
        callback();
    }, 2000);
}

function dizOi(callback) {
    console.log("Olá Gulp");
    dizTchau();
    callback();
}

function dizTchau() {
    console.log("tchau Gulp");
}

exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;