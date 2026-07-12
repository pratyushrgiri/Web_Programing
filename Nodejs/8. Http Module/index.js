import http from 'http';

// this is how we create a server

const server = http.createServer((req,res)=>{
    // //we can response in the server in this way
    // // this is how we set header of th type of response that we are sending in the server
    // res.setHeader("Content-Type","text/html");

    // // to set the status code
    // res.statusCode=404;
    // res.statusMessage="BAD";

    // ------------------------------------------------------------------------------

    // to set all of them the shorthand is used like
    res.writeHead(202,"Good",{"content-type": "text/html"});


    

res.write('<h1>Helloworld!<h1>')
});

server.listen(8000,()=>console.log("server running in http://localhost:8000"));