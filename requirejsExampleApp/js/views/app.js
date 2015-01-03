// js/views/app.js
define(['jquery',
	'underscore',
	'backbone',
	'collections/todos',
	'views/todo',
	'text!templates/stats.html'], function($, _, Backbone, Todos, TodoView, statsTemplate){
		var AppView = Backbone.View.extend({
				//Instead of generating a new element, bind the exesting skeleton of the app already present in html:
				el : $('#todoapp'),

				//Our template for the stats at the bottom of the app.
				statsTemplate : _.template(statsTemplate),

				// Delegated events for creating new items, and clearing completed ones.
				events: {
					'keypress #new-todo':		'createOnEnter',
					'click #clear-completed':	'clearCompleted',
					'click #toggle-all':		'toggleAllComplete'
				},

				// At initialization we bind to the relevant events on the `Todos`
				// collection, when items are added or changed. Kick things off by
				// loading any preexisting todos that might be saved in *localStorage*.
				initialize: function () {
					this.allCheckbox = this.$('#toggle-all')[0];
					this.$input = this.$('#new-todo');
					this.$footer = this.$('#footer');
					this.$main = this.$('#main');
					this.$todoList = this.$('#todo-list');

					this.listenTo(Todos, 'add', this.addOne);
					this.listenTo(Todos, 'reset', this.addAll);
					this.listenTo(Todos, 'change:completed', this.filterOne);
					this.listenTo(Todos, 'filter', this.filterAll);
					this.listenTo(Todos, 'all', this.render);

					Todos.fetch({reset:true});
				},

				// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {
			var completed = Todos.done().length;
			var remaining = Todos.remaining().length;

			if (Todos.length) {
				this.$main.show();
				this.$footer.show();

				this.$footer.html(this.statsTemplate({
					completed: completed,
					remaining: remaining
				}));

				this.$('#filters li a')
					.removeClass('selected');
			} else {
				this.$main.hide();
				this.$footer.hide();
			}
		},

		// Add a single todo item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		addOne: function (todo) {
			var view = new TodoView({ model: todo });
			this.$todoList.append(view.render().el);
		},

		// Add all items in the **Todos** collection at once.
		addAll: function () {
			this.$todoList.empty();
			Todos.each(this.addOne, this);
		},

		filterOne: function (todo) {
			todo.trigger('visible');
		},

		filterAll: function () {
			Todos.each(this.filterOne, this);                                                 
		},

		// Generate the attributes for a new Todo item.
		newAttributes: function () {
			return {
				title: this.$input.val().trim(),
				order: 1,
				done: false
			};
		},

		// If you hit return in the main input field, create new **Todo** model,
		// persisting it to *localStorage*.
		createOnEnter: function (e) {
			if (e.which !== 13 || !this.$input.val().trim()) {
				return;
			}

			Todos.create(this.newAttributes());
			this.$input.val('');
		},

		// Clear all completed todo items, destroying their models.
		clearCompleted: function () {
			_.invoke(Todos.done(), 'destroy');
			return false;
		},

		toggleAllComplete: function () {

			Todos.each(function (todo) {
				todo.save({
					done: done
				});
			});
		}
	});

	return AppView;
});