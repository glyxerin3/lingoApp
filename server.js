var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

var config = require('./config');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/app'));

var api = require('./server/routes/api')(app, express);
app.use('/api', api);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    next();
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
});

app.listen(config.port, function (err) {
    if(err) {
        console.log(err);

    } else {
        console.log("Listening on port 3000");
    }
});