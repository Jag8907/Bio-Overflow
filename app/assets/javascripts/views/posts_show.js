window.StackClone.Views.PostsShow = Backbone.View.extend({
	template: JST['posts/show'],
	
	events: {
		'submit form': 'submit'
	},
	
	initialize: function (options) {
		this.listenTo(this.model, 'sync add', this.render);
	 },
	
	submit: function (event) {
		var that = this;
		event.preventDefault();
		var params = $(event.currentTarget).serializeJSON()['answer'];
		var newAnswer = new StackClone.Models.Answer(params);
		newAnswer.save({
			success: function () {
				debugger;
				that.model.answers().add(newAnswer)
			}
		})
	},
	
	render: function () {
		var renderedContent = this.template({
			post: this.model,
			answers: this.model.answers()
		});
		this.$el.html(renderedContent);
		return this;
	}
});