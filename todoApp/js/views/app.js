// js/views/app.js

var app = app || {};

//The application
//----------------

//Top-level view
app.AppView = Backbone.View.extend({
	//bind the view to the existing element 
	el : '#todoapp',
	//Statistics template:
	statsTemplate : _.template($('#stats-template').html()),

	initialize : function(){
		this.allCheckbox = this.$('#toggle-all')[0];
		this.$input = this.$('#new-todo');
		this.$footer = this.$('#footer');
		this.$main = this.$('#main');
		this.listenTo(app.Todos, 'add', this.addOne);
		this.listenTo(app.Todos, 'reset', this.addAll);
	},

	// Add a single todo item to the list by creating a view for it, and
	// appending its element to the `<ul>`.
	addOne: function( todo ) {
		var view = new app.TodoView({ model: todo });
		$('#todo-list').append( view.render().el );
	},
	// Add all items in the **Todos** collection at once.
	addAll: function() {
		this.$('#todo-list').html('');
		app.Todos.each(this.addOne, this);
	}
});