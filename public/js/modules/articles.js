define("articles", ['jquery'], function($){
	/* Удаление выделения */
	function deleteClasses(){
		$('.aside-menu').find('li').removeClass("active");
		$('.aside-menu').find('a').removeClass("active");
	}
/* 	Загрузка данных из html/txt и помещение данных в блок + выделение */
	$('#snowboarding').on('click', function() {
		$.ajax({
				type:"GET",
				url:"/snowboarding",
				dataType:"text",
				success: function(data) {
					deleteClasses();
					$('#snowboarding').addClass("active");
					$('#snowboarding').parent().addClass("active");
					$('.article').html(data);
				},
				error: function(){
					alert("Возникла неожиданная ошибка получения данных!");
				}
			});	
	});
	$('#history').on('click', function() {
		$.ajax({
				type:"GET",
				url:"/history",
				dataType:"html",
				success: function(data) {
					deleteClasses();
					$('#history').addClass("active");
					$('#history').parent().addClass("active");
					$('.article').html(data);
				},
				error: function(){
					alert("Возникла неожиданная ошибка получения данных!");
				}
			});	
	});
	$('#nowadays').on('click', function() {
		$.ajax({
				type:"GET",
				url:"/nowadays",
				dataType:"html",
				success: function(data) {
					deleteClasses();
					$('#nowadays').addClass("active");
					$('#nowadays').parent().addClass("active");
					$('.article').html(data);
				},
				error: function(){
					alert("Возникла неожиданная ошибка получения данных!");
				}
			});	
	});
	$('#championships').on('click', function() {
		$.ajax({
				type:"GET",
				url:"/championships",
				dataType:"html",
				success: function(data) {
					deleteClasses();
					$('#championships').addClass("active");
					$('#championships').parent().addClass("active");
					$('.article').html(data);
				},
				error: function(){
					alert("Возникла неожиданная ошибка получения данных!");
				}
			});	
	});
	$('#olympiad').on('click', function() {
		$.ajax({
				type:"GET",
				url:"/olympiad",
				dataType:"html",
				success: function(data) {
					deleteClasses();
					$('#olympiad').addClass("active");
					$('#olympiad').parent().addClass("active");
					$('.article').html(data);
				},
				error: function(){
					alert("Возникла неожиданная ошибка получения данных!");
				}
			});	
	});
})

/* Парсинг xml
$.ajax({
		type:"GET",
		url:"/lab7/rus.xml",
		dataType:"xml",
		success: function(xml) {
		$(xml).find('Country').each(function(){
			$('[name=Town]').val($(this).find('city').text());
			$('[name=Center]').val($(this).find('center').text());
			$('[name=Population]').val($(this).find('population').text());
		});
		},
		error: function(){
			alert("Error");
		}
	}); */