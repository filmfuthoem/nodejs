let fs = require('fs');
let data = 'Happy Birthday!';
let writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'utf8');
writerStream.end();
writerStream.on('finish', ()=> {
  console.log("done!");
});
