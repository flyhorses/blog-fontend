const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true ,
  // devServer: {
  //   proxy: {
  //     '/': {
  //       target: 'http://localhost:8081',
  //       changeOrigin: true,
  //       // eslint-disable-next-line no-unused-vars
  //       bypass: function (req, _res, _proxyOptions) {
  //         if (req.url.startsWith('/ws')) {
  //           return req.url;
  //         }
  //       }
  //     },
  //   }
  // }
})
