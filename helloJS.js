const http = require("http");
const url = require('url');

http.createServer(function(req,res){
     
    var x = url.parse(req.url, true); //парсим ссылку 
    var message = x.query.message;    //ставим выборку на message
    
    if (x.pathname == '/echo' && message != null){res.end(message +' NB');}
    else {res.end('Error 404 page not found');};
     
}).listen(80);