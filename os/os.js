const os = require('node:os');

console.log(os.uptime() / (60 * 60));
console.log('ram :' + os.totalmem() / (1024 * 1024 * 1024));
console.log(os.userInfo());
console.log(os.freemem() / (1024 * 1024 * 1024));
