const childProcess = require('child_process');
let a = childProcess.execSync('echo hello')
console.log(a)


