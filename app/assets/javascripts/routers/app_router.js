window.StackClone.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "postsIndex",
		"posts/new": "postsNew",
		"posts/:id": "postsShow"
		
	},
	
	postsIndex: function () {
		var indexView = new StackClone.Views.PostsIndex({
			collection: StackClone.Collections.posts
		});
		StackClone.Collections.posts.fetch();
		$('body').append(indexView.render().$el);
	},
	
	postsNew: function () {
		var newView = new StackClone.Views.PostsNew();
		$('body').append(newView.render().$el);
	},
	
	postsShow: function (id){
		var model = StackClone.Collections.posts.getOrFetch(id);
		
		var showView = new StackCLone.Views.PostsShow({
			model: model
		});
		$('body').html(showView.render().$el);
	}
});