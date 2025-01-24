const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    const serveFile = (filePath, contentType) => {
        console.log("Attempting to serve:", filePath);

        fs.readFile(filePath, (err, content) => {
            if (err) {
                console.error("Error reading file:", err);
                if (err.code === 'ENOENT') {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('404 Not Found');
                } else {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end(`Server Error: ${err.message}`);
                }
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
    } else if (url === '/index' && method === 'GET') {
        serveFile(path.join(__dirname, 'pages', 'index.html'), 'text/html');
    } else {
        serveFile(path.join(__dirname, 'pages', '404.html'), 'text/html');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});