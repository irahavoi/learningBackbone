// Define a simple model and collection modeling a store and
// list of stores
var Store = Backbone.Model.extend({});
var StoreList = Backbone.Collection.extend({
  model: Store,
  comparator: function( Store ) { return Store.get('name') }
});
// Define a group for our tests
module( 'StoreList sanity check', {
  setup: function() {
    this.list = new StoreList;
    this.list.add(new Store({ name: 'Costcutter' }));
    this.list.add(new Store({ name: 'Target' }));
    this.list.add(new Store({ name: 'Walmart' }));
    this.list.add(new Store({ name: 'Barnes & Noble' }));
  },
  teardown: function() {
    window.errors = null;
  }
});
// Test the order of items added
test( 'test ordering', function() {
  expect( 1 );
  var expected = ['Barnes & Noble', 'Costcutter', 'Target', 'Walmart'];
  var actual = this.list.pluck('name');
  deepEqual( actual, expected, 'is maintained by comparator' );
});