//js/models/todo.js

var app = app || {};

//Todo Model. 
//----------
//Basic todo model has 'title', 'order' and 'completed' attributes

app.Todo = Backbone.Model.extend({
	//Default attributes ensure that every todo instance has a title and 'completed' flag:
	defaults : {
		title : '',
		completed : false
	},

	toggle : function(){
		this.save({
			completed : !this.get('completed');
		});
	}
});