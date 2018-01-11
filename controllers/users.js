var Users = require('../models/users');

/* Регистрация пользователя */
exports.registration = function(req, res){
	var user = {
		email: req.body.email,
		login: req.body.login,
		password: req.body.password
	};
	Users.findByLogin(user.login, function(err, result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		if(result){
			return res.sendStatus(500);
		}else{
			Users.registration(user, function(errreg, resultreg){
				if(errreg){
					console.log(errreg);
					return res.sendStatus(500);
				}
				res.sendStatus(200);
			})
		}
	})
}
/* Авторизация */
exports.authorization = function(req, res){
	var user = {
		login: req.body.login,
		password: req.body.password
	};
	Users.authorization(user.login, user.password, function(err,result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		if(result){
			res.send(result);
		} else{
			res.sendStatus(500);
		}
	})
}
/* Получение данных всех пользователей */
exports.all = function(req, res){
	Users.all(function(err,result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(result);
	})
}
/* Обновление информации пользователя */
exports.update = function(req, res){
	Users.update(req.params.id, {email: req.body.email, login: req.body.login, password: req.body.password}, function(err, result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.sendStatus(200);
	})
}
/* Удаление пользователя */
exports.delete = function(req, res){
	Users.delete(req.params.id, function(err,result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.sendStatus(200);
	})
}