require.config({
	baseUrl: "../js",
	paths: {
		"jquery": "libs/jquery",
		"pictures": "modules/pictures",
		"navbar": "modules/navbar"
	}
})

require(['navbar', 'pictures'], function(){

})