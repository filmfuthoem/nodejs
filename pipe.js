let fs = require('fs');
let reader = fs.createReadStream('Readme.txt');
let writer = fs.createWriteStream('file.txt');
reader.pipe(writer);
