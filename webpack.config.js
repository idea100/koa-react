const path = require('path');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, './static'),
        filename: 'js/main.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader'),
                options: {
                    compact: true,
                },
            },
        ]
    }
};