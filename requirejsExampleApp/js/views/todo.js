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
		},

		// Switch this view into `"editing"` mode, displaying the input field.
		edit: function () {
			this.$el.addClass('editing');
			this.$input.focus();
		},

		// Close the `"editing"` mode, saving changes to the todo.
		close: function () {
			var value = this.$input.val();
			var trimmedValue = value.trim();

			if (trimmedValue) {
				this.model.save({ title: trimmedValue });

				if (value !== trimmedValue) {
					// Model values changes consisting of whitespaces only are not causing change to be triggered
					// Therefore we've to compare untrimmed version with a trimmed one to chech whether anything changed
					// And if yes, we've to trigger change event ourselves
					this.model.trigger('change');
				}
			} else {
				this.clear();
			}

			this.$el.removeClass('editing');
		},

		// If you hit `enter`, we're through editing the item.
		updateOnEnter: function (e) {
			if (e.keyCode === 13) {
				this.close();
			}
		},

		// Remove the item, destroy the model from *localStorage* and delete its view.
		clear: function () {
			this.model.destroy();
		}

	});
});