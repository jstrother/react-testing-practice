const path = require('path');

const webpack = require('webpack');

const packageData = require('./package.json');

// const filename = [packageData.name, 'js'];

module.exports = {
	// entry: path.resolve(__dirname, packageData.devJS),
	entry: __dirname,
	output: {
		path: __dirname,
		filename: packageData.devJS
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	resolve: {
		extentions: ['', '.js', '.jsx']
	}
};