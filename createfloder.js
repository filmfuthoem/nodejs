let fs = require('fs');
let readMe = fs.readFileSync('Readme.txt','utf-8');
fs.mkdir('Project',() => {
  fs.writeFileSync('./Project/Readme.txt',readMe);
});
