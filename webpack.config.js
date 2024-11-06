var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('source/build/')
    .setPublicPath('/build')
    .copyFiles({
        from: './source/assets/img'
    })
    .addEntry('app', './source/assets/js/app.js')
    .addStyleEntry('index', './source/assets/css/index.scss')
    .addStyleEntry('post', './source/assets/css/post.scss')
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(false)
    .enableSassLoader();

module.exports = Encore.getWebpackConfig();
