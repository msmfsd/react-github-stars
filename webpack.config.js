module.exports = [
  {
    entry: ['babel-polyfill', 'whatwg-fetch', './index.js'],
    output: {
      path: './dist/',
      filename: 'bundle.js',
    },
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
    }
  },
  {
    entry: './examples/app.js',
    output: {
      path: './examples/',
      filename: 'bundle.js'
    },
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
    }
  }
];
