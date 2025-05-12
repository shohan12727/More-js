// const http = require ('http');

// const server =  http.createServer( (req, res) =>  {
//   console.log(req);  
// });

// server.listen(7854);

const http = require('http');  

const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Hello World');   
});

server.listen(7565, () => {
    console.log('Server running at http://localhost:8957/');
});