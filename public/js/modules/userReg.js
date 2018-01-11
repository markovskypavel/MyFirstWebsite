define("userReg", ['jquery'], function($){
/* Пользователь для регистрации */
return 	function userReg(){			
			this.email = $('[name=emailReg]').val();
			this.login = $('[name=loginReg]').val();
			this.password = $('[name=passwordReg]').val();
		}
})