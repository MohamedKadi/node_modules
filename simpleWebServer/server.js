const http = require('http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-type': 'text/html' });

    const readStream = fs.createReadStream('page1.html');
    readStream.pipe(res);
    return;
  }
  if (req.url === '/page2') {
    res.writeHead(200, { 'Content-type': 'text/html' });

    const readStream = fs.createReadStream('page2.html');
    readStream.pipe(res);
    return;
  }
  if (req.url === '/page3') {
    res.writeHead(200, { 'Content-type': 'text/html' });

    const readStream = fs.createReadStream('page3.html');
    readStream.pipe(res);
    return;
  }
  res.writeHead(404, { 'Content-type': 'text/html' });

  const readStream = fs.createReadStream('notFound.html');
  readStream.pipe(res);
  return;
});

server.listen(3000);
console.log('listening on 3000');
