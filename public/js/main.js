require.config({
	baseUrl: "../js",
	paths: {
		"jquery": "libs/jquery",
		"userAuth": "modules/userAuth",
		"userReg": "modules/userReg",
		"validation": "modules/validation",
		"slider": "modules/slider",
		"navbar": "modules/navbar",
		"articles": "modules/articles",
		"authreg": "modules/authreg"
	}
/* 	shim:{
		'oldModule':{
			deps: [],
			exports: 'modules/oldModule'
		}
	} */
})

require(['navbar', 'slider', 'articles', 'authreg'], function(){

})

/* Понятие модуль можно сформулировать как фрагмент кода,
инкапсулированный в обособленный блок, который может быть загружен и выполнен самостоятельно. */