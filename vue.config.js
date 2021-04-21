module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "./",
  assetsDir: "",
  outputDir: "dist",
  pwa: {
    name: 'みちくさびゅあー',
    themeColor: '',
    themeColor: '#2d3748',
    msTileColor: '#2d3748',
    appleMobileWebAppCapable: 'no',
    appleMobileWebAppStatusBarStyle: 'default',
    workboxPluginMode: 'GenerateSW',
    workboxOptions:{
    exclude: ["CNAME", /chunk-vendors.*.css.map/ , /about.*.css.map/ , /app.*.css.map/, /bg.*.jpg/]
    }
  }
};
