const http = require('http');
const app = http.createServer((Request, Response) => {
    Response.writeHead(200, { 'content-type': 'text/plain' });
    Response.end('Hello world');
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);

console.log('Hello Node.js and Express');
