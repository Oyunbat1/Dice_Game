const path = require("path");

const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
];

module.exports = {
  entry: "./DICE-GAME/SUMM/scripts/APP.JS",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "DICE-GAME"),
  },
  devServer: {
    static: path.join(__dirname, "DICE-GAME"),
    hot: true,
    port: 3000,
    host: "0.0.0.0", // 192.168.1.187
  },
  mode: "development",

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: postCSSPlugins,
              },
            },
          },
        ],
      },
    ],
  },
};
