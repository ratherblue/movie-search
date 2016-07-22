import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

export default {
  entry: {
    js: [path.join(__dirname, 'src', 'jsx', 'views', 'index.jsx')],
    vendor: ['react', 'react-dom'] // separate vendor files for caching
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass', 'postcss']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  postcss: function () {
    return [autoprefixer];
  }
};
