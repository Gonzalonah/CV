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
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                type:'asset',
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
               /* use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192 //对图片的大小做限制，8kb
                    }*/
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
//instalar css y compress img, ver lo de svg