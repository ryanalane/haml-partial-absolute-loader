module.exports = function(source) {
  var path = require('path');

  var context = this.context;
  result = source.replace(/\+include\s*['"](.*?)['"]/g, function(match, partialPath){
    // Turn path into absolute path
    return match.replace(partialPath, path.resolve(context, partialPath));
  });

  return result;
}
