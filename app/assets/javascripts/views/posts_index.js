window.StackClone.Views.PostsIndex = Backbone.View.extend({
	template: JST['posts/index'],
	
	events: {
		"click button#refresh": "refresh"
	},
	
	initialize: function (options) {
		this.listenTo(
			this.collection,
			'sync add',
			this.render
		);
	},
	
	refresh: function () {
		this.collection.fetch();
	},
	
	render: function () {
		var renderedContent = this.template({
			posts: this.collection
		});
		this.$el.html(renderedContent);
		return this;
	}
});