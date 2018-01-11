define("template", ['mustache', 'jquery'], function(Mustache, $){
return {
	/* Добавление блока комментария через шаблон */
	addComment: function writeComment(survey){
		var template = "<div class='comments'><p>{{comment}}</p><cite>{{name}}</cite></div>";
        $('aside').append(Mustache.render(template, survey));
	}
}
})
