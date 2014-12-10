// js/collections/todos.js

var app = app || {};

//Todo Collection.
//------------------
// The collection of todos is backed by the local storage instead of a remote server.

var TodoList = Backbone.Collection.extend({
	//Reference to this collection's model:
	model : app.Todo,
	//Save all the todo items under 'todos-backbone' namespace
	localStorage : new Backbone.LocalStorage('todos-backbone'),
	//Filter down the list of todos that are finished
	completed : function(){
		return this.filter(function(todo){
			return todo.get('completed');
		});
	},

	//Filter down the list to only todo items that are still not finished
	remaining : function(){
		return this.without.apply(this, this.completed());
	},

	//Generates next order number for new items
	nextOrder : function(){
		if(!this.length){
			return 1;
		}

		return this.last().get('order') + 1;
	},

	comparator : function(todo){
		return todo.get('order');
	}
});

//Create a global collection of todos.
app.Todos = new TodoList();