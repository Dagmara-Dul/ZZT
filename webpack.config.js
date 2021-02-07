// const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/app.js',
  output: {
    filename: 'main.js'
  },
  devServer: {
    hot: true,
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader:'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true,
            esModule: true
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  }
  // ,
  // plugins: [
  //   new HtmlWebpackPartialsPlugin({
  //     path: path.join(__dirname, './src/view1.html'),
  //     location:'head',
  //     template_filename: ['index.html']
  //   })  
  // ]
};
