/**
 * Created by wungcq on 15/9/30.
 */

var webpack = require('webpack');

module.exports = {
  entry: {

    Selector:['./src/views/widget/selector/selector.jsx'],
    SelectorAPI: ['./src/views/widget/selector/api.jsx'],
    SelectorTest: ['./src/views/widget/selector/test.jsx']
  },
  output: {
    path: './dist/widget',
    filename: '[name].js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.jsx$/,
      loader: 'babel-loader!jsx-loader'
    }]
  },
  resolve: {
    //查找module的话从这里开始查找
    root: './public/react/', //绝对路径
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    extensions: ['', '.js', '.jsx','.json', '.scss'],
    //模块别名定义，方便后续直接引用别名，无须多写长长的地址
    //alias: {
    //  React: './public/js/lib/react.js'//
    //}
  },
  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    "jquery": "jQuery",
    "react" : "React"
  }
};
