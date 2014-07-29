window.StackClone.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "postsIndex",
		"posts/new": "postsNew",
		"post/:id": "postsShow"
	},
	
	initialize: function () {
		this.$rootEl = $('#main');
	},
	
	postsIndex: function () {
		StackClone.Collections.posts.fetch();
		var indexView = new StackClone.Views.PostsIndex({
			collection: StackClone.Collections.posts
		});
		this._swapView(indexView);
	},
	
	postsNew: function () {
		var newView = new StackClone.Views.PostsNew();
		this._swapView(newView);
	},
	
	postsShow: function (id){
		var model = StackClone.Collections.posts.getOrFetch(id);
		
		var showView = new StackClone.Views.PostsShow({
			model: model
		});
		this._swapView(showView);
	},
	
	_swapView: function (view) {
		this.currentView && this.currentView.remove();
		this.currentView = view;
		this.$rootEl.html(view.render().$el);
	}
});