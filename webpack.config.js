const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "production",
  entry: {
    global_component: "./global-component.js"
  },
  output: {
    path: `${__dirname}`,
    filename: "[name]_bundled.js"
  },
  resolve: {
    extensions: ["*", ".js", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
