const path = require('path');

const babelRules = {
	test: /\.js$/,
	loader: 'babel-loader',
	exclude: /node_modules/,
	options: {
		presets: ['@babel/preset-env', '@babel/preset-react'],
	},
};

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.bundle.js',
	},
	module: {
		rules: [babelRules],
	},
};
