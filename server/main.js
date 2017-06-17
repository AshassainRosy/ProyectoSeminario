import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	Meteor.publishComposite("getMSN",function(idUs,idMe){
		return {
			find(){
				console.log(idUs);
				console.log(idMe);
				console.log(CHAT.find({$or:[{$and:[{idSource:idMe,idDestination:idUs}]},{$and:[{idSource:idUs,idDestination:idMe}]}]}).fetch())
				return CHAT.find(
					{$or:
						[
							{idSource:idMe,idDestination:idUs},
							{idSource:idUs,idDestination:idMe}
							]});
			},
			children:[
				{
					find(chat){
						return Meteor.users.find({_id:chat.idSource});
					}
					
				},
				{
					find(chat){
						return Meteor.users.find({_id:chat.idDestination});
						
					}
				}
			]
		}
	});
	Meteor.publishComposite("cursos_db",{
		find(){
			return CURSOS.find();
		},
	});
	Meteor.methods({
		"new_curso":function(obj){
			var id=CURSO.insert({date:obj.date,name:obj.nombre,description:obj.descripcion});
			return id;
		},
		"update_curso":function(id){
			CURSO.uptade({id,$set:{date:fecha,name:nombre,description:description}});
			return true;
		},
		"get_curso":function(){
			return CURSO.find();
		}
	});
});
