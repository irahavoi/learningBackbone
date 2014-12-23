//TodoList Router
//-----------------------------------------
//
//Handle routes to show active versus complete todo items

TodoList.Router = Marionette.AppRouter.extend({
	appRoutes : {
		'*filter' : 'filterItems'
	}
});

//TodoList Controller:
//-------------------------------
//Control the workflow and logic that exists at the application
//level, above the implementation details of views, if there are any

TodoList.Controller = function(){
	this.todoList = new App.Todos.TodoList();
}

_.extend(TodoList.Controller.prototype, {
	//Start the app by showing the appropriate views
	//and fetching the list of todo items, if there are any
	start : function(){
		this.showHeader(this.todoList);
		this.showFooter(this.todoList);
		this.showTodoList(this.todoList);

		this.todoList.fetch();
	},

	showHeader : function(todoList){
		var header = new App.Layout.Header({
			collection : todoList
		});

		App.header.show(header);
	},

	showFooter : function(todoList){
		var footer = new App.Layout.Footer({
			collection : todoList
		});

		App.footer.show(footer);
	},

	showTodoList : function(todoList){
		App.main.show(new TodoList.Views.ListView({
			collection : todoList
		}));
	},

	// Set the filter to show complete or all items
	filterItems: function(filter){
		App.vent.trigger('todoList:filter', filter.trim() || '');
	}
});


//TodoList initializer:
//-------------------------------------
//
//Get the TodoList up and running

TodoList.addInitializer(function(){
	var controller = new TodoList.Controller();
	new TodoList.Router({
		controller : controller
	});

	controller.start();
});