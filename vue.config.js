const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = defineConfig({
  transpileDependencies: true,
  // 公共路径(必须有的)
  publicPath: "./",
  // 输出文件目录
  outputDir: "dist",
  // 静态资源存放的文件夹(相对于ouputDir)
  assetsDir: "assets",
  productionSourceMap: true, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin 引入的样式可以直接在组件里使用
        // 7.x版本的param是data
        // 8.x版本的param是prependData
        // 9.x版本的param是additionalData
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.3.30:8092/', // 代理跳转的地址
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        secure: false // 接受 运行在 https 上的服务
      }
    }
  },
  chainWebpack: (config) => {
    // 这是为了剔除没有使用但被打包进去的模块
    // 这块写法不一定对，没有测试
    // config.plugin('ignore')
    //   .use(new webpack.IgnorePlugin({
    //     resourceRegExp: /^\.\/locale$/,
    //     contextRegExp: /moment$/,
    //   }))

    config.plugin('context')
      .use(webpack.ContextReplacementPlugin,
        [/moment[/\\]locale$/, /zh-cn/])

    config.plugin('html')
      .tap(args => {
        args[0].title= 'vue移动端开源项目'
        return args
      })

    config.plugin('webpack-bundle-analyzer')
      .use(BundleAnalyzerPlugin)

    // 分割第三方组件库
    config.optimization.splitChunks = {
      maxInitialRequests: Infinity,
      minSize: 300 * 1024,
      chunks: 'all',
      cacheGroups: {
        antVendor: {
          test: /[\\/]node_modules[\\/]/,
          name (module) {
            // get the name.
            // node_modules/packageName/sub/path
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            return `npm.${packageName.replace('@', '')}`
          }
        },
      }
    }
  }
})
