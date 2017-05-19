Template.inicio.onRendered(function(){
	$(".button-collapse").sideNav();
});
Template.inicio.helpers({
	username : function(){
		return Accounts.user().username;
	}

});

Template.inicio.events({
	"click #login" : function(e){
		var username=$("#username").val();
		var password=$("#password").val();
		Meteor.loginWithPassword(username,password,function(e){
			if (e) {
            	Materialize.toast('Error de credenciales!', 403);
            	return false;
        	}
        	else {
        		Materialize.toast('ingreso correcto ' + Meteor.user().username + ' !', 5000);
        		event.preventDefault();
            	console.log("cargado");
        	}
		});
	},
	'click .login-facebook': function(e) {
        e.preventDefault();

        Meteor.loginWithFacebook({requestPermissions: ['public_profile', 'email']}, function(err){
            if (err) {
                console.log('Handle errors here: ', err);
            }
        });
    }
});
//---------------------------------------------------------------------
Template.nav.onRendered(function(){
	
});
Template.nav.helpers({
	
});

Template.nav.events({
	"click #btn-register" : function(){
		console.log('me clickeaste');
	}
});


//---------------------------------------------------------------------
Template.register.onRendered(function(){
	$(".button-collapse").sideNav();
});
Template.register.helpers({
	
});

Template.register.events({
	"submit form" : function(e){
		if(e.target.password.value==e.target.confirm_password.value){
			var user = {
			"username":e.target.nick.value,
			"email":e.target.email.value,
			"password" : e.target.password.value,
			"profile":{
					"name":e.target.name.value,
					"last_name":e.target.last_name.value,
					"career":e.target.career.value,
				},
			};
			Accounts.createUser(user);
			Router.go('/');
		}else{
			alert("El password y confirm_password no coinciden");
		}
	}
		
});