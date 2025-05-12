const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  res.end('Shohan');
})

server.listen(4006, () => {
  console.log('Server running at http://localhost:4006/');
})