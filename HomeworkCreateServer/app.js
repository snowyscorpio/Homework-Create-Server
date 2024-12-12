const http = require('http'); // Import Node.js core module

const fs = require('fs'); // import file module

const path = require('path');

const dirPath = path.join(__dirname, '/templates');


const file2Send = fs.readFileSync(`${dirPath}/page.html`)


const server = http.createServer(function (req, res) {


  console.log(req);

  res.writeHead(200, 'OK', { 'Content-Type': 'text/html', 'X-Powered-By': 'Node.js' });


  res.end(file2Send);

});

server.listen(3000);

console.log('Node.js web server at port 3000 is running..');