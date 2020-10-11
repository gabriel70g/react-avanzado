const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpackPwaManifestPlugin({
      name: 'Petgram - Tu app de fotos de mascotas',
      name: 'Petgram',
      description: 'Con Petgran puedes encontrar fotos de animales domesticos adorables y muy amados',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
          {
            src: path.resolve('src/assets/icon.png'),
            size: [96,128,192,256,184,512]
          }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://res.cloudinary.com | image.unsplash.com'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://petgram-server-gabys-nomreb8hx.vercel.app'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
