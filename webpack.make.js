const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const makeConfig = (env, filename) =>
    ({
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: filename,
            library: 'moduleLibrary',
            libraryTarget: 'var'
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000
        },
        plugins: [
            new EsmWebpackPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(env)
                }
            })
            // new BundleAnalyzerPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: [
                                '@babel/plugin-proposal-class-properties',
                                ['@babel/plugin-proposal-decorators', {'decoratorsBeforeExport': true}],
                                ['@babel/plugin-proposal-pipeline-operator', {'proposal': 'minimal'}]
                            ]
                        }
                    }
                }
            ]
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    extractComments: false
                })
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg']
        },
        mode: env
    })

module.exports = makeConfig
