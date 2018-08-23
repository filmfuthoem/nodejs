let express = require('express');
let app = express();
app.set('view engine','ejs');

app.get('/',(req,res)=>{
  res.render('about');
});

app.get('/:name',(req,res)=>{
  let data = {user: "Nadtakan",age: 27, job: "Programmer"};
  res.render('about',{person : req.params.name, user : data});
});
app.listen(8081);
