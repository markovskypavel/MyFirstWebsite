require.config({
	baseUrl: "../js",
	paths: {
		"jquery": "libs/jquery",
		"pictures": "modules/pictures",
		"navbar": "modules/navbar",
		"scrolling": "modules/scrolling",
	}
})

require(['navbar', 'pictures', 'scrolling'], function(){

})