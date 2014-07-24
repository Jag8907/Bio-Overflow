window.StackClone.Collections.Posts = Backbone.Collection.extend({
	url: '/api/posts',
	model: StackClone.Models.Post,
	
	getOrFetch: function (id) {
		var model;
		var posts = this;
		
		if (model = this.get(id)) {
			return model;
		} else {
			model = new StackClone.Models.Post({id: id});
			model.fetch({
				success: function () { posts.add(model) }
			});
			return model;
		}
	}
});

window.StackClone.Collections.posts = new StackClone.Collections.Posts();