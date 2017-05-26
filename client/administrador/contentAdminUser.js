Template.contentAdminUsers.helpers({
	"usuarios":function(){
		return Meteor.users.find();
	}
});
Template.contentAdminUsers.onRendered(function(e){
	$("body").removeClass("cyan");
});
Template.contentAdminUsers.events({
	
});