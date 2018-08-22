let fs = require('fs');
let data = '';
let readSteam = fs.createReadStream("Readme.txt");
readSteam.setEncoding('utf-8');
readSteam.on('data',(txt) =>{
  data += txt;
});
readSteam.on('end',()=>{
  console.log(data);
});
readSteam.on('error',(err) =>{
  console.log(err.stack);
});
