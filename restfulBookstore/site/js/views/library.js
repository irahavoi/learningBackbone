// js/views/library,js

var app = app || {};

app.LibraryView = Backbone.View.extend({
	el : '#books',

	initialize : function(){
		this.collection = new app.Library();
		this.collection.fetch({reset : true});
		this.render();
		this.listenTo( this.collection, 'add', this.renderBook );
		this.listenTo( this.collection, 'reset', this.render );
	},

	events : {
		'click #add' : 'addBook'
	},

	addBook : function( e ){
		console.log('adding a book');
		e.preventDefault();

		var formData = {};

		$( '#addBook div' ).children( 'input' ).each( function( i, el ) {
			if( $( el ).val() != '' ){
				formData[ el.id ] = $( el ).val();
			}
		});

		var reader = new FileReader();
		var that = this;

		reader.onload = function() {
             formData.coverImage = reader.result;
             that.collection.add( new app.Book( formData ) );
        }
        reader.readAsDataURL($("#coverImage")[0].files[0]);
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