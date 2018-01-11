define("authreg", ['jquery', 'userAuth', 'userReg', 'validation'], function($, userAuth, userReg, Validation){
	/* Если юзер есть в localStorage(в отличие от sessionStorage, где хранение до закрытия браузера, хранится всегда), то выводим блок приветствия */
	if(JSON.parse(localStorage.getItem("user"))){
		$('.authorized').css("display", "");
		$('.auth').css("display", "none");
		$('.reg').css("display", "none");
		$('.authorized h2').append("Welcome, " + JSON.parse(localStorage.getItem("user")).login + "!");
	}else{
		$('.authorized').css("display", "none");
		$('.auth').css("display", "");
		$('.reg').css("display", "");		
	}
	
/* 	Авторизация с проверкой полей + добавление пользователя в localStorage */
	$('[name=authorize]').bind("click", function(){
		var user = new userAuth();
		if(Validation.checkAuth(user)){		
			$.ajax({
				type:"POST",
				url:"/authorization",
				data:JSON.stringify(user),
				contentType: "application/json",
				success: function() {
						localStorage.setItem("user", JSON.stringify(user));
						$('.authorized h2').html("Welcome, " + user.login + "!");
						$('.authorized').css("display", "");
						$('.auth').css("display", "none");
						$('.reg').css("display", "none");
				},
				error: function(){
					alert("Error! User wasn't authorized.");
				}
			});		
		}
	});
	/* Регистрация */
	$('[name=registrate]').bind("click", function(){
		var user = new userReg();
		if(Validation.checkReg(user)){		
			$.ajax({
				type:"POST",
				url:"/registration",
				data:JSON.stringify(user),
				contentType: "application/json",
				success: function() {
					alert("Registration was successfully completed!");
				},
				error: function(){
					alert("Error! User wasn't registred. Maybe, user already exists...");
				}
			});		
		}
	});
	/* Выход из аккаунта */
	$('[name=logoff]').bind("click", function(){
		localStorage.clear();
		$('.authorized').css("display", "none");
		$('.auth').css("display", "");
		$('.reg').css("display", "");	
	});
})