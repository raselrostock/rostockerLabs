const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const WebpackMd5Hash = require('webpack-md5-hash');  

const TARGET_ENV = process.env.npm_lifecycle_event === 'build' ? 'production' : 'development';

if(TARGET_ENV === 'production') {
	console.log('Serving for production ...');
}

const VENDOR_LIBS = [
	'core-js', 'highlight.js', 'react-lowlight', 'react-markdown', 'react-typist', 'react', 'react-dom', 'react-router-dom', 'prop-types'
];

module.exports = {
	entry: {
		bundle: './src/index.js',
		vendor: VENDOR_LIBS
	},
	optimization: {
		        runtimeChunk: {
		            name: "manifest"
		        },
		        splitChunks: {
		            cacheGroups: {
		                vendor: {
		                    test: /[\\/]node_modules[\\/]/,
		                    name: "vendors",
		                    priority: -20,
		                    chunks: "all"
		                }
		            }
		        }
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'scripts/[name]-[chunkhash:8].js'
	},
	module: {
		rules: [
			{
				test: /\.js?/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react', 'stage-1', 'stage-2']
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [{
						loader: 'css-loader'
					}, {
						loader: 'postcss-loader'
					}, {
						loader:'sass-loader'
					}],
				}),
			},
			{
				test: /\.css$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'postcss-loader'
				}, {
					loader:'sass-loader'
				}],
			},
			{
				test: /\.(jpg|png|gif|svg|pdf|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name]-[hash:8].[ext]'
						},
					},
				]
			},
		]
	},
	stats: {
		chunks: true,
		modules: false
	},
	plugins: [
		new htmlWebpackPlugin({
			template: 'src/index.html',
			favicon: 'src/favicon.ico',
			inject: true
		}),
		new webpack.HashedModuleIdsPlugin(),
		new ExtractTextPlugin('style/style-[hash:8].css'),
		new OptimizeCSSAssetsPlugin({
			assetNameRegExp: /\.optimize\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: { discardComments: {removeAll: true} },
			canPrint: true
		}),
		new webpack.DefinePlugin({
			DEV: false,
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new ImageminPlugin({
        	disable: false,
        	optipng: {
          		optimizationLevel: 3
        	},
        	gifsicle: {
            	optimizationLevel: 1
        	},
        	jpegtran: {
            	progressive: false
        	},
        	svgo: {
        	},
        	pngquant: null,
	    	plugins: []
	    }),
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new WebpackMd5Hash()
	],
	devtool: 'source-map',
};