define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/todos.html'
	], function($, _, Backbone, todosTemplate){
	var TodoView = Backbone.View.extend({
		//.... is a list tag.
		tagName : 'li',

		//Cache the template function for a single item:
		template : _.template(todosTemplate),

		//DOM events specific to an item:
		events : {
			'click .check' : 'toggleDone',
			'dblclick div.todo-content' : 'edit',
			'click span.todo-destroy' : 'clear',
			'keypress .todo-input' : 'updateOnEnter'
		},

		initialize : function(){
			console.log('initializing..');
			this.model.on('change', this.render, this);
			this.model.view = this;
		},

		//Render the contents of the todo item:
		render  : function(){
			console.log('rendering..');
			this.$el.html(this.template(this.model.toJSON()));
			this.setContent();
			return this;
		},

		//Use jQuery.text to set the content of the todo item:
		setContent : function(){
			var content = this.model.get('content');
			this.$('.todo-content').text(content);
			this.input = this.$('todo-input');
			this.input.on('blur', this.close);
			this.input.val(content);
		}

	});
});