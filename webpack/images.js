/* jshint node: true */

module.exports = function(){
  return {
      module: {
          rules: [
              { //- yarn add file-loader -D
                  test: /\.(png|jpe?g|gif|ico|svg)$/,
                  // loader: 'url-loader?limit=10000',
                  loader: 'file-loader?name=assets/[name].[hash].[ext]',
                  options: {
                      name: 'images/[name].[ext]'
                  }
              }
          ]
      }
  };
};
