const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require('path');

module.exports = {
	entry:'./js/index.js',
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename: 'bundle/bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:{
					loader:"babel-loader",
					options:{
						presets:["env","react"]
					}
				}
			}
		]
	},
	plugins: [
            new HtmlWebpackPlugin({
				template: "./templates/template_index.html",
			}),
			new CleanWebpackPlugin(["dist"])
        ]
}