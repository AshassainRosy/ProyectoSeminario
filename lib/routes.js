
FlowRouter.route("/",{
	action : function(params,queryParams) {
		BlazeLayout.render("inicio",{nav:"nav",index:"index"});
	}
});
FlowRouter.route("/register",{
	action : function(params,queryParams) {
		BlazeLayout.render("register",{});
	}
});
FlowRouter.route("/logueado",{
	action : function(params,queryParams) {
		console.log("registrado y cambia a login");
	}
});
FlowRouter.route("/soporte",{
	subscriptions: function(params,queryParams){
		this.register("getMSN",Meteor.subscribe("getMSN",queryParams.idus,queryParams.id));
		this.register("getConnections",Meteor.subscribe("getConnections"));	
	},
	action : function(params,queryParams) {
		BlazeLayout.render("mainpage",{banner:"banner_nav",content:"soporteTemplate"});
	}
});
