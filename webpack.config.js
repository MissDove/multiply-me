const path = require('path');

module.exports = {
    entry:
       './src/index.js',
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ],
        }],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    devServer: {
        https: true
    },
    mode: 'development'
};