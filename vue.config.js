module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "./",
  assetsDir: "",
  outputDir: "dist",
  pwa: {
    workboxPluginMode: "GenerateSW",
    workboxOptions:{
      exclude: "CNAME"
    }
  }
};
