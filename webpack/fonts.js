/* jshint node: true */

module.exports = function(paths){
    return {
        module: {
            rules: [{   // yarn add url-loader
              test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader?limit=10000&mimetype=application/font-woff',
              options: {
                  name: 'fonts/[name].[ext]'
              }
            },
            {
              test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader?limit=10000&mimetype=application/font-woff',
              options: {
                  name: 'fonts/[name].[ext]'
              }
            },
            {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
              options: {
                  name: 'fonts/[name].[ext]'
              }
            },
            {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'file-loader',
              options: {
                  name: 'fonts/[name].[ext]'
              }
            }]
        }
    };
};
