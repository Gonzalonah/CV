const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    output: {
        filename: '[contenthash].bundle.js',
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env']
                    },
                },
            }
        ],
    },
    plugins:[
     new HtmlWebpackPlugin({
         title: 'Gonzalo Nahuel Rolón',
         template:'src/index.html'
          })
    ]
};