define("userAuth", ['jquery'], function($){
/* Пользователь */
return 	function userAuth(){				
			this.login = $('[name=loginAuth]').val();
			this.password = $('[name=passwordAuth]').val();
		}
})