window.StackClone.Views.PostsShow = Backbone.View.extend({
	template: JST['posts/show'],
	
	events: {
		'submit form#answer': 'submitAnswer',
		'submit form#comment': 'submitComment',
		'submit form#answerComment': 'submitAnswerComment'
	},
	
	initialize: function (options) {
		this.listenTo(this.model, 'sync add remove', this.render);
	 },
	 
  	submitComment: function (event) {
  		event.preventDefault();
  		var params = $(event.currentTarget).serializeJSON()['comment'];
  		var newComment = new StackClone.Models.Comment(params, {commentable: this.model});
  		if newComment.save()
  		this.model.comments().add(newComment)
  		this.render()
  	},
	 
	// how do I pull the answer id from the page so i can connect the comment to it?
 	submitAnswerComment: function (event) {
		var commentAnswer;
 		event.preventDefault();
 		var params = $(event.currentTarget).serializeJSON()['comment'];
		this.model.answers().each(function(answer){
			if (answer.id == params['commentable_id']){
				commentAnswer = answer;
			}
		})
 		var newComment = new StackClone.Models.Comment(params, {commentable: commentAnswer});
 		newComment.save()
 		commentAnswer.comments().add(newComment)
 		this.render()
 	},
	
	submitAnswer: function (event) {
		event.preventDefault();
		var params = $(event.currentTarget).serializeJSON()['answer'];
		var newAnswer = new StackClone.Models.Answer(params, {post: this.model});
		newAnswer.save()
		this.model.answers().add(newAnswer)
		this.render()
	},
	
	render: function () {
		var renderedContent = this.template({
			post: this.model,
			answers: this.model.answers(),
			comments: this.model.comments()
		});
		this.$el.html(renderedContent);
		
		// // building view objects inside the render
		// this.model.comments().each(function (comment) {
		// 	var commentsShowView = new StackClone.Views.CommentsShow({
		// 		model: comment
		// 	});
		// 	this.$(".comments").append(commentsShowView.render().$el);
		// });
		//
		// var commentNewView = new StackClone.Views.CommentsNew({
		// 	commentable: this.model
		// })
		// this.$(".comment-new").html(commentNewView.render().$el);
		
		return this;
	}
});