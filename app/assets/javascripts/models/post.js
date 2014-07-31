window.StackClone.Models.Post = Backbone.ModelsComment.extend({
	urlRoot: '/api/posts',
	
	answers: function () {
	    if(!this._answers) {
	      this._answers = new StackClone.Collections.Answers([], { post: this });
	    }
	    return this._answers;
	},
	
	parse: function(data) {
		if (data.answers){
			this.answers().set(data.answers, {parse: true});
			delete data.answers;
		}
		return data;
	}
	
});