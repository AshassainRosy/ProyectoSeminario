CURSO = new  Mongo.Collection("Curso");
var chatSchema = new SimpleSchema({
	idCurso: {
		type:String
	},
	nombre: {
		type:String
	},
	descripcion: {
		type:String
	},
	fecha_inicio: {
		type:Date
	}
});
