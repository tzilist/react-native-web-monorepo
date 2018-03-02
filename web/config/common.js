const ExtractCSSPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BabelLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      plugins: [
        ['module:fast-async', { spec: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
      presets: [
        ['@babel/env', {
          targets: {
            browsers: ['last 2 versions'],
          },
          modules: false,
          loose: true,
        }],
        'react-app',
      ],
    },
  },
};

const POSTCSS_LOADER_OPTIONS = {
  plugins() {
    return [
      autoprefixer({
        browsers: ['last 2 versions'],
      }),
    ];
  },
};

const CSS_LOADER_OPTIONS = {
  modules: true,
  localIdentName: '[hash:base64:4]',
  minimize: true,
  camelCase: 'only',
  importLoaders: 1,
};

const CSSLoaderRule = {
  test: /\.css$/,
  use: ExtractCSSPlugin.extract({
    fallback: 'style-loader',
    use: [
      { loader: 'css-loader', options: CSS_LOADER_OPTIONS },
      { loader: 'postcss-loader', options: POSTCSS_LOADER_OPTIONS },
    ],
  }),
};

const FileLoaderRule = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',
    publicPath: '/assets/images',
    outputPath: '/',
    emitFile: false,
  },
};

const UrlLoaderRule = {
  test: /\.(webm|mp4|ogv)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      publicPath: '/assets/videos',
      outputPath: '/',
      emitFile: false,
    },
  },
};

const FontLoaderRule = {
  test: /\.(eot|ttf|woff|woff2)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      publicPath: '/assets/fonts',
      outputPath: '/',
      emitFile: false,
    },
  },
};

const EntryPoints = {
  app: './index.js',
};

const Output = {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, '..', 'build'),
};

const ResolvePoints = {
  alias: {
    'react-native': 'react-native-web',
  },
};

const CleanPlugin = new CleanWebpackPlugin(['dist']);

const HtmlPlugin = new HtmlWebpackPlugin({
  template: './config/template.html',
});

module.exports = {
  EntryPoints,
  ResolvePoints,
  Output,
  BabelLoader,
  CSSLoaderRule,
  FileLoaderRule,
  UrlLoaderRule,
  FontLoaderRule,
  CleanPlugin,
  HtmlPlugin,
};
