// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const hostname = 'localhost';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   console.log(`Request for ${req.url} ${req.method}`);
  
//   if (req.method === 'GET') {
//     let filePath = '.' + req.url;
//     if (filePath === './') {
//       filePath = './index.html';
//     }
//     const extname = path.extname(filePath);
//     let contentType = 'text/html';
//     switch (extname) {
//       case '.js':
//         contentType = 'text/javascript';
//         break;
//       case '.css':
//         contentType = 'text/css';
//         break;
//       case '.json':
//         contentType = 'application/json';
//         break;
//       case '.png':
//         contentType = 'image/png';
//         break;
//       case '.jpg':
//         contentType = 'image/jpg';
//         break;
//     }

//     fs.readFile(filePath, (err, content) => {
//       if (err) {
//         res.writeHead(404);
//         res.end(`Sorry, ${req.url} not found`);
//       } else {
//         res.writeHead(200, { 'Content-Type': contentType });
//         res.end(content, 'utf-8');
//       }
//     });
//   }
// });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
