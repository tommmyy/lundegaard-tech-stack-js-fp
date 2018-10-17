const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = (/* env, argv */) => ({
	entry: './src/index.js',
	output: {
		path: outputPath,
		filename: 'main.bundle.js',
	},
	// devtool: argv.mode === 'development' ? 'source-map' : false,
	plugins: [new CleanWebpackPlugin([outputPath]), new HtmlWebpackPlugin()],
	module: {
		rules: [{ test: /\.js$/, use: 'babel-loader' }],
	},
});
