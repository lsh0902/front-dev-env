module.exports = function myWebpackLoader(content) {
  console.log("22222222222222222============");
  return content.replace('alert', 'console.log');
}