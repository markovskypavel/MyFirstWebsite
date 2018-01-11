var ObjectID = require('mongodb').ObjectID;
var db = require('../db');

/* Регистрация пользователя */
exports.registration = function(user, cb){
	db.get().collection('users').insert(user, function(err, result){
		cb(err, result);
	})	
}
/* Поиск совпадающего логина */
exports.findByLogin = function(username, cb){
	db.get().collection('users').findOne({ login: username } , function(err, result){
		cb(err, result);
	})
}
/* Авторизация */
exports.authorization = function(username, pass, cb){
	db.get().collection('users').findOne({ login: username, password: pass } , function(err, result){
		cb(err, result);
	})
}
/* Получение данных всех пользователей из БД */
exports.all = function(cb){
	db.get().collection('users').find().toArray(function(err,result){
		cb(err,result);
	})
}
/* Обновление данных пользователя из БД */
exports.update = function(id, newData, cb){
	db.get().collection('users').updateOne(
	{ _id: ObjectID(id) }, newData,
	function(err, result){
		cb(err, result);
	}
	)
}
/* Удаление пользователя из БД */
exports.delete = function(id, cb){
	db.get().collection('users').deleteOne(
		{ _id: ObjectID(id)},
		function(err, result){
			cb(err, result);
		}
	)
}