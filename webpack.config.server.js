const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
});

const config = {

    devtool: "source-map",
    target: "electron-renderer",
    entry: [
        'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/app/renderer.tsx' // Your appʼs entry point
    ],

    node: {
        __dirname: false,
        __filename: false
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    plugins: [htmlPlugin],

    devServer: {
        host: 'localhost',
        port: 3000,

        historyApiFallback: true,
        // respond to 404s with index.html

        hot: true,
        // enable HMR on the server
    },
};


module.exports = (env, argv) => {
    return config;
};