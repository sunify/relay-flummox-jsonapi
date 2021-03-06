var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [path.join(__dirname, 'src', 'index.js')],

  output: {
    path: path.join(__dirname, 'public', 'frontend'),
    filename: 'index.js',
    publicPath: '/frontend/'
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /\/node_modules\//, loaders: [
        'babel'
      ]}
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    proxy: {
      '/api*': 'http://localhost:3000'
    }
  }
};
