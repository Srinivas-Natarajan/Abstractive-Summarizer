var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var async = require('async');
var path = require('path')


app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
    sendFile(__dirname + "/views/index.html");
});

app.listen(3000, function() {                           //Set port to listen to
    console.log('Server running at http://127.0.0.1:3000/');
});