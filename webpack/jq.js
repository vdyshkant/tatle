/* jshint node: true */

module.exports = function(){
  return {
    module: {
        rules: [{ // yarn add expose-loader
            test: /jquery\.js$/, loader: 'expose-loader?jQuery!expose-loader?$'
        }]
    }
  };
};
