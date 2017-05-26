Template.aside.helpers({
	username:function(){
		return Accounts.user().username;
	},
	email:function(){
		return Accounts.user().emails[0].address;
	}
});
Template.aside.events({
	"click #logout":function(e){
		Meteor.logout();
		FlowRouter.go('/');
	},
	"click #alogout":function(e){
		Meteor.logout();
		FlowRouter.go('/');
	}
});