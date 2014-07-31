window.StackClone = {
	Models: {},
	Collections: {},
	Routers: {},
	Views: {},
	initialize: function () {
		new StackClone.Routers.AppRouter();
		Backbone.history.start();
	}
};

Backbone.ModelsComment = Backbone.Model.extend({
	comments: function () {
	    if(!this._comments) {
	      this._comments = new StackClone.Collections.Comments([], { commentable: this });
	    }
	    return this._comments;
	},
	
	parse: function(data) {
		if (data.comments){
			this.comments().set(data.comments, {parse: true});
			delete data.comments;
		}
		return data;
	}
});

// Backbone.CompositeView = Backbone.View.extend({
// 	subviews: {".comment-new": [newCommentView], ".comments": [comment1View, comment2View]}
//
// 	addSubview: function (selector, view) {
// 		var selectorSubviews = this.subviews()[selector] || (this.subviews()[selector] = []);
// 		selectorSubviews.push(view);
//
// 		var $selectorEl = this.$(selector);
// 		$selector.append(subview.$el);
// 	},
//
// 	renderSubviews: function (){
// 		_(this.subviews()).each(function (selectorSubviews, selector) {
// 			var $selectorEl = view.$(selector);
// 			$selectorEl.empty();
//
// 			_(selectorSubviews).each(function (subview) {
// 				$selectorEl.append(subview.render().$el);
// 				subview.delegateEvents();
// 			});
// 		});
// 	},
//
// 	subviews: function () {
// 		if (!this._subviews) {
// 			this._subviews = {};
// 		}
// 		return this._subviews;
// 	}
// });

$(StackClone.initialize);