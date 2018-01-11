require.config({
	baseUrl: "../js",
	paths: {
		"jquery": "libs/jquery",
		"validation": "modules/validation",
		"survey": "modules/survey",
		"navbar": "modules/navbar",
		"template": "modules/template",
		"mustache": "libs/mustache",
		"sendSurvey": "modules/sendSurvey"		
	}
})

require(['navbar', 'sendSurvey'], function(){

})