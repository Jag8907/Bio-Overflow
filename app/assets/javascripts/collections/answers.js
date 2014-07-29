window.StackClone.Collections.Answers = Backbone.Collection.extend({
	model: StackClone.Models.Answer,
	
	url: function () {
		return this.post.url() + '/answers';
	},
	
	initialize: function (models, options) {
		this.post = options.post;
	}
});