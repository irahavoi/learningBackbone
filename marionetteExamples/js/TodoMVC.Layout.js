TodoMVC.module('Layout', function(Layout, App, Backbone, Marionette, $, _){
	//Layout header view
	//---------------------------------------------------------------------
	Layout.Header = Marionette.ItemView.extend({
		template : '#template-header',
		// Ui bindings create cached attributes that point to jQuery selected objects
		ui : {
			input : '#new-todo'
		},

		events : {
			'keypress #new-todo' : 'onInputKeyPress'
		},

		onInputKeyPress : function(evt){
			console.log('onInputKeyPress event captured: ' + evt.which)
			var ENTER_KEY = 13;
			var todoText = this.ui.input.val().trim();

			if(evt.which === ENTER_KEY && todoText){
				this.collection.create({
					title : todoText
				});
				this.ui.input.val('');
			}
		}
	});

	//Layout footer view
	//---------------------------------------------------------------------
	Layout.Footer = Marionette.ItemView.extend({
		template : '#template-footer',
		ui : {
			count : '#todo-count strong',
			filters : '#filters a'
		},

		events : {
			'click #clear-completed' : 'onClearClick'
		},

		initialize : function(){
			console.log('footer init');
			this.listenTo(App.vent, 'todoList:filter', this.updateFilterSelection);
			this.listenTo(this.collection, 'all', this.updateCount);
		},

		onRender : function(){
			this.updateCount();
		},

		updateCount : function(){
			console.log('Updating count');
			var count = this.collection.getActive().length
			this.ui.count.html(count);

			if(count === 0){
				this.$el.parent().hide();
			} else{
				this.$el.parent().show();
			}
		},

		updateFilterSelection : function(filter){
			console.log('Updating filter selection');
			this.ui.filters
				.removeClass('selected')
				.filter('[href="#' + filter + '"]')
				.addClass('selected');
		},

		onClearClick : function(){
			console.log('onClearClick event captured');
			var completed = this.collection.getCompleted();
			completed.forEach(function(todo){
				todo.destroy();
			})
		}


	});
});