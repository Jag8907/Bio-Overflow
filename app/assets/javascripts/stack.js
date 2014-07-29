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

// Backbone.CompositeView = Backbone.View.extend({
// 	subviews: {".comment-new": [newCommentView], ".comments": [comment1View, comment2View]}
//
// 	addSubview: function (selector, view) {
// 		var selectorSubviews = this.subviews()[selector] || (this.subviews()[selector] = []);
// 		selectorSubviews.push(view);
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