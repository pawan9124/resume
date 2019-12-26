const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

exports.default = {
  mode: process.env.NODE_ENV != "production" ? "development" : "production",
  entry: {
    app: "./src/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: process.env.PORT || 4000,
    publicPath: `http://localhost:${process.env.PORT || 4000}`,
    historyApiFallback: true,
    hotOnly: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Portfolio",
      template: "./public/index.html"
    }),
    new CleanWebpackPlugin(),
    process.env.ENV === "development" ? new BundleAnalyzerPlugin() : () => {},
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "./dist/[name].bundle.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
            presets: ["@babel/env", "@babel/react"]
        }
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg|pdf)$/,
        loader: "file-loader?images=[name].[ext]",
        options: {
          esModule: false
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          //Creates 'style' nodes from JS Strings
          process.env.NODE_ENV != "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          //Translate CSS into CommonJS
          "css-loader",
          "postcss-loader",
          //Compkie sass to css
          "sass-loader"
        ]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  optimization: {
    usedExports: true,
    runtimeChunk: "single",
    moduleIds: "hashed",
    splitChunks: {
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/]((react).*)[\\/]/,
          name: "react",
          chunks: "all",
          reuseExistingChunk: true
        },
        lodash: {
          test: /[\\/]node_modules[\\/]((lodash).*)[\\/]/,
          name: "lodash",
          chunks: "all",
          reuseExistingChunk: true
        },
        vendor: {
          test: /[\\/]node_modules[\\/]((?!(react|lodash).*))[\\/]/,
          name: "vendor",
          chunks: "all",
          reuseExistingChunk: true
        }
      }
    }
  },
  output: {
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  }
};
