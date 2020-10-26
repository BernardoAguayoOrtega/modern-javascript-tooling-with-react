const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

const cssRules = {
	test: /\.css$/,
	use: ['style-loader', 'css-loader'],
	exclude: /node_modules/
}

const babelRules = {
	test: /\.js$/,
	loader: 'babel-loader',
	exclude: /node_modules/,
	options: {
		presets: ['@babel/preset-env', '@babel/preset-react'],
		plugin: 'react-hot-loader'
	},
};

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.bundle.js',
	},
	module: {
		rules: [babelRules, cssRules],
	},
	plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
	})]
};
