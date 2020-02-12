const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    devServer: {
      inline: true,
      port: 7777,
      contentBase: path.join(__dirname, 'public')
    },
    plugins: [
    ],
    module: {
      rules: [
        {
          test: [
            /\.js$/,
            /\.jsx$/
          ],
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            cacheDirectory: true,
            presets: ['es2015', 'react', 'stage-2']
          }
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: "[name]--[local]--[hash:base64:8]"
              }
            },
            "postcss-loader" // has separate config, see postcss.config.js nearby
          ],
        },
        {
          test: [
            /\.scss$/,
            /\.sass$/,
          ],
          use: [{
            loader: "style-loader" // creates style nodes from JS strings
          }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }]
        }
      ]
    },
    devtool: 'cheap-module-eval-source-map'
};
