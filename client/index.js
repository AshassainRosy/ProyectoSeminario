Template.index.onRendered(function(e){
	$("body").removeClass("cyan");
});
Template.index.helpers({
	username:function(){
		return Accounts.users().username;
	},
	email:function(){
		return Accounts.user().emails[0].address;
	}
});