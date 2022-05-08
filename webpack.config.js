const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = { 
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "[name][ext]",
        clean: true
    },  
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(svg|jpg|ico)$/i,
                type: "asset/resource"
            },
        ]
    },  
    plugins: [
        new HtmlWebpackPlugin({
            title: "Rest",
            filename: "index.html",
            template: "./src/template.html"
        })
    ]   
};