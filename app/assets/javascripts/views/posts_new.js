window.StackClone.Views.PostsNew = Backbone.View.extend({
	template: JST['posts/new'],
	
	events: {
		'submit form': 'submit'
	},
	
	submit: function (event) {
		event.preventDefault();
		var params = $(event.currentTarget).serializeJSON()['post'];
		var newPost = new StackClone.Models.Post(params);

		newPost.save({},{
			success: function () {
				StackClone.Collections.posts.add(newPost);
				Backbone.history.navigate('', {trigger: true});
			}
		});
	},
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		return this;
	}
});