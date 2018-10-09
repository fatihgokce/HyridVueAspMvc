var path = require('path')
var webpack = require('webpack')
var IS_DEBUG = process.env.NODE_ENV !== 'production';
module.exports = {
    entry: { main: './src/main.js', detay: './src/detay.js', first:'./src/first.js' },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    }
}
module.exports.plugins = [
    // fix legacy jQuery plugins which depend on globals
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
    })];
module.exports.devtool = IS_DEBUG ? 'cheap-source-map' : '#source-map';
if (IS_DEBUG) {
    module.exports.devServer = {
        proxy: {'*': 'http://localhost:50287'},       
        headers: { 'Access-Control-Allow-Origin': '*' }
     
    };
}
if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }));
    
} else {
    module.exports.devtool = '#source-map'
}