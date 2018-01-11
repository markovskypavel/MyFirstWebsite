define("sendSurvey", ['jquery', 'survey', 'validation', 'template'], function($, Survey, Validation, Mustache){
	/* Получение всех отзывов */
	$.ajax({
		type:"GET",
		url:"/feedbacks",
		dataType:"json",
		success: function(data) {
			for(var i=0; i<data.length; i++)
				Mustache.addComment(data[i]);
		},
		error: function(){
			alert("Error! Can't get words from DB.");
		}
	});
/* 	При успешном добавлении отзыва, комментарий добавляется в блок с помощью шаблона */
	$('[name=send]').bind("click", function(){
		var survey = new Survey();
		if(Validation.checkSurvey(survey)){		
			$.ajax({
				type:"POST",
				url:"/addfeedback",
				data:JSON.stringify(survey),
				contentType: "application/json",
				success: function() {
					alert("Your feedback was successfully sent.");
					Mustache.addComment(survey);
					$('[name=reset]').click();
				},
				error: function(){
					alert("Error! Feedback wasn't sent.");
				}
			});		
		}
	});
})