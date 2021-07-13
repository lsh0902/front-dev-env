class MyPlugin {
  apply(compiler) {
    // compiler.hooks.done.tap('My plugin', stats => {
    //   console.log('ddddddddddddddnnnbbbbbbbbb');
    // })

    compiler.plugin('emit', (compilation, callback) => {
      const source = compilation.assets['main.js'].source();
      console.log(source);
    })
  }
}
module.exports = MyPlugin;