const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/js/app.js')
    .enableSassLoader()
    .enablePostCssLoader()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    // Adicione esta linha para habilitar o uso de um único chunk de runtime
    .enableSingleRuntimeChunk()
;

module.exports = Encore.getWebpackConfig();
