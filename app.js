// var response = require('./functions.js');
// console.log(response.update());
// console.log(response.obj);
// response.obj.deleteData();

// read file
let fs = require('fs');
let readMe = fs.readFileSync('Readme.txt','utf-8');
console.log(readMe);
// write file
fs.writeFileSync('HelloNodeJs.txt',readMe);
// create floder
