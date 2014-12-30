define(['underscore', 'backbone'], function(_, Backbone) {
	var myModel = Backbone.Model.extend({
// Default attributes
defaults: {
	content: 'hello world',
},
// A dummy initialization method
initialize: function() {
},
clear: function() {
	this.destroy();
	this.view.remove();
}
});
	return myModel;
});