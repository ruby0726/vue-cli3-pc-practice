const path = require('path')

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  outputDir: `dist-${process.env.BUILD_ENV}`,
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "vue3小demo",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  productionSourceMap: false,
  // eslint-disable-next-line no-unused-vars
  configureWebpack: {
    resolve: {
      extensions: [' ', '.js', '.json', '.vue', '.scss', '.css'],
        alias: {
        'vue-esm': 'vue/dist/vue.esm.js',
        '@': path.resolve('src')
      }
    },
  },
  // devServer: {
  //   disableHostCheck: true,
  //   proxy: {
  //     "/api": {
  //       target: "http://114.116.92.10:8765",
  //       secure: false,
  //       changeOrigin: true,
  //       // pathRewrite: { '^/web-api': '' },
  //        router
  //     },
  //     "/cdn": {
  //       target: "http://114.115.176.14:10005",
  //       pathRewrite: { "^/cdn": "" },
  //       changeOrigin: true
  //     }
  //   }
  // },
  lintOnSave: true
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require("postcss-pxtorem")({
  //           rootValue: 16, // 换算的基数
  //           propList: ["*"]
  //         })
  //       ]
  //     }
  //   }
  // }
}
