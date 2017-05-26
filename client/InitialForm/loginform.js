Template.loginform.events({
	"click #registrate":function(e){
		myForm.set("register");
		return false;
	},
	"submit form":function(e){
		var username=e.target.username.value;
		var password=e.target.password.value;
		Meteor.loginWithPassword(username,password);	
		FlowRouter.go("/index");
		return  false;
	},
	"click .login-facebook": function(e) {
        e.preventDefault();
        Meteor.loginWithFacebook({requestPermissions: ['public_profile', 'email']}, function(err){
            if (err) {
                console.log('Handle errors here: ', err);
            }else{
            	FlowRouter.go("/index");
            	return false;
            }
        });
    }
});