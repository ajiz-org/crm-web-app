const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/server.js', // Replace with the path to your main server file
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /models$/, // A regex to match the files that should be included
      './src/models', // The directory where your models are located
      // additional configuration to define how to handle the context
    )
  ],
};
