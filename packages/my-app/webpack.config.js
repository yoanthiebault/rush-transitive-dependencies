const path = require('path');

module.exports = {
    // for IE 11: entry: ["babel-polyfill", "isomorphic-fetch", "react", "react-dom", "./src/index.tsx"],
    output: {
        filename: "bundle.js",
        publicPath: '/',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {loader: 'awesome-typescript-loader'}
                ]
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]",
                    }
                },
            },
        ],
    },


    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    devServer: {
        port: 8089,
        historyApiFallback: {
            index: '/index.html'
        },
        contentBase: path.join(__dirname, "dist"),
        publicPath: "/",
        index: "index.html",
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
    }
}
