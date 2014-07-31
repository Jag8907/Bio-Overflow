window.StackClone.Collections.Comments = Backbone.Collection.extend({
	model: StackClone.Models.Comment,
	
	url: '/api/comments',
	
	initialize: function (models, options) {
		this.commentable = options.commentable;
	}
});

window.StackClone.Collections.comments = new StackClone.Collections.Comments();