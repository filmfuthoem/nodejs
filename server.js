let http = require('http');
let fs = require('fs');
let myuser = {
  "name" : "Nadtakan Jones",
  "age" : "28",
  "phone" : "5033870755"
}
http.createServer((req,res) => {
  // write html file
  if(req.url === "/home" || req.url === "/"){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    let myStream = fs.createReadStream(__dirname+"/"+"index.html","utf8");
    myStream.pipe(res);
  }
  else if(req.url === "/about"){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    let myStream = fs.createReadStream(__dirname+"/"+"about.html","utf8");
    myStream.pipe(res);
  }
  else {
    res.writeHead(404,{'Content-Type' : 'text/html'});
    let myStream = fs.createReadStream(__dirname+"/"+"404.html","utf8");
    myStream.pipe(res);
  }

  // json file
  // res.writeHead(200,{'Content-Type' : 'application/json'});
  // res.end(JSON.stringify(myuser));
}).listen(8081,'127.0.0.1');
