window.StackClone = {
	Models: {},
	Collections: {},
	Routers: {},
	Views: {},
	initialize: function () {
		new StackClone.Routers.AppRouter();
		Backbone.history.start();
	}
};

$(StackClone.initialize);