const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './public'),
		publicPath: '/public/',
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devServer: {
		historyApiFallback: {index: '/public/index.html'},
		noInfo: true
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map';
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	]);
}