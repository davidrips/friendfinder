var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');
// var fs = require('fs');
// var obj = JSON.parse(fs.readFileSync('../data/friends.js','utf8'))
var app = express(); 
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static(path.join(__dirname, 'app')));

app.get('/survey', function(req,res){

	res.sendFile(path.join(__dirname + "/app/public/survey.html"))
});

app.use(function(req,res){

	res.sendFile(path.join(__dirname+"/app/public/home.html"))
});

// app.get('/api/friends', function(req,res){

// 	res.send(obj)

// })






app.listen(PORT, function(){
	console.log("App Listening on PORT"+PORT)
})