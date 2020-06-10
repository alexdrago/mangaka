var Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
    // the project directory where all compiled assets will be stored
    .setOutputPath('public/build/')

    // la ruta pública utilizada por el servidor web para acceder al directorio anterior
    .setPublicPath('/build')

    .createSharedEntry('layout', './assets/js/layout.js')
    .addEntry('UploadImg', './assets/js/UploadImg.js')
    .addEntry('login', './assets/js/login.js')

    .enableBuildNotifications()
    // arregla los módulos que esperan que jQuery sea global
    .autoProvidejQuery()

    .addPlugin(new CopyWebpackPlugin([
        // copies to {output}/static
        { from: './assets/static', to: 'static' }
    ]))

    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .cleanupOutputBeforeBuild()
    .enableVersioning(Encore.isProduction())
    .enableReactPreset()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();
