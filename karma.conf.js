var webpack = require('webpack')
var postcss = require('postcss')

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: false, //just run once by default
    frameworks: [ 'mocha' ], //use the mocha test framework
    files: [
      'tests.webpack.js' //just load this file
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack' ] //preprocess with webpack
    },
    reporters: ['progress', 'mocha'],
    webpack: { //kind of a copy of your webpack config
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'stage-0', 'react'],
              plugins: ['add-module-exports']
            }
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
          }
        ]
      },
      postcss: () => {
        return [
          require('postcss-sorting'),
          require('postcss-cssnext'),
          require('postcss-extend')
        ]
      },
      resolve: {
        extensions: ['', '.js']
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  })
}
