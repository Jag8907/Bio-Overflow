window.StackClone.Models.Comment = Backbone.Model.extend({
	urlRoot: '/api/comments',
	
	initialize: function (models, options) {
		this.commmentable = options.commentable;
	}
});