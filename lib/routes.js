
FlowRouter.route("/",{
	action : function(params,queryParams) {
		BlazeLayout.render("loginpage",{});
	}
});
FlowRouter.route("/index",{
	action : function(params,queryParams) {
		BlazeLayout.render("index",{});
	}
});