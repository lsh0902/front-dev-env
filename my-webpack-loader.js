module.exports = function myWebpackLoader(content) {
  console.log("SDfj");
  return content.replace('console.log','alert');
}