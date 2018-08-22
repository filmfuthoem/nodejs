let http = require('http');
let fs = require('fs');
http.createServer((req,res) => {
  res.writeHead(200,{'Content-Type' : 'text/html'});
  let myStream = fs.createReadStream(__dirname+"/"+"index.html","utf8");
  myStream.pipe(res);
}).listen(8081,'127.0.0.1');
