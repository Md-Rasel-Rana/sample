var http = require('http');
var fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
    if(req.url== "/"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("This is Home Page");
        res.end();
    }
   else if(req.url== "/about"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("This is about Page");
        res.end();
    }
   else if(req.url == "/contact"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("This is contact Page");
        res.end();
    }

    else if(req.url == "/file-write"){

        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.writeFile('demo.txt', 'hello world', function (err) {
            if (err){
                res.write(err);
            }
          });
          res.end();
    }

}).listen(3000,()=>{
    console.log("server running success,,,,,,");
}); 