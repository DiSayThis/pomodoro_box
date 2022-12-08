const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;

function setupDevtool() {
  if (IS_DEV) return 'eval';
  if (IS_PROD) return false;
}

function getEntery() {
  if (IS_PROD) return [path.resolve(__dirname, '../src/client/index.jsx')];
  return [
    path.resolve(__dirname, '../src/client/index.jsx'),
    `webpack-hot-middleware/client?path=http://localhost:${Number(PORT) + 1}/static/__webpack_hmr`
  ];
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      assert: false
    }
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: getEntery(),
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /.[tj]sx?$/,
        use: ['ts-loader'],
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map', //setupDevtool(),
  plugins: IS_DEV ? [new HotModuleReplacementPlugin(), new CleanWebpackPlugin(), new ReactRefreshWebpackPlugin()] : []
};
