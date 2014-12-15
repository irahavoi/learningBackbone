// js/views/book.js

var app = app || {};

app.BookView = Backbone.View.extend({
	tagName : 'div',
	className : 'bookContainer',
	template : _.template($('#bookTemplate').html()),

	events  : {
		'click .delete' : 'deleteBook'
	},

	render : function(){
		console.log('rendering a book');
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	}, 

	deleteBook : function(){
		console.log('deleting a book..');
		this.model.destroy(); //delete model
		this.remove(); //remove view
	}

});