define("validation", ['jquery'], function($){
return {
	/* Проверка авторизации регулярным выражением (Exception перезагружает сраницу) */
	checkAuth: function userAuthValidation(user){
			try{
			if(user.login === "" || user.password === "") throw new SyntaxError("Do not leave empty fields!");
			var regexLogin = /^[A-Za-z0-9_-]{3,15}$/;
			var regexPassword = /^[A-Za-z0-9_-]{6,18}$/;
			if(!regexLogin.test(user.login) || !regexPassword.test(user.password)) throw new SyntaxError("Invalid field filling!");
			return true;
			}
			catch(ex){
				alert(ex);
				return false;
			}
		},
	/* Проверка регистрации регулярным выражением */
	checkReg: function userRegValidation(user){
			try{
			if(user.email === "" || user.login === "" || user.password === "") throw new SyntaxError("Do not leave empty fields!");
			var regexLogin = /^[A-Za-z0-9_-]{3,15}$/;
			var regexPassword = /^[A-Za-z0-9_-]{6,18}$/;
			var regexEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
			if(!regexLogin.test(user.login) || !regexPassword.test(user.password) || !regexEmail.test(user.email)) throw new SyntaxError("Invalid field filling!");
			return true;
			}
			catch(ex){
				alert(ex);
				return false;
			}
		},
	/* Проверка отзыва регулярным выражением */
	checkSurvey: function surveyValidation(survey){
			try{
			if(survey.name === "" || survey.comment === "") throw new SyntaxError("Do not leave empty fields!");
			var regexName = /^[A-Z][a-z]{1,9}$/;
			if(!regexName.test(survey.name)) throw new SyntaxError("Invalid field filling!");
			return true;
			}
			catch(ex){
				alert(ex);
				return false;
			}
		}
}
})