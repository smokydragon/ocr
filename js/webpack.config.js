var path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/app/App.ts'),
        settings: path.resolve(__dirname, 'src/settings/App.ts'),
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js',
        library: ['OCA', 'Ocr'],
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    tsConfigFile: 'tsconfig.app.json',
                }
            },
            {
                test: /\.hbs$/,
                loader: "handlebars-loader?runtime=handlebars/runtime"
            },
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.app.json',
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    externals: [
        {
            'handlebars/runtime': {
                root: 'Handlebars',
                amd: 'handlebars/runtime',
                commonjs2: 'handlebars/runtime',
                commonjs: 'handlebars/runtime'
            }
        }
    ],
};
