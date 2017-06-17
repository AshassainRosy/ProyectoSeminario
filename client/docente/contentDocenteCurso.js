Template.contentDocenteCursos.onRendered(function(e){
	$("body").removeClass("cyan");
});
contenedor_table = new ReactiveVar();
contenedor_table.set("contenedor_tabla_curso");
Template.contentDocenteCursos.events({
	"click #crear_curso":function(e){
		e.preventDefault();
		contenedor_table.set('formulario_crear_curso');
		console.log(CURSO.find());
	},
	"click #cancelar_curso":function(e){
		e.preventDefault();
		contenedor_table.set('contenedor_tabla_curso');
	},
	
});
Template.contentDocenteCursos.helpers({
	contenido_tabla:function(){
		return contenedor_table.get();
	},
});

Template.contenedor_tabla_curso.helpers({
	cursos_list: function(){
		return Meteor.call("get_curso");
	}
});
Template.formulario_crear_curso.events({
	"submit form":function(e){
		var nombre=e.target.name.value;
		var fecha=e.target.fecha.value;
		var descripcion=e.target.descripcion.value;
		var curso={
			"nombre":nombre,
			"date":fecha,
			"descripcion":descripcion,
		};
	
		Meteor.call("new_curso",curso,function(err,result){
				if(result){
					Materialize.toast('<span>El Curso fue creado exitosamente</span>', 4000);
				}else{
					Materialize.toast('<span>'+err.message+'</span>', 4000);

					contenedor_table.set("contenedor_tabla_curso");
				}
		});
		return false;
	}
});