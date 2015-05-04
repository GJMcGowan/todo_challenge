var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.engine('.html', require('ejs').renderFile);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + './public'));

app.get('/', function(request, response){
  response.render('index.html');
});

app.get('/SpecRunner', function(request, response) {
  response.render('SpecRunner.html');
});

server.listen(4567, function(){
  console.log("Server listening on port 4567");
});

module.exports = server;