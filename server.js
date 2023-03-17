const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
  const { url } = req;
  const filePath = path.join(publicDir, url === '/' ? 'index.html' : url);

  const extname = path.extname(filePath);
  let contentType = 'text/html';
  switch (extname) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // 404 Not Found
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        // 500 Internal Server Error
        res.writeHead(500);
        res.end(`500 Internal Server Error: ${err.code}`);
      }
    } else {
      // 200 OK
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});





