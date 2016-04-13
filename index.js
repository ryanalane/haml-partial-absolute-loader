module.exports = function(source) {
  var path = require('path');

  result = source.replace(/\+include\s*['"](.*?)['"]/g, function(partialPath){ return path.resolve(partialPath); });

  return "module.exports = " + JSON.stringify(result) + ";";
}
