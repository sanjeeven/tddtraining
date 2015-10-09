var http = require("http");

var server = http.createServer(function(req,res){
    res.end('Hello Sanjeev.');
});
server.listen(1234);
console.log("Hola!!!!");