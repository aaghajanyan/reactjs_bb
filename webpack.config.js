const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let envSettings = require('./src/envSettings.json');

const common = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /build/],
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s(a|c)ss$/i,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|ico)(\?\S*)?$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: '/images/',
                    publicPath: '/src/assets/'
                }
            },
            {
                test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'url-loader?limit=10000'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('./public/index.html')
        })
    ]
};

const productionConfig = {
    mode: 'production',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            uglifyOptions: {
                compress: {},
                mangle: true,
            },
          }),
        ],
    }
};

const developmentConfig = {
    mode: 'development',
    devServer: {
        contentBase: ('./'),
        stats: 'errors-warnings',
        overlay: {
            errors: true,
            warnings: true
        },
        port: envSettings.port
    },
    watch: true,
    devtool: 'inline-source-map'
};

module.exports = function () {
    if (process.env.NODE_ENV === 'production') {
        return merge([
            common,
            productionConfig
        ]);
    }
    if (process.env.NODE_ENV === 'development') {
        return merge([
            common,
            developmentConfig
        ]);
    }
};