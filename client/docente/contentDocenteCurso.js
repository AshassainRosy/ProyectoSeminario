Template.contentDocenteCursos.onRendered(function(e){
	$("body").removeClass("cyan");
});
Template.contentDocenteCursos.helpers({
	cursos:function(){
		return CURSO.find(); 
	}
	
});
