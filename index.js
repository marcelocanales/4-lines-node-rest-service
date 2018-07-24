var http = require('http');
var app = require('express')();
http.createServer(app).listen(3900);
app.get('/hello',(req,res) => { res.status(200).send('Hello from node.');});