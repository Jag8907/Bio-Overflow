window.StackClone.Views.PostsShow = Backbone.View.extend({
	template: JST['posts/show'],
	
	initialize: function (options) {
		this.listenTo(this.model, 'sync', this.render);
	},
	
	render: function () {
		var renderedContent = this.template({
			todo: this.model,
			// comments: this.todoComments
		});
		
		this.$el.html(renderedContent);
		return this;
	}
});