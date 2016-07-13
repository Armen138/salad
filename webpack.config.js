var path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname,
        filename: './dist/js/salad.js'
    },
    module: {
        loaders: [
            { test: path.join(__dirname, 'src'),
              loader: 'babel-loader' }
        ]
    }
};
