import http from "http";

const Server= http.createServer((req,res)=>{

// routing
req.url //this is the main routing point this stores the /about and stuff in the page

if(req.url==='/'){
    res.end("<h1>Home</h1>");

}

else if (req.url==="/about"){
    res.end("<h1>About</h1>");
}

else{
    res.writeHead(404,"BAD",{"Content-Type": "text/html"});
    res.end("<h1>404 Page not found :/</h1>")
}

});
Server.listen(8000,()=>console.log("The server is running in http://localhost:8000"));