// js/views/book.js

var app = app || {};

app.BookView = Backbone.View.extend({
	tagName : 'div',
	className : 'bookContainer',
	template : _.template($('#bookTemplate').html()),

	render : function(){
		console.log('rendering a book');
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	}
});