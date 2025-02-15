const http = require('http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var readStream = fs.createReadStream('page.html');
    readStream.pipe(res);
  }
});

server.listen(3000);
console.log('listening on 3000');
