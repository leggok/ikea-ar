import path from 'path';

const __dirname = path.resolve('');

export default {
  resolve: {
    fallback: {
      "fs": false
    },
  },
  entry : "./js/ar-viewer.js",
  output : {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js"
  },
  output: {
    filename: '[name].js'
  }
}
