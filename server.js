var express = require('express');
var bodyParser = require('body-parser');


var port = 80;
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.listen(port, function() {
	console.log('listening to ' + port)
})