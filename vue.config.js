//const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "./",
  assetsDir: "",
  outputDir: "dist",
  pwa: {
    name: "みちくさびゅあー",
    themeColor: "#2d3748",
    msTileColor: "#2d3748",
    appleMobileWebAppCapable: "no",
    appleMobileWebAppStatusBarStyle: "default",
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      exclude: [
        "CNAME",
        /chunk-vendors.*.css.map/,
        /about.*.css.map/,
        /app.*.css.map/
      ],
      runtimeCaching: [
        /*{
          urlPattern: /https:\/\/mo4koma\.iranika\.info\/.+[1-9]|[1-9][0-9]|1[0-9]{2}|2[0-5][0-9]|26[0-5].*\.jpg/,
          handler: 'cacheFirst',
          options:{
            cacheName: 'mo4koma-images-1-265',
            expiration: {
              maxAgeSeconds: 60 * 60 * 24 * 90
            },
            cacheableResponse: {
              statuses: [0,200]
            }
          }
        },//*/
        {
          urlPattern: /https:\/\/mo4koma\.iranika\.info\/.+(sp|top)\.jpg/,
          handler: 'cacheFirst',
          options:{
            cacheName: 'mo4koma-images-sp',
            expiration: {
              maxAgeSeconds: 60 * 60 * 24 * 1,
              purgeOnQuotaError: true
            },
            cacheableResponse: {
              statuses: [0,200]
            }
          }
        }/*
        {
          urlPattern: /https:\/\/mo4koma\.iranika\.info\/.+\.jpg/,
          handler: 'networkFirst',
          options:{
            cacheName: 'mo4koma-images-latest',
            expiration: {
              maxAgeSeconds: 60 * 60 * 24 * 90
            },
            cacheableResponse: {
              statuses: [0,200]
            }
          }
        }*/
      ]
    },
  }/*,
  configureWebpack: config =>{
    config.plugins.push(
      new GenerateSW({
        skipWaiting: true,
        clientsClaim: true
      })
    )
  }*/
};
