const url = require("url");
const file = require('fs');
const http = require('http');
const server = http.createServer((req,res)=>{
      
    const urlObj = url.parse(req.url,true);
    const filename = "."+urlObj.pathname;
  file.readFile(filename,(err,data)=>{
      if(err){
              res.writeHead(404,{'Content-Type':'text/html'});
             
             return  res.end(`<h1 style="color: blue;">404 ERROR</h1>`);
      }else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
      }
  })
})
server.listen(3000,(error)=>{
    if(!error){
        console.log("success");
    }else{
        console.log(error);
    }
})