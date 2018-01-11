define("navbar", ['jquery'], function($){
	/* Hover для верхнего меню без изменения логотипа */
	$('ul.top-menu').find('li').filter(':nth-child(n+2)').bind({
		mouseover: function() {
			$(this).css("background", "#a6ccf1");
			$(this).children(':first').css("color", "rgba(36, 36, 36, 1)");
        },
		mouseout: function() {
			$(this).css("background", "");
			$(this).children(':first').css("color", "");
		}
	});
})