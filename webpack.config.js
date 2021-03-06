const path = require('path');

module.exports = {
	context: path.resolve(__dirname),
	mode: 'production',
	entry: {
		index: './src/index.ts'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
};
