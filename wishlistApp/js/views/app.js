// js/views/app.js
define(['jquery',
	'underscore',
	'backbone',
	'collections/wishes',
	'views/wish',
	'text!templates/stats.html'], function($, _, Backbone, Wishes, WishView, statsTemplate){
		var AppView = Backbone.View.extend({
				//Instead of generating a new element, bind the exesting skeleton of the app already present in html:
				el : $('#wishlistapp'),

				//Our template for the stats at the bottom of the app.
				statsTemplate : _.template(statsTemplate),

				// Delegated events for creating new items, and clearing completed ones.
				events: {
					'keypress #new-wish':		'createOnEnter',
					'click #clear-granted':	'clearGranted',
					'click #toggle-all':		'toggleAllComplete'
				},

				// At initialization we bind to the relevant events on the `Wishes`
				// collection, when items are added or changed. Kick things off by
				// loading any preexisting todos that might be saved in *localStorage*.
				initialize: function () {
					console.log('initialization of the main view..');
					this.allCheckbox = this.$('#toggle-all')[0];
					this.$input = this.$('#new-wish');
					this.$footer = this.$('#wish-stats');
					this.$main = this.$('#main');
					this.$wishList = this.$('#wish-list');

					console.log('Todo: init listeners for wishes collection updates.')
					this.listenTo(Wishes, 'add', this.addOne);
					this.listenTo(Wishes, 'reset', this.addAll);
					this.listenTo(Wishes, 'change:completed', this.filterOne);
					this.listenTo(Wishes, 'filter', this.filterAll);
					this.listenTo(Wishes, 'all', this.render);

					Wishes.fetch();
				},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {
			console.log('Rendering the main view');
			var granted = Wishes.granted().length;
			var remaining = Wishes.remaining().length;


			if (Wishes.length) {
				this.$main.show();
					this.$footer.show();

				this.$footer.html(this.statsTemplate({
					granted: granted,
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
		addOne: function (wish) {
			console.log('adding a wish..');
			var wishView = new WishView({ model: wish });
			this.$wishList.append(wishView.render().el);
		},

		// Add all items in the **Wishes** collection at once.
		addAll: function () {
			this.$wishList.empty();
			Wishes.each(this.addOne, this);
		},

		filterOne: function (wish) {
			wish.trigger('visible');
		},

		filterAll: function () {
			Wishes.each(this.filterOne, this);                                                 
		},

		// Generate the attributes for a new Wish item.
		newAttributes: function () {
			return {
				title: this.$input.val().trim(),
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

			Wishes.create(this.newAttributes());
			this.$input.val('');
		},

		// Clear all completed todo items, destroying their models.
		clearGranted: function () {
			console.log('Clear granted wishes');
			_.invoke(Wishes.granted(), 'clear');
			return false;
		},

		toggleAllComplete: function () {
			console.log('Todo: toggle all')
			Wishes.each(function (wish) {
				wish.save({
					done: !done
				});
			});
		}
	});

	return AppView;
});