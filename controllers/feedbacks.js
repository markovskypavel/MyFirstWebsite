var Feedbacks = require('../models/feedbacks');

/* Получение данных всех отзывов */
exports.all = function(req, res){
	Feedbacks.all(function(err,result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(result);
	})
}
/* Добавление отзыва */
exports.add = function(req, res){
	var feedback = {
		name: req.body.name,
		sections: req.body.sections,
		mark: req.body.mark,
		use: req.body.use,
		advice: req.body.advice,
		comment: req.body.comment
	};
	Feedbacks.add(feedback, function(err,result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.sendStatus(200);
	})
}
/* Обновление данных отзыва */
exports.update = function(req, res){
	Feedbacks.update(req.params.id, { name: req.body.name, sections: req.body.sections, mark: req.body.mark, use: req.body.use, advice: req.body.advice, comment: req.body.comment }, function(err, result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.sendStatus(200);
	})
}
/* Удаление отзыва */
exports.delete = function(req, res){
	Feedbacks.delete(req.params.id, function(err, result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.sendStatus(200);
	})
}