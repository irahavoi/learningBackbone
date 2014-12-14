// js/views/library,js

var app = app || {};

app.LibraryView = Backbone.View.extend({
	el : '#books',

	initialize : function(initialBooks){
		this.collection = new app.Library(initialBooks);
		this.render();
	},

	render : function(){
		console.log('rendering a collection');
		this.collection.each(function( item ){
			this.renderBook( item );
		} , this);
	},

	//Render a book by creating a a Bookview and appending the
	//element it renders to the library's element
	renderBook : function( item ){
		console.log('rendering a book');
		var bookView = new app.BookView({
			model : item
		});

		console.log(bookView);

		this.$el.append( bookView.render().el );
	}
});