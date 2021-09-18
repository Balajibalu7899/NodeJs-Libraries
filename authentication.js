const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
const users = [];
app.get('/users',(req,res)=>{
    res.send(users);
})
app.post('/users',async (req,res)=>{
   try{
    const salt = await bcrypt.genSalt();
    const hashedpassword = await bcrypt.hash(req.body.password,salt);
    console.log(salt);
    console.log(hashedpassword);
    users.push({user:req.params.username,password:hashedpassword});
    res.send(users);
   }catch(error){
       console.log(error)
   }
})
app.post('/users/login',async (req,res)=>{
    console.log(users);
    const user = users.find(user=>user.username = req.body.username);
    if(user!=null){
        try{
             bcrypt.compare(req.body.username,user.password);
             console.log("success");
        }catch(error){
            console.log(error)
        }
    }
   
 })

app.listen(3000,(err)=>{
    if(err) console.log(err)
    console.log("listening on port 3000");
})