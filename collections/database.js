CURSO = new  Mongo.Collection("curso");
var cursoSchema = new SimpleSchema({
	date: {
		type:Date
	},
	name: {
		type:String
	},
	description:{
		type:String
	}
});
CONNECTCURSO = new Mongo.Collection("connectcurso");
CURSO.attachSchema(cursoSchema);
var connectcursoSchema = new SimpleSchema({
	idUs: {
		type:String
	},
	idCurso:{
		type:String
	},
	connectionDate: {
		type:Date
	},
	disconnectionDate: {
		type:Date
	},
	stade: {
		type:Boolean
	}
});
CONNECTCURSO.attachSchema(connectcursoSchema);