// js/views/todos.js

var app = app || {};

//Todo Item view
//--------------

//The DOM element for a todo item...
app.TodoView = Backbone.View.extend({
	//.. is a list tag
	tagName : 'li',

	//Cache the template function for a single item
	template : _.template( $('#item-template').html()),

	//The dom events specific to a todo item
	events: {
		'dblclick label': 'edit',
		'click .toggle' : 'toggleCompleted',
		'click .destroy' : 'clear',
		'keypress .edit': 'updateOnEnter',
		'blur .edit': 'close'
	},

	// The TodoView listens for changes to its model, rerendering. Since there's
	// a one-to-one correspondence between a **Todo** and a **TodoView** in this
	// app, we set a direct reference on the model for convenience.
	initialize: function() {
	 	this.listenTo(this.model, 'change', this.render);
	 	this.listenTo(this.model, 'destroy', this.remove);
	 	this.listenTo(this.model, 'visible', this.toggleVisible);
	},
	 // Rerenders the titles of the todo item.
	 render: function() {
	 	this.$el.html( this.template( this.model.toJSON() ) );
	 	this.$input = this.$('.edit');
	 	this.$el.toggleClass( 'completed', this.model.get('completed') );
 		this.toggleVisible();
	 	return this;
	 },

	 toggleVisible : function(){
	 	console.log('toggle visible')
	 	this.$el.toggleClass('visible' , this.model.get('completed'));
	 },


	 isHidden : function(){
	 	var isCompleted = this.model.get('completed');
	 	return((!isCompleted && app.TodoFilter === 'completed') ||
	 			(isCompleted && app.TodoFilter === 'active')
	 		);
	 },

	 toggleCompleted : function(){
	 	console.log('toggle');
	 	this.model.toggle();
	 },

	 // Switch this view into `"editing"` mode, displaying the input field.
	 edit: function() {
	 	this.$el.addClass('editing');
	 	this.$input.focus();
	 },
	 // Close the `"editing"` mode, saving changes to the todo.
	 close: function() {
	 	var value = this.$input.val().trim();
	 	if ( value ) {
	 		this.model.save({ title: value });
	 	}
	 	this.$el.removeClass('editing');
	 },
	 // If you hit `enter`, we're through editing the item.
	 updateOnEnter: function( e ) {
	 	if ( e.which === ENTER_KEY ) {
	 		this.close();
	 	}
	 },

	 // Remove the item, destroy the model from
	 // *localStorage* and delete its view.
	 clear: function() {
	 console.log('remove');
	 this.model.destroy();
	 }
});