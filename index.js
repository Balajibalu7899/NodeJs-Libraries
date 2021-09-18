require('dotenv').config();
const express = require('express');
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
const users = [
    
        {
            username:"balajigv",
            password: "Balajigv25"
        },{
            username:"channa",
            password: "channa"
        }
    
];
app.get('/users',authentication,(req,res)=>{
    res.send(users);
})
app.post('/users',async (req,res)=>{
  //authentication.js 
  const username = req.body.username;
  
   const user = { name:username };
   
  const accesstoken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
  console.log(accesstoken);
    res.send({accesstoken:accesstoken});
})
function authentication(req,res,next){
    const authHeader = req.headers['authorization'];
     const token =authHeader && authHeader.split(' ')[1];
     if(token == null) res.sendStatus(401);
      
     jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
         if(err) return res.sendStatus(403);
         req.user = user;
         console.log(user);
         next()
     }) 
}

app.listen(3000,(err)=>{
    if(err) console.log(err)
    console.log("listening on port 3000");
})