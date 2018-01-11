var ObjectID = require('mongodb').ObjectID;
var db = require('../db');

/* Добавление отзыва */
exports.add = function(feedback, cb){
	db.get().collection('feedbacks').insert(feedback, function(err, result){
		cb(err, result);
	})	
}
/* Получение данных всех отзывов из БД */
exports.all = function(cb){
	db.get().collection('feedbacks').find().toArray(function(err,result){
		cb(err,result);
	})
}
/* Обновление данных отзыва из БД */
exports.update = function(id, newData, cb){
	db.get().collection('feedbacks').updateOne(
	{ _id: ObjectID(id) }, newData,
	function(err, result){
		cb(err, result);
	}
	)
}
/* Удаление отзыва из БД */
exports.delete = function(id, cb){
	db.get().collection('feedbacks').deleteOne(
		{ _id: ObjectID(id)},
		function(err, result){
			cb(err, result);
		}
	)
}