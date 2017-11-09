var webpack = require('webpack');
//生成入口页面的插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
//封装好的一个拼接路径的方法,将相对路径转为绝对路径
//var helpers = require('./helpers');
module.exports = {
	//入口文件
	entry: {
		//运行Angular时所需的一些标准js,
		'polyfills': './src/polyfills.ts',
		//文件里面引入了一些第三方的依赖,比如Angular、Lodash、WeUI...
		'vendor': './src/vendor.ts',
		'app': './src/main.ts'
	},
	//出口文件
	output: {
		//helpers.root('dist')
		path: __dirname + '/dist',
		filename: '[name].js'
	},
	module: {
		//告诉webpack每一类文件需要使用什么加载器来处理
		rules: [{
			//匹配ts后缀的文件
			test: /\.ts$/,
			//awesome-typescript-loader一个用于把TypeScript代码转译成ES5的加载器，它会由tsconfig.json文件提供指导
			//angular2-template-loader用于加载Angular组件的模板和样式
			//loaders: ['awesome-typescript-loader', 'angular2-template-loader']
			//ts-loader或者['awesome-typescript-loader', 'angular2-template-loader']均可
			loader: 'ts-loader'
		},{
			test: /\.css$/,
			loader: ['style-loader','css-loader']
		}]
	},
	//配置插件
	plugins: [
		//压缩js代码
		new webpack.optimize.UglifyJsPlugin(),
		//Workaround for angular/angular#11580
		new webpack.ContextReplacementPlugin(
			//The (\\|\/) piece accounts for path separators in *nix and Windows
			/angular(\\|\/)core(\\|\/)@angular/,
			//可以通过helpers方法来寻找src路径，或者直接用绝对路径来制定上下二选一种写法
			__dirname + '/src',
			//location of your src
			//helpers.root('./src'), 
			//a map of your routes
			{}
		),
		//提取公共文件，再编译的时候就可以忽略，提高打包时间，非必需
		new webpack.optimize.CommonsChunkPlugin({
			//多个html共用一个js文件，提取公共代码
			name: ['app', 'vendor', 'polyfills']
		}),
		//自动生成index.html
		new HtmlWebpackPlugin({
			//自动向目标index.html文件注入script和link标签
			template: './src/index.html',
			hash: true
		}),
		//热替换,非必需
		new webpack.HotModuleReplacementPlugin(),
	],
	//解析模块路径时的配置
	resolve: {
		//制定模块的后缀，在引入模块时就会自动补全
		extensions: ['.js', '.ts']
	},
	//配置webpack-dev-server
	devServer: {
		//本地服务器所加载的页面所在的目录
		contentBase: "./dist",
		//不跳转
		historyApiFallback: true,
		//设置默认监听端口，如果省略，默认为”8080“
		//port: 8080,
		inline: true //实时刷新
	}
};