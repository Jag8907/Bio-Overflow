window.StackClone.Models.Answer = Backbone.ModelsComment.extend({
	urlRoot: function () {
		return this.post.url() + '/answers';
	},
	
	initialize: function (models, options) {
		this.post = options.post;
	}
});