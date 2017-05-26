Template.register.events({
	"click #cancelar":function(e){
		myForm.set('loginform');
	},
	"submit form":function(e){
		if(e.target.password.value==e.target.repassword.value){
			var user = {
				"username" : e.target.username.value,
				"email" : e.target.email.value,
				"password" : e.target.password.value,
				"profile" : {
					"name" : e.target.name.value,
					"last_name":e.target.last_name.value,
					"career":e.target.career.value
					}
			};
			Accounts.createUser(user, function(e){
				console.log(e);
				if(e == undefined) {
					Meteor.loginWithPassword(user.username,user.password);	
					FlowRouter.go("/index");
				}else{
					Materialize.toast('<span>'+e.message+'</span>', 4000);
				}
			});
		 	return false;
		}else{
			Materialize.toast('<span>Las Contraseñas no coinciden</span>', 4000);
		}
		return false;
	}
});