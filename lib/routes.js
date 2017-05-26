
FlowRouter.route("/",{
	action : function(params,queryParams) {
		BlazeLayout.render("loginpage",{});
	}
});
FlowRouter.route("/index",{
	action : function(params,queryParams) {
		BlazeLayout.render("index",{contenido:"contentInicial"});
	}
});
FlowRouter.route("/admin_user",{
	action : function(params,queryParams) {
		BlazeLayout.render("index",{contenido:"contentAdminUsers"});
	}
});
FlowRouter.route("/admin_user/:_id",{
	action : function(params,queryParams) {
		console.log("user id:"+params._id);
	}
});
FlowRouter.route("/docente_curso",{
	action : function(params,queryParams) {
		BlazeLayout.render("index",{contenido:"contentDocenteCursos"});
	}
});

