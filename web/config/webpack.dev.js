const CommonOptions = require('./common.js');


module.exports = {
  entry: CommonOptions.EntryPoints,
  devtool: 'inline-source-map',
  output: CommonOptions.Output,
  devServer: {
    contentBase: '../build',
  },
  mode: 'development',
  resolve: CommonOptions.ResolvePoints,
  module: {
    rules: [
      CommonOptions.BabelLoader,
      CommonOptions.CSSLoaderRule,
      CommonOptions.FileLoaderRule,
      CommonOptions.UrlLoaderRule,
      CommonOptions.FontLoaderRule,
    ],
  },
  plugins: [
    CommonOptions.CleanPlugin,
    CommonOptions.HtmlPlugin,
  ],
};
