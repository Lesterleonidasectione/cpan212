const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 8000; // Changed port to 8000

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  const serveFile = (filePath, contentType) => {
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error reading file');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  };

  if (url === '/' && method === 'GET') {
    serveFile(path.join(__dirname, 'pages', 'index.html'), 'text/html');
  } else if (url === '/books' && method === 'GET') {
    serveFile(path.join(__dirname, 'pages', 'books.html'), 'text/html');
  } else if (url === '/contact' && method === 'GET') {
    serveFile(path.join(__dirname, 'pages', 'contact.html'), 'text/html');
  } else { // Catch-all for 404
      serveFile(path.join(__dirname, 'pages', '404.html'), 'text/html');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});