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
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  }
};
