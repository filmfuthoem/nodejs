let express = require('express');
let app = express();
app.get("/home",(req,res)=>{
  res.send("<h1>Hello!, How are you?</h1>");
});
// app.get("/user/profile/:id",(req,res)=>{
//   res.send("<h1>Profile : "+req.params.id+"</h1>")
// });
// Middleware
app.use('/user/profile/:name',(req,res,next) =>{
  console.log("Request:"+new Date(), req.method, req.url);
});

app.listen(8081);
