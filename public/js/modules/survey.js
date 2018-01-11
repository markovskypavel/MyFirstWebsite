define("survey", ['jquery'], function($){
		/* Отзыв */
return 	function Survey(){
			this.name = $('[name=name]').val(); /* Имя */
			this.sections = $("input[name=checkb]:checked").map(function(){ /* Любимые разделы */
				return $(this).val();
			}).get(); /* Получение коллекции в виде массива значений */
			this.mark = $("input[name=radiob]:checked").val(); /* Оценка сайту */
			this.use = $("select[name=use] option:selected").val(); /* Повторное использование */
			this.advice = $("select[name=advice] option:selected").val(); /* Совет друзьям */
			this.comment = $("[name=feed]").val(); /* Комментарий */
		}
})