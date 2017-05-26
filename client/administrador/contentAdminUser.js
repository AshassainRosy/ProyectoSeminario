Template.contentAdminUsers.helpers({
	"usuarios":function(){
		return Meteor.users.find();
	}
});
Template.contentAdminUsers.onRendered(function(e){
	$("body").removeClass("cyan");
});
Template.contentAdminUsers.events({
	"click .btn-floating":function(e){
		var row=$(this).parents('tr');
		var _id=row.prevObject[0]._id;
		
	}
});