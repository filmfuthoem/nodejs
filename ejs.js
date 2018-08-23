let express = require('express');
let body = require('body-parser');
let cookie = require('cookie-parser');
let app = express();
app.set('view engine','ejs');

// app.get('/',(req,res)=>{
//   res.render('about');
// });
app.use(body());
app.get('/',(req,res)=>{
  let data = {name: "Nadtakan",age: 27, job: "Programmer"};
  res.render('about',{user : data});
});

app.get('/contact',(req,res)=>{
  let data = {user: "Nadtakan",age: 27, job: "Programmer"};
  res.render('contact');
});

app.get('/db',(req,res)=>{
  let data = {user: "Nadtakan",age: 27, job: "Programmer"};
  res.render('db');
});

app.get('/showForm',(req,res) => {
  res.render("showForm");
});

app.post('/formsubmit',(req,res) => {
   data = {
     fname : req.body.fname,
     lname : req.body.lname
   };
   console.log(data);
   // res.end(JSON.stringify(data));
   res.end("<h1>"+data.fname+"</h1>");
});

app.get('/createCookie',(req,res)=>{
  res.cookie('mycookie','Nadtakan');
  res.end("createCookie");
});

app.get('/deleteCookie',(req,res)=>{
  res.clearCookie('mycookie');
  res.end("Delete cookie completed!");
});

app.listen(8081);
