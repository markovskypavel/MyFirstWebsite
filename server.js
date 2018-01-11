var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

/* Controllers */
var usersController = require('./controllers/users');
var feedbacksController = require('./controllers/feedbacks');

var db = require('./db');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
/* Для подключения css и js */
app.use(express.static(path.join(__dirname, 'public')));

/* Routning */
app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, 'public', 'html', 'main.html'));
});
app.get('/about/', function(req,res){
	res.sendFile(path.join(__dirname, 'public', 'html', 'about.html'));
});
app.get('/gallery/', function(req,res){
	res.sendFile(path.join(__dirname, 'public', 'html', 'gallery.html'));
});
app.get('/news/', function(req,res){
	res.sendFile(path.join(__dirname, 'public', 'html', 'news.html'));
});
app.get('/feedback/', function(req,res){
	res.sendFile(path.join(__dirname, 'public', 'html', 'feedback.html'));
});

/* Articles */
app.get('/snowboarding', function(req,res){
	res.sendFile(path.join(__dirname, 'public', 'data', 'snowboarding.txt'));
});
app.get('/history', function(req,res){
	res.sendFile(path.join(__dirname, 'public', 'data', 'history.html'));
});
app.get('/nowadays', function(req,res){
	res.sendFile(path.join(__dirname, 'public', 'data', 'nowadays.html'));
});
app.get('/championships', function(req,res){
	res.sendFile(path.join(__dirname, 'public', 'data', 'championships.html'));
});
app.get('/olympiad', function(req,res){
	res.sendFile(path.join(__dirname, 'public', 'data', 'olympiad.html'));
});

/* Work with users */
app.post('/registration', usersController.registration);
app.post('/authorization', usersController.authorization);
app.get('/usersadmin', usersController.all);
app.put('/users/:id', usersController.update);
app.delete('/users/:id', usersController.delete);

/* Work with feedback */
app.post('/addfeedback', feedbacksController.add);
app.get('/feedbacks', feedbacksController.all);
app.put('/feedbacks/:id', feedbacksController.update);
app.delete('/feedbacks/:id', feedbacksController.delete);

/* Launch DB and server (console: mongod, node server.js) */
db.connect('mongodb://localhost:27017/mydb', function(err) {
	if (err) {
		return console.log(err);
	}
	app.listen(3012, function() {
		console.log('Server is launched on localhost:3012...');
	});
});
/* exports - помещаем элемент в глобальную область видимости, для использования извне */