var express = require('express');
var bodyParser = require('body-parser');



var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.listen(process.env.EXPRESS_PORT || 8888);