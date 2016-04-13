module.exports = function(source) {
  result = source + "hiiiiiiii";
  return "module.exports = " + JSON.stringify(result) + ";";
}
