myForm = new ReactiveVar();
myForm.set("loginform");
Template.loginpage.onRendered(function(){
	$('body').addClass("cyan");
});
Template.loginpage.helpers({
	myform : function(){
		return myForm.get();
	}
});