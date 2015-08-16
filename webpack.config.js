'use strict';

var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path');

var srcPath = path.join(__dirname, 'src');

var config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },

    target: 'web',
    cache: true,
    entry: {
        module: ['webpack/hot/dev-server', path.join(srcPath, 'app.js')],
        common: [
            'react', 
            'react-router',
            'lodash',
            'redux',
            'react-redux',
            'isomorphic-fetch',
            'redux-thunk',
            'redux-logger'
        ]
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'src']
    },
    output: {
        path: './build',
        publicPath: '',
        filename: 'bundle.js',
        pathInfo: true
    },

    module: {
        loaders: [
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory'},
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|woff)$/, loader: 'url-loader?limit=100000' },
            { test: /\.(json)$/, loader: 'file-loader'}
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/index.html'
        }),
        new webpack.NoErrorsPlugin()
    ],

    debug: true,
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: './build',
        historyApiFallback: true
    }
};

module.exports = config;