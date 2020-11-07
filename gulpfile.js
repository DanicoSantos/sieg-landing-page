const { watch, src, dest } = require('gulp');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');


/**
 * 1. Minificar todos os arquivos
 * 2. Guardar os arquivos minificados numa pasta 'css/minified'
 * 3. Pegar os arquivos minificados e concatenar em um arquivo 'style.bundle.min.css'
 * 4. Esse arquivo tem que estar na raiz da pasta 'css'
 */

 // CSS glob
const srcCssGlob = 'src/assets/css/components/*.css';

// BUndle path
const bundlePath = 'dist/assets/css'

// Bundle name
const bunldleName = 'style.bundle.min.css';


function cssMinify(done) {
    src(srcCssGlob)
    .pipe(cleanCss())
    .pipe(concat(bunldleName))
    .pipe(cleanCss())
    .pipe(dest(bundlePath))
    .on('end', done);
}

exports.default = function () {
    watch(srcCssGlob, cssMinify)
}