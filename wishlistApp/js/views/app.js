// js/views/app.js
define(['jquery',
	'underscore',
	'backbone',
	'collections/wishes'], function($, _, Backbone, Wishes){
		var AppView = Backbone.View.extend({
				//Instead of generating a new element, bind the exesting skeleton of the app already present in html:
				el : $('#todoapp'),

				//Our template for the stats at the bottom of the app.
				//statsTemplate : _.template(statsTemplate),

				// Delegated events for creating new items, and clearing completed ones.
				events: {
					'keypress #new-wish':		'createOnEnter',
					'click #clear-completed':	'clearCompleted',
					'click #toggle-all':		'toggleAllComplete'
				},

				// At initialization we bind to the relevant events on the `Wishes`
				// collection, when items are added or changed. Kick things off by
				// loading any preexisting todos that might be saved in *localStorage*.
				initialize: function () {
					console.log('initialization of the main view..');
					this.allCheckbox = this.$('#toggle-all')[0];
					this.$input = this.$('#new-wish');
					this.$footer = this.$('#footer');
					this.$main = this.$('#main');
					this.$todoList = this.$('#wish-list');

					console.log('Todo: init listeners for wishes collection updates.')
					this.listenTo(Wishes, 'add', this.addOne);
					this.listenTo(Wishes, 'reset', this.addAll);
					this.listenTo(Wishes, 'change:completed', this.filterOne);
					this.listenTo(Wishes, 'filter', this.filterAll);
					this.listenTo(Wishes, 'all', this.render);

					console.log('Todo: fetch wishes from local store');
					Wishes.fetch({reset:true});
				},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {
			console.log('Todo: refresh stats');
			//var completed = Wishes.granted().length;
			//var remaining = Wishes.remaining().length;


			//if (Wishes.length) {
			//	this.$main.show();
			//		this.$footer.show();

			//	this.$footer.html(this.statsTemplate({
			//		completed: completed,
			//		remaining: remaining
			//	}));

			//	this.$('#filters li a')
			//		.removeClass('selected');
			//} else {
			//	this.$main.hide();
			//	this.$footer.hide();
			//}
		},

		// Add a single todo item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		addOne: function (todo) {
			//var wish = new WishView({ model: wish });
			//this.$wishList.append(wish.render().el);
		},

		// Add all items in the **Wishes** collection at once.
		addAll: function () {
			//this.$wishList.empty();
			//Wishes.each(this.addOne, this);
		},

		filterOne: function (todo) {
			//todo.trigger('visible');
		},

		filterAll: function () {
			//Wishes.each(this.filterOne, this);                                                 
		},

		// Generate the attributes for a new Wish item.
		newAttributes: function () {
			return {
				title: this.$input.val().trim(),
				order: 1,
				done: false
			};
		},

		// If you hit return in the main input field, create new **Wish** model,
		// persisting it to *localStorage*.
		createOnEnter: function (e) {
			console.log('Todo: Create a new wish and save it in the localStorage')
			if (e.which !== 13 || !this.$input.val().trim()) {
				return;
			}

			//Wishes.create(this.newAttributes());
			this.$input.val('');
		},

		// Clear all completed todo items, destroying their models.
		clearCompleted: function () {
			console.log('Todo: clear completed wishes');
			//_.invoke(WIshes.granted(), 'destroy');
			return false;
		},

		toggleAllComplete: function () {
			console.log('Todo: toggle all')
			//Wishes.each(function (wish) {
			//	todo.save({
			//		done: !done
			//	});
			//});
		}
	});

	return AppView;
});