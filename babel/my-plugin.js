module.exports = function myPlugin() {
  return {
    visitor : {
      Identifier(path) {
        console.log(path.node)
        if(path.node.kind === 'const') {
          path.node.kind = 'var';
        }
      }
    },
  };
}