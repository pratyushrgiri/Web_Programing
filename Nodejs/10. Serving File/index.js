import http from "http";
import fs from "fs";
import { error } from "console";

const Server= http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,"GOOD",{"content-type":'text/html'});
        fs.readFile("./10. Serving File/public/home.html",(error,data)=>{
            if(error){
                throw error;
            }
            res.end(data);
        });


    }else if(req.url==="/about"){
        res.writeHead(200,"GOOD",{"content-type":'text/html'});
        fs.readFile("./10. Serving File/public/about.html",(error,data)=>{
            if(error){
                throw error;
            }
            res.end(data);
        });
    }
    else{
        res.writeHead(404,"BAD",{"content-type":'text/html'});
        res.end("<h1>404 Not found :/</h1>");
    }
});
Server.listen(8000,()=>console.log("Server is running in http://localhost:8000"));