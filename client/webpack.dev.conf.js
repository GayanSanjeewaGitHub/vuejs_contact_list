const path = require('path');
const { VueLoaderPlugin } = require('vue-loader'); 

module.exports = {
  mode: 'development', 
  entry: './src/main.js', 

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm-bundler.js',  // Updated alias for Vue 3
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.vue', '.json'], 
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader', 
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],  
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(), 
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080,  
  },
};
