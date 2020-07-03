const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin()  //压缩优化js文件
  ],
  mode: "production"
});
