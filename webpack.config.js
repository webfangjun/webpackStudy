var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
        entry:"./app/entry.js",
        output: {
        path: path.resolve(__dirname, './build'),
        filename:"bundle.js"
        },
        module: {
            rules: [
                { 
                    test: /\.(js|jsx)$/, 
                    exclude: /node_modules/, 
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react']
                    } 
                },
                { 
                    test: /.css$/, 
                    loader:"style-loader!css-loader",
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            //
            new HtmlWebpackPlugin({
                template:'./app/index.html',
            }),

            new webpack.HotModuleReplacementPlugin(),

            new OpenBrowserPlugin({
                url: 'http://localhost:7000'
            }), 
        ],
        devServer: {
            contentBase: "./app", //本地服务器所加载的页面所在的目录 index.html要和内存中的bundle.js在同一路径下
            port:7000,
            //colors: true, //终端中输出结果为彩色
            historyApiFallback: true, //不跳转
            inline: true, //实时刷新
            hot: true  // 使用热加载插件 HotModuleReplacementPlugin
        }
   };