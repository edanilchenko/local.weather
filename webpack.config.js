var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "main.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }
}