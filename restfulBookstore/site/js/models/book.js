// js/models.book.js

//Book model
//-----------

var app = app || {};

app.Book = Backbone.Model.extend({
	defaults : {
		coverImage : 'img/ejs.jpg',
		title : 'No title',
		author : 'Unknown',
		keywords : 'None'
	},

	parse : function(response){
		response.id = response._id;
		return response;
	}
});
